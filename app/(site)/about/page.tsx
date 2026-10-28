import { Breadcrumbs } from "@/components/breadcrumbs";
import { CtaBand } from "@/components/cta-band";
import { JsonLd } from "@/components/seo/json-ld";
import { claimText } from "@/content/claims";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/seo/metadata";
import { webPageSchema } from "@/lib/seo/schema";
import { absoluteUrl } from "@/content/site";

export const metadata = pageMetadata({
  title: "About JK Advisory and our founder",
  description:
    "A founder-led agri-biologicals team in Coimbatore, founded by Dr. Gokulanathan A., Ph.D. Biotechnology (2015) and ISO 15189 internal auditor (2020).",
  path: "/about",
});

export default function AboutPage() {
  const phd = claimText("phd");
  const exp = claimText("exp");
  const iso = claimText("iso15189");
  const korea = claimText("korea");
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
      <JsonLd
        data={webPageSchema({
          name: "About JK Advisory",
          description: site.promise,
          path: "/about",
          type: "AboutPage",
        })}
      />
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "About", path: "/about" }]} />
      <h1 className="mt-4 font-serif text-5xl">A small team, on purpose</h1>
      <p data-answer className="mt-4 text-lg text-[var(--muted)]">
        JK Advisory is a tiny, founder-driven agri-biologicals team led by Dr. Gokulanathan A. We keep the team deliberately small so that every client works directly with the founder and the people who do the work. Based in Coimbatore — close to TNAU, the coconut belt and Western Ghats plantations — we serve clients across India.
      </p>
      <h2 className="mt-8 font-serif text-3xl">Our founder: Dr. Gokulanathan A.</h2>
      <ul className="mt-3 list-disc space-y-2 pl-5">
        {phd ? <li>{phd}</li> : null}
        {exp ? <li>{exp}</li> : null}
        {korea ? <li>{korea}</li> : null}
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
        {korea ? (
          <li>
            <p className="font-semibold">2022–2025</p>
            <p className="text-[var(--muted)]">{korea}.</p>
          </li>
        ) : null}
        <li>
          <p className="font-semibold">Now</p>
          <p className="text-[var(--muted)]">
            Founded JK Advisory in Coimbatore: a founder-led team for production, dossiers and next-generation crop protection. Employer names and dates that are not confirmed are left off this page.
          </p>
        </li>
      </ol>
      <h2 className="mt-8 font-serif text-3xl">Why we stay small</h2>
      <p className="mt-2 text-[var(--muted)]">
        You get the scientists, not juniors. The people on the diagnostic call are the people who will stand next to the fermenter or write the data roadmap. We take on only as much work as a tiny, founder-led team can do well. An NDA is available before you share a strain or a batch record.
      </p>
      <p className="mt-4">
        Profile links are added only when the URL is confirmed. Until then, the about page is the canonical biography.
      </p>
      <div className="mt-10">
        <CtaBand prefill="Hi JK Advisory team, I would like to talk about working together." pageTitle="About" />
      </div>
    </article>
  );
}
