import Link from "next/link";
import type { Service } from "@/lib/content";

export default function ServiceCard({ service }: { service: Service }) {
  const accent =
    service.accent === "green" ? "text-brand-green" : "text-brand-navy";
  const hoverBg =
    service.accent === "green"
      ? "group-hover:bg-brand-green"
      : "group-hover:bg-brand-navy";

  return (
    <Link
      href={`/servicos/${service.slug}`}
      className="hover-lift group flex flex-col rounded-2xl border border-slate-200 bg-white p-8"
    >
      <div
        className={`mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-slate-100 transition-colors duration-300 ${hoverBg}`}
      >
        <i
          className={`ph-fill ${service.icon} text-3xl ${accent} group-hover:text-white`}
        />
      </div>
      <h3 className="mb-3 text-xl font-bold text-brand-navy">{service.title}</h3>
      <p className="mb-6 flex-1 text-sm leading-relaxed text-slate-600">
        {service.card}
      </p>
      <ul className="mb-6 space-y-2">
        {service.items.slice(0, 3).map((it) => (
          <li
            key={it}
            className="flex items-start gap-2 text-sm text-slate-700"
          >
            <i className="ph-bold ph-check mt-0.5 text-brand-green" />
            {it}
          </li>
        ))}
      </ul>
      <span className="mt-auto inline-flex w-fit items-center gap-1.5 text-sm font-bold text-brand-green">
        Saiba mais
        <i className="ph-bold ph-arrow-right transition-transform group-hover:translate-x-1" />
      </span>
    </Link>
  );
}
