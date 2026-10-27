import { describe, expect, it } from "vitest";
import { questionsFor, scoreReadiness } from "./regulatory-readiness";

describe("scoreReadiness", () => {
  it("scores all yes answers as 100 with no gaps", () => {
    const questions = questionsFor("biostimulant");
    const answers = Object.fromEntries(questions.map((question) => [question.id, "yes" as const]));
    const result = scoreReadiness("biostimulant", answers);
    expect(result.score).toBe(100);
    expect(result.gaps).toHaveLength(0);
  });

  it("returns at most three gaps and a lower score when answers are no", () => {
    const questions = questionsFor("biopesticide");
    const answers = Object.fromEntries(questions.map((question) => [question.id, "no" as const]));
    const result = scoreReadiness("biopesticide", answers);
    expect(result.score).toBe(0);
    expect(result.gaps).toHaveLength(3);
    expect(result.gaps[0]).toBe(questions[0].prompt);
  });

  it("treats unsure as a gap", () => {
    const questions = questionsFor("aquaculture");
    const answers = Object.fromEntries(
      questions.map((question, index) => [question.id, index === 0 ? ("unsure" as const) : ("yes" as const)]),
    );
    const result = scoreReadiness("aquaculture", answers);
    expect(result.score).toBe(88);
    expect(result.gaps).toEqual([questions[0].prompt]);
  });
});
