"use client";

import { Calendar, MessageCircle, Phone } from "lucide-react";
import { site } from "@/content/site";
import { waHref, whatsappConfigured } from "@/lib/whatsapp";
import { track } from "@/lib/analytics";

export function StickyMobileBar() {
  const callHref = whatsappConfigured() ? `tel:+${site.whatsappE164.replace(/\D/g, "")}` : "/contact";
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-[var(--line)] bg-[var(--surface)] p-2 md:hidden">
      <div className="grid grid-cols-3 gap-2">
        <a
          className="inline-flex min-h-11 items-center justify-center gap-1 rounded-full bg-[var(--whatsapp)] text-sm font-semibold text-[#0e1a14] no-underline"
          href={waHref("Hi Dr. Gokul, I would like to talk.", "Mobile bar")}
          onClick={() => track("whatsapp_click", { page: "Mobile bar" })}
        >
          <MessageCircle className="size-4" aria-hidden /> WhatsApp
        </a>
        <a
          className="inline-flex min-h-11 items-center justify-center gap-1 rounded-full bg-[var(--mist)] text-sm font-semibold no-underline"
          href={callHref}
          onClick={() => track("call_click", { page: "Mobile bar" })}
        >
          <Phone className="size-4" aria-hidden /> {whatsappConfigured() ? "Call" : "Contact"}
        </a>
        <a
          className="inline-flex min-h-11 items-center justify-center gap-1 rounded-full bg-[var(--forest)] text-sm font-semibold text-white no-underline"
          href={site.calendlyUrl || "/contact"}
          onClick={() => track("booking_open", { page: "Mobile bar" })}
        >
          <Calendar className="size-4" aria-hidden /> Book
        </a>
      </div>
    </div>
  );
}
