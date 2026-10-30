import React, { useRef } from 'react';
import { brand } from '../data/brand';
import { menuPhotoAssets } from '../data/assets';
import { gsap, prefersReducedMotion, useGSAP } from '../motion/gsap';

const fusionProducts = {
  matcha: menuPhotoAssets['matcha-kiss'],
  coffee: menuPhotoAssets['kohi-rocks'],
  food: menuPhotoAssets['onigiri-crunch'],
  sweet: menuPhotoAssets['sando-biscoff'],
};

export default function FusionConcept() {
  const fusionRef = useRef(null);

  useGSAP(() => {
    if (prefersReducedMotion() || !fusionRef.current) return undefined;

    const idleTweens = [];
    const timeline = gsap.timeline({
      defaults: { ease: 'power3.out' },
      scrollTrigger: {
        trigger: fusionRef.current,
        start: 'top 78%',
        once: true,
      },
    });

    timeline
      .fromTo('.phase5m-fusion-stage',
        { opacity: 0, transform: 'translate3d(0, 24px, 0)' },
        { opacity: 1, transform: 'translate3d(0, 0, 0)', duration: 0.68 },
        0
      )
      .fromTo('.phase5m-fusion-heading, .phase5m-fusion-copy, .phase5m-fusion-line, .phase5m-fusion-cta',
        { opacity: 0, transform: 'translate3d(-18px, 16px, 0)' },
        { opacity: 1, transform: 'translate3d(0, 0, 0)', duration: 0.46, stagger: 0.07 },
        0.08
      )
      .fromTo('.phase5m-fusion-product',
        { opacity: 0, transform: 'translate3d(0, 36px, 0) rotate(0deg) scale(0.86)' },
        { opacity: 1, transform: 'translate3d(0, 0, 0) rotate(var(--fusion-rotation, 0deg)) scale(1)', duration: 0.68, stagger: 0.1 },
        0.18
      )
      .fromTo('.phase5m-fusion-note',
        { opacity: 0, transform: 'translate3d(0, 12px, 0)' },
        { opacity: 1, transform: 'translate3d(0, 0, 0)', duration: 0.32 },
        0.62
      );

    timeline.eventCallback('onComplete', () => {
      [
        ['.phase5m-fusion-matcha', 5.2, -5],
        ['.phase5m-fusion-coffee', 4.8, 4],
        ['.phase5m-fusion-food', 5.9, -4],
        ['.phase5m-fusion-sweet', 6.4, 5],
      ].forEach(([selector, duration, distance]) => {
        idleTweens.push(gsap.to(selector, {
          y: distance,
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
  }, { scope: fusionRef });

  return (
    <section ref={fusionRef} className="phase3-section phase3-concept phase5-concept phase5e-fusion phase5m-fusion phase5n-fusion" id="concepto" aria-labelledby="concepto-title">
      <div className="phase3-container phase5e-fusion-inner phase5n-fusion-inner">
        <div className="phase5e-fusion-intro phase5m-fusion-intro">
          <h2 id="concepto-title" className="phase5m-fusion-heading">Asia, con sabor a casa.</h2>
          <p className="phase5e-fusion-copy phase5m-fusion-copy">{brand.description}</p>
          <p className="phase5j-fusion-line phase5m-fusion-line">Matcha con leche, café con cajeta y antojos crujientes: Asia reinterpretada con sabores que se sienten cerca.</p>
          <a className="phase3-button phase5m-fusion-cta" href="#menu">Descubre nuestros sabores</a>
        </div>
        <div className="phase5j-fusion-stage phase5m-fusion-stage phase5n-fusion-stage" aria-label="Collage de bebidas y alimentos Maneki">
          <span className="phase5j-fusion-field" aria-hidden="true" />
          <span className="phase5m-fusion-orbit phase5m-fusion-orbit-one" aria-hidden="true" />
          <span className="phase5m-fusion-orbit phase5m-fusion-orbit-two" aria-hidden="true" />
          <span className="phase5m-fusion-thread" aria-hidden="true" />
          <figure className="phase5m-fusion-product phase5m-fusion-matcha" style={{ '--fusion-rotation': '0deg' }}>
            <img src={fusionProducts.matcha.src} alt={fusionProducts.matcha.alt} width={fusionProducts.matcha.width} height={fusionProducts.matcha.height} loading="lazy" />
            <figcaption>Matcha Kiss</figcaption>
          </figure>
          <figure className="phase5m-fusion-product phase5m-fusion-coffee" style={{ '--fusion-rotation': '-12deg' }}>
            <img src={fusionProducts.coffee.src} alt={fusionProducts.coffee.alt} width={fusionProducts.coffee.width} height={fusionProducts.coffee.height} loading="lazy" />
            <figcaption>Kohi Rocks</figcaption>
          </figure>
          <figure className="phase5m-fusion-product phase5m-fusion-food" style={{ '--fusion-rotation': '7deg' }}>
            <img src={fusionProducts.food.src} alt={fusionProducts.food.alt} width={fusionProducts.food.width} height={fusionProducts.food.height} loading="lazy" />
            <figcaption>Onigiri Crunch</figcaption>
          </figure>
          <figure className="phase5m-fusion-product phase5m-fusion-sweet" style={{ '--fusion-rotation': '9deg' }}>
            <img src={fusionProducts.sweet.src} alt={fusionProducts.sweet.alt} width={fusionProducts.sweet.width} height={fusionProducts.sweet.height} loading="lazy" />
            <figcaption>Sando Biscoff</figcaption>
          </figure>
          <p className="phase5j-fusion-note phase5m-fusion-note">Un sabor conocido.<br />Una forma distinta de descubrirlo.</p>
        </div>
      </div>
    </section>
  );
}
