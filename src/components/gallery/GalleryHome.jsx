'use client'
import React, { useEffect, useMemo, useState } from 'react'
import { RiGridFill, RiListUnordered } from '@remixicon/react'
import SphereGallery, { getGalleryProjects } from './SphereGallery'
import WorkList from './WorkList'
import { useLanguage } from '@/context/LanguageContext'

export default function GalleryHome() {
    const { t } = useLanguage()
    const [view, setView] = useState('sphere')
    const [filter, setFilter] = useState(null)
    const [filterOpen, setFilterOpen] = useState(false)

    const projects = useMemo(() => getGalleryProjects(), [])
    const tags = useMemo(() => {
        const counts = new Map()
        projects.forEach(p => (p.tags || []).forEach(tag => counts.set(tag, (counts.get(tag) || 0) + 1)))
        return [...counts.entries()].sort((x, y) => y[1] - x[1])
    }, [projects])

    useEffect(() => {
        if (!filterOpen) return
        const onKey = (e) => { if (e.key === 'Escape') setFilterOpen(false) }
        window.addEventListener('keydown', onKey)
        return () => window.removeEventListener('keydown', onKey)
    }, [filterOpen])

    const selectFilter = (tag) => {
        setFilter(tag)
        setFilterOpen(false)
    }

    return (
        <>
            {view === 'sphere'
                ? <SphereGallery activeFilter={filter} />
                : <WorkList projects={projects} activeFilter={filter} />}

            {/* view toggle — bottom left */}
            <div className="ph-gallery-corner ph-gallery-corner--left">
                <div className="ph-view-toggle">
                    <button
                        className={view === 'sphere' ? 'is-active' : ''}
                        onClick={() => setView('sphere')}
                        aria-label={t.gallery.gridView}
                    >
                        <RiGridFill size={16} />
                    </button>
                    <button
                        className={view === 'list' ? 'is-active' : ''}
                        onClick={() => setView('list')}
                        aria-label={t.gallery.listView}
                    >
                        <RiListUnordered size={16} />
                    </button>
                </div>
            </div>

            {/* filter — bottom right */}
            <div className="ph-gallery-corner ph-gallery-corner--right">
                <button
                    className={`ph-filter-btn ${filterOpen ? 'is-open' : ''}`}
                    onClick={() => setFilterOpen(open => !open)}
                >
                    {filterOpen ? t.gallery.close : filter || t.gallery.filter}
                </button>
            </div>

            <div
                className={`ph-filter-overlay ${filterOpen ? 'is-open' : ''}`}
                inert={!filterOpen}
                onClick={() => setFilterOpen(false)}
            >
                <div className="ph-filter-list">
                    {[[null, projects.length], ...tags].map(([tag, count], i) => (
                        <button
                            key={tag || 'all'}
                            className={`ph-filter-option ${filter === tag ? 'is-active' : ''}`}
                            style={{ '--i': i }}
                            onClick={() => selectFilter(tag)}
                        >
                            {tag || t.gallery.all} <span>[{count}]</span>
                        </button>
                    ))}
                </div>
            </div>
        </>
    )
}
