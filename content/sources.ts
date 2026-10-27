export type Source = { label: string; href: string };

export const sources = {
  pibBiostimulant: {
    label: "Press Information Bureau — provisional biostimulant registrations invalid from 17 Jun 2025",
    href: "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2165081",
  },
  agriwelfareBiostimulants: {
    label: "Department of Agriculture & Farmers Welfare — biostimulant circulars and notifications",
    href: "https://www.agriwelfare.gov.in/en/CirBiostimulants",
  },
  egazette: {
    label: "eGazette of India",
    href: "https://egazette.gov.in/",
  },
  ppqsGuidelines: {
    label: "Directorate of Plant Protection, Quarantine & Storage — CIB&RC registration guidelines",
    href: "https://www.ppqs.gov.in/en/divisions/cib-rc/guidelines",
  },
  ppqs: {
    label: "Directorate of Plant Protection, Quarantine & Storage",
    href: "https://ppqs.gov.in/",
  },
  pibPmb: {
    label: "Press Information Bureau — draft Pesticides Management Bill, 2025 (7 Jan 2026)",
    href: "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2212144",
  },
  agriwelfare: {
    label: "Department of Agriculture & Farmers Welfare",
    href: "https://agriwelfare.gov.in/",
  },
  caaRules: {
    label: "Coastal Aquaculture Authority — rules",
    href: "https://www.caa.gov.in/rules.html",
  },
  caa: {
    label: "Coastal Aquaculture Authority",
    href: "https://www.caa.gov.in/",
  },
  nmnf: {
    label: "National Mission on Natural Farming — Department of Agriculture & Farmers Welfare",
    href: "https://naturalfarming.dac.gov.in/",
  },
} as const satisfies Record<string, Source>;
