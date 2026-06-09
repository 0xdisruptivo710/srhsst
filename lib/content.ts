// Fonte única de conteúdo do site SRH & SST.
// Dados de contato são PLACEHOLDERS — substituir pelos reais da empresa.

export const site = {
  name: "SRH & SST",
  fullName: "SRH & SST Soluções Empresariais",
  slogan: "Gestão que protege pessoas e negócios.",
  description:
    "Consultoria que integra Recursos Humanos, Saúde Ocupacional, Segurança do Trabalho e eSocial em uma única gestão, com mais organização, conformidade e segurança para empresas de todos os portes.",

  // ⬇️ PLACEHOLDERS — trocar pelos dados reais da SRH
  phoneDisplay: "(21) 90000-0000",
  whatsapp: "5521900000000",
  whatsappMessage:
    "Olá! Gostaria de um diagnóstico gratuito de RH e SST para a minha empresa.",
  email: "contato@srhsst.com.br",
  city: "Rio de Janeiro, RJ",
  coverage: "Atendimento presencial no RJ e remoto em todo o Brasil.",
  instagram: "#",
  linkedin: "#",
  url: "https://srh-sst-site.vercel.app",
};

export function whatsappHref(message?: string): string {
  const text = encodeURIComponent(message ?? site.whatsappMessage);
  return `https://wa.me/${site.whatsapp}?text=${text}`;
}

export type NavItem = { href: string; label: string };

export const nav: NavItem[] = [
  { href: "/", label: "Início" },
  { href: "/sobre", label: "Sobre" },
  { href: "/servicos", label: "Serviços" },
  { href: "/faq", label: "FAQ" },
  { href: "/contato", label: "Contato" },
];

export type Service = {
  slug: string;
  short: string;
  title: string;
  icon: string;
  accent: "navy" | "green";
  tagline: string;
  card: string;
  intro: string[];
  items: string[];
  outcomes: string[];
};

export const services: Service[] = [
  {
    slug: "recursos-humanos",
    short: "Recursos Humanos",
    title: "Recursos Humanos",
    icon: "ph-users-three",
    accent: "navy",
    tagline: "Gestão de pessoas e Departamento Pessoal, da admissão ao desligamento.",
    card: "Apoio completo ao Departamento Pessoal e à gestão de pessoas, com consultoria especializada em RH.",
    intro: [
      "Cuidamos da rotina do seu Departamento Pessoal para que a gestão de pessoas seja organizada, alinhada à legislação e livre de retrabalho.",
      "Atendemos tanto empresas que já possuem RH próprio quanto aquelas que precisam de suporte completo na gestão de pessoas.",
    ],
    items: [
      "Admissões e desligamentos",
      "Controle de férias",
      "Gestão documental",
      "Apoio ao Departamento Pessoal",
      "Consultoria em RH",
    ],
    outcomes: [
      "Rotinas do Departamento Pessoal organizadas e em dia",
      "Documentação trabalhista completa e segura",
      "Mais previsibilidade e menos riscos na gestão de pessoas",
    ],
  },
  {
    slug: "saude-ocupacional",
    short: "Saúde Ocupacional",
    title: "Saúde Ocupacional",
    icon: "ph-heartbeat",
    accent: "green",
    tagline: "PCMSO, exames ocupacionais e controle de vencimentos.",
    card: "Gestão da saúde ocupacional dos colaboradores, do PCMSO aos exames e ao acompanhamento de vencimentos.",
    intro: [
      "Mantemos a saúde ocupacional da sua empresa sempre em dia, do agendamento dos exames ao controle dos ASOs e dos prazos.",
      "Trabalhamos com clínicas parceiras qualificadas para a realização dos exames ocupacionais.",
    ],
    items: [
      "Agendamento de exames ocupacionais",
      "Controle de ASOs",
      "Gestão do PCMSO",
      "Controle de exames periódicos",
      "Acompanhamento de vencimentos",
    ],
    outcomes: [
      "Colaboradores com exames sempre válidos",
      "PCMSO elaborado e gerido corretamente",
      "Vencimentos monitorados, sem surpresas",
    ],
  },
  {
    slug: "seguranca-do-trabalho",
    short: "Segurança do Trabalho",
    title: "Segurança do Trabalho",
    icon: "ph-shield-check",
    accent: "navy",
    tagline: "PGR, LTCAT, treinamentos e controle de EPIs.",
    card: "Gestão documental de SST e suporte à conformidade legal, do PGR e LTCAT ao controle de EPIs e treinamentos.",
    intro: [
      "Estruturamos e mantemos a documentação de Segurança do Trabalho da sua empresa, garantindo conformidade com as obrigações legais.",
      "Da elaboração do PGR e do LTCAT ao controle de treinamentos e EPIs, acompanhamos cada etapa de perto.",
    ],
    items: [
      "Gestão de PGR",
      "Gestão de LTCAT",
      "Controle de treinamentos obrigatórios",
      "Gestão documental de SST",
      "Controle e acompanhamento de EPIs",
      "Suporte à conformidade legal",
    ],
    outcomes: [
      "Documentação de SST completa e atualizada",
      "Treinamentos e EPIs sob controle",
      "Conformidade legal com acompanhamento contínuo",
    ],
  },
  {
    slug: "esocial",
    short: "eSocial SST",
    title: "eSocial SST",
    icon: "ph-cloud-arrow-up",
    accent: "green",
    tagline: "Envio dos eventos S-2210, S-2220 e S-2240 e controle de pendências.",
    card: "Envio dos eventos obrigatórios de SST ao eSocial, com controle de pendências e relatórios de conformidade.",
    intro: [
      "Fazemos a ponte entre a sua estrutura de SST e o eSocial, cuidando do envio correto dos eventos obrigatórios.",
      "Monitoramos pendências e geramos relatórios de conformidade para manter sua empresa em dia com as obrigações.",
    ],
    items: [
      "Monitoramento de eventos SST",
      "Acompanhamento dos eventos S-2210, S-2220 e S-2240",
      "Controle de pendências",
      "Relatórios de conformidade",
    ],
    outcomes: [
      "Eventos de SST transmitidos corretamente",
      "Pendências identificadas e resolvidas",
      "Visão clara da conformidade da empresa",
    ],
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export type Differential = { icon: string; title: string; text: string };

export const differentials: Differential[] = [
  {
    icon: "ph-headset",
    title: "Atendimento personalizado",
    text: "Atendimento próximo e dedicado, que conhece a realidade da sua empresa.",
  },
  {
    icon: "ph-arrows-merge",
    title: "Gestão integrada",
    text: "RH, Saúde Ocupacional, Segurança do Trabalho e eSocial em uma única gestão.",
  },
  {
    icon: "ph-folder-open",
    title: "Gestão documental completa",
    text: "Toda a documentação trabalhista e de SST organizada e segura.",
  },
  {
    icon: "ph-calendar-check",
    title: "Controle de vencimentos",
    text: "Acompanhamento de exames, treinamentos e prazos, com alertas proativos.",
  },
  {
    icon: "ph-scales",
    title: "Conformidade legal contínua",
    text: "Acompanhamento constante das obrigações legais da sua empresa.",
  },
  {
    icon: "ph-handshake",
    title: "Rede de parceiros qualificada",
    text: "Profissionais e parceiros especializados para cada necessidade.",
  },
  {
    icon: "ph-chart-line-up",
    title: "Suporte estratégico",
    text: "Apoio à tomada de decisões para um crescimento seguro e sustentável.",
  },
];

export type Faq = { q: string; a: string };

export const faqs: Faq[] = [
  {
    q: "Vocês realizam exames ocupacionais?",
    a: "Trabalhamos com clínicas parceiras qualificadas para a realização dos exames ocupacionais, cuidando do agendamento, do controle dos ASOs e do acompanhamento dos vencimentos.",
  },
  {
    q: "Atendem empresas de qualquer porte?",
    a: "Sim. Atendemos empresas de pequeno, médio e grande porte, ajustando o serviço à realidade e ao número de colaboradores de cada operação.",
  },
  {
    q: "Vocês fazem gestão do eSocial?",
    a: "Sim. Acompanhamos as obrigações de SST no eSocial, incluindo os eventos S-2210, S-2220 e S-2240, com controle de pendências e relatórios de conformidade.",
  },
  {
    q: "Atendem fora do Estado do Rio de Janeiro?",
    a: "Sim. Além da base no Rio de Janeiro, oferecemos atendimento remoto para empresas em todo o território nacional.",
  },
  {
    q: "Vocês elaboram PGR, PCMSO e LTCAT?",
    a: "Sim. Contamos com profissionais e parceiros especializados para elaborar e gerir os documentos exigidos conforme a necessidade de cada cliente.",
  },
  {
    q: "A empresa precisa ter RH interno?",
    a: "Não. Atendemos tanto empresas que já possuem RH próprio quanto aquelas que precisam de suporte completo na gestão de pessoas e SST.",
  },
];
