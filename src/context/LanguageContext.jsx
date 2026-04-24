'use client'
import { createContext, useContext, useState, useEffect, useCallback } from 'react'

// ─── Translations ──────────────────────────────────────────────────────────────
export const translations = {
  en: {
    nav: { home: 'Home', about: 'About', services: 'Services', works: 'Projects', contact: 'Contact' },
    hireMe: 'Get In Touch',
    hero: {
      tagline: 'Product Designer',
      headline: ['Design that speaks', 'before words.'],
      sub: 'I design and build complete digital products, from user research and interface design to fully functional applications.',
      cta1: 'View Projects',
      cta2: 'Get In Touch',
    },
    profile: {
      subtitle: 'Based in Rio de Janeiro',
      heading: 'Product Designer',
      bio: "Product Designer with 10+ years at the intersection of design, product and technology. From discovery and information architecture to HTML/CSS/JS implementation. I build AI-driven products and vibe code from idea to production.",
      available: 'Open to Work',
      downloadCV: 'Download CV',
      viewProjects: 'View Projects',
    },
    partners: "Brands I've Been Part Of",
    resume: {
      experience: 'Experience',
      education: 'Education',
      exp1: 'Design leadership for acquisition pages and subscription experiences, focused on conversion and revenue growth. Co-creation of product strategy with marketing, technology and product teams. HTML/CSS/JS implementation of landing pages and responsive email marketing.',
      exp2: 'Design of educational interfaces for Estácio\'s distance learning platform, focused on pedagogical clarity and consistency. Front-end implementation with HTML, CSS and JS. Redesign of educational infographics to improve comprehension of complex content.',
      exp3: 'Design of educational interfaces for Estácio\'s distance learning platform. HTML, CSS and JS implementation in collaboration with product and technology teams. Redesign of educational infographics.',
      exp4: 'Responsible for editing and finishing photographic and video materials for various independent productions.',
      title4: 'Design Intern',
      exp5: 'Support in the development of web projects and digital assets in collaboration with the design team.',
      title5: 'Web Design Intern',
      showMoreExp: 'View all',
      showLessExp: 'Show less',
      title1: 'Product Designer',
      title2: 'Product Designer',
      title3: 'Product Designer',
      year1: 'Nov 2022 – Present',
      year2: 'Jun 2020 – Nov 2021',
      year3: 'Jul 2019 – Jun 2020',
      year4: 'Feb 2011 – Jan 2012',
      year5: 'Jun 2010 – Dec 2010',
      eduTitle1: 'MBA in AI-Driven Innovation & UX',
      eduTitle2: 'MBA in UX Design & Information Architecture',
      eduTitle3: 'Bachelor of Graphic Design',
      eduYear1: 'Jul 2025 – Sep 2026',
      eduYear2: 'Apr 2023 – Apr 2024',
      eduYear3: '2013 – 2018',
      edu1: 'Postgraduate degree in Innovation focused on Artificial Intelligence and User Experience.',
      edu2: 'UX Design, Information Architecture and Usability.',
      edu3: "Bachelor's degree in Graphic Design.",
    },
    portfolio: {
      title: 'Works & Projects',
      sub: 'From user research to production code. Complete projects, not just screens.',
      showMore: 'View more projects',
      showLess: 'Show less',
      filterAll: 'All',
    },
    skills: {
      headline: 'Tools I work with',
      sub: 'From design to deployment. I work across the full stack, from Figma wireframes to production-ready apps built with AI-assisted engineering.',
    },
    cta: {
      title: "Looking to hire a Product Designer? Let's talk.",
      sub: "Open to full-time and contract roles. I cover the full product design cycle, from user research to shipped code.",
      btn: "Let's Talk",
    },
    contact: {
      label: 'contact',
      title: "Let's build something great.",
      locationLabel: 'Location:',
      locationValue: 'Rio de Janeiro, Brazil',
      locationNote: 'Available for remote work and on-site in Rio',
      phoneLabel: 'Phone:',
      emailLabel: 'Email:',
      nameLabel: 'Full Name',
      emailFieldLabel: 'Email Address',
      messageLabel: 'Your Message',
      sendBtn: 'Send Message',
      sending: 'Sending...',
      success: 'Message sent successfully!',
      error: 'Error sending. Please try again.',
    },
    about: {
      title: "I'm Pedro Tamburro, Product Designer & Design Engineer.",
      p1: "I design and build complete digital products. My work spans the full stack of product design: user research, information architecture, UI design, prototyping and usability testing. I take it further by implementing in code.",
      p2: "Currently a Product Designer at Editora Globo. I hold a degree in Graphic Design from Senac RJ, an MBA in UX Design from Instituto Infnet, and I'm currently pursuing an MBA in AI-Driven Innovation & UX at UX Unicórnio.",
      p3: "I believe the best designer today is one who can also build. That's the standard I hold myself to.",
      btn: 'Get In Touch',
    },
    services: {
      label: 'What I do',
      title: 'Design. Build. Ship.',
      items: [
        { title: 'Product Design', description: 'End-to-end product design: research, information architecture, UI, prototype and validation. From the first insight to a tested interface.' },
        { title: 'Brand Identity', description: 'From logo to full design system, creating a visual identity that scales across every digital and physical touchpoint.' },
        { title: 'Design Engineering', description: 'I turn Figma into production-ready code. React, Next.js and modern front-end that actually ships.' },
      ],
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
      backToProjects: 'Back to Projects',
    },
    testimonials: { label: 'Testimonials', title: 'What clients say!' },
    footer: 'All Rights Reserved.',
    footerCrafted: 'Crafted with ❤️ in Rio de Janeiro',
  },
  pt: {
    nav: { home: 'Início', about: 'Sobre', services: 'Serviços', works: 'Projetos', contact: 'Contato' },
    hireMe: 'Entrar em Contato',
    hero: {
      tagline: 'Designer de Produto',
      headline: ['Design que fala', 'antes das palavras.'],
      sub: 'Projeto e construo produtos digitais completos da pesquisa com usuários e design de interface até aplicações totalmente funcionais.',
      cta1: 'Ver Projetos',
      cta2: 'Entrar em Contato',
    },
    profile: {
      subtitle: 'Atuando a partir do Rio de Janeiro',
      heading: 'Designer de Produto',
      bio: 'Product Designer com mais de 10 anos na interseção entre design, produto e tecnologia. Da descoberta e arquitetura de informação à implementação em HTML/CSS/JS. Construo produtos orientados por IA com velocidade e fidelidade.',
      available: 'Aberto a Oportunidades',
      downloadCV: 'Baixar CV',
      viewProjects: 'Ver Projetos',
    },
    partners: 'Marcas em que atuei',
    resume: {
      experience: 'Experiência',
      education: 'Formação',
      exp1: 'Liderança de design em páginas de aquisição e experiências de assinatura, com foco em conversão e crescimento de receita. Co-criação de estratégia de produto com times de marketing, tecnologia e produto. Implementação (HTML/CSS/JS) de landing pages e email marketing responsivo.',
      exp2: 'Design de interfaces educacionais para a plataforma EAD da Estácio, com foco em clareza pedagógica e consistência. Implementação Front End com HTML, CSS e JS. Redesign de infográficos educacionais, melhorando a compreensão de conteúdos complexos.',
      exp3: 'Design de interfaces educacionais para a plataforma EAD da Estácio. Implementação em HTML, CSS e JS em colaboração com times de produto e tecnologia. Redesign de infográficos educacionais.',
      exp4: 'Responsável pela edição e finalização de materiais fotográficos e em vídeo para diversas produções independentes.',
      title4: 'Estagiário de Design',
      exp5: 'Apoio no desenvolvimento de projetos web e peças digitais em colaboração com o time de design.',
      title5: 'Estagiário de Web Design',
      showMoreExp: 'Exibir tudo',
      showLessExp: 'Exibir menos',
      title1: 'Designer de Produto',
      title2: 'Designer de Produto',
      title3: 'Designer de Produto',
      year1: 'Nov 2022 – Presente',
      year2: 'Jun 2020 – Nov 2021',
      year3: 'Jul 2019 – Jun 2020',
      year4: 'Fev 2011 – Jan 2012',
      year5: 'Jun 2010 – Dez 2010',
      eduTitle1: 'MBA em Inovação Orientada à IA e UX',
      eduTitle2: 'MBA em UX Design & Arquitetura da Informação',
      eduTitle3: 'Graduação em Design Gráfico',
      eduYear1: 'Jul 2025 – Set 2026',
      eduYear2: 'Abr 2023 – Abr 2024',
      eduYear3: '2013 – 2018',
      edu1: 'Pós-graduação em Inovação com foco em Inteligência Artificial e Experiência do Usuário.',
      edu2: 'UX Design, Arquitetura da Informação e Usabilidade.',
      edu3: 'Bacharelado em Design Gráfico.',
    },
    portfolio: {
      title: 'Trabalhos & Projetos',
      sub: 'Da pesquisa com usuários ao código em produção. Projetos completos, não só telas.',
      showMore: 'Ver mais projetos',
      showLess: 'Ver menos',
      filterAll: 'Todos',
    },
    skills: {
      headline: 'Ferramentas que uso',
      sub: 'Do design ao deploy. Trabalho em todo o stack, de wireframes no Figma a apps em produção construídos com engenharia assistida por IA.',
    },
    cta: {
      title: 'Procurando um Product Designer? Vamos conversar.',
      sub: 'Disponível para vagas CLT e PJ. Cubro o ciclo completo de design de produto, da pesquisa com usuários ao código em produção.',
      btn: 'Vamos Conversar',
    },
    contact: {
      label: 'contato',
      title: 'Vamos construir algo incrível.',
      locationLabel: 'Localização:',
      locationValue: 'Rio de Janeiro, Brasil',
      locationNote: 'Disponível para remoto e presencial no Rio',
      phoneLabel: 'Telefone:',
      emailLabel: 'E-mail:',
      nameLabel: 'Nome Completo',
      emailFieldLabel: 'Endereço de E-mail',
      messageLabel: 'Sua Mensagem',
      sendBtn: 'Enviar Mensagem',
      sending: 'Enviando...',
      success: 'Mensagem enviada com sucesso!',
      error: 'Erro ao enviar. Tente novamente.',
    },
    about: {
      title: 'Sou Pedro Tamburro, Product Designer & Design Engineer.',
      p1: 'Projeto e construo produtos digitais completos. Meu trabalho abrange todo o ciclo de design de produto: pesquisa com usuários, arquitetura da informação, design de UI, prototipagem e testes de usabilidade. O trabalho vai além, chegando até a implementação em código.',
      p2: 'Atualmente Product Designer na Editora Globo. Sou graduado em Design Gráfico pelo Senac RJ, tenho MBA em UX Design pelo Instituto Infnet e estou cursando MBA em Inovação Orientada à IA e UX pela UX Unicórnio.',
      p3: 'Acredito que o melhor designer hoje é aquele que também sabe construir. É esse o padrão que busco.',
      btn: 'Entre em Contato',
    },
    services: {
      label: 'O que eu faço',
      title: 'Design. Código. Entrega.',
      items: [
        { title: 'Product Design', description: 'Design de produto do início ao fim: pesquisa, arquitetura da informação, UI, protótipo e validação. Do primeiro insight à interface testada.' },
        { title: 'Identidade Visual', description: 'Do logo ao design system, com uma identidade visual que escala em todos os pontos de contato digitais e físicos.' },
        { title: 'Design Engineering', description: 'Transformo Figma em código. React, Next.js e front-end moderno que vai para produção de verdade.' },
      ],
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
      backToProjects: 'Voltar para Projetos',
    },
    testimonials: { label: 'Depoimentos', title: 'O que os clientes dizem!' },
    footer: 'Todos os Direitos Reservados.',
    footerCrafted: 'Feito com ❤️ no Rio de Janeiro',
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
