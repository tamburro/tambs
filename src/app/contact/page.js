'use client'
import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { useLanguage } from '@/context/LanguageContext'

export default function ContactPage() {
    const { t } = useLanguage()
    const heroRef = useRef(null)
    const [form, setForm] = useState({ name: '', email: '', message: '' })
    const [status, setStatus] = useState('idle')

    useEffect(() => {
        gsap.fromTo(heroRef.current.querySelectorAll('.ph-reveal'),
            { opacity: 0, y: 36 },
            { opacity: 1, y: 0, duration: 1, stagger: 0.08, ease: 'power3.out', delay: 0.15 })
    }, [])

    const handleChange = (e) => {
        setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setStatus('loading')
        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form),
            })
            if (res.ok) {
                setStatus('success')
                setForm({ name: '', email: '', message: '' })
            } else {
                setStatus('error')
            }
        } catch {
            setStatus('error')
        }
    }

    return (
        <div className="ph-page">
            <div className="ph-container" ref={heroRef}>
                <p className="ph-eyebrow ph-reveal">{t.contact.eyebrow}</p>
                <h1 className="ph-display ph-display--hero ph-reveal">
                    {t.contact.headline.map(line => (
                        <span key={line} style={{ display: 'block' }}>{line}</span>
                    ))}
                </h1>

                <div className="ph-contact-grid">
                    <div className="ph-contact-info ph-reveal">
                        <p className="ph-statement" style={{ fontSize: 'clamp(18px, 1.8vw, 24px)', maxWidth: '420px' }}>
                            {t.contact.intro}
                        </p>
                        <div>
                            <p className="ph-info-label">{t.contact.emailLabel}</p>
                            <a className="ph-info-value" href="mailto:pedropaulotjr@gmail.com">
                                pedropaulotjr@gmail.com
                            </a>
                        </div>
                        <div>
                            <p className="ph-info-label">{t.contact.phoneLabel}</p>
                            <a
                                className="ph-info-value"
                                href="https://wa.me/5521969018110?text=Olá%20Pedro%2C%20gostaria%20de%20conversar%20sobre..."
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                +55 21 96901-8110
                            </a>
                        </div>
                        <div>
                            <p className="ph-info-label">{t.contact.locationLabel}</p>
                            <p className="ph-info-value">{t.contact.locationValue}</p>
                            <p className="ph-body" style={{ fontSize: '14px', marginTop: '6px' }}>
                                {t.contact.locationNote}
                            </p>
                        </div>
                    </div>

                    <form className="ph-form ph-reveal" onSubmit={handleSubmit}>
                        <div className="ph-field">
                            <label htmlFor="name">{t.contact.nameLabel}</label>
                            <input
                                type="text" id="name" name="name"
                                placeholder="Pedro Tamburro"
                                value={form.name} onChange={handleChange} required
                            />
                        </div>
                        <div className="ph-field">
                            <label htmlFor="email">{t.contact.emailFieldLabel}</label>
                            <input
                                type="email" id="email" name="email"
                                placeholder="hello@example.com"
                                value={form.email} onChange={handleChange} required
                            />
                        </div>
                        <div className="ph-field">
                            <label htmlFor="message">{t.contact.messageLabel}</label>
                            <textarea
                                id="message" name="message" rows="4"
                                placeholder="Olá Pedro, gostaria de conversar sobre..."
                                value={form.message} onChange={handleChange} required
                            />
                        </div>
                        <div>
                            <button type="submit" className="ph-btn" disabled={status === 'loading'}>
                                {status === 'loading' ? t.contact.sending : t.contact.sendBtn}
                            </button>
                            {status === 'success' && (
                                <p className="ph-form-status" style={{ color: '#FAFAFA', marginTop: '18px' }}>
                                    {t.contact.success}
                                </p>
                            )}
                            {status === 'error' && (
                                <p className="ph-form-status" style={{ color: '#ff6b6b', marginTop: '18px' }}>
                                    {t.contact.error}
                                </p>
                            )}
                        </div>
                    </form>
                </div>

                <footer className="ph-footer" style={{ marginTop: '40px', paddingBottom: '140px' }}>
                    <div className="ph-footer-meta">
                        <span>© {new Date().getFullYear()} Pedro Tamburro. {t.footer.rights}</span>
                        <span>{t.footer.crafted}</span>
                    </div>
                </footer>
            </div>
        </div>
    )
}
