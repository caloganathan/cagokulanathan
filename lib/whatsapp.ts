import { site } from "@/content/site";

export function waHref(prefill: string, pageTitle: string) {
  const number = site.whatsappE164.replace(/\D/g, "");
  const text = `${prefill} (from: ${pageTitle})`;
  if (!number) {
    return `/contact?prefill=${encodeURIComponent(prefill)}`;
  }
  return `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
}

export function whatsappConfigured() {
  return site.whatsappE164.replace(/\D/g, "").length > 0;
}
