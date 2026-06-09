# SRH & SST Soluções Empresariais — Site Institucional

Site institucional (one-page) da **SRH & SST Soluções Empresariais**, consultoria B2B que integra **Recursos Humanos, Saúde Ocupacional, Segurança do Trabalho e eSocial** numa única gestão.

> *Gestão que protege pessoas e negócios.*

## Stack

- HTML único (`index.html`), sem etapa de build
- [Tailwind CSS](https://tailwindcss.com) via CDN
- Tipografia: Plus Jakarta Sans (Google Fonts)
- Ícones: [Phosphor Icons](https://phosphoricons.com)
- Paleta da marca: azul-marinho `#1B2A4A` + verde `#2E9E3A`

## Como visualizar

Abra `index.html` direto no navegador, ou sirva localmente:

```bash
npx serve .
# ou
python -m http.server 8000
```

## Estrutura da página

Header fixo · Hero · Faixa de confiança · 4 pilares (RH, Saúde Ocupacional, Segurança do Trabalho, eSocial) · Diferenciais · Sobre · Faixa de impacto · FAQ · Formulário de contato (lead) · Footer · WhatsApp flutuante.

## Pendências antes de publicar

- [ ] Telefone/WhatsApp real (placeholder atual: `(21) 90000-0000`)
- [ ] E-mail real (placeholder: `contato@srhsst.com.br`)
- [ ] Endereço/cidade exata no RJ
- [ ] Logo oficial no header, footer e favicon (hoje placeholder "S")
- [ ] Links reais de Instagram/LinkedIn
- [ ] Integrar o formulário de contato a um backend/serviço de e-mail
- [ ] Migrar Tailwind do CDN para build de produção
