'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useLanguage } from '@/context/LanguageContext'

function formatClock(date, timeZone) {
    return new Intl.DateTimeFormat('en-GB', {
        hour: '2-digit', minute: '2-digit', hour12: false, timeZone,
    }).format(date)
}

function gmtOffset(timeZone, date) {
    const tzDate = new Date(date.toLocaleString('en-US', { timeZone }))
    const utcDate = new Date(date.toLocaleString('en-US', { timeZone: 'UTC' }))
    const diff = Math.round((tzDate - utcDate) / 3600000)
    return `GMT${diff >= 0 ? '+' : ''}${diff}`
}

const PhantomHeader = () => {
    const { lang, toggle, t } = useLanguage()
    const [now, setNow] = useState(null)

    useEffect(() => {
        setNow(new Date())
        const id = setInterval(() => setNow(new Date()), 30000)
        return () => clearInterval(id)
    }, [])

    const localZone = typeof Intl !== 'undefined'
        ? Intl.DateTimeFormat().resolvedOptions().timeZone
        : 'UTC'

    return (
        <header className="ph-header">
            <Link href="/" className="ph-header-logo" aria-label="Home">
                <Image width={120} height={40} src="/images/logo.png" alt="Pedro Tamburro" priority />
            </Link>

            <div className="ph-header-center">
                <button
                    className="ph-lang"
                    onClick={() => toggle(lang === 'en' ? 'pt' : 'en')}
                    aria-label="Switch language"
                >
                    LANG <span>[{lang.toUpperCase()}]</span>
                </button>

                <p className="ph-header-tagline">{t.header.tagline}</p>

                <div className="ph-clocks">
                    <div className="ph-clock is-active">
                        <span className="ph-clock-dot">●</span>
                        <span>Rio de Janeiro, BR</span>
                        {now && <span>{formatClock(now, 'America/Sao_Paulo')} {gmtOffset('America/Sao_Paulo', now)}</span>}
                    </div>
                    <div className="ph-clock">
                        <span className="ph-clock-dot">●</span>
                        <span>{t.header.yourTime}</span>
                        {now && <span>{formatClock(now, localZone)} {gmtOffset(localZone, now)}</span>}
                    </div>
                </div>
            </div>

            <Link href="/contact" className="ph-btn">{t.header.cta}</Link>
        </header>
    )
}

export default PhantomHeader
