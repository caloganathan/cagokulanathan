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
