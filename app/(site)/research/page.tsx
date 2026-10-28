import { Breadcrumbs } from "@/components/breadcrumbs";
import { JsonLd } from "@/components/seo/json-ld";
import { doiHref, researchAreas, visiblePublications } from "@/content/publications";
import { pageMetadata } from "@/lib/seo/metadata";
import { scholarlyArticleSchema } from "@/lib/seo/schema";

export const metadata = pageMetadata({
  title: "Research",
  description:
    "Research areas in insect genomics, RNAi, semiochemicals, entomopathogenic fungi and PGPR. Papers appear only with a real DOI.",
  path: "/research",
});

export default function ResearchPage() {
  const papers = visiblePublications();
  // TODO(confirm): publication list and count
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Research", path: "/research" }]} />
      <h1 className="mt-4 font-serif text-5xl">Research</h1>
      <p data-answer className="measure mt-4 text-[var(--muted)]">
        Papers are listed only when a real DOI is on file. A count of publications is not shown until it is confirmed. The commercial question under each area is the one we use with clients.
      </p>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {researchAreas.map((area) => (
          <article key={area.slug} id={area.slug} className="rounded-3xl bg-[var(--surface)] p-5 ring-1 ring-[var(--line)]">
            <h2 className="font-serif text-3xl">{area.title}</h2>
            <p className="mt-2 text-[var(--muted)]">{area.text}</p>
          </article>
        ))}
      </div>
      <h2 className="mt-12 font-serif text-4xl">Publications</h2>
      {papers.length === 0 ? (
        <p className="mt-3 text-[var(--muted)]">No paper is listed yet. Empty or unconfirmed DOI records are omitted rather than invented.</p>
      ) : (
        <div className="mt-4 grid gap-4">
          {papers.map((paper) => {
            const href = doiHref(paper.doi);
            return (
              <article key={paper.title} className="rounded-3xl border border-[var(--line)] p-5">
                <JsonLd
                  data={scholarlyArticleSchema({
                    title: paper.title,
                    datePublished: String(paper.year),
                    doi: href,
                    authors: paper.authors,
                  })}
                />
                <h3 className="font-serif text-2xl">{paper.title}</h3>
                <p className="text-sm text-[var(--muted)]">
                  {paper.journal} · {paper.year} · {paper.authors}
                </p>
                <p className="mt-2">{paper.why}</p>
                {href ? (
                  <a className="text-[var(--link)]" href={href}>
                    DOI
                  </a>
                ) : null}
              </article>
            );
          })}
        </div>
      )}
    </div>
  );
}
