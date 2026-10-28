import { ButtonLink } from "@/components/ui/button";
import { TrackedLink } from "@/components/tracked-link";
import { waHref } from "@/lib/whatsapp";

export function CtaBand({
  prefill,
  pageTitle,
  title = "Tell us your bottleneck. We reply within one working day.",
}: {
  prefill: string;
  pageTitle: string;
  title?: string;
}) {
  return (
    <section className="rounded-3xl bg-[var(--forest)] px-6 py-10 text-[#f7f5ef] md:px-10">
      <h2 className="max-w-[20ch] font-serif text-4xl leading-tight">{title}</h2>
      <p className="mt-3 max-w-[48ch] text-[#d7e6de]">
        No sales team. You speak directly to the scientist. An NDA is available before you share details.
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        <TrackedLink
          href={waHref(prefill, pageTitle)}
          event="whatsapp_click"
          params={{ page: pageTitle }}
          className="inline-flex min-h-11 items-center rounded-full bg-[var(--whatsapp)] px-4 py-2 font-semibold text-[#0e1a14] no-underline"
        >
          WhatsApp us
        </TrackedLink>
        <ButtonLink href="/contact" variant="ghost" className="border-transparent bg-[#f7f5ef] text-[#0e1a14]">
          Write instead
        </ButtonLink>
        <ButtonLink href="/engagement-models" variant="ghost" className="border-[#f7f5ef] bg-transparent text-[#f7f5ef]">
          See how engagements work
        </ButtonLink>
      </div>
    </section>
  );
}
