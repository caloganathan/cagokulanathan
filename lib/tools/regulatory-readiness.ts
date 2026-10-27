export const regimes = [
  { id: "biostimulant", label: "Biostimulant" },
  { id: "biopesticide", label: "Biopesticide" },
  { id: "biofertiliser", label: "Biofertiliser" },
  { id: "aquaculture", label: "Aquaculture probiotic or input" },
] as const;

export type RegimeId = (typeof regimes)[number]["id"];

export type ReadinessQuestion = {
  id: string;
  prompt: string;
  help: string;
};

export type ReadinessAnswers = Record<string, "yes" | "no" | "unsure">;

export type ReadinessResult = {
  score: number;
  gaps: string[];
};

const banks: Record<RegimeId, ReadinessQuestion[]> = {
  biostimulant: [
    {
      id: "notified",
      prompt: "Is this exact product notified in the current Schedule VI?",
      help: "Confirm the gazette entry. A provisional certificate is not a notification.",
    },
    {
      id: "provisional",
      prompt: "Have you stopped selling any SKU that relied only on a provisional registration after 17 Jun 2025?",
      help: "Provisional biostimulant registrations stand invalid since that date.",
    },
    {
      id: "claim",
      prompt: "Is the label claim frozen, and is it only a biostimulant claim?",
      help: "A pest-control sentence can pull the product into a different statute.",
    },
    {
      id: "efficacy",
      prompt: "Do you hold bio-efficacy data that matches the claim you kept?",
      help: "The public prerequisite family includes bio-efficacy.",
    },
    {
      id: "toxicity",
      prompt: "Do you hold the toxicity data the current guideline asks for?",
      help: "Do not substitute a private shorter list.",
    },
    {
      id: "chemistry",
      prompt: "Is the chemistry package tied to the composition you manufacture now?",
      help: "A composition that moved after the study is a gap.",
    },
    {
      id: "shelf",
      prompt: "Does a study support the shelf-life date printed on the pack?",
      help: "The date is a claim.",
    },
    {
      id: "owner",
      prompt: "Does your company have the right to use the data in the file?",
      help: "A study owned by someone else is not your dossier.",
    },
  ],
  biopesticide: [
    {
      id: "strain",
      prompt: "Can you say whether the strain is already registered, and in whose name?",
      help: "The 9(3B) closure applies to already-registered strains.",
    },
    {
      id: "route",
      prompt: "Are you filing under Section 9(3), not seeking a new 9(3B) extension?",
      help: "The public notice discontinuing 9(3B) for those strains was uploaded on 28 Apr 2020.",
    },
    {
      id: "same",
      prompt: "If you are using the simplified path, is the formulation the same as the registered one?",
      help: "The simplification cited in that decision is narrow.",
    },
    {
      id: "dna",
      prompt: "Do you have a plan for the DNA fingerprint the guideline or the 2020 notice calls for?",
      help: "Check the laboratory the current text names before you send a sample.",
    },
    {
      id: "atr",
      prompt: "Do you have a plan for the analytical test report?",
      help: "A fingerprint without the analytical report is an incomplete simplified file.",
    },
    {
      id: "newstrain",
      prompt: "If the strain is new, have you scoped the fuller efficacy and safety data rather than the shortcut?",
      help: "A new strain does not inherit the already-registered simplification.",
    },
    {
      id: "guideline",
      prompt: "Are you using the 23 May 2022 harmonised guidelines that match a single strain or a consortium?",
      help: "Do not mix the two checklists.",
    },
    {
      id: "lab",
      prompt: "Is the testing laboratory able to explain its accreditation status?",
      help: "The draft Bill proposes mandatory accreditation. It is not law. The question is still useful.",
    },
  ],
  biofertiliser: [
    {
      id: "spec",
      prompt: "Does the bag name an FCO specification your organism can meet?",
      help: "A biofertiliser specification is not Schedule VI.",
    },
    {
      id: "count",
      prompt: "Does the viable count on the bag match a written method?",
      help: "An unwritten count will not survive a state-laboratory comparison.",
    },
    {
      id: "contaminant",
      prompt: "Do you test the contaminants the specification cares about?",
      help: "A target count alone is not purity.",
    },
    {
      id: "moisture",
      prompt: "Is moisture controlled for the carrier you actually blend?",
      help: "The carrier can fail a batch the fermenter got right.",
    },
    {
      id: "failed",
      prompt: "If a notified laboratory has failed a sample, do you have the report and a retention sample?",
      help: "A retest without the report is not a CAPA.",
    },
    {
      id: "label",
      prompt: "Is the label free of pest-control or biostimulant claims you have no file for?",
      help: "Extra claims change the regime.",
    },
    {
      id: "sop",
      prompt: "Is sampling written down, including who may release the batch?",
      help: "Two shifts without a method produce two numbers.",
    },
    {
      id: "shelf",
      prompt: "Is the shelf-life date supported for the pack you sell?",
      help: "The harvest count is not that date.",
    },
  ],
  aquaculture: [
    {
      id: "rule",
      prompt: "Have you checked Rule 18(3) and the current exemption list for this input?",
      help: "Inputs need CAA certification unless the Authority has exempted them.",
    },
    {
      id: "form",
      prompt: "Are you preparing Form III for a certificate of compliance, not a foreign certificate alone?",
      help: "Confirm the current form on caa.gov.in.",
    },
    {
      id: "strain",
      prompt: "Is the strain on the label the strain in the production record?",
      help: "Two names in one file are a finding.",
    },
    {
      id: "antibiotic",
      prompt: "Can you show an antibiotic-free system, not only the words on the pouch?",
      help: "The method and the batch record have to exist.",
    },
    {
      id: "process",
      prompt: "Can a reviewer follow the manufacturing process from the documents?",
      help: "A brand story is not a process description.",
    },
    {
      id: "importer",
      prompt: "If you import, do you have the manufacturer agreement and the health papers the form asks for?",
      help: "Those papers still do not replace the CAA certificate.",
    },
    {
      id: "lab",
      prompt: "Do you know which tests are in-house and which are outsourced?",
      help: "Form III asks about laboratory facilities.",
    },
    {
      id: "claim",
      prompt: "Are disease claims limited to what you have actually validated?",
      help: "A field result on one additive is not a claim you can borrow.",
    },
  ],
};

export function questionsFor(regime: RegimeId) {
  return banks[regime];
}

export function scoreReadiness(regime: RegimeId, answers: ReadinessAnswers): ReadinessResult {
  const questions = banks[regime];
  const gaps = questions.filter((question) => answers[question.id] !== "yes").map((question) => question.prompt);
  const yesCount = questions.filter((question) => answers[question.id] === "yes").length;
  const score = Math.round((yesCount / questions.length) * 100);
  return { score, gaps: gaps.slice(0, 3) };
}

export function readinessSummary(regime: RegimeId, result: ReadinessResult) {
  const label = regimes.find((item) => item.id === regime)?.label ?? regime;
  const gaps = result.gaps.length ? result.gaps.join(" | ") : "No gap selected.";
  return `${label} readiness ${result.score}/100. Top gaps: ${gaps}`;
}
