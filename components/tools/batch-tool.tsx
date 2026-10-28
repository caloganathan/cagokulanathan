"use client";

import { useState } from "react";
import {
  batchSummary,
  organisms,
  scoreBatch,
  type BatchAnswers,
} from "@/lib/tools/batch-risk";
import { track } from "@/lib/analytics";
import { waHref } from "@/lib/whatsapp";

const initial: BatchAnswers = {
  organism: "trichoderma",
  scale: "pilot",
  cfuTrend: "declining",
  contamination: "occasional",
  foam: "manageable",
  shelfLife: "unknown",
  qcFailures: "none",
  sterilisation: "manual",
};

const fields: { key: keyof BatchAnswers; label: string; options: { id: string; label: string }[] }[] = [
  { key: "organism", label: "Organism", options: organisms.map((item) => ({ id: item.id, label: item.label })) },
  {
    key: "scale",
    label: "Scale",
    options: [
      { id: "lab", label: "Laboratory, under 20 L" },
      { id: "pilot", label: "Pilot, about 20–200 L" },
      { id: "plant", label: "Plant, about 200–1,000 L" },
      { id: "large", label: "Larger than 1,000 L" },
    ],
  },
  {
    key: "cfuTrend",
    label: "CFU or spore trend",
    options: [
      { id: "stable", label: "Stable against the label" },
      { id: "declining", label: "Declining" },
      { id: "unknown", label: "We do not track it" },
    ],
  },
  {
    key: "contamination",
    label: "Contamination",
    options: [
      { id: "never", label: "Rare or never" },
      { id: "occasional", label: "Occasional batches" },
      { id: "frequent", label: "Frequent" },
    ],
  },
  {
    key: "foam",
    label: "Foam",
    options: [
      { id: "none", label: "Not a problem" },
      { id: "manageable", label: "Manageable with antifoam" },
      { id: "uncontrolled", label: "Uncontrolled" },
    ],
  },
  {
    key: "shelfLife",
    label: "Shelf life versus the label",
    options: [
      { id: "meets", label: "Meets the date" },
      { id: "short", label: "Shorter than the date" },
      { id: "unknown", label: "Not measured" },
    ],
  },
  {
    key: "qcFailures",
    label: "QC or state-laboratory failures",
    options: [
      { id: "none", label: "None recently" },
      { id: "occasional", label: "Occasional" },
      { id: "repeated", label: "Repeated" },
    ],
  },
  {
    key: "sterilisation",
    label: "Sterilisation",
    options: [
      { id: "validated", label: "SIP or a validated cycle" },
      { id: "manual", label: "Manual, written down" },
      { id: "unknown", label: "Not written down" },
    ],
  },
];

export function BatchTool() {
  const [answers, setAnswers] = useState<BatchAnswers>(initial);
  const [result, setResult] = useState<ReturnType<typeof scoreBatch> | null>(null);

  return (
    <form
      className="grid gap-4"
      onSubmit={(event) => {
        event.preventDefault();
        const scored = scoreBatch(answers);
        setResult(scored);
        track("tool_complete", { tool: "batch-risk-check", score: String(scored.score) });
      }}
    >
      {fields.map((field) => (
        <fieldset key={field.key} className="rounded-2xl border border-[var(--line)] p-4">
          <legend className="px-1 font-semibold">{field.label}</legend>
          <div className="mt-2 grid gap-2">
            {field.options.map((option) => (
              <label key={option.id} className="flex items-center gap-2 text-sm">
                <input
                  type="radio"
                  name={field.key}
                  checked={answers[field.key] === option.id}
                  onChange={() => setAnswers({ ...answers, [field.key]: option.id })}
                />
                {option.label}
              </label>
            ))}
          </div>
        </fieldset>
      ))}
      <button className="min-h-11 rounded-full bg-[var(--forest)] px-4 font-semibold text-white">See the risk</button>
      {result ? (
        <div className="rounded-3xl bg-[var(--mist)] p-5">
          <p className="font-serif text-xl md:text-2xl">{result.level} risk</p>
          <p className="text-sm text-[var(--muted)]">Score {result.score}. Nothing is stored unless you send it.</p>
          <ol className="mt-3 list-decimal space-y-2 pl-5">
            {result.actions.map((action) => (
              <li key={action}>{action}</li>
            ))}
          </ol>
          <a
            className="mt-4 inline-flex min-h-11 items-center rounded-full bg-[var(--whatsapp)] px-4 font-semibold text-[#0e1a14] no-underline"
            href={waHref(`Hi JK Advisory team, my Batch Risk Check: ${batchSummary(answers, result)}`, "Batch Risk Check")}
            onClick={() => track("whatsapp_click", { page: "Batch Risk Check" })}
          >
            Send my result on WhatsApp
          </a>
        </div>
      ) : null}
    </form>
  );
}
