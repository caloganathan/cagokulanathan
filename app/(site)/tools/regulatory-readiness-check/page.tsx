import { Breadcrumbs } from "@/components/breadcrumbs";
import { ReadinessTool } from "@/components/tools/readiness-tool";
import { pageMetadata } from "@/lib/seo/metadata";

export const metadata = pageMetadata({
  title: "Regulatory Readiness Check",
  description:
    "A readiness score for biostimulant, biopesticide, biofertiliser or aquaculture files. Top gaps only. Not a chance of approval.",
  path: "/tools/regulatory-readiness-check",
});

export default function ReadinessPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 [&>*]:max-w-3xl">
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Regulatory Readiness Check", path: "/tools/regulatory-readiness-check" },
        ]}
      />
      <h1 className="mt-4 font-serif text-3xl md:text-4xl">Regulatory Readiness Check</h1>
      <p data-answer className="mt-4 text-[var(--muted)]">
        Pick the regime and answer the questions. The score is the share you marked yes. The gaps are the rest, capped at three. It is a way to start a call. It is not a prediction of what CIB&RC, the Controller of Fertilisers or the CAA will decide.
      </p>
      <div className="mt-6">
        <ReadinessTool />
      </div>
    </div>
  );
}
