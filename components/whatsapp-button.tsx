"use client";

import { usePathname } from "next/navigation";
import { waHref } from "@/lib/whatsapp";
import { track } from "@/lib/analytics";

const tips: Record<string, string> = {
  "/services/fermentation-scale-up-contamination-troubleshooting": "Batch trouble? Send the organism and the volume.",
  "/services/biostimulant-biopesticide-registration-india": "Tell us which registration is stuck.",
  "/contact": "Prefer the form? It is on this page.",
};

export function WhatsAppButton() {
  const pathname = usePathname() || "/";
  const label = pathname;
  const tip = tips[pathname] ?? "Message the scientist directly.";

  return (
    <a
      href={waHref("Hi JK Advisory team, I would like to talk about a biologicals bottleneck.", label)}
      onClick={() => track("whatsapp_click", { page: label })}
      className="group fixed bottom-6 right-6 z-40 hidden items-center gap-3 md:flex"
    >
      <span className="max-w-64 rounded-2xl bg-[var(--ink)] px-3 py-2 text-sm text-[var(--paper)] opacity-0 shadow transition group-hover:opacity-100 group-focus-visible:opacity-100">
        {tip}
      </span>
      <span className="inline-flex min-h-12 items-center rounded-full bg-[var(--whatsapp)] px-4 font-semibold text-[#0e1a14]">
        WhatsApp
      </span>
    </a>
  );
}
