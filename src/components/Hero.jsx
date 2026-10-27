import React from 'react';
import { brand } from '../data/brand';

export default function Hero() {
  return (
    <section className="phase3-hero" id="inicio" aria-labelledby="hero-title">
      <div className="phase3-container phase3-hero-grid">
        <div className="phase3-hero-copy">
          <p className="phase3-kicker">Maneki · Torreón</p>
          <h1 id="hero-title">{brand.name}</h1>
          <p className="phase3-hero-tagline">{brand.primaryTagline}</p>
          <p className="phase3-hero-description">{brand.description}</p>
          <a className="phase3-button phase3-button-primary" href="#menu">Explorar menú</a>
        </div>
        <div className="phase3-hero-media" aria-label="Espacio reservado para fotografía de producto aprobada">
          <span>Fotografía de producto por aprobar</span>
        </div>
      </div>
    </section>
  );
}
