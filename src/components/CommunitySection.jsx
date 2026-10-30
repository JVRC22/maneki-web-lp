import React from 'react';
import { brandAssets } from '../data/assets';
import { motion, useEditorialReveal } from './EditorialReveal';
import ContactDemoForm from './ContactDemoForm';

export default function CommunitySection() {
  const reveal = useEditorialReveal();

  return (
    <section className="phase3-section phase3-community phase5e2-community" id="comunidad" aria-labelledby="comunidad-title">
      <div className="phase3-container phase5e2-community-shell">
        <motion.div className="phase5e2-community-heading" {...reveal()}>
          <h2 id="comunidad-title">Nos vemos por ahí.</h2>
          <p>Una identidad para encontrarnos, probar algo nuevo y llevar el universo Maneki a más lugares.</p>
        </motion.div>
        <motion.div className="phase5e2-community-close" {...reveal(0.1)}>
          <span className="phase5e2-community-wordmark">MANEKI</span>
          <p>Asia interpretada por México.</p>
          <div className="phase5g-community-art phase5p-polaroids" aria-label="Conceptos visuales de comunidad y equipo Maneki">
            <figure className="phase5p-polaroid phase5p-polaroid-front">
              <img
                src={brandAssets.uniformFront.src}
                alt={brandAssets.uniformFront.alt}
                width={brandAssets.uniformFront.width}
                height={brandAssets.uniformFront.height}
                loading="lazy"
              />
              <figcaption>Así se viste Maneki · uniforme conceptual.</figcaption>
            </figure>
            <figure className="phase5p-polaroid phase5p-polaroid-back">
              <img
                src={brandAssets.uniformBack.src}
                alt={brandAssets.uniformBack.alt}
                width={brandAssets.uniformBack.width}
                height={brandAssets.uniformBack.height}
                loading="lazy"
              />
              <figcaption>Una identidad que también se mueve.</figcaption>
            </figure>
            <figure className="phase5p-polaroid phase5p-polaroid-card">
              <img
                src={brandAssets.loyaltyCard.src}
                alt={brandAssets.loyaltyCard.alt}
                width={brandAssets.loyaltyCard.width}
                height={brandAssets.loyaltyCard.height}
                loading="lazy"
              />
              <figcaption>Maneki también se colecciona · programa no activo.</figcaption>
            </figure>
          </div>
          <div className="phase5e2-community-actions">
            <a className="phase3-button phase3-button-primary" href="#menu">Explorar menú</a>
            <a className="phase5e2-community-link" href="#neko-neko">Conoce a Neko Neko</a>
          </div>
        </motion.div>
        <ContactDemoForm />
      </div>
    </section>
  );
}
