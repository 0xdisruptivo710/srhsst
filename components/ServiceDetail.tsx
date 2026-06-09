import Link from "next/link";
import type { Service } from "@/lib/content";
import { services } from "@/lib/content";
import { Container, PageHeader, Button, CTABand } from "@/components/ui";

export default function ServiceDetail({ service }: { service: Service }) {
  const others = services.filter((s) => s.slug !== service.slug);

  return (
    <>
      <PageHeader
        eyebrow="Serviço"
        title={service.title}
        subtitle={service.tagline}
      />

      <section className="bg-white py-24">
        <Container>
          <div className="grid gap-16 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <div className="space-y-5 text-lg leading-relaxed text-slate-600">
                {service.intro.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>

              <h2 className="mb-6 mt-12 text-2xl font-bold text-brand-navy">
                O que fazemos
              </h2>
              <ul className="grid gap-3 sm:grid-cols-2">
                {service.items.map((it) => (
                  <li
                    key={it}
                    className="flex items-start gap-3 rounded-lg border border-slate-100 bg-[#fafafa] p-4 text-sm font-medium text-slate-700"
                  >
                    <i className="ph-bold ph-check mt-0.5 text-brand-green" />
                    {it}
                  </li>
                ))}
              </ul>
            </div>

            <aside className="h-fit lg:sticky lg:top-28">
              <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-corporate">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-brand-navy">
                  <i
                    className={`ph-fill ${service.icon} text-3xl text-brand-green`}
                  />
                </div>
                <h3 className="mb-4 text-lg font-bold text-brand-navy">
                  O que você ganha
                </h3>
                <ul className="mb-8 space-y-3">
                  {service.outcomes.map((o) => (
                    <li
                      key={o}
                      className="flex items-start gap-2 text-sm text-slate-700"
                    >
                      <i className="ph-fill ph-check-circle mt-0.5 text-brand-green" />
                      {o}
                    </li>
                  ))}
                </ul>
                <Button href="/contato" className="w-full">
                  Solicitar diagnóstico
                  <i className="ph-bold ph-arrow-right" />
                </Button>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      <section className="border-t border-slate-100 bg-[#fafafa] py-20">
        <Container>
          <h2 className="mb-10 text-2xl font-bold text-brand-navy">
            Outras soluções
          </h2>
          <div className="grid gap-6 sm:grid-cols-3">
            {others.map((o) => (
              <Link
                key={o.slug}
                href={`/servicos/${o.slug}`}
                className="hover-lift group flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-5"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-slate-100 transition-colors group-hover:bg-brand-navy">
                  <i
                    className={`ph-fill ${o.icon} text-2xl text-brand-navy group-hover:text-white`}
                  />
                </span>
                <span className="font-bold text-brand-navy">{o.short}</span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <CTABand title={`Vamos cuidar do ${service.title} da sua empresa?`} />
    </>
  );
}
