'use client';
import React from 'react';

const colors = [
  { name: '--ph-ink',      hex: '#161616', label: 'Ink',      role: 'Background principal' },
  { name: '--ph-ink-deep', hex: '#101010', label: 'Ink Deep', role: 'Fundo mais profundo / vignette' },
  { name: '--ph-carbon',   hex: '#1E1E1E', label: 'Carbon',   role: 'Superfícies elevadas / cards' },
  { name: '--ph-graphite', hex: '#2C2C2C', label: 'Graphite', role: 'Bordas e divisores' },
  { name: '--ph-paper',    hex: '#FAFAFA', label: 'Paper',    role: 'Texto primário / pills ativos' },
  { name: '--ph-mist',     hex: 'rgba(250,250,250,0.55)', label: 'Mist',  role: 'Texto secundário' },
  { name: '--ph-faint',    hex: 'rgba(250,250,250,0.32)', label: 'Faint', role: 'Micro-labels / metadados' },
];

const typeScale = [
  { label: 'Display / Hero',    css: { fontFamily: 'var(--ph-display)', fontWeight: 800, fontSize: '56px', textTransform: 'uppercase', letterSpacing: '-0.035em', lineHeight: 0.94 }, sample: 'Design that speaks', spec: 'Archivo 800 · clamp(44px → 132px) · -0.035em' },
  { label: 'Display / Section', css: { fontFamily: 'var(--ph-display)', fontWeight: 800, fontSize: '38px', textTransform: 'uppercase', letterSpacing: '-0.035em' }, sample: 'Section Title', spec: 'Archivo 800 · clamp(34px → 84px)' },
  { label: 'Statement',         css: { fontFamily: 'var(--ph-display)', fontWeight: 700, fontSize: '24px', letterSpacing: '-0.02em', lineHeight: 1.14 }, sample: 'Big bold body statement for key messages.', spec: 'Archivo 700 · clamp(24px → 44px)' },
  { label: 'Body',              css: { fontFamily: 'var(--ph-display)', fontWeight: 400, fontSize: '17px', color: 'var(--ph-mist)', lineHeight: 1.55 }, sample: 'Supporting copy and descriptions live here.', spec: 'Archivo 400 · 17px' },
  { label: 'Mono / Label',      css: { fontFamily: 'var(--ph-mono)', fontSize: '10px', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--ph-mist)' }, sample: 'Navigation / Micro-labels / Clocks', spec: 'Space Mono 400 · 10-11px · +0.16em' },
];

const motion = [
  { token: 'Sphere drag easing', value: 'lerp 0.06 / frame', use: 'Rotação da galeria (estilo Lenis)' },
  { token: 'Card open',          value: 'power3.inOut · 0.9–1.1s', use: 'Zoom FOV 70 → 26 ao abrir projeto' },
  { token: 'Reveal',             value: 'power3.out · 1s · stagger 0.08', use: 'Entrada de headlines e blocos' },
  { token: 'Hover',              value: 'power2.out · 0.4s', use: 'Boost de opacidade nos tiles' },
  { token: 'Pill hover',         value: 'scale 1.06 · cubic-bezier(.22,1,.36,1)', use: 'Botões pill' },
  { token: 'Idle drift',         value: '+0.00045 rad / frame', use: 'Rotação contínua da esfera em repouso' },
];

const sectionTitle = {
  fontFamily: 'var(--ph-mono)',
  fontSize: '10px',
  letterSpacing: '0.16em',
  textTransform: 'uppercase',
  color: 'var(--ph-mist)',
  marginBottom: '24px',
};

const card = {
  background: 'var(--ph-carbon)',
  borderRadius: '4px',
  border: '1px solid rgba(250,250,250,0.08)',
};

export default function DesignSystemPage() {
  return (
    <div className="ph-page" style={{ paddingBottom: '160px' }}>
      <div className="ph-container">

        <p className="ph-eyebrow">Pedro Tamburro · Design System</p>
        <h1 className="ph-display ph-display--section" style={{ marginBottom: '80px' }}>
          Tokens &<br />Storybook
        </h1>

        {/* Colors */}
        <section style={{ marginBottom: '80px' }}>
          <h2 style={sectionTitle}>01 · Color Palette</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '4px' }}>
            {colors.map(c => (
              <div key={c.name} style={{ ...card, overflow: 'hidden' }}>
                <div style={{ background: c.hex, height: '90px', borderBottom: '1px solid rgba(250,250,250,0.08)' }} />
                <div style={{ padding: '18px' }}>
                  <p style={{ fontFamily: 'var(--ph-mono)', fontSize: '10px', letterSpacing: '0.1em', color: 'var(--ph-paper)', marginBottom: '6px' }}>{c.name}</p>
                  <p style={{ fontFamily: 'var(--ph-display)', fontWeight: 700, fontSize: '15px', margin: '0 0 2px' }}>{c.label}</p>
                  <p style={{ fontFamily: 'var(--ph-mono)', fontSize: '10px', color: 'var(--ph-faint)', marginBottom: '6px' }}>{c.hex}</p>
                  <p style={{ fontSize: '12px', color: 'var(--ph-mist)', margin: 0 }}>{c.role}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Typography */}
        <section style={{ marginBottom: '80px' }}>
          <h2 style={sectionTitle}>02 · Typography</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            {typeScale.map(ts => (
              <div key={ts.label} style={{ ...card, padding: '28px 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
                <div>
                  <p style={{ fontFamily: 'var(--ph-mono)', fontSize: '10px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--ph-faint)', marginBottom: '12px' }}>{ts.label}</p>
                  <p style={{ ...ts.css, margin: 0, color: ts.css.color || 'var(--ph-paper)' }}>{ts.sample}</p>
                </div>
                <p style={{ fontFamily: 'var(--ph-mono)', fontSize: '10px', color: 'var(--ph-faint)', margin: 0 }}>{ts.spec}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Components */}
        <section style={{ marginBottom: '80px' }}>
          <h2 style={sectionTitle}>03 · Components</h2>
          <div style={{ ...card, padding: '40px 32px', display: 'flex', flexWrap: 'wrap', gap: '20px', alignItems: 'center' }}>
            <button className="ph-btn">Let&apos;s Talk</button>
            <button className="ph-btn ph-btn--ghost">Filter</button>
            <div className="ph-nav" style={{ position: 'static', transform: 'none' }}>
              <span className="ph-nav-item is-active">Work</span>
              <span className="ph-nav-item">About</span>
              <span className="ph-nav-item">Contact</span>
            </div>
            <span className="ph-tag">Product Design</span>
            <span className="ph-filter-chip is-active">All <span>[14]</span></span>
            <div className="ph-clock is-active" style={{ display: 'flex' }}>
              <span className="ph-clock-dot">●</span>
              <span>Rio de Janeiro, BR</span>
              <span>14:32 GMT-3</span>
            </div>
          </div>
        </section>

        {/* Motion */}
        <section style={{ marginBottom: '80px' }}>
          <h2 style={sectionTitle}>04 · Motion</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            {motion.map(m => (
              <div key={m.token} style={{ ...card, padding: '20px 32px', display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr) minmax(0,1fr)', gap: '24px', alignItems: 'baseline' }}>
                <p style={{ fontFamily: 'var(--ph-display)', fontWeight: 700, fontSize: '15px', margin: 0 }}>{m.token}</p>
                <p style={{ fontFamily: 'var(--ph-mono)', fontSize: '11px', color: 'var(--ph-paper)', margin: 0 }}>{m.value}</p>
                <p style={{ fontSize: '12px', color: 'var(--ph-mist)', margin: 0 }}>{m.use}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Spacing */}
        <section>
          <h2 style={sectionTitle}>05 · Spacing Scale</h2>
          <div style={{ ...card, padding: '32px', display: 'flex', alignItems: 'flex-end', gap: '12px', flexWrap: 'wrap' }}>
            {[4, 8, 12, 16, 24, 32, 48, 64, 90, 110].map(s => (
              <div key={s} style={{ textAlign: 'center' }}>
                <div style={{ width: `${Math.min(s, 80)}px`, height: `${Math.min(s, 80)}px`, background: 'rgba(250,250,250,0.14)', borderRadius: '2px', marginBottom: '8px' }} />
                <p style={{ fontFamily: 'var(--ph-mono)', fontSize: '10px', color: 'var(--ph-faint)' }}>{s}px</p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
