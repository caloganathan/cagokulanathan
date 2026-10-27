"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { services, tierMeta, type Tier } from "@/content/services";
import { site } from "@/content/site";
import { waHref } from "@/lib/whatsapp";
import { TrackedLink } from "@/components/tracked-link";
import { ThemeToggle } from "@/components/theme-toggle";

const tiers: Tier[] = ["A", "B", "C", "S"];

export function Header() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--line)] bg-[var(--paper)]/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3">
        <Link href="/" className="no-underline" aria-label={`${site.brandName} home`}>
          <span className="block font-serif text-2xl leading-none">{site.brandName}</span>
          <span className="block text-xs text-[var(--muted)]">Agri-biologicals · Coimbatore</span>
        </Link>
        <nav className="hidden items-center gap-5 text-sm lg:flex" aria-label="Primary">
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              className="min-h-11 font-semibold"
              aria-expanded={servicesOpen}
              onClick={() => setServicesOpen((value) => !value)}
            >
              Services
            </button>
            {servicesOpen ? (
              <div className="absolute left-0 top-full z-50 grid w-[720px] grid-cols-2 gap-4 rounded-3xl bg-[var(--surface)] p-4 shadow-[var(--shadow)] ring-1 ring-[var(--line)]">
                {tiers.map((tier) => (
                  <div key={tier}>
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--leaf)]">
                      {tierMeta[tier].label}
                    </p>
                    <ul className="mt-2 space-y-1">
                      {services
                        .filter((service) => service.tier === tier)
                        .map((service) => (
                          <li key={service.slug}>
                            <Link href={`/services/${service.slug}`} className="block rounded-lg px-2 py-1 hover:bg-[var(--mist)]">
                              {service.navLabel}
                            </Link>
                          </li>
                        ))}
                    </ul>
                  </div>
                ))}
                <Link href="/services" className="col-span-2 text-[var(--link)] underline-offset-4 hover:underline">
                  All services
                </Link>
              </div>
            ) : null}
          </div>
          <Link href="/industries">Industries</Link>
          <Link href="/insights">Insights</Link>
          <Link href="/answers">Answers</Link>
          <Link href="/about">About</Link>
          <Link href="/case-studies">Case studies</Link>
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <TrackedLink
            href={waHref("Hi Dr. Gokul, I would like to talk about a biologicals bottleneck.", "Header")}
            event="whatsapp_click"
            params={{ page: "Header" }}
            className="hidden min-h-11 items-center rounded-full bg-[var(--whatsapp)] px-4 font-semibold text-[#0e1a14] no-underline sm:inline-flex"
          >
            WhatsApp
          </TrackedLink>
          <button className="inline-flex size-11 items-center justify-center lg:hidden" aria-label="Open menu" onClick={() => setOpen(true)}>
            <Menu />
          </button>
        </div>
      </div>
      {open ? (
        <div className="fixed inset-0 z-50 bg-[var(--paper)] lg:hidden">
          <div className="flex items-center justify-between px-4 py-3">
            <span className="font-serif text-2xl">{site.brandName}</span>
            <button className="inline-flex size-11 items-center justify-center" aria-label="Close menu" onClick={() => setOpen(false)}>
              <X />
            </button>
          </div>
          <nav className="flex flex-col gap-2 px-4 pb-24" aria-label="Mobile">
            {[
              ["/services", "Services"],
              ["/industries", "Industries"],
              ["/insights", "Insights"],
              ["/answers", "Answers"],
              ["/about", "About"],
              ["/case-studies", "Case studies"],
              ["/tools/batch-risk-check", "Batch Risk Check"],
              ["/contact", "Contact"],
            ].map(([href, label]) => (
              <Link key={href} href={href} className="min-h-11 py-2 text-lg" onClick={() => setOpen(false)}>
                {label}
              </Link>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
