import { answers } from "@/content/answers";
import { services } from "@/content/services";
import { site } from "@/content/site";

export const dynamic = "force-static";

export function GET() {
  const serviceText = services
    .map((service) => [`# ${service.h1}`, service.answer, "", ...service.faqs.flatMap((faq) => [faq.question, faq.answer, ""])].join("\n"))
    .join("\n");
  const answerText = answers
    .map((answer) => [`# ${answer.question}`, answer.lead, "", ...answer.paragraphs, ""].join("\n"))
    .join("\n");
  const body = `${site.brandName}\n${site.founder}\n${site.promise}\nLast reviewed ${site.lastReviewedRegulatory}\n\n${serviceText}\n${answerText}`;
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
