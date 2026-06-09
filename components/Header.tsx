"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { nav, whatsappHref } from "@/lib/content";
import Logo from "./Logo";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full border-b border-slate-200 backdrop-blur-md transition-all duration-300 ${
        scrolled ? "bg-white/95 shadow-sm" : "bg-white/90"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-[1400px] items-center justify-between px-6">
        <Logo />

        <nav className="hidden items-center gap-8 lg:flex">
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="text-sm font-semibold text-slate-600 transition-colors hover:text-brand-navy"
            >
              {n.label}
            </Link>
          ))}
          <a
            href={whatsappHref()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-brand-green px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-green-light"
          >
            <i className="ph-fill ph-whatsapp text-lg" />
            WhatsApp
          </a>
        </nav>

        <button
          onClick={() => setOpen((v) => !v)}
          className="rounded p-2 text-brand-navy lg:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
        >
          <i className={`ph-bold ${open ? "ph-x" : "ph-list"} text-2xl`} />
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-200 bg-white lg:hidden">
          <nav className="mx-auto flex max-w-[1400px] flex-col px-6 py-4">
            {nav.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="border-b border-slate-100 py-3 text-sm font-semibold text-slate-700 transition-colors hover:text-brand-green"
              >
                {n.label}
              </Link>
            ))}
            <a
              href={whatsappHref()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center justify-center gap-2 rounded-md bg-brand-green px-5 py-3 text-sm font-semibold text-white"
            >
              <i className="ph-fill ph-whatsapp text-lg" />
              Falar no WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
