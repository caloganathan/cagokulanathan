export type Claim = {
  id: string;
  text: string;
  status: "approved" | "confirm";
  source?: string;
};

export const claims: Claim[] = [
  {
    id: "exp",
    text: "11+ years in agri and molecular biotechnology (incl. doctoral research)",
    status: "approved",
  },
  {
    id: "phd",
    text: "Ph.D. Biotechnology, Bharathiar University (2015)",
    status: "approved",
  },
  {
    id: "korea",
    text: "Senior Technical Specialist & Researcher, South Korea (2022–2025)",
    status: "confirm",
  },
  {
    id: "lure",
    text: "Scaled 500 kg of wax-matrix pheromone lures for ICT smart traps",
    status: "approved",
  },
  {
    id: "lureSens",
    text: "70% trap sensitivity; 40% improvement in early-detection alerts across 3 port sites",
    status: "approved",
  },
  {
    id: "rnai",
    text: "Restate the RNAi result with trial scale and metric before publishing",
    status: "confirm",
  },
  {
    id: "bt",
    text: "Improved B. thuringiensis pest-control efficiency by 28%",
    status: "approved",
  },
  {
    id: "ferm",
    text: "Resolved sporulation viscosity and foam issues in 200–1,000 L fermenters",
    status: "approved",
  },
  {
    id: "pgpr",
    text: "100 L PGPR production improving plant salinity tolerance by 20%",
    status: "approved",
  },
  {
    id: "nabl",
    text: "Led a molecular diagnostic lab team to NABL accreditation, closing audit observations within 30 hours",
    status: "confirm",
  },
  {
    id: "iso15189",
    text: "Certified ISO 15189 internal auditor (2020)",
    status: "approved",
  },
  {
    id: "aqua",
    text: "Developed and field-validated a microbial feed additive against WSSV/AHPND in L. vannamei; licensed to industry",
    status: "approved",
  },
  {
    id: "pubs",
    text: "15 peer-reviewed publications",
    status: "confirm",
  },
];

/** Returns approved claim text only. Confirm-status claims render nothing. */
export function claimText(id: string): string | null {
  const claim = claims.find((item) => item.id === id);
  if (!claim || claim.status !== "approved") return null;
  return claim.text;
}

export function approvedClaims() {
  return claims.filter((claim) => claim.status === "approved");
}
