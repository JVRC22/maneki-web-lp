import React from 'react';
import { manekiMini } from '../data/brand';
import { brandAssets } from '../data/assets';
import { motion, useEditorialReveal } from './EditorialReveal';

export default function ManekiMiniSection() {
  const reveal = useEditorialReveal();

  return (
    <section className="phase3-section phase3-mini phase5e2-mini" id="maneki-mini" aria-labelledby="mini-title">
      <div className="phase3-container phase5e2-mini-shell">
        <motion.div className="phase5e2-mini-heading" {...reveal()}>
          <h2 id="mini-title">{manekiMini.title}</h2>
          <p>{manekiMini.description}</p>
        </motion.div>
        <motion.div className="phase5e2-mini-invite" {...reveal(0.1)}>
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
            <span className="phase5e2-mini-campus" aria-hidden="true">UNIVERSIDAD</span>
            <strong>¿Te gustaría que seamos parte de tu universidad?</strong>
            <p>La propuesta: un punto Maneki pequeño, portátil y cercano para descubrir bebidas y comida de inspiración asiática.</p>
            <div className="phase5e2-mini-contact">
              <span className="phase5e2-mini-status">Contacto por confirmar</span>
              <small>Aún no hay un número público verificado para recibir propuestas.</small>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
