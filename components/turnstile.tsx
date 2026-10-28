"use client";

import Script from "next/script";

/** Cloudflare Turnstile widget. It injects a `cf-turnstile-response` field into the surrounding form. */
export function Turnstile({ siteKey }: { siteKey: string }) {
  if (!siteKey) return null;
  return (
    <>
      <Script src="https://challenges.cloudflare.com/turnstile/v0/api.js" strategy="afterInteractive" />
      <div className="cf-turnstile" data-sitekey={siteKey} />
    </>
  );
}
