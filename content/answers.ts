import { sources, type Source } from "@/content/sources";

export type AnswerEntry = {
  slug: string;
  question: string;
  metaTitle: string;
  metaDescription: string;
  lead: string;
  paragraphs: string[];
  sources: Source[];
  regulatory: boolean;
};

export const answers: AnswerEntry[] = [
  {
    slug: "biostimulant-provisional-registrations-2025",
    question: "What happened to biostimulant provisional registrations in India in 2025?",
    metaTitle: "Biostimulant provisional registrations in 2025",
    metaDescription:
      "Provisional biostimulant registrations in India became invalid on 17 Jun 2025. Only Schedule VI products may be manufactured, imported or sold.",
    lead: "Provisional registrations for biostimulants under the Fertiliser (Control) Order, 1985 became invalid on 17 Jun 2025. The Press Information Bureau said the Government decided not to extend them beyond 16 Jun 2025. From that date, only products notified in Schedule VI may be manufactured, imported or sold as biostimulants. Companies need efficacy, toxicity and chemistry data if they want a product on that schedule. We do not quote product counts, because public sources conflict.",
    paragraphs: [
      "The provisional route was a bridge so that manufacturers and importers could generate data. It was extended more than once. The bridge is now closed. A certificate that was valid in May 2025 is not a basis for a sale in July 2025 or later.",
      "The practical response is a 90-day plan: stop treating the provisional certificate as permission, check whether your composition is already notified, freeze label claims that the data cannot support, and order the studies you still need. A gap assessment does that on paper before you spend on a trial.",
      "Notification is a decision of the Government. A complete file is readiness. It is not an approval.",
    ],
    sources: [sources.pibBiostimulant, sources.agriwelfareBiostimulants],
    regulatory: true,
  },
  {
    slug: "what-is-schedule-vi-fco",
    question: "What is Schedule VI of the Fertiliser (Control) Order?",
    metaTitle: "What is FCO Schedule VI?",
    metaDescription:
      "Schedule VI lists biostimulants notified under the Fertiliser (Control) Order, 1985. It was introduced with Clause 20C by S.O. 882(E) on 23 Feb 2021.",
    lead: "Schedule VI is the list of biostimulant products notified under the Fertiliser (Control) Order, 1985. Clause 20C and Schedule VI were introduced by notification S.O. 882(E) dated 23 Feb 2021. If your product is not on the current schedule, you cannot treat it as a legal biostimulant for manufacture, import or sale. Check the gazette notifications on the Department of Agriculture portal rather than a forwarded PDF of unknown date.",
    paragraphs: [
      "The schedule is amended by further notifications. A trade article that names a count of products will go stale, and different articles disagree. We do not put a count on this site for that reason.",
      "Being 'similar' to a notified product is not the same as being notified. Composition, claims and the name on the certificate have to be read together.",
    ],
    sources: [sources.pibBiostimulant, sources.agriwelfareBiostimulants, sources.egazette],
    regulatory: true,
  },
  {
    slug: "biostimulant-data-requirements-india",
    question: "What data is needed to register a biostimulant in India?",
    metaTitle: "Biostimulant data requirements in India",
    metaDescription:
      "Bio-efficacy, toxicity and chemistry data are the public prerequisites for a Schedule VI biostimulant dossier.",
    lead: "The public position is that bio-efficacy, toxicity and chemistry data are required before a biostimulant can be included in Schedule VI. Shelf-life evidence belongs with any date you print on the pack. The detailed protocol is the one in the current Fertiliser (Control) Order guidelines and gazette notifications, not a checklist invented for a sales call. We turn that official list into a sequence for your composition.",
    paragraphs: [
      "Order matters. Identity and chemistry that are still moving should not sit under a finished efficacy trial. A claim you are willing to drop should be dropped before the trial is commissioned, or you will pay for a result you cannot print.",
      "We coordinate with a CRO or laboratory. We do not replace the laboratory's accreditation, and we do not guarantee that the Government will notify the product.",
    ],
    sources: [sources.pibBiostimulant, sources.agriwelfareBiostimulants],
    regulatory: true,
  },
  {
    slug: "section-9-3-vs-9-3b",
    question: "What is the difference between Section 9(3) and 9(3B) registration for biopesticides?",
    metaTitle: "Section 9(3) versus 9(3B) biopesticides",
    metaDescription:
      "9(3B) was provisional. For already-registered strains it ended in 2020. Section 9(3) is the regular route.",
    lead: "Section 9(3B) of the Insecticides Act, 1968 was a provisional registration. Section 9(3) is the regular registration. For biopesticide strains that are already registered, CIB&RC discontinued 9(3B) grants and extensions. The public notice was uploaded on 28 Apr 2020. Applicants apply under Section 9(3). For the same formulation of an already-registered strain, the simplified file cited in that decision is a DNA fingerprint report and an analytical test report. A new strain does not get that simplification automatically.",
    paragraphs: [
      "Read the two columns before you brief a laboratory. Paying for a full toxicology package you were not asked for is waste. Skipping efficacy data on a new strain because someone quoted the 2020 notice is a query waiting to happen.",
      "Harmonised bio-pesticide data guidelines were published by CIB&RC on 23 May 2022. Use the guideline that matches a single strain or a consortium. Do not mix them.",
    ],
    sources: [sources.ppqsGuidelines, sources.ppqs],
    regulatory: true,
  },
  {
    slug: "why-9-3b-was-discontinued",
    question: "Why was 9(3B) discontinued for already-registered biopesticide strains?",
    metaTitle: "Why 9(3B) was discontinued",
    metaDescription:
      "CIB&RC ended 9(3B) for already-registered strains once 9(3) was simplified. Notice uploaded 28 Apr 2020.",
    lead: "The Registration Committee reviewed the provisional route in 2020. It noted that guidelines for the same formulation of an already-registered biopesticide strain had been simplified, and that efficacy, safety and packaging data were not required in that narrow case. It decided to stop 9(3B) registration and extensions for those strains, and to let applicants go directly to Section 9(3) with a DNA fingerprint from NBAIM and an analytical test report from CIL. The public notice was uploaded on 28 Apr 2020.",
    paragraphs: [
      "The reason was administrative and scientific: a provisional certificate was no longer the right tool once the regular route had been simplified for that one situation. It was not a statement that all microbial pesticides are exempt from data.",
      "If your strain is not already registered, or your formulation is not the same, do not rely on that paragraph. Bring the strain accession and the earlier certificate to the diagnostic.",
    ],
    sources: [sources.ppqsGuidelines, sources.ppqs],
    regulatory: true,
  },
  {
    slug: "how-long-biopesticide-registration-india",
    question: "How long does biopesticide registration take in India?",
    metaTitle: "How long biopesticide registration takes",
    metaDescription:
      "No single timeline for CIB&RC biopesticide registration. It depends on the strain, the data and the queries.",
    lead: "Nobody can honestly quote one duration for biopesticide registration in India. An already-registered strain, same formulation, with a DNA fingerprint and an analytical report, has a shorter critical path than a new strain that still needs efficacy and toxicology. Crop seasons, laboratory queues and the number of query rounds all move the date. We will write the critical path for your file. We will not promise a month, and the certificate is CIB&RC's decision.",
    paragraphs: [
      "Ranges that circulate in trade WhatsApp groups are not a plan. They also create a false promise if a season is missed. Ask instead: which study is on the critical path, and what happens if it slips by one season?",
      "The draft Pesticides Management Bill, 2025 proposes digital registration. It is not in force. Do not build a timeline that assumes a portal that Parliament has not enacted.",
    ],
    sources: [sources.ppqsGuidelines, sources.pibPmb],
    regulatory: true,
  },
  {
    slug: "why-trichoderma-batch-contaminated",
    question: "Why is my Trichoderma batch contaminated?",
    metaTitle: "Why Trichoderma batches get contaminated",
    metaDescription:
      "Trichoderma contamination usually traces to seed, sterilisation, air, biofilm, water or the carrier. A photo is not a diagnosis.",
    lead: "A contaminated Trichoderma batch usually fails for a physical reason, not because the organism is unlucky. The short list is an impure seed culture, a sterilisation cycle that does not reach the real load, air that bypasses the filter, biofilm in a fitting the CIP misses, process water, or a carrier that arrives already dirty. Sampling technique can also invent a contamination that the tank did not have. We will not name your cause from a photograph.",
    paragraphs: [
      "Trichoderma is a fast fungus. It hides a low level of contaminant until the count is done, and it is often grown in plants where the same people handle raw carrier and the sterile seed. Those two facts explain a lot of 'sudden' failures after a quiet month.",
      "The Plant Health Check is one to two days on site and a written report. The fix is a CAPA, not a longer list of antibiotics. Biologicals that rely on antibiotics to stay clean are telling you the process is open.",
    ],
    sources: [],
    regulatory: false,
  },
  {
    slug: "increase-cfu-liquid-biofertiliser",
    question: "How do I increase CFU count in liquid biofertiliser?",
    metaTitle: "How to raise CFU in liquid biofertiliser",
    metaDescription:
      "Raise liquid biofertiliser CFU by finding where the count is lost, then changing that step. Do not just reprint the label.",
    lead: "Increase CFU by finding where the count is lost, then changing that step. The loss is usually in the seed train, in oxygen transfer or pH during the run, at harvest, or in the days after packing. A higher number printed on the label, without a process change, fails the next state-laboratory draw. Media, aeration, agitation, dissolved oxygen and harvest timing are the levers. They are not a single setpoint we can text you.",
    paragraphs: [
      "Liquid biofertilisers also die in storage. A beautiful harvest count and a dead bottle at day 90 is a shelf-life problem, not a fermentation trophy. Measure both.",
      "On PGPR, an approved example from our founder's work is 100 L production that improved plant salinity tolerance by 20%. That is one strain and one trial. It is not your specification.",
    ],
    sources: [],
    regulatory: false,
  },
  {
    slug: "stop-foaming-biopesticide-fermenter",
    question: "How do I stop foaming in a biopesticide fermenter?",
    metaTitle: "How to stop fermenter foaming",
    metaDescription:
      "Foam in a biopesticide fermenter signals viscosity, aeration and media. Antifoam is a tool, not the diagnosis.",
    lead: "Stop the foam by finding which variable is making it. In fungal biopesticide tanks, foam often arrives with viscosity during sporulation, and it tracks aeration rate and the media. Antifoam can knock the foam down and can also cut oxygen transfer or hurt the spore. Our founder, Dr. Gokulanathan, has resolved sporulation viscosity and foam issues in 200–1,000 L fermenters. The same change is not a recipe for every organism, and we will not invent a dose on a webpage.",
    paragraphs: [
      "A foam sensor that only tells you to add chemical will train the plant to hide the problem. Log viscosity, rpm or airflow, and the time in the cycle. The pattern is the diagnosis.",
      "If the foam is actually a contaminant outgrowing your culture, antifoam makes the batch look calmer while the count gets worse. Plate the foam, do not only dose it.",
    ],
    sources: [],
    regulatory: false,
  },
  {
    slug: "beauveria-bassiana-shelf-life",
    question: "How can I extend the shelf life of Beauveria bassiana formulations?",
    metaTitle: "Beauveria bassiana shelf life",
    metaDescription:
      "Beauveria shelf life depends on moisture, carrier, contaminants and real storage temperature. No percentage is claimed.",
    lead: "Extend Beauveria bassiana shelf life by controlling the water the spore sees, the carrier you put it on, the contaminants that ride along, and the temperature in real storage. Wettable powder, suspension concentrate, liquid and encapsulated forms fail for different reasons. A shelf-life date is a viability result at that date, under a written method. We do not publish an extension percentage here. That figure has not been confirmed for disclosure.",
    paragraphs: [
      "Teams often harvest a clean spore and then blend it into a carrier that was never checked for moisture or its own microbial load. The fermentation gets the blame three months later.",
      "Encapsulation and a drier carrier are tools. They are not magic. Run the stability study that matches the pack you intend to sell, in the climate you intend to sell it in. A refrigerator study will not defend a shop in Tamil Nadu in May.",
    ],
    sources: [],
    regulatory: false,
  },
  {
    slug: "solid-state-vs-submerged-fermentation",
    question: "Solid-state vs submerged fermentation for entomopathogenic fungi: which should I use?",
    metaTitle: "Solid-state or submerged fermentation?",
    metaDescription:
      "Choose solid-state or submerged fermentation from the fungus, the form and the plant. Neither mode is always better.",
    lead: "Use solid-state fermentation when the fungus, the solid form you sell, and a simpler plant all point that way. Use submerged fermentation when you need instrumentation, a liquid or a tightly specified spore, and you can actually run a valid SIP. Neither is universally better for entomopathogenic fungi. The wrong choice is the one copied from a neighbouring plant that makes a different organism.",
    paragraphs: [
      "Solid-state can tolerate a lower capital bill and can be harder to keep even: temperature, moisture and contamination hide inside a tray. Submerged tells you dissolved oxygen and pH, and it punishes a dead leg.",
      "We write the choice for your organism and your building. The table on the fermentation insight sets the questions side by side.",
    ],
    sources: [],
    regulatory: false,
  },
  {
    slug: "biopesticide-qc-tests",
    question: "What QC tests should a biopesticide manufacturer run?",
    metaTitle: "QC tests for biopesticide manufacturers",
    metaDescription:
      "Run the tests that match the specification you sell: viable count, purity, contaminants, moisture and shelf life, with the method written down.",
    lead: "Run the tests that match the specification on the pack. For a microbial biopesticide that usually means a viable count or spore count, a purity check, specified contaminants, moisture where the form needs it, and a shelf-life result that supports the date. Strain identity belongs in the registration file and in any change-control when the seed is replaced. A test that is not written down is a memory, and memories drift between shifts.",
    paragraphs: [
      "In-house QC and the NABL laboratory that a state department uses are not automatic enemies. They disagree when the method, the dilution or the sampling point differ. Write those three down before you argue with a failed report.",
      "The draft Pesticides Management Bill, 2025 proposes mandatory accreditation of testing laboratories. It is not law. Choosing a laboratory that already holds accreditation is still the more durable option.",
    ],
    sources: [sources.pibPmb, sources.ppqs],
    regulatory: true,
  },
  {
    slug: "do-aquaculture-probiotics-need-caa",
    question: "Do aquaculture probiotics need CAA certification?",
    metaTitle: "Do aquaculture probiotics need CAA?",
    metaDescription:
      "Yes, unless exempted. Rule 18(3) of the Coastal Aquaculture Authority Rules, 2024 requires certification before an input is used in coastal aquaculture.",
    lead: "Yes, unless the Coastal Aquaculture Authority has specifically exempted the input. Rule 18(3) of the Coastal Aquaculture Authority Rules, 2024 says no aquaculture input shall be made available or used in coastal aquaculture without certification from the Authority, except those exempted in the guideline referred to in the Rules. Probiotics are aquaculture inputs. The certificate of compliance is the Authority's decision. We prepare the technical file and the antibiotic-free system. We do not grant the certificate.",
    paragraphs: [
      "The Rules provide Form III for the application. Confirm the current form, fee and exemption list on caa.gov.in before you file. A 2019 advisory is not a substitute for the 2024 Rules.",
      "Importers should not treat a foreign health certificate as a CAA certificate. It may be one document in the file. It is not the certificate.",
    ],
    sources: [sources.caaRules, sources.caa],
    regulatory: true,
  },
  {
    slug: "rnai-pest-control-india",
    question: "What is RNAi pest control and is it approved in India?",
    metaTitle: "Is RNAi pest control approved in India?",
    metaDescription:
      "RNAi pest control uses dsRNA to silence a target gene. India has no dedicated framework for sprayable dsRNA products yet. Build the evidence now.",
    lead: "RNAi pest control uses double-stranded RNA to silence a gene the insect needs. It can be produced in a microbe, including systems such as E. coli, and some groups are developing sprays. India has no dedicated regulatory framework for sprayable dsRNA products yet. We help you build the science and the evidence base now, and map the likely regulatory pathway so you are ready when it is. A foreign approval is not an Indian registration. We do not publish an efficacy percentage that is still awaiting confirmation.",
    paragraphs: [
      "The useful project produces a target rationale, designs, an expression plan, a bioassay protocol and an off-target assessment design. It does not produce a certificate.",
      "If a buyer asks 'is it approved?', the accurate answer today is no, not under a dedicated Indian dsRNA framework. Anyone who answers yes should name the statute and the certificate number.",
    ],
    sources: [sources.ppqs, sources.pibPmb],
    regulatory: true,
  },
  {
    slug: "red-palm-weevil-pheromone-traps",
    question: "How do pheromone traps for red palm weevil work?",
    metaTitle: "Red palm weevil pheromone traps",
    metaDescription:
      "Red palm weevil traps use a lure and a trap to detect or mass-trap adults. This page does not make a yield claim.",
    lead: "Pheromone traps for red palm weevil attract adults to a physical trap using a semiochemical lure, often with a food bait. They are used to detect an infestation early and, where the programme is designed for it, to mass-trap. The lure has to keep releasing over the service interval, and someone has to empty and service the trap. Around Coimbatore and Pollachi this is an application area we work in. It is not a published plantation result, and port-surveillance percentages do not transfer to a coconut garden.",
    paragraphs: [
      "Rhinoceros beetle is a different insect and a different lure. A weevil dispenser hung for a beetle is a wasted visit.",
      "If the trap is also a sensor, calibrate the sensor against the lure you actually filled. An empty dispenser and a live sensor is a confident, wrong alert.",
    ],
    sources: [sources.ppqs],
    regulatory: false,
  },
  {
    slug: "controlled-release-pheromone-lures",
    question: "How do controlled-release pheromone lures work?",
    metaTitle: "How controlled-release pheromone lures work",
    metaDescription:
      "A wax or polymer matrix releases the pheromone over weeks. Longevity is a measurement. Our founder has scaled 500 kg of wax-matrix lures for ICT traps.",
    lead: "A controlled-release lure holds the pheromone in a matrix, commonly wax or a polymer, so the active leaves over weeks rather than in the first hot afternoon. Load, matrix, temperature and how the dispenser is vented all change the curve. Longevity is a field measurement. Our founder, Dr. Gokulanathan, has scaled 500 kg of wax-matrix lures for ICT smart traps. On that work, trap sensitivity was 70%, and early-detection alerts improved by 40% across three port sites. Those figures belong to that system.",
    paragraphs: [
      "Manufacturing scale is the part laboratory dips skip. A matrix that cannot be poured, cooled and packed at tens of kilograms is not a product yet.",
      "Whether a given lure needs an insecticides registration depends on the active, the claim and the current CIB&RC guideline. We check that guideline. We do not declare an exemption from a product brochure.",
    ],
    sources: [sources.ppqsGuidelines],
    regulatory: false,
  },
  {
    slug: "investor-checks-agri-biologicals",
    question: "What should investors check in an agri-biologicals company?",
    metaTitle: "Investor checks for agri-biologicals",
    metaDescription:
      "Check registration, data ownership, strain rights and whether the plant can repeat the batch. Provisional files died on 17 Jun 2025.",
    lead: "Check four things before you price an agri-biologicals company. Is the registration valid today, or is it a provisional biostimulant certificate that died on 17 Jun 2025? Who owns the data in the dossier? Is the strain authorisation in the company's name? Can the plant repeat the batch, with contamination and shelf-life records that match the deck? We write that as a red-flag memo in two to three weeks. We do not set the valuation.",
    paragraphs: [
      "A capacity number without a contamination history is incomplete. More litres in Indian plants means more QA risk, not an automatic margin expansion.",
      "Diligence targets are confidential. They do not become named case studies.",
    ],
    sources: [sources.pibBiostimulant, sources.ppqs, sources.caa],
    regulatory: true,
  },
  {
    slug: "bio-input-resource-centre-nmnf",
    question: "What is a Bio-input Resource Centre under the National Mission on Natural Farming?",
    metaTitle: "What is a Bio-input Resource Centre?",
    metaDescription:
      "Bio-input Resource Centres under the National Mission on Natural Farming produce local inputs. Training is method, not a registration.",
    lead: "A Bio-input Resource Centre, under the National Mission on Natural Farming, is a local unit intended to produce biological inputs for farmers. We run production bootcamps and QC workshops for those centres, for KVKs and for FPOs. Tamil-language delivery is available. The training is a method and an SOP kit. It does not register a product and it does not accredit a laboratory.",
    paragraphs: [
      "The mission's own page is the place to confirm how a centre is sanctioned and funded. We do not administer the scheme, and we do not invent a subsidy figure.",
      "A centre with a tank and no written sterilisation method will teach farmers a contaminated batch. The first day of training is usually about that, not about a new organism.",
    ],
    sources: [sources.nmnf],
    regulatory: false,
  },
  {
    slug: "biologicals-consultant-cost-india",
    question: "How much does a biologicals consultant cost in India?",
    metaTitle: "What a biologicals consultant costs",
    metaDescription:
      "The diagnostic call is free. Other work is quoted after it. Rupee figures are not published until confirmed.",
    lead: "A 30-minute bottleneck diagnostic call is free. A Plant Health Check is one to two days on site with a written report. A Regulatory Readiness Assessment is a gap analysis and a data roadmap. A project is a fixed-scope dossier, scale-up or diligence, quoted after the diagnostic. A technical retainer is monthly advisory hours, also quoted after the call. We are not publishing a rupee anchor until those figures are confirmed. Fees exclude GST, travel and third-party laboratory or trial costs.",
    paragraphs: [
      "Anyone who quotes a registration 'package price' that includes a guaranteed certificate is selling something we will not sell. The authority decides.",
      "You speak to the scientists who will do the work. There is no sales team. An NDA is available before you share tank data or a strain.",
    ],
    sources: [],
    regulatory: false,
  },
  {
    slug: "what-is-clause-20c",
    question: "What is Clause 20C of the Fertiliser (Control) Order?",
    metaTitle: "What is FCO Clause 20C?",
    metaDescription:
      "Clause 20C brought biostimulants into the Fertiliser (Control) Order, with Schedule VI, by S.O. 882(E) on 23 Feb 2021.",
    lead: "Clause 20C is the provision of the Fertiliser (Control) Order, 1985 under which biostimulants are regulated, together with Schedule VI. Both were introduced by S.O. 882(E) dated 23 Feb 2021. It is the reason a biostimulant is no longer an unregulated bottle with a crop-claim on the label. The operative question after 17 Jun 2025 is whether the product is notified in Schedule VI, not whether a provisional certificate once existed.",
    paragraphs: [
      "Read the gazette text for the clause as it stands today. Later notifications amend schedules. A 2021 summary is the origin story, not always the current wording of every sub-clause.",
      "We use Clause 20C as the frame for a dossier plan. We do not paraphrase it into a private standard.",
    ],
    sources: [sources.agriwelfareBiostimulants, sources.egazette, sources.pibBiostimulant],
    regulatory: true,
  },
  {
    slug: "sell-biostimulant-not-on-schedule-vi",
    question: "Can I manufacture a biostimulant that is not in Schedule VI?",
    metaTitle: "Selling a biostimulant not on Schedule VI",
    metaDescription:
      "No. After 17 Jun 2025 only Schedule VI biostimulants may be made, imported or sold. A provisional certificate does not replace that.",
    lead: "No. The Government's stated position is that only biostimulants notified in Schedule VI may be manufactured, imported or sold, and that provisional registrations have been invalid since 17 Jun 2025. Making the product in a factory you own does not create an exception. Relabelling it as a 'plant tonic' does not create one either, if the product is a biostimulant and the claims say so.",
    paragraphs: [
      "If the composition is genuinely a biofertiliser or a biopesticide, it may sit under a different rule. That is a classification question, decided from the composition and the claim, not from the name the designer preferred.",
      "Continuing to sell and hoping for a later regularisation is a commercial risk we will not dress up as a strategy.",
    ],
    sources: [sources.pibBiostimulant, sources.agriwelfareBiostimulants],
    regulatory: true,
  },
  {
    slug: "biopesticide-biofertiliser-biostimulant-difference",
    question: "What is the difference between a biopesticide, a biofertiliser and a biostimulant?",
    metaTitle: "Biopesticide, biofertiliser, biostimulant",
    metaDescription:
      "Biopesticides sit with CIB&RC. Biofertilisers and Schedule VI biostimulants sit under the Fertiliser (Control) Order.",
    lead: "A biopesticide claims pest control and is registered with CIB&RC under the Insecticides Act, 1968. A biofertiliser claims a microbial nutrient benefit and has to meet the Fertiliser (Control) Order specification for that product. A biostimulant is regulated under Clause 20C and Schedule VI of the same Order. The label claim picks the regime. One bottle that promises pest kill and a biostimulant effect has two problems, not a clever positioning.",
    paragraphs: [
      "The organism does not decide the category on its own. Bacillus can be any of the three, depending on the claim and the specification. Trichoderma sold as a fungicide is a biopesticide file.",
      "Fix the claim first. Then build the data. The other order wastes a season.",
    ],
    sources: [sources.ppqs, sources.agriwelfareBiostimulants],
    regulatory: true,
  },
  {
    slug: "draft-pesticides-management-bill-2025",
    question: "What does the draft Pesticides Management Bill, 2025 change today?",
    metaTitle: "Draft Pesticides Management Bill, 2025",
    metaDescription:
      "The January 2026 draft is a proposal, not law. It discusses digital registration and accredited laboratories.",
    lead: "Nothing in your current file changes today. The Department of Agriculture and Farmers Welfare released a revised draft Pesticides Management Bill, 2025 for consultation in January 2026. The Press Information Bureau note of 7 Jan 2026 describes digital methods and mandatory accreditation of testing laboratories, among other proposals. Comments were invited until 4 Feb 2026. The draft is not the Insecticides Act, 1968. Keep filing under the Act that is in force, and choose laboratories that can already show accreditation.",
    paragraphs: [
      "We describe the Bill as proposed. We do not train teams on a clause as if it were a rule.",
      "The primary note is the PIB release, and the text was placed on the Department's website. Use those, not a commentary, when you brief a board.",
    ],
    sources: [sources.pibPmb, sources.agriwelfare],
    regulatory: true,
  },
  {
    slug: "what-is-a-plant-health-check",
    question: "What is a Plant Health Check?",
    metaTitle: "What is a Plant Health Check?",
    metaDescription:
      "A Plant Health Check is a one- to two-day on-site fermentation diagnostic with a written report. The fee is quoted after a free 30-minute call.",
    lead: "A Plant Health Check is one to two days in your plant and a written report. It is how we look at low CFU, contamination, foam, viscosity, shelf life and a failed QC draw. You start with a free 30-minute call so we can tell you whether the visit is the right tool. The fee is quoted when we know the plant. It excludes GST, travel and any outside laboratory work. The report ranks causes. It does not sell you a fermenter.",
    paragraphs: [
      "Our founder has resolved sporulation viscosity and foam in 200–1,000 L fermenters. If your failure is in that family, say so on the call. If it is a registration problem, the visit is the wrong product and we will point you to the dossier work instead.",
      "The senior people who scope the problem are the people on your floor. We do not send a junior.",
    ],
    sources: [],
    regulatory: false,
  },
  {
    slug: "korean-agri-biotech-entering-india",
    question: "How should a Korean agri-biotech firm enter the Indian market?",
    metaTitle: "Korean agri-biotech firms entering India",
    metaDescription:
      "A Korean registration does not authorise an Indian sale. Validate the technology and map the Indian file first.",
    lead: "Start with the technical question, not the distributor. Confirm the technology is real, decide what must be repeated in India, and map the regime: Schedule VI, CIB&RC, the biofertiliser specification, or the Coastal Aquaculture Authority. A Korean approval does not authorise an Indian sale. We scout, validate and support the technical side of a licence. Your counsel writes the contract. We do not name a Korean government employer on this site until that wording is confirmed.",
    paragraphs: [
      "The approved example we can talk about is our founder's microbial feed additive against WSSV and AHPND in L. vannamei, field-validated and licensed to industry. Your asset needs its own file.",
      "If the Indian partner's 'registration' is a provisional biostimulant certificate, treat it as invalid from 17 Jun 2025 and reprice the deal.",
    ],
    sources: [sources.agriwelfare, sources.ppqs, sources.caa, sources.pibBiostimulant],
    regulatory: true,
  },
];

export function answerBySlug(slug: string) {
  return answers.find((answer) => answer.slug === slug);
}
