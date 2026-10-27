"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";

export function FaqAccordion({ items }: { items: { question: string; answer: string }[] }) {
  return (
    <Accordion.Root type="single" collapsible className="divide-y divide-[var(--line)] border-y border-[var(--line)]">
      {items.map((item) => (
        <Accordion.Item key={item.question} value={item.question}>
          <Accordion.Header>
            <Accordion.Trigger className="group flex w-full items-center justify-between gap-4 py-4 text-left font-serif text-xl text-[var(--ink)]">
              {item.question}
              <ChevronDown className="size-5 shrink-0 transition group-data-[state=open]:rotate-180" aria-hidden />
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="pb-4 text-[var(--muted)] data-[state=closed]:animate-none">
            {item.answer}
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}
