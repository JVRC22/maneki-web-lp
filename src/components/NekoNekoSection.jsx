import React, { useState } from 'react';
import { nekoNeko } from '../data/brand';
import { visualAssets } from '../data/assets';
import { motion, useEditorialReveal } from './EditorialReveal';
import { useReducedMotion } from 'framer-motion';

export default function NekoNekoSection() {
  const reveal = useEditorialReveal();
  const prefersReducedMotion = useReducedMotion();
  const [greeting, setGreeting] = useState(0);

  const greetNeko = () => setGreeting((current) => current + 1);

  return (
    <section className="phase3-section phase3-neko phase5e2-neko" id="neko-neko" aria-labelledby="neko-title">
      <div className="phase3-container phase5e2-neko-shell">
        <div className="phase5e2-neko-copy">
          <motion.h2 id="neko-title" {...reveal()}>El gato te trae suerte.</motion.h2>
          <motion.div className="phase5e2-neko-explanation" {...reveal(0.08)}>
            <h3>{nekoNeko.culturalTitle}</h3>
            <p>{nekoNeko.culturalText}</p>
          </motion.div>
          <motion.div className="phase5e2-neko-explanation" {...reveal(0.14)}>
            <h3>{nekoNeko.characterTitle}</h3>
            <p>{nekoNeko.characterText}</p>
          </motion.div>
        </div>

        <div className="phase5e2-neko-stage">
          <span className="phase5e2-neko-stage-word" aria-hidden="true">NEKO</span>
          <div className="phase5e2-neko-stage-field" aria-hidden="true" />
          <motion.figure className="phase5e2-neko-figure" {...reveal(0.18)}>
            <motion.div
              key={greeting}
              className="phase5e2-neko-art"
              initial={greeting === 0 || prefersReducedMotion ? false : { opacity: 0.72, transform: 'translate3d(0, 10px, 0) rotate(-3deg) scale(0.98)' }}
              animate={greeting === 0 || prefersReducedMotion ? undefined : { opacity: [0.72, 1, 1], transform: ['translate3d(0, 10px, 0) rotate(-3deg) scale(0.98)', 'translate3d(0, -6px, 0) rotate(2deg) scale(1.01)', 'translate3d(0, 0, 0) rotate(0deg) scale(1)'] }}
              transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.72, ease: [0.23, 1, 0.32, 1] }}
            >
              <img
                src={visualAssets.neko.src}
                alt={visualAssets.neko.alt}
                width={visualAssets.neko.width}
                height={visualAssets.neko.height}
                loading="lazy"
              />
            </motion.div>
            <figcaption>Referencia conceptual de personaje.</figcaption>
          </motion.figure>
          <button
            className="phase5e2-neko-greet"
            type="button"
            onClick={greetNeko}
            aria-pressed={greeting > 0}
          >
            Saludar a Neko Neko
          </button>
          <p className="phase5e2-neko-status" aria-live="polite">
            {greeting > 0 ? 'Neko Neko te devuelve el saludo.' : 'Un personaje para descubrir algo nuevo.'}
          </p>
        </div>
      </div>
    </section>
  );
}
