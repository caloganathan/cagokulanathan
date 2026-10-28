import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CtaBand } from "@/components/cta-band";
import { industries, industryBySlug } from "@/content/industries";
import { segmentById } from "@/content/segments";
import { serviceBySlug } from "@/content/services";
import { pageMetadata } from "@/lib/seo/metadata";

export function generateStaticParams() {
  return industries.map((industry) => ({ slug: industry.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const industry = industryBySlug(slug);
  if (!industry) return {};
  return pageMetadata({
    title: industry.metaTitle,
    description: industry.metaDescription,
    path: `/industries/${industry.slug}`,
  });
}

export default async function IndustryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const industry = industryBySlug(slug);
  if (!industry) notFound();
  const segment = segmentById(industry.segmentId);
  return (
    <article className="mx-auto max-w-6xl px-4 py-10">
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Industries", path: "/industries" },
          { name: industry.title, path: `/industries/${industry.slug}` },
        ]}
      />
      <h1 className="mt-4 font-serif text-3xl md:text-4xl">{industry.h1}</h1>
      <p data-answer className="measure mt-4 text-lg text-[var(--muted)]">
        {industry.answer}
      </p>
      <ul className="mt-6 list-disc space-y-2 pl-5">
        {industry.points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
      <h2 className="mt-8 font-serif text-xl md:text-2xl">Where to go next</h2>
      <ul className="mt-3 space-y-2">
        {industry.serviceSlugs.map((serviceSlug) => {
          const service = serviceBySlug(serviceSlug);
          if (!service) return null;
          return (
            <li key={serviceSlug}>
              <Link className="text-[var(--link)]" href={`/services/${serviceSlug}`}>
                {service.h1}
              </Link>
            </li>
          );
        })}
        <li>
          <Link className="text-[var(--link)]" href="/answers">
            Short answers
          </Link>
        </li>
      </ul>
      <div className="mt-10">
        <CtaBand prefill={segment.prefill} pageTitle={industry.h1} />
      </div>
    </article>
  );
}
