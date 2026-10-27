import Link from "next/link";
import { CtaBand } from "@/components/cta-band";
import { FaqAccordion } from "@/components/ui/accordion";
import { HeroHeading } from "@/components/hero-heading";
import { HeroVisual } from "@/components/hero-visual";
import { JsonLd } from "@/components/seo/json-ld";
import { Reveal } from "@/components/reveal";
import { SegmentSelector } from "@/components/segment-selector";
import { TrackedLink } from "@/components/tracked-link";
import { caseStudies } from "@/content/case-studies";
import { claimText } from "@/content/claims";
import { homeFaqs } from "@/content/faqs";
import { insights } from "@/content/insights/registry";
import { services, tierMeta, type Tier } from "@/content/services";
import { site } from "@/content/site";
import { sources } from "@/content/sources";
import { pageMetadata } from "@/lib/seo/metadata";
import { faqSchema } from "@/lib/seo/schema";
import { waHref } from "@/lib/whatsapp";

export const metadata = pageMetadata({
  title: "Agri-biologicals consultant in India",
  description:
    "Dr. Gokulanathan helps biological input companies fix fermentation, prepare dossiers and commercialise. Based in Coimbatore, working across India.",
  path: "/",
});

const whyNow = [
  {
    title: "Biostimulant provisionals ended",
    text: "Provisional registrations became invalid on 17 Jun 2025. Only Schedule VI products may be manufactured, imported or sold.",
    href: "/insights/biostimulant-provisional-registrations-india",
    source: sources.pibBiostimulant.href,
  },
  {
    title: "Biopesticide 9(3B) is closed for known strains",
    text: "CIB&RC discontinued Section 9(3B) for already-registered strains. The notice was uploaded on 28 Apr 2020. The path is Section 9(3).",
    href: "/insights/biopesticide-9-3-vs-9-3b",
    source: sources.ppqsGuidelines.href,
  },
  {
    title: "A pesticides bill is proposed, not enacted",
    text: "The revised draft Pesticides Management Bill, 2025 was released for consultation in Jan 2026. It is not the law you file under today.",
    href: "/insights/draft-pesticides-management-bill-2025",
    source: sources.pibPmb.href,
  },
  {
    title: "Aquaculture inputs need a CAA view",
    text: "Rule 18(3) of the Coastal Aquaculture Authority Rules, 2024 requires certification before an input is used in coastal aquaculture, unless exempted.",
    href: "/insights/caa-aquaculture-probiotics",
    source: sources.caaRules.href,
  },
];

const steps = [
  ["Diagnose", "A free 30-minute call. If the floor is the problem, a Plant Health Check is one to two days on site."],
  ["Roadmap", "A written data plan or a ranked list of process causes. Due-diligence memos are planned over two to three weeks."],
  ["Execute alongside your team", "Protocols, dossier text, or the next instrumented batches. I do the work I scoped."],
  ["Transfer and train", "SOPs and operator training, in English or Tamil, so the change survives after I leave."],
];

export default function HomePage() {
  const trust = [claimText("phd"), claimText("exp"), claimText("iso15189")].filter(Boolean);
  // TODO(confirm): pubs
  // TODO(confirm): nabl
  // TODO(confirm): korea
  const tiers: Tier[] = ["A", "B", "C", "S"];

  return (
    <div>
      <JsonLd data={faqSchema(homeFaqs)} />
      <section className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-12 md:grid-cols-[1.2fr_0.8fr] md:py-20">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--leaf)]">
            Agri-Biologicals Consultant · Coimbatore · Pan-India
          </p>
          <HeroHeading />
          <p className="measure mt-5 text-[var(--muted)]">
            I&apos;m Dr. Gokulanathan, a biotechnologist with 11+ years across fermentation plants, research labs and regulators in India and Korea. I help biopesticide, biostimulant and biofertiliser companies fix production, clear registration and commercialise next-generation crop protection.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <TrackedLink
              href={waHref("Hi Dr. Gokul, I would like a diagnostic on a biologicals bottleneck.", "Home")}
              event="whatsapp_click"
              params={{ page: "Home" }}
              className="inline-flex min-h-11 items-center rounded-full bg-[var(--whatsapp)] px-4 font-semibold text-[#0e1a14] no-underline"
            >
              WhatsApp me
            </TrackedLink>
            <TrackedLink
              href={site.calendlyUrl || "/contact"}
              event="booking_open"
              params={{ page: "Home" }}
              className="inline-flex min-h-11 items-center rounded-full bg-[var(--forest)] px-4 font-semibold text-white no-underline"
            >
              Book a free 30-min diagnostic
            </TrackedLink>
            <TrackedLink href={site.email ? `mailto:${site.email}` : "/contact"} event="email_click" className="text-[var(--link)] underline-offset-4 hover:underline">
              Email instead
            </TrackedLink>
          </div>
          <p className="mt-4 text-sm text-[var(--muted)]">No sales team. You speak directly to the scientist.</p>
        </div>
        <HeroVisual />
      </section>

      <section className="border-y border-[var(--line)] bg-[var(--surface)]">
        <ul className="mx-auto flex max-w-6xl flex-wrap gap-x-6 gap-y-2 px-4 py-4 text-sm font-semibold">
          {trust.map((item) => (
            <li key={item}>{item}</li>
          ))}
          <li>ISO 15189 is not an agri-lab accreditation</li>
        </ul>
      </section>

      <Reveal>
      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <h2 className="font-serif text-4xl">Why now</h2>
          <p className="text-sm text-[var(--muted)]">Last reviewed {site.lastReviewedRegulatory}</p>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {whyNow.map((card) => (
            <article key={card.title} className="rounded-3xl border border-[var(--line)] bg-[var(--surface)] p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#8a5a10]">Why now</p>
              <h3 className="mt-2 font-serif text-2xl">{card.title}</h3>
              <p className="mt-2 text-[var(--muted)]">{card.text}</p>
              <div className="mt-4 flex flex-wrap gap-4 text-sm">
                <Link className="font-semibold text-[var(--link)]" href={card.href}>
                  Read the brief
                </Link>
                <a className="text-[var(--link)]" href={card.source}>
                  Primary source
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
      </Reveal>

      <section className="mx-auto max-w-6xl px-4 py-6">
        <h2 className="font-serif text-4xl">I am a…</h2>
        <div className="mt-5">
          <SegmentSelector pageTitle="Home" />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="font-serif text-4xl">Services by tier</h2>
        {tiers.map((tier) => (
          <div key={tier} className="mt-8">
            <h3 className="font-serif text-2xl">{tierMeta[tier].label}</h3>
            <p className="text-[var(--muted)]">{tierMeta[tier].blurb}</p>
            <div className={`mt-4 grid gap-4 ${tier === "A" ? "md:grid-cols-2" : "md:grid-cols-3"}`}>
              {services
                .filter((service) => service.tier === tier)
                .map((service) => (
                  <article key={service.slug} className="rounded-3xl bg-[var(--surface)] p-5 ring-1 ring-[var(--line)]">
                    <h4 className="font-serif text-2xl">{service.navLabel}</h4>
                    <p className="mt-2 text-[var(--muted)]">{service.problemLine}</p>
                    <ul className="mt-3 list-disc space-y-1 pl-5 text-sm">
                      {service.outcomes.map((outcome) => (
                        <li key={outcome}>{outcome}</li>
                      ))}
                    </ul>
                    <Link className="mt-4 inline-block font-semibold text-[var(--link)]" href={`/services/${service.slug}`}>
                      See the engagement
                    </Link>
                  </article>
                ))}
            </div>
          </div>
        ))}
      </section>

      <section className="mx-auto max-w-6xl px-4 py-6">
        <h2 className="font-serif text-4xl">How I work</h2>
        <ol className="mt-6 grid gap-4 md:grid-cols-4">
          {steps.map(([title, text], index) => (
            <li key={title} className="rounded-3xl bg-[var(--mist)] p-5">
              <p className="font-serif text-3xl text-[var(--leaf)]">0{index + 1}</p>
              <h3 className="mt-2 font-serif text-2xl">{title}</h3>
              <p className="mt-2 text-sm text-[var(--muted)]">{text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="font-serif text-4xl">Proof, anonymised</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {caseStudies.slice(0, 3).map((study) => (
            <article key={study.slug} className="rounded-3xl border border-[var(--line)] p-5">
              <h3 className="font-serif text-2xl">{study.title}</h3>
              <p className="mt-2 text-sm text-[var(--muted)]">{study.challenge}</p>
              <Link className="mt-4 inline-block font-semibold text-[var(--link)]" href={`/case-studies/${study.slug}`}>
                Read the case
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-4 py-6 md:grid-cols-[160px_1fr]">
        <div className="grid size-40 place-items-center rounded-full bg-[var(--forest)] font-serif text-4xl text-[#f7f5ef]" aria-hidden>
          GA
        </div>
        <div>
          <h2 className="font-serif text-4xl">Dr. Gokulanathan A.</h2>
          <p className="measure mt-3 text-[var(--muted)]">
            I am Dr. Gokulanathan A., a biotechnologist trained at Bharathiar University, Ph.D. 2015. For more than eleven years I have worked across research benches and fermentation plants on the organisms that become biopesticides, biofertilisers and related biological inputs. I am a certified ISO 15189 internal auditor (2020). I apply that quality-management discipline to agri-biologicals laboratories. It is not, by itself, an agricultural accreditation. I work solo from Coimbatore, so the person who scopes the problem is the person who does the work. Why I work solo: you get the scientist, not a junior.
          </p>
          <Link className="mt-3 inline-block font-semibold text-[var(--link)]" href="/about">
            The longer story
          </Link>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-4 px-4 py-14 md:grid-cols-2">
        <article className="rounded-3xl bg-[var(--surface)] p-6 ring-1 ring-[var(--line)]">
          <h2 className="font-serif text-3xl">Batch Risk Check</h2>
          <p className="mt-2 text-[var(--muted)]">Eight questions. A low, medium or high risk, and three actions. Nothing is stored unless you send the result.</p>
          <Link className="mt-4 inline-block font-semibold text-[var(--link)]" href="/tools/batch-risk-check">
            Run it
          </Link>
        </article>
        <article className="rounded-3xl bg-[var(--surface)] p-6 ring-1 ring-[var(--line)]">
          <h2 className="font-serif text-3xl">Regulatory Readiness Check</h2>
          <p className="mt-2 text-[var(--muted)]">A branch for biostimulants, biopesticides, biofertilisers or aquaculture inputs. A score and the top gaps. Not a probability of approval.</p>
          <Link className="mt-4 inline-block font-semibold text-[var(--link)]" href="/tools/regulatory-readiness-check">
            Run it
          </Link>
        </article>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-14">
        <h2 className="font-serif text-4xl">Latest insights</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {insights.slice(0, 3).map((insight) => (
            <article key={insight.slug} className="rounded-3xl border border-[var(--line)] p-5">
              <p className="text-sm text-[var(--muted)]">{insight.dateLabel}</p>
              <h3 className="mt-2 font-serif text-2xl">{insight.title}</h3>
              <p className="mt-2 text-sm text-[var(--muted)]">{insight.dek}</p>
              <Link className="mt-3 inline-block font-semibold text-[var(--link)]" href={`/insights/${insight.slug}`}>
                Read
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-14">
        <h2 className="font-serif text-4xl">Questions people ask first</h2>
        <div className="mt-4">
          <FaqAccordion items={homeFaqs} />
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 pb-16">
        <CtaBand prefill="Hi Dr. Gokul, I would like to talk about a biologicals bottleneck." pageTitle="Home" />
      </div>
    </div>
  );
}
