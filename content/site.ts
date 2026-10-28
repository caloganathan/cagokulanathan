/**
 * Public site configuration.
 * Legal name, street address, map coordinates, GSTIN and profile URLs stay
 * blank until Dr. Gokul confirms them. Do not invent values.
 * TODO(confirm): final brand lockup, legal name, domain, WhatsApp, email,
 * booking link, profile URLs, GSTIN, fee anchors.
 */
export const site = {
  brandName: "JK Advisory",
  legalName: "",
  domain: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  founder: "Dr. Gokulanathan A., Ph.D.",
  founderShort: "Dr. Gokul",
  title: "Founder & Principal Consultant — Agri-Biologicals & Crop Protection",
  city: "Coimbatore",
  state: "Tamil Nadu",
  country: "IN",
  address: "",
  geo: {
    lat: "",
    lng: "",
  },
  serviceArea: [
    "Tamil Nadu",
    "Kerala",
    "Karnataka",
    "Andhra Pradesh",
    "Telangana",
    "Maharashtra",
    "Gujarat",
    "India",
  ],
  whatsappE164: process.env.NEXT_PUBLIC_WHATSAPP_E164 ?? "",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "",
  calendlyUrl: process.env.NEXT_PUBLIC_CALENDLY_URL ?? "",
  linkedin: "",
  orcid: "",
  googleScholar: "",
  researchGate: "",
  gstin: "",
  ga4Id: process.env.NEXT_PUBLIC_GA4_ID ?? "",
  turnstileSiteKey: process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? "",
  lastReviewedRegulatory: "27 Oct 2026",
  heroVariant: "v1" as const,
  tagline: "Every batch carries a farmer’s season.",
  promise:
    "From strain to shelf — we are a founder-led agri-biologicals team helping bio-input companies scale production, clear regulation, and commercialise faster.",
};

export const contentDate = "2026-10-27";

export function absoluteUrl(path: string) {
  const base = site.domain.replace(/\/$/, "");
  if (!path || path === "/") return base;
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}
