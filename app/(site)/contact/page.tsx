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
  return (
    <div className="mx-auto grid max-w-6xl gap-10 px-4 py-10 lg:grid-cols-2">
      <div>
        <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Contact", path: "/contact" }]} />
        <h1 className="mt-4 font-serif text-5xl">Contact</h1>
        <p className="mt-4 text-[var(--muted)]">
          Reply within one working day (IST). No sales team. An NDA is available before you share details.
        </p>
        <div className="mt-6">
          <ContactForm />
        </div>
      </div>
      <aside className="space-y-4">
        <div className="rounded-3xl bg-[var(--mist)] p-5">
          <h2 className="font-serif text-3xl">WhatsApp</h2>
          {whatsappConfigured() ? (
            <TrackedLink
              href={waHref(prefill || "Hi JK Advisory team, I would like to talk.", "Contact")}
              event="whatsapp_click"
              params={{ page: "Contact" }}
              className="mt-3 inline-flex min-h-11 items-center rounded-full bg-[var(--whatsapp)] px-4 font-semibold text-[#0e1a14] no-underline"
            >
              Open WhatsApp
            </TrackedLink>
          ) : (
            <p className="mt-2 text-sm text-[var(--muted)]">
              The business WhatsApp number is not published yet. Use the form. We will not invent a number.
            </p>
          )}
        </div>
        <div className="rounded-3xl border border-[var(--line)] p-5">
          <h2 className="font-serif text-3xl">Email</h2>
          {site.email ? (
            <TrackedLink href={`mailto:${site.email}`} event="email_click" className="text-[var(--link)]">
              {site.email}
            </TrackedLink>
          ) : (
            <p className="text-sm text-[var(--muted)]">The public email is not set yet. The form is the route.</p>
          )}
        </div>
        <div className="rounded-3xl border border-[var(--line)] p-5">
          <h2 className="font-serif text-3xl">Booking</h2>
          {site.calendlyUrl ? (
            <iframe title="Book a diagnostic" src={site.calendlyUrl} className="mt-3 h-96 w-full rounded-2xl" loading="lazy" />
          ) : (
            <p className="text-sm text-[var(--muted)]">A booking link will be embedded here when it is confirmed. Until then, ask for a time in the form.</p>
          )}
        </div>
        <div className="rounded-3xl bg-[var(--surface)] p-5 ring-1 ring-[var(--line)]">
          <h2 className="font-serif text-2xl">Service area</h2>
          <svg viewBox="0 0 200 220" className="mt-3 h-48 w-full" role="img" aria-label="Schematic of the Indian service area, centred on Coimbatore">
            <rect width="200" height="220" rx="16" fill="var(--mist)" />
            <path d="M100 24c28 10 48 28 52 58 6 40-10 78-30 104-18-20-40-28-58-18-22-24-30-70-16-110C62 40 78 28 100 24z" fill="var(--forest)" opacity="0.85" />
            <circle cx="78" cy="150" r="5" fill="var(--amber)" />
            <text x="88" y="154" fontSize="10" fill="var(--paper)">
              Coimbatore
            </text>
          </svg>
          <p className="text-sm text-[var(--muted)]">{site.serviceArea.join(" · ")}</p>
        </div>
      </aside>
    </div>
  );
}
