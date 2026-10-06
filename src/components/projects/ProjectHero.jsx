'use client'
import { useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import gsap from 'gsap'
import { RiArrowRightUpLine } from '@remixicon/react'
import { useLanguage } from '@/context/LanguageContext'

// relative luminance (WCAG) of a #rrggbb color
export function luminance(hex) {
    const n = parseInt(hex.slice(1), 16)
    const [r, g, b] = [n >> 16, (n >> 8) & 255, n & 255].map(v => {
        v /= 255
        return v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4
    })
    return 0.2126 * r + 0.7152 * g + 0.0722 * b
}

// ink or paper, whichever reads better on the given background
const readableOn = (hex) => luminance(hex) > 0.22 ? '#161616' : '#FAFAFA'

export default function ProjectHero({ project }) {
    const { t, lang } = useLanguage()
    const pick = (pt, en) => lang === 'en' && en ? en : pt

    const accent = project.accentColor
    const fg = accent && readableOn(accent)
    const style = accent ? { '--case-bg': accent, '--case-fg': fg } : undefined
    const cover = project.pageSrc || project.src
    const heroRef = useRef(null)
    const videoRef = useRef(null)

    // the page arrives on the project colour; its content rises in after
    useEffect(() => {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
        const ctx = gsap.context(() => {
            gsap.from('.ph-case-rise', { opacity: 0, y: 44, duration: 1, stagger: 0.09, ease: 'power3.out', delay: 0.1 })
        }, heroRef)
        return () => ctx.revert()
    }, [project.slug])

    // the loop only downloads and plays while it is on screen
    useEffect(() => {
        const video = videoRef.current
        if (!video || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
        const io = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) video.play().catch(() => {})
            else video.pause()
        }, { threshold: 0.25 })
        io.observe(video)
        return () => io.disconnect()
    }, [project.video])

    const facts = [
        [t.project.year, pick(project.year, project.year_en)],
        [t.project.role, pick(project.role, project.role_en)],
        [t.project.duration, pick(project.timeline, project.timeline_en)],
        [t.project.team, pick(project.team, project.team_en)],
    ].filter(([, value]) => value)

    const links = [
        ...(project.prototypeLinks?.length > 0
            ? project.prototypeLinks.map(link => [pick(link.label, link.label_en), link.url])
            : project.prototypeLink ? [[t.project.prototype, project.prototypeLink]] : []),
        ...(project.liveDemoLink ? [[t.project.liveDemo, project.liveDemoLink]] : []),
    ]

    const description = pick(project.description, project.description_en)

    return (
        <>
            <header className={`ph-case-hero ${fg === '#161616' ? 'ph-case-hero--light' : ''}`} style={style} ref={heroRef}>
                <div className="container">
                    <h1
                        className="ph-display ph-case-title ph-case-rise"
                        style={{ '--ph-title-chars': Math.max(...project.title.split(/\s+/).map((w) => w.length)) }}
                    >
                        {project.title}
                    </h1>

                    <div className="ph-case-bar ph-case-rise">
                        <div className="ph-case-bar-group">
                            <span className="ph-case-bar-label">{project.client || 'Projeto Pessoal'}</span>
                            {(project.tags || []).map(tag => <span key={tag} className="ph-case-chip">{tag}</span>)}
                        </div>
                        <div className="ph-case-bar-group">
                            {links.map(([label, url]) => (
                                <Link key={url} href={url} target="_blank" rel="noopener noreferrer" className="ph-case-live">
                                    {label} <span><RiArrowRightUpLine size={12} /></span>
                                </Link>
                            ))}
                        </div>
                    </div>

                    {cover && (
                        <div className="ph-case-cover ph-case-rise">
                            <Image
                                src={cover}
                                alt={`Imagem principal do projeto ${project.title}`}
                                width={1920}
                                height={1249}
                                sizes="(max-width: 1400px) 100vw, 1320px"
                                style={{ width: '100%', height: 'auto', display: 'block' }}
                                priority
                            />
                        </div>
                    )}

                    {project.tagline && (
                        <p className="ph-statement ph-case-statement">{pick(project.tagline, project.tagline_en)}</p>
                    )}
                </div>
            </header>

            <div className="container ph-case-about">
                {description && (
                    <div>
                        <p className="ph-eyebrow">{t.project.overview}</p>
                        <p className="ph-case-about-text">{description}</p>
                    </div>
                )}
                <div>
                    <p className="ph-eyebrow">{t.project.sheet}</p>
                    <dl className="ph-case-facts">
                        {facts.map(([label, value]) => (
                            <div key={label}>
                                <dt>{label}</dt>
                                <dd>{value}</dd>
                            </div>
                        ))}
                        {project.tools?.length > 0 && (
                            <div>
                                <dt>{t.project.tools}</dt>
                                <dd className="ph-case-facts-chips">
                                    {project.tools.map(tool => <span key={tool} className="ph-tag">{tool}</span>)}
                                </dd>
                            </div>
                        )}
                    </dl>
                </div>
            </div>

            {project.video && (
                <div className="container ph-case-video">
                    <p className="ph-eyebrow">{t.project.inMotion}</p>
                    <video
                        ref={videoRef}
                        src={project.video}
                        poster={project.video.replace('.mp4', '.jpg')}
                        muted
                        loop
                        playsInline
                        preload="none"
                        aria-label={`${project.title} — ${t.project.inMotion}`}
                    />
                </div>
            )}
        </>
    )
}
