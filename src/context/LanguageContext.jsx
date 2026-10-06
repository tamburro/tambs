'use client'
import { createContext, useContext, useState, useEffect, useCallback } from 'react'

// ─── Translations ──────────────────────────────────────────────────────────────
export const translations = {
  en: {
    header: {
      tagline: 'Pedro Tamburro is a product designer & design engineer crafting digital products end to end.',
      yourTime: 'Your time',
      cta: "Let's Talk",
    },
    nav: { work: 'Work', about: 'About', contact: 'Contact' },
    gallery: {
      eyebrow: 'Selected Works',
      hint: 'Drag to explore · Click to open',
      hintTouch: 'Swipe to explore · Tap to open',
      filter: 'Filter',
      close: 'Close',
      all: 'All',
      works: 'Works',
      project: 'Project',
      year: 'Year',
      gridView: 'Sphere view',
      listView: 'List view',
    },
    aboutPage: {
      toggleProfile: 'Profile',
      toggleApproach: 'Approach',
      eyebrow: 'About',
      headline: ['Pedro', 'Tamburro'],
      statement: "I'm Pedro Tamburro, a product designer with 16 years of career. I design and build complete digital products: user research, information architecture, UI design and production code. I build AI-driven products and ship from idea to deploy.",
      sub: "Currently a Product Designer at Editora Globo. Graduate in Graphic Design from Senac RJ, MBA in UX Design from Instituto Infnet, currently pursuing an MBA in AI-Driven Innovation & UX at UX Unicórnio. I believe the best designer today is one who can also build. That's the standard I hold myself to.",
      stats: [
        { value: '16', label: 'Years of career' },
        { value: '23', label: 'Projects in the gallery' },
      ],
      approachEyebrow: 'Approach',
      approachHeadline: ['Design.', 'Build.', 'Ship.'],
      approachIntro: 'I cover the full product design cycle. Every project goes from the first insight to a tested, shipped interface, with research, prototype and code as a single continuous craft.',
      services: [
        { title: 'Product Design', description: 'End-to-end product design: research, information architecture, UI, prototype and validation. From the first insight to a tested interface.' },
        { title: 'Brand Identity', description: 'From logo to full design system, creating a visual identity that scales across every digital and physical touchpoint.' },
        { title: 'Design Engineering', description: 'I turn Figma into production-ready code. React, Next.js and modern front-end that actually ships.' },
      ],
      brandsLabel: "Brands I've been part of",
      toolsLabel: 'Tools & Stack',
      experienceLabel: 'Experience',
      educationLabel: 'Education',
    },
    aiWorkflow: {
      label: 'AI-assisted engineering',
      title: 'How I build with AI',
      sub: "AI doesn't replace the process, it compresses it: cycles that go from idea to production in days, not months. The products I build go through the same discipline:",
      stats: [
        { value: '40+', label: 'Automated E2E checks guarding business rules' },
        { value: '100%', label: 'Built on token-based design systems' },
      ],
      steps: [
        { title: 'Discovery & research', description: 'Market analysis, benchmarks and pain-point mapping, with AI accelerating synthesis. Judgment on what matters stays human.' },
        { title: 'Shaping & PRD', description: 'Problem, appetite and boundaries defined in writing. The output is a lean PRD: clear requirements, not vague briefs.' },
        { title: 'Breadboarding', description: 'The product becomes a map of screens, actions and connections. The flow is validated before the first pixel exists.' },
        { title: 'Design system first', description: 'Tokens as the single source of truth. Zero hardcoded hex: color, type and spacing always come from the system.' },
        { title: 'Vertical slices', description: 'Claude Code as pair programmer, building end-to-end slices that each ship complete value, one at a time.' },
        { title: 'Deploy, measure, iterate', description: 'Live on Vercel from week one. Real usage reveals what prototypes hide, and feeds the next slice.' },
      ],
      guardrailsLabel: 'Non-negotiables',
      guardrails: [
        'Generated code is reviewed before commit',
        'AI executes; design and engineering decisions stay mine',
        'Nothing ships outside the design system',
        'Tokens and patterns enforced in CI',
      ],
      toolsLabel: 'Daily tools',
      tools: ['Claude Code', 'Antigravity', 'Figma', 'Nano Banana'],
      proofLabel: 'Shipped with this workflow',
      proof: [
        { title: 'Vira', slug: 'vira-ticketeria-propria', note: 'Ticketing live in six weeks' },
        { title: 'Sigil', slug: 'sigil-design-system-builder', note: 'From seed color to export' },
        { title: 'Proficia', slug: 'proficia-avaliacao-competencias-ux', note: 'SaaS with team plans' },
        { title: 'Drop', slug: 'drop-marketplace-de-lancamentos', note: 'Pix checkout, live' },
        { title: 'PixTudo', slug: 'pixtudo-super-app-ux-research', note: 'Research to working MVP' },
      ],
    },
    resume: {
      title1: 'Product Designer · Conversion & Acquisition',
      year1: 'Nov 2022 – Present',
      org1: 'Editora Globo',
      titleUniverso: 'Product Designer & Founder',
      desc1: [
        "Design of acquisition pages and subscription flows focused on conversion and revenue growth for Editora Globo's digital products.",
        'Landing page implementation in HTML/CSS/JS, conversion journey optimization based on performance metrics (CRO) and responsive email marketing.',
      ],
      descUniverso: [
        'Independent design brand. From illustration and visual identity to prototyping SaaS, apps and end-to-end digital products, integrating UX, front-end and AI-driven design.',
      ],
      desc2: [
        'Worked at EnsineMe (YDUQS group) in multidisciplinary teams building digital educational products.',
        'Figma prototyping and development of e-learning lessons in HTML/CSS/JS with high prototype fidelity.',
        'Design System application, redesign of infographics and agile demand management (Azure DevOps).',
      ],
      desc3: [
        'Design of educational interfaces for the distance learning platform, focused on pedagogical clarity and consistency.',
        'Development of e-learning lessons in HTML/CSS/JS, Design System application and redesign of educational infographics.',
      ],
      descZion: ['In-person Graphic Design teaching for teenagers and children.'],
      yearUniverso: 'Dec 2017 – Present',
      orgUniverso: 'Universo Observável',
      title2: 'Product Designer · UX/UI',
      year2: 'Jun 2020 – Nov 2021',
      org2: 'EnsineMe · YDUQS',
      title3: 'Product Designer · UX/UI',
      year3: 'Jul 2019 – Jun 2020',
      org3: 'Estácio',
      titleZion: 'Graphic Design Teacher',
      yearZion: 'Dec 2018 – Apr 2019',
      orgZion: 'Zion Escola de Entretenimento',
      eduTitle1: 'MBA in AI-Driven Innovation & UX',
      eduYear1: 'Jul 2025 – Sep 2026',
      eduOrg1: 'UX Unicórnio',
      eduTitle2: 'MBA in UX Design & Information Architecture',
      eduYear2: 'Apr 2023 – Apr 2024',
      eduOrg2: 'Instituto Infnet',
      eduTitle3: 'Bachelor of Graphic Design',
      eduYear3: '2013 – 2018',
      eduOrg3: 'Senac RJ',
    },
    contact: {
      eyebrow: 'Contact',
      headline: ["Let's", 'Talk'],
      intro: "Open to full-time and contract roles. I cover the full product design cycle, from user research to shipped code.",
      locationLabel: 'Location',
      locationValue: 'Rio de Janeiro, Brazil',
      locationNote: 'Available for remote work and on-site in Rio',
      phoneLabel: 'WhatsApp',
      emailLabel: 'Email',
      nameLabel: 'Full Name',
      emailFieldLabel: 'Email Address',
      messageLabel: 'Your Message',
      sendBtn: 'Send Message',
      sending: 'Sending...',
      success: 'Message sent successfully!',
      error: 'Error sending. Please try again.',
    },
    project: {
      overview: 'Overview',
      tldrProblem: 'The problem',
      tldrRole: 'My role',
      tldrOutcome: 'The outcome',
      year: 'Year',
      role: 'Role',
      duration: 'Duration',
      team: 'Team',
      tools: 'Tools',
      viewProject: 'View Project',
      liveDemo: 'Live Demo',
      prototype: 'Prototype',
      gallery: 'Visual Artifacts',
      showGallery: 'Show Images',
      hideGallery: 'Hide Images',
      backToProjects: 'Back to Works',
      related: 'Related work',
      inMotion: 'In motion',
      sheet: 'Details',
    },
    footer: {
      cta: "Let's Talk",
      rights: 'All Rights Reserved.',
      crafted: 'Crafted with ❤️ in Rio de Janeiro',
    },
  },
  pt: {
    header: {
      tagline: 'Pedro Tamburro é um product designer & design engineer construindo produtos digitais de ponta a ponta.',
      yourTime: 'Seu horário',
      cta: 'Vamos Conversar',
    },
    nav: { work: 'Trabalhos', about: 'Sobre', contact: 'Contato' },
    gallery: {
      eyebrow: 'Trabalhos Selecionados',
      hint: 'Arraste para explorar · Clique para abrir',
      hintTouch: 'Deslize para explorar · Toque para abrir',
      filter: 'Filtrar',
      close: 'Fechar',
      all: 'Todos',
      works: 'Trabalhos',
      project: 'Projeto',
      year: 'Ano',
      gridView: 'Visão esférica',
      listView: 'Visão em lista',
    },
    aboutPage: {
      toggleProfile: 'Perfil',
      toggleApproach: 'Abordagem',
      eyebrow: 'Sobre',
      headline: ['Pedro', 'Tamburro'],
      statement: 'Sou Pedro Tamburro, product designer com 16 anos de carreira. Projeto e construo produtos digitais completos: pesquisa com usuários, arquitetura de informação, design de UI e código em produção. Construo produtos orientados por IA e entrego da ideia ao deploy.',
      sub: 'Atualmente Product Designer na Editora Globo. Graduado em Design Gráfico pelo Senac RJ, MBA em UX Design pelo Instituto Infnet e cursando MBA em Inovação Orientada à IA e UX pela UX Unicórnio. Acredito que o melhor designer hoje é aquele que também sabe construir. É esse o padrão que busco.',
      stats: [
        { value: '16', label: 'Anos de carreira' },
        { value: '23', label: 'Projetos na galeria' },
      ],
      approachEyebrow: 'Abordagem',
      approachHeadline: ['Design.', 'Código.', 'Entrega.'],
      approachIntro: 'Cubro o ciclo completo de design de produto. Cada projeto vai do primeiro insight à interface testada e entregue, com pesquisa, protótipo e código como um único ofício contínuo.',
      services: [
        { title: 'Product Design', description: 'Design de produto do início ao fim: pesquisa, arquitetura da informação, UI, protótipo e validação. Do primeiro insight à interface testada.' },
        { title: 'Identidade Visual', description: 'Do logo ao design system, com uma identidade visual que escala em todos os pontos de contato digitais e físicos.' },
        { title: 'Design Engineering', description: 'Transformo Figma em código. React, Next.js e front-end moderno que vai para produção de verdade.' },
      ],
      brandsLabel: 'Marcas em que atuei',
      toolsLabel: 'Ferramentas & Stack',
      experienceLabel: 'Experiência',
      educationLabel: 'Formação',
    },
    aiWorkflow: {
      label: 'Engenharia assistida por IA',
      title: 'Como eu construo com IA',
      sub: 'IA não substitui o processo, ela o comprime: ciclos que vão da ideia à produção em dias, não meses. Os produtos que construo passam pela mesma disciplina:',
      stats: [
        { value: '40+', label: 'Checks E2E automatizados protegendo regras de negócio' },
        { value: '100%', label: 'Construídos sobre design systems com tokens' },
      ],
      steps: [
        { title: 'Discovery & pesquisa', description: 'Análise de mercado, benchmarks e mapeamento de dores, com IA acelerando a síntese. O julgamento do que importa continua humano.' },
        { title: 'Shaping & PRD', description: 'Problema, apetite e limites definidos por escrito. O resultado é um PRD enxuto: requisitos claros, não briefs vagos.' },
        { title: 'Breadboarding', description: 'O produto vira um mapa de telas, ações e conexões. O fluxo é validado antes de existir o primeiro pixel.' },
        { title: 'Design system primeiro', description: 'Tokens como fonte única de verdade. Zero hex hardcoded: cor, tipografia e espaçamento sempre vêm do sistema.' },
        { title: 'Fatias verticais', description: 'Claude Code como pair programmer, construindo fatias de ponta a ponta que entregam valor completo, uma por vez.' },
        { title: 'Deploy, medição, iteração', description: 'No ar na Vercel desde a primeira semana. O uso real revela o que protótipo esconde e alimenta a próxima fatia.' },
      ],
      guardrailsLabel: 'Inegociáveis',
      guardrails: [
        'Código gerado é revisado antes do commit',
        'A IA executa; as decisões de design e engenharia são minhas',
        'Nada vai ao ar fora do design system',
        'Tokens e padrões verificados no CI',
      ],
      toolsLabel: 'Ferramentas do dia a dia',
      tools: ['Claude Code', 'Antigravity', 'Figma', 'Nano Banana'],
      proofLabel: 'Construídos com esse workflow',
      proof: [
        { title: 'Vira', slug: 'vira-ticketeria-propria', note: 'Ticketeria no ar em seis semanas' },
        { title: 'Sigil', slug: 'sigil-design-system-builder', note: 'Da cor seed ao export' },
        { title: 'Proficia', slug: 'proficia-avaliacao-competencias-ux', note: 'SaaS com planos de time' },
        { title: 'Drop', slug: 'drop-marketplace-de-lancamentos', note: 'Checkout Pix, no ar' },
        { title: 'PixTudo', slug: 'pixtudo-super-app-ux-research', note: 'Da pesquisa ao MVP funcional' },
      ],
    },
    resume: {
      title1: 'Product Designer · Conversão & Aquisição',
      year1: 'Nov 2022 – Presente',
      org1: 'Editora Globo',
      titleUniverso: 'Designer de produto & fundador',
      desc1: [
        'Design de páginas de aquisição e fluxos de assinatura orientados a conversão e crescimento de receita para os produtos digitais da Editora Globo.',
        'Implementação de landing pages em HTML/CSS/JS, otimização de jornadas com base em métricas de performance (CRO) e email marketing responsivo.',
      ],
      descUniverso: [
        'Marca autoral de design. Da ilustração e identidade visual à prototipação de SaaS, apps e produtos digitais de ponta a ponta, integrando UX, front-end e AI-driven design.',
      ],
      desc2: [
        'Atuação na EnsineMe (grupo YDUQS) em times multidisciplinares de produtos educacionais digitais.',
        'Prototipação no Figma e desenvolvimento de aulas EAD em HTML/CSS/JS com alta fidelidade ao protótipo.',
        'Aplicação de Design System, redesign de infográficos e gestão de demandas em metodologias ágeis (Azure DevOps).',
      ],
      desc3: [
        'Design de interfaces educacionais para a plataforma EAD, com foco em clareza pedagógica e consistência.',
        'Desenvolvimento de aulas EAD em HTML/CSS/JS, aplicação de Design System e redesign de infográficos educacionais.',
      ],
      descZion: ['Ensino presencial de Design Gráfico para adolescentes e crianças.'],
      yearUniverso: 'Dez 2017 – Presente',
      orgUniverso: 'Universo Observável',
      title2: 'Product Designer · UX/UI',
      year2: 'Jun 2020 – Nov 2021',
      org2: 'EnsineMe · YDUQS',
      title3: 'Product Designer · UX/UI',
      year3: 'Jul 2019 – Jun 2020',
      org3: 'Estácio',
      titleZion: 'Professor de Design Gráfico',
      yearZion: 'Dez 2018 – Abr 2019',
      orgZion: 'Zion Escola de Entretenimento',
      eduTitle1: 'MBA em Inovação Orientada à IA e UX',
      eduYear1: 'Jul 2025 – Set 2026',
      eduOrg1: 'UX Unicórnio',
      eduTitle2: 'MBA em UX Design & Arquitetura da Informação',
      eduYear2: 'Abr 2023 – Abr 2024',
      eduOrg2: 'Instituto Infnet',
      eduTitle3: 'Graduação em Design Gráfico',
      eduYear3: '2013 – 2018',
      eduOrg3: 'Senac RJ',
    },
    contact: {
      eyebrow: 'Contato',
      headline: ['Vamos', 'Conversar'],
      intro: 'Disponível para vagas CLT e PJ. Cubro o ciclo completo de design de produto, da pesquisa com usuários ao código em produção.',
      locationLabel: 'Localização',
      locationValue: 'Rio de Janeiro, Brasil',
      locationNote: 'Disponível para remoto e presencial no Rio',
      phoneLabel: 'WhatsApp',
      emailLabel: 'E-mail',
      nameLabel: 'Nome Completo',
      emailFieldLabel: 'Endereço de E-mail',
      messageLabel: 'Sua Mensagem',
      sendBtn: 'Enviar Mensagem',
      sending: 'Enviando...',
      success: 'Mensagem enviada com sucesso!',
      error: 'Erro ao enviar. Tente novamente.',
    },
    project: {
      overview: 'Visão Geral',
      tldrProblem: 'O problema',
      tldrRole: 'Meu papel',
      tldrOutcome: 'O resultado',
      year: 'Ano',
      role: 'Papel',
      duration: 'Duração',
      team: 'Equipe',
      tools: 'Ferramentas',
      viewProject: 'Ver Projeto',
      liveDemo: 'Ver ao Vivo',
      prototype: 'Ver Protótipo',
      gallery: 'Artefatos Visuais',
      showGallery: 'Ver Imagens',
      hideGallery: 'Ocultar Imagens',
      backToProjects: 'Voltar aos Trabalhos',
      related: 'Trabalhos relacionados',
      inMotion: 'Em movimento',
      sheet: 'Ficha',
    },
    footer: {
      cta: 'Vamos Conversar',
      rights: 'Todos os Direitos Reservados.',
      crafted: 'Feito com ❤️ no Rio de Janeiro',
    },
  },
}

// ─── Context ───────────────────────────────────────────────────────────────────
const LanguageContext = createContext({
  lang: 'en',
  toggle: () => { },
  t: translations['en'],
})

// ─── Provider ─────────────────────────────────────────────────────────────────
const STORAGE_KEY = 'portfolio-lang'

function detectLang() {
  const saved = localStorage.getItem(STORAGE_KEY)
  if (saved === 'pt' || saved === 'en') return saved
  return navigator.language?.startsWith('pt') ? 'pt' : 'en'
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(null)

  useEffect(() => {
    setLang(detectLang())
  }, [])

  const toggle = useCallback((newLang) => {
    localStorage.setItem(STORAGE_KEY, newLang)
    setLang(newLang)
  }, [])

  useEffect(() => {
    if (lang) document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en'
  }, [lang])

  // Use 'en' while not yet mounted (avoids SSR/hydration mismatch)
  const activeLang = lang ?? 'en'

  return (
    <LanguageContext.Provider value={{ lang: activeLang, toggle, t: translations[activeLang] }}>
      {children}
    </LanguageContext.Provider>
  )
}

// ─── Hook ─────────────────────────────────────────────────────────────────────
export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within a LanguageProvider')
  return ctx
}
