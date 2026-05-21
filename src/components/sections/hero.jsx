'use client';

import React, { useEffect, useRef, useState, Suspense, lazy } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { RiShakeHandsLine } from '@remixicon/react';

import ErrorBoundary from '@/components/ui/ErrorBoundary';

const Spline = lazy(() => import('@splinetool/react-spline'));

const Hero = () => {
    const heroRef = useRef(null);
    const heroContentRef = useRef(null);
    const [isVisible, setIsVisible] = useState(true);
    const { t } = useLanguage();

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0 }
        );

        if (heroRef.current) {
            observer.observe(heroRef.current);
        }

        return () => {
            if (heroRef.current) {
                observer.unobserve(heroRef.current);
            }
        };
    }, []);

    useEffect(() => {
        const applyScroll = () => {
            if (!heroContentRef.current) return;
            const scrollPosition = window.pageYOffset;
            const maxScroll = 400;
            const opacity = 1 - Math.min(scrollPosition / maxScroll, 1);
            heroContentRef.current.style.opacity = opacity.toString();
            heroContentRef.current.style.transform = `translateY(${scrollPosition * 0.15}px)`;
        };

        const handleScroll = () => {
            if (!isVisible) return;
            requestAnimationFrame(applyScroll);
        };

        applyScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isVisible]);

    return (
        <div ref={heroRef} className="tw-relative tw-min-h-screen tw-overflow-hidden">

            {/* Spline 3D background */}
            <div style={{ position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'auto' }}>
                <ErrorBoundary fallback={<div style={{ width: '100%', height: '100vh', background: 'radial-gradient(ellipse at 65% 40%, rgba(130,0,219,0.18) 0%, #080810 65%)' }} />}>
                    <Suspense fallback={
                        <div style={{ width: '100%', height: '100vh', background: 'radial-gradient(ellipse at 65% 40%, rgba(130,0,219,0.18) 0%, #080810 65%)' }} />
                    }>
                        {isVisible && (
                            <Spline
                                style={{ width: '100%', height: '100vh', pointerEvents: 'auto' }}
                                scene="https://prod.spline.design/us3ALejTXl6usHZ7/scene.splinecode"
                            />
                        )}
                    </Suspense>
                </ErrorBoundary>

                {/* Gradient overlay */}
                <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: `
                        linear-gradient(to right, rgba(8,8,16,0.85), transparent 35%, transparent 65%, rgba(8,8,16,0.85)),
                        linear-gradient(to bottom, rgba(8,8,16,0.2) 0%, transparent 40%, rgba(8,8,16,0.95) 100%)
                    `,
                    pointerEvents: 'none',
                }} />
            </div>

            {/* Hero content */}
            <div
                ref={heroContentRef}
                style={{
                    position: 'absolute',
                    inset: 0,
                    display: 'flex',
                    alignItems: 'center',
                    zIndex: 10,
                    pointerEvents: 'none',
                    paddingTop: '80px',
                }}
            >
                <div className="tw-container tw-mx-auto tw-px-6 lg:tw-px-16">
                    <div style={{ maxWidth: '640px' }}>
                        <p style={{
                            fontFamily: '"Space Mono", monospace',
                            fontSize: '12px',
                            letterSpacing: '0.15em',
                            textTransform: 'uppercase',
                            color: 'rgba(240, 240, 250, 0.55)',
                            marginBottom: '16px',
                        }}>
                            {t.hero.tagline}
                        </p>

                        <h1 style={{
                            fontFamily: '"Playfair Display", serif',
                            fontStyle: 'italic',
                            fontWeight: 500,
                            fontSize: 'clamp(2.8rem, 7vw, 5.5rem)',
                            lineHeight: 1.1,
                            color: '#F0F0FA',
                            marginBottom: '24px',
                        }}>
                            {t.hero.headline[0]}<br />{t.hero.headline[1]}
                        </h1>

                        <p style={{
                            fontFamily: '"Poppins", sans-serif',
                            fontSize: '16px',
                            lineHeight: 1.7,
                            color: 'rgba(240, 240, 250, 0.6)',
                            marginBottom: '36px',
                            maxWidth: '480px',
                        }}>
                            {t.hero.sub}
                        </p>

                        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', pointerEvents: 'auto' }}>
                            <Link href="/works" style={{
                                background: 'rgba(130, 0, 219, 0.18)',
                                border: '1px solid #322D36',
                                color: '#F0F0FA',
                                fontFamily: '"Space Mono", monospace',
                                fontSize: '12px',
                                letterSpacing: '0.08em',
                                textTransform: 'uppercase',
                                padding: '12px 28px',
                                borderRadius: '15px',
                                backdropFilter: 'blur(8px)',
                                textDecoration: 'none',
                                transition: 'all .3s',
                            }}
                                onMouseEnter={e => {
                                    e.currentTarget.style.background = '#8200DB';
                                    e.currentTarget.style.borderColor = '#8200DB';
                                }}
                                onMouseLeave={e => {
                                    e.currentTarget.style.background = 'rgba(130, 0, 219, 0.18)';
                                    e.currentTarget.style.borderColor = '#322D36';
                                }}>
                                {t.hero.cta1}
                            </Link>

                            <Link href="/contact" style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '6px',
                                background: 'rgba(0, 0, 0, 0.4)',
                                border: '1px solid rgba(240, 240, 250, 0.15)',
                                color: 'rgba(240, 240, 250, 0.75)',
                                fontFamily: '"Space Mono", monospace',
                                fontSize: '12px',
                                letterSpacing: '0.08em',
                                textTransform: 'uppercase',
                                padding: '12px 28px',
                                borderRadius: '15px',
                                backdropFilter: 'blur(8px)',
                                textDecoration: 'none',
                                transition: 'all .3s',
                            }}
                                onMouseEnter={e => {
                                    e.currentTarget.style.borderColor = 'rgba(240, 240, 250, 0.4)';
                                    e.currentTarget.style.color = '#F0F0FA';
                                }}
                                onMouseLeave={e => {
                                    e.currentTarget.style.borderColor = 'rgba(240, 240, 250, 0.15)';
                                    e.currentTarget.style.color = 'rgba(240, 240, 250, 0.75)';
                                }}>
                                {t.hero.cta2} <RiShakeHandsLine size={14} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom fade into next section */}
            <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: '120px',
                background: 'linear-gradient(to bottom, transparent, #080810)',
                zIndex: 11,
                pointerEvents: 'none',
            }} />
        </div>
    );
};

export default Hero;
