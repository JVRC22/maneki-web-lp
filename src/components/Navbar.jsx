import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { navLinks } from '../data/brand';

const focusableSelector = 'a[href], button:not([disabled])';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const toggleRef = useRef(null);
  const menuRef = useRef(null);

  useEffect(() => {
    if (!mobileOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    const toggleElement = toggleRef.current;
    const appShell = document.getElementById('app-shell');
    const previousAriaHidden = appShell?.getAttribute('aria-hidden');
    const previousInert = appShell?.inert ?? false;
    document.body.style.overflow = 'hidden';
    if (appShell) {
      appShell.inert = true;
      appShell.setAttribute('aria-hidden', 'true');
    }
    menuRef.current?.querySelector(focusableSelector)?.focus();

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setMobileOpen(false);
        return;
      }
      if (event.key !== 'Tab' || !menuRef.current) return;
      const focusable = [...menuRef.current.querySelectorAll(focusableSelector)];
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      if (appShell) {
        appShell.inert = previousInert;
        if (previousAriaHidden === null) appShell.removeAttribute('aria-hidden');
        else appShell.setAttribute('aria-hidden', previousAriaHidden);
      }
      window.removeEventListener('keydown', handleKeyDown);
      toggleElement?.focus();
    };
  }, [mobileOpen]);

  const closeMobile = () => setMobileOpen(false);

  return (
    <header className="phase3-navbar">
      <nav className="phase3-container phase3-navbar-inner" aria-label="Navegación principal">
        <a className="phase3-brand-lockup" href="#inicio">
          <span className="phase3-wordmark">MANEKI</span>
          <span className="phase3-brand-strap">Asia interpretada por México</span>
        </a>
        <div className="phase3-desktop-links">
          {navLinks.map((link) => <a key={link.href} href={link.href}>{link.label}</a>)}
        </div>
        <a className="phase3-navbar-action" href="#menu">Explorar menú</a>
        <button
          ref={toggleRef}
          className="phase3-menu-toggle"
          type="button"
          aria-expanded={mobileOpen}
          aria-controls="mobile-navigation"
          aria-label={mobileOpen ? 'Cerrar navegación' : 'Abrir navegación'}
          onClick={() => setMobileOpen((open) => !open)}
        >
          {mobileOpen ? 'Cerrar' : 'Menú'}
        </button>
      </nav>
      {createPortal(
        mobileOpen ? (
          <div ref={menuRef} className="phase3-mobile-navigation" id="mobile-navigation" role="dialog" aria-modal="true" aria-labelledby="mobile-navigation-title">
            <div className="phase3-mobile-navigation-header">
              <span id="mobile-navigation-title">Navegar</span>
              <button className="phase3-mobile-close" type="button" onClick={closeMobile} aria-label="Cerrar navegación">Cerrar</button>
            </div>
            {navLinks.map((link) => <a key={link.href} href={link.href} onClick={closeMobile}>{link.label}</a>)}
            <a className="phase3-button phase3-button-primary" href="#menu" onClick={closeMobile}>Explorar menú</a>
          </div>
        ) : null,
        document.body
      )}
    </header>
  );
}
