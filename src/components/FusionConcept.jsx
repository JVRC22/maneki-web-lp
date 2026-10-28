import React from 'react';
import { brand } from '../data/brand';
import { visualAssets } from '../data/assets';

export default function FusionConcept() {
  return (
    <section className="phase3-section phase3-concept phase5-concept phase5e-fusion" id="concepto" aria-labelledby="concepto-title">
      <div className="phase3-container phase5e-fusion-inner">
        <div className="phase5e-fusion-intro">
          <p className="phase5e-label">Una forma nueva de acercarte</p>
          <h2 id="concepto-title">Asia, con sabor a casa.</h2>
          <p className="phase5e-fusion-copy">{brand.description}</p>
        </div>
        <div className="phase5e-fusion-ribbon" aria-label="Ejemplos de la propuesta gastronómica">
          <span>Matcha con lechera</span>
          <span className="phase5e-fusion-thumb" aria-hidden="true"><img src={visualAssets.hero.src} alt="" width={visualAssets.hero.width} height={visualAssets.hero.height} loading="lazy" /></span>
          <span>Onigiri empanizado</span>
          <span className="phase5e-fusion-thumb phase5e-fusion-thumb-pink" aria-hidden="true"><img src={visualAssets.seasonal.src} alt="" width={visualAssets.seasonal.width} height={visualAssets.seasonal.height} loading="lazy" /></span>
          <span>Así se siente cerca.</span>
        </div>
      </div>
    </section>
  );
}
