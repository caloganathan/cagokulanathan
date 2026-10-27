export type InsightMeta = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  dek: string;
  dateLabel: string;
  dateIso: string;
  regulatory: boolean;
  full: boolean;
};

export const insights: InsightMeta[] = [
  {
    slug: "biostimulant-provisional-registrations-india",
    title: "Biostimulant provisional registrations are invalid: a 90-day action plan",
    metaTitle: "Biostimulant provisionals: 90-day plan",
    metaDescription:
      "A 90-day plan for Indian brands after provisional biostimulant registrations became invalid on 17 Jun 2025. No product counts, no guaranteed notification.",
    dek: "What to stop shipping, what to check against Schedule VI, and how to order the data you still need.",
    dateLabel: "27 Oct 2026",
    dateIso: "2026-10-27",
    regulatory: true,
    full: true,
  },
  {
    slug: "fco-schedule-vi-biostimulant-dossier",
    title: "FCO Schedule VI explained: what a biostimulant dossier must prove",
    metaTitle: "FCO Schedule VI, explained",
    metaDescription:
      "Clause 20C, Schedule VI and the efficacy, toxicity and chemistry evidence a biostimulant file has to carry. Last reviewed 27 Oct 2026.",
    dek: "The schedule is a list of notified products. The dossier is the evidence that gets a product onto that list.",
    dateLabel: "27 Oct 2026",
    dateIso: "2026-10-27",
    regulatory: true,
    full: true,
  },
  {
    slug: "biopesticide-9-3-vs-9-3b",
    title: "9(3) versus 9(3B): the biopesticide registration route in India",
    metaTitle: "9(3) versus 9(3B) for biopesticides",
    metaDescription:
      "Why already-registered biopesticide strains left the 9(3B) provisional route in 2020, and what Section 9(3) asks for instead.",
    dek: "The simplified file is narrow. A new strain does not inherit it.",
    dateLabel: "27 Oct 2026",
    dateIso: "2026-10-27",
    regulatory: true,
    full: true,
  },
  {
    slug: "trichoderma-pseudomonas-contamination",
    title: "Seven root causes of contamination in Trichoderma and Pseudomonas production",
    metaTitle: "Seven causes of Trichoderma contamination",
    metaDescription:
      "Seed purity, sterilisation, air, biofilm, water, carriers and sampling: how contamination shows up in Trichoderma and Pseudomonas plants.",
    dek: "A contaminated batch has a physical cause. The list below is how I look for it on a plant floor.",
    dateLabel: "27 Oct 2026",
    dateIso: "2026-10-27",
    regulatory: false,
    full: true,
  },
  {
    slug: "foam-viscosity-spore-yield",
    title: "Foam, viscosity and low spore yield in fungal fermentation",
    metaTitle: "Foam, viscosity and low spore yield",
    metaDescription:
      "How foam and viscosity show up in entomopathogenic fungal fermentation, and what to instrument before you add more antifoam.",
    dek: "I have resolved sporulation viscosity and foam in 200–1,000 L fermenters. The method is a diagnosis, not a dose.",
    dateLabel: "27 Oct 2026",
    dateIso: "2026-10-27",
    regulatory: false,
    full: true,
  },
  {
    slug: "shelf-life-microbial-formulations",
    title: "Shelf-life engineering for microbial formulations",
    metaTitle: "Shelf life of microbial formulations",
    metaDescription:
      "Carriers, moisture and encapsulation decide whether a microbial product is alive on the date you print. No extension percentage is claimed.",
    dek: "The harvest count is not the shelf-life count. The pack, the water and the store decide the second number.",
    dateLabel: "27 Oct 2026",
    dateIso: "2026-10-27",
    regulatory: false,
    full: true,
  },
  {
    slug: "rnai-crop-protection-india",
    title: "RNAi crop protection and India's regulatory gap",
    metaTitle: "RNAi crop protection and India's gap",
    metaDescription:
      "What sprayable dsRNA needs scientifically, and why India still has no dedicated framework. Build evidence now. Do not claim an approval.",
    dek: "A foreign decision is not an Indian registration. The honest project is evidence plus a pathway note.",
    dateLabel: "27 Oct 2026",
    dateIso: "2026-10-27",
    regulatory: true,
    full: true,
  },
  {
    slug: "red-palm-weevil-pheromone-south-india",
    title: "Red palm weevil, rhinoceros beetle and pheromones in South Indian coconut IPM",
    metaTitle: "Pheromones in South Indian coconut IPM",
    metaDescription:
      "Where pheromone technology fits against red palm weevil and rhinoceros beetle. Application areas, not plantation yield claims.",
    dek: "Coimbatore and Pollachi are where the question is asked. They are not a result I am publishing.",
    dateLabel: "27 Oct 2026",
    dateIso: "2026-10-27",
    regulatory: false,
    full: true,
  },
  {
    slug: "caa-aquaculture-probiotics",
    title: "CAA certification for aquaculture probiotics: a practical primer",
    metaTitle: "CAA certification for aquaculture probiotics",
    metaDescription:
      "Rule 18(3) of the Coastal Aquaculture Authority Rules, 2024, and what a probiotic maker should prepare. The Authority decides the certificate.",
    dek: "A primer on the rule, the file and the antibiotic-free system. Not a promise of certification.",
    dateLabel: "27 Oct 2026",
    dateIso: "2026-10-27",
    regulatory: true,
    full: false,
  },
  {
    slug: "technical-due-diligence-biologicals",
    title: "Technical due diligence checklist for agri-biologicals investors",
    metaTitle: "Due diligence checklist for biologicals",
    metaDescription:
      "What to verify in an agri-biologicals company: registration, data ownership, strain authorisation, plant repeatability and shelf life.",
    dek: "A checklist for a red-flag memo. It is not a valuation.",
    dateLabel: "27 Oct 2026",
    dateIso: "2026-10-27",
    regulatory: true,
    full: false,
  },
  {
    slug: "draft-pesticides-management-bill-2025",
    title: "Draft Pesticides Management Bill, 2025: what biopesticide makers should prepare for",
    metaTitle: "Draft Pesticides Management Bill, 2025",
    metaDescription:
      "The January 2026 draft is proposed, not law. Digital registration and laboratory accreditation are the parts worth preparing for now.",
    dek: "File under the Insecticides Act today. Watch the draft so a laboratory you hire is still usable later.",
    dateLabel: "27 Oct 2026",
    dateIso: "2026-10-27",
    regulatory: true,
    full: false,
  },
  {
    slug: "qc-lab-biologicals-plant",
    title: "Building a QC lab for a biologicals plant",
    metaTitle: "QC lab for a biologicals plant",
    metaDescription:
      "Equipment, SOPs and the accreditation path for a biologicals QC lab. ISO 15189 is not the agri-lab standard.",
    dek: "What to buy, what to write down, and which accreditation conversation is the right one.",
    dateLabel: "27 Oct 2026",
    dateIso: "2026-10-27",
    regulatory: true,
    full: false,
  },
];

export function insightBySlug(slug: string) {
  return insights.find((insight) => insight.slug === slug);
}
