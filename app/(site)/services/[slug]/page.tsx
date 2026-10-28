import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CtaBand } from "@/components/cta-band";
import { Reviewed } from "@/components/reviewed";
import { FaqAccordion } from "@/components/ui/accordion";
import { JsonLd } from "@/components/seo/json-ld";
import { claimText } from "@/content/claims";
import { insightBySlug } from "@/content/insights/registry";
import { segmentById } from "@/content/segments";
import { serviceBySlug, services } from "@/content/services";
import { pageMetadata } from "@/lib/seo/metadata";
import { faqSchema, serviceSchema } from "@/lib/seo/schema";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = serviceBySlug(slug);
  if (!service) return {};
  return pageMetadata({
    title: service.metaTitle,
    description: service.metaDescription,
    path: `/services/${service.slug}`,
  });
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = serviceBySlug(slug);
  if (!service) notFound();
  const segment = segmentById(service.segmentId);
  const proofs = service.proofClaimIds.map((id) => claimText(id)).filter((text): text is string => Boolean(text));
  // TODO(confirm): rnai metric is not rendered
  // TODO(confirm): nabl personal claim is not rendered
  // TODO(confirm): korea role title is not rendered

  return (
    <article className="mx-auto max-w-6xl px-4 py-10">
      <JsonLd
        data={serviceSchema({
          name: service.h1,
          description: service.answer,
          path: `/services/${service.slug}`,
          serviceType: service.navLabel,
        })}
      />
      <JsonLd data={faqSchema(service.faqs)} />
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: service.navLabel, path: `/services/${service.slug}` },
        ]}
      />
      <h1 className="mt-4 max-w-[28ch] font-serif text-3xl leading-tight md:text-4xl">{service.h1}</h1>
      <p data-answer className="measure mt-5 text-lg text-[var(--muted)]">
        {service.answer}
      </p>
      {service.regulatory ? (
        <div className="mt-6">
          <Reviewed sources={service.sources} />
        </div>
      ) : null}
      <section className="mt-10">
        <h2 className="font-serif text-xl md:text-2xl">Is this you?</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-[var(--muted)]">
          {service.problems.map((problem) => (
            <li key={problem}>{problem}</li>
          ))}
        </ul>
        <p className="mt-4 text-sm text-[var(--muted)]">For: {service.forWhom.join(" · ")}</p>
      </section>
      <section className="mt-10">
        <h2 className="font-serif text-xl md:text-2xl">What we deliver</h2>
        <ul className="mt-3 grid gap-3 md:grid-cols-2">
          {service.deliverables.map((item) => (
            <li key={item} className="rounded-2xl bg-[var(--mist)] px-4 py-3">
              {item}
            </li>
          ))}
        </ul>
      </section>
      <section className="mt-10">
        <h2 className="font-serif text-xl md:text-2xl">How the engagement runs</h2>
        <ol className="mt-4 grid gap-4 md:grid-cols-4">
          {service.engagement.map((step) => (
            <li key={step.phase} className="rounded-3xl border border-[var(--line)] p-4">
              <h3 className="font-serif text-lg md:text-xl">{step.phase}</h3>
              <p className="mt-2 text-sm text-[var(--muted)]">{step.detail}</p>
            </li>
          ))}
        </ol>
      </section>
      {proofs.length ? (
        <section className="mt-10">
          <h2 className="font-serif text-xl md:text-2xl">Relevant proof</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            {proofs.map((proof) => (
              <li key={proof}>{proof}</li>
            ))}
          </ul>
        </section>
      ) : null}
      {!service.regulatory && service.sources.length ? (
        <section className="mt-10">
          <h2 className="font-serif text-xl md:text-2xl">References</h2>
          <ul className="mt-3 space-y-2">
            {service.sources.map((source) => (
              <li key={source.href}>
                <a className="text-[var(--link)] underline-offset-4 hover:underline" href={source.href}>
                  {source.label}
                </a>
              </li>
            ))}
          </ul>
        </section>
      ) : null}
      <section className="mt-10">
        <h2 className="font-serif text-xl md:text-2xl">Questions on this engagement</h2>
        <FaqAccordion items={service.faqs} />
      </section>
      <section className="mt-10">
        <h2 className="font-serif text-xl md:text-2xl">Related reading</h2>
        <ul className="mt-3 space-y-2">
          {service.relatedInsightSlugs.map((slug) => {
            const insight = insightBySlug(slug);
            if (!insight) return null;
            return (
              <li key={slug}>
                <Link className="text-[var(--link)] underline-offset-4 hover:underline" href={`/insights/${slug}`}>
                  {insight.title}
                </Link>
              </li>
            );
          })}
          <li>
            <Link className="text-[var(--link)]" href="/answers">
              Short answers
            </Link>
          </li>
          <li>
            <Link className="text-[var(--link)]" href="/engagement-models">
              Engagement models
            </Link>
          </li>
        </ul>
      </section>
      <div className="mt-12">
        <CtaBand prefill={segment.prefill} pageTitle={service.h1} />
      </div>
    </article>
  );
}
