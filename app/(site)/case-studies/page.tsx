import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { caseStudies } from "@/content/case-studies";
import { pageMetadata } from "@/lib/seo/metadata";

export const metadata = pageMetadata({
  title: "Anonymised case studies",
  description:
    "Fermentation, Beauveria carriers, pheromone lure scale-up and an aquaculture feed additive. Clients stay unnamed unless they consent in writing.",
  path: "/case-studies",
});

export default function CaseStudiesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Case studies", path: "/case-studies" }]} />
      <h1 className="mt-4 font-serif text-5xl">Case studies</h1>
      <p className="measure mt-4 text-[var(--muted)]">
        Every case is anonymised. A named flag exists in the content file and defaults to false. No client logo is shown.
      </p>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {caseStudies.map((study) => (
          <article key={study.slug} className="rounded-3xl border border-[var(--line)] p-5">
            <h2 className="font-serif text-3xl">
              <Link href={`/case-studies/${study.slug}`}>{study.title}</Link>
            </h2>
            <p className="mt-2 text-[var(--muted)]">{study.context}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
