"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const API_BASE =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://app.royalhorizonmw.com";
const ENDPOINT = `${API_BASE}/api/public/pageview`;
const SESSION_KEY = "rh_session_id";

function getSessionId(): string {
  try {
    let id = sessionStorage.getItem(SESSION_KEY);
    if (!id) {
      id = crypto.randomUUID();
      sessionStorage.setItem(SESSION_KEY, id);
    }
    return id;
  } catch {
    return "no-storage";
  }
}

export function PageviewTracker() {
  const pathname = usePathname();

  useEffect(() => {
    fetch(ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        path: pathname,
        referrer: document.referrer || null,
        sessionId: getSessionId(),
      }),
      keepalive: true,
    }).catch(() => {});
  }, [pathname]);

  return null;
}
