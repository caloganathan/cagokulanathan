import type { Faq } from "@/content/services";

export type CareerTrack = {
  id: "junior" | "phd" | "ug" | "enthusiast";
  label: string;
  applyAs: string;
  who: string;
  text: string;
};

/** No open vacancies are asserted here. This is an open-application page. */
export const careerTracks: CareerTrack[] = [
  {
    id: "junior",
    label: "Junior Scientists",
    applyAs: "a junior scientist",
    who: "M.Sc., M.Tech, B.Tech or B.Sc. graduates in biotechnology, microbiology, agriculture, plant protection or allied fields",
    text: "Work on real fermentation runs, QC checks, trial protocols and dossier drafts, beside the people who scoped them.",
  },
  {
    id: "phd",
    label: "PhD holders",
    applyAs: "a PhD holder",
    who: "Doctoral researchers and post-docs in agri-biotech, molecular biology, entomology, plant pathology or aquaculture",
    text: "Bring depth to R&D design, RNAi and pheromone work, scientific review and technical due diligence.",
  },
  {
    id: "ug",
    label: "UG candidates",
    applyAs: "a UG candidate",
    who: "Undergraduates and final-year students who want to learn how a biological product goes from strain to shelf",
    text: "Project work and internships where you see a batch, a lab and a regulator's checklist up close.",
  },
  {
    id: "enthusiast",
    label: "Hands-on enthusiasts",
    applyAs: "a hands-on enthusiast",
    who: "People with basic education and a genuine love for biological and organic agriculture",
    text: "If you can keep a clean record, follow an SOP and care about the farmer at the end of the chain, we want to hear from you. Tamil and English both work.",
  },
];

export const careerValues = [
  ["Curiosity first", "We would rather teach a method to someone who asks why than hire a certificate."],
  ["Honest data", "A result is what the batch did, not what the plan hoped. We value people who say so."],
  ["The farmer at the end", "Every protocol we write ends in someone's field or pond. That keeps the work grounded."],
  ["Small team, real ownership", "You are never a ticket number. You see the problem through, with the founder alongside."],
] as const;

export const careerSteps = [
  ["Apply in five minutes", "Tell us who you are, what draws you to this field, and what you would like to learn or build."],
  ["We read it personally", "Every application is read by the team. We write back, even when the answer is 'not yet'."],
  ["A conversation", "A short call about your interests and ours. No trick questions."],
  ["A starting project", "Where there is a fit, we begin with a defined piece of work, so both sides learn quickly."],
] as const;

export const careerFaqs: Faq[] = [
  {
    question: "Does JK Advisory have open positions?",
    answer:
      "We are a tiny, founder-led agri-biologicals team in Coimbatore. We do not keep a standing list of vacancies. We keep a talent circle and write to people when an engagement needs their skills. Applying here puts you in that circle. It is not an offer of employment.",
  },
  {
    question: "Can a fresher or final-year student apply?",
    answer:
      "Yes. UG candidates and junior scientists are welcome. Curiosity and a clear reason for choosing agri-biologicals matter more to us than a long CV.",
  },
  {
    question: "Do I need a PhD to work with you?",
    answer:
      "No. PhD holders are one of four groups we invite. We also welcome junior scientists, undergraduates and people with basic education who love biological and organic agriculture.",
  },
  {
    question: "I have only basic education. Should I apply?",
    answer:
      "Yes, if you have a real interest in biological inputs, organic farming or the lab and plant-floor work behind them. Tell us what you have grown, made or observed. Tamil and English are both fine.",
  },
  {
    question: "What kind of work will I do?",
    answer:
      "Our work covers fermentation scale-up, QC laboratories, registration dossiers for biostimulants and biopesticides, pheromone lures, aquaculture inputs, RNAi R&D and training. The form lets you tell us which of these you care about.",
  },
  {
    question: "Is the work paid, and where is it based?",
    answer:
      "Terms depend on the role and scope and are discussed in the conversation. Nothing is promised in the form. We are based in Coimbatore, Tamil Nadu, and work across India. Tell us your preferred mode in the application.",
  },
  {
    question: "How is my application data used?",
    answer:
      "Your details are used only to consider your application and to write back to you, and are kept as long as needed for that. Do not send Aadhaar, bank or other identity numbers. You can ask us to delete your application at any time.",
  },
];
