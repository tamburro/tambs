// src/works/[slug]/page.js
'use client';

import React, { useRef, useEffect, useState } from 'react';
import { getProjectBySlug } from '@/utlits/fackData/projectData';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { RiExternalLinkLine, RiArrowLeftLine, RiImageLine, RiArrowUpLine } from '@remixicon/react';
import { useLanguage } from '@/context/LanguageContext';
import RichProjectPage from './RichProjectPage';

const SingleProjectPage = ({ params }) => {
    const { slug } = params;
    const project = getProjectBySlug(slug);
    const parallaxRef = useRef(null);
    const [offsetY, setOffsetY] = useState(0);
    const [galleryOpen, setGalleryOpen] = useState(false);
    const { t, lang } = useLanguage();
    const pick = (pt, en) => lang === 'en' && en ? en : pt;

    useEffect(() => {
        const handleScroll = () => setOffsetY(window.scrollY);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    if (!project) {
        notFound();
    }

    if (project.pageType === 'rich') {
        return <RichProjectPage project={project} />;
    }

    const hasLinks = project.prototypeLink || project.prototypeLinks?.length > 0 || project.liveDemoLink;
    const hasImages = project.sections?.some(s => s.images?.length > 0);

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

            {/* Conteúdo principal */}
            <div className="container pt-30">
                <div className="row justify-content-center">
                    <div className="col-12">

                        {project.description && (
                            <div className="project-section project-section--first">
                                <h3>{t.project.overview}</h3>
                                <p>{pick(project.description, project.description_en)}</p>
                            </div>
                        )}

                        {project.sections?.map((section, i) => {
                            const methods = pick(section.methods, section.methods_en);
                            const highlights = pick(section.highlights, section.highlights_en);
                            const metrics = pick(section.metrics, section.metrics_en);
                            return (
                            <div key={i} className="project-section">
                                <h3>{pick(section.title, section.title_en)}</h3>

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
                            );
                        })}

                        {!project.sections && (
                            <>
                                {project.challenge && (
                                    <div className="project-section">
                                        <h3>O Desafio</h3>
                                        <p>{project.challenge}</p>
                                    </div>
                                )}
                                {project.solution && (
                                    <div className="project-section">
                                        <h3>A Solução</h3>
                                        <p>{project.solution}</p>
                                    </div>
                                )}
                            </>
                        )}
                    </div>
                </div>

                {/* Galeria colapsível */}
                {hasImages && (
                    <div className="project-gallery-wrapper">
                        <button
                            className={`cs-gallery-toggle ${galleryOpen ? 'open' : ''}`}
                            onClick={() => setGalleryOpen(v => !v)}
                        >
                            <span className="cs-gallery-toggle-label">
                                <RiImageLine size={16} />
                                {galleryOpen ? t.project.hideGallery : t.project.showGallery}
                            </span>
                            <RiArrowUpLine size={16} className={`cs-gallery-toggle-arrow ${galleryOpen ? 'rotated' : ''}`} />
                        </button>

                        {galleryOpen && (
                            <div className="cs-gallery-body">
                                {[...(project.sections || [])].sort((a, b) => (b.imageLayout === 'screens') - (a.imageLayout === 'screens')).map((section, i) =>
                                    section.images?.length > 0 ? (
                                        <div key={i} className="project-gallery-section pt-12">
                                            <div className="row">
                                                {section.imageLayout === 'screens' ? (
                                                    <div className="col-12">
                                                        <div className="cs-screens-row">
                                                            {section.images.map((img, j) => (
                                                                <figure key={j} className="cs-screen-figure">
                                                                    <div className="cs-phone-frame">
                                                                        <div className="cs-phone-notch" />
                                                                        <div className="cs-phone-screen">
                                                                            <Image
                                                                                src={img.src}
                                                                                alt={img.caption || section.title}
                                                                                width={img.width || 390}
                                                                                height={img.height || 700}
                                                                                sizes="(max-width: 768px) 50vw, 14vw"
                                                                                style={{ width: '100%', height: 'auto', display: 'block' }}
                                                                            />
                                                                        </div>
                                                                        <div className="cs-phone-bar" />
                                                                    </div>
                                                                    {img.caption && <figcaption>{img.caption}</figcaption>}
                                                                </figure>
                                                            ))}
                                                        </div>
                                                    </div>
                                                ) : (
                                                    section.images.map((img, j) => (
                                                        <div key={j} className={img.fullWidth ? 'col-12' : 'col-lg-6'}>
                                                            <figure className="cs-image-card wow fadeInUp">
                                                                <div className="cs-image-card-img">
                                                                    <Image
                                                                        src={img.src}
                                                                        alt={img.caption || section.title}
                                                                        width={img.width || 800}
                                                                        height={img.height || 600}
                                                                        sizes="100%"
                                                                        style={{ width: '100%', height: 'auto', display: 'block' }}
                                                                    />
                                                                </div>
                                                                {img.caption && (
                                                                    <figcaption className="cs-image-card-caption">{img.caption}</figcaption>
                                                                )}
                                                            </figure>
                                                        </div>
                                                    ))
                                                )}
                                            </div>
                                        </div>
                                    ) : null
                                )}
                            </div>
                        )}
                    </div>
                )}

                {/* Botão Voltar */}
                <div className="project-back-btn">
                    <Link href="/works" className="theme-btn theme-btn--outline">
                        <i><RiArrowLeftLine size={16} /></i> {t.project.backToProjects}
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SingleProjectPage;
