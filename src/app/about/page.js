'use client'
import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import gsap from 'gsap'
import { getGalleryProjects } from '@/components/gallery/SphereGallery'
import { useLanguage } from '@/context/LanguageContext'

const STRIP_COUNT = 5

export default function AboutPage() {
    const { t } = useLanguage()
    const [section, setSection] = useState('profile')
    const profileRef = useRef(null)
    const approachRef = useRef(null)
    const heroRef = useRef(null)

    const strip = getGalleryProjects().slice(0, STRIP_COUNT)

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

    const scrollTo = (ref) => ref.current.scrollIntoView({ behavior: 'smooth' })

    const experience = [
        { period: t.resume.year1, role: t.resume.title1, org: t.resume.org1 },
        { period: t.resume.yearUniverso, role: t.resume.titleUniverso, org: t.resume.orgUniverso },
        { period: t.resume.year2, role: t.resume.title2, org: t.resume.org2 },
        { period: t.resume.year3, role: t.resume.title3, org: t.resume.org3 },
        { period: t.resume.yearZion, role: t.resume.titleZion, org: t.resume.orgZion },
    ]

    const education = [
        { period: t.resume.eduYear1, role: t.resume.eduTitle1, org: t.resume.eduOrg1 },
        { period: t.resume.eduYear2, role: t.resume.eduTitle2, org: t.resume.eduOrg2 },
        { period: t.resume.eduYear3, role: t.resume.eduTitle3, org: t.resume.eduOrg3 },
    ]

    const tools = [
        'Figma', 'Design Systems', 'UX Research', 'Prototyping',
        'React', 'Next.js', 'HTML/CSS/JS', 'Tailwind',
        'GSAP', 'Three.js', 'Claude API', 'AI-Driven Design',
    ]

    return (
        <div className="ph-page">
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
                            <img src={project.src} alt={project.title} />
                        </Link>
                    ))}
                </div>

                <div className="ph-container">
                    <div className="ph-about-grid">
                        <p className="ph-eyebrow" style={{ marginTop: '8px' }}>Pedro Tamburro</p>
                        <div>
                            <p className="ph-statement">{t.aboutPage.statement}</p>
                            <p className="ph-body" style={{ marginTop: '28px' }}>{t.aboutPage.sub}</p>
                        </div>
                    </div>

                    <div className="ph-stats">
                        {t.aboutPage.stats.map(stat => (
                            <div key={stat.label} className="ph-stat">
                                <p className="ph-stat-value">{stat.value}</p>
                                <p className="ph-stat-label">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Approach ── */}
            <section ref={approachRef} style={{ marginTop: '110px' }}>
                <div className="ph-container ph-about-section" style={{ borderTop: 'none' }}>
                    <p className="ph-eyebrow">{t.aboutPage.approachEyebrow}</p>
                    <h2 className="ph-display ph-display--section" style={{ marginBottom: '64px' }}>
                        {t.aboutPage.approachHeadline.join(' ')}
                    </h2>
                    <div className="ph-about-grid" style={{ marginBottom: '80px' }}>
                        <div />
                        <p className="ph-statement" style={{ fontSize: 'clamp(20px, 2.2vw, 30px)' }}>
                            {t.aboutPage.approachIntro}
                        </p>
                    </div>

                    {t.aboutPage.services.map((service, i) => (
                        <div key={service.title} className="ph-service-row">
                            <span className="ph-service-index">{String(i + 1).padStart(2, '0')}</span>
                            <h3 className="ph-service-title">{service.title}</h3>
                            <p className="ph-body" style={{ margin: 0 }}>{service.description}</p>
                        </div>
                    ))}

                    <div style={{ marginTop: '90px' }}>
                        <p className="ph-eyebrow">{t.aboutPage.toolsLabel}</p>
                        <div className="ph-chips">
                            {tools.map(tool => (
                                <span key={tool} className="ph-tag" style={{ fontSize: '11px', padding: '8px 16px' }}>
                                    {tool}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="ph-container ph-about-section">
                    <p className="ph-eyebrow">{t.aboutPage.experienceLabel}</p>
                    <div style={{ marginTop: '40px' }}>
                        {experience.map(item => (
                            <div key={item.role + item.org} className="ph-xp-row">
                                <span className="ph-xp-period">{item.period}</span>
                                <h3 className="ph-xp-role">{item.role}</h3>
                                <span className="ph-xp-org">{item.org}</span>
                            </div>
                        ))}
                    </div>

                    <p className="ph-eyebrow" style={{ marginTop: '80px' }}>{t.aboutPage.educationLabel}</p>
                    <div style={{ marginTop: '40px' }}>
                        {education.map(item => (
                            <div key={item.role} className="ph-xp-row">
                                <span className="ph-xp-period">{item.period}</span>
                                <h3 className="ph-xp-role">{item.role}</h3>
                                <span className="ph-xp-org">{item.org}</span>
                            </div>
                        ))}
                    </div>
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
