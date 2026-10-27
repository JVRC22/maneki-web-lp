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
    document.body.style.overflow = 'hidden';
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
      window.removeEventListener('keydown', handleKeyDown);
      toggleElement?.focus();
    };
  }, [mobileOpen]);

  const closeMobile = () => setMobileOpen(false);

  return (
    <header className="phase3-navbar">
      <nav className="phase3-container phase3-navbar-inner" aria-label="Navegación principal">
        <a className="phase3-wordmark" href="#inicio">MANEKI</a>
        <div className="phase3-desktop-links">
          {navLinks.map((link) => <a key={link.href} href={link.href}>{link.label}</a>)}
        </div>
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
          <div ref={menuRef} className="phase3-mobile-navigation" id="mobile-navigation" role="dialog" aria-modal="true" aria-label="Navegación móvil">
            {navLinks.map((link) => <a key={link.href} href={link.href} onClick={closeMobile}>{link.label}</a>)}
            <a className="phase3-button phase3-button-primary" href="#menu" onClick={closeMobile}>Explorar menú</a>
          </div>
        ) : null,
        document.body
      )}
    </header>
  );
}
