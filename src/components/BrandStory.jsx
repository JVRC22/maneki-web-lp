import React, { useRef } from 'react';
import { brand } from '../data/brand';
import { menuPhotoAssets } from '../data/assets';
import { motion, useEditorialReveal } from './EditorialReveal';
import { gsap, prefersReducedMotion, useGSAP } from '../motion/gsap';

const fusionProducts = [
  { key: 'matcha-kiss', label: 'Matcha Kiss', family: 'Matcha', asset: menuPhotoAssets['matcha-kiss'] },
  { key: 'kohi-rocks', label: 'Kohi Rocks', family: 'Café', asset: menuPhotoAssets['kohi-rocks'] },
  { key: 'onigiri-crunch', label: 'Onigiri Crunch', family: 'Comida', asset: menuPhotoAssets['onigiri-crunch'] },
];

export default function BrandStory() {
  const storyRef = useRef(null);
  const reveal = useEditorialReveal();

  useGSAP(() => {
    if (prefersReducedMotion() || !storyRef.current) return undefined;

    const scene = gsap.timeline({
      scrollTrigger: {
        trigger: '.phase5t-fusion-stage',
        start: 'top 82%',
        toggleActions: 'play none none reverse',
      },
    });

    scene
      .fromTo('.phase5t-product-card',
        { opacity: 0, transform: 'translate3d(0, 22px, 0) rotate(2deg) scale(0.94)' },
        { opacity: 1, transform: 'translate3d(0, 0, 0) rotate(0deg) scale(1)', duration: 0.66, stagger: 0.08, ease: 'power3.out', immediateRender: false }
      )
      .fromTo('.phase5t-stage-lockup, .phase5t-stage-note',
        { opacity: 0, transform: 'translate3d(0, 10px, 0)' },
        { opacity: 1, transform: 'translate3d(0, 0, 0)', duration: 0.46, ease: 'power2.out' },
        '-=0.38'
      );

    return () => scene.kill();
  }, { scope: storyRef });

  return (
    <section ref={storyRef} className="phase3-section phase3-story phase5e2-story phase5t-story" id="historia" aria-labelledby="historia-title">
      <div className="phase3-container phase5e2-story-shell phase5t-story-shell">
        <div className="phase5t-story-intro">
          <motion.h2 id="historia-title" {...reveal()}>Asia + México.</motion.h2>
          <motion.p {...reveal(0.06)}>{brand.story}</motion.p>
        </div>

        <div className="phase5t-story-layout">
          <div className="phase5t-fusion-stage" aria-label="Tres productos conceptuales que muestran la fusión de Asia y México">
            <div className="phase5t-stage-blob" aria-hidden="true" />
            <div className="phase5t-stage-lockup">
              <span>MANEKI</span>
              <strong>Asia + México</strong>
            </div>
            <div className="phase5t-product-row">
              {fusionProducts.map(({ key, label, family, asset }) => (
                <figure className={`phase5t-product-card phase5t-product-${key}`} key={key}>
                  <img src={asset.src} alt={asset.alt} width={asset.width} height={asset.height} loading="lazy" />
                  <figcaption><strong>{label}</strong><span>{family}</span></figcaption>
                </figure>
              ))}
            </div>
            <p className="phase5t-stage-note">Sabores que se sienten cerca.</p>
          </div>

          <div className="phase5t-story-principles">
            <motion.article className="phase5t-story-principle phase5t-story-principle-mission" {...reveal(0.12)}>
              <h3>Misión</h3>
              <strong>Hacer lo asiático cercano, memorable y cotidiano.</strong>
              <p>{brand.mission}</p>
            </motion.article>
            <motion.article className="phase5t-story-principle phase5t-story-principle-vision" {...reveal(0.18)}>
              <span className="phase5t-story-year" aria-hidden="true">2031</span>
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
