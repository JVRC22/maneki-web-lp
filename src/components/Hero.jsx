import React, { useRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { brand } from '../data/brand';
import { visualAssets } from '../data/assets';
import { gsap, prefersReducedMotion, useGSAP } from '../motion/gsap';

export default function Hero() {
  const heroRef = useRef(null);
  const prefersReducedMotionPreference = useReducedMotion();

  useGSAP(() => {
    if (prefersReducedMotion() || !heroRef.current) return undefined;

    const timeline = gsap.timeline({ defaults: { ease: 'power3.out' } });

    timeline
      .fromTo('.phase5c-hero-shape',
        { opacity: 0, transform: 'scaleX(0.28) rotate(-8deg)' },
        { opacity: 1, transform: 'scaleX(1) rotate(0deg)', duration: 0.72, ease: 'power4.out' },
        0
      )
      .fromTo('.phase5c-title-line',
        { clipPath: 'inset(0 100% 0 0)', transform: 'translate3d(-22px, 0, 0)' },
        { clipPath: 'inset(0 0% 0 0)', transform: 'translate3d(0, 0, 0)', duration: 0.62, stagger: 0.06, ease: 'power4.out' },
        0.08
      )
      .fromTo('.phase5c-hero-product',
        { opacity: 0, transform: 'translate3d(8vw, 56px, 0) rotate(7deg) scale(0.86)' },
        { opacity: 1, transform: 'translate3d(0, 0, 0) rotate(0deg) scale(1)', duration: 0.78, ease: 'power3.out' },
        0.18
      )
      .fromTo('.phase5c-hero-proposition, .phase5c-hero-description',
        { opacity: 0, transform: 'translate3d(-18px, 14px, 0)' },
        { opacity: 1, transform: 'translate3d(0, 0, 0)', duration: 0.44, stagger: 0.06 },
        0.34
      )
      .fromTo('.phase5c-hero-actions',
        { opacity: 0, transform: 'translate3d(-12px, 12px, 0)' },
        { opacity: 1, transform: 'translate3d(0, 0, 0)', duration: 0.34 },
        0.52
      )
      .fromTo('.phase5c-hero-detail, .phase5c-hero-edge-note',
        { opacity: 0, transform: 'translate3d(0, 14px, 0)' },
        { opacity: 1, transform: 'translate3d(0, 0, 0)', duration: 0.3, stagger: 0.05 },
        0.7
      );

    return undefined;
  }, { scope: heroRef });

  return (
    <section ref={heroRef} className="phase3-hero phase5c-hero" id="inicio" aria-labelledby="hero-title">
      <div className="phase5c-hero-field" aria-hidden="true" />
      <div className="phase3-container phase5c-hero-layout">
        <motion.div
          className="phase5c-hero-copy"
        >
          <h1 id="hero-title">
            <span className="phase5c-title-line">MANEKI</span>
            <span className="phase5c-title-line phase5c-title-line-accent">se antoja.</span>
          </h1>
          <p className="phase5c-hero-proposition">{brand.primaryTagline}</p>
          <p className="phase5c-hero-description">
            Bebidas y comida de inspiración asiática, llevadas a sabores que se sienten cerca.
          </p>
          <div className="phase3-hero-actions phase5c-hero-actions">
            <motion.a
              className="phase3-button phase3-button-primary"
              href="#menu"
              whileTap={prefersReducedMotionPreference ? undefined : { scale: 0.98 }}
              transition={{ duration: 0.14, ease: 'easeOut' }}
            >
              Explorar el menú
            </motion.a>
            <a className="phase3-button phase3-button-secondary" href="#neko-neko">Conoce a Neko Neko</a>
          </div>
        </motion.div>

        <figure className="phase5c-hero-stage" aria-labelledby="hero-media-title">
          <motion.div
            className="phase5c-hero-shape"
            aria-hidden="true"
          />
          <motion.div
            className="phase5c-hero-product"
          >
            <img
              src={visualAssets.heroCutout.src}
              alt={visualAssets.heroCutout.alt}
              width={visualAssets.heroCutout.width}
              height={visualAssets.heroCutout.height}
              fetchPriority="high"
              decoding="async"
            />
          </motion.div>
          <motion.div
            className="phase5c-hero-detail"
          >
            <span>Matcha frío</span>
            <strong>verde y cremoso</strong>
          </motion.div>
          <figcaption id="hero-media-title">Concepto visual de producto; no representa disponibilidad comercial.</figcaption>
        </figure>

        <p className="phase5c-hero-edge-note">Drinks + food<br />para descubrir algo nuevo.</p>
      </div>
    </section>
  );
}
