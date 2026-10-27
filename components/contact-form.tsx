"use client";

import { useState, useSyncExternalStore } from "react";
import { segments } from "@/content/segments";
import { track } from "@/lib/analytics";
import { site } from "@/content/site";

const states = [
  "Tamil Nadu",
  "Kerala",
  "Karnataka",
  "Andhra Pradesh",
  "Telangana",
  "Maharashtra",
  "Gujarat",
  "Other Indian state",
  "Outside India",
];

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [message, setMessage] = useState("");
  const prefill = useSyncExternalStore(
    () => () => {},
    () => new URLSearchParams(window.location.search).get("prefill") ?? "",
    () => "",
  );
  const [problem, setProblem] = useState<string | null>(null);
  const problemValue = problem ?? prefill;

  return (
    <form
      className="grid gap-4"
      onSubmit={async (event) => {
        event.preventDefault();
        setStatus("sending");
        const form = new FormData(event.currentTarget);
        const payload = Object.fromEntries(form.entries());
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        const body = (await response.json()) as { message?: string };
        if (!response.ok) {
          setStatus("error");
          setMessage(body.message || "The message could not be sent.");
          return;
        }
        setStatus("sent");
        setMessage(body.message || "Received.");
        track("form_submit", { segment: String(payload.segment || "") });
        event.currentTarget.reset();
      }}
    >
      <input className="hidden" tabIndex={-1} autoComplete="off" name="website" aria-hidden="true" />
      <label className="grid gap-1 text-sm">
        Name
        <input required name="name" className="min-h-11 rounded-xl border border-[var(--line)] bg-[var(--paper)] px-3" />
      </label>
      <label className="grid gap-1 text-sm">
        Email
        <input required type="email" name="email" className="min-h-11 rounded-xl border border-[var(--line)] bg-[var(--paper)] px-3" />
      </label>
      <label className="grid gap-1 text-sm">
        Company
        <input required name="company" className="min-h-11 rounded-xl border border-[var(--line)] bg-[var(--paper)] px-3" />
      </label>
      <label className="grid gap-1 text-sm">
        Role
        <input required name="role" className="min-h-11 rounded-xl border border-[var(--line)] bg-[var(--paper)] px-3" />
      </label>
      <label className="grid gap-1 text-sm">
        I am a
        <select name="segment" className="min-h-11 rounded-xl border border-[var(--line)] bg-[var(--paper)] px-3" defaultValue={segments[0].id}>
          {segments.map((segment) => (
            <option key={segment.id} value={segment.id}>
              {segment.label}
            </option>
          ))}
        </select>
      </label>
      <label className="grid gap-1 text-sm">
        State
        <select name="state" className="min-h-11 rounded-xl border border-[var(--line)] bg-[var(--paper)] px-3" defaultValue="Tamil Nadu">
          {states.map((state) => (
            <option key={state}>{state}</option>
          ))}
        </select>
      </label>
      <label className="grid gap-1 text-sm">
        Preferred channel
        <select name="channel" className="min-h-11 rounded-xl border border-[var(--line)] bg-[var(--paper)] px-3" defaultValue="email">
          <option value="whatsapp">WhatsApp</option>
          <option value="email">Email</option>
          <option value="call">Call</option>
        </select>
      </label>
      <label className="grid gap-1 text-sm">
        The bottleneck
        <textarea required name="problem" rows={5} value={problemValue} onChange={(event) => setProblem(event.target.value)} className="rounded-xl border border-[var(--line)] bg-[var(--paper)] px-3 py-2" />
      </label>
      {site.turnstileSiteKey ? <div className="cf-turnstile" data-sitekey={site.turnstileSiteKey} /> : null}
      <input type="hidden" name="turnstileToken" value="" />
      <label className="flex items-start gap-3 text-sm">
        <input required type="checkbox" name="consent" className="mt-1 size-4" />
        <span>
          I consent to JK Advisory using my name, company, role, state and the problem I describe to reply to this enquiry. The purpose is to respond to you. I can withdraw consent by writing to the contact on the privacy notice.
        </span>
      </label>
      <button className="min-h-11 rounded-full bg-[var(--forest)] px-4 font-semibold text-white" disabled={status === "sending"}>
        {status === "sending" ? "Sending" : "Send to Dr. Gokul"}
      </button>
      {message ? <p role="status">{message}</p> : null}
    </form>
  );
}
