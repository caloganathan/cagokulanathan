export type Term = {
  slug: string;
  term: string;
  definition: string;
};

export const glossary: Term[] = [
  {
    slug: "biopesticide",
    term: "Biopesticide",
    definition:
      "A pest-control product based on a microbe, a botanical, a semiochemical or a related biological active. In India, registration is handled by CIB&RC under the Insecticides Act, 1968, until any replacement law is enacted.",
  },
  {
    slug: "biofertiliser",
    term: "Biofertiliser",
    definition:
      "A microbial product intended to improve nutrient supply to a crop, specified under the Fertiliser (Control) Order, 1985. It is not the same legal category as a biostimulant.",
  },
  {
    slug: "biostimulant",
    term: "Biostimulant",
    definition:
      "A product regulated in India under Clause 20C and Schedule VI of the Fertiliser (Control) Order, 1985, introduced by S.O. 882(E) on 23 Feb 2021. Provisional registrations became invalid on 17 Jun 2025.",
  },
  {
    slug: "schedule-vi",
    term: "Schedule VI",
    definition:
      "The schedule of the Fertiliser (Control) Order that lists notified biostimulants. A product not on the current schedule is not a basis for legal sale as a biostimulant.",
  },
  {
    slug: "cfu",
    term: "CFU",
    definition:
      "Colony-forming unit. A count of microbial units that grow into colonies under a stated method. The number is meaningless unless the method, the dilution and the time are written down.",
  },
  {
    slug: "ssf",
    term: "Solid-state fermentation",
    definition:
      "Growth on a moist solid substrate with little free water. Often used for fungi. It can be simpler to build and harder to instrument than a stirred tank.",
  },
  {
    slug: "smf",
    term: "Submerged fermentation",
    definition:
      "Growth in a liquid medium inside a fermenter. Aeration, agitation, dissolved oxygen and sterilisation decide whether the flask result survives scale-up.",
  },
  {
    slug: "cip",
    term: "CIP",
    definition:
      "Clean-in-place. Circulating cleaning solutions through the equipment without a full strip-down. A CIP that does not reach a dead leg is a contamination source.",
  },
  {
    slug: "sip",
    term: "SIP",
    definition:
      "Steam-in-place. Sterilising the vessel and lines with steam. The cycle has to match the load. A recipe copied from a smaller tank is a common reason a batch fails.",
  },
  {
    slug: "capa",
    term: "CAPA",
    definition:
      "Corrective and preventive action. The written reason a batch failed and the change that stops the next one failing. A retest alone is not a CAPA.",
  },
  {
    slug: "pheromone",
    term: "Pheromone",
    definition:
      "A semiochemical used within a species, often for detection or trapping. Performance depends on the release matrix, the trap and the service interval, not on the pouch artwork.",
  },
  {
    slug: "dsrna",
    term: "dsRNA",
    definition:
      "Double-stranded RNA used to trigger RNA interference. India has no dedicated regulatory framework for sprayable dsRNA products yet.",
  },
  {
    slug: "rnai",
    term: "RNAi",
    definition:
      "RNA interference. A way of silencing a target gene. It is a research and development route in Indian crop protection, not a shortcut around an existing registration.",
  },
  {
    slug: "pgpr",
    term: "PGPR",
    definition:
      "Plant-growth-promoting rhizobacteria. Bacteria associated with roots that can change nutrient supply or stress tolerance. The claim on the pack still has to match the category you register.",
  },
  {
    slug: "entomopathogenic-fungus",
    term: "Entomopathogenic fungus",
    definition:
      "A fungus that infects insects. Beauveria and Metarhizium are the examples plant teams ask about most often. Sporulation, moisture and the carrier decide shelf life.",
  },
  {
    slug: "cibrc",
    term: "CIB&RC",
    definition:
      "The Central Insecticides Board and Registration Committee, which registers insecticides, including microbial biopesticides, under the Insecticides Act, 1968. The secretariat sits with the Directorate of Plant Protection, Quarantine and Storage.",
  },
  {
    slug: "fco",
    term: "FCO",
    definition:
      "The Fertiliser (Control) Order, 1985. It covers fertilisers, biofertilisers and, since S.O. 882(E) of 23 Feb 2021, biostimulants.",
  },
  {
    slug: "caa",
    term: "CAA",
    definition:
      "The Coastal Aquaculture Authority. Under the 2024 Rules, aquaculture inputs need the Authority's certification before use in coastal aquaculture, unless an exemption applies.",
  },
  {
    slug: "nabl",
    term: "NABL",
    definition:
      "The National Accreditation Board for Testing and Calibration Laboratories. Testing-lab accreditation in this field is generally discussed against ISO/IEC 17025. ISO 15189 is a medical-laboratory standard and is not an agri-biologicals accreditation.",
  },
  {
    slug: "shelf-life",
    term: "Shelf life",
    definition:
      "The period for which a product still meets the specification on its label. For a live microbe, that is a viability result over time, not a date chosen by the printer.",
  },
  {
    slug: "carrier",
    term: "Carrier",
    definition:
      "The solid or liquid that holds the microbe in the pack. Talc, charcoal, liquid broths and encapsulated forms all change moisture, contamination risk and the count the farmer receives.",
  },
  {
    slug: "dossier",
    term: "Dossier",
    definition:
      "The technical file submitted to a regulator: identity, manufacturing, quality, efficacy, toxicity and chemistry, as the guideline for that product requires. A complete dossier is readiness. It is not an approval.",
  },
  {
    slug: "strain",
    term: "Strain",
    definition:
      "A specific culture of a microbe, identified beyond the species name. For an already-registered biopesticide strain, CIB&RC has asked for a DNA fingerprint from the route described in its 2020 notice. The authorisation has to sit with the person who is selling it.",
  },
  {
    slug: "wssv",
    term: "WSSV",
    definition:
      "White spot syndrome virus, a major pathogen of farmed shrimp including Litopenaeus vannamei.",
  },
  {
    slug: "ahpnd",
    term: "AHPND",
    definition:
      "Acute hepatopancreatic necrosis disease, a bacterial disease of farmed shrimp. It is one of the targets of the microbial feed additive I field-validated and licensed.",
  },
];
