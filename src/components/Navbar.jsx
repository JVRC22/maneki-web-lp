import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Cherry, Menu, X } from 'lucide-react';
import { images } from '../data/images';

const navLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Concepto', href: '#concepto' },
  { label: 'Menú', href: '#menu' },
  { label: 'Experiencia', href: '#experiencia' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Lista VIP', href: '#lista-vip' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") setMobileOpen(false);
    };
    if (mobileOpen) {
      window.addEventListener("keydown", handleEscape);
    }
    return () => window.removeEventListener("keydown", handleEscape);
  }, [mobileOpen]);

  const closeMobile = () => setMobileOpen(false);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} id="navbar">
      <div className="navbar-inner">
        <a href="#inicio" className="navbar-brand" aria-label="Sakura Brew Café — Inicio">
          <span className={`brand-icon ${images.logoMain ? 'has-logo' : 'no-logo'}`}>
            {images.logo ? (
              <img src={images.logoMain} alt="Sakura Brew" />
            ) : (
              <Cherry size={20} color="white" />
            )}
          </span>
          Sakura Brew
        </a>

        <div className="navbar-links">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
          <a href="#lista-vip" className="navbar-cta">
            Unirme a la lista VIP
          </a>
        </div>

        <button
          className="navbar-mobile-toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={mobileOpen}
          aria-controls="mobile-navigation"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {createPortal(
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              className="navbar-mobile-menu open"
              id="mobile-navigation"
              role="dialog"
              aria-modal="true"
              aria-label="Navegación móvil"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={closeMobile}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 + 0.1 }}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#lista-vip"
                className="btn-primary"
                onClick={closeMobile}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Unirme a la lista VIP
              </motion.a>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </nav>
  );
}
