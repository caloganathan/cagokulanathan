import { describe, expect, it } from "vitest";
import { careerSchema } from "@/lib/validators";

const valid = {
  track: "ug",
  name: "Asha Raman",
  email: "asha@example.com",
  location: "Coimbatore, Tamil Nadu",
  qualification: "B.Sc. Microbiology, final year",
  interests: ["QC lab and microbiology"],
  availability: "flexible",
  mode: "open",
  message: "I grow Trichoderma on my family farm and want to learn how a QC lab decides a batch is good.",
  adult: "on",
  consent: "on",
};

describe("careerSchema", () => {
  it("accepts a complete application", () => {
    expect(careerSchema.safeParse(valid).success).toBe(true);
  });
  it("requires consent and the 18+ confirmation", () => {
    expect(careerSchema.safeParse({ ...valid, consent: undefined }).success).toBe(false);
    expect(careerSchema.safeParse({ ...valid, adult: undefined }).success).toBe(false);
  });
  it("rejects a short message, no interests and a bad link", () => {
    expect(careerSchema.safeParse({ ...valid, message: "Too short" }).success).toBe(false);
    expect(careerSchema.safeParse({ ...valid, interests: [] }).success).toBe(false);
    expect(careerSchema.safeParse({ ...valid, link: "not a url" }).success).toBe(false);
  });
});
