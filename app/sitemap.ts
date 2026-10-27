import type { MetadataRoute } from "next";
import { answers } from "@/content/answers";
import { caseStudies } from "@/content/case-studies";
import { industries } from "@/content/industries";
import { insights } from "@/content/insights/registry";
import { leadMagnets } from "@/content/lead-magnets";
import { services } from "@/content/services";
import { absoluteUrl, contentDate } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date(contentDate);
  const paths = [
    "/",
    "/services",
    "/industries",
    "/case-studies",
    "/research",
    "/about",
    "/insights",
    "/answers",
    "/glossary",
    "/engagement-models",
    "/contact",
    "/privacy",
    "/terms",
    "/disclaimer",
    "/coimbatore",
    "/tools/batch-risk-check",
    "/tools/regulatory-readiness-check",
    ...services.map((service) => `/services/${service.slug}`),
    ...industries.map((industry) => `/industries/${industry.slug}`),
    ...caseStudies.map((study) => `/case-studies/${study.slug}`),
    ...insights.map((insight) => `/insights/${insight.slug}`),
    ...answers.map((answer) => `/answers/${answer.slug}`),
    ...Object.keys(leadMagnets).map((slug) => `/resources/${slug}`),
  ];
  return paths.map((path) => ({ url: absoluteUrl(path), lastModified }));
}
