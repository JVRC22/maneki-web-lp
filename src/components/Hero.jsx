import React, { useRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { brand } from '../data/brand';
import { menuPhotoAssets } from '../data/assets';
import { gsap, prefersReducedMotion, useGSAP } from '../motion/gsap';

const heroProducts = {
  matcha: menuPhotoAssets['matcha-kiss'],
  coffee: menuPhotoAssets['kohi-rocks'],
  pink: menuPhotoAssets['hanami-dream'],
};

export default function Hero() {
  const heroRef = useRef(null);
  const prefersReducedMotionPreference = useReducedMotion();

  useGSAP(() => {
    if (prefersReducedMotion() || !heroRef.current) return undefined;

    const idleTweens = [];
    const timeline = gsap.timeline({ defaults: { ease: 'power3.out' } });

    timeline
      .fromTo('.phase5m-hero-field',
        { opacity: 0, transform: 'scale(0.94)' },
        { opacity: 1, transform: 'scale(1)', duration: 0.72, ease: 'power4.out' },
        0
      )
      .fromTo('.phase5m-title-line',
        { clipPath: 'inset(0 100% 0 0)', transform: 'translate3d(-22px, 0, 0)' },
        { clipPath: 'inset(0 0% 0 0)', transform: 'translate3d(0, 0, 0)', duration: 0.62, stagger: 0.06, ease: 'power4.out' },
        0.08
      )
      .fromTo('.phase5m-hero-can-center',
        { opacity: 0, transform: 'translate3d(0, 72px, 0) rotate(0deg) scale(0.82)' },
        { opacity: 1, transform: 'translate3d(0, 0, 0) rotate(0deg) scale(1)', duration: 0.78 },
        0.18
      )
      .fromTo('.phase5m-hero-can-left',
        { opacity: 0, transform: 'translate3d(-56px, 44px, 0) rotate(-22deg) scale(0.82)' },
        { opacity: 1, transform: 'translate3d(0, 0, 0) rotate(-14deg) scale(1)', duration: 0.7 },
        0.28
      )
      .fromTo('.phase5m-hero-can-right',
        { opacity: 0, transform: 'translate3d(56px, 44px, 0) rotate(22deg) scale(0.82)' },
        { opacity: 1, transform: 'translate3d(0, 0, 0) rotate(14deg) scale(1)', duration: 0.7 },
        0.36
      )
      .fromTo('.phase5m-hero-proposition, .phase5m-hero-description',
        { opacity: 0, transform: 'translate3d(-18px, 14px, 0)' },
        { opacity: 1, transform: 'translate3d(0, 0, 0)', duration: 0.44, stagger: 0.06 },
        0.34
      )
      .fromTo('.phase5m-hero-actions',
        { opacity: 0, transform: 'translate3d(-12px, 12px, 0)' },
        { opacity: 1, transform: 'translate3d(0, 0, 0)', duration: 0.34 },
        0.52
      )
      .fromTo('.phase5m-hero-label, .phase5m-hero-edge-note',
        { opacity: 0, transform: 'translate3d(0, 14px, 0)' },
        { opacity: 1, transform: 'translate3d(0, 0, 0)', duration: 0.3, stagger: 0.05 },
        0.7
      );

    timeline.eventCallback('onComplete', () => {
      [
        ['.phase5m-hero-can-center', 4.8, 5],
        ['.phase5m-hero-can-left', 5.6, -4],
        ['.phase5m-hero-can-right', 6.2, 4],
      ].forEach(([selector, duration, distance]) => {
        idleTweens.push(gsap.to(selector, {
          y: distance,
          rotate: distance > 0 ? '+=1.2deg' : '-=1.2deg',
          duration,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        }));
      });
    });

    return () => {
      timeline.kill();
      idleTweens.forEach((tween) => tween.kill());
    };
  }, { scope: heroRef });

  return (
    <section ref={heroRef} className="phase3-hero phase5c-hero phase5m-hero phase5n-hero" id="inicio" aria-labelledby="hero-title">
      <div className="phase5m-hero-field" aria-hidden="true">
        <span className="phase5m-hero-orbit phase5m-hero-orbit-one" />
        <span className="phase5m-hero-orbit phase5m-hero-orbit-two" />
      </div>
      <div className="phase3-container phase5c-hero-layout phase5m-hero-layout phase5n-hero-layout">
        <motion.div
          className="phase5c-hero-copy phase5m-hero-copy phase5n-hero-copy"
        >
          <h1 id="hero-title">
            <span className="phase5c-title-line phase5m-title-line">MANEKI</span>
            <span className="phase5c-title-line phase5c-title-line-accent phase5m-title-line">se antoja.</span>
          </h1>
          <p className="phase5c-hero-proposition phase5m-hero-proposition">{brand.primaryTagline}</p>
          <p className="phase5c-hero-description phase5m-hero-description">
            Bebidas y comida de inspiración asiática, llevadas a sabores que se sienten cerca.
          </p>
          <div className="phase3-hero-actions phase5c-hero-actions phase5m-hero-actions">
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

        <figure className="phase5c-hero-stage phase5m-hero-stage phase5n-hero-stage" aria-label="Trío de bebidas frías Maneki">
          <div className="phase5m-hero-botanical phase5n-hero-botanical">
            <span className="phase5m-hero-stem phase5m-hero-stem-left" aria-hidden="true" />
            <span className="phase5m-hero-stem phase5m-hero-stem-right" aria-hidden="true" />
            <div className="phase5m-hero-can phase5m-hero-can-left">
              <img src={heroProducts.coffee.src} alt={heroProducts.coffee.alt} width={heroProducts.coffee.width} height={heroProducts.coffee.height} fetchPriority="high" decoding="async" />
            </div>
            <div className="phase5m-hero-can phase5m-hero-can-center">
              <img src={heroProducts.matcha.src} alt={heroProducts.matcha.alt} width={heroProducts.matcha.width} height={heroProducts.matcha.height} fetchPriority="high" decoding="async" />
            </div>
            <div className="phase5m-hero-can phase5m-hero-can-right">
              <img src={heroProducts.pink.src} alt={heroProducts.pink.alt} width={heroProducts.pink.width} height={heroProducts.pink.height} fetchPriority="high" decoding="async" />
            </div>
          </div>
          <div
            className="phase5m-hero-label"
            aria-hidden="true"
            data-products="Matcha Kiss · Kohi Rocks · Hanami Dream"
            data-note="tres formas de descubrir"
          />
          <p className="phase5c-hero-edge-note phase5m-hero-edge-note">Drinks + food<br />para descubrir algo nuevo.</p>
        </figure>
      </div>
    </section>
  );
}
