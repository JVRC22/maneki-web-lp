import React, { useRef, useState } from 'react';
import { nekoNeko } from '../data/brand';
import { visualAssets } from '../data/assets';
import { motion, useEditorialReveal } from './EditorialReveal';
import { useReducedMotion } from 'framer-motion';
import { gsap, prefersReducedMotion, useGSAP } from '../motion/gsap';

export default function NekoNekoSection() {
  const nekoRef = useRef(null);
  const reveal = useEditorialReveal();
  const prefersReducedMotionPreference = useReducedMotion();
  const [greeting, setGreeting] = useState(0);

  const greetNeko = () => setGreeting((current) => current + 1);

  useGSAP(() => {
    if (prefersReducedMotion() || !nekoRef.current) return undefined;

    const entrance = gsap.timeline({
      scrollTrigger: {
        trigger: '.phase5p-neko-stage',
        start: 'top 78%',
        toggleActions: 'play none none reverse',
      },
    });
    const idle = gsap.to('.phase5p-neko-idle', {
      y: -8,
      rotate: 1.5,
      duration: 5.2,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      paused: true,
    });

    entrance
      .fromTo('.phase5e2-neko-figure',
        { opacity: 0, transform: 'translate3d(24px, 26px, 0) rotate(3deg) scale(0.94)' },
        { opacity: 1, transform: 'translate3d(0, 0, 0) rotate(0deg) scale(1)', duration: 0.72, ease: 'power3.out', immediateRender: false, onComplete: () => idle.play() }
      )
      .fromTo('.phase5p-neko-accent',
        { opacity: 0, transform: 'scale(0.7) rotate(-8deg)' },
        { opacity: 1, transform: 'scale(1) rotate(0deg)', duration: 0.46, stagger: 0.08, ease: 'back.out(1.4)' },
        '-=0.46'
      );

    return () => {
      idle.kill();
      entrance.kill();
    };
  }, { scope: nekoRef });

  return (
    <section ref={nekoRef} className="phase3-section phase3-neko phase5e2-neko phase5p-neko" id="neko-neko" aria-labelledby="neko-title">
      <div className="phase3-container phase5e2-neko-shell">
        <div className="phase5e2-neko-copy">
          <motion.h2 id="neko-title" {...reveal()}>El gato te trae suerte.</motion.h2>
          <motion.p className="phase5p-neko-lead" {...reveal(0.05)}>Una figura de bienvenida se convierte en un personaje para acompañar cada descubrimiento.</motion.p>
          <motion.div className="phase5e2-neko-explanation" {...reveal(0.08)}>
            <h3>{nekoNeko.culturalTitle}</h3>
            <p>{nekoNeko.culturalText}</p>
          </motion.div>
          <motion.div className="phase5e2-neko-explanation" {...reveal(0.14)}>
            <h3>{nekoNeko.characterTitle}</h3>
            <p>{nekoNeko.characterText}</p>
          </motion.div>
        </div>

        <div className="phase5e2-neko-stage phase5p-neko-stage">
          <span className="phase5e2-neko-stage-word" aria-hidden="true">NEKO</span>
          <div className="phase5e2-neko-stage-field" aria-hidden="true" />
          <span className="phase5p-neko-accent phase5p-neko-accent-one" aria-hidden="true" />
          <span className="phase5p-neko-accent phase5p-neko-accent-two" aria-hidden="true" />
          <motion.figure className="phase5e2-neko-figure" {...reveal(0.18)}>
            <div className="phase5p-neko-idle">
              <motion.div
                key={greeting}
                className="phase5e2-neko-art"
                initial={greeting === 0 || prefersReducedMotionPreference ? false : { opacity: 0.72, transform: 'translate3d(0, 10px, 0) rotate(-3deg) scale(0.98)' }}
                animate={greeting === 0 || prefersReducedMotionPreference ? undefined : { opacity: [0.72, 1, 1], transform: ['translate3d(0, 10px, 0) rotate(-3deg) scale(0.98)', 'translate3d(0, -6px, 0) rotate(2deg) scale(1.01)', 'translate3d(0, 0, 0) rotate(0deg) scale(1)'] }}
                transition={prefersReducedMotionPreference ? { duration: 0 } : { duration: 0.72, ease: [0.23, 1, 0.32, 1] }}
              >
                <img
                  src={visualAssets.neko.src}
                  alt={visualAssets.neko.alt}
                  width={visualAssets.neko.width}
                  height={visualAssets.neko.height}
                  loading="lazy"
                />
              </motion.div>
            </div>
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
