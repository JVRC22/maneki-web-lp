import React, { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { menuPhotoAssets } from '../data/assets';

const AUTOPLAY_DELAY = 5000;

const beverages = [
  {
    id: 'matcha',
    label: 'Matcha frío',
    title: 'Verde y cremoso.',
    description: 'Una entrada amable al universo Maneki, reinterpretada desde sabores familiares.',
    image: menuPhotoAssets['matcha-kiss'],
    tone: 'olive',
    href: '#menu',
    linkLabel: 'Abrir menú',
  },
  {
    id: 'seasonal',
    label: 'Por temporada',
    title: 'Algo nuevo cambia el ritmo.',
    description: 'Una bebida rosada para imaginar la siguiente colección, sin prometer disponibilidad.',
    note: 'Colección conceptual en evaluación.',
    image: menuPhotoAssets['hanami-dream'],
    tone: 'pink',
    href: '#colecciones',
    linkLabel: 'Ver colecciones',
  },
  {
    id: 'coffee',
    label: 'Café frío',
    title: 'Profundo, frío, cercano.',
    description: 'Un café de textura intensa para empezar por algo conocido y descubrir lo demás.',
    image: menuPhotoAssets['kohi-rocks'],
    tone: 'coffee',
    href: '#menu',
    linkLabel: 'Abrir menú',
  },
];

const transitionEase = [0.23, 1, 0.32, 1];

export default function FeaturedProducts() {
  const carouselRef = useRef(null);
  const [activeId, setActiveId] = useState(beverages[0].id);
  const [direction, setDirection] = useState(1);
  const [selectionNonce, setSelectionNonce] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isFocusedWithin, setIsFocusedWithin] = useState(false);
  const [isInView, setIsInView] = useState(() => typeof IntersectionObserver === 'undefined');
  const [isDocumentVisible, setIsDocumentVisible] = useState(() => (
    typeof document === 'undefined' || document.visibilityState !== 'hidden'
  ));
  const prefersReducedMotion = useReducedMotion();
  const activeIndex = beverages.findIndex((beverage) => beverage.id === activeId);
  const active = beverages[activeIndex] ?? beverages[0];

  const selectBeverage = (id) => {
    const nextIndex = beverages.findIndex((beverage) => beverage.id === id);
    if (nextIndex === -1) return;
    if (id !== activeId) {
      setDirection(nextIndex > activeIndex ? 1 : -1);
      setActiveId(id);
    }
    setSelectionNonce((nonce) => nonce + 1);
  };

  useEffect(() => {
    const focusIsInside = carouselRef.current?.contains(document.activeElement);
    if (prefersReducedMotion || isHovered || isFocusedWithin || focusIsInside || !isInView || !isDocumentVisible) return undefined;

    const timer = window.setTimeout(() => {
      if (carouselRef.current?.contains(document.activeElement)) {
        setSelectionNonce((nonce) => nonce + 1);
        return;
      }
      const nextIndex = (activeIndex + 1) % beverages.length;
      setDirection(1);
      setActiveId(beverages[nextIndex].id);
    }, AUTOPLAY_DELAY);

    return () => window.clearTimeout(timer);
  }, [activeId, activeIndex, isDocumentVisible, isFocusedWithin, isHovered, isInView, prefersReducedMotion, selectionNonce]);

  useEffect(() => {
    const handleVisibilityChange = () => setIsDocumentVisible(document.visibilityState !== 'hidden');
    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, []);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return undefined;

    const handleFocusChange = () => {
      setIsFocusedWithin(carousel.contains(document.activeElement));
    };
    document.addEventListener('focusin', handleFocusChange);
    document.addEventListener('focusout', handleFocusChange);
    return () => {
      document.removeEventListener('focusin', handleFocusChange);
      document.removeEventListener('focusout', handleFocusChange);
    };
  }, []);

  useEffect(() => {
    if (!carouselRef.current || typeof IntersectionObserver === 'undefined') return undefined;

    const observer = new IntersectionObserver(([entry]) => {
      setIsInView(entry.isIntersecting && entry.intersectionRatio >= 0.18);
    }, { threshold: 0.18 });
    observer.observe(carouselRef.current);

    return () => observer.disconnect();
  }, []);

  const handleBlur = (event) => {
    if (!event.currentTarget.contains(event.relatedTarget)) setIsFocusedWithin(false);
  };

  const handleKeyDown = (event, index) => {
    const key = event.key;
    if (!['ArrowRight', 'ArrowDown', 'ArrowLeft', 'ArrowUp', 'Home', 'End'].includes(key)) return;
    event.preventDefault();
    const nextIndex = key === 'Home'
      ? 0
      : key === 'End'
        ? beverages.length - 1
        : (index + (key === 'ArrowRight' || key === 'ArrowDown' ? 1 : -1) + beverages.length) % beverages.length;
    const next = beverages[nextIndex];
    selectBeverage(next.id);
    window.requestAnimationFrame(() => document.getElementById(`specimen-tab-${next.id}`)?.focus());
  };

  return (
    <section
      ref={carouselRef}
      className={`phase3-section phase5c-featured phase5n-featured is-${active.tone}`}
      aria-labelledby="featured-title"
      onFocus={() => setIsFocusedWithin(true)}
      onFocusCapture={() => setIsFocusedWithin(true)}
      onBlur={handleBlur}
      onBlurCapture={handleBlur}
    >
      <div className="phase3-container phase5c-featured-shell phase5n-featured-shell">
        <div className="phase5c-featured-topline phase5n-featured-topline">
          <h2 id="featured-title">Prueba otro mundo.</h2>
          <p>Elige una bebida y deja que el color te lleve.</p>
        </div>

        <div
          className="phase5c-featured-stage phase5n-featured-stage"
          id="specimen-panel"
          role="tabpanel"
          aria-labelledby={`specimen-tab-${active.id}`}
        >
          <motion.div
            className="phase5c-featured-field phase5n-featured-field"
            key={`field-${active.id}`}
            aria-hidden="true"
            initial={prefersReducedMotion ? false : { opacity: 0, transform: 'scaleX(0.4)' }}
            animate={{ opacity: 1, transform: 'scaleX(1)' }}
            transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.28, ease: transitionEase }}
          />
          <div className="phase5n-featured-decor" aria-hidden="true">
            <span className="phase5n-featured-orbit phase5n-featured-orbit-one" />
            <span className="phase5n-featured-orbit phase5n-featured-orbit-two" />
            <span className="phase5n-featured-spark phase5n-featured-spark-one" />
            <span className="phase5n-featured-spark phase5n-featured-spark-two" />
            <span className="phase5n-featured-paw" />
          </div>
          <AnimatePresence initial={false} custom={direction} mode="sync">
            <motion.div
              key={active.id}
              className="phase5c-featured-state phase5n-featured-state"
              custom={direction}
              initial={prefersReducedMotion ? false : 'enter'}
              animate="center"
              exit={prefersReducedMotion ? undefined : 'exit'}
              variants={{
                enter: (travel) => ({ opacity: 0, transform: `translate3d(${travel * 72}px, 0, 0) scale(0.94)` }),
                center: { opacity: 1, transform: 'translate3d(0, 0, 0) scale(1)' },
                exit: (travel) => ({ opacity: 0, transform: `translate3d(${travel * -52}px, 0, 0) scale(0.97)` }),
              }}
              transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.36, ease: transitionEase }}
            >
              <div className="phase5c-featured-product phase5n-featured-product">
                <div className="phase5n-featured-product-art">
                  <img src={active.image.src} alt={active.image.alt} width={active.image.width} height={active.image.height} loading="lazy" />
                </div>
              </div>
              <div className="phase5c-featured-copy phase5n-featured-copy">
                <h3>{active.title}</h3>
                <p>{active.description}</p>
                {active.note && <span className="phase5c-featured-note phase5n-featured-note">{active.note}</span>}
                <a href={active.href}>{active.linkLabel}</a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div
          className="phase5c-featured-controls phase5n-featured-controls"
          data-testid="featured-controls"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="phase5c-featured-tabs phase5n-featured-tabs" role="tablist" aria-label="Elegir una bebida destacada">
            {beverages.map((beverage, index) => (
              <button
                key={beverage.id}
                type="button"
                role="tab"
                id={`specimen-tab-${beverage.id}`}
                aria-controls="specimen-panel"
                aria-selected={active.id === beverage.id}
                aria-label={beverage.label}
                className={active.id === beverage.id ? 'is-selected' : ''}
                onClick={() => selectBeverage(beverage.id)}
                onKeyDown={(event) => handleKeyDown(event, index)}
              >
                <span>{beverage.label}</span>
              </button>
            ))}
          </div>
          <p className="phase5c-featured-caption phase5n-featured-caption" aria-live="off">
            {active.label} seleccionado{active.note ? ` · ${active.note}` : ''}
          </p>
        </div>
      </div>
    </section>
  );
}
