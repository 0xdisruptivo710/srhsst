import { differentials } from "@/lib/content";

export default function Differentials() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {differentials.map((d) => (
        <div
          key={d.title}
          className="hover-lift rounded-xl border border-slate-100 bg-white p-6 shadow-sm"
        >
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-brand-green/10">
            <i className={`ph-duotone ${d.icon} text-2xl text-brand-green`} />
          </div>
          <h3 className="mb-2 font-bold text-brand-navy">{d.title}</h3>
          <p className="text-sm leading-relaxed text-slate-600">{d.text}</p>
        </div>
      ))}
    </div>
  );
}
