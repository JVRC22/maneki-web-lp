import React from 'react';
import { manekiMini } from '../data/brand';
import { brandAssets } from '../data/assets';
import { motion, useEditorialReveal } from './EditorialReveal';

export default function ManekiMiniSection() {
  const reveal = useEditorialReveal();
  const selectMiniContact = () => window.dispatchEvent(new CustomEvent('maneki-contact-reason', { detail: 'mini' }));

  return (
    <section className="phase3-section phase3-mini phase5e2-mini" id="maneki-mini" aria-labelledby="mini-title">
      <div className="phase3-container phase5e2-mini-shell">
        <motion.div className="phase5e2-mini-heading phase5p-mini-heading" {...reveal()}>
          <h2 id="mini-title">{manekiMini.title}</h2>
          <p>Lleva la experiencia Maneki más cerca de tu campus. Maneki Mini es nuestra propuesta de puntos de venta compactos con bebidas y antojos de inspiración asiática.</p>
        </motion.div>
        <motion.div className="phase5e2-mini-invite phase5p-mini-invite" {...reveal(0.1)}>
          <figure className="phase5g-mini-media">
            <img
              src={brandAssets.manekiMiniIllustration.src}
              alt={brandAssets.manekiMiniIllustration.alt}
              width={brandAssets.manekiMiniIllustration.width}
              height={brandAssets.manekiMiniIllustration.height}
              loading="lazy"
            />
            <figcaption>Ilustración conceptual de formato móvil · no es una sucursal activa.</figcaption>
          </figure>
          <div className="phase5g-mini-copy">
            <span className="phase5e2-mini-campus" aria-hidden="true">CAMPUS</span>
            <h3>¿Te gustaría que seamos parte de tu universidad?</h3>
            <p>Lleva bebidas y antojos de inspiración asiática a un punto cercano, portátil y pensado para la vida diaria del campus.</p>
            <div className="phase5p-mini-example" aria-label="Datos de ejemplo de contacto">
              <span>Datos de ejemplo</span>
              <div><small>Teléfono</small><strong>+52 871 XXX XXXX</strong></div>
              <div><small>Correo</small><strong>hola@maneki.example</strong></div>
            </div>
            <a className="phase3-button phase5p-mini-cta" href="#contacto" onClick={selectMiniContact}>Proponer Maneki Mini</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
