import type { Metadata } from "next";
import { absoluteUrl, site } from "@/content/site";

export function brandedTitle(title: string) {
  const withBrand = `${title} · ${site.brandName}`;
  return withBrand.length <= 60 ? withBrand : title.slice(0, 60);
}

export function pageMetadata({
  title,
  description,
  path,
  type = "website",
}: {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
}): Metadata {
  const fullTitle = brandedTitle(title);
  const url = absoluteUrl(path);
  const image = absoluteUrl(`/og?title=${encodeURIComponent(fullTitle)}`);
  return {
    title: fullTitle,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: site.brandName,
      locale: "en_IN",
      type,
      images: [{ url: image, width: 1200, height: 630, alt: fullTitle }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
    },
  };
}
