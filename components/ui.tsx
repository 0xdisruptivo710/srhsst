import Link from "next/link";
import type { ReactNode } from "react";
import { whatsappHref } from "@/lib/content";

export function Container({
  className = "",
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={`mx-auto max-w-[1400px] px-6 ${className}`}>{children}</div>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="mb-3 text-sm font-bold uppercase tracking-widest text-brand-green">
      {children}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="text-3xl font-bold leading-tight tracking-tight text-brand-navy md:text-4xl">
        {title}
      </h2>
      {subtitle && <p className="mt-4 text-lg text-slate-600">{subtitle}</p>}
    </div>
  );
}

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "navy" | "outline" | "outlineNavy";
  external?: boolean;
  className?: string;
};

export function Button({
  href,
  children,
  variant = "primary",
  external = false,
  className = "",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-md px-8 py-4 font-bold transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-green focus-visible:ring-offset-2";
  const variants: Record<string, string> = {
    primary:
      "bg-brand-green text-white shadow-[0_8px_16px_-4px_rgba(46,158,58,0.4)] hover:-translate-y-0.5 hover:bg-brand-green-light",
    navy: "bg-brand-navy text-white hover:bg-brand-navy-light",
    outline: "border border-white/30 bg-transparent text-white hover:bg-white/5",
    outlineNavy:
      "border border-slate-300 bg-white text-brand-navy hover:border-brand-green hover:text-brand-green",
  };
  const cls = `${base} ${variants[variant]} ${className}`;

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}

export function PageHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-brand-navy pb-16 pt-36 lg:pb-20 lg:pt-44">
      <div className="absolute inset-0 bg-grid-pattern" />
      <div className="pointer-events-none absolute right-0 top-0 h-[30vw] w-[30vw] -translate-y-1/2 translate-x-1/2 rounded-full bg-brand-green/10 blur-[120px]" />
      <Container className="relative">
        {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
        <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-300">
            {subtitle}
          </p>
        )}
      </Container>
    </section>
  );
}

export function CTABand({
  title = "Pronto para organizar o RH e a SST da sua empresa?",
  text = "Faça um diagnóstico gratuito da sua estrutura atual. Sem compromisso.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-brand-navy py-20">
      <div className="absolute inset-0 bg-grid-pattern" />
      <div className="pointer-events-none absolute -left-24 bottom-0 h-64 w-64 rounded-full bg-brand-green/20 blur-[100px]" />
      <Container className="relative text-center">
        <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white md:text-4xl">
          {title}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-slate-300">{text}</p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button href="/contato">Solicitar diagnóstico</Button>
          <Button href={whatsappHref()} variant="outline" external>
            <i className="ph-fill ph-whatsapp text-xl" />
            Falar no WhatsApp
          </Button>
        </div>
      </Container>
    </section>
  );
}
