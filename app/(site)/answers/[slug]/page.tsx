import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CtaBand } from "@/components/cta-band";
import { Reviewed } from "@/components/reviewed";
import { JsonLd } from "@/components/seo/json-ld";
import { answerBySlug, answers } from "@/content/answers";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/seo/metadata";
import { articleSchema, faqSchema } from "@/lib/seo/schema";

export function generateStaticParams() {
  return answers.map((answer) => ({ slug: answer.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const answer = answerBySlug(slug);
  if (!answer) return {};
  return pageMetadata({
    title: answer.metaTitle,
    description: answer.metaDescription,
    path: `/answers/${answer.slug}`,
    type: "article",
  });
}

export default async function AnswerPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const answer = answerBySlug(slug);
  if (!answer) notFound();
  const more = answers.filter((item) => item.slug !== slug).slice(0, 3);
  return (
    <article className="mx-auto max-w-6xl px-4 py-10 [&>*]:max-w-3xl">
      <JsonLd data={faqSchema([{ question: answer.question, answer: answer.lead }])} />
      <JsonLd
        data={articleSchema({
          title: answer.question,
          description: answer.metaDescription,
          path: `/answers/${answer.slug}`,
          dateIso: "2026-10-27",
        })}
      />
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Answers", path: "/answers" },
          { name: answer.question, path: `/answers/${answer.slug}` },
        ]}
      />
      <p className="mt-4 text-sm text-[var(--muted)]">
        {site.founderShort} · Last reviewed {site.lastReviewedRegulatory}
      </p>
      <h1 className="mt-2 font-serif text-2xl md:text-3xl leading-tight">{answer.question}</h1>
      <p data-answer className="mt-4 text-lg text-[var(--muted)]">
        {answer.lead}
      </p>
      {answer.paragraphs.map((paragraph) => (
        <p key={paragraph.slice(0, 24)} className="mt-4 text-[var(--muted)]">
          {paragraph}
        </p>
      ))}
      {answer.regulatory ? (
        <div className="mt-6">
          <Reviewed sources={answer.sources} />
        </div>
      ) : answer.sources.length ? (
        <ul className="mt-6 space-y-2 text-sm">
          {answer.sources.map((source) => (
            <li key={source.href}>
              <a className="text-[var(--link)]" href={source.href}>
                {source.label}
              </a>
            </li>
          ))}
        </ul>
      ) : null}
      <h2 className="mt-8 font-serif text-lg md:text-xl">More answers</h2>
      <ul className="mt-2 space-y-2">
        {more.map((item) => (
          <li key={item.slug}>
            <Link className="text-[var(--link)]" href={`/answers/${item.slug}`}>
              {item.question}
            </Link>
          </li>
        ))}
      </ul>
      <div className="mt-10">
        <CtaBand prefill={`Hi JK Advisory team, my question is: ${answer.question}`} pageTitle={answer.question} />
      </div>
    </article>
  );
}
