import React, { useRef } from 'react';
import { collections } from '../data/brand';
import { brandAssets, menuPhotoAssets } from '../data/assets';
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
        { transform: 'translate3d(0, 1%, 0)' },
        {
          transform: 'translate3d(0, -1%, 0)',
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
        { transform: 'translate3d(0, 1%, 0)' },
        {
          transform: 'translate3d(0, -1%, 0)',
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
    const collectibleIdleTweens = [];
    const stopCollectibleIdle = () => {
      collectibleIdleTweens.splice(0).forEach((tween) => tween.kill());
    };
    const startCollectibleIdle = () => {
      stopCollectibleIdle();
      [
        ['.phase5g-collectible-box', isMobile ? 3 : 5, 1.5, 0],
        ['.phase5g-collectible-black', isMobile ? -3 : -5, -1.2, 0.12],
        ['.phase5g-collectible-glasses', isMobile ? 2 : 4, 1, 0.2],
        ['.phase5g-collectible-pink', isMobile ? -2 : -4, 1.4, 0.28],
      ].forEach(([selector, distance, rotation, delay]) => {
        collectibleIdleTweens.push(gsap.to(selector, {
          y: distance,
          rotation,
          duration: 5.8 + delay,
          delay,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        }));
      });
    };

    collectibleScene
      .fromTo('.phase5g-collectible-box',
        { opacity: 0, transform: `translate3d(${isMobile ? '12px' : '32px'}, ${isMobile ? '18px' : '28px'}, 0) rotate(4deg) scale(0.94)` },
        { opacity: 1, transform: 'translate3d(0, 0, 0) rotate(0deg) scale(1)', duration: 0.62, ease: 'power3.out' }
      )
      .fromTo('.phase5g-collectible-black',
        { opacity: 0, transform: `translate3d(${isMobile ? '-10px' : '-22px'}, 20px, 0) rotate(-7deg) scale(0.94)` },
        { opacity: 1, transform: 'translate3d(0, 0, 0) rotate(-5deg) scale(1)', duration: 0.62, ease: 'power3.out' },
        '-=0.38'
      )
      .fromTo('.phase5g-collectible-glasses',
        { opacity: 0, transform: `translate3d(${isMobile ? '8px' : '18px'}, 24px, 0) rotate(6deg) scale(0.94)` },
        { opacity: 1, transform: 'translate3d(0, 0, 0) rotate(5deg) scale(1)', duration: 0.58, ease: 'power3.out' },
        '-=0.44'
      )
      .fromTo('.phase5g-collectible-pink',
        { opacity: 0, transform: `translate3d(0, ${isMobile ? '18px' : '24px'}, 0) rotate(3deg) scale(0.94)` },
        { opacity: 1, transform: 'translate3d(0, 0, 0) rotate(2deg) scale(1)', duration: 0.58, ease: 'power3.out' },
        '-=0.42'
      );

    collectibleScene.eventCallback('onComplete', startCollectibleIdle);
    collectibleScene.eventCallback('onReverseComplete', stopCollectibleIdle);

    return () => {
      stopCollectibleIdle();
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
              <h3><span>Algo nuevo</span><span>cambia el</span><span>ritmo.</span></h3>
              <p>Una colección visual para cuando Maneki quiera ponerse más fresco, frutal y juguetón.</p>
              <span className="phase5e-concept-note">Concepto en evaluación.</span>
            </div>
            <div className="phase3-collection-media phase3-collection-media-seasonal phase5d-seasonal-media phase5e-seasonal-media">
              <img
                className="phase5d-seasonal-image phase5e-seasonal-image"
                src={menuPhotoAssets['hanami-dream'].src}
                alt={menuPhotoAssets['hanami-dream'].alt}
                width={menuPhotoAssets['hanami-dream'].width}
                height={menuPhotoAssets['hanami-dream'].height}
                loading="lazy"
              />
            </div>
          </motion.article>

          <motion.article className="phase5e2-collectible-scene" {...reveal(0.18)} aria-labelledby="collectibles-title">
            <div className="phase5e2-collectible-copy">
              <h3 id="collectibles-title"><span>Neko Neko</span><span>Adventures</span></h3>
              <p>{collectibles.description}</p>
              <span>Variantes conceptuales de un universo de cajas sorpresa, no una tienda activa.</span>
            </div>
            <div className="phase5e2-collectible-stage" aria-label="Escena conceptual de Neko Neko Adventures">
              <div className="phase5e2-collectible-ground" aria-hidden="true" />
              <span className="phase5g-collectible-label">Caja sorpresa · variantes Neko Neko</span>
              <img
                className="phase5g-collectible-box"
                src={brandAssets.collectibleBox.src}
                alt={brandAssets.collectibleBox.alt}
                width={brandAssets.collectibleBox.width}
                height={brandAssets.collectibleBox.height}
                loading="lazy"
              />
              <img
                className="phase5g-collectible-variant phase5g-collectible-black"
                src={brandAssets.collectibleBlack.src}
                alt={brandAssets.collectibleBlack.alt}
                width={brandAssets.collectibleBlack.width}
                height={brandAssets.collectibleBlack.height}
                loading="lazy"
              />
              <img
                className="phase5g-collectible-variant phase5g-collectible-glasses"
                src={brandAssets.collectibleGlasses.src}
                alt={brandAssets.collectibleGlasses.alt}
                width={brandAssets.collectibleGlasses.width}
                height={brandAssets.collectibleGlasses.height}
                loading="lazy"
              />
              <img
                className="phase5g-collectible-variant phase5g-collectible-pink"
                src={brandAssets.collectiblePink.src}
                alt={brandAssets.collectiblePink.alt}
                width={brandAssets.collectiblePink.width}
                height={brandAssets.collectiblePink.height}
                loading="lazy"
              />
              <span className="phase5g-collectible-note">Concepto de colección · sin compra activa</span>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
