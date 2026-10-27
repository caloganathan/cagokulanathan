export type CaseStudy = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  named: boolean;
  context: string;
  challenge: string;
  approach: string;
  resultClaimIds: string[];
  /** Shown only when there is no approved metric. Must not invent a number. */
  resultNote: string | null;
  segmentId: string;
  serviceSlug: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "fermentation-foam-and-viscosity",
    title: "Foam and viscosity in a fungal fermenter",
    metaTitle: "Case study: fermentation foam and viscosity",
    metaDescription:
      "An anonymised fermentation diagnostic. Sporulation viscosity and foam were resolved in 200–1,000 L fermenters.",
    named: false,
    context:
      "A plant producing an entomopathogenic fungus. The flask process sporulated. The production tanks did not behave the same way once the volume moved into the hundreds of litres.",
    challenge:
      "Viscosity rose with sporulation, foam became unmanageable, and the spore count the plant needed was not reliable from batch to batch.",
    approach:
      "I treated foam as a process signal rather than a reason to pour in antifoam. The diagnostic looked at media, aeration, agitation and the point in the cycle where viscosity changed, then the change was run with the plant team.",
    resultClaimIds: ["ferm"],
    resultNote: null,
    segmentId: "plant",
    serviceSlug: "fermentation-scale-up-contamination-troubleshooting",
  },
  {
    slug: "beauveria-carrier-shelf-life",
    title: "Carrier work for a Beauveria formulation",
    metaTitle: "Case study: Beauveria carrier formulation",
    metaDescription:
      "Anonymised Beauveria carrier work. No shelf-life percentage is published, because that figure is not confirmed.",
    named: false,
    context:
      "A formulator packing Beauveria bassiana. The organism was alive at harvest and less convincing by the time the pack reached the end of the claimed life.",
    challenge:
      "The carrier and the moisture left in it were as important as the fermentation. A wetter or dirtier carrier can look fine on day one and fail the date on the label.",
    approach:
      "The work redesigned the carrier and the formulation path, and tied the shelf-life check to the specification the pack already promised. Operators received a written method rather than a verbal one.",
    resultClaimIds: [],
    resultNote:
      "A quantified shelf-life extension is not published here. That figure has not been confirmed for disclosure.",
    segmentId: "plant",
    serviceSlug: "fermentation-scale-up-contamination-troubleshooting",
  },
  {
    slug: "pheromone-lure-scale-up",
    title: "Wax-matrix lures for ICT smart traps",
    metaTitle: "Case study: pheromone lure scale-up",
    metaDescription:
      "Anonymised lure scale-up: 500 kg of wax-matrix pheromone lures, 70% trap sensitivity and a 40% alert improvement across three port sites.",
    named: false,
    context:
      "A smart-trap programme that needed a wax-matrix pheromone lure at production scale, not as a laboratory dip.",
    challenge:
      "The dispenser had to be made in hundreds of kilograms, and the trap had to turn a release into an early-detection alert. A bench lure that could not be manufactured was not a product.",
    approach:
      "I scaled the wax-matrix process and set the sensitivity question as a field measurement across the port sites in the programme, rather than as a claim written before the test.",
    resultClaimIds: ["lure", "lureSens"],
    resultNote: null,
    segmentId: "rnd",
    serviceSlug: "pheromone-lure-smart-trap-development",
  },
  {
    slug: "aquaculture-feed-additive",
    title: "A microbial feed additive for L. vannamei",
    metaTitle: "Case study: aquaculture feed additive",
    metaDescription:
      "Anonymised development of a microbial feed additive against WSSV and AHPND in L. vannamei, field-validated and licensed to industry.",
    named: false,
    context:
      "A microbial feed additive aimed at whiteleg shrimp, Litopenaeus vannamei, where WSSV and AHPND were the disease pressure the product had to face.",
    challenge:
      "A laboratory culture is not a feed additive. The strain had to be produced, checked, field-validated, and put in a form a company could license.",
    approach:
      "Development covered the strain in the product, the field validation, and the technical package a licensee needs. The commercial contract itself sat with the parties and their counsel.",
    resultClaimIds: ["aqua"],
    resultNote: null,
    segmentId: "aqua",
    serviceSlug: "aquaculture-probiotics-caa-certification",
  },
];

export function caseStudyBySlug(slug: string) {
  return caseStudies.find((item) => item.slug === slug);
}
