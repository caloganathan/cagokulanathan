import { Breadcrumbs } from "@/components/breadcrumbs";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/seo/metadata";

export const metadata = pageMetadata({
  title: "Terms of engagement",
  description:
    "Draft terms for a solo agri-biologicals consultancy: scope, confidentiality, fees and who owns the deliverable. Have counsel review them.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <article className="measure mx-auto px-4 py-10">
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Terms", path: "/terms" }]} />
      <h1 className="mt-4 font-serif text-5xl">Terms</h1>
      <p className="mt-4 text-sm">Last reviewed: {site.lastReviewedRegulatory}. This is a draft for counsel, not a signed engagement.</p>
      <h2 className="mt-8 font-serif text-3xl">Scope</h2>
      <p className="mt-2 text-[var(--muted)]">
        Work starts when we agree a scope in writing. A free diagnostic call is not an engagement. I do not guarantee a registration, a certificate, a yield or a batch count.
      </p>
      <h2 className="mt-8 font-serif text-3xl">Fees</h2>
      <p className="mt-2 text-[var(--muted)]">
        Fees are in INR, quoted for the scope, and exclude GST, travel and third-party laboratory or trial costs. Rupee anchors are not on the site until they are confirmed.
      </p>
      <h2 className="mt-8 font-serif text-3xl">Confidentiality</h2>
      <p className="mt-2 text-[var(--muted)]">
        An NDA is available before you share a strain, a process or a data room. Case studies stay anonymised unless you give written consent to be named.
      </p>
      <h2 className="mt-8 font-serif text-3xl">Intellectual property</h2>
      <p className="mt-2 text-[var(--muted)]">
        You own the dossier text, SOPs and reports I write for your paid scope, once the invoice is paid. I keep my pre-existing methods. I do not take your strain.
      </p>
      <h2 className="mt-8 font-serif text-3xl">Law</h2>
      <p className="mt-2 text-[var(--muted)]">
        The practice is in Coimbatore, Tamil Nadu, India. A final jurisdiction clause should be settled by counsel in the engagement letter.
      </p>
    </article>
  );
}
