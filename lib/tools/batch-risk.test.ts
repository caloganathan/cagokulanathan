import { describe, expect, it } from "vitest";
import { scoreBatch, type BatchAnswers } from "./batch-risk";

const clean: BatchAnswers = {
  organism: "trichoderma",
  scale: "lab",
  cfuTrend: "stable",
  contamination: "never",
  foam: "none",
  shelfLife: "meets",
  qcFailures: "none",
  sterilisation: "validated",
};

describe("scoreBatch", () => {
  it("scores a clean lab batch as low risk with three actions", () => {
    const result = scoreBatch(clean);
    expect(result.level).toBe("Low");
    expect(result.score).toBe(0);
    expect(result.actions).toHaveLength(3);
  });

  it("scores repeated contamination and QC failure as high risk", () => {
    const result = scoreBatch({
      ...clean,
      scale: "large",
      contamination: "frequent",
      qcFailures: "repeated",
      sterilisation: "unknown",
      cfuTrend: "declining",
      foam: "uncontrolled",
      shelfLife: "short",
    });
    expect(result.level).toBe("High");
    expect(result.actions[0].toLowerCase()).toContain("route into the tank");
  });

  it("puts foam ahead of a mild shelf-life gap when foam is uncontrolled", () => {
    const result = scoreBatch({
      ...clean,
      foam: "uncontrolled",
      shelfLife: "unknown",
    });
    expect(result.level).toBe("Low");
    expect(result.actions[0].toLowerCase()).toContain("foam");
  });
});
