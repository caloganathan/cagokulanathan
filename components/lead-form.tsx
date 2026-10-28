"use client";

import { useState } from "react";
import { track } from "@/lib/analytics";

export function LeadForm({ magnet }: { magnet: string }) {
  const [message, setMessage] = useState("");
  return (
    <form
      className="grid max-w-xl gap-3"
      onSubmit={async (event) => {
        event.preventDefault();
        const form = new FormData(event.currentTarget);
        const payload = Object.fromEntries(form.entries());
        const response = await fetch("/api/lead-magnet", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...payload, magnet }),
        });
        if (!response.ok) {
          const body = (await response.json()) as { message?: string };
          setMessage(body.message || "The checklist could not be prepared.");
          return;
        }
        const blob = await response.blob();
        const url = URL.createObjectURL(blob);
        const anchor = document.createElement("a");
        anchor.href = url;
        anchor.download = response.headers.get("Content-Disposition")?.match(/filename="(.+)"/)?.[1] || "checklist.pdf";
        anchor.click();
        URL.revokeObjectURL(url);
        track("leadmagnet_download", { tool: magnet });
        setMessage("The checklist has downloaded. We also try to email a copy when mail delivery is configured.");
      }}
    >
      <input className="hidden" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      <label className="grid gap-1 text-sm">
        Work email
        <input required type="email" name="email" className="min-h-11 rounded-xl border border-[var(--line)] bg-[var(--paper)] px-3" />
      </label>
      <label className="grid gap-1 text-sm">
        Name
        <input required name="name" className="min-h-11 rounded-xl border border-[var(--line)] bg-[var(--paper)] px-3" />
      </label>
      <label className="flex items-start gap-3 text-sm">
        <input required type="checkbox" name="consent" className="mt-1 size-4" />
        <span>I consent to JK Advisory emailing this checklist and a single follow-up about the topic. I can ask for the address to be deleted.</span>
      </label>
      <button className="min-h-11 rounded-full bg-[var(--forest)] px-4 font-semibold text-white">Download the checklist</button>
      {message ? <p role="status">{message}</p> : null}
    </form>
  );
}
