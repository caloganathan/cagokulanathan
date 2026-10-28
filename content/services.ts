import { sources, type Source } from "@/content/sources";

export type Tier = "A" | "B" | "C" | "S";

export type Faq = { question: string; answer: string };

export type Service = {
  slug: string;
  tier: Tier;
  navLabel: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  answer: string;
  problemLine: string;
  outcomes: [string, string, string];
  forWhom: string[];
  problems: string[];
  deliverables: string[];
  engagement: { phase: string; detail: string }[];
  proofClaimIds: string[];
  sources: Source[];
  faqs: Faq[];
  relatedInsightSlugs: string[];
  segmentId: string;
  regulatory: boolean;
};

const reviewed = "Statements on this page were last reviewed on 27 Oct 2026. Registration and certification decisions rest with the competent authority.";

export const services: Service[] = [
  {
    slug: "biostimulant-biopesticide-registration-india",
    tier: "A",
    navLabel: "Regulatory-ready biologicals",
    h1: "Biostimulant and biopesticide registration consultant in India",
    metaTitle: "Biostimulant and biopesticide registration",
    metaDescription:
      "Dossier readiness for biostimulants, biopesticides and biofertilisers in India. Gap assessment, data roadmap and query support. No approval is guaranteed.",
    answer:
      "We help Indian biological-input companies prepare biostimulant, biopesticide and biofertiliser dossiers. Provisional biostimulant registrations became invalid on 17 Jun 2025. Biopesticide strains that are already registered no longer use the Section 9(3B) provisional route. We map the data you still need and the order in which to generate it. We do not guarantee registration.",
    problemLine: "The provisional file is invalid, and the next data spend is unclear.",
    outcomes: [
      "A written gap assessment against the live regime",
      "A data roadmap for efficacy, toxicity and chemistry",
      "Dossier drafting and query-response support",
    ],
    forWhom: [
      "Biostimulant brands whose provisional registrations have lapsed",
      "Biopesticide makers moving to Section 9(3)",
      "Biofertiliser makers working under the Fertiliser (Control) Order",
      "Importers and new entrants",
    ],
    problems: [
      "My provisional registration is invalid. What now?",
      "Which data do I generate, in which order, and at what cost?",
      "My dossier came back with queries.",
    ],
    deliverables: [
      "Regulatory gap assessment",
      "Data-generation roadmap covering bio-efficacy, toxicity, chemistry and shelf life",
      "Trial protocol design and coordination with a CRO or laboratory",
      "Technical dossier drafting and review",
      "Query-response support",
      "Label and claims review",
    ],
    engagement: [
      { phase: "Diagnose", detail: "A 30-minute call to identify the product, the regime and the file you already have." },
      { phase: "Roadmap", detail: "A Regulatory Readiness Assessment: gaps, data order and what can wait." },
      { phase: "Execute", detail: "Protocols, dossier text and query replies, written with your regulatory and R&D leads." },
      { phase: "Transfer", detail: "A file your team can maintain, including the assumptions behind each claim." },
    ],
    proofClaimIds: ["exp", "phd"],
    sources: [sources.pibBiostimulant, sources.agriwelfareBiostimulants, sources.ppqsGuidelines, sources.egazette],
    faqs: [
      {
        question: "Can I still sell a biostimulant with a provisional registration in India?",
        answer:
          "No. The Government of India has said provisional biostimulant registrations stand invalid since 17 Jun 2025. Only products notified in Schedule VI of the Fertiliser (Control) Order, 1985 may be manufactured, imported or sold as biostimulants. Check the current Schedule VI notifications before you ship.",
      },
      {
        question: "Do you guarantee CIB&RC or FCO approval?",
        answer:
          "No. We prepare dossier readiness and a data strategy so you can reduce rework. The decision sits with CIB&RC, the Controller of Fertilisers, or the Coastal Aquaculture Authority, depending on the product.",
      },
      {
        question: "Which regime applies to my product?",
        answer:
          "A biostimulant is handled under the Fertiliser (Control) Order and Schedule VI. A microbial biopesticide is handled under the Insecticides Act, 1968 and CIB&RC. A biofertiliser has its own FCO quality and labelling rules. If one label makes both a nutrient and a pest-control claim, we separate the claims before any study starts.",
      },
      {
        question: "What do I receive from a Regulatory Readiness Assessment?",
        answer:
          "A written gap list, the data to generate, a sensible order, and the queries we would expect a reviewer to raise. Fees are confirmed after the diagnostic. They exclude GST, travel and third-party laboratory or trial costs.",
      },
      {
        question: "Can you respond to queries already raised on a file?",
        answer:
          "Yes. Send the query sheet and the data you submitted. We will separate what can be answered from the file you have and what needs a new study or a revised claim.",
      },
      {
        question: "How should an importer use this service?",
        answer:
          "We check whether the overseas data can be used, what must be generated in India, and whether the strain authorisation and the label claims travel with the product. We do not assume a foreign registration is an Indian registration.",
      },
    ],
    relatedInsightSlugs: [
      "biostimulant-provisional-registrations-india",
      "fco-schedule-vi-biostimulant-dossier",
      "biopesticide-9-3-vs-9-3b",
    ],
    segmentId: "brand",
    regulatory: true,
  },
  {
    slug: "biostimulant-registration-fco-schedule-vi",
    tier: "A",
    navLabel: "Biostimulant, FCO Schedule VI",
    h1: "Biostimulant registration under FCO Schedule VI",
    metaTitle: "Biostimulant registration, FCO Schedule VI",
    metaDescription:
      "What changes after provisional biostimulant registration ended on 17 Jun 2025, and how a Schedule VI dossier is planned. Last reviewed 27 Oct 2026.",
    answer:
      "Biostimulants sit under the Fertiliser (Control) Order, 1985. Clause 20C and Schedule VI were introduced by S.O. 882(E) on 23 Feb 2021. Provisional registrations became invalid on 17 Jun 2025. Only products notified in Schedule VI may be manufactured, imported or sold. A dossier has to support efficacy, toxicity and chemistry. We plan that package. We do not quote product-count figures, because public sources conflict, and we do not guarantee notification.",
    problemLine: "Provisional registration has lapsed. Schedule VI is now the only route.",
    outcomes: [
      "A clear yes or no on whether the current product is notified",
      "A data plan for efficacy, toxicity and chemistry",
      "Label claims trimmed to what the file can support",
    ],
    forWhom: [
      "Brands that sold on a provisional G3 registration",
      "Companies preparing a product for Schedule VI notification",
      "Importers checking whether an overseas biostimulant can be sold in India",
    ],
    problems: [
      "Can I still sell on the provisional certificate?",
      "Which studies come first, and which claims should I drop?",
      "The label says more than the data.",
    ],
    deliverables: [
      "Schedule VI gap assessment",
      "Data-generation roadmap",
      "Trial protocol design",
      "Dossier drafting and review",
      "Query support",
      "Label and claims review",
    ],
    engagement: [
      { phase: "Diagnose", detail: "Product composition, current notification status and the claims on the pack." },
      { phase: "Roadmap", detail: "Studies in an order that protects the claim you actually need." },
      { phase: "Execute", detail: "Protocol, laboratory coordination and dossier text." },
      { phase: "Transfer", detail: "A claims register your marketing team can live with." },
    ],
    proofClaimIds: ["exp", "phd"],
    sources: [sources.pibBiostimulant, sources.agriwelfareBiostimulants, sources.egazette],
    faqs: [
      {
        question: "What is Schedule VI of the Fertiliser (Control) Order?",
        answer:
          "Schedule VI is the list of biostimulant products notified under the Fertiliser (Control) Order, 1985. It was introduced, with Clause 20C, by S.O. 882(E) dated 23 Feb 2021. A product that is not on that schedule is not a legally sellable biostimulant.",
      },
      {
        question: "What data is needed to register a biostimulant in India?",
        answer:
          "The public position is that bio-efficacy, toxicity and chemistry data are required before a product can be included in Schedule VI. The exact protocol is the one in the current guidelines and gazette notifications. We turn that list into a study plan for your composition and claim. We do not invent a shorter list.",
      },
      {
        question: "What happened on 17 Jun 2025?",
        answer:
          "The Press Information Bureau stated that provisional registration for biostimulant products stands invalid since 17 Jun 2025, and that no further extension was given beyond 16 Jun 2025.",
      },
      {
        question: "Will you tell me how many products are on Schedule VI?",
        answer:
          "No. Public counts conflict, so we do not quote a number. We check the gazette notifications that apply to your composition.",
      },
      {
        question: "Can the same dossier cover a pesticide claim?",
        answer:
          "Not by itself. A pest-control claim can pull the product into the Insecticides Act and CIB&RC. We split claims before the first trial protocol is frozen.",
      },
      {
        question: "How long will notification take?",
        answer:
          "We will not give you a fixed month count. It depends on the data you already hold, the season in which a crop trial can run, and the queries that come back. The assessment states the critical path. It is not a promise of a date.",
      },
    ],
    relatedInsightSlugs: [
      "biostimulant-provisional-registrations-india",
      "fco-schedule-vi-biostimulant-dossier",
    ],
    segmentId: "brand",
    regulatory: true,
  },
  {
    slug: "biopesticide-registration-cibrc-9-3",
    tier: "A",
    navLabel: "Biopesticide, CIB&RC 9(3)",
    h1: "Biopesticide registration under CIB&RC Section 9(3)",
    metaTitle: "Biopesticide registration, CIB&RC 9(3)",
    metaDescription:
      "Section 9(3) versus the discontinued 9(3B) route for already-registered biopesticide strains. DNA fingerprint, analytical reports and dossier planning.",
    answer:
      "CIB&RC discontinued Section 9(3B) provisional registration for already-registered biopesticide strains. The public notice was uploaded on 28 Apr 2020. For the same formulation of an already-registered strain, the applicant goes to Section 9(3) with a strain DNA fingerprint and an analytical report. Harmonised bio-pesticide data guidelines were published by CIB&RC on 23 May 2022. A new strain is not the same case as an already-registered strain. We plan the file. We do not guarantee a registration certificate.",
    problemLine: "The 9(3B) route is closed for strains that are already registered.",
    outcomes: [
      "The correct 9(3) path for your strain, not a copied checklist",
      "DNA fingerprint and analytical-report planning",
      "Query replies that match the guideline you were cited",
    ],
    forWhom: [
      "Makers of Trichoderma, Pseudomonas, Bacillus, Beauveria, Metarhizium and other microbial pesticides",
      "Companies whose 9(3B) provisional registration can no longer be extended",
      "Teams bringing a new strain, who need the fuller data set",
    ],
    problems: [
      "We were told to stop filing under 9(3B).",
      "We do not know whether our strain counts as already registered.",
      "The secretariat has asked for a DNA fingerprint and an analytical test report.",
    ],
    deliverables: [
      "Route assessment: already-registered strain versus new strain",
      "Data roadmap, including DNA fingerprinting and analytical reports where those are the cited requirements",
      "Protocol design for any bio-efficacy, toxicology or chemistry the guideline still requires",
      "Dossier drafting and query support",
      "Label and claims review",
    ],
    engagement: [
      { phase: "Diagnose", detail: "Strain identity, formulation and any earlier 9(3) or 9(3B) certificate." },
      { phase: "Roadmap", detail: "The guideline that actually applies, and the studies you can skip only if the notice says so." },
      { phase: "Execute", detail: "Sample plan, dossier and replies." },
      { phase: "Transfer", detail: "A strain file your QA team can defend in an audit." },
    ],
    proofClaimIds: ["exp", "bt"],
    sources: [sources.ppqsGuidelines, sources.ppqs, sources.pibPmb],
    faqs: [
      {
        question: "What is the difference between Section 9(3) and 9(3B)?",
        answer:
          "Section 9(3B) was the provisional route. Section 9(3) is the regular registration. For already-registered biopesticide strains, CIB&RC decided in 2020 to stop 9(3B) registrations and extensions. Applicants apply under 9(3). For the same formulation of an already-registered strain, the simplified file cited in that decision is a DNA fingerprint report and an analytical test report. A new strain does not inherit that simplification.",
      },
      {
        question: "Why was 9(3B) discontinued for already-registered strains?",
        answer:
          "The Registration Committee noted that guidelines for the same formulation of an already-registered strain had been simplified, and that efficacy, safety and packaging data were not required in that narrow case. It then decided to do away with 9(3B) registration and extensions for those strains. The public notice was uploaded on 28 Apr 2020.",
      },
      {
        question: "How long does biopesticide registration take in India?",
        answer:
          "There is no honest single number. An already-registered strain with a clean DNA fingerprint and analytical report is a different critical path from a new strain that still needs efficacy and toxicology. Season, laboratory backlog and query cycles all move the date. We will map the path. We will not promise a month.",
      },
      {
        question: "What did the 23 May 2022 guidelines change?",
        answer:
          "CIB&RC published harmonised bio-pesticide data guidelines on 23 May 2022, including the treatment of consortium products. Use the guideline that matches your product. Do not mix a consortium checklist with a single-strain file.",
      },
      {
        question: "Does the draft Pesticides Management Bill change my file today?",
        answer:
          "No. The revised draft released for consultation in Jan 2026 is a proposal. It is not the Insecticides Act. File under the law that is in force, and watch the accreditation and digital-registration proposals so a new lab you hire will still be usable.",
      },
      {
        question: "Can you work with our existing regulatory consultant?",
        answer:
          "Yes. We will take the science, the strain identity and the study design. Your consultant can keep the portal filing if that is already working.",
      },
    ],
    relatedInsightSlugs: ["biopesticide-9-3-vs-9-3b", "draft-pesticides-management-bill-2025"],
    segmentId: "brand",
    regulatory: true,
  },
  {
    slug: "biofertiliser-fco-compliance",
    tier: "A",
    navLabel: "Biofertiliser FCO compliance",
    h1: "Biofertiliser FCO compliance",
    metaTitle: "Biofertiliser FCO compliance in India",
    metaDescription:
      "FCO quality, labelling and dossier support for biofertiliser makers, including units in Tamil Nadu. Compliance planning, not a guaranteed approval.",
    answer:
      "Biofertilisers are regulated under the Fertiliser (Control) Order, 1985, which sets quality standards and labelling duties. We help makers and new units check the specification they claim, the quality tests behind it, and the gaps a state laboratory will actually notice. This is compliance and dossier readiness. It is not a guarantee from the Controller of Fertilisers.",
    problemLine: "The bag claims a biofertiliser standard the batch cannot show.",
    outcomes: [
      "The FCO specification matched to the organism you actually pack",
      "A QC list a state laboratory will recognise",
      "Label text that stays inside the standard",
    ],
    forWhom: [
      "Biofertiliser manufacturers",
      "New units in Tamil Nadu and other states setting up production",
      "Brands that failed a quality draw",
    ],
    problems: [
      "Our CFU on the bag and our CFU in the lab are different numbers.",
      "We are setting up a unit and do not know which tests to run before the first sale.",
      "A sample failed at the state laboratory.",
    ],
    deliverables: [
      "Specification and label review",
      "Quality-test plan for the organism and carrier",
      "Data roadmap where a file has to be built or repaired",
      "Failure investigation when a notified laboratory reports a miss",
      "SOP outline for sampling and retention",
    ],
    engagement: [
      { phase: "Diagnose", detail: "Product, carrier, claimed specification and any failed report." },
      { phase: "Roadmap", detail: "Tests, sampling points and label edits." },
      { phase: "Execute", detail: "Method review, dossier text and corrective actions." },
      { phase: "Transfer", detail: "SOPs the production chemist can run without us." },
    ],
    proofClaimIds: ["pgpr", "exp"],
    sources: [sources.agriwelfare, sources.egazette],
    faqs: [
      {
        question: "Is a biofertiliser the same as a biostimulant under the FCO?",
        answer:
          "No. Biofertilisers have their own specifications under the Fertiliser (Control) Order. Biostimulants are dealt with under Clause 20C and Schedule VI. A product can be mis-labelled as both. We pick the claim the data and the organism can support.",
      },
      {
        question: "Can you help a new biofertiliser unit in Tamil Nadu?",
        answer:
          "Yes. We are based in Coimbatore and work with units across India. The work covers the process, the QC list and the FCO specification. It does not replace your factory licence or a state department approval.",
      },
      {
        question: "What if the state laboratory failed our sample?",
        answer:
          "Bring the report, the method and the retention sample if you still have it. We separate a true batch failure from a sampling or method problem, then write the corrective action.",
      },
      {
        question: "Do you publish a fee for FCO work?",
        answer:
          "The readiness assessment is quoted after a short diagnostic. Project work is quoted after that. Fees exclude GST, travel and third-party tests.",
      },
      {
        question: "Which organisms do you cover?",
        answer:
          "Typical biofertiliser and PGPR organisms, including our founder's work on 100 L PGPR production. The specification still has to match the organism named on your bag.",
      },
    ],
    relatedInsightSlugs: ["qc-lab-biologicals-plant", "trichoderma-pseudomonas-contamination"],
    segmentId: "brand",
    regulatory: true,
  },
  {
    slug: "fermentation-scale-up-contamination-troubleshooting",
    tier: "A",
    navLabel: "Fermentation scale-up",
    h1: "Fermentation scale-up and contamination troubleshooting",
    metaTitle: "Fermentation scale-up for biologicals",
    metaDescription:
      "On-site help for low CFU, contamination, foam, viscosity and shelf life in Trichoderma, Bacillus, Beauveria and other biologicals plants.",
    answer:
      "We troubleshoot fermentation for Trichoderma, Pseudomonas, Bacillus, Beauveria, Metarhizium, PGPR and other biologicals. The usual failures are low CFU or spore counts, contamination, foam, viscosity, a short shelf life, and a process that worked in a flask and failed in the tank. More in-house fermentation capacity in India means more of these failures. Our founder, Dr. Gokulanathan, has resolved sporulation viscosity and foam issues in 200–1,000 L fermenters.",
    problemLine: "The flask worked. The tank does not.",
    outcomes: [
      "A written plant diagnostic, not a generic SOP pack",
      "Media and parameter changes you can trial on the next batch",
      "CAPA your QA head can show an auditor",
    ],
    forWhom: [
      "Producers of Trichoderma, Pseudomonas, Bacillus, Beauveria, Metarhizium and PGPR",
      "New plants that are commissioning",
      "Plants with batch rejections or state-laboratory failures",
    ],
    problems: [
      "CFU or spore counts are below the label.",
      "Contamination appears after scale-up.",
      "Foam or viscosity is out of control.",
      "Shelf life is shorter than the pack claims.",
      "The state laboratory failed the batch.",
    ],
    deliverables: [
      "On-site Plant Health Check",
      "Media and parameter optimisation across aeration, agitation, dissolved oxygen and pH",
      "CIP/SIP audit",
      "Root-cause analysis with CAPA",
      "Solid-state or submerged fermentation selection",
      "Carrier and formulation redesign for WP, SC, liquid or encapsulation",
      "SOPs and operator training",
    ],
    engagement: [
      { phase: "Diagnose", detail: "A free 30-minute call, then a one- to two-day Plant Health Check on site." },
      { phase: "Roadmap", detail: "Ranked causes and the next three batches to instrument." },
      { phase: "Execute", detail: "We work beside your production and QA leads while the change is tried." },
      { phase: "Transfer", detail: "SOPs and a short training so the night shift can hold the change." },
    ],
    proofClaimIds: ["ferm", "pgpr", "bt"],
    sources: [],
    faqs: [
      {
        question: "Why is my Trichoderma batch contaminated?",
        answer:
          "Common causes are a impure seed culture, a sterilisation step that does not reach the load, weak air handling, biofilm in fittings, contaminated water or carrier, and sampling that looks like contamination when the batch is clean. The Plant Health Check separates those causes. We do not name one cause from a WhatsApp photo.",
      },
      {
        question: "How do I increase CFU in a liquid biofertiliser?",
        answer:
          "Count where the CFU is lost: seed, production, downstream, or the pack. Then change the variable that the data implicates — media, oxygen transfer, pH, harvest timing, or what the carrier does to the cells. A higher label claim without a process change will fail the next draw.",
      },
      {
        question: "How do I stop foaming in a biopesticide fermenter?",
        answer:
          "Foam is a process signal. It often tracks viscosity, aeration rate and media composition during fungal sporulation. Antifoam can be part of the fix and can also hurt oxygen transfer or the spore. We look at the 200–1,000 L window, where our founder has resolved sporulation viscosity and foam, before we recommend a chemical.",
      },
      {
        question: "Should I use solid-state or submerged fermentation?",
        answer:
          "It depends on the organism, the contamination risk you can live with, the form you must sell, and the labour you have. Solid-state can suit some fungi and a simple plant. Submerged gives you instrumentation and a cleaner scale story, and it punishes a weak SIP. We write the choice down for your organism. We do not treat one mode as universally better.",
      },
      {
        question: "What is a Plant Health Check?",
        answer:
          "One to two days on site and a written report. It is the diagnostic in front of a longer scale-up project. The fee is confirmed when we know the plant. It excludes GST, travel and third-party tests.",
      },
      {
        question: "Do you stay for the trial batches?",
        answer:
          "On a project, yes. We are a small senior team, so the person who saw the fermenter writes the change and stands there when it is run. It is not handed to a junior.",
      },
    ],
    relatedInsightSlugs: [
      "trichoderma-pseudomonas-contamination",
      "foam-viscosity-spore-yield",
      "shelf-life-microbial-formulations",
    ],
    segmentId: "plant",
    regulatory: false,
  },
  {
    slug: "biologicals-qa-qc-lab-setup-nabl",
    tier: "A",
    navLabel: "QA/QC and lab readiness",
    h1: "Biologicals QC lab setup and accreditation readiness",
    metaTitle: "Biologicals QC lab setup and NABL readiness",
    metaDescription:
      "QC lab design, test SOPs and quality-system support for biologicals plants preparing for ISO/IEC 17025. ISO 15189 is not an agri-lab standard.",
    answer:
      "We set up and tighten QC for biologicals plants: lab layout, the equipment list, and SOPs for CFU, purity, contaminants, moisture and shelf life. We also prepare the quality system for NABL accreditation under ISO/IEC 17025, including internal audit and help closing non-conformities. Our founder, Dr. Gokulanathan, is a certified ISO 15189 internal auditor. That is a medical-laboratory standard. We apply the auditor's discipline to agri-biologicals labs. We do not claim ISO 15189 is an agricultural accreditation.",
    problemLine: "The plant is scaling faster than the lab that is supposed to release it.",
    outcomes: [
      "A lab list matched to the tests you must release on",
      "SOPs an operator can follow on a night shift",
      "An internal audit that finds the gaps before an assessor does",
    ],
    forWhom: [
      "Manufacturers setting up an in-house QC lab",
      "Labs preparing for NABL (ISO/IEC 17025)",
      "Teams answering audit findings",
      "Firms watching the accreditation proposal in the draft Pesticides Management Bill",
    ],
    problems: [
      "We release batches on a method nobody has written down.",
      "An audit found the same gaps again.",
      "We need a lab, and we are about to buy the wrong equipment.",
    ],
    deliverables: [
      "Lab design and equipment list",
      "Test SOPs for CFU, purity, contaminants, moisture and shelf life",
      "Quality-system documentation",
      "Internal audit",
      "Support to close non-conformities",
    ],
    engagement: [
      { phase: "Diagnose", detail: "What you release, what you only claim, and what an assessor already wrote down." },
      { phase: "Roadmap", detail: "Documents and equipment in the order that unblocks release." },
      { phase: "Execute", detail: "Draft SOPs, run an internal audit, and sit with the people who do the test." },
      { phase: "Transfer", detail: "Your chemist owns the system. We do not remain the quality manual." },
    ],
    proofClaimIds: ["iso15189"],
    sources: [sources.pibPmb, sources.ppqs],
    faqs: [
      {
        question: "Is ISO 15189 the accreditation for an agri-biologicals lab?",
        answer:
          "No. ISO 15189 is a medical-laboratory standard. Our founder holds an internal-auditor certificate in it from 2020, and we use that discipline on biologicals labs. Accreditation for a testing lab that serves this industry is generally discussed under ISO/IEC 17025 and NABL. Do not print ISO 15189 on an agricultural product as if it were the product standard.",
      },
      {
        question: "What QC tests should a biopesticide manufacturer run?",
        answer:
          "At a minimum, the tests that match the specification you sell: viable count or spore count, purity, specified contaminants, moisture where the form requires it, and a shelf-life check that supports the date on the pack. Identity of the strain belongs in the file. The method has to be written, not remembered.",
      },
      {
        question: "Does the draft Bill already require accredited labs?",
        answer:
          "The revised draft Pesticides Management Bill, 2025 proposes mandatory accreditation of testing laboratories. It is not law. If you are choosing a laboratory now, prefer one that can show a current accreditation rather than a promise to apply later.",
      },
      {
        question: "Can you close non-conformities from an audit we already had?",
        answer:
          "Yes, if you share the report. We will separate a document gap from a method that cannot generate the number you need.",
      },
      {
        question: "Will you staff the lab?",
        answer:
          "No. We design, write and audit. Your people run the bench. Training is part of the handover.",
      },
    ],
    relatedInsightSlugs: ["qc-lab-biologicals-plant", "draft-pesticides-management-bill-2025"],
    segmentId: "plant",
    regulatory: true,
  },
  {
    slug: "pheromone-lure-smart-trap-development",
    tier: "B",
    navLabel: "Pheromone lures and traps",
    h1: "Pheromone lure and smart-trap development",
    metaTitle: "Pheromone lure and smart-trap development",
    metaDescription:
      "Controlled-release pheromone lures, field-longevity tests and trap-sensor protocols. South Indian coconut and plantation IPM, stated as applications.",
    answer:
      "We design controlled-release pheromone lures and the tests around them: wax or polymer matrices, field longevity, trap-sensor calibration, deployment design and lure manufacturing scale-up. Our founder, Dr. Gokulanathan, has scaled 500 kg of wax-matrix lures for ICT smart traps, with 70% trap sensitivity and a 40% improvement in early-detection alerts across three port sites. Coconut, tea, coffee, arecanut and horticulture in South India are application areas for this work. They are not results we are claiming for those crops.",
    problemLine: "The trap hardware is ready. The lure does not last, or the alert is late.",
    outcomes: [
      "A matrix chosen for the release window you need",
      "A longevity test you can repeat",
      "A scale-up path that does not stop at a laboratory batch",
    ],
    forWhom: [
      "Trap and IoT companies",
      "Plantations and FPOs",
      "Teams working on port or quarantine surveillance",
    ],
    problems: [
      "The lure dies before the service interval.",
      "The sensor and the lure were never calibrated together.",
      "A laboratory lure cannot be made at the kilogram scale.",
    ],
    deliverables: [
      "Controlled-release lure matrix design in wax or polymer",
      "Field-longevity testing",
      "Trap-sensor calibration protocols",
      "Deployment design",
      "Scale-up of lure manufacturing",
    ],
    engagement: [
      { phase: "Diagnose", detail: "Insect, dispenser life, climate and what the trap electronics already measure." },
      { phase: "Roadmap", detail: "Matrix trials and the field test that would change a buying decision." },
      { phase: "Execute", detail: "Formulation, longevity reads and manufacturing steps." },
      { phase: "Transfer", detail: "A batch record your production team can run." },
    ],
    proofClaimIds: ["lure", "lureSens"],
    sources: [sources.ppqs],
    faqs: [
      {
        question: "How do pheromone traps for red palm weevil work?",
        answer:
          "Food-baited and pheromone traps are used in coconut IPM to detect and mass-trap red palm weevil. The lure has to release the right semiochemical over the service interval, and the trap has to be placed and serviced. We treat coconut around Coimbatore and Pollachi as an application area. We do not transfer port-surveillance percentages onto a plantation.",
      },
      {
        question: "How do controlled-release pheromone lures work?",
        answer:
          "The active is held in a matrix, often wax or a polymer, so it leaves the dispenser over weeks rather than days. Release depends on the matrix, the load, temperature and the way the dispenser is vented. Longevity is a measurement, not a slogan on the pouch.",
      },
      {
        question: "What does the 70% sensitivity figure refer to?",
        answer:
          "It refers to ICT smart-trap work: 70% trap sensitivity and a 40% improvement in early-detection alerts across three port sites, alongside 500 kg of wax-matrix lure scale-up. It is not a coconut-yield claim.",
      },
      {
        question: "Can you work with an existing IoT trap?",
        answer:
          "Yes. We write the calibration protocol between the lure and the sensor. We do not redesign your electronics unless the brief includes it.",
      },
      {
        question: "Do pheromone lures need a pesticide registration?",
        answer:
          "Many semiochemical products are examined under the insecticides framework. Whether your dispenser needs a registration depends on the active, the claim and the current CIB&RC guideline. We will check the guideline that applies. We will not tell you that a lure is exempt without reading it.",
      },
    ],
    relatedInsightSlugs: ["red-palm-weevil-pheromone-south-india"],
    segmentId: "rnd",
    regulatory: false,
  },
  {
    slug: "aquaculture-probiotics-caa-certification",
    tier: "B",
    navLabel: "Aquaculture probiotics",
    h1: "Aquaculture probiotics and CAA certification",
    metaTitle: "Aquaculture probiotics and CAA certification",
    metaDescription:
      "Strain, scale-up and CAA certificate-of-compliance support for shrimp probiotics and feed additives. The Authority decides, not the consultant.",
    answer:
      "Under Rule 18(3) of the Coastal Aquaculture Authority Rules, 2024, aquaculture inputs such as probiotics are not to be made available or used in coastal aquaculture without certification from the Authority, unless the Authority has exempted them. We help shrimp-input makers and importers with strain selection, production scale-up, the technical side of the certificate-of-compliance file, and antibiotic-free QA. Our founder, Dr. Gokulanathan, has developed and field-validated a microbial feed additive against WSSV and AHPND in L. vannamei, and it was licensed to industry. A CAA certificate is the Authority's decision.",
    problemLine: "The product is in the water before the certificate is.",
    outcomes: [
      "A strain and process story the file can defend",
      "Documentation support for the certificate of compliance",
      "An antibiotic-free QA system, written down",
    ],
    forWhom: [
      "Shrimp-input makers and importers in the Tamil Nadu, Andhra Pradesh and Gujarat coastal belts",
    ],
    problems: [
      "We do not have a CAA certificate of compliance for a probiotic we already sell.",
      "The strain in the pouch is not the strain in the process sheet.",
      "We need an antibiotic-free system a buyer will audit.",
    ],
    deliverables: [
      "Strain selection and validation",
      "Production scale-up",
      "CAA certificate-of-compliance documentation support",
      "Antibiotic-free QA systems",
    ],
    engagement: [
      { phase: "Diagnose", detail: "Product category, label, process and any application already filed." },
      { phase: "Roadmap", detail: "Gaps against Rule 18 and the Authority's current guideline." },
      { phase: "Execute", detail: "Technical documents, QA system and scale-up steps." },
      { phase: "Transfer", detail: "Your regulatory lead files. We stay on the science." },
    ],
    proofClaimIds: ["aqua"],
    sources: [sources.caaRules, sources.caa],
    faqs: [
      {
        question: "Do aquaculture probiotics need CAA certification?",
        answer:
          "Rule 18(3) of the Coastal Aquaculture Authority Rules, 2024 says no aquaculture input shall be made available or used in coastal aquaculture without certification from the Authority, except inputs the Authority specifically exempts. Probiotics are aquaculture inputs. Read the current exemption list before you assume you are outside the rule.",
      },
      {
        question: "What is the application called?",
        answer:
          "The Rules provide for a certificate of compliance. The application form published by the Authority is Form III. Check the current form and fee on caa.gov.in before you file. We support the technical documents. We do not file as if we were the applicant.",
      },
      {
        question: "Can you guarantee the certificate?",
        answer:
          "No. The Authority grants or refuses it. Our work is dossier readiness and the production system behind the label.",
      },
      {
        question: "What proof do you bring to this work?",
        answer:
          "Our founder, Dr. Gokulanathan, developed and field-validated a microbial feed additive against WSSV and AHPND in L. vannamei, and licensed it to industry. Your strain still needs its own data.",
      },
      {
        question: "Do you work with importers?",
        answer:
          "Yes, on the technical file and on whether the overseas process can support an antibiotic-free claim. A foreign health certificate is not a CAA certificate.",
      },
    ],
    relatedInsightSlugs: ["caa-aquaculture-probiotics"],
    segmentId: "aqua",
    regulatory: true,
  },
  {
    slug: "agri-biotech-technical-due-diligence",
    tier: "B",
    navLabel: "Technical due diligence",
    h1: "Technical due diligence for agri-biotech investments",
    metaTitle: "Agri-biotech technical due diligence",
    metaDescription:
      "Technology, plant, IP-readiness and regulatory-status review for investors in agri-biologicals. A red-flag memo in two to three weeks.",
    answer:
      "We review agri-biologicals companies for investors, lenders and strategic buyers. The work covers the technology and whether the IP is in a state that can be licensed, the plant and the process, and the regulatory status: is the registration still valid, who owns the data, and is the strain authorised? You receive a scale-up risk score and a red-flag memo, planned over two to three weeks. We do not value the company. We tell you whether the science and the factory support the story.",
    problemLine: "The deck says the registration is done. The gazette may disagree.",
    outcomes: [
      "A red-flag memo in two to three weeks",
      "A scale-up risk score tied to the plant you can walk",
      "Regulatory status checked, not repeated from the deck",
    ],
    forWhom: [
      "Venture capital and private equity funds",
      "Strategic acquirers",
      "Lenders and family offices",
    ],
    problems: [
      "We cannot tell if the strain authorisation sits with the company.",
      "The capacity number and the contamination history do not match.",
      "A provisional registration is being described as a registration.",
    ],
    deliverables: [
      "Technology and IP-readiness review",
      "Plant and process audit",
      "Regulatory-status verification",
      "Scale-up risk score",
      "Red-flag memo in two to three weeks",
    ],
    engagement: [
      { phase: "Diagnose", detail: "The question the investment committee actually needs answered." },
      { phase: "Roadmap", detail: "Documents and the site visit, scoped so the memo lands in two to three weeks." },
      { phase: "Execute", detail: "Interviews, a plant walk where you can arrange it, and source checks." },
      { phase: "Transfer", detail: "The memo and a call. We do not join the board unless a separate retainer is agreed." },
    ],
    proofClaimIds: ["exp", "ferm", "iso15189"],
    sources: [sources.pibBiostimulant, sources.ppqs, sources.caa],
    faqs: [
      {
        question: "What should investors check in an agri-biologicals company?",
        answer:
          "Ask whether the registration is valid today, who owns the data, whether the strain authorisation is in the company's name, whether the plant has repeated the batch, and what contamination and shelf-life records show. A provisional biostimulant registration that died on 17 Jun 2025 is not a registration.",
      },
      {
        question: "Do you do legal or financial diligence?",
        answer:
          "No. We do the technical and regulatory-status review. Your counsel reads the contracts. Your accountant reads the books.",
      },
      {
        question: "How fast is the memo?",
        answer:
          "Two to three weeks for a red-flag memo, if the company provides documents and plant access promptly. A refused site visit is itself a finding.",
      },
      {
        question: "Will you name the target in a case study?",
        answer:
          "No. Diligence is confidential. Case studies on this site stay anonymised unless a written consent says otherwise.",
      },
      {
        question: "Can a lender use the same scope?",
        answer:
          "Yes. The questions are the same: can this plant make the product, and is the product legal to sell?",
      },
    ],
    relatedInsightSlugs: ["technical-due-diligence-biologicals"],
    segmentId: "investor",
    regulatory: true,
  },
  {
    slug: "rnai-dsrna-biopesticide-development",
    tier: "C",
    navLabel: "RNAi and dsRNA",
    h1: "RNAi and dsRNA biopesticide development",
    metaTitle: "RNAi and dsRNA biopesticide development",
    metaDescription:
      "Target discovery, dsRNA design, expression and bioassays for crop-protection startups. India has no dedicated dsRNA spray framework yet.",
    answer:
      "India has no dedicated regulatory framework for sprayable dsRNA products yet. We help you build the science and the evidence base now, and map the likely regulatory pathway so you are ready when it is. The work covers target-gene discovery, dsRNA and siRNA design, microbial expression, bioassay protocols, and the design of off-target and non-target risk assessment. We do not describe a foreign approval as an Indian registration, and we do not publish an efficacy percentage that has not been confirmed for disclosure.",
    problemLine: "The construct works in a paper. The regulatory path in India does not exist yet.",
    outcomes: [
      "A target and design rationale a partner can review",
      "A bioassay protocol, not a single unreplicated pot",
      "A pathway note that stays honest about the Indian gap",
    ],
    forWhom: [
      "Agritech startups",
      "Corporate R&D groups",
      "Research institutes",
      "Global firms entering India",
    ],
    problems: [
      "We have a sequence and no bioassay that a reviewer would respect.",
      "We need an expression system, not another slide.",
      "Investors are asking if RNAi is approved in India.",
    ],
    deliverables: [
      "Target-gene discovery from genomics or transcriptomics",
      "dsRNA and siRNA design",
      "Microbial expression systems, for example E. coli",
      "Bioassay protocols",
      "Off-target and non-target risk-assessment design",
      "Regulatory pathway mapping",
    ],
    engagement: [
      { phase: "Diagnose", detail: "Target pest, what you already sequenced, and the decision you need in the next quarter." },
      { phase: "Roadmap", detail: "Experiments in an order that creates evidence, plus the Indian regulatory gap written in plain language." },
      { phase: "Execute", detail: "Design, expression plan and bioassay protocol, with your scientists." },
      { phase: "Transfer", detail: "Protocols your team runs. We do not remain the only people who understand the construct." },
    ],
    proofClaimIds: ["phd", "exp"],
    sources: [sources.ppqs, sources.pibPmb],
    faqs: [
      {
        question: "Is RNAi pest control approved in India?",
        answer:
          "India has no dedicated regulatory framework for sprayable dsRNA products yet. Treat any product claim of an Indian RNAi registration with caution and ask which statute it was granted under. We can help you build evidence and map a likely path. We cannot obtain an approval that the framework does not yet provide.",
      },
      {
        question: "What does the project actually produce?",
        answer:
          "A target rationale, designs, an expression approach, a bioassay protocol and a written view of the regulatory gap. It does not produce a registration certificate.",
      },
      {
        question: "Will you quote a kill percentage?",
        answer:
          "Only when the trial scale and the metric are confirmed and you have the right to publish them. Until then we will not put a percentage on this site or in a deck.",
      },
      {
        question: "Can a corporate R&D group hire this as a retainer?",
        answer:
          "Yes. A technical retainer is monthly advisory hours, scoped after the diagnostic.",
      },
      {
        question: "Do you design the off-target work as well as the construct?",
        answer:
          "We design the assessment. The studies themselves run at a laboratory we agree with you. We coordinate. We do not pretend one bench can do every non-target species.",
      },
    ],
    relatedInsightSlugs: ["rnai-crop-protection-india"],
    segmentId: "rnd",
    regulatory: true,
  },
  {
    slug: "korea-india-agri-biotech-technology-transfer",
    tier: "C",
    navLabel: "Korea–India technology transfer",
    h1: "Korea–India agri-biotech technology transfer",
    metaTitle: "Korea–India agri-biotech technology transfer",
    metaDescription:
      "Technical scouting, validation and licensing support for Korean and Indian agri-biotech teams, plus a local trial and registration roadmap.",
    answer:
      "We help Korean biotech firms entering India, and Indian firms licensing Korean or other technologies. The work is technical: scouting, validation, the technical side of licensing, and a local trial and registration roadmap. Legal paperwork stays with your counsel. Our founder, Dr. Gokulanathan, has field-validated a microbial feed additive against WSSV and AHPND in L. vannamei and licensed it to industry. We do not publish an employer name or dates from his Korea years until that wording is confirmed.",
    problemLine: "The technology works in one country. India still needs a trial and a legal product.",
    outcomes: [
      "A technical view of whether the technology is real",
      "A licensing brief your lawyer can use",
      "An India trial and registration roadmap",
    ],
    forWhom: [
      "Korean biotech firms entering India",
      "Indian firms licensing Korean or global technologies",
    ],
    problems: [
      "We cannot tell if the strain and the data will transfer.",
      "We need a technical voice in the licence, not only a lawyer.",
      "We do not know which Indian regime the product falls under.",
    ],
    deliverables: [
      "Technology scouting",
      "Technical validation",
      "Licensing support on the technical side only",
      "Local trial and registration roadmap",
    ],
    engagement: [
      { phase: "Diagnose", detail: "The asset, the country it came from, and the Indian claim you want to make." },
      { phase: "Roadmap", detail: "What must be repeated in India, and which regulator will see it." },
      { phase: "Execute", detail: "Validation plan and technical schedules for the licence." },
      { phase: "Transfer", detail: "Your team and your counsel own the deal. We own the science notes." },
    ],
    proofClaimIds: ["aqua", "exp"],
    sources: [sources.agriwelfare, sources.ppqs, sources.caa],
    faqs: [
      {
        question: "Do you negotiate the commercial terms?",
        answer:
          "No. We support the technical side of a licence. Price, equity and the contract are for you and your counsel.",
      },
      {
        question: "Will a Korean registration let us sell in India?",
        answer:
          "No. India has its own file for biostimulants, biopesticides, biofertilisers and aquaculture inputs. The roadmap says which one applies.",
      },
      {
        question: "Can you name the Korean agency you worked with?",
        answer:
          "Not yet. That wording is waiting on confirmation. We will not put an agency name on the site until it is cleared.",
      },
      {
        question: "What proof can you share today?",
        answer:
          "The approved example is a microbial feed additive against WSSV and AHPND in L. vannamei that was field-validated and licensed to industry.",
      },
      {
        question: "Do you travel?",
        answer:
          "Yes, by agreement. Travel is billed separately from the professional fee.",
      },
    ],
    relatedInsightSlugs: ["technical-due-diligence-biologicals", "rnai-crop-protection-india"],
    segmentId: "rnd",
    regulatory: true,
  },
  {
    slug: "training-biologicals-production",
    tier: "S",
    navLabel: "Training programmes",
    h1: "Training for biologicals production and QC",
    metaTitle: "Training for biologicals production",
    metaDescription:
      "One-day QC workshops, three-day production bootcamps and SOP kits for FPOs, KVKs and Bio-input Resource Centres. Tamil delivery is available.",
    answer:
      "We train the people who have to make and test biological inputs: FPOs, KVKs, Bio-input Resource Centres under the National Mission on Natural Farming, agricultural colleges, state departments and CSR programmes. Formats are a one-day QC workshop, a three-day production bootcamp, and SOP kits. Tamil-language delivery is available. The training teaches method. It does not confer a registration or an accreditation.",
    problemLine: "The unit has a tank and no written method.",
    outcomes: [
      "A workshop built around your organism and your mistakes",
      "SOP kits operators can follow after we leave",
      "Tamil or English delivery",
    ],
    forWhom: [
      "FPOs and KVKs",
      "Bio-input Resource Centres under the National Mission on Natural Farming",
      "Agricultural colleges, state departments and CSR programmes",
    ],
    problems: [
      "Operators were trained once, by someone who did not write the SOP.",
      "QC is a microscope in a corner and a notebook.",
      "We need a programme our funder will recognise.",
    ],
    deliverables: [
      "One-day QC workshop",
      "Three-day production bootcamp",
      "SOP kits",
      "Tamil-language delivery when you need it",
    ],
    engagement: [
      { phase: "Diagnose", detail: "Who is in the room, what they already produce, and which language they work in." },
      { phase: "Roadmap", detail: "A one-day or three-day outline. We do not run a generic slide deck." },
      { phase: "Execute", detail: "The session, on your floor where that is possible." },
      { phase: "Transfer", detail: "The SOP kit stays with the centre." },
    ],
    proofClaimIds: ["exp", "iso15189"],
    sources: [sources.nmnf],
    faqs: [
      {
        question: "What is a Bio-input Resource Centre?",
        answer:
          "Under the National Mission on Natural Farming, Bio-input Resource Centres are local units meant to produce biological inputs for farmers. We train production and QC at those centres. We do not administer the mission.",
      },
      {
        question: "Is Tamil-language delivery actually available?",
        answer:
          "Yes. Say so when you enquire and we will deliver in Tamil or in English.",
      },
      {
        question: "Does the workshop include a certificate of accreditation?",
        answer:
          "No. You can have an attendance note. Accreditation is a separate process with NABL or the relevant authority.",
      },
      {
        question: "Can a college book this for students?",
        answer:
          "Yes. The bootcamp is more useful if we can stand next to a fermenter or a preparation room. A classroom-only session stays honest about that limit.",
      },
      {
        question: "How are fees set?",
        answer:
          "Training is quoted for the format, the headcount and the place. Fees exclude GST and travel.",
      },
    ],
    relatedInsightSlugs: ["qc-lab-biologicals-plant", "trichoderma-pseudomonas-contamination"],
    segmentId: "institution",
    regulatory: false,
  },
];

export function serviceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}

export const tierMeta: Record<Tier, { label: string; blurb: string }> = {
  A: {
    label: "Core",
    blurb: "The work most plants and brands need first: a legal product and a batch that repeats.",
  },
  B: {
    label: "Specialist",
    blurb: "Pheromones, aquaculture inputs, and a technical view for investors.",
  },
  C: {
    label: "Flagship",
    blurb: "RNAi, and technology moving between Korea and India.",
  },
  S: {
    label: "Training",
    blurb: "Workshops and SOP kits for centres, colleges and FPOs.",
  },
};

export const regulatoryNote = reviewed;
