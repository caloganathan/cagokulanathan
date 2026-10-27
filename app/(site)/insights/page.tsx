import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { insights } from "@/content/insights/registry";
import { pageMetadata } from "@/lib/seo/metadata";

export const metadata = pageMetadata({
  title: "Insights on biologicals",
  description:
    "Briefs on Schedule VI, CIB&RC 9(3), fermentation, shelf life, RNAi, pheromones, CAA and the draft pesticides bill.",
  path: "/insights",
});

export default function InsightsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Insights", path: "/insights" }]} />
      <h1 className="mt-4 font-serif text-5xl">Insights</h1>
      <p className="measure mt-4 text-[var(--muted)]">
        Eight essays and four shorter briefings. Regulatory pieces carry a last-reviewed date and a link to the government source.
      </p>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {insights.map((insight) => (
          <article key={insight.slug} className="rounded-3xl border border-[var(--line)] p-5">
            <p className="text-sm text-[var(--muted)]">
              {insight.dateLabel}
              {insight.full ? "" : " · Briefing"}
            </p>
            <h2 className="mt-2 font-serif text-3xl">
              <Link href={`/insights/${insight.slug}`}>{insight.title}</Link>
            </h2>
            <p className="mt-2 text-[var(--muted)]">{insight.dek}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
