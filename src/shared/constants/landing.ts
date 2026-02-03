// Landing page constants

export const LANDING_PAGE = {
  NAV_ITEMS: [
    { label: "Problema", id: "problem" },
    { label: "Solução", id: "solution" },
  ],
  FEATURES: [
    {
      title: "Rápido",
      desc: "Resultado em menos de 2 segundos, sem esperar por especialistas",
    },
    {
      title: "Preciso",
      desc: "98% de acurácia com redes neurais treinadas em 1M+ imagens",
    },
    {
      title: "Offline",
      desc: "Funciona sem internet - perfeito para zonas rurais isoladas",
    },
    {
      title: "Acessível",
      desc: "Qualquer smartphone antigo serve - não precisa de equipamento caro",
    },
  ],
  PROBLEMS: [
    {
      title: "Detecção visual é imprecisa",
      desc: "30-50% de erro humano",
    },
    {
      title: "Agroquímicos mal aplicados",
      desc: "Custos + contaminação sem necessidade",
    },
    {
      title: "Diagnóstico tardio",
      desc: "Colheitas inteiras perdidas",
    },
    {
      title: "Sem acesso a especialistas",
      desc: "Zona rural isolada de agrônomos",
    },
  ],
  FEATURE_PILLS: [
    { label: "Visão Computacional" },
    { label: "Deep Learning" },
    { label: "Tempo Real" },
    { label: "Mobile First" },
  ],
} as const;

export const HERO_CONTENT = {
  BADGE: "Transformando a agricultura em Angola",
  MAIN_HEADING: "Detecte doenças em plantas em segundos com IA",
  SUBHEADING:
    "Precisão 98%. Funciona offline. Qualquer smartphone. Os primeiros agricultores economizaram até 50.000 Kz por colheita.",
} as const;

export const CTA_CONTENT = {
  HEADING: "Está pronto para transformar sua colheita?",
  DESCRIPTION:
    "Somos uma startup. O problema é real. A solução funciona. Venha testar com agricultores que já economizaram até 50.000 Kz cada um nessa colheita.",
  INPUT_PLACEHOLDER: "seu@email.com",
  BUTTON_TEXT: "Inscrever",
  SUCCESS_MESSAGE: "✓ Obrigado! Entraremos em contato em breve.",
  FOOTER_TEXT: "Sem spam. Apenas atualizações quando tiver novidades reais.",
} as const;

export const APP_URLS = {
  APPLE_APP_STORE: "https://apps.apple.com",
  GOOGLE_PLAY_STORE: "https://play.google.com",
  LOGIN: "/login",
  REGISTER: "/register",
} as const;
