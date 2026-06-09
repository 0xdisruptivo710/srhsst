"use client";

import { useState } from "react";
import { faqs as defaultFaqs, type Faq } from "@/lib/content";

export default function FAQAccordion({
  items = defaultFaqs,
}: {
  items?: Faq[];
}) {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <div className="space-y-4">
      {items.map((f, i) => {
        const isOpen = openIdx === i;
        return (
          <div
            key={f.q}
            className="overflow-hidden rounded-lg border border-slate-200 bg-white"
          >
            <button
              type="button"
              onClick={() => setOpenIdx(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-slate-50"
            >
              <span
                className={`font-bold ${isOpen ? "text-brand-green" : "text-brand-navy"}`}
              >
                {f.q}
              </span>
              <i
                className={`ph-bold ph-caret-down shrink-0 text-slate-400 transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`grid transition-all duration-300 ${
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <p className="border-t border-slate-100 bg-slate-50 px-6 py-5 text-sm leading-relaxed text-slate-600">
                  {f.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
