export type Segment = {
  id: string;
  label: string;
  trigger: string;
  href: string;
  prefill: string;
  panel: string;
};

export const segments: Segment[] = [
  {
    id: "brand",
    label: "Biostimulant / biopesticide brand",
    trigger: "Registration lapsed or blocked",
    href: "/services/biostimulant-biopesticide-registration-india",
    prefill: "Hi JK Advisory team, I need help with biostimulant/biopesticide registration.",
    panel:
      "If a provisional biostimulant registration has lapsed, or a biopesticide file is stuck between Section 9(3B) and 9(3), start with a gap assessment and a data roadmap. We will tell you what to generate, in which order, and what not to spend on yet.",
  },
  {
    id: "plant",
    label: "Manufacturer / plant head",
    trigger: "Batch failures, low CFU",
    href: "/services/fermentation-scale-up-contamination-troubleshooting",
    prefill: "Hi JK Advisory team, we're facing a production/contamination issue.",
    panel:
      "Low CFU, contamination, foam, viscosity or a short shelf life usually has a plant-floor cause. A Plant Health Check is a one- to two-day on-site diagnostic with a written report, not a slide deck from a distance.",
  },
  {
    id: "rnd",
    label: "Startup / R&D head",
    trigger: "New tech, RNAi, lab-to-field",
    href: "/services/rnai-dsrna-biopesticide-development",
    prefill: "Hi JK Advisory team, I'd like to discuss an R&D / RNAi project.",
    panel:
      "India has no dedicated regulatory framework for sprayable dsRNA products yet. We help you build the science and the evidence base now, and map the likely regulatory pathway so you are ready when it is.",
  },
  {
    id: "investor",
    label: "Investor",
    trigger: "Deal diligence",
    href: "/services/agri-biotech-technical-due-diligence",
    prefill: "Hi JK Advisory team, I need technical due diligence on an agri-biotech company.",
    panel:
      "Before you price a biologicals company, check whether the strain is authorised, the data is owned, the registration is still valid, and the plant can repeat the batch. We write a red-flag memo in two to three weeks.",
  },
  {
    id: "aqua",
    label: "Aqua-input company",
    trigger: "CAA compliance",
    href: "/services/aquaculture-probiotics-caa-certification",
    prefill: "Hi JK Advisory team, I need support on aquaculture probiotics/CAA.",
    panel:
      "Under the Coastal Aquaculture Authority Rules, 2024, aquaculture inputs such as probiotics need CAA certification before use in coastal aquaculture, unless the Authority has exempted them. We support the technical file, not a promise of a certificate.",
  },
  {
    id: "institution",
    label: "Institution / FPO",
    trigger: "Training",
    href: "/services/training-biologicals-production",
    prefill: "Hi JK Advisory team, I'm enquiring about training programmes.",
    panel:
      "We run a one-day QC workshop, a three-day production bootcamp, and SOP kits for FPOs, KVKs, Bio-input Resource Centres, colleges and state programmes. Tamil-language delivery is available.",
  },
];

export function segmentById(id: string) {
  return segments.find((segment) => segment.id === id) ?? segments[0];
}
