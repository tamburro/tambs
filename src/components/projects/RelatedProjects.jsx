'use client'
import Link from 'next/link'
import Image from 'next/image'
import { projectsData } from '@/utlits/fackData/projectData'
import { useLanguage } from '@/context/LanguageContext'

export default function RelatedProjects({ project }) {
    const { t } = useLanguage()
    const tags = project.tags || []

    const related = projectsData
        .filter(p => p.id !== project.id)
        .map(p => ({ p, shared: (p.tags || []).filter(tag => tags.includes(tag)).length }))
        .sort((a, b) => b.shared - a.shared)
        .slice(0, 3)
        .map(({ p }) => p)

    return (
        <section className="container ph-related">
            <h2 className="ph-statement ph-related-title">{t.project.related}</h2>
            <div className="ph-related-grid">
                {related.map(p => (
                    <Link key={p.id} href={`/works/${p.slug}`} className="ph-related-card">
                        <div className="ph-related-thumb">
                            <Image src={p.src} alt={p.title} fill sizes="(max-width: 767px) 100vw, 33vw" />
                        </div>
                        <div className="ph-related-meta">
                            <span className="ph-related-name">{p.title}</span>
                            <span>{p.year}</span>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    )
}
