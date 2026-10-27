import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { LeadForm } from "@/components/lead-form";
import { leadMagnets, type LeadMagnetId } from "@/content/lead-magnets";
import { pageMetadata } from "@/lib/seo/metadata";

export function generateStaticParams() {
  return Object.keys(leadMagnets).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const magnet = leadMagnets[slug as LeadMagnetId];
  if (!magnet) return {};
  return pageMetadata({
    title: magnet.title,
    description: "A one-page checklist, sent after email and consent. General guidance, not a regulatory approval.",
    path: `/resources/${slug}`,
  });
}

export default async function ResourcePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const magnet = leadMagnets[slug as LeadMagnetId];
  if (!magnet) notFound();
  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: magnet.title, path: `/resources/${slug}` },
        ]}
      />
      <h1 className="mt-4 font-serif text-5xl">{magnet.title}</h1>
      <p className="mt-4 text-[var(--muted)]">
        Leave a work email and consent. The PDF downloads in the browser. If mail delivery is configured, a copy is emailed as well.
      </p>
      <ul className="mt-4 list-disc pl-5 text-sm text-[var(--muted)]">
        {magnet.items.slice(0, 3).map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <div className="mt-6">
        <LeadForm magnet={slug} />
      </div>
    </div>
  );
}
