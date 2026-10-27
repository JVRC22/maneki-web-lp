import React from 'react';
import { brand } from '../data/brand';

export default function FusionConcept() {
  return (
    <section className="phase3-section phase3-concept" id="concepto" aria-labelledby="concepto-title">
      <div className="phase3-container phase3-split">
        <div>
          <p className="phase3-kicker">La idea</p>
          <h2 id="concepto-title">Asia interpretada con sabor de aquí.</h2>
        </div>
        <p className="phase3-lede">{brand.description} Maneki hace que lo nuevo se sienta cercano: un matcha con lechera, un onigiri empanizado, una limonada mineral o un postre para compartir.</p>
      </div>
    </section>
  );
}
