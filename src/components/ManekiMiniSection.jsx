import React from 'react';
import { manekiMini } from '../data/brand';

export default function ManekiMiniSection() {
  return (
    <section className="phase3-section phase3-mini" id="maneki-mini" aria-labelledby="mini-title">
      <div className="phase3-container phase3-mini-inner">
        <div>
          <p className="phase3-kicker">Maneki Mini</p>
          <h2 id="mini-title">{manekiMini.title}</h2>
          <p>{manekiMini.description}</p>
        </div>
        <div className="phase3-pending-action">
          <span>Contacto por confirmar</span>
          <p>Aún no hay un número público verificado para recibir propuestas.</p>
        </div>
      </div>
    </section>
  );
}
