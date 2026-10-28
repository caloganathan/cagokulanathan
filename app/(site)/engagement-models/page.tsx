import { Breadcrumbs } from "@/components/breadcrumbs";
import { CtaBand } from "@/components/cta-band";
import { engagements, feeNote } from "@/content/engagement";
import { pageMetadata } from "@/lib/seo/metadata";

export const metadata = pageMetadata({
  title: "How to work with us",
  description:
    "A free 30-minute call, a plant health check, a readiness assessment, fixed projects and a retainer. Rupee anchors are quoted, not invented.",
  path: "/engagement-models",
});

export default function EngagementPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 [&>*]:max-w-3xl">
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Engagement models", path: "/engagement-models" }]} />
      <h1 className="mt-4 font-serif text-3xl md:text-4xl">How to work with us</h1>
      <p className="mt-4 text-[var(--muted)]">
        Fees are quoted in INR after the first call, once the scope is clear. You speak to the founder on the first call.
      </p>
      <div className="mt-6 overflow-x-auto">
        <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
          <thead>
            <tr>
              <th className="border-b border-[var(--line)] px-3 py-2">Model</th>
              <th className="border-b border-[var(--line)] px-3 py-2">What</th>
              <th className="border-b border-[var(--line)] px-3 py-2">Price</th>
            </tr>
          </thead>
          <tbody>
            {engagements.map((row) => (
              <tr key={row.name}>
                <td className="border-b border-[var(--line)] px-3 py-3 font-semibold">{row.name}</td>
                <td className="border-b border-[var(--line)] px-3 py-3">{row.what}</td>
                <td className="border-b border-[var(--line)] px-3 py-3">{row.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-4 text-sm text-[var(--muted)]">{feeNote}</p>
      <div className="mt-10">
        <CtaBand prefill="Hi JK Advisory team, I would like to book a diagnostic call." pageTitle="Engagement models" />
      </div>
    </div>
  );
}
