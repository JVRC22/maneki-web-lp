import React from 'react';
import { brand, navLinks } from '../data/brand';

export default function Footer() {
  return (
    <footer className="phase3-footer" id="footer">
      <div className="phase3-container phase3-footer-inner">
        <div>
          <a className="phase3-wordmark" href="#inicio">{brand.name}</a>
          <p>{brand.secondaryTagline}</p>
        </div>
        <nav aria-label="Navegación de pie de página">
          {navLinks.map((link) => <a key={link.href} href={link.href}>{link.label}</a>)}
          <a href="#comunidad">Comunidad</a>
        </nav>
        <p className="phase3-footer-status">Contacto y canales oficiales por confirmar.</p>
      </div>
    </footer>
  );
}
