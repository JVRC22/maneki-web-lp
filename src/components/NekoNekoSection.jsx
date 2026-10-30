import React, { useRef, useState } from 'react';
import { nekoNeko } from '../data/brand';
import { visualAssets } from '../data/assets';
import { motion, useEditorialReveal } from './EditorialReveal';
import { gsap, prefersReducedMotion, ScrollTrigger, useGSAP } from '../motion/gsap';
import '../styles/phase5r-neko.css';

export default function NekoNekoSection() {
  const nekoRef = useRef(null);
  const stageRef = useRef(null);
  const characterRef = useRef(null);
  const reactionRef = useRef(null);
  const reveal = useEditorialReveal();
  const [greeting, setGreeting] = useState(0);

  const greetNeko = () => {
    setGreeting((current) => current + 1);

    if (prefersReducedMotion() || !reactionRef.current) return;

    gsap.killTweensOf(reactionRef.current);
    gsap.fromTo(
      reactionRef.current,
      { y: 0, rotate: 0, scale: 1 },
      {
        keyframes: [
          { y: -7, rotate: -2, scale: 1.02, duration: 0.16 },
          { y: 0, rotate: 2, scale: 0.99, duration: 0.18 },
          { y: -2, rotate: 0, scale: 1, duration: 0.34 },
        ],
        ease: 'power2.out',
        clearProps: 'transform',
      }
    );
  };

  useGSAP(() => {
    const stage = stageRef.current;
    const character = characterRef.current;

    if (prefersReducedMotion() || !stage || !character) return undefined;

    const shapes = stage.querySelectorAll('.phase5r-stage-shape, .phase5r-stage-dot');
    const word = stage.querySelector('.phase5r-neko-word');
    const details = stage.querySelectorAll('.phase5r-stage-controls');
    const idle = gsap.to(character, {
      y: -8,
      rotate: 1.2,
      duration: 4.6,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      paused: true,
    });
    const entrance = gsap.timeline({ paused: true });

    entrance
      .fromTo(shapes, { opacity: 0, scale: 0.86 }, { opacity: 1, scale: 1, duration: 0.56, stagger: 0.06, ease: 'power3.out', immediateRender: false })
      .fromTo(word, { opacity: 0, y: 18 }, { opacity: 1, y: 0, duration: 0.52, ease: 'power4.out', immediateRender: false }, '-=0.32')
      .fromTo(character, { opacity: 0, y: 30, rotate: 3, scale: 0.94 }, { opacity: 1, y: 0, rotate: 0, scale: 1, duration: 0.78, ease: 'power3.out', immediateRender: false, onComplete: () => idle.play() }, '-=0.18')
      .fromTo(details, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.34, ease: 'power3.out', immediateRender: false }, '-=0.3');

    const trigger = ScrollTrigger.create({
      trigger: stage,
      start: 'top 82%',
      end: 'bottom 18%',
      onEnter: () => {
        entrance.restart();
        idle.play();
      },
      onLeave: () => idle.pause(),
      onEnterBack: () => {
        if (entrance.progress() < 1) entrance.play();
        idle.play();
      },
      onLeaveBack: () => idle.pause(),
    });

    return () => {
      idle.kill();
      entrance.kill();
      trigger.kill();
    };
  }, { scope: nekoRef, dependencies: [] });

  return (
    <section ref={nekoRef} className="phase3-section phase3-neko phase5e2-neko phase5p-neko phase5r-neko" id="neko-neko" aria-labelledby="neko-title">
      <div className="phase3-container phase5e2-neko-shell">
        <div className="phase5e2-neko-copy phase5r-neko-copy">
          <motion.h2 id="neko-title" {...reveal()}>El gato te trae suerte.</motion.h2>
          <motion.p className="phase5p-neko-lead" {...reveal(0.05)}>Una figura de bienvenida se convierte en un personaje para acompañar cada descubrimiento.</motion.p>
        </div>

        <div ref={stageRef} className="phase5e2-neko-stage phase5p-neko-stage phase5r-stage phase5r-neko-stage">
          <span className="phase5e2-neko-stage-word phase5r-neko-word" aria-hidden="true">NEKO</span>
          <div className="phase5e2-neko-stage-field phase5r-stage-field" aria-hidden="true" />
          <span className="phase5r-stage-shape phase5r-stage-shape-primary" aria-hidden="true" />
          <span className="phase5r-stage-shape phase5r-stage-shape-secondary" aria-hidden="true" />
          <span className="phase5r-stage-dot phase5r-stage-dot-one" aria-hidden="true" />
          <span className="phase5r-stage-dot phase5r-stage-dot-two" aria-hidden="true" />
          <figure className="phase5e2-neko-figure phase5r-neko-figure">
            <div ref={characterRef} className="phase5p-neko-idle phase5r-character-body">
              <div ref={reactionRef} className="phase5e2-neko-art phase5r-character-art">
                <img
                  src={visualAssets.neko.src}
                  alt={visualAssets.neko.alt}
                  width={visualAssets.neko.width}
                  height={visualAssets.neko.height}
                  loading="lazy"
                />
              </div>
            </div>
          </figure>
          <div className="phase5r-stage-controls">
            <button
              className="phase5e2-neko-greet phase5r-greet"
              type="button"
              onClick={greetNeko}
              aria-pressed={greeting > 0}
            >
              Saludar a Neko Neko
            </button>
            <p className="phase5e2-neko-status phase5r-feedback" aria-live="polite">
              {greeting > 0 ? 'Neko Neko te devuelve el saludo.' : 'Un personaje para descubrir algo nuevo.'}
            </p>
          </div>
        </div>

        <div className="phase5r-neko-explanations">
          <motion.div className="phase5e2-neko-explanation" {...reveal(0.08)}>
            <h3>{nekoNeko.culturalTitle}</h3>
            <p>{nekoNeko.culturalText}</p>
          </motion.div>
          <motion.div className="phase5e2-neko-explanation" {...reveal(0.14)}>
            <h3>{nekoNeko.characterTitle}</h3>
            <p>{nekoNeko.characterText}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
