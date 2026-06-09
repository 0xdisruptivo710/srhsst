import type { Metadata } from "next";
import { Container, SectionHeading, CTABand } from "@/components/ui";
import Differentials from "@/components/Differentials";

export const metadata: Metadata = {
  title: "Sobre nós",
  description:
    "A SRH & SST integra Recursos Humanos, Saúde Ocupacional, Segurança do Trabalho e eSocial em uma única gestão, com atendimento personalizado e foco na conformidade legal.",
};

const valores = [
  {
    icon: "ph-target",
    title: "Prevenção",
    text: "Atuamos para antecipar riscos e evitar passivos, e não apenas para remediar problemas.",
  },
  {
    icon: "ph-handshake",
    title: "Proximidade",
    text: "Atendimento personalizado e contínuo, alinhado às necessidades de cada cliente.",
  },
  {
    icon: "ph-seal-check",
    title: "Conformidade",
    text: "Compromisso com o cumprimento das obrigações legais e a segurança das organizações.",
  },
];

export default function SobrePage() {
  return (
    <>
      <header className="relative overflow-hidden bg-brand-navy pb-16 pt-36 lg:pb-20 lg:pt-44">
        <div className="absolute inset-0 bg-grid-pattern" />
        <div className="pointer-events-none absolute right-0 top-0 h-[30vw] w-[30vw] -translate-y-1/2 translate-x-1/2 rounded-full bg-brand-green/10 blur-[120px]" />
        <Container className="relative">
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-brand-green">
            Sobre a SRH &amp; SST
          </p>
          <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl">
            Suporte estratégico para uma gestão segura e eficiente
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-300">
            Somos especialistas em Recursos Humanos, Saúde Ocupacional e
            Segurança do Trabalho, auxiliando empresas na gestão de pessoas, na
            conformidade legal e na organização documental.
          </p>
        </Container>
      </header>

      {/* Quem somos */}
      <section className="bg-white py-24">
        <Container>
          <div className="grid items-start gap-16 lg:grid-cols-2">
            <SectionHeading
              eyebrow="Quem somos"
              title="Uma gestão integrada de pessoas, saúde e segurança"
            />
            <div className="space-y-5 text-lg leading-relaxed text-slate-600">
              <p>
                A SRH &amp; SST Soluções Empresariais nasceu com o propósito de
                oferecer suporte estratégico e soluções completas para empresas
                que buscam excelência na gestão de pessoas, conformidade legal e
                organização dos processos corporativos.
              </p>
              <p>
                Atuamos nas áreas de Recursos Humanos, Saúde Ocupacional,
                Segurança do Trabalho e gestão do eSocial, com atendimento
                personalizado, acompanhamento contínuo e foco na prevenção de
                riscos e no cumprimento das obrigações legais.
              </p>
              <p>
                Trabalhamos com uma rede de profissionais qualificados,
                garantindo suporte técnico e atendimento alinhado às
                necessidades específicas de cada cliente.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Valores */}
      <section className="bg-[#fafafa] py-24">
        <Container>
          <SectionHeading
            align="center"
            eyebrow="Nossos princípios"
            title="O que orienta o nosso trabalho"
          />
          <div className="mx-auto mt-14 grid max-w-5xl gap-6 md:grid-cols-3">
            {valores.map((v) => (
              <div
                key={v.title}
                className="rounded-2xl border border-slate-200 bg-white p-8 text-center"
              >
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-brand-green/10">
                  <i className={`ph-duotone ${v.icon} text-3xl text-brand-green`} />
                </div>
                <h3 className="mb-2 text-lg font-bold text-brand-navy">
                  {v.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-600">
                  {v.text}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Posicionamento */}
      <section className="relative overflow-hidden bg-brand-navy py-20 text-white">
        <div className="absolute right-0 top-0 -translate-y-1/4 translate-x-1/4">
          <i className="ph-fill ph-shield-check text-[280px] text-white/5" />
        </div>
        <Container className="relative">
          <i className="ph-fill ph-quotes mb-6 block text-5xl text-brand-green/40" />
          <p className="max-w-4xl text-2xl font-semibold leading-snug tracking-tight md:text-3xl">
            Integramos Recursos Humanos, Saúde Ocupacional, Segurança do
            Trabalho e eSocial em uma única gestão, oferecendo mais organização,
            conformidade, segurança e tranquilidade para empresas que desejam
            crescer com responsabilidade e eficiência.
          </p>
        </Container>
      </section>

      {/* Diferenciais */}
      <section className="bg-white py-24">
        <Container>
          <SectionHeading
            eyebrow="Diferenciais"
            title="Por que escolher a SRH & SST"
          />
          <div className="mt-14">
            <Differentials />
          </div>
        </Container>
      </section>

      <CTABand />
    </>
  );
}
