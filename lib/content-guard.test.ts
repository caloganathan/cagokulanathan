import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import { answers } from "@/content/answers";
import { caseStudies } from "@/content/case-studies";
import { claimText, claims } from "@/content/claims";
import { industries } from "@/content/industries";
import { insights } from "@/content/insights/registry";
import { services } from "@/content/services";
import { brandedTitle } from "@/lib/seo/metadata";

function walk(dir: string, acc: string[] = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name === "node_modules" || entry.name === ".next") continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, acc);
    else if (/\.(tsx?|mdx)$/.test(entry.name)) acc.push(full);
  }
  return acc;
}

describe("content guard", () => {
  it("hides confirm-status claims", () => {
    for (const claim of claims.filter((item) => item.status === "confirm")) {
      expect(claimText(claim.id)).toBeNull();
    }
    expect(claimText("ferm")).toMatch(/200–1,000 L/);
  });

  it("keeps titles and descriptions inside the limits", () => {
    const pages = [
      ...services.map((item) => [item.metaTitle, item.metaDescription]),
      ...industries.map((item) => [item.metaTitle, item.metaDescription]),
      ...caseStudies.map((item) => [item.metaTitle, item.metaDescription]),
      ...insights.map((item) => [item.metaTitle, item.metaDescription]),
      ...answers.map((item) => [item.metaTitle, item.metaDescription]),
    ];
    const tooLong = pages
      .filter(([title, description]) => brandedTitle(title).length > 60 || description.length > 155)
      .map(([title, description]) => `${brandedTitle(title).length}/${description.length} ${title} :: ${description}`);
    expect(tooLong).toEqual([]);
  });

  it("does not ship unconfirmed or invented markers", () => {
    const forbidden = [
      "15 peer-reviewed",
      "30 hours",
      "Senior Technical Specialist",
      "T. Stanes",
      "Hanbang",
      "guaranteed registration",
    ];
    const files = walk(process.cwd()).filter((file) => !file.endsWith(`${path.sep}claims.ts`) && !file.endsWith("content-guard.test.ts"));
    const hits = files.flatMap((file) => {
      const text = fs.readFileSync(file, "utf8").toLowerCase();
      return forbidden.filter((needle) => text.includes(needle.toLowerCase())).map((needle) => `${file}: ${needle}`);
    });
    expect(hits).toEqual([]);
  });
});
