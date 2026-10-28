import { Breadcrumbs } from "@/components/breadcrumbs";
import { ContactForm } from "@/components/contact-form";
import { TrackedLink } from "@/components/tracked-link";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/seo/metadata";
import { waHref, whatsappConfigured } from "@/lib/whatsapp";

export const metadata = pageMetadata({
  title: "Contact Dr. Gokul",
  description:
    "Write to Dr. Gokulanathan in Coimbatore. Reply within one working day (IST). WhatsApp, email and booking when those channels are configured.",
  path: "/contact",
});

export default function ContactPage() {
  const prefill = "Hi JK Advisory team, I would like to talk.";
  const place = site.address || `${site.city}, ${site.state}, India`;
  const mapSrc = site.mapEmbedUrl || `https://www.google.com/maps?q=${encodeURIComponent(place)}&z=11&output=embed`;
  const mapLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(place)}`;
  return (
    <div className="mx-auto grid max-w-6xl gap-10 px-4 py-10 lg:grid-cols-2">
      <div>
        <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Contact", path: "/contact" }]} />
        <h1 className="mt-4 font-serif text-3xl md:text-4xl">Contact</h1>
        <p className="mt-4 text-[var(--muted)]">
          Reply within one working day (IST). No sales team. An NDA is available before you share details.
        </p>
        <div className="mt-6">
          <ContactForm />
        </div>
      </div>
      <aside className="space-y-4">
        {whatsappConfigured() || site.email || site.calendlyUrl ? (
          <div className="grid gap-4">
            {whatsappConfigured() ? (
              <div className="rounded-3xl bg-[var(--mist)] p-5">
                <h2 className="font-serif text-xl md:text-2xl">WhatsApp</h2>
                <TrackedLink
                  href={waHref(prefill, "Contact")}
                  event="whatsapp_click"
                  params={{ page: "Contact" }}
                  className="mt-3 inline-flex min-h-11 items-center rounded-full bg-[var(--whatsapp)] px-4 font-semibold text-[#0e1a14] no-underline"
                >
                  Open WhatsApp
                </TrackedLink>
              </div>
            ) : null}
            {site.email ? (
              <div className="rounded-3xl border border-[var(--line)] p-5">
                <h2 className="font-serif text-xl md:text-2xl">Email</h2>
                <TrackedLink href={`mailto:${site.email}`} event="email_click" className="mt-2 inline-block text-[var(--link)]">
                  {site.email}
                </TrackedLink>
              </div>
            ) : null}
            {site.calendlyUrl ? (
              <div className="rounded-3xl border border-[var(--line)] p-5">
                <h2 className="font-serif text-xl md:text-2xl">Booking</h2>
                <iframe title="Book a diagnostic" src={site.calendlyUrl} className="mt-3 h-96 w-full rounded-2xl" loading="lazy" />
              </div>
            ) : null}
          </div>
        ) : null}
        <div className="overflow-hidden rounded-3xl border border-[var(--line)] bg-[var(--surface)]">
          <div className="p-5 pb-4">
            <h2 className="font-serif text-xl md:text-2xl">Find us in Coimbatore</h2>
            <p className="mt-1 text-sm text-[var(--muted)]">
              Based in {site.city}, {site.state}. We work with clients across India: {site.serviceArea.filter((place) => place !== "India").join(" · ")}.
            </p>
          </div>
          <iframe
            title={`Google Map of ${site.city}, ${site.state}`}
            src={mapSrc}
            className="block h-72 w-full border-0 md:h-80"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
          <p className="p-4 text-sm">
            <a className="font-semibold text-[var(--link)] underline underline-offset-4" href={mapLink} target="_blank" rel="noopener">
              Open in Google Maps
            </a>
          </p>
        </div>
      </aside>
    </div>
  );
}
