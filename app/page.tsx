import Link from "next/link";
import { services, whatsappHref } from "@/lib/content";
import { Container, SectionHeading, Button, CTABand } from "@/components/ui";
import ServiceCard from "@/components/ServiceCard";
import Differentials from "@/components/Differentials";
import FAQAccordion from "@/components/FAQAccordion";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[88vh] items-center overflow-hidden bg-brand-navy pb-20 pt-32 lg:pt-40">
        <div className="absolute inset-0 bg-grid-pattern" />
        <div className="pointer-events-none absolute right-0 top-0 h-[40vw] w-[40vw] -translate-y-1/2 translate-x-1/2 rounded-full bg-brand-green/10 blur-[120px]" />
        <Container className="relative w-full">
          <div className="grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-white backdrop-blur-sm">
                <span className="h-2 w-2 animate-pulse rounded-full bg-brand-green" />
                Assessoria integrada B2B
              </div>
              <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-white md:text-5xl lg:text-6xl">
                Gestão que protege{" "}
                <span className="text-brand-green">pessoas e negócios.</span>
              </h1>
              <p className="mt-6 max-w-2xl text-lg font-medium leading-relaxed text-slate-300 md:text-xl">
                Integramos Recursos Humanos, Saúde Ocupacional e Segurança do
                Trabalho em uma solução única, com conformidade eSocial completa,
                para que sua empresa foque no crescimento.
              </p>
              <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                <Button href="/contato">
                  Solicitar diagnóstico
                  <i className="ph-bold ph-arrow-right" />
                </Button>
                <Button href={whatsappHref()} variant="outline" external>
                  <i className="ph-fill ph-whatsapp text-xl" />
                  Falar no WhatsApp
                </Button>
              </div>
              <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-white/10 pt-6 text-sm font-medium text-slate-400">
                <span className="flex items-center gap-1.5">
                  <i className="ph-fill ph-check-circle text-brand-green" />
                  Conformidade eSocial completa
                </span>
                <span className="flex items-center gap-1.5">
                  <i className="ph-fill ph-shield-check text-brand-green" />
                  Foco em segurança jurídica
                </span>
              </div>
            </div>

            <div className="relative hidden lg:block">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
                <div className="absolute inset-0 z-10 bg-brand-navy/20 mix-blend-multiply" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=800"
                  alt="Profissionais em reunião estratégica de negócios"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -left-12 top-20 z-20 flex w-64 animate-float items-center gap-4 rounded-xl border border-slate-100 bg-white p-4 shadow-float">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-green/10 text-brand-green">
                  <i className="ph-fill ph-file-text text-2xl" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Atestados (ASO)
                  </p>
                  <p className="font-bold text-brand-navy">Controle ativo</p>
                </div>
              </div>
              <div className="absolute -right-8 bottom-32 z-20 w-56 animate-float-delayed rounded-xl border border-slate-100 bg-white p-4 shadow-float">
                <div className="mb-2 flex items-center justify-between">
                  <p className="text-xs font-semibold uppercase text-slate-500">
                    Eventos SST
                  </p>
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-2 w-2 animate-ping rounded-full bg-brand-green opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-green" />
                  </span>
                </div>
                <p className="mb-2 text-sm font-bold text-brand-navy">
                  Carga eSocial enviada
                </p>
                <div className="h-1.5 w-full rounded-full bg-slate-100">
                  <div className="h-1.5 w-full rounded-full bg-brand-green" />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Trust strip */}
      <section className="border-b border-slate-100 bg-white py-8">
        <Container>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm font-semibold text-slate-500 lg:justify-between">
            <span className="flex items-center gap-2">
              <i className="ph-fill ph-map-pin text-lg text-brand-navy" />
              Base operacional no RJ
            </span>
            <span className="hidden h-1 w-1 rounded-full bg-slate-300 md:inline-block" />
            <span className="flex items-center gap-2">
              <i className="ph-fill ph-globe-hemisphere-west text-lg text-brand-navy" />
              Atendimento remoto nacional
            </span>
            <span className="hidden h-1 w-1 rounded-full bg-slate-300 md:inline-block" />
            <span className="flex items-center gap-2">
              <i className="ph-fill ph-buildings text-lg text-brand-navy" />
              Pequeno, médio e grande porte
            </span>
          </div>
        </Container>
      </section>

      {/* Services */}
      <section className="bg-[#fafafa] py-24">
        <Container>
          <SectionHeading
            eyebrow="Escopo de atuação"
            title={
              <>
                Um ecossistema completo de
                <br />
                proteção corporativa
              </>
            }
            subtitle="Centralize os quatro pilares da conformidade trabalhista em um único parceiro estratégico."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:gap-8">
            {services.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
        </Container>
      </section>

      {/* Differentials */}
      <section className="bg-white py-24">
        <Container>
          <SectionHeading
            eyebrow="Vantagem competitiva"
            title="O que nos torna o parceiro ideal"
            subtitle="Nossa arquitetura de serviço foi desenhada para eliminar o atrito operacional e assegurar gestão continuada."
          />
          <div className="mt-14">
            <Differentials />
          </div>
        </Container>
      </section>

      {/* About teaser */}
      <section className="relative overflow-hidden bg-brand-navy py-24 text-white">
        <div className="absolute inset-0 scale-110 -skew-y-3 bg-brand-navy-light opacity-20" />
        <Container className="relative">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div className="order-2 lg:order-1">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32d7?auto=format&fit=crop&q=80&w=800"
                alt="Consultoria corporativa em escritório"
                className="h-[460px] w-full rounded-2xl border border-white/10 object-cover shadow-2xl"
              />
            </div>
            <div className="order-1 lg:order-2">
              <i className="ph-fill ph-quotes mb-6 block text-5xl text-brand-green/30" />
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                Mais que prestadores de serviço. Um parceiro de gestão.
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-slate-300">
                A SRH &amp; SST nasceu para oferecer suporte estratégico e
                soluções completas a empresas que buscam excelência na gestão de
                pessoas, conformidade legal e organização dos processos.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-slate-300">
                Transformamos processos complexos em soluções práticas, seguras
                e eficientes, contribuindo para o crescimento sustentável dos
                nossos clientes.
              </p>
              <div className="mt-8">
                <Button href="/sobre" variant="outline">
                  Conhecer a SRH &amp; SST
                  <i className="ph-bold ph-arrow-right" />
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Highlight band */}
      <section className="relative overflow-hidden bg-brand-green py-16">
        <div className="absolute right-0 top-0 -translate-y-1/4 translate-x-1/4">
          <i className="ph-fill ph-shield-check text-[300px] text-white/10" />
        </div>
        <Container className="relative text-center">
          <h2 className="mx-auto max-w-4xl text-2xl font-extrabold leading-tight tracking-tight text-white md:text-4xl">
            Transformamos obrigações legais em processos organizados, seguros e
            eficientes.
          </h2>
        </Container>
      </section>

      {/* FAQ teaser */}
      <section className="border-b border-slate-100 bg-white py-24">
        <Container>
          <div className="mx-auto max-w-[800px]">
            <SectionHeading
              align="center"
              eyebrow="Dúvidas frequentes"
              title="Perguntas que recebemos com frequência"
            />
            <div className="mt-12">
              <FAQAccordion />
            </div>
            <div className="mt-10 text-center">
              <Link
                href="/faq"
                className="inline-flex items-center gap-1.5 text-sm font-bold text-brand-green hover:gap-2.5"
              >
                Ver todas as dúvidas
                <i className="ph-bold ph-arrow-right" />
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <CTABand />
    </>
  );
}
