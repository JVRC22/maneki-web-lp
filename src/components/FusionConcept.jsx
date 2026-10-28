import React from 'react';
import { brand } from '../data/brand';
import { visualAssets } from '../data/assets';

export default function FusionConcept() {
  return (
    <section className="phase3-section phase3-concept phase5-concept phase5e-fusion" id="concepto" aria-labelledby="concepto-title">
      <div className="phase3-container phase5e-fusion-inner">
        <div className="phase5e-fusion-intro">
          <h2 id="concepto-title">Asia, con sabor a casa.</h2>
          <p className="phase5e-fusion-copy">{brand.description}</p>
          <p className="phase5j-fusion-line">Matcha, café y antojos crujientes para descubrir algo nuevo.</p>
        </div>
        <div className="phase5j-fusion-stage" aria-label="Dos bebidas conceptuales Maneki y una propuesta de onigiri empanizado">
          <span className="phase5j-fusion-field" aria-hidden="true" />
          <figure className="phase5j-fusion-matcha">
            <img src={visualAssets.heroCutout.src} alt={visualAssets.heroCutout.alt} width={visualAssets.heroCutout.width} height={visualAssets.heroCutout.height} loading="lazy" />
          </figure>
          <figure className="phase5j-fusion-coffee">
            <img src={visualAssets.coffeeCutout.src} alt={visualAssets.coffeeCutout.alt} width={visualAssets.coffeeCutout.width} height={visualAssets.coffeeCutout.height} loading="lazy" />
          </figure>
          <div className="phase5j-fusion-food">
            <span>Onigiri</span>
            <small>empanizado · sin alga</small>
          </div>
          <p className="phase5j-fusion-note">Un sabor conocido.<br />Una forma distinta de descubrirlo.</p>
        </div>
      </div>
    </section>
  );
}
