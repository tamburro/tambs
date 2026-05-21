'use client'
import React, { useState } from 'react'
import { RiMailLine, RiCheckLine, RiErrorWarningLine } from '@remixicon/react'
import SlideUp from '@/utlits/animations/slideUp'
import { useLanguage } from '@/context/LanguageContext'

const ContactForm = () => {
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('idle');
    const { t } = useLanguage();

    const handleChange = (e) => {
        setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');
        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form),
            });
            if (res.ok) {
                setStatus('success');
                setForm({ name: '', email: '', message: '' });
            } else {
                setStatus('error');
            }
        } catch {
            setStatus('error');
        }
    };

    return (
        <div className="col-lg-8">
            <SlideUp>
                <div className="contact-form contact-form-area">
                    <form className="contactForm" onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="name">{t.contact.nameLabel}</label>
                                    <input type="text" id="name" name="name" className="form-control" placeholder="Pedro Tamburro" value={form.name} onChange={handleChange} required />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="email">{t.contact.emailFieldLabel}</label>
                                    <input type="email" id="email" name="email" className="form-control" placeholder="hello@example.com" value={form.email} onChange={handleChange} required />
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="form-group">
                                    <label htmlFor="message">{t.contact.messageLabel}</label>
                                    <textarea name="message" id="message" className="form-control" rows="4" placeholder="Olá Pedro, gostaria de conversar sobre..." value={form.message} onChange={handleChange} required />
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="form-group mb-0">
                                    <button type="submit" className="theme-btn" disabled={status === 'loading'}>
                                        {status === 'loading' ? t.contact.sending : t.contact.sendBtn}
                                        <i><RiMailLine size={15} /></i>
                                    </button>
                                    {status === 'success' && (
                                        <p style={{ marginTop: '16px', color: '#C070FF', display: 'flex', alignItems: 'center', gap: '8px', fontFamily: '"Space Mono"', fontSize: '13px' }}>
                                            <RiCheckLine size={16} /> {t.contact.success}
                                        </p>
                                    )}
                                    {status === 'error' && (
                                        <p style={{ marginTop: '16px', color: '#ff6b6b', display: 'flex', alignItems: 'center', gap: '8px', fontFamily: '"Space Mono"', fontSize: '13px' }}>
                                            <RiErrorWarningLine size={16} /> {t.contact.error}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </SlideUp>
        </div>
    )
}

export default ContactForm
