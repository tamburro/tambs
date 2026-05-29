'use client'
import React, { useState } from 'react'
import { RiBriefcaseLine, RiGraduationCapLine, RiArrowRightSLine } from '@remixicon/react'
import SlideUp from '@/utlits/animations/slideUp'
import { useLanguage } from '@/context/LanguageContext'

const Resume = () => {
    const { t } = useLanguage();
    const [expanded, setExpanded] = useState(false);

    return (
        <section id="resume" className="resume-area">
            <div className="container">
                <div className="resume-items">
                    <div className="row" style={{ alignItems: 'stretch' }}>
                        <div className="col-xl-6 col-md-6" style={{ display: 'flex' }}>
                            <div className="single-resume" style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                                <h2>{t.resume.experience}</h2>
                                <div className="experience-list">
                                    <Card logo="/images/companies/globo.jpeg" year={t.resume.year1} title={t.resume.title1} institution="Editora Globo" description={t.resume.exp1} />
                                    <Card logo="/images/companies/universobservavel.png" year={t.resume.yearUniverso} title={t.resume.titleUniverso} institution="Universo Observável" description={t.resume.expUniverso} />
                                    {expanded && (
                                        <>
                                            <Card logo="/images/companies/yduqs.jpeg" year={t.resume.year2} title={t.resume.title2} institution="YDUQS" description={t.resume.exp2} />
                                            <Card logo="/images/companies/estacio.jpeg" year={t.resume.year3} title={t.resume.title3} institution="Estácio" description={t.resume.exp3} />
                                            <Card logo="/images/companies/zion.jpeg" year={t.resume.yearZion} title={t.resume.titleZion} institution="Zion Escola de Entretenimento" description={t.resume.expZion} />
                                            <Card logo="/images/companies/conspiracao.jpeg" year={t.resume.year4} title={t.resume.title4} institution="Conspiração Filmes" description={t.resume.exp4} />
                                            <Card logo="/images/companies/brq.jpeg" year={t.resume.year5} title={t.resume.title5} institution="BRQ Digital Solutions" description={t.resume.exp5} />
                                        </>
                                    )}
                                </div>
                                <div style={{ marginTop: 'auto', paddingTop: '16px' }}>
                                    <button
                                        className="resume-show-more-btn"
                                        onClick={() => setExpanded(v => !v)}
                                        style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}
                                    >
                                        {expanded ? t.resume.showLessExp : t.resume.showMoreExp}
                                        <RiArrowRightSLine size={16} style={{ transition: 'transform 0.3s', transform: expanded ? 'rotate(-90deg)' : 'rotate(90deg)' }} />
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-6 col-md-6" style={{ display: 'flex' }}>
                            <div className="single-resume" style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                                <h2>{t.resume.education}</h2>
                                <div className="experience-list">
                                    <Card logo="/images/education/uxunicornio.jpeg" year={t.resume.eduYear1} title={t.resume.eduTitle1} institution="UX Unicórnio" description={t.resume.edu1} />
                                    <Card logo="/images/education/infnet.jpeg" year={t.resume.eduYear2} title={t.resume.eduTitle2} institution="Instituto Infnet – ECDD" description={t.resume.edu2} />
                                    <Card logo="/images/education/senac.jpeg" year={t.resume.eduYear3} title={t.resume.eduTitle3} institution="Senac RJ" description={t.resume.edu3} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Resume

const Card = ({ icon, logo, year, title, institution, description }) => {
    return (
        <SlideUp>
            <div className="resume-item">
                <div className="icon">
                    {logo ? <img src={logo} alt={institution} /> : icon}
                </div>
                <div className="content">
                    <span className="years">{year}</span>
                    <h4>{title}</h4>
                    <span className="company">{institution}</span>
                    {description && <p style={{ marginTop: '8px', fontSize: '14px', color: 'rgba(240,240,250,0.55)', lineHeight: 1.6 }}>{description}</p>}
                </div>
            </div>
        </SlideUp>
    )
}
