'use client'
import Link from 'next/link'
import Image from 'next/image'
import { RiExternalLinkLine } from '@remixicon/react'
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
    const style = accent ? { '--case-bg': accent, '--case-fg': readableOn(accent) } : undefined
    const cover = project.pageSrc || project.src

    const meta = [
        [t.project.year, pick(project.year, project.year_en)],
        [t.project.role, pick(project.role, project.role_en)],
        [t.project.duration, pick(project.timeline, project.timeline_en)],
        [t.project.team, pick(project.team, project.team_en)],
        [t.project.tools, project.tools?.join(' · ')],
    ].filter(([, value]) => value)

    const links = [
        ...(project.prototypeLinks?.length > 0
            ? project.prototypeLinks.map(link => [pick(link.label, link.label_en), link.url])
            : project.prototypeLink ? [[t.project.prototype, project.prototypeLink]] : []),
        ...(project.liveDemoLink ? [[t.project.liveDemo, project.liveDemoLink]] : []),
    ]

    return (
        <>
            <header className="ph-case-hero" style={style}>
                <div className="container">
                    <p className="ph-case-eyebrow">{project.category} | {project.client || 'Projeto Pessoal'}</p>
                    <h1 className="ph-display ph-case-title">{project.title}</h1>

                    <div className="ph-case-meta">
                        {meta.map(([label, value]) => (
                            <div key={label}>
                                <p className="ph-case-meta-label">{label}</p>
                                <p className="ph-case-meta-value">{value}</p>
                            </div>
                        ))}
                        {links.length > 0 && (
                            <div>
                                <p className="ph-case-meta-label">{t.project.viewProject}</p>
                                <div className="ph-case-links">
                                    {links.map(([label, url]) => (
                                        <Link key={url} href={url} target="_blank" rel="noopener noreferrer" className="ph-case-link">
                                            {label} <RiExternalLinkLine size={12} />
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {cover && (
                        <div className="ph-case-cover">
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
                </div>
            </header>

            {project.tagline && (
                <div className="container">
                    <p className="ph-statement ph-case-statement">{pick(project.tagline, project.tagline_en)}</p>
                </div>
            )}
        </>
    )
}
