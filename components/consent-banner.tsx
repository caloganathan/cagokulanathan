"use client";

import { useSyncExternalStore } from "react";
import Script from "next/script";
import { site } from "@/content/site";

const listeners = new Set<() => void>();

function subscribe(callback: () => void) {
  listeners.add(callback);
  return () => listeners.delete(callback);
}

function snapshot() {
  return localStorage.getItem("jk-consent");
}

function setConsent(value: "granted" | "denied") {
  localStorage.setItem("jk-consent", value);
  listeners.forEach((listener) => listener());
}

export function ConsentBanner() {
  const choice = useSyncExternalStore(subscribe, snapshot, () => null);
  const gaId = /^G-[A-Z0-9]+$/.test(site.ga4Id) ? site.ga4Id : "";

  return (
    <>
      {choice === "granted" && gaId ? (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
          <Script id="ga4" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;gtag('js',new Date());gtag('config','${gaId}');`}
          </Script>
        </>
      ) : null}
      {choice === null ? (
        <div className="fixed inset-x-3 bottom-20 z-50 rounded-3xl bg-[var(--ink)] p-4 text-[var(--paper)] shadow md:bottom-6 md:left-6 md:right-auto md:max-w-md">
          <p className="font-semibold">Analytics, only if you agree</p>
          <p className="mt-1 text-sm text-[#d5e0d9]">
            I use a privacy notice under the Digital Personal Data Protection Act, 2023. Analytics runs only after you accept. The choice is stored on this browser.
          </p>
          <div className="mt-3 flex gap-2">
            <button className="min-h-11 rounded-full bg-[var(--paper)] px-4 font-semibold text-[var(--ink)]" onClick={() => setConsent("granted")}>
              Accept analytics
            </button>
            <button className="min-h-11 rounded-full px-4 font-semibold ring-1 ring-[#d5e0d9]" onClick={() => setConsent("denied")}>
              Reject
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}
