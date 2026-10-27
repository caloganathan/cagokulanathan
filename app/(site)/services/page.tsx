import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { services, tierMeta, type Tier } from "@/content/services";
import { pageMetadata } from "@/lib/seo/metadata";

export const metadata = pageMetadata({
  title: "Services for biologicals companies",
  description:
    "Dossiers, fermentation rescue, QC labs, pheromones, aquaculture inputs, diligence, RNAi and training from a solo agri-biologicals practice.",
  path: "/services",
});

export default function ServicesPage() {
  const tiers: Tier[] = ["A", "B", "C", "S"];
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Services", path: "/services" }]} />
      <h1 className="mt-4 font-serif text-5xl">Services</h1>
      <p className="measure mt-4 text-[var(--muted)]">
        Twelve engagements, grouped the way I sell them. Core work is a legal product and a batch that repeats. Specialist and flagship work sits behind that.
      </p>
      {tiers.map((tier) => (
        <section key={tier} className="mt-10">
          <h2 className="font-serif text-3xl">{tierMeta[tier].label}</h2>
          <p className="text-[var(--muted)]">{tierMeta[tier].blurb}</p>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {services
              .filter((service) => service.tier === tier)
              .map((service) => (
                <article key={service.slug} className="rounded-3xl bg-[var(--surface)] p-5 ring-1 ring-[var(--line)]">
                  <h3 className="font-serif text-2xl">
                    <Link href={`/services/${service.slug}`}>{service.h1}</Link>
                  </h3>
                  <p className="mt-2 text-[var(--muted)]">{service.problemLine}</p>
                </article>
              ))}
          </div>
        </section>
      ))}
    </div>
  );
}
