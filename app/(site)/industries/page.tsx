import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { industries } from "@/content/industries";
import { pageMetadata } from "@/lib/seo/metadata";

export const metadata = pageMetadata({
  title: "Industries we work with",
  description:
    "Biostimulants, biopesticides, biofertilisers, plantations, aquaculture, agritech startups and investors. A boutique practice based in Coimbatore.",
  path: "/industries",
});

export default function IndustriesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Industries", path: "/industries" }]} />
      <h1 className="mt-4 font-serif text-3xl md:text-4xl">Industries</h1>
      <p className="measure mt-4 text-[var(--muted)]">
        The same science shows up in different buying decisions. Pick the one that matches the pressure you are under.
      </p>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {industries.map((industry) => (
          <article key={industry.slug} className="rounded-3xl bg-[var(--surface)] p-5 ring-1 ring-[var(--line)]">
            <h2 className="font-serif text-xl md:text-2xl">
              <Link href={`/industries/${industry.slug}`}>{industry.title}</Link>
            </h2>
            <p className="mt-2 text-[var(--muted)]">{industry.answer}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
