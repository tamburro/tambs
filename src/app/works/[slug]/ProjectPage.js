'use client';

import React, { useState } from 'react';
import { getProjectBySlug } from '@/utlits/fackData/projectData';
import Link from 'next/link';
import Image from 'next/image';
import { RiImageLine, RiArrowUpLine } from '@remixicon/react';
import { useLanguage } from '@/context/LanguageContext';
import ProjectHero from '@/components/projects/ProjectHero';
import RelatedProjects from '@/components/projects/RelatedProjects';
import RichProjectPage from './RichProjectPage';

const ProjectPage = ({ slug }) => {
    const project = getProjectBySlug(slug);
    const [galleryOpen, setGalleryOpen] = useState(false);
    const { t, lang } = useLanguage();
    const pick = (pt, en) => lang === 'en' && en ? en : pt;

    if (project.pageType === 'rich') {
        return <RichProjectPage project={project} />;
    }

    const hasImages = project.sections?.some(s => s.images?.length > 0);

    return (
        <div className="single-project-page-design">

            <ProjectHero project={project} />

            {/* Conteúdo principal */}
            <div className="container pt-30">
                <div className="row justify-content-center">
                    <div className="col-12">

                        {project.tldr && (
                            <div className="cs-tldr">
                                <div className="cs-tldr-item">
                                    <span className="cs-tldr-label">{t.project.tldrProblem}</span>
                                    <p>{pick(project.tldr.problem, project.tldr.problem_en)}</p>
                                </div>
                                <div className="cs-tldr-item">
                                    <span className="cs-tldr-label">{t.project.tldrRole}</span>
                                    <p>{pick(project.tldr.role, project.tldr.role_en)}</p>
                                </div>
                                <div className="cs-tldr-item">
                                    <span className="cs-tldr-label">{t.project.tldrOutcome}</span>
                                    <p>{pick(project.tldr.outcome, project.tldr.outcome_en)}</p>
                                </div>
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

            </div>

            <RelatedProjects project={project} />

            <footer className="ph-footer ph-proj-footer">
                <div className="ph-container">
                    <Link href="/contact" className="ph-footer-cta">
                        <span className="ph-display ph-display--hero">{t.footer.cta}</span>
                    </Link>
                    <div className="ph-footer-meta">
                        <Link href="/">← {t.project.backToProjects}</Link>
                        <span>© {new Date().getFullYear()} Pedro Tamburro</span>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default ProjectPage;
