import type { ComponentType } from "react";

export const insightBodies: Record<string, () => Promise<{ default: ComponentType }>> = {
  "biostimulant-provisional-registrations-india": () =>
    import("./biostimulant-provisional-registrations-india.mdx"),
  "fco-schedule-vi-biostimulant-dossier": () => import("./fco-schedule-vi-biostimulant-dossier.mdx"),
  "biopesticide-9-3-vs-9-3b": () => import("./biopesticide-9-3-vs-9-3b.mdx"),
  "trichoderma-pseudomonas-contamination": () => import("./trichoderma-pseudomonas-contamination.mdx"),
  "foam-viscosity-spore-yield": () => import("./foam-viscosity-spore-yield.mdx"),
  "shelf-life-microbial-formulations": () => import("./shelf-life-microbial-formulations.mdx"),
  "rnai-crop-protection-india": () => import("./rnai-crop-protection-india.mdx"),
  "red-palm-weevil-pheromone-south-india": () => import("./red-palm-weevil-pheromone-south-india.mdx"),
  "caa-aquaculture-probiotics": () => import("./caa-aquaculture-probiotics.mdx"),
  "technical-due-diligence-biologicals": () => import("./technical-due-diligence-biologicals.mdx"),
  "draft-pesticides-management-bill-2025": () => import("./draft-pesticides-management-bill-2025.mdx"),
  "qc-lab-biologicals-plant": () => import("./qc-lab-biologicals-plant.mdx"),
};
