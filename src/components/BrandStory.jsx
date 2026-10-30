import React, { useRef } from 'react';
import { brand } from '../data/brand';
import { visualAssets } from '../data/assets';
import { motion, useEditorialReveal } from './EditorialReveal';
import { gsap, prefersReducedMotion, useGSAP } from '../motion/gsap';

export default function BrandStory() {
  const storyRef = useRef(null);
  const reveal = useEditorialReveal();

  useGSAP(() => {
    if (prefersReducedMotion() || !storyRef.current) return undefined;

    const scene = gsap.timeline({
      scrollTrigger: {
        trigger: '.phase5e2-story-scene',
        start: 'top 82%',
        toggleActions: 'play none none reverse',
      },
    });

    scene
      .fromTo('.phase5e2-story-product',
        { opacity: 0, transform: 'translate3d(28px, 22px, 0) rotate(6deg) scale(0.94)' },
        { opacity: 1, transform: 'translate3d(0, 0, 0) rotate(0deg) scale(1)', duration: 0.72, ease: 'power3.out' }
      )
      .fromTo('.phase5e2-story-word',
        { opacity: 0, transform: 'translate3d(0, 14px, 0)' },
        { opacity: 1, transform: 'translate3d(0, 0, 0)', duration: 0.5, stagger: 0.08, ease: 'power2.out' },
        '-=0.42'
      );

    return () => scene.kill();
  }, { scope: storyRef });

  return (
    <section ref={storyRef} className="phase3-section phase3-story phase5e2-story" id="historia" aria-labelledby="historia-title">
      <div className="phase3-container phase5e2-story-shell">
        <div className="phase5e2-story-heading phase5p-story-intro">
          <motion.h2 id="historia-title" {...reveal()}>Asia + México.</motion.h2>
          <motion.p {...reveal(0.06)}>{brand.story}</motion.p>
        </div>

        <div className="phase5p-story-grid">
          <div className="phase5e2-story-scene phase5p-story-scene" aria-label="La idea Maneki une sabores asiáticos con formatos cercanos a México">
            <span className="phase5e2-story-word phase5e2-story-word-asia" aria-hidden="true">ASIA</span>
            <span className="phase5e2-story-cross" aria-hidden="true">+</span>
            <span className="phase5e2-story-word phase5e2-story-word-mexico" aria-hidden="true">MÉXICO</span>
            <div className="phase5e2-story-field" aria-hidden="true" />
            <figure className="phase5e2-story-product" aria-hidden="true">
              <img
                src={visualAssets.heroCutout.src}
                alt=""
                width={visualAssets.heroCutout.width}
                height={visualAssets.heroCutout.height}
                loading="lazy"
              />
            </figure>
            <span className="phase5e2-story-caption">Un sabor conocido. Una forma distinta de descubrirlo.</span>
          </div>

          <div className="phase5p-story-principles">
            <motion.article className="phase5p-story-principle phase5p-story-principle-mission" {...reveal(0.12)}>
              <h3>Misión</h3>
              <strong>Hacer lo asiático cercano, memorable y cotidiano.</strong>
              <p>{brand.mission}</p>
            </motion.article>
            <motion.article className="phase5p-story-principle phase5p-story-principle-vision" {...reveal(0.18)}>
              <span className="phase5p-story-year" aria-hidden="true">2031</span>
              <h3>Visión</h3>
              <strong>Una marca que crece sin perder la cercanía.</strong>
              <p>{brand.vision}</p>
            </motion.article>
          </div>
        </div>
      </div>
    </section>
  );
}
