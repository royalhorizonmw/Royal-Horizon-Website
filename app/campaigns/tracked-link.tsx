"use client";
import type { ReactNode } from "react";
export function CampaignLink({
  href,
  slug,
  event,
  children,
  className,
  target,
}: {
  href: string;
  slug: string;
  event: "open" | "share_whatsapp" | "share_facebook" | "flyer";
  children: ReactNode;
  className?: string;
  target?: string;
}) {
  return (
    <a
      href={href}
      target={target}
      rel={target ? "noreferrer" : undefined}
      className={className}
      onClick={() => {
        if (process.env.NODE_ENV === "production")
          fetch("https://app.royalhorizonmw.com/api/public/campaign-event", {
            method: "POST",
            headers: { "Content-Type": "text/plain" },
            body: JSON.stringify({ slug, event }),
            keepalive: true,
          }).catch(() => {});
      }}
    >
      {children}
    </a>
  );
}
