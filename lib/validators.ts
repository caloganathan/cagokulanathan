import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(2).max(120),
  email: z.string().trim().email().max(180),
  company: z.string().trim().min(2).max(160),
  role: z.string().trim().min(2).max(120),
  segment: z.string().trim().min(2).max(80),
  state: z.string().trim().min(2).max(80),
  channel: z.enum(["whatsapp", "email", "call"]),
  problem: z.string().trim().min(10).max(4000),
  consent: z.literal("on"),
  website: z.string().optional().default(""),
  turnstileToken: z.string().optional().default(""),
});

export const leadSchema = z.object({
  name: z.string().trim().min(2).max(120),
  email: z.string().trim().email().max(180),
  magnet: z.enum(["schedule-vi-dossier-checklist", "fermentation-contamination-checklist"]),
  consent: z.literal("on"),
  website: z.string().optional().default(""),
});

export const careerTracks = {
  junior: "Junior Scientist",
  phd: "PhD holder",
  ug: "UG candidate",
  enthusiast: "Basic education, big love for bio and organic agri",
} as const;

export const careerInterests = [
  "Fermentation and production",
  "QC lab and microbiology",
  "Field trials and agronomy",
  "Regulatory and dossiers",
  "Pheromones and pest management",
  "Aquaculture probiotics",
  "Organic farming and farmer training",
  "Research and writing",
] as const;

export const careerSchema = z.object({
  track: z.enum(["junior", "phd", "ug", "enthusiast"]),
  name: z.string().trim().min(2).max(120),
  email: z.string().trim().email().max(180),
  phone: z.string().trim().max(30).optional().default(""),
  location: z.string().trim().min(2).max(120),
  qualification: z.string().trim().min(2).max(200),
  interests: z.array(z.enum(careerInterests)).min(1).max(8),
  availability: z.enum(["now", "1-3-months", "after-studies", "flexible"]),
  mode: z.enum(["coimbatore", "field-travel", "remote", "open"]),
  link: z.union([z.literal(""), z.string().trim().url().max(300)]).optional().default(""),
  message: z.string().trim().min(40).max(3000),
  adult: z.literal("on"),
  consent: z.literal("on"),
  website: z.string().optional().default(""),
  turnstileToken: z.string().optional().default(""),
});
