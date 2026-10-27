"use client";

import { useState } from "react";
import { segments } from "@/content/segments";
import { track } from "@/lib/analytics";
import { waHref } from "@/lib/whatsapp";
import { TrackedLink } from "@/components/tracked-link";
import Link from "next/link";

export function SegmentSelector({ pageTitle }: { pageTitle: string }) {
  const [id, setId] = useState(segments[0].id);
  const active = segments.find((segment) => segment.id === id) ?? segments[0];

  return (
    <div>
      <div className="flex gap-2 overflow-x-auto pb-2" role="tablist" aria-label="I am a">
        {segments.map((segment) => {
          const selected = segment.id === active.id;
          return (
            <button
              key={segment.id}
              role="tab"
              aria-selected={selected}
              className={`min-h-11 shrink-0 rounded-full px-4 text-sm font-semibold ${selected ? "bg-[var(--forest)] text-white" : "bg-[var(--surface)] text-[var(--ink)] ring-1 ring-[var(--line)]"}`}
              onClick={() => {
                setId(segment.id);
                track("segment_select", { segment: segment.id, page: pageTitle });
              }}
            >
              {segment.label}
            </button>
          );
        })}
      </div>
      <div className="mt-4 rounded-3xl bg-[var(--surface)] p-6 shadow-[var(--shadow)] ring-1 ring-[var(--line)]" role="tabpanel">
        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[var(--leaf)]">{active.trigger}</p>
        <p className="mt-3 max-w-[62ch] text-[var(--muted)]">{active.panel}</p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link href={active.href} className="inline-flex min-h-11 items-center rounded-full bg-[var(--forest)] px-4 font-semibold text-white no-underline">
            Open the service
          </Link>
          <TrackedLink
            href={waHref(active.prefill, pageTitle)}
            event="whatsapp_click"
            params={{ segment: active.id, page: pageTitle }}
            className="inline-flex min-h-11 items-center rounded-full bg-[var(--whatsapp)] px-4 font-semibold text-[#0e1a14] no-underline"
          >
            WhatsApp this brief
          </TrackedLink>
        </div>
      </div>
    </div>
  );
}
