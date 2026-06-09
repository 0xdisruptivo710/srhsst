import type { Metadata } from "next";
import { site, whatsappHref } from "@/lib/content";
import { Container, PageHeader } from "@/components/ui";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Solicite um diagnóstico gratuito da estrutura de RH e SST da sua empresa. Atendimento no RJ e remoto em todo o Brasil.",
};

export default function ContatoPage() {
  return (
    <>
      <PageHeader
        eyebrow="Fale conosco"
        title="Solicite um diagnóstico gratuito"
        subtitle="Conte um pouco sobre a sua empresa. Vamos avaliar a sua estrutura atual de RH e SST e indicar os próximos passos."
      />

      <section className="bg-[#fafafa] py-24">
        <Container>
          <div className="overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-corporate">
            <div className="grid lg:grid-cols-5">
              {/* Info */}
              <div className="relative flex flex-col justify-between overflow-hidden bg-brand-navy p-10 text-white md:p-14 lg:col-span-2">
                <div className="absolute inset-0 bg-grid-pattern opacity-10" />
                <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-brand-green opacity-20 blur-[80px]" />
                <div className="relative">
                  <h2 className="text-3xl font-bold tracking-tight">
                    Pronto para organizar sua gestão?
                  </h2>
                  <p className="mt-4 text-sm text-slate-300">
                    Preencha o formulário e a nossa equipe retornará com um
                    diagnóstico gratuito da sua estrutura de RH e SST.
                  </p>

                  <div className="mt-10 space-y-6">
                    <a
                      href={whatsappHref()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4"
                    >
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10">
                        <i className="ph-fill ph-whatsapp text-xl text-brand-green" />
                      </span>
                      <span>
                        <span className="block text-xs font-semibold uppercase tracking-wider text-slate-400">
                          WhatsApp
                        </span>
                        <span className="font-bold">{site.phoneDisplay}</span>
                      </span>
                    </a>
                    <a
                      href={`mailto:${site.email}`}
                      className="flex items-center gap-4"
                    >
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10">
                        <i className="ph-fill ph-envelope-simple text-xl text-brand-green" />
                      </span>
                      <span>
                        <span className="block text-xs font-semibold uppercase tracking-wider text-slate-400">
                          E-mail
                        </span>
                        <span className="text-sm font-bold">{site.email}</span>
                      </span>
                    </a>
                    <div className="flex items-center gap-4">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10">
                        <i className="ph-fill ph-map-pin text-xl text-brand-green" />
                      </span>
                      <span>
                        <span className="block text-xs font-semibold uppercase tracking-wider text-slate-400">
                          Localização
                        </span>
                        <span className="text-sm font-bold">{site.city}</span>
                      </span>
                    </div>
                  </div>
                </div>

                <p className="relative mt-12 flex items-center gap-2 border-t border-white/20 pt-8 text-sm font-medium text-slate-300">
                  <i className="ph-fill ph-clock text-brand-green" />
                  {site.coverage}
                </p>
              </div>

              {/* Form */}
              <div className="bg-white p-10 md:p-14 lg:col-span-3">
                <ContactForm />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
