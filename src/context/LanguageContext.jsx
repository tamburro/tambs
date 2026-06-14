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
      filter: 'Filter',
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
      statement: "I'm Pedro Tamburro, a product designer with 16 years of experience, 7 in digital product. I design and build complete digital products — from user research, information architecture and UI design to production code. I build AI-driven products and ship from idea to deploy.",
      sub: "Currently a Product Designer at Editora Globo. Graduate in Graphic Design from Senac RJ, MBA in UX Design from Instituto Infnet, currently pursuing an MBA in AI-Driven Innovation & UX at UX Unicórnio. I believe the best designer today is one who can also build. That's the standard I hold myself to.",
      stats: [
        { value: '16', label: 'Years in design' },
        { value: '07', label: 'Years in digital product' },
        { value: '14', label: 'Projects in the gallery' },
      ],
      approachEyebrow: 'Approach',
      approachHeadline: ['Design.', 'Build.', 'Ship.'],
      approachIntro: 'I cover the full product design cycle. Every project goes from the first insight to tested, shipped interface — research, prototype and code as a single continuous craft.',
      services: [
        { title: 'Product Design', description: 'End-to-end product design: research, information architecture, UI, prototype and validation. From the first insight to a tested interface.' },
        { title: 'Brand Identity', description: 'From logo to full design system, creating a visual identity that scales across every digital and physical touchpoint.' },
        { title: 'Design Engineering', description: 'I turn Figma into production-ready code. React, Next.js and modern front-end that actually ships.' },
      ],
      toolsLabel: 'Tools & Stack',
      experienceLabel: 'Experience',
      educationLabel: 'Education',
    },
    resume: {
      title1: 'Product Designer · Conversion & Acquisition',
      year1: 'Nov 2022 – Present',
      org1: 'Editora Globo',
      titleUniverso: 'Designer & Founder',
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
      filter: 'Filtrar',
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
      statement: 'Sou Pedro Tamburro, product designer com 16 anos de carreira, 7 em produto digital. Projeto e construo produtos digitais completos — da pesquisa com usuários, arquitetura de informação e design de UI até o código em produção. Construo produtos orientados por IA e entrego da ideia ao deploy.',
      sub: 'Atualmente Product Designer na Editora Globo. Graduado em Design Gráfico pelo Senac RJ, MBA em UX Design pelo Instituto Infnet e cursando MBA em Inovação Orientada à IA e UX pela UX Unicórnio. Acredito que o melhor designer hoje é aquele que também sabe construir. É esse o padrão que busco.',
      stats: [
        { value: '16', label: 'Anos em design' },
        { value: '07', label: 'Anos em produto digital' },
        { value: '14', label: 'Projetos na galeria' },
      ],
      approachEyebrow: 'Abordagem',
      approachHeadline: ['Design.', 'Código.', 'Entrega.'],
      approachIntro: 'Cubro o ciclo completo de design de produto. Cada projeto vai do primeiro insight à interface testada e entregue — pesquisa, protótipo e código como um único ofício contínuo.',
      services: [
        { title: 'Product Design', description: 'Design de produto do início ao fim: pesquisa, arquitetura da informação, UI, protótipo e validação. Do primeiro insight à interface testada.' },
        { title: 'Identidade Visual', description: 'Do logo ao design system, com uma identidade visual que escala em todos os pontos de contato digitais e físicos.' },
        { title: 'Design Engineering', description: 'Transformo Figma em código. React, Next.js e front-end moderno que vai para produção de verdade.' },
      ],
      toolsLabel: 'Ferramentas & Stack',
      experienceLabel: 'Experiência',
      educationLabel: 'Formação',
    },
    resume: {
      title1: 'Product Designer · Conversão & Aquisição',
      year1: 'Nov 2022 – Presente',
      org1: 'Editora Globo',
      titleUniverso: 'Designer & Founder',
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
