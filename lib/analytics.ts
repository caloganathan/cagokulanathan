export type AnalyticsEvent =
  | "whatsapp_click"
  | "email_click"
  | "call_click"
  | "form_submit"
  | "booking_open"
  | "tool_complete"
  | "leadmagnet_download"
  | "segment_select";

export function track(event: AnalyticsEvent, params: Record<string, string> = {}) {
  if (typeof window === "undefined") return;
  if (window.localStorage.getItem("jk-consent") !== "granted") return;
  const gtag = (window as Window & { gtag?: (...args: unknown[]) => void }).gtag;
  if (typeof gtag !== "function") return;
  gtag("event", event, params);
}
