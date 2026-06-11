'use client'
import React, { useMemo, useState } from 'react'
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
    const categories = useMemo(() => {
        const counts = new Map()
        projects.forEach(p => {
            if (p.category) counts.set(p.category, (counts.get(p.category) || 0) + 1)
        })
        return [...counts.entries()]
    }, [projects])

    const selectFilter = (cat) => {
        setFilter(cat)
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
                    {filter || t.gallery.filter}
                </button>
            </div>

            <div className={`ph-filter-panel ${filterOpen ? 'is-open' : ''}`}>
                <button
                    className={`ph-filter-chip ${!filter ? 'is-active' : ''}`}
                    onClick={() => selectFilter(null)}
                >
                    {t.gallery.all} <span>[{projects.length}]</span>
                </button>
                {categories.map(([cat, count]) => (
                    <button
                        key={cat}
                        className={`ph-filter-chip ${filter === cat ? 'is-active' : ''}`}
                        onClick={() => selectFilter(cat)}
                    >
                        {cat} <span>[{count}]</span>
                    </button>
                ))}
            </div>
        </>
    )
}
