import React from 'react';
import { publicConfig } from '../data/brand';

export default function CommunitySection() {
  const hasContact = publicConfig.phone || publicConfig.whatsapp || publicConfig.socialLinks.length > 0;

  return (
    <section className="phase3-section phase3-community" id="comunidad" aria-labelledby="comunidad-title">
      <div className="phase3-container phase3-community-inner">
        <div>
          <p className="phase3-kicker">Comunidad</p>
          <h2 id="comunidad-title">Nos vemos del otro lado del menú.</h2>
          <p>{hasContact ? 'Encuentra aquí nuestros canales oficiales.' : 'Los canales oficiales de contacto se publicarán cuando estén confirmados.'}</p>
        </div>
        {!hasContact && <span className="phase3-status">Canales por confirmar</span>}
      </div>
    </section>
  );
}
