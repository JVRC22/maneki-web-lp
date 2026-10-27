import React from 'react';
import { brand } from '../data/brand';

export default function BrandStory() {
  return (
    <section className="phase3-section phase3-story" id="historia" aria-labelledby="historia-title">
      <div className="phase3-container phase3-story-grid">
        <div>
          <p className="phase3-kicker">Nuestra historia</p>
          <h2 id="historia-title">No es una copia. Es una interpretación.</h2>
          <p className="phase3-story-lede">{brand.story}</p>
        </div>
        <div className="phase3-story-details">
          <div>
            <h3>Misión</h3>
            <p>{brand.mission}</p>
          </div>
          <div>
            <h3>Visión</h3>
            <p>{brand.vision}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
