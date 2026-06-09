import Link from "next/link";
import { site, services, whatsappHref } from "@/lib/content";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-brand-navy-dark pb-10 pt-20 text-slate-300">
      <div className="mx-auto max-w-[1400px] px-6">
        <div className="mb-16 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="mb-6">
              <Logo variant="dark" />
            </div>
            <p className="mb-6 text-sm leading-relaxed text-slate-400">
              Consultoria que integra Recursos Humanos, Saúde Ocupacional,
              Segurança do Trabalho e eSocial em uma única gestão.
            </p>
            <div className="flex gap-4">
              <a
                href={site.linkedin}
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-slate-400 transition-all hover:bg-brand-green hover:text-white"
              >
                <i className="ph-fill ph-linkedin-logo text-xl" />
              </a>
              <a
                href={site.instagram}
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-slate-400 transition-all hover:bg-brand-green hover:text-white"
              >
                <i className="ph-fill ph-instagram-logo text-xl" />
              </a>
            </div>
          </div>

          {/* Soluções */}
          <div>
            <h4 className="mb-6 font-bold text-white">Soluções</h4>
            <ul className="space-y-4">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/servicos/${s.slug}`}
                    className="text-sm text-slate-400 transition-colors hover:text-brand-green"
                  >
                    {s.short}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h4 className="mb-6 font-bold text-white">Empresa</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/sobre" className="text-sm text-slate-400 transition-colors hover:text-brand-green">
                  Sobre a SRH &amp; SST
                </Link>
              </li>
              <li>
                <Link href="/servicos" className="text-sm text-slate-400 transition-colors hover:text-brand-green">
                  Serviços
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-sm text-slate-400 transition-colors hover:text-brand-green">
                  Dúvidas Frequentes
                </Link>
              </li>
              <li>
                <Link href="/contato" className="text-sm text-slate-400 transition-colors hover:text-brand-green">
                  Fale Conosco
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="mb-6 font-bold text-white">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <i className="ph-fill ph-map-pin mt-1 text-brand-green" />
                <span className="text-sm leading-relaxed text-slate-400">
                  {site.city}
                  <br />
                  {site.coverage}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <i className="ph-fill ph-envelope-simple text-brand-green" />
                <a
                  href={`mailto:${site.email}`}
                  className="text-sm text-slate-400 transition-colors hover:text-white"
                >
                  {site.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <i className="ph-fill ph-whatsapp text-brand-green" />
                <a
                  href={whatsappHref()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-slate-400 transition-colors hover:text-white"
                >
                  {site.phoneDisplay}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
          <p className="text-xs font-medium text-slate-500">
            &copy; 2026 {site.fullName}. Todos os direitos reservados.
          </p>
          <div className="flex gap-4">
            <span className="text-xs text-slate-500">Termos de Uso</span>
            <span className="text-xs text-slate-500">Política de Privacidade</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
