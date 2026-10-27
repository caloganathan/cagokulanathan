import { Breadcrumbs } from "@/components/breadcrumbs";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/seo/metadata";

export const metadata = pageMetadata({
  title: "Privacy notice",
  description:
    "How JK Advisory handles enquiry data under India's Digital Personal Data Protection Act, 2023. Analytics only after consent.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <article className="measure mx-auto px-4 py-10">
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Privacy", path: "/privacy" }]} />
      <h1 className="mt-4 font-serif text-5xl">Privacy notice</h1>
      <p className="mt-4 text-sm">Last reviewed: {site.lastReviewedRegulatory}</p>
      <p className="mt-4 text-[var(--muted)]">
        This notice is written for a solo practice in India and should be reviewed by Indian counsel before launch. Phased commencement dates under the Digital Personal Data Protection Rules, 2025 must be confirmed against the Gazette. I do not state a commencement date beyond the public description of a phased start from November 2025.
      </p>
      <h2 className="mt-8 font-serif text-3xl">Who is responsible</h2>
      <p className="mt-2 text-[var(--muted)]">
        {site.founder}, practising as {site.brandName}, {site.city}, {site.state}. The grievance contact is the same person, through the contact form, until a separate email is published.
      </p>
      <h2 className="mt-8 font-serif text-3xl">What I collect and why</h2>
      <p className="mt-2 text-[var(--muted)]">
        On the contact form: name, email, company, role, segment, state, preferred channel and the problem you describe. Purpose: to reply to the enquiry. On a checklist form: name and email, to send the checklist and one follow-up. Analytics cookies run only after you accept the banner. I do not run a chat widget.
      </p>
      <h2 className="mt-8 font-serif text-3xl">Consent</h2>
      <p className="mt-2 text-[var(--muted)]">
        The consent box is unticked. The form does not send without it. You can ask me to delete the enquiry by writing again and saying so.
      </p>
      <h2 className="mt-8 font-serif text-3xl">Retention</h2>
      <p className="mt-2 text-[var(--muted)]">
        Enquiry email is kept long enough to do the work and to meet any professional record I am required to keep, and then deleted. I do not sell the list.
      </p>
      <h2 className="mt-8 font-serif text-3xl">Your rights</h2>
      <p className="mt-2 text-[var(--muted)]">
        You may ask for a summary of the personal data I hold about you, for a correction, for erasure where the Act allows it, and to nominate someone to exercise rights. The grievance path starts with me. The statutory board route is the one in the Act once the relevant rules are in force.
      </p>
    </article>
  );
}
