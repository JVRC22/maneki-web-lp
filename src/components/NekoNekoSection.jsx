import React from 'react';
import { nekoNeko } from '../data/brand';

export default function NekoNekoSection() {
  return (
    <section className="phase3-section phase3-neko" id="neko-neko" aria-labelledby="neko-title">
      <div className="phase3-container phase3-neko-grid">
        <div className="phase3-neko-mark" aria-hidden="true">N</div>
        <div>
          <p className="phase3-kicker">Neko Neko</p>
          <h2 id="neko-title">El gato te trae suerte.</h2>
          <div className="phase3-neko-copy">
            <div>
              <h3>{nekoNeko.culturalTitle}</h3>
              <p>{nekoNeko.culturalText}</p>
            </div>
            <div>
              <h3>{nekoNeko.characterTitle}</h3>
              <p>{nekoNeko.characterText}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
