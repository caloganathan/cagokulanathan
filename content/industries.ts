export type Industry = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  answer: string;
  points: string[];
  serviceSlugs: string[];
  segmentId: string;
};

export const industries: Industry[] = [
  {
    slug: "biostimulants",
    title: "Biostimulants",
    metaTitle: "Biostimulant companies in India",
    metaDescription:
      "Support for biostimulant brands after provisional registration ended on 17 Jun 2025. Schedule VI planning from Coimbatore.",
    h1: "Biostimulant companies",
    answer:
      "If you sell a biostimulant in India, the question since 17 Jun 2025 is simple: is the product notified in Schedule VI of the Fertiliser (Control) Order? Provisional registration is not a basis to manufacture, import or sell. We plan the efficacy, toxicity and chemistry package and the claims on the label.",
    points: [
      "Provisional registrations stand invalid since 17 Jun 2025.",
      "Schedule VI, introduced with Clause 20C by S.O. 882(E) on 23 Feb 2021, is the list that matters.",
      "We do not quote how many products are notified. Public counts conflict.",
    ],
    serviceSlugs: [
      "biostimulant-registration-fco-schedule-vi",
      "biostimulant-biopesticide-registration-india",
    ],
    segmentId: "brand",
  },
  {
    slug: "biopesticides",
    title: "Biopesticides",
    metaTitle: "Biopesticide manufacturers in India",
    metaDescription:
      "Section 9(3) dossier and fermentation support for microbial biopesticide makers. Already-registered strains no longer use the 9(3B) provisional route.",
    h1: "Biopesticide manufacturers",
    answer:
      "Microbial biopesticides are filed with CIB&RC. For an already-registered strain, Section 9(3B) provisional registration was discontinued by a notice uploaded on 28 Apr 2020. The same formulation goes to Section 9(3) with a DNA fingerprint and an analytical report. New strains still need the data the current guideline asks for. Production failures are a separate problem, and we treat them as one.",
    points: [
      "Do not assume a 9(3B) extension is still available.",
      "Match the guideline to the strain: already registered, or new.",
      "A legal file still fails if the fermenter cannot hold the CFU.",
    ],
    serviceSlugs: [
      "biopesticide-registration-cibrc-9-3",
      "fermentation-scale-up-contamination-troubleshooting",
    ],
    segmentId: "brand",
  },
  {
    slug: "biofertilisers",
    title: "Biofertilisers",
    metaTitle: "Biofertiliser units and FCO quality",
    metaDescription:
      "FCO specification, CFU and QC support for biofertiliser makers, including new units in Tamil Nadu. Compliance help without a guaranteed approval.",
    h1: "Biofertiliser makers",
    answer:
      "A biofertiliser has to meet the Fertiliser (Control) Order specification you print on the bag. We work with units on the process, the count, and the label. A 100 L PGPR production that improved plant salinity tolerance by 20% is an example from our founder's own work, not a figure you can put on your pack.",
    points: [
      "Biofertiliser rules and biostimulant Schedule VI rules are not interchangeable.",
      "State-laboratory failures need a cause, not a retest on hope.",
      "New units in Tamil Nadu can start with the test list before they buy every instrument.",
    ],
    serviceSlugs: ["biofertiliser-fco-compliance", "biologicals-qa-qc-lab-setup-nabl"],
    segmentId: "plant",
  },
  {
    slug: "plantations-coconut-tea-coffee",
    title: "Plantations",
    metaTitle: "Pheromones for South Indian plantations",
    metaDescription:
      "Pheromone lure and trap design for coconut, tea, coffee, arecanut and horticulture. These are application areas, not published yield results.",
    h1: "Coconut, tea, coffee and arecanut",
    answer:
      "The coconut belt around Coimbatore and Pollachi, the plantations of the Western Ghats, and horticultural fruit-fly problems are places where pheromone and trap design is relevant. We design lures, longevity tests and deployment. We do not present those crops as completed case results.",
    points: [
      "Red palm weevil and rhinoceros beetle are the coconut insects we are usually asked about.",
      "A port-surveillance result stays a port result.",
      "Trap hardware and the lure have to be calibrated together.",
    ],
    serviceSlugs: ["pheromone-lure-smart-trap-development"],
    segmentId: "rnd",
  },
  {
    slug: "aquaculture",
    title: "Aquaculture",
    metaTitle: "Shrimp probiotics and CAA compliance",
    metaDescription:
      "Technical support for probiotic and feed-additive makers supplying coastal aquaculture in Tamil Nadu, Andhra Pradesh and Gujarat.",
    h1: "Shrimp and coastal aquaculture inputs",
    answer:
      "Probiotics and other aquaculture inputs used in coastal aquaculture need a Coastal Aquaculture Authority certificate of compliance unless the Authority has exempted them. That is Rule 18(3) of the 2024 Rules. We work with makers and importers on the strain, the process and the technical file.",
    points: [
      "Coastal belts in Tamil Nadu, Andhra Pradesh and Gujarat are the service area we are usually called into.",
      "Antibiotic-free has to be a system, not a line on the label.",
      "The Authority decides the certificate.",
    ],
    serviceSlugs: ["aquaculture-probiotics-caa-certification"],
    segmentId: "aqua",
  },
  {
    slug: "agritech-startups",
    title: "Agritech startups",
    metaTitle: "R&D support for agritech startups",
    metaDescription:
      "RNAi, fermentation and registration roadmaps for agritech startups. The Indian dsRNA framework is still a gap, and the site says so.",
    h1: "Agritech startups",
    answer:
      "Startups usually need one of three things: a process that survives the first 100 litres, a dossier path that matches the claim, or an evidence plan for a technology India does not yet have a dedicated rule for. Sprayable dsRNA is in that third group. We will say so in the first meeting.",
    points: [
      "Lab-to-plant failures are more common than the pitch suggests.",
      "A foreign approval is not an Indian registration.",
      "You speak directly to the people who do the work. There is no sales team.",
    ],
    serviceSlugs: [
      "rnai-dsrna-biopesticide-development",
      "fermentation-scale-up-contamination-troubleshooting",
    ],
    segmentId: "rnd",
  },
  {
    slug: "investors",
    title: "Investors",
    metaTitle: "Investors in agri-biologicals",
    metaDescription:
      "Technical due diligence for funds, lenders and acquirers looking at agri-biologicals companies in India. A red-flag memo in two to three weeks.",
    h1: "Investors and lenders",
    answer:
      "The story in a biologicals deck fails in predictable places: a provisional registration described as permanent, a strain the company does not own, and a plant that has not repeated the batch. We write the red-flag memo. We do not set the valuation.",
    points: [
      "Two to three weeks, if documents and a plant visit are available.",
      "Confidential. Targets are not turned into case studies.",
      "Counsel and accountants stay on the legal and financial questions.",
    ],
    serviceSlugs: ["agri-biotech-technical-due-diligence"],
    segmentId: "investor",
  },
];

export function industryBySlug(slug: string) {
  return industries.find((industry) => industry.slug === slug);
}
