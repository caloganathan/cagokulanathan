import { Breadcrumbs } from "@/components/breadcrumbs";
import { CtaBand } from "@/components/cta-band";
import { JsonLd } from "@/components/seo/json-ld";
import { claimText } from "@/content/claims";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/seo/metadata";
import { absoluteUrl } from "@/content/site";

export const metadata = pageMetadata({
  title: "About Dr. Gokulanathan",
  description:
    "A solo agri-biologicals consultant in Coimbatore. Ph.D. Biotechnology, Bharathiar University, 2015. ISO 15189 internal auditor, 2020.",
  path: "/about",
});

export default function AboutPage() {
  const phd = claimText("phd");
  const exp = claimText("exp");
  const iso = claimText("iso15189");
  // TODO(confirm): korea employer, dates and title
  // TODO(confirm): nabl team claim
  // TODO(confirm): publication count
  const sameAs = [site.linkedin, site.orcid, site.googleScholar, site.researchGate].filter(Boolean);
  return (
    <article className="mx-auto max-w-3xl px-4 py-10">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Person",
          name: site.founder,
          jobTitle: site.title,
          url: absoluteUrl("/about"),
          ...(sameAs.length ? { sameAs } : {}),
          address: {
            "@type": "PostalAddress",
            addressLocality: site.city,
            addressRegion: site.state,
            addressCountry: site.country,
          },
        }}
      />
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "About", path: "/about" }]} />
      <h1 className="mt-4 font-serif text-5xl">Dr. Gokulanathan A.</h1>
      <p data-answer className="mt-4 text-lg text-[var(--muted)]">
        I am the practice. There is no team of experts behind the pronoun. Based in Coimbatore — close to TNAU, the coconut belt and Western Ghats plantations — I serve clients across India.
      </p>
      <h2 className="mt-8 font-serif text-3xl">Credentials I can state</h2>
      <ul className="mt-3 list-disc space-y-2 pl-5">
        {phd ? <li>{phd}</li> : null}
        {exp ? <li>{exp}</li> : null}
        {iso ? <li>{iso}. This is a medical-laboratory auditor credential. It is not an agricultural product standard.</li> : null}
      </ul>
      <h2 className="mt-8 font-serif text-3xl">Timeline</h2>
      <ol className="mt-4 space-y-4 border-l border-[var(--line)] pl-4">
        <li>
          <p className="font-semibold">2015</p>
          <p className="text-[var(--muted)]">Ph.D. Biotechnology, Bharathiar University.</p>
        </li>
        <li>
          <p className="font-semibold">2020</p>
          <p className="text-[var(--muted)]">Certified ISO 15189 internal auditor.</p>
        </li>
        <li>
          <p className="font-semibold">Now</p>
          <p className="text-[var(--muted)]">
            Solo advisory from Coimbatore for production, dossiers and next-generation crop protection. Employer names and dates that are not confirmed are left off this page.
          </p>
        </li>
      </ol>
      <h2 className="mt-8 font-serif text-3xl">Why I work solo</h2>
      <p className="mt-2 text-[var(--muted)]">
        You get the scientist, not a junior. The person on the diagnostic call is the person who will stand next to the fermenter or write the data roadmap. An NDA is available before you share a strain or a batch record.
      </p>
      <p className="mt-4">
        Profile links are added only when the URL is confirmed. Until then, the about page is the canonical biography.
      </p>
      <div className="mt-10">
        <CtaBand prefill="Hi Dr. Gokul, I would like to talk about working together." pageTitle="About" />
      </div>
    </article>
  );
}
