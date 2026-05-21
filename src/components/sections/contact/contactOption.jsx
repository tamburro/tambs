'use client'
import { RiMailLine, RiMapPinLine, RiPhoneLine } from '@remixicon/react'
import React from 'react'
import SlideUp from '../../../utlits/animations/slideUp'
import { useLanguage } from '@/context/LanguageContext'

const ContactOption = () => {
    const { t } = useLanguage();
    return (
        <div className="col-lg-4">
            <SlideUp>
                <div className="contact-content-part">
                    <SlideUp delay={2}>
                        <div className="single-contact">
                            <div className="contact-icon">
                                <i><RiMapPinLine size={20} /></i>
                            </div>
                            <h2>{t.contact.locationLabel}</h2>
                            <p>{t.contact.locationValue}</p>
                            <span style={{ fontSize: '13px', color: 'rgba(240,240,250,0.45)' }}>
                                {t.contact.locationNote}
                            </span>
                        </div>
                    </SlideUp>
                    <SlideUp delay={3}>
                        <div className="single-contact">
                            <div className="contact-icon">
                                <i><RiPhoneLine size={20} /></i>
                            </div>
                            <h2>{t.contact.phoneLabel}</h2>
                            <p>
                                <a href="https://wa.me/5521969018110" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>
                                    +55 21 96901-8110
                                </a>
                            </p>
                        </div>
                    </SlideUp>
                    <SlideUp delay={4}>
                        <div className="single-contact">
                            <div className="contact-icon">
                                <i><RiMailLine size={20} /></i>
                            </div>
                            <h2>{t.contact.emailLabel}</h2>
                            <p>pedropaulotjr@gmail.com</p>
                        </div>
                    </SlideUp>
                </div>
            </SlideUp>
        </div>
    )
}

export default ContactOption
