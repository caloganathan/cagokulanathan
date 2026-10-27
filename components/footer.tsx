import Link from "next/link";
import { site } from "@/content/site";
import { claimText } from "@/content/claims";

export function Footer() {
  const iso = claimText("iso15189");
  const phd = claimText("phd");
  return (
    <footer className="border-t border-[var(--line)] bg-[var(--surface)]">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="font-serif text-3xl">{site.brandName}</p>
          <p className="mt-2 text-[var(--muted)]">
            {site.founder}, {site.title}. Based in {site.city}, {site.state}. A service-area practice across India.
          </p>
          <p className="mt-3 text-sm text-[var(--muted)]">
            {phd}. {iso}. ISO 15189 is a medical-laboratory standard. It is not an agri-biologicals accreditation.
          </p>
          {site.email ? (
            <p className="mt-3">
              <a className="text-[var(--link)]" href={`mailto:${site.email}`}>
                {site.email}
              </a>
            </p>
          ) : null}
          {site.gstin ? <p className="mt-2 text-sm">GSTIN {site.gstin}</p> : null}
        </div>
        <div>
          <p className="font-semibold">Explore</p>
          <ul className="mt-2 space-y-1 text-sm">
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/engagement-models">Engagement models</Link></li>
            <li><Link href="/research">Research</Link></li>
            <li><Link href="/glossary">Glossary</Link></li>
            <li><Link href="/coimbatore">Coimbatore</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
        <div>
          <p className="font-semibold">Service area</p>
          <p className="mt-2 text-sm text-[var(--muted)]">{site.serviceArea.join(" · ")}</p>
          <ul className="mt-4 space-y-1 text-sm">
            <li><Link href="/privacy">Privacy</Link></li>
            <li><Link href="/terms">Terms</Link></li>
            <li><Link href="/disclaimer">Disclaimer</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-[var(--line)] px-4 py-4 text-sm text-[var(--muted)]">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 md:flex-row md:justify-between">
          <p>Information on this site is general technical and regulatory guidance, not legal advice.</p>
          <p>Regulatory content last reviewed {site.lastReviewedRegulatory}.</p>
        </div>
      </div>
    </footer>
  );
}
