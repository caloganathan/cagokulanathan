"use client";

import { useState } from "react";
import {
  questionsFor,
  readinessSummary,
  regimes,
  scoreReadiness,
  type ReadinessAnswers,
  type RegimeId,
} from "@/lib/tools/regulatory-readiness";
import { track } from "@/lib/analytics";
import { waHref } from "@/lib/whatsapp";

export function ReadinessTool() {
  const [regime, setRegime] = useState<RegimeId>("biostimulant");
  const [answers, setAnswers] = useState<ReadinessAnswers>({});
  const [done, setDone] = useState(false);
  const questions = questionsFor(regime);
  const result = done ? scoreReadiness(regime, answers) : null;

  return (
    <form
      className="grid gap-4"
      onSubmit={(event) => {
        event.preventDefault();
        const scored = scoreReadiness(regime, answers);
        setDone(true);
        track("tool_complete", { tool: "regulatory-readiness-check", score: String(scored.score) });
      }}
    >
      <fieldset className="rounded-2xl border border-[var(--line)] p-4">
        <legend className="px-1 font-semibold">Which regime?</legend>
        <div className="mt-2 grid gap-2">
          {regimes.map((item) => (
            <label key={item.id} className="flex items-center gap-2">
              <input
                type="radio"
                name="regime"
                checked={regime === item.id}
                onChange={() => {
                  setRegime(item.id);
                  setAnswers({});
                  setDone(false);
                }}
              />
              {item.label}
            </label>
          ))}
        </div>
      </fieldset>
      {questions.map((question) => (
        <fieldset key={question.id} className="rounded-2xl border border-[var(--line)] p-4">
          <legend className="px-1 font-semibold">{question.prompt}</legend>
          <p className="mt-1 text-sm text-[var(--muted)]">{question.help}</p>
          <div className="mt-2 flex gap-4 text-sm">
            {(["yes", "no", "unsure"] as const).map((value) => (
              <label key={value} className="flex items-center gap-2 capitalize">
                <input
                  type="radio"
                  name={question.id}
                  required
                  checked={answers[question.id] === value}
                  onChange={() => setAnswers({ ...answers, [question.id]: value })}
                />
                {value}
              </label>
            ))}
          </div>
        </fieldset>
      ))}
      <button className="min-h-11 rounded-full bg-[var(--forest)] px-4 font-semibold text-white">Score the file</button>
      {result ? (
        <div className="rounded-3xl bg-[var(--mist)] p-5">
          <p className="font-serif text-3xl">{result.score}/100</p>
          <p className="text-sm text-[var(--muted)]">A score is a gap list. It is not a probability of approval.</p>
          {result.gaps.length ? (
            <ul className="mt-3 list-disc space-y-2 pl-5">
              {result.gaps.map((gap) => (
                <li key={gap}>{gap}</li>
              ))}
            </ul>
          ) : (
            <p className="mt-3">No gap on the questions you marked yes. Bring the papers to the call anyway.</p>
          )}
          <a
            className="mt-4 inline-flex min-h-11 items-center rounded-full bg-[var(--whatsapp)] px-4 font-semibold text-[#0e1a14] no-underline"
            href={waHref(`Hi JK Advisory team, my Regulatory Readiness Check: ${readinessSummary(regime, result)}`, "Regulatory Readiness Check")}
            onClick={() => track("whatsapp_click", { page: "Regulatory Readiness Check" })}
          >
            Send my result on WhatsApp
          </a>
        </div>
      ) : null}
    </form>
  );
}
