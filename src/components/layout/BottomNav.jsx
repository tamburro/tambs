'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useLanguage } from '@/context/LanguageContext'

const BottomNav = () => {
    const pathname = usePathname()
    const { t } = useLanguage()

    if (pathname.startsWith('/works') || pathname.startsWith('/universobservavel')) return null

    const items = [
        { href: '/', label: t.nav.work },
        { href: '/about', label: t.nav.about },
        { href: '/contact', label: t.nav.contact },
    ]

    return (
        <nav className="ph-nav">
            {items.map(({ href, label }) => {
                const active = href === '/' ? pathname === '/' : pathname.startsWith(href)
                return (
                    <Link key={href} href={href} className={`ph-nav-item ${active ? 'is-active' : ''}`}>
                        {label}
                    </Link>
                )
            })}
        </nav>
    )
}

export default BottomNav
