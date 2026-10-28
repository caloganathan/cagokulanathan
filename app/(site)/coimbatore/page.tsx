import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CtaBand } from "@/components/cta-band";
import { pageMetadata } from "@/lib/seo/metadata";

export const metadata = pageMetadata({
  title: "Agri-biotech consultant in Coimbatore",
  description:
    "A boutique agri-biologicals consultancy in Coimbatore, close to TNAU, the Pollachi coconut belt and the Nilgiris and Valparai plantations.",
  path: "/coimbatore",
});

export default function CoimbatorePage() {
  return (
    <article className="mx-auto max-w-6xl px-4 py-10 [&>*]:max-w-3xl">
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Coimbatore", path: "/coimbatore" }]} />
      <h1 className="mt-4 font-serif text-3xl md:text-4xl">Agri-biotech consultant in Coimbatore</h1>
      <p data-answer className="mt-4 text-lg text-[var(--muted)]">
        We are based in Coimbatore, Tamil Nadu, close to Tamil Nadu Agricultural University, the Pollachi coconut belt, and the plantation country of the Nilgiris and Valparai. Kerala and Karnataka are a short reach. The practice serves clients across India, not only the district.
      </p>
      <ul className="mt-6 list-disc space-y-2 pl-5">
        <li>
          <Link className="text-[var(--link)]" href="/services/fermentation-scale-up-contamination-troubleshooting">
            Fermentation troubleshooting for local plants
          </Link>
        </li>
        <li>
          <Link className="text-[var(--link)]" href="/industries/plantations-coconut-tea-coffee">
            Pheromone design for coconut and plantations
          </Link>
        </li>
        <li>
          <Link className="text-[var(--link)]" href="/services/biofertiliser-fco-compliance">
            Biofertiliser FCO work for Tamil Nadu units
          </Link>
        </li>
      </ul>
      <div className="mt-10">
        <CtaBand prefill="Hi JK Advisory team, I am writing from Tamil Nadu about a biologicals problem." pageTitle="Coimbatore" />
      </div>
    </article>
  );
}
