'use client'
import React, { useCallback, useEffect, useRef, useState, Suspense, lazy } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, useMotionTemplate, useMotionValue, useInView } from 'framer-motion'
import {
    RiArrowRightLine, RiCheckLine, RiStarFill,
    RiSmartphoneLine, RiCodeSSlashLine, RiPaletteLine,
    RiMailLine, RiWhatsappLine, RiArrowDownLine,
    RiBrainLine, RiFlashlightLine, RiTimeLine,
} from '@remixicon/react'
import ErrorBoundary from '@/components/ui/ErrorBoundary'

const Spline = lazy(() => import('@splinetool/react-spline'))

/* ─── Spotlight hook ─── */
function useSpotlight(size = 220, color = 'rgba(130, 0, 219, 0.18)') {
    const x = useMotionValue(-size)
    const y = useMotionValue(-size)
    const reset = useCallback(() => { x.set(-size); y.set(-size) }, [x, y, size])
    useEffect(() => { reset() }, [reset])
    const onPointerMove = useCallback((e) => {
        const r = e.currentTarget.getBoundingClientRect()
        x.set(e.clientX - r.left); y.set(e.clientY - r.top)
    }, [x, y])
    const bg = useMotionTemplate`radial-gradient(${size}px circle at ${x}px ${y}px, ${color}, transparent 100%)`
    return { onPointerMove, onPointerLeave: reset, bg }
}

/* ─── SpotlightCard ─── */
function SpotlightCard({ children, style = {}, color, size }) {
    const { onPointerMove, onPointerLeave, bg } = useSpotlight(size, color)
    return (
        <div style={{ position: 'relative', ...style }} onPointerMove={onPointerMove} onPointerLeave={onPointerLeave}>
            <motion.div style={{ position: 'absolute', inset: 0, borderRadius: 'inherit', background: bg, pointerEvents: 'none', zIndex: 1 }} />
            <div style={{ position: 'relative', zIndex: 2, display: style.display, flexDirection: style.flexDirection, flexGrow: style.flexGrow, height: style.height }}>
                {children}
            </div>
        </div>
    )
}

/* ─── FadeIn ─── */
function FadeIn({ children, delay = 0, y = 24, style = {} }) {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: '-60px' })
    return (
        <motion.div ref={ref} style={style}
            initial={{ opacity: 0, y }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
        >{children}</motion.div>
    )
}

/* ─── Data ─── */
const SERVICES = [
    { icon: <RiSmartphoneLine size={32} />, title: 'Product Design', desc: 'Pesquisa com usuários, arquitetura da informação, UI e protótipo validado. Do insight à interface pronta para desenvolver.' },
    { icon: <RiCodeSSlashLine size={32} />, title: 'Design Engineering', desc: 'Componentes React, Next.js e design systems funcionais. Projeto e construo — sem perda de fidelidade entre Figma e produção.' },
    { icon: <RiBrainLine size={32} />, title: 'AI Engineering', desc: 'Produtos com IA integrada: automações, interfaces conversacionais e MVPs com Claude API em dias, não meses.' },
]

const DIFFERENTIALS = [
    { icon: <RiFlashlightLine size={20} />, title: 'Full-stack de produto', desc: 'Pesquiso, projeto e implemento. Um profissional que cobre todo o ciclo.' },
    { icon: <RiTimeLine size={20} />, title: 'Velocidade real', desc: 'MVPs entregues em dias com AI coding. Sem burocracia, sem overhead de equipe.' },
    { icon: <RiPaletteLine size={20} />, title: 'Design com precisão', desc: 'Mais de 10 anos em design visual e UX para grandes empresas.' },
]

const PLANS = [
    {
        name: 'Sprint',
        price: 'R$ 2.500',
        period: '/ projeto',
        highlight: false,
        desc: 'Ideal para validar uma ideia ou resolver um problema específico rapidamente.',
        features: ['Até 2 semanas de trabalho', '1 entregável principal (UI, pesquisa ou MVP)', '2 rodadas de revisão', 'Entrega em Figma ou código', 'Suporte por e-mail'],
        cta: 'Começar agora',
    },
    {
        name: 'Produto',
        price: 'R$ 6.500',
        period: '/ projeto',
        highlight: true,
        desc: 'Para times que precisam de design e código trabalhando juntos de verdade.',
        features: ['Até 6 semanas de trabalho', 'Pesquisa + UI + implementação', 'Revisões ilimitadas', 'Design system documentado', 'Deploy em produção', 'Suporte por 30 dias após entrega'],
        cta: 'Projeto completo',
    },
    {
        name: 'Retainer',
        price: 'R$ 3.500',
        period: '/ mês',
        highlight: false,
        desc: 'Para startups e empresas que precisam de capacidade de produto contínua.',
        features: ['40h mensais dedicadas', 'Design + código + estratégia', 'Prioridade de resposta', 'Reuniões semanais de alinhamento', 'Renovação mensal sem fidelidade'],
        cta: 'Falar sobre retainer',
    },
]

const TESTIMONIALS = [
    { name: 'Roberta M.', role: 'CEO · SaaS B2B', text: 'O Pedro entregou em 3 semanas o que nossa equipe estimava em 3 meses. E ainda é bonito.' },
    { name: 'Lucas F.', role: 'CTO · Fintech', text: 'Raro encontrar alguém que fale design e código na mesma frase sem mentir em nenhum dos dois.' },
    { name: 'Ana C.', role: 'Founder · EdTech', text: 'Entendeu o problema antes de abrir o Figma. Isso fez toda a diferença no resultado.' },
]

const PROJECTS = [
    { slug: 'sigil-saas-mvp', src: '/images/projects/sigil/sigil_full.jpg', title: 'Sigil', tag: 'SaaS · Product Design' },
    { slug: 'zapvida', src: '/images/projects/zapvida.png', title: 'ZapVida', tag: 'Product Design · AI' },
    { slug: 'veradice', src: '/images/projects/veradice_full.jpg', title: 'Veradice', tag: 'Game Design · AI Engineering' },
]

const BOX = { padding: '40px', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '20px', background: 'rgba(20, 20, 32, 1)' }

/* ═══════════════════════════════════════════════ */
export default function LandingPage() {
    const heroRef = useRef(null)
    const heroContentRef = useRef(null)
    const [splineVisible, setSplineVisible] = useState(true)

    useEffect(() => {
        const observer = new IntersectionObserver(([e]) => setSplineVisible(e.isIntersecting), { threshold: 0 })
        if (heroRef.current) observer.observe(heroRef.current)
        return () => { if (heroRef.current) observer.unobserve(heroRef.current) }
    }, [])

    useEffect(() => {
        const applyScroll = () => {
            if (!heroContentRef.current) return
            const p = window.pageYOffset
            heroContentRef.current.style.opacity = String(1 - Math.min(p / 400, 1))
            heroContentRef.current.style.transform = `translateY(${p * 0.15}px)`
        }
        const onScroll = () => { if (splineVisible) requestAnimationFrame(applyScroll) }
        applyScroll()
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [splineVisible])

    return (
        <div style={{ background: 'var(--void)', minHeight: '100vh', overflowX: 'hidden' }}>

            {/* ── HERO com Spline ── */}
            <div ref={heroRef} style={{ position: 'relative', minHeight: '100vh', overflow: 'hidden' }}>

                {/* Spline 3D */}
                <div style={{ position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'auto' }}>
                    <ErrorBoundary fallback={<div style={{ width: '100%', height: '100vh', background: '#0D0D18' }} />}>
                        <Suspense fallback={<div style={{ width: '100%', height: '100vh', background: '#0D0D18' }} />}>
                            {splineVisible && (
                                <Spline
                                    style={{ width: '100%', height: '100vh', pointerEvents: 'auto' }}
                                    scene="https://prod.spline.design/us3ALejTXl6usHZ7/scene.splinecode"
                                />
                            )}
                        </Suspense>
                    </ErrorBoundary>
                    <div style={{
                        position: 'absolute', inset: 0, pointerEvents: 'none',
                        background: `linear-gradient(to right, rgba(8,8,16,0.88), transparent 40%, transparent 60%, rgba(8,8,16,0.88)),
                                     linear-gradient(to bottom, rgba(8,8,16,0.2) 0%, transparent 40%, rgba(8,8,16,0.97) 100%)`,
                    }} />
                </div>

                {/* Content */}
                <div ref={heroContentRef} style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', zIndex: 10, pointerEvents: 'none', padding: '120px 24px 80px' }}>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
                        style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--aurora)', marginBottom: '20px' }}
                    >
                        Pedro Tamburro · Design Engineer
                    </motion.p>
                    <motion.h1
                        initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
                        style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 500, fontSize: 'clamp(2.6rem, 6vw, 5rem)', lineHeight: 1.1, color: 'var(--moonlight)', maxWidth: '780px', marginBottom: '24px' }}
                    >
                        Produtos digitais que existem<br />
                        <span style={{ color: 'var(--aurora)' }}>no mundo real.</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
                        style={{ fontSize: '17px', lineHeight: 1.7, color: 'var(--mist)', maxWidth: '500px', marginBottom: '40px' }}
                    >
                        Pesquisa, design e código em um só profissional. Projeto interfaces que funcionam e construo os sistemas que as sustentam.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
                        style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center', pointerEvents: 'auto' }}
                    >
                        <Link href="/contact" className="theme-btn">
                            Iniciar um projeto <RiArrowRightLine size={16} style={{ display: 'inline', verticalAlign: 'middle', marginLeft: '6px' }} />
                        </Link>
                        <Link href="#trabalhos" className="theme-btn theme-btn--outline">
                            Ver trabalhos
                        </Link>
                    </motion.div>
                </div>

                {/* Scroll indicator */}
                <motion.div
                    style={{ position: 'absolute', bottom: '32px', left: '50%', transform: 'translateX(-50%)', color: 'var(--mist)', zIndex: 11 }}
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                >
                    <RiArrowDownLine size={20} />
                </motion.div>

                {/* Bottom fade */}
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '120px', background: 'linear-gradient(to bottom, transparent, #080810)', zIndex: 11, pointerEvents: 'none' }} />
            </div>

            {/* ── SERVIÇOS ── */}
            <section style={{ padding: '80px 0' }}>
                <div className="container">
                    <FadeIn>
                        <div className="section-title text-center" style={{ marginBottom: '48px' }}>
                            <p>O que eu faço</p>
                            <h2>Design. Código. Entrega.</h2>
                        </div>
                    </FadeIn>
                    <div className="row">
                        {SERVICES.map((s, i) => (
                            <div key={i} className="col-lg-4 col-md-6" style={{ marginBottom: '24px', display: 'flex' }}>
                                <FadeIn delay={i * 0.1} style={{ display: 'flex', width: '100%' }}>
                                    <SpotlightCard color="rgba(130,0,219,0.2)" size={200}
                                        style={{ ...BOX, width: '100%', display: 'flex', flexDirection: 'column' }}>
                                        <div style={{ color: 'var(--aurora)', marginBottom: '20px' }}>{s.icon}</div>
                                        <h4 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '12px', color: 'var(--moonlight)' }}>{s.title}</h4>
                                        <p style={{ fontSize: '15px', color: 'var(--mist)', lineHeight: 1.7, margin: 0 }}>{s.desc}</p>
                                    </SpotlightCard>
                                </FadeIn>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── DIFERENCIAIS ── */}
            <section style={{ paddingBottom: '80px' }}>
                <div className="container">
                    <FadeIn>
                        <div style={{ ...BOX, padding: '48px' }}>
                            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--aurora)', marginBottom: '8px' }}>Por que eu</p>
                            <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', marginBottom: '40px', color: 'var(--moonlight)' }}>
                                O profissional que você busca<br />raramente existe em uma pessoa.
                            </h2>
                            <div className="row">
                                {DIFFERENTIALS.map((d, i) => (
                                    <div key={i} className="col-lg-4 col-md-6" style={{ marginBottom: '24px' }}>
                                        <FadeIn delay={i * 0.1}>
                                            <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                                                <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'rgba(130,0,219,0.15)', border: '1px solid rgba(130,0,219,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--aurora)', flexShrink: 0 }}>{d.icon}</div>
                                                <div>
                                                    <h5 style={{ fontSize: '15px', fontWeight: 600, color: 'var(--moonlight)', marginBottom: '6px' }}>{d.title}</h5>
                                                    <p style={{ fontSize: '14px', color: 'var(--mist)', lineHeight: 1.6, margin: 0 }}>{d.desc}</p>
                                                </div>
                                            </div>
                                        </FadeIn>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* ── TRABALHOS ── */}
            <section id="trabalhos" style={{ paddingBottom: '80px' }}>
                <div className="container">
                    <FadeIn>
                        <div className="section-title text-center" style={{ marginBottom: '48px' }}>
                            <p>Portfólio</p>
                            <h2>Trabalhos selecionados</h2>
                        </div>
                    </FadeIn>
                    <div className="row">
                        {PROJECTS.map((p, i) => (
                            <div key={i} className="col-lg-4 col-md-6" style={{ marginBottom: '24px' }}>
                                <FadeIn delay={i * 0.1}>
                                    <SpotlightCard color="rgba(130,0,219,0.2)" size={220}
                                        style={{ border: '1px solid rgba(255,255,255,0.06)', borderRadius: '20px', background: 'rgba(20,20,32,1)', overflow: 'hidden' }}>
                                        <Link href={`/works/${p.slug}`} style={{ textDecoration: 'none', display: 'block' }}>
                                            <div style={{ position: 'relative', height: '200px', overflow: 'hidden' }}>
                                                <Image src={p.src} alt={p.title} fill style={{ objectFit: 'cover' }} sizes="400px" />
                                                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 50%, rgba(20,20,32,0.9) 100%)' }} />
                                            </div>
                                            <div style={{ padding: '24px' }}>
                                                <p style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--aurora)', marginBottom: '6px' }}>{p.tag}</p>
                                                <h4 style={{ fontSize: '18px', color: 'var(--moonlight)', fontWeight: 600, margin: 0 }}>{p.title}</h4>
                                            </div>
                                        </Link>
                                    </SpotlightCard>
                                </FadeIn>
                            </div>
                        ))}
                    </div>
                    <FadeIn delay={0.2}>
                        <div style={{ textAlign: 'center', marginTop: '16px' }}>
                            <Link href="/works" className="theme-btn theme-btn--outline">Ver todos os projetos</Link>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* ── PREÇOS ── */}
            <section style={{ paddingBottom: '80px' }}>
                <div className="container">
                    <FadeIn>
                        <div className="section-title text-center" style={{ marginBottom: '48px' }}>
                            <p>Investimento</p>
                            <h2>Claro. Justo. Sem surpresa.</h2>
                        </div>
                    </FadeIn>
                    <div className="row" style={{ alignItems: 'stretch' }}>
                        {PLANS.map((plan, i) => (
                            <div key={i} className="col-lg-4 col-md-6" style={{ marginBottom: '24px', display: 'flex' }}>
                                <FadeIn delay={i * 0.1} y={20} style={{ display: 'flex', width: '100%' }}>
                                    <SpotlightCard
                                        color={plan.highlight ? 'rgba(130,0,219,0.28)' : 'rgba(130,0,219,0.16)'}
                                        size={220}
                                        style={{
                                            width: '100%', display: 'flex', flexDirection: 'column',
                                            padding: '36px',
                                            border: plan.highlight ? '1px solid rgba(130,0,219,0.5)' : '1px solid rgba(255,255,255,0.06)',
                                            borderRadius: '20px',
                                            background: plan.highlight ? 'rgba(130,0,219,0.08)' : 'rgba(20,20,32,1)',
                                        }}
                                    >
                                        {plan.highlight && (
                                            <div style={{ alignSelf: 'flex-start', background: 'rgba(130,0,219,0.25)', border: '1px solid rgba(130,0,219,0.5)', borderRadius: '999px', padding: '4px 14px', marginBottom: '20px', fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--aurora)' }}>
                                                Mais popular
                                            </div>
                                        )}
                                        <p style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--aurora)', marginBottom: '8px' }}>{plan.name}</p>
                                        <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px', marginBottom: '8px' }}>
                                            <span style={{ fontFamily: 'var(--font-serif)', fontSize: '2.4rem', fontWeight: 700, color: 'var(--moonlight)' }}>{plan.price}</span>
                                            <span style={{ fontSize: '13px', color: 'var(--mist)' }}>{plan.period}</span>
                                        </div>
                                        <p style={{ fontSize: '14px', color: 'var(--mist)', lineHeight: 1.6, marginBottom: '24px' }}>{plan.desc}</p>
                                        <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 32px', display: 'flex', flexDirection: 'column', gap: '10px', flexGrow: 1 }}>
                                            {plan.features.map((f, j) => (
                                                <li key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '14px', color: 'var(--moonlight)' }}>
                                                    <RiCheckLine size={16} style={{ color: 'var(--aurora)', flexShrink: 0, marginTop: '2px' }} />
                                                    {f}
                                                </li>
                                            ))}
                                        </ul>
                                        <Link href="/contact" className={plan.highlight ? 'theme-btn' : 'theme-btn theme-btn--outline'} style={{ textAlign: 'center', display: 'block' }}>
                                            {plan.cta}
                                        </Link>
                                    </SpotlightCard>
                                </FadeIn>
                            </div>
                        ))}
                    </div>
                    <FadeIn delay={0.2}>
                        <p style={{ textAlign: 'center', fontSize: '14px', color: 'var(--mist)', marginTop: '8px' }}>
                            Precisa de algo diferente? <Link href="/contact" style={{ color: 'var(--aurora)', textDecoration: 'none' }}>Vamos conversar.</Link>
                        </p>
                    </FadeIn>
                </div>
            </section>

            {/* ── DEPOIMENTOS ── */}
            <section style={{ paddingBottom: '80px' }}>
                <div className="container">
                    <FadeIn>
                        <div className="section-title text-center" style={{ marginBottom: '48px' }}>
                            <p>Clientes</p>
                            <h2>Quem já trabalhou sabe.</h2>
                        </div>
                    </FadeIn>
                    <div className="row">
                        {TESTIMONIALS.map((t, i) => (
                            <div key={i} className="col-lg-4 col-md-6" style={{ marginBottom: '24px', display: 'flex' }}>
                                <FadeIn delay={i * 0.1} style={{ display: 'flex', width: '100%' }}>
                                    <SpotlightCard color="rgba(130,0,219,0.18)" size={180}
                                        style={{ ...BOX, width: '100%', display: 'flex', flexDirection: 'column' }}>
                                        <div style={{ display: 'flex', gap: '3px', marginBottom: '20px' }}>
                                            {[...Array(5)].map((_, j) => <RiStarFill key={j} size={14} style={{ color: 'var(--aurora)' }} />)}
                                        </div>
                                        <p style={{ fontSize: '15px', lineHeight: 1.7, color: 'var(--moonlight)', marginBottom: '24px', fontStyle: 'italic', flexGrow: 1 }}>"{t.text}"</p>
                                        <div>
                                            <p style={{ fontSize: '14px', fontWeight: 600, color: 'var(--moonlight)', marginBottom: '2px' }}>{t.name}</p>
                                            <p style={{ fontSize: '12px', color: 'var(--mist)', margin: 0 }}>{t.role}</p>
                                        </div>
                                    </SpotlightCard>
                                </FadeIn>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CTA FINAL ── */}
            <section style={{ paddingBottom: '100px' }}>
                <div className="container">
                    <FadeIn>
                        <SpotlightCard color="rgba(130,0,219,0.22)" size={380}
                            style={{ textAlign: 'center', padding: 'clamp(48px, 6vw, 80px) 40px', border: '1px solid rgba(130,0,219,0.2)', borderRadius: '24px', background: 'rgba(20,20,32,1)', overflow: 'hidden', position: 'relative' }}>
                            <div style={{ position: 'absolute', top: '-80px', left: '50%', transform: 'translateX(-50%)', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(130,0,219,0.12) 0%, transparent 70%)', pointerEvents: 'none' }} />
                            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--aurora)', marginBottom: '16px' }}>Próximos passos</p>
                            <h2 style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 'clamp(1.8rem, 4vw, 3rem)', color: 'var(--moonlight)', marginBottom: '16px', lineHeight: 1.2 }}>
                                Seu produto merece<br />ser bem feito.
                            </h2>
                            <p style={{ fontSize: '16px', color: 'var(--mist)', maxWidth: '440px', margin: '0 auto 36px', lineHeight: 1.7 }}>
                                Me conta o que você está construindo. Em 24h tenho uma proposta.
                            </p>
                            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
                                <Link href="/contact" className="theme-btn">
                                    Enviar mensagem <RiMailLine size={16} style={{ display: 'inline', verticalAlign: 'middle', marginLeft: '6px' }} />
                                </Link>
                                <a href="https://wa.me/5521969018110" target="_blank" rel="noopener noreferrer" className="theme-btn theme-btn--outline">
                                    WhatsApp <RiWhatsappLine size={16} style={{ display: 'inline', verticalAlign: 'middle', marginLeft: '6px' }} />
                                </a>
                            </div>
                        </SpotlightCard>
                    </FadeIn>
                </div>
            </section>
        </div>
    )
}
