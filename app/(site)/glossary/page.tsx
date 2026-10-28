import { Breadcrumbs } from "@/components/breadcrumbs";
import { JsonLd } from "@/components/seo/json-ld";
import { glossary } from "@/content/glossary";
import { pageMetadata } from "@/lib/seo/metadata";
import { definedTermSetSchema } from "@/lib/seo/schema";

export const metadata = pageMetadata({
  title: "Biologicals glossary",
  description:
    "Plain-English definitions for biopesticide, Schedule VI, CFU, SIP, CAA, RNAi and the other terms used on this site.",
  path: "/glossary",
});

export default function GlossaryPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 [&>*]:max-w-3xl">
      <JsonLd
        data={definedTermSetSchema(
          glossary.map((term) => ({
            term: term.term,
            definition: term.definition,
            path: `/glossary#${term.slug}`,
          })),
        )}
      />
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Glossary", path: "/glossary" }]} />
      <h1 className="mt-4 font-serif text-3xl md:text-4xl">Glossary</h1>
      <p className="mt-4 text-[var(--muted)]">
        Definitions used on this site. They are not a substitute for the gazette text.
      </p>
      <dl className="mt-8 space-y-6">
        {glossary.map((term) => (
          <div key={term.slug} id={term.slug}>
            <dt className="font-serif text-lg md:text-xl">{term.term}</dt>
            <dd className="mt-1 text-[var(--muted)]">{term.definition}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
