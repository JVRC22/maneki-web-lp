import React, { useRef } from 'react';
import { collections } from '../data/brand';
import { visualAssets } from '../data/assets';
import { motion, useEditorialReveal } from './EditorialReveal';
import { gsap, prefersReducedMotion, useGSAP } from '../motion/gsap';

export default function CollectionsSection() {
  const collectionsRef = useRef(null);
  const reveal = useEditorialReveal();
  const collectibles = collections.find((collection) => collection.id === 'collectibles');

  useGSAP(() => {
    if (prefersReducedMotion() || !collectionsRef.current) return undefined;

    const mediaQueries = gsap.matchMedia();
    mediaQueries.add('(min-width: 769px)', () => {
      gsap.fromTo('.phase5d-seasonal-image',
        { transform: 'translate3d(0, 3%, 0) scale(1.04)' },
        {
          transform: 'translate3d(0, -5%, 0) scale(1.1)',
          ease: 'none',
          scrollTrigger: {
            trigger: '.phase5d-seasonal-media',
            start: 'top bottom',
            end: 'bottom top',
            scrub: 0.7,
            invalidateOnRefresh: true,
          },
        }
      );
    });
    mediaQueries.add('(max-width: 768px)', () => {
      gsap.fromTo('.phase5d-seasonal-image',
        { transform: 'translate3d(0, 2%, 0) scale(1.02)' },
        {
          transform: 'translate3d(0, -2%, 0) scale(1.05)',
          ease: 'none',
          scrollTrigger: {
            trigger: '.phase5d-seasonal-media',
            start: 'top 90%',
            end: 'bottom 25%',
            scrub: 0.35,
            invalidateOnRefresh: true,
          },
        }
      );
    });

    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    const collectibleScene = gsap.timeline({
      scrollTrigger: {
        trigger: '.phase5e2-collectible-scene',
        start: 'top 82%',
        toggleActions: 'play none none reverse',
      },
    });

    collectibleScene
      .fromTo('.phase5e2-collectible-box',
        { opacity: 0, transform: `translate3d(${isMobile ? '12px' : '32px'}, ${isMobile ? '18px' : '28px'}, 0) rotate(4deg) scale(0.94)` },
        { opacity: 1, transform: 'translate3d(0, 0, 0) rotate(0deg) scale(1)', duration: 0.62, ease: 'power3.out' }
      )
      .fromTo('.phase5e2-collectible-plush',
        { opacity: 0, transform: `translate3d(${isMobile ? '-10px' : '-22px'}, 20px, 0) rotate(-7deg) scale(0.94)` },
        { opacity: 1, transform: 'translate3d(0, 0, 0) rotate(-4deg) scale(1)', duration: 0.62, ease: 'power3.out' },
        '-=0.38'
      )
      .fromTo('.phase5e2-collectible-display',
        { opacity: 0, transform: 'translate3d(0, 24px, 0) scale(0.96)' },
        { opacity: 1, transform: 'translate3d(0, 0, 0) scale(1)', duration: 0.58, ease: 'power3.out' },
        '-=0.42'
      );

    return () => {
      mediaQueries.revert();
      collectibleScene.kill();
    };
  }, { scope: collectionsRef });

  return (
    <section ref={collectionsRef} className="phase3-section phase3-collections phase5d-collections phase5e-collections phase5e2-collections" id="colecciones" aria-labelledby="colecciones-title">
      <div className="phase3-container">
        <div className="phase3-collections-intro phase5-collections-intro phase5e-collections-intro phase5e2-collections-intro">
          <motion.div {...reveal()}>
            <h2 id="colecciones-title">Cambia la temporada.</h2>
          </motion.div>
          <motion.p {...reveal(0.06)}>Una bebida rosada, una nueva textura y un personaje para imaginar lo que sigue. Sin fechas, precios ni disponibilidad inventada.</motion.p>
        </div>

        <div className="phase5e2-collection-stage">
          <motion.article className="phase3-collection phase3-collection-feature phase5e-seasonal-campaign phase5e2-seasonal-campaign" {...reveal(0.12)}>
            <div className="phase3-collection-copy phase5e-seasonal-copy">
              <p className="phase5e-seasonal-label">Pink fruit · Neko Neko · por imaginar</p>
              <h3>Algo nuevo cambia el ritmo.</h3>
              <p>Una colección visual para cuando Maneki quiera ponerse más fresco, frutal y juguetón.</p>
              <span className="phase5e-concept-note">Concepto en evaluación.</span>
            </div>
            <div className="phase3-collection-media phase3-collection-media-seasonal phase5d-seasonal-media phase5e-seasonal-media">
              <img
                className="phase5d-seasonal-image phase5e-seasonal-image"
                src={visualAssets.seasonalCutout.src}
                alt={visualAssets.seasonalCutout.alt}
                width={visualAssets.seasonalCutout.width}
                height={visualAssets.seasonalCutout.height}
                loading="lazy"
              />
            </div>
          </motion.article>

          <motion.article className="phase5e2-collectible-scene" {...reveal(0.18)} aria-labelledby="collectibles-title">
            <div className="phase5e2-collectible-copy">
              <h3 id="collectibles-title">{collectibles.title}</h3>
              <p>{collectibles.description}</p>
              <span>Un universo para coleccionar, no una tienda activa.</span>
            </div>
            <div className="phase5e2-collectible-stage" aria-label="Escena conceptual de Neko Neko Adventures">
              <div className="phase5e2-collectible-ground" aria-hidden="true" />
              <img
                className="phase5e2-collectible-box"
                src={visualAssets.collectibles.src}
                alt={visualAssets.collectibles.alt}
                width={visualAssets.collectibles.width}
                height={visualAssets.collectibles.height}
                loading="lazy"
              />
              <img
                className="phase5e2-collectible-plush"
                src={visualAssets.neko.src}
                alt="Peluche conceptual de Neko Neko integrado en la escena del universo coleccionable."
                width={visualAssets.neko.width}
                height={visualAssets.neko.height}
                loading="lazy"
              />
              <img
                className="phase5e2-collectible-display"
                src={visualAssets.collectibleDisplay.src}
                alt={visualAssets.collectibleDisplay.alt}
                width={visualAssets.collectibleDisplay.width}
                height={visualAssets.collectibleDisplay.height}
                loading="lazy"
              />
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
