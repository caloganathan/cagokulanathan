import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CtaBand } from "@/components/cta-band";
import { caseStudies, caseStudyBySlug } from "@/content/case-studies";
import { claimText } from "@/content/claims";
import { segmentById } from "@/content/segments";
import { pageMetadata } from "@/lib/seo/metadata";

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const study = caseStudyBySlug(slug);
  if (!study) return {};
  return pageMetadata({ title: study.metaTitle, description: study.metaDescription, path: `/case-studies/${study.slug}` });
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const study = caseStudyBySlug(slug);
  if (!study) notFound();
  const segment = segmentById(study.segmentId);
  const results = study.resultClaimIds.map((id) => claimText(id)).filter((item): item is string => Boolean(item));
  // TODO(confirm): Beauveria shelf-life percentage is not rendered
  return (
    <article className="mx-auto max-w-3xl px-4 py-10">
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Case studies", path: "/case-studies" },
          { name: study.title, path: `/case-studies/${study.slug}` },
        ]}
      />
      <p className="mt-4 text-sm font-semibold uppercase tracking-[0.14em] text-[var(--leaf)]">
        {study.named ? "Named with written consent" : "Anonymised"}
      </p>
      <h1 className="mt-2 font-serif text-5xl">{study.title}</h1>
      <h2 className="mt-8 font-serif text-3xl">Context</h2>
      <p className="mt-2 text-[var(--muted)]">{study.context}</p>
      <h2 className="mt-8 font-serif text-3xl">Challenge</h2>
      <p className="mt-2 text-[var(--muted)]">{study.challenge}</p>
      <h2 className="mt-8 font-serif text-3xl">What I did</h2>
      <p className="mt-2 text-[var(--muted)]">{study.approach}</p>
      <h2 className="mt-8 font-serif text-3xl">Result</h2>
      {results.length ? (
        <ul className="mt-2 list-disc pl-5">
          {results.map((result) => (
            <li key={result}>{result}</li>
          ))}
        </ul>
      ) : null}
      {study.resultNote ? <p className="mt-2 text-[var(--muted)]">{study.resultNote}</p> : null}
      <p className="mt-6">
        <Link className="text-[var(--link)]" href={`/services/${study.serviceSlug}`}>
          Related service
        </Link>
      </p>
      <div className="mt-10">
        <CtaBand prefill={segment.prefill} pageTitle={study.title} title="Similar problem? Message me." />
      </div>
    </article>
  );
}
