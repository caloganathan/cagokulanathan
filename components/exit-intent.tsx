"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export function ExitIntent() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const desktop = window.matchMedia("(pointer: fine) and (min-width: 1024px)").matches;
    if (!desktop || sessionStorage.getItem("jk-exit") === "1") return;
    const onOut = (event: MouseEvent) => {
      if (event.clientY > 8) return;
      sessionStorage.setItem("jk-exit", "1");
      setOpen(true);
      document.removeEventListener("mouseout", onOut);
    };
    document.addEventListener("mouseout", onOut);
    return () => document.removeEventListener("mouseout", onOut);
  }, []);
  if (!open) return null;
  return (
    <div className="fixed bottom-6 left-6 z-50 hidden max-w-sm rounded-3xl bg-[var(--surface)] p-5 shadow-[var(--shadow)] ring-1 ring-[var(--line)] lg:block">
      <p className="font-serif text-lg md:text-xl">Before you go</p>
      <p className="mt-2 text-sm text-[var(--muted)]">
        The Schedule VI dossier checklist is a one-page list. It is emailed only after you consent. It is not an approval.
      </p>
      <div className="mt-4 flex gap-2">
        <Link href="/resources/schedule-vi-dossier-checklist" className="inline-flex min-h-11 items-center rounded-full bg-[var(--forest)] px-4 font-semibold text-white no-underline">
          Get the checklist
        </Link>
        <button className="min-h-11 px-3" onClick={() => setOpen(false)}>
          Dismiss
        </button>
      </div>
    </div>
  );
}
