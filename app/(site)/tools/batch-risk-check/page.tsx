import { Breadcrumbs } from "@/components/breadcrumbs";
import { BatchTool } from "@/components/tools/batch-tool";
import { pageMetadata } from "@/lib/seo/metadata";

export const metadata = pageMetadata({
  title: "Batch Risk Check",
  description:
    "Eight questions on organism, scale, CFU, contamination, foam, shelf life, QC and sterilisation. A risk level and three actions. Nothing is stored.",
  path: "/tools/batch-risk-check",
});

export default function BatchPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 [&>*]:max-w-3xl">
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Batch Risk Check", path: "/tools/batch-risk-check" },
        ]}
      />
      <h1 className="mt-4 font-serif text-3xl md:text-4xl">Batch Risk Check</h1>
      <p data-answer className="mt-4 text-[var(--muted)]">
        Answer eight questions about the organism, the scale, the count, contamination, foam, shelf life, QC failures and sterilisation. You get a low, medium or high risk and three actions. The score stays in your browser unless you choose to send it.
      </p>
      <div className="mt-6">
        <BatchTool />
      </div>
    </div>
  );
}
