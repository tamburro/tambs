'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { RiShakeHandsLine } from '@remixicon/react'
import { menuList } from '@/utlits/fackData/menuList'
import Image from 'next/image'
import { useLanguage } from '@/context/LanguageContext'

const LangToggle = ({ lang, toggle, mobile }) => {
  const isEn = lang === 'en'

  const handleClick = () => {
    toggle(isEn ? 'pt' : 'en')
  }

  return (
    <div
      className={mobile ? 'lang-switch-wrap d-lg-none' : 'lang-switch-wrap d-none d-lg-flex'}
      style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginLeft: mobile ? '0' : '16px' }}
    >
      <span
        style={{
          fontFamily: "'Space Mono', monospace",
          fontSize: '11px',
          letterSpacing: '0.12em',
          color: isEn ? 'var(--aurora)' : 'rgba(240, 240, 250, 0.3)',
          transition: 'color 0.3s',
          fontWeight: isEn ? 600 : 400,
        }}
      >
        EN
      </span>

      <button
        onClick={handleClick}
        aria-label={`Switch language to ${isEn ? 'Portuguese' : 'English'}`}
        style={{
          position: 'relative',
          width: '48px',
          height: '26px',
          borderRadius: '13px',
          border: '1px solid var(--stardust)',
          background: 'var(--nebula)',
          cursor: 'pointer',
          padding: 0,
          transition: 'border-color 0.3s, background 0.3s',
          flexShrink: 0,
        }}
        onMouseEnter={e => {
          e.currentTarget.style.borderColor = 'var(--aurora)'
        }}
        onMouseLeave={e => {
          e.currentTarget.style.borderColor = 'var(--stardust)'
        }}
      >
        {/* Sliding knob */}
        <span
          style={{
            position: 'absolute',
            top: '3px',
            left: isEn ? '3px' : '23px',
            width: '18px',
            height: '18px',
            borderRadius: '50%',
            background: 'var(--aurora)',
            boxShadow: '0 0 8px rgba(192, 112, 255, 0.4)',
            transition: 'left 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          }}
        />
      </button>

      <span
        style={{
          fontFamily: "'Space Mono', monospace",
          fontSize: '11px',
          letterSpacing: '0.12em',
          color: !isEn ? 'var(--aurora)' : 'rgba(240, 240, 250, 0.3)',
          transition: 'color 0.3s',
          fontWeight: !isEn ? 600 : 400,
        }}
      >
        PT
      </span>
    </div>
  )
}

const Header = () => {
  const pathName = usePathname()
  const [isSticky, setisSticky] = useState(false)
  const { lang, toggle, t } = useLanguage()

  useEffect(() => {
    const navbar_collapse = document.querySelector(".navbar-collapse")
    navbar_collapse.classList.remove("show")
  }, [pathName])

  useEffect(() => {
    window.addEventListener("scroll", stickyHeader)
    return () => window.removeEventListener("scroll", stickyHeader)
  }, [])

  const stickyHeader = () => {
    setisSticky(window.scrollY > 85)
  }

  const navLabels = [t.nav.home, t.nav.about, t.nav.works, t.nav.gallery, t.nav.services, t.nav.contact]

  return (
    <header className={`main-header ${isSticky ? "fixed-header" : ""}`}>
      <div className="header-upper">
        <div className="container">
          <div className="header-inner d-flex align-items-center">
            <div className="logo-outer">
              <div className="logo">
                <Link href="/">
                  <Image width={120} height={40} sizes='100vw' src={"/images/logo.png"} alt="Logo" title="Logo" />
                </Link>
              </div>
            </div>
            <div className="nav-outer clearfix mx-auto">
              <nav className="main-menu navbar-expand-lg">
                <div className="navbar-header">
                  <div className="mobile-logo">
                    <Link href="/">
                      <Image width={75} height={25} sizes='100vw' src={"/images/logo.png"} alt="Logo" title="Logo" />
                    </Link>
                  </div>
                  <div className="mobile-header-actions">
                    <LangToggle lang={lang} toggle={toggle} mobile={true} />
                    <button type="button" className="navbar-toggle" data-bs-toggle="collapse" data-bs-target=".navbar-collapse">
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                    </button>
                  </div>
                </div>
                <div className="navbar-collapse collapse">
                  <ul className="navigation onepage clearfix">
                    {menuList.map(({ id, path }, i) => (
                      <li key={id}><Link href={path} className="nav-link-click">{navLabels[i]}</Link></li>
                    ))}
                  </ul>
                </div>
              </nav>
            </div>
            <div className="menu-btns">
              {/* Language toggle, desktop only */}
              <LangToggle lang={lang} toggle={toggle} mobile={false} />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
