export const organisms = [
  { id: "trichoderma", label: "Trichoderma" },
  { id: "pseudomonas", label: "Pseudomonas" },
  { id: "bacillus", label: "Bacillus" },
  { id: "beauveria", label: "Beauveria" },
  { id: "metarhizium", label: "Metarhizium" },
  { id: "pgpr", label: "PGPR or biofertiliser culture" },
  { id: "other", label: "Another organism" },
] as const;

export type OrganismId = (typeof organisms)[number]["id"];

export type BatchAnswers = {
  organism: OrganismId;
  scale: "lab" | "pilot" | "plant" | "large";
  cfuTrend: "stable" | "declining" | "unknown";
  contamination: "never" | "occasional" | "frequent";
  foam: "none" | "manageable" | "uncontrolled";
  shelfLife: "meets" | "short" | "unknown";
  qcFailures: "none" | "occasional" | "repeated";
  sterilisation: "validated" | "manual" | "unknown";
};

export type RiskLevel = "Low" | "Medium" | "High";

export type BatchResult = {
  score: number;
  level: RiskLevel;
  actions: [string, string, string];
};

const actionLibrary = {
  contamination:
    "Map the route into the tank: seed purity, air after the filter, CIP dead legs, water, and the carrier. Plate the seed before you rebuild the fermenter.",
  foam:
    "Log foam against viscosity, airflow and the hour in the cycle for the next three batches before you raise the antifoam dose.",
  cfu:
    "Split the count — end of fermentation, after formulation, and at an intermediate age — and change the step that loses the log.",
  shelf:
    "Treat shelf life as its own study: incoming carrier moisture, a contaminant plate, and a storage temperature the warehouse actually reaches.",
  qc:
    "Compare your method, dilution and sampling point with the laboratory that failed the batch before you change the process.",
  sterilisation:
    "Audit SIP or the sterilisation load, including the cold spot and any housing outside the steam path. A chart that passes is not the same as a sterile load.",
  scale:
    "Instrument the next production-scale batch. A flask result does not transfer by multiplying the recipe.",
  baseline:
    "Keep the written method stable and review one batch record a week so a drift is visible before a rejection.",
} as const;

export function scoreBatch(answers: BatchAnswers): BatchResult {
  let score = 0;
  if (answers.scale === "plant") score += 1;
  if (answers.scale === "large") score += 2;
  if (answers.cfuTrend === "declining") score += 2;
  if (answers.cfuTrend === "unknown") score += 1;
  if (answers.contamination === "occasional") score += 2;
  if (answers.contamination === "frequent") score += 3;
  if (answers.foam === "manageable") score += 1;
  if (answers.foam === "uncontrolled") score += 2;
  if (answers.shelfLife === "short") score += 2;
  if (answers.shelfLife === "unknown") score += 1;
  if (answers.qcFailures === "occasional") score += 1;
  if (answers.qcFailures === "repeated") score += 3;
  if (answers.sterilisation === "manual") score += 1;
  if (answers.sterilisation === "unknown") score += 2;

  const level: RiskLevel = score <= 3 ? "Low" : score <= 7 ? "Medium" : "High";

  const ranked: { key: keyof typeof actionLibrary; weight: number }[] = [
    {
      key: "contamination",
      weight: answers.contamination === "frequent" ? 5 : answers.contamination === "occasional" ? 3 : 0,
    },
    { key: "qc", weight: answers.qcFailures === "repeated" ? 5 : answers.qcFailures === "occasional" ? 2 : 0 },
    { key: "sterilisation", weight: answers.sterilisation === "unknown" ? 4 : answers.sterilisation === "manual" ? 2 : 0 },
    { key: "foam", weight: answers.foam === "uncontrolled" ? 4 : answers.foam === "manageable" ? 2 : 0 },
    { key: "cfu", weight: answers.cfuTrend === "declining" ? 4 : answers.cfuTrend === "unknown" ? 2 : 0 },
    { key: "shelf", weight: answers.shelfLife === "short" ? 4 : answers.shelfLife === "unknown" ? 2 : 0 },
    { key: "scale", weight: answers.scale === "large" ? 2 : answers.scale === "plant" ? 1 : 0 },
  ];

  const chosen = ranked
    .filter((item) => item.weight > 0)
    .sort((a, b) => b.weight - a.weight)
    .map((item) => actionLibrary[item.key]);

  const actions = [...chosen, actionLibrary.baseline, actionLibrary.scale, actionLibrary.cfu].slice(0, 3);

  return {
    score,
    level,
    actions: [actions[0], actions[1], actions[2]],
  };
}

export function batchSummary(answers: BatchAnswers, result: BatchResult) {
  const organism = organisms.find((item) => item.id === answers.organism)?.label ?? "Organism";
  return `${organism}; scale ${answers.scale}; risk ${result.level} (score ${result.score}). Actions: ${result.actions.join(" ")}`;
}
