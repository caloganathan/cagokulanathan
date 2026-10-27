import { claimText } from "@/content/claims";
import { site, absoluteUrl } from "@/content/site";

export function organizationSchema() {
  const sameAs = [site.linkedin, site.orcid, site.googleScholar, site.researchGate].filter(Boolean);
  const credential = claimText("iso15189");
  const alumni = claimText("phd");
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${absoluteUrl("/")}#website`,
        url: absoluteUrl("/"),
        name: site.brandName,
        inLanguage: "en-IN",
        publisher: { "@id": `${absoluteUrl("/")}#org` },
      },
      {
        "@type": ["Organization", "ProfessionalService"],
        "@id": `${absoluteUrl("/")}#org`,
        name: site.brandName,
        url: absoluteUrl("/"),
        description: site.promise,
        areaServed: site.serviceArea.map((name) => ({ "@type": "AdministrativeArea", name })),
        address: {
          "@type": "PostalAddress",
          ...(site.address ? { streetAddress: site.address } : {}),
          addressLocality: site.city,
          addressRegion: site.state,
          addressCountry: site.country,
        },
        founder: { "@id": `${absoluteUrl("/about")}#person` },
        ...(sameAs.length ? { sameAs } : {}),
        ...(site.email || site.whatsappE164
          ? {
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  contactType: "customer support",
                  ...(site.email ? { email: site.email } : {}),
                  ...(site.whatsappE164 ? { telephone: `+${site.whatsappE164.replace(/\D/g, "")}` } : {}),
                  availableLanguage: ["en", "ta"],
                  areaServed: "IN",
                },
              ],
            }
          : {}),
      },
      {
        "@type": "Person",
        "@id": `${absoluteUrl("/about")}#person`,
        name: site.founder,
        jobTitle: site.title,
        url: absoluteUrl("/about"),
        worksFor: { "@id": `${absoluteUrl("/")}#org` },
        homeLocation: {
          "@type": "Place",
          address: {
            "@type": "PostalAddress",
            addressLocality: site.city,
            addressRegion: site.state,
            addressCountry: site.country,
          },
        },
        knowsAbout: [
          "Agri-biologicals",
          "Biopesticides",
          "Biostimulants",
          "Biofertilisers",
          "Fermentation",
          "Pheromones",
          "RNAi",
          "Aquaculture probiotics",
        ],
        ...(alumni
          ? { alumniOf: { "@type": "CollegeOrUniversity", name: "Bharathiar University" } }
          : {}),
        ...(credential
          ? {
              hasCredential: {
                "@type": "EducationalOccupationalCredential",
                name: credential,
              },
            }
          : {}),
        ...(sameAs.length ? { sameAs } : {}),
      },
    ],
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}

export function serviceSchema(input: { name: string; description: string; path: string; serviceType: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: input.name,
    description: input.description,
    url: absoluteUrl(input.path),
    serviceType: input.serviceType,
    provider: { "@id": `${absoluteUrl("/")}#org` },
    areaServed: site.serviceArea.map((name) => ({ "@type": "AdministrativeArea", name })),
  };
}

export function articleSchema(input: {
  title: string;
  description: string;
  path: string;
  dateIso: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: input.title,
    description: input.description,
    datePublished: input.dateIso,
    dateModified: input.dateIso,
    inLanguage: "en-IN",
    mainEntityOfPage: absoluteUrl(input.path),
    author: { "@id": `${absoluteUrl("/about")}#person` },
    publisher: { "@id": `${absoluteUrl("/")}#org` },
  };
}

export function definedTermSetSchema(terms: { term: string; definition: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    name: "Biologicals glossary",
    hasDefinedTerm: terms.map((term) => ({
      "@type": "DefinedTerm",
      name: term.term,
      description: term.definition,
      url: absoluteUrl(term.path),
    })),
  };
}

export function scholarlyArticleSchema(input: {
  title: string;
  datePublished: string;
  doi?: string | null;
  authors: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "ScholarlyArticle",
    headline: input.title,
    datePublished: input.datePublished,
    author: input.authors,
    ...(input.doi ? { sameAs: input.doi } : {}),
  };
}
