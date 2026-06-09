# SRH & SST Soluções Empresariais — Site Institucional

Site institucional da **SRH & SST Soluções Empresariais**, consultoria B2B que integra **Recursos Humanos, Saúde Ocupacional, Segurança do Trabalho e eSocial** numa única gestão.

> _Gestão que protege pessoas e negócios._

## Stack

- [Next.js 16](https://nextjs.org) (App Router) + React 19 + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com) (tokens da marca em `app/globals.css`)
- Tipografia: Plus Jakarta Sans (`next/font`)
- Ícones: [Phosphor Icons](https://phosphoricons.com)
- Deploy: [Vercel](https://vercel.com) (deploy automático a cada push na `main`)

## Desenvolvimento

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de produção
```

## Estrutura

```
app/
  page.tsx                  Início
  sobre/                    Sobre nós
  servicos/                 Hub de serviços
  servicos/[slug]/          Páginas por serviço (RH, Saúde Ocup., SST, eSocial)
  faq/                      Dúvidas frequentes
  contato/                  Formulário de contato (lead)
  actions.ts                Server Action que envia o lead ao CRM
components/                 Header, Footer, cards, FAQ, formulário, UI
lib/content.ts             Fonte única de conteúdo (serviços, FAQ, contato)
```

## Leads / integração com CRM (AIOS)

O formulário de contato usa uma **Server Action** (`app/actions.ts`) que faz `POST`
de um JSON para o webhook definido em `CRM_WEBHOOK_URL`.

```bash
cp .env.example .env.local
# defina CRM_WEBHOOK_URL com a URL do seu fluxo no CRM/AIOS
```

Na Vercel, configure a variável em **Settings → Environment Variables**.
Sem a variável, os leads são apenas registrados no log do servidor.

## Pendências antes de publicar

- [ ] Telefone/WhatsApp real (placeholder em `lib/content.ts`: `(21) 90000-0000`)
- [ ] E-mail real (placeholder: `contato@srhsst.com.br`)
- [ ] Endereço/cidade exata no RJ
- [ ] Logo oficial no header, footer e favicon
- [ ] Links reais de Instagram/LinkedIn
- [ ] `CRM_WEBHOOK_URL` apontando para o fluxo de leads do AIOS
