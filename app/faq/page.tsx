import type { Metadata } from "next";
import { Container, PageHeader, CTABand } from "@/components/ui";
import FAQAccordion from "@/components/FAQAccordion";

export const metadata: Metadata = {
  title: "Dúvidas frequentes",
  description:
    "Respostas às perguntas mais comuns sobre exames ocupacionais, eSocial, PGR, PCMSO, LTCAT e o atendimento da SRH & SST.",
};

export default function FaqPage() {
  return (
    <>
      <PageHeader
        eyebrow="Dúvidas frequentes"
        title="Tudo o que você precisa saber"
        subtitle="Reunimos as perguntas mais comuns sobre nossos serviços e o nosso atendimento."
      />

      <section className="bg-white py-24">
        <Container>
          <div className="mx-auto max-w-[820px]">
            <FAQAccordion />
            <p className="mt-10 text-center text-sm text-slate-500">
              Não encontrou sua dúvida?{" "}
              <a
                href="/contato"
                className="font-bold text-brand-green hover:underline"
              >
                Fale com a nossa equipe
              </a>
              .
            </p>
          </div>
        </Container>
      </section>

      <CTABand />
    </>
  );
}
