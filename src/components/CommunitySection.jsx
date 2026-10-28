import React from 'react';
import { publicConfig } from '../data/brand';
import { motion, useEditorialReveal } from './EditorialReveal';

export default function CommunitySection() {
  const reveal = useEditorialReveal();
  const hasContact = publicConfig.phone || publicConfig.whatsapp || publicConfig.socialLinks.length > 0;

  return (
    <section className="phase3-section phase3-community phase5e2-community" id="comunidad" aria-labelledby="comunidad-title">
      <div className="phase3-container phase5e2-community-shell">
        <motion.div className="phase5e2-community-heading" {...reveal()}>
          <h2 id="comunidad-title">Nos vemos por ahí.</h2>
          <p>{hasContact ? 'Encuentra aquí nuestros canales oficiales.' : 'Los canales oficiales de contacto se publicarán cuando estén confirmados.'}</p>
        </motion.div>
        <motion.div className="phase5e2-community-close" {...reveal(0.1)}>
          <span className="phase5e2-community-wordmark">MANEKI</span>
          <p>Asia interpretada por México.</p>
          <div className="phase5e2-community-actions">
            <a className="phase3-button phase3-button-primary" href="#menu">Explorar menú</a>
            <a className="phase5e2-community-link" href="#neko-neko">Conoce a Neko Neko</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
