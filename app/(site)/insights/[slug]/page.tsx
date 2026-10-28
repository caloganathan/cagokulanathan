import fs from "node:fs";
import path from "node:path";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArticleToc, slugifyHeading } from "@/components/article-toc";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CtaBand } from "@/components/cta-band";
import { JsonLd } from "@/components/seo/json-ld";
import { insightBodies } from "@/content/insights/bodies";
import { insightBySlug, insights } from "@/content/insights/registry";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/seo/metadata";
import { articleSchema } from "@/lib/seo/schema";

export function generateStaticParams() {
  return insights.map((insight) => ({ slug: insight.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const insight = insightBySlug(slug);
  if (!insight) return {};
  return pageMetadata({
    title: insight.metaTitle,
    description: insight.metaDescription,
    path: `/insights/${insight.slug}`,
    type: "article",
  });
}

export default async function InsightPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const insight = insightBySlug(slug);
  const load = insightBodies[slug];
  if (!insight || !load) notFound();
  const Body = (await load()).default;
  const raw = fs.readFileSync(path.join(process.cwd(), "content/insights", `${slug}.mdx`), "utf8");
  const words = raw.split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.round(words / 200));
  const related = insights.filter((item) => item.slug !== slug).slice(0, 3);
  const toc = Array.from(raw.matchAll(/^##\s+(.+)$/gm)).map((match) => ({
    id: slugifyHeading(match[1]),
    text: match[1],
  }));

  return (
    <article className="mx-auto grid max-w-6xl gap-8 px-4 py-10 lg:grid-cols-[1fr_240px]">
      <JsonLd
        data={articleSchema({
          title: insight.title,
          description: insight.dek,
          path: `/insights/${insight.slug}`,
          dateIso: insight.dateIso,
        })}
      />
      <div>
        <Breadcrumbs
          items={[
            { name: "Home", path: "/" },
            { name: "Insights", path: "/insights" },
            { name: insight.title, path: `/insights/${insight.slug}` },
          ]}
        />
        <p className="mt-4 text-sm text-[var(--muted)]">
          {insight.dateLabel} · {minutes} min read · {site.founderShort}
          {insight.regulatory ? ` · Last reviewed ${site.lastReviewedRegulatory}` : ""}
        </p>
        <h1 className="mt-2 font-serif text-5xl leading-tight">{insight.title}</h1>
        <p className="measure mt-4 text-lg text-[var(--muted)]">{insight.dek}</p>
        <div className="measure mt-6">
          <Body />
        </div>
        <aside className="measure mt-10 rounded-3xl bg-[var(--mist)] p-5">
          <p className="font-semibold">{site.founder}</p>
          <p className="text-sm text-[var(--muted)]">{site.title}. Coimbatore. You speak to the scientists, not to a desk.</p>
          <Link className="text-[var(--link)]" href="/about">
            About
          </Link>
        </aside>
        <div className="mt-10">
          <CtaBand prefill="Hi JK Advisory team, I read an insight and want to talk about our file." pageTitle={insight.title} />
        </div>
      </div>
      <div className="lg:pt-16">
        <ArticleToc items={toc} />
        <h2 className="mt-6 font-serif text-2xl">Related</h2>
        <ul className="mt-2 space-y-2 text-sm">
          {related.map((item) => (
            <li key={item.slug}>
              <Link className="text-[var(--link)]" href={`/insights/${item.slug}`}>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
