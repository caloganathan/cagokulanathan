import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import { ConsentBanner } from "@/components/consent-banner";
import { ExitIntent } from "@/components/exit-intent";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { JsonLd } from "@/components/seo/json-ld";
import { StickyMobileBar } from "@/components/sticky-bar";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { site } from "@/content/site";
import { organizationSchema } from "@/lib/seo/schema";
import "./globals.css";

const sans = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const display = Fraunces({ subsets: ["latin"], variable: "--font-fraunces", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.domain),
  title: { default: "Agri-biologicals consultants in India", template: "%s" },
  description: site.promise,
  applicationName: site.brandName,
  authors: [{ name: site.founder, url: "/about" }],
  keywords: [
    "agri-biologicals consultant India",
    "biopesticide registration India",
    "biostimulant Schedule VI dossier",
    "biofertiliser production consultant",
    "fermentation troubleshooting",
    "CAA aquaculture probiotics certification",
    "Coimbatore agri consultancy",
  ],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F7F5EF" },
    { media: "(prefers-color-scheme: dark)", color: "#0B1310" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={`${sans.variable} ${display.variable}`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html:
              "try{var t=localStorage.getItem('theme');if(t==='dark'||(!t&&matchMedia('(prefers-color-scheme: dark)').matches))document.documentElement.classList.add('dark')}catch(e){}",
          }}
        />
      </head>
      <body className="pb-24 md:pb-0">
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <JsonLd data={organizationSchema()} />
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <StickyMobileBar />
        <WhatsAppButton />
        <ConsentBanner />
        <ExitIntent />
      </body>
    </html>
  );
}
