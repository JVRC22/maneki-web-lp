import React from 'react';
import { brand, navLinks } from '../data/brand';

export default function Footer() {
  return (
    <footer className="phase3-footer phase5e2-footer" id="footer">
      <div className="phase3-container phase5e2-footer-shell">
        <div className="phase5e2-footer-lockup">
          <a className="phase5e2-footer-wordmark" href="#inicio">{brand.name}</a>
          <p>{brand.secondaryTagline}.</p>
        </div>
        <nav aria-label="Navegación de pie de página">
          {navLinks.map((link) => <a key={link.href} href={link.href}>{link.label}</a>)}
          <a href="#maneki-mini">Maneki Mini</a>
          <a href="#comunidad">Comunidad</a>
        </nav>
        <div className="phase5e2-footer-note">
          <span>Concepto en desarrollo</span>
          <p>Disponibilidad, precios y canales oficiales se publicarán cuando estén confirmados.</p>
        </div>
      </div>
    </footer>
  );
}
