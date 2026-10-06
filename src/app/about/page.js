'use client'
import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { coverUrl, getGalleryProjects } from '@/components/gallery/SphereGallery'
import { useLanguage } from '@/context/LanguageContext'

const STRIP_COUNT = 5

// logo files are /images/client-logos/partner1.png … partner9.png, in this order
const BRANDS = ['O Globo', 'Globo+', 'Clube O Globo', 'Extra', 'Valor One', 'Valor Econômico', 'YDUQS', 'EnsineMe', 'Estácio']

// full-width statement with the label sitting in the first-line indent
// only the first sentence is set big; the rest follows as body copy
function Lede({ text, small }) {
    const cut = text.indexOf('. ') + 1 || text.length
    const rest = text.slice(cut).trim()
    return (
        <div className={`ph-lede ${small ? 'ph-lede--small' : ''}`}>
            <p className="ph-statement">
                {text.slice(0, cut).split(' ').map((word, i) => (
                    <React.Fragment key={i}><span className="ph-word">{word}</span>{' '}</React.Fragment>
                ))}
            </p>
            {rest && <p className="ph-body ph-lede-rest">{rest}</p>}
        </div>
    )
}

// rows that open to show their description, one at a time; rows without one stay plain
function XpList({ items, initial = null }) {
    const [open, setOpen] = useState(initial)
    return items.map((item, i) => {
        const cells = (
            <>
                <span className="ph-xp-period">{item.period}</span>
                <h3 className="ph-xp-role">{item.role}</h3>
                <span className="ph-xp-org">{item.org}{item.text && <i className="ph-xp-plus" />}</span>
            </>
        )
        if (!item.text) return <div key={item.role + item.org} className="ph-xp"><div className="ph-xp-row">{cells}</div></div>
        return (
            <div key={item.role + item.org} className={`ph-xp ${open === i ? 'is-open' : ''}`}>
                <button className="ph-xp-row" aria-expanded={open === i} onClick={() => setOpen(open === i ? null : i)}>
                    {cells}
                </button>
                <div className="ph-xp-panel">
                    <div className="ph-xp-panel-inner">
                        <div>{item.text.map(line => <p key={line}>{line}</p>)}</div>
                    </div>
                </div>
            </div>
        )
    })
}

// label in the left margin, content on the page's single column axis
function Row({ label, lede, children }) {
    return (
        <div className={`ph-row ${lede ? 'ph-row--lede' : ''}`}>
            {label ? <p className="ph-eyebrow">{label}</p> : <span />}
            <div>{children}</div>
        </div>
    )
}

export default function AboutPage() {
    const { t, lang } = useLanguage()
    const pageRef = useRef(null)
    const [section, setSection] = useState('profile')
    const profileRef = useRef(null)
    const approachRef = useRef(null)
    const heroRef = useRef(null)

    const projects = getGalleryProjects()
    const strip = projects.slice(0, STRIP_COUNT)
    const proof = t.aiWorkflow.proof
        .map(item => ({ ...item, project: projects.find(p => p.slug === item.slug) }))
        .filter(item => item.project)

    useEffect(() => {
        gsap.fromTo(heroRef.current.querySelectorAll('.ph-reveal'),
            { opacity: 0, y: 36 },
            { opacity: 1, y: 0, duration: 1, stagger: 0.08, ease: 'power3.out', delay: 0.15 })
    }, [])

    useEffect(() => {
        const onScroll = () => {
            const approachTop = approachRef.current.getBoundingClientRect().top
            setSection(approachTop < window.innerHeight * 0.4 ? 'approach' : 'profile')
        }
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    useEffect(() => {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
        gsap.registerPlugin(ScrollTrigger)
        const ctx = gsap.context(() => {
            // statements light up word by word as they are read
            gsap.utils.toArray('.ph-lede').forEach(lede => {
                gsap.fromTo(lede.querySelectorAll('.ph-word'),
                    { opacity: 0.14 },
                    {
                        opacity: 1, ease: 'none', stagger: 0.06,
                        scrollTrigger: { trigger: lede, start: 'top 82%', end: 'bottom 55%', scrub: 0.6 },
                    })
            })

            gsap.utils.toArray('.ph-display--sub').forEach(title => {
                gsap.from(title, {
                    opacity: 0, y: 60, duration: 1.1, ease: 'power3.out',
                    scrollTrigger: { trigger: title, start: 'top 88%', once: true },
                })
            })

            gsap.to('.ph-brands-track', { xPercent: -50, duration: 40, ease: 'none', repeat: -1 })

            const rise = '.ph-lede-rest, .ph-lede-sub, .ph-stat, .ph-service-row, .ph-step, .ph-proof-card, .ph-xp-row, .ph-ai-rules li, .ph-chips'
            gsap.set(rise, { opacity: 0, y: 32 })
            ScrollTrigger.batch(rise, {
                start: 'top 90%',
                once: true,
                onEnter: els => gsap.to(els, { opacity: 1, y: 0, duration: 0.9, stagger: 0.07, ease: 'power3.out' }),
            })
        }, pageRef)
        return () => ctx.revert()
    }, [lang])

    const scrollTo = (ref) => ref.current.scrollIntoView({ behavior: 'smooth' })

    const experience = [
        { period: t.resume.year1, role: t.resume.title1, org: t.resume.org1, text: t.resume.desc1 },
        { period: t.resume.yearUniverso, role: t.resume.titleUniverso, org: t.resume.orgUniverso, text: t.resume.descUniverso },
        { period: t.resume.year2, role: t.resume.title2, org: t.resume.org2, text: t.resume.desc2 },
        { period: t.resume.year3, role: t.resume.title3, org: t.resume.org3, text: t.resume.desc3 },
        { period: t.resume.yearZion, role: t.resume.titleZion, org: t.resume.orgZion, text: t.resume.descZion },
    ]

    const education = [
        { period: t.resume.eduYear1, role: t.resume.eduTitle1, org: t.resume.eduOrg1, text: t.resume.eduDesc1 },
        { period: t.resume.eduYear2, role: t.resume.eduTitle2, org: t.resume.eduOrg2, text: t.resume.eduDesc2 },
        { period: t.resume.eduYear3, role: t.resume.eduTitle3, org: t.resume.eduOrg3, text: t.resume.eduDesc3 },
    ]

    const tools = [
        'Figma', 'Design Systems', 'UX Research', 'Prototyping',
        'React', 'Next.js', 'HTML/CSS/JS', 'Tailwind',
        'GSAP', 'Three.js', 'Claude API', 'AI-Driven Design',
    ]

    return (
        <div className="ph-page" ref={pageRef}>
            {/* section toggle */}
            <div className="ph-about-toggle">
                <button
                    className={section === 'profile' ? 'is-active' : ''}
                    onClick={() => scrollTo(profileRef)}
                >
                    {t.aboutPage.toggleProfile}
                </button>
                <button
                    className={section === 'approach' ? 'is-active' : ''}
                    onClick={() => scrollTo(approachRef)}
                >
                    {t.aboutPage.toggleApproach}
                </button>
            </div>

            {/* ── Profile ── */}
            <section ref={profileRef}>
                <div className="ph-container ph-about-hero" ref={heroRef}>
                    <p className="ph-eyebrow ph-reveal">{t.aboutPage.eyebrow}</p>
                    <h1 className="ph-display ph-display--hero ph-reveal">
                        {t.aboutPage.headline.map(line => (
                            <span key={line} style={{ display: 'block' }}>{line}</span>
                        ))}
                    </h1>
                </div>

                <div className="ph-strip">
                    {strip.map(project => (
                        <Link key={project.id} href={`/works/${project.slug}`} className="ph-strip-item">
                            <img src={coverUrl(project.src, 640)} alt={project.title} />
                        </Link>
                    ))}
                </div>

                <div className="ph-container ph-rows">
                    <Row label="Pedro Tamburro" lede>
                        <Lede text={t.aboutPage.statement} />
                        <p className="ph-body ph-lede-sub">{t.aboutPage.sub}</p>
                    </Row>

                    <Row>
                        <div className="ph-stats">
                            {t.aboutPage.stats.map(stat => (
                                <div key={stat.label} className="ph-stat">
                                    <p className="ph-stat-value">{stat.value}</p>
                                    <p className="ph-stat-label">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </Row>

                    <Row label={t.aboutPage.brandsLabel}>
                        <div className="ph-brands">
                            <div className="ph-brands-track">
                                {[0, 1].map(copy => BRANDS.map((name, i) => (
                                    <img
                                        key={`${copy}-${name}`}
                                        src={`/images/client-logos/partner${i + 1}.png`}
                                        alt={copy ? '' : name}
                                        aria-hidden={copy === 1}
                                    />
                                )))}
                            </div>
                        </div>
                    </Row>
                </div>
            </section>

            {/* ── Approach ── */}
            <section ref={approachRef}>
                <div className="ph-container ph-about-section ph-rows">
                    <Row label={t.aboutPage.approachEyebrow}>
                        <h2 className="ph-display ph-display--sub">
                            {t.aboutPage.approachHeadline.join(' ')}
                        </h2>
                        <Lede text={t.aboutPage.approachIntro} small />
                    </Row>

                    <Row>
                        {t.aboutPage.services.map((service, i) => (
                            <div key={service.title} className="ph-service-row">
                                <span className="ph-service-index">{String(i + 1).padStart(2, '0')}</span>
                                <h3 className="ph-service-title">{service.title}</h3>
                                <p className="ph-body" style={{ margin: 0 }}>{service.description}</p>
                            </div>
                        ))}
                    </Row>

                    <Row label={t.aboutPage.toolsLabel}>
                        <div className="ph-chips">
                            {tools.map(tool => (
                                <span key={tool} className="ph-tag" style={{ fontSize: '11px', padding: '8px 16px' }}>
                                    {tool}
                                </span>
                            ))}
                        </div>
                    </Row>
                </div>

                <div className="ph-container ph-about-section ph-rows">
                    <Row label={t.aiWorkflow.label}>
                        <h2 className="ph-display ph-display--sub">{t.aiWorkflow.title}</h2>
                        <Lede text={t.aiWorkflow.sub} small />
                    </Row>

                    <Row>
                        <div className="ph-stats">
                            {t.aiWorkflow.stats.map(stat => (
                                <div key={stat.label} className="ph-stat">
                                    <p className="ph-stat-value">{stat.value}</p>
                                    <p className="ph-stat-label">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </Row>

                    <Row>
                        <div className="ph-steps">
                            {t.aiWorkflow.steps.map((step, i) => (
                                <div key={step.title} className="ph-step">
                                    <span className="ph-service-index">{String(i + 1).padStart(2, '0')}</span>
                                    <h3 className="ph-step-title">{step.title}</h3>
                                    <p className="ph-step-text">{step.description}</p>
                                </div>
                            ))}
                        </div>
                    </Row>

                    <Row label={t.aiWorkflow.guardrailsLabel}>
                        <ul className="ph-ai-rules">
                            {t.aiWorkflow.guardrails.map(rule => <li key={rule}>{rule}</li>)}
                        </ul>
                    </Row>

                    <Row label={t.aiWorkflow.toolsLabel}>
                        <div className="ph-chips">
                            {t.aiWorkflow.tools.map(tool => (
                                <span key={tool} className="ph-tag" style={{ fontSize: '11px', padding: '8px 16px' }}>
                                    {tool}
                                </span>
                            ))}
                        </div>
                    </Row>

                    <div>
                        <p className="ph-eyebrow">{t.aiWorkflow.proofLabel}</p>
                        <div className="ph-proof">
                            {proof.map(item => (
                                <Link key={item.slug} href={`/works/${item.slug}`} className="ph-proof-card">
                                    <div className="ph-strip-item">
                                        <img src={coverUrl(item.project.src, 640)} alt={item.title} />
                                    </div>
                                    <h3 className="ph-proof-name">{item.title}</h3>
                                    <p className="ph-proof-note">{item.note}</p>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="ph-container ph-about-section ph-rows">
                    <Row label={t.aboutPage.experienceLabel}>
                        <XpList items={experience} initial={0} />
                    </Row>

                    <Row label={t.aboutPage.educationLabel}>
                        <XpList items={education} />
                    </Row>
                </div>
            </section>

            {/* ── Footer ── */}
            <footer className="ph-footer">
                <div className="ph-container">
                    <Link href="/contact" className="ph-footer-cta">
                        <span className="ph-display ph-display--hero">{t.footer.cta}</span>
                    </Link>
                    <div className="ph-footer-meta">
                        <span>© {new Date().getFullYear()} Pedro Tamburro. {t.footer.rights}</span>
                        <a href="mailto:pedropaulotjr@gmail.com">pedropaulotjr@gmail.com</a>
                        <span>{t.footer.crafted}</span>
                    </div>
                </div>
            </footer>
        </div>
    )
}
