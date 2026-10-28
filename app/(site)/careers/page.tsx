import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CareersForm } from "@/components/careers-form";
import { FaqAccordion } from "@/components/ui/accordion";
import { JsonLd } from "@/components/seo/json-ld";
import { careerFaqs, careerSteps, careerTracks, careerValues } from "@/content/careers";
import { pageMetadata } from "@/lib/seo/metadata";
import { faqSchema, webPageSchema } from "@/lib/seo/schema";

export const metadata = pageMetadata({
  title: "Work with us: agri-biologicals careers",
  description:
    "Junior scientists, PhD holders, students and bio-organic agri enthusiasts: join a tiny founder-led team in Coimbatore. Apply in five minutes.",
  path: "/careers",
});

export default function CareersPage() {
  return (
    <div>
      <JsonLd data={faqSchema(careerFaqs)} />
      <JsonLd
        data={webPageSchema({
          name: "Work with us — careers in agri-biologicals at JK Advisory",
          description:
            "Open applications for junior scientists, PhD holders, UG candidates and people with basic education and a love for biological and organic agriculture.",
          path: "/careers",
        })}
      />

      <section className="mx-auto max-w-6xl px-4 pt-10">
        <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Work with us", path: "/careers" }]} />
        <div className="mt-6 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--leaf)]">Work with us · Partner in agri growth</p>
          <h1 className="mt-3 font-serif text-[clamp(2.4rem,1.4rem+3vw,4.2rem)] leading-[1.05]">
            Love soil, microbes and honest farming? Grow with us.
          </h1>
          <p className="mt-5 text-lg">
            Every biological input that works in a farmer&apos;s field began as someone&apos;s curiosity at a bench or a fermenter. We are looking for the next people to carry that curiosity forward.
          </p>
          <p data-answer className="measure mt-4 text-[var(--muted)]">
            JK Advisory is a tiny, founder-led agri-biologicals team in Coimbatore, Tamil Nadu. We welcome applications from junior scientists, PhD holders, undergraduate students and people with basic education and a genuine love for biological and organic agriculture. We have no fixed list of vacancies: we keep a talent circle and write to people when an engagement fits their skills.
          </p>
          <a
            href="#apply"
            className="mt-6 inline-flex min-h-11 items-center rounded-full bg-[var(--forest)] px-5 font-semibold text-white no-underline"
          >
            Apply in five minutes
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14" aria-labelledby="who">
        <h2 id="who" className="font-serif text-4xl">
          Who we are looking for
        </h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {careerTracks.map((item) => (
            <article key={item.id} className="flex flex-col rounded-3xl border border-[var(--line)] bg-[var(--surface)] p-6">
              <h3 className="font-serif text-2xl">{item.label}</h3>
              <p className="mt-1 text-sm font-semibold text-[var(--leaf)]">{item.who}</p>
              <p className="mt-3 flex-1 text-[var(--muted)]">{item.text}</p>
              <Link className="mt-4 font-semibold text-[var(--link)]" href={`/careers?track=${item.id}#apply`}>
                Apply as {item.applyAs}
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-14" aria-labelledby="values">
        <h2 id="values" className="font-serif text-4xl">
          What we value
        </h2>
        <ul className="mt-6 grid gap-4 md:grid-cols-4">
          {careerValues.map(([title, text]) => (
            <li key={title} className="rounded-3xl bg-[var(--mist)] p-5">
              <h3 className="font-serif text-2xl">{title}</h3>
              <p className="mt-2 text-sm text-[var(--muted)]">{text}</p>
            </li>
          ))}
        </ul>
      </section>

      <section id="apply" className="scroll-mt-20 bg-[var(--forest)] px-4 py-14 text-[#f7f5ef]" aria-labelledby="apply-h">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <h2 id="apply-h" className="font-serif text-4xl leading-tight">
              Tell us who you are.
            </h2>
            <p className="mt-4 text-[#d7e6de]">
              Five minutes, one form. Your application goes straight to the founder&apos;s inbox. We read every one and write back, even when the answer is &ldquo;not yet&rdquo;.
            </p>
            <ol className="mt-8 space-y-4">
              {careerSteps.map(([title, text], index) => (
                <li key={title} className="flex gap-4">
                  <span className="grid size-9 shrink-0 place-items-center rounded-full bg-[#f7c948] font-semibold text-[#0e1a14]">{index + 1}</span>
                  <div>
                    <p className="font-semibold">{title}</p>
                    <p className="text-sm text-[#d7e6de]">{text}</p>
                  </div>
                </li>
              ))}
            </ol>
            <p className="mt-8 text-sm text-[#d7e6de]">
              This page is not an offer of employment. See our <Link className="text-[#f7c948]" href="/privacy">privacy notice</Link> for how applications are handled.
            </p>
          </div>
          <div className="rounded-3xl border border-[#3f6b57] bg-[#0f3a28] p-5 md:p-8">
            <CareersForm />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-14" aria-labelledby="faq">
        <h2 id="faq" className="font-serif text-4xl">
          Questions before you apply
        </h2>
        <div className="mt-4">
          <FaqAccordion items={careerFaqs} />
        </div>
      </section>
    </div>
  );
}
