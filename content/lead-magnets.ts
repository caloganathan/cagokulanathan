export const leadMagnets = {
  "schedule-vi-dossier-checklist": {
    title: "Schedule VI biostimulant dossier readiness checklist",
    fileName: "schedule-vi-dossier-readiness-checklist.pdf",
    items: [
      "List every SKU, composition and on-pack claim.",
      "Mark whether that exact product is in the current Schedule VI gazette notifications.",
      "Stop treating a provisional registration as permission to sell after 17 Jun 2025.",
      "Separate biostimulant wording from biofertiliser and pest-control wording.",
      "Freeze the composition before commissioning studies.",
      "Map bio-efficacy, toxicity and chemistry gaps against the current guideline, not a private shorter list.",
      "Match any shelf-life date on the pack to a study.",
      "Confirm your company has the right to use the data.",
      "Write the query list before you file.",
      "Remember that notification is the authority's decision. This checklist is not an approval.",
    ],
  },
  "fermentation-contamination-checklist": {
    title: "Fermentation contamination root-cause checklist",
    fileName: "fermentation-contamination-root-cause-checklist.pdf",
    items: [
      "Record the organism, the volume and the last three batch counts.",
      "Plate the seed culture and note the passage number.",
      "Check whether the sterilisation cycle reaches the real load and the cold spot.",
      "Inspect air filters, gaskets and any air entry after the filter.",
      "Walk CIP dead legs, sample valves and lid gaskets for biofilm.",
      "Identify the water used for media, rinse and inoculum.",
      "Plate the carrier before blending.",
      "Repeat a suspect count with a clean sampling method before you condemn the tank.",
      "Do not add an antibiotic and call it a process.",
      "Write one corrective action for the route you actually found.",
    ],
  },
} as const;

export type LeadMagnetId = keyof typeof leadMagnets;
