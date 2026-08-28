import { NextResponse } from "next/server";

const divisions = new Set([
  "Medical & Laboratory",
  "ICT & Hardware",
  "Solar & Renewable",
  "General Supply",
  "Industrial Gear",
  "Facilities Support",
]);

const rateLimit = new Map<string, { count: number; resetAt: number }>();
const WINDOW_MS = 15 * 60 * 1000;
const MAX_REQUESTS = 5;

function clean(value: unknown, maxLength: number) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

function isAllowedOrigin(request: Request) {
  const origin = request.headers.get("origin");
  if (!origin) return false;

  const host = request.headers.get("x-forwarded-host") || request.headers.get("host");
  try {
    return Boolean(host && new URL(origin).host === host);
  } catch {
    return false;
  }
}

function isRateLimited(ip: string) {
  const now = Date.now();
  const current = rateLimit.get(ip);

  if (!current || current.resetAt <= now) {
    rateLimit.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }

  current.count += 1;
  return current.count > MAX_REQUESTS;
}

export async function POST(request: Request) {
  if (!isAllowedOrigin(request)) {
    return NextResponse.json({ message: "Request origin was not accepted." }, { status: 403 });
  }

  const contentLength = Number(request.headers.get("content-length") || 0);
  if (contentLength > 12_000) {
    return NextResponse.json({ message: "Request is too large." }, { status: 413 });
  }

  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (isRateLimited(ip)) {
    return NextResponse.json({ message: "Too many requests. Please try again later." }, { status: 429 });
  }

  let payload: Record<string, unknown>;
  try {
    payload = (await request.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ message: "Invalid request." }, { status: 400 });
  }

  if (clean(payload.website, 200)) {
    return NextResponse.json({ message: "Request received." });
  }

  const name = clean(payload.name, 120);
  const email = clean(payload.email, 160).toLowerCase();
  const phone = clean(payload.phone, 30);
  const division = clean(payload.division, 80);
  const requirements = clean(payload.requirements, 4000);

  if (
    name.length < 2 ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
    phone.length < 7 ||
    !divisions.has(division) ||
    requirements.length < 10
  ) {
    return NextResponse.json({ message: "Please check all fields and try again." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.QUOTE_FROM_EMAIL;
  const to = process.env.QUOTE_TO_EMAIL || "royalhorizonmw@gmail.com";

  if (!apiKey || !from) {
    return NextResponse.json(
      { message: "Online quotation requests are temporarily unavailable." },
      { status: 503 },
    );
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: email,
      subject: `Website quotation request — ${division}`,
      text: [
        `Name / organisation: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone}`,
        `Division: ${division}`,
        "",
        "Specifications and quantities:",
        requirements,
      ].join("\n"),
    }),
  });

  if (!response.ok) {
    console.error("Quote email provider rejected the request", response.status);
    return NextResponse.json({ message: "We could not deliver your request." }, { status: 502 });
  }

  return NextResponse.json({ message: "Request sent securely." });
}
