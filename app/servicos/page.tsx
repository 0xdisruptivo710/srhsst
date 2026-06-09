import type { Metadata } from "next";
import { services } from "@/lib/content";
import { Container, PageHeader, CTABand } from "@/components/ui";
import ServiceCard from "@/components/ServiceCard";

export const metadata: Metadata = {
  title: "Serviços",
  description:
    "Recursos Humanos, Saúde Ocupacional, Segurança do Trabalho e eSocial: conheça as soluções da SRH & SST para a conformidade trabalhista da sua empresa.",
};

export default function ServicosPage() {
  return (
    <>
      <PageHeader
        eyebrow="Nossas soluções"
        title="Tudo o que a sua empresa precisa em RH, SST e eSocial"
        subtitle="Quatro pilares integrados em uma única gestão, com acompanhamento contínuo e foco na conformidade legal."
      />

      <section className="bg-[#fafafa] py-24">
        <Container>
          <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
            {services.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
        </Container>
      </section>

      <CTABand />
    </>
  );
}
