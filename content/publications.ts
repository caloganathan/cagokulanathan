export type Publication = {
  title: string;
  journal: string;
  year: number;
  authors: string;
  doi: string;
  why: string;
  tags: string[];
};

/**
 * Add a record only when the DOI is real.
 * Empty DOI values are not linked. A DOI that is not a real resolver link must not render.
 * TODO(confirm): publication records and the count of papers.
 */
export const publications: Publication[] = [];

export function visiblePublications() {
  return publications.filter((paper) => {
    const doi = paper.doi.trim();
    if (!doi) return true;
    return !/place.?holder/i.test(doi);
  });
}

export function doiHref(doi: string) {
  const value = doi.trim();
  if (!value || /place.?holder/i.test(value)) return null;
  if (value.startsWith("http://") || value.startsWith("https://")) return value;
  return `https://doi.org/${value}`;
}

export const researchAreas = [
  {
    slug: "insect-genomics",
    title: "Insect genomics",
    text: "Genomes and transcriptomes used to choose a target, not as a poster. The commercial question is whether the target is specific enough to justify a bioassay.",
  },
  {
    slug: "rnai",
    title: "RNAi",
    text: "dsRNA and siRNA design, expression and the evidence a future reviewer would ask for. India has no dedicated framework for sprayable dsRNA yet.",
  },
  {
    slug: "semiochemicals",
    title: "Semiochemicals",
    text: "Controlled-release lure matrices, longevity and trap calibration. Field results are reported only for the system that generated them.",
  },
  {
    slug: "entomopathogenic-fungi",
    title: "Entomopathogenic fungi",
    text: "Sporulation, viscosity, foam and the carrier that decides whether a spore is still alive on the shelf.",
  },
  {
    slug: "pgpr",
    title: "PGPR",
    text: "Production and the plant response you are allowed to claim. A 100 L PGPR run that improved salinity tolerance by 20% is an approved example, not a promise for every strain.",
  },
];
