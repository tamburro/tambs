'use client';

import React, { useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { RiExternalLinkLine, RiArrowLeftLine } from '@remixicon/react';
import { useLanguage } from '@/context/LanguageContext';

const COMPONENTS = {
    SubidaPersonas: dynamic(() => import('@/components/projects/ifood-subida/Personas'), { ssr: false }),
    SubidaJourneyMap: dynamic(() => import('@/components/projects/ifood-subida/JourneyMap'), { ssr: false }),
    SubidaFluxoTelas: dynamic(() => import('@/components/projects/ifood-subida/FluxoTelas'), { ssr: false }),
};

const RichProjectPage = ({ project }) => {
    const parallaxRef = useRef(null);
    const [offsetY, setOffsetY] = useState(0);
    const { t, lang } = useLanguage();
    const pick = (pt, en) => lang === 'en' && en ? en : pt;

    useEffect(() => {
        const handleScroll = () => setOffsetY(window.scrollY);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const hasLinks = project.prototypeLink || project.prototypeLinks?.length > 0 || project.liveDemoLink;

    let sectionCounter = 0;

    return (
        <div className="single-project-page-design">

            {/* Hero com Parallax */}
            <div className="project-parallax-hero" ref={parallaxRef}>
                {(project.pageSrc || project.src) && (
                    <div
                        className="project-parallax-bg"
                        style={{ transform: `translateY(${offsetY * 0.35}px)` }}
                    >
                        <Image
                            src={project.pageSrc || project.src}
                            alt={`Imagem principal do projeto ${project.title}`}
                            fill
                            sizes="100vw"
                            style={{ objectFit: 'cover', objectPosition: 'top' }}
                            priority
                        />
                    </div>
                )}
                <div className="project-parallax-overlay" />
                <div className="project-parallax-content container">
                    <div className="row">
                        <div className="col-12">
                            <div className="parallax-title-box mb-4">
                                <p className="project-sub-title">{project.category} | {project.client || 'Projeto Pessoal'}</p>
                                <h1 className="project-main-title">{project.title}</h1>
                            </div>
                            <div className="project-parallax-info-row">
                                {project.year && (
                                    <div className="parallax-info-box">
                                        <p>{t.project.year}</p>
                                        <h3>{project.year}</h3>
                                    </div>
                                )}
                                {project.role && (
                                    <div className="parallax-info-box">
                                        <p>{t.project.role}</p>
                                        <h3>{project.role}</h3>
                                    </div>
                                )}
                                {project.timeline && (
                                    <div className="parallax-info-box">
                                        <p>{t.project.duration}</p>
                                        <h3>{pick(project.timeline, project.timeline_en)}</h3>
                                    </div>
                                )}
                                {project.team && (
                                    <div className="parallax-info-box">
                                        <p>{t.project.team}</p>
                                        <h3>{project.team}</h3>
                                    </div>
                                )}
                                {project.tools?.length > 0 && (
                                    <div className="parallax-info-box">
                                        <p>{t.project.tools}</p>
                                        <h3>{project.tools.join(' · ')}</h3>
                                    </div>
                                )}
                                {hasLinks && (
                                    <div className="parallax-info-box parallax-info-box--cta">
                                        <p>{t.project.viewProject}</p>
                                        <div className="parallax-cta-links">
                                            {project.prototypeLinks?.length > 0 ? (
                                                project.prototypeLinks.map((link, i) => (
                                                    <Link key={i} href={link.url} target="_blank" rel="noopener noreferrer" className="parallax-cta-link">
                                                        {link.label} <RiExternalLinkLine size={13} />
                                                    </Link>
                                                ))
                                            ) : project.prototypeLink ? (
                                                <Link href={project.prototypeLink} target="_blank" rel="noopener noreferrer" className="parallax-cta-link">
                                                    {t.project.prototype} <RiExternalLinkLine size={13} />
                                                </Link>
                                            ) : null}
                                            {project.liveDemoLink && (
                                                <Link href={project.liveDemoLink} target="_blank" rel="noopener noreferrer" className="parallax-cta-link">
                                                    {t.project.liveDemo} <RiExternalLinkLine size={13} />
                                                </Link>
                                            )}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Overview */}
            {project.description && (
                <div className="container pt-30">
                    <div className="row justify-content-center">
                        <div className="col-12">
                            <div className="project-section project-section--first">
                                <h3>{t.project.overview}</h3>
                                <p>{pick(project.description, project.description_en)}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Seções */}
            {project.sections?.map((section, i) => {
                sectionCounter++;
                const sectionNumber = String(sectionCounter).padStart(2, '0');
                const sectionTitle = pick(section.title, section.title_en);

                if (section.type === 'component') {
                    const Component = COMPONENTS[section.component];
                    if (!Component) return null;
                    return (
                        <div key={i} className="rich-section-divider">
                            <div className="container">
                                <p className="rich-section-label">{sectionNumber} — {sectionTitle}</p>
                            </div>
                            <div className="rich-component-panel">
                                <Component />
                            </div>
                        </div>
                    );
                }

                const methods = pick(section.methods, section.methods_en);
                const highlights = pick(section.highlights, section.highlights_en);
                const metrics = pick(section.metrics, section.metrics_en);

                return (
                    <div key={i} className="container pt-30">
                        <div className="row justify-content-center">
                            <div className="col-12">
                                <div className="project-section">
                                    <h3>{sectionTitle}</h3>

                                    {section.type === 'research' && methods?.length > 0 && (
                                        <div className="cs-methods">
                                            {methods.map((m, j) => (
                                                <span key={j} className="cs-method-chip">{m}</span>
                                            ))}
                                        </div>
                                    )}

                                    {section.content && <p>{pick(section.content, section.content_en)}</p>}

                                    {highlights?.length > 0 && (
                                        <ul className="cs-highlights">
                                            {highlights.map((h, j) => (
                                                <li key={j}>{h}</li>
                                            ))}
                                        </ul>
                                    )}

                                    {section.type === 'outcomes' && metrics?.length > 0 && (
                                        <div className="cs-metrics">
                                            {metrics.map((m, j) => (
                                                <div key={j} className="cs-metric">
                                                    <span className="cs-metric-value">{m.value}</span>
                                                    <span className="cs-metric-label">{m.label}</span>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}

            {/* Botão Voltar */}
            <div className="container">
                <div className="project-back-btn">
                    <Link href="/works" className="theme-btn theme-btn--outline">
                        <i><RiArrowLeftLine size={16} /></i> {t.project.backToProjects}
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default RichProjectPage;
