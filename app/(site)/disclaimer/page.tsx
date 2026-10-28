import { Breadcrumbs } from "@/components/breadcrumbs";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/seo/metadata";

export const metadata = pageMetadata({
  title: "Disclaimer",
  description:
    "Technical and regulatory guidance, not legal advice. Registration decisions rest with CIB&RC, the Controller of Fertilisers and the CAA.",
  path: "/disclaimer",
});

export default function DisclaimerPage() {
  return (
    <article className="mx-auto max-w-6xl px-4 py-10 [&>*]:max-w-3xl">
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Disclaimer", path: "/disclaimer" }]} />
      <h1 className="mt-4 font-serif text-3xl md:text-4xl">Disclaimer</h1>
      <p className="mt-4 text-[var(--muted)]">
        Information on this site is general technical and regulatory guidance, not legal advice. Registration and certification decisions rest solely with the competent authorities (CIB&RC, Controller of Fertilisers / Ministry of Agriculture, CAA). Regulatory content last reviewed {site.lastReviewedRegulatory}.
      </p>
      <p className="mt-4">
        <a className="text-[var(--link)]" href="https://www.pib.gov.in/PressReleasePage.aspx?PRID=2165081">
          PIB on biostimulant provisional registrations
        </a>
      </p>
    </article>
  );
}
