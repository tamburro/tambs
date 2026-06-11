'use client'
import React, { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import gsap from 'gsap'
import { useLanguage } from '@/context/LanguageContext'

export default function WorkList({ projects, activeFilter }) {
    const { t } = useLanguage()
    const router = useRouter()
    const rootRef = useRef(null)
    const previewRef = useRef(null)
    const overlayRef = useRef(null)
    const [previewSrc, setPreviewSrc] = useState(null)

    const visible = activeFilter
        ? projects.filter(p => p.category === activeFilter || (p.tags || []).includes(activeFilter))
        : projects

    useEffect(() => {
        const rows = rootRef.current.querySelectorAll('.ph-list-row')
        gsap.fromTo(rows,
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.8, stagger: 0.05, ease: 'power3.out' })
    }, [activeFilter])

    useEffect(() => {
        const onMove = (e) => {
            if (previewRef.current) {
                previewRef.current.style.transform =
                    `translate(${e.clientX + 24}px, ${e.clientY - 100}px)`
            }
        }
        window.addEventListener('pointermove', onMove)
        return () => window.removeEventListener('pointermove', onMove)
    }, [])

    const open = (project) => {
        gsap.to(overlayRef.current, {
            opacity: 1,
            duration: 0.5,
            ease: 'power2.inOut',
            onComplete: () => router.push(`/works/${project.slug}`),
        })
    }

    return (
        <div className="ph-list" ref={rootRef}>
            <div className="ph-list-head">
                <span>{t.gallery.works} [{visible.length}]</span>
                <span>{t.gallery.year}</span>
            </div>

            {visible.map((project, i) => (
                <button
                    key={project.id}
                    className="ph-list-row"
                    onClick={() => open(project)}
                    onPointerEnter={() => setPreviewSrc(project.src)}
                    onPointerLeave={() => setPreviewSrc(null)}
                >
                    <span className="ph-list-index">{String(i + 1).padStart(2, '0')}</span>
                    <h2 className="ph-list-title">{project.title}</h2>
                    <span className="ph-list-tags">
                        {(project.tags || []).slice(0, 2).map(tag => (
                            <span key={tag} className="ph-tag">{tag}</span>
                        ))}
                    </span>
                    <span className="ph-list-year">{project.year}</span>
                </button>
            ))}

            <div ref={previewRef} className={`ph-list-preview ${previewSrc ? 'is-visible' : ''}`}>
                {previewSrc && <img src={previewSrc} alt="" />}
            </div>

            <div
                ref={overlayRef}
                style={{ position: 'fixed', inset: 0, background: 'var(--ph-ink)', opacity: 0, pointerEvents: 'none', zIndex: 96 }}
            />
        </div>
    )
}
