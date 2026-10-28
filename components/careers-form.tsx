"use client";

import { useState, useSyncExternalStore } from "react";
import { Turnstile } from "@/components/turnstile";
import { careerTracks } from "@/content/careers";
import { site } from "@/content/site";
import { track } from "@/lib/analytics";
import { careerInterests } from "@/lib/validators";

const field =
  "min-h-11 w-full rounded-xl border border-transparent bg-[#f7f5ef] px-3 text-[#0e1a14] placeholder:text-[#5d6b63] focus-visible:outline-[#f7c948]";
const label = "grid gap-1 text-sm font-medium text-[#f7f5ef]";

export function CareersForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [message, setMessage] = useState("");
  const initial = useSyncExternalStore(
    () => () => {},
    () => new URLSearchParams(window.location.search).get("track") ?? "",
    () => "",
  );
  const [picked, setPicked] = useState<string | null>(null);
  const selected = picked ?? (careerTracks.some((item) => item.id === initial) ? initial : "junior");

  if (status === "sent") {
    return (
      <div role="status" className="rounded-3xl bg-[var(--forest)] p-8 text-[#f7f5ef]">
        <p className="font-serif text-xl md:text-2xl">Thank you — we have it.</p>
        <p className="mt-3 text-[#d7e6de]">{message}</p>
      </div>
    );
  }

  return (
    <form
      className="grid gap-5"
      onSubmit={async (event) => {
        event.preventDefault();
        setStatus("sending");
        const form = new FormData(event.currentTarget);
        const payload: Record<string, unknown> = Object.fromEntries(form.entries());
        payload.interests = form.getAll("interests");
        payload.turnstileToken = String(form.get("cf-turnstile-response") ?? "");
        try {
          const response = await fetch("/api/careers", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
          });
          const body = (await response.json()) as { message?: string };
          if (!response.ok) {
            setStatus("error");
            setMessage(body.message || "The application could not be sent.");
            return;
          }
          setStatus("sent");
          setMessage(body.message || "Received.");
          track("form_submit", { segment: `careers-${String(payload.track)}` });
        } catch {
          setStatus("error");
          setMessage("The application could not be sent. Please check your connection and try again.");
        }
      }}
    >
      <input className="hidden" tabIndex={-1} autoComplete="off" name="website" aria-hidden="true" />

      <fieldset className="grid gap-2">
        <legend className="text-sm font-medium text-[#f7f5ef]">I am a…</legend>
        <div className="grid gap-2 sm:grid-cols-2">
          {careerTracks.map((item) => (
            <label
              key={item.id}
              className={`flex min-h-11 cursor-pointer items-center gap-3 rounded-2xl border px-3 py-2 text-sm font-semibold transition ${
                selected === item.id
                  ? "border-[#f7c948] bg-[#f7f5ef] text-[#0e1a14]"
                  : "border-[#3f6b57] text-[#f7f5ef] hover:border-[#f7c948]"
              }`}
            >
              <input
                type="radio"
                name="track"
                value={item.id}
                checked={selected === item.id}
                onChange={() => setPicked(item.id)}
                className="size-4 accent-[#14532d]"
              />
              {item.label}
            </label>
          ))}
        </div>
      </fieldset>

      <div className="grid gap-4 md:grid-cols-2">
        <label className={label}>
          Full name
          <input required name="name" autoComplete="name" className={field} />
        </label>
        <label className={label}>
          Email
          <input required type="email" name="email" autoComplete="email" className={field} />
        </label>
        <label className={label}>
          Mobile / WhatsApp (optional)
          <input name="phone" type="tel" autoComplete="tel" className={field} />
        </label>
        <label className={label}>
          City and state
          <input required name="location" autoComplete="address-level2" placeholder="e.g. Coimbatore, Tamil Nadu" className={field} />
        </label>
      </div>

      <label className={label}>
        Highest qualification and subject
        <input required name="qualification" placeholder="e.g. M.Sc. Microbiology · or: Class 12, runs a vermicompost unit" className={field} />
      </label>

      <fieldset className="grid gap-2">
        <legend className="text-sm font-medium text-[#f7f5ef]">What pulls you in? (choose at least one)</legend>
        <div className="grid gap-2 sm:grid-cols-2">
          {careerInterests.map((item) => (
            <label key={item} className="flex min-h-11 items-center gap-3 rounded-2xl border border-[#3f6b57] px-3 py-2 text-sm text-[#f7f5ef]">
              <input type="checkbox" name="interests" value={item} className="size-4 accent-[#f7c948]" />
              {item}
            </label>
          ))}
        </div>
      </fieldset>

      <div className="grid gap-4 md:grid-cols-2">
        <label className={label}>
          When can you start?
          <select name="availability" defaultValue="flexible" className={field}>
            <option value="now">Immediately</option>
            <option value="1-3-months">Within 1–3 months</option>
            <option value="after-studies">After my studies</option>
            <option value="flexible">Flexible</option>
          </select>
        </label>
        <label className={label}>
          Preferred way of working
          <select name="mode" defaultValue="open" className={field}>
            <option value="coimbatore">On-site in Coimbatore</option>
            <option value="field-travel">Field and plant visits</option>
            <option value="remote">Remote</option>
            <option value="open">Open to any</option>
          </select>
        </label>
      </div>

      <label className={label}>
        Link to your CV, LinkedIn or work (optional)
        <input name="link" type="url" placeholder="https://" className={field} />
      </label>

      <label className={label}>
        Why this field, and why you?
        <textarea
          required
          name="message"
          rows={5}
          minLength={40}
          placeholder="What have you grown, cultured, built or observed? What would you like to learn from us?"
          className="w-full rounded-xl border border-transparent bg-[#f7f5ef] px-3 py-2 text-[#0e1a14] placeholder:text-[#5d6b63]"
        />
      </label>

      <Turnstile siteKey={site.turnstileSiteKey} />

      <label className="flex items-start gap-3 text-sm text-[#f7f5ef]">
        <input required type="checkbox" name="adult" className="mt-1 size-4 accent-[#f7c948]" />
        <span>I am 18 years of age or older.</span>
      </label>
      <label className="flex items-start gap-3 text-sm text-[#f7f5ef]">
        <input required type="checkbox" name="consent" className="mt-1 size-4 accent-[#f7c948]" />
        <span>
          I consent to JK Advisory using the details above only to consider my application and to contact me. I can ask for them to be deleted at any time. I will not send identity or bank numbers.
        </span>
      </label>

      <button
        className="min-h-12 rounded-full bg-[#f7c948] px-6 font-semibold text-[#0e1a14] transition hover:bg-[#ffd86b] disabled:opacity-60"
        disabled={status === "sending"}
      >
        {status === "sending" ? "Sending…" : "Send my application"}
      </button>
      {message && status === "error" ? (
        <p role="alert" className="rounded-xl bg-[#3b1d1d] px-3 py-2 text-sm text-[#ffd9d9]">
          {message}
        </p>
      ) : null}
    </form>
  );
}
