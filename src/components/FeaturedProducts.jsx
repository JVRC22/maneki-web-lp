import React, { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { visualAssets } from '../data/assets';

const beverages = [
  {
    id: 'matcha',
    label: 'Matcha frío',
    title: 'Verde y cremoso.',
    description: 'Una entrada amable al universo Maneki, reinterpretada desde sabores familiares.',
    note: 'Concepto visual de producto.',
    image: visualAssets.heroCutout,
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
    image: visualAssets.seasonalCutout,
    tone: 'pink',
    href: '#colecciones',
    linkLabel: 'Ver colecciones',
  },
  {
    id: 'coffee',
    label: 'Café frío',
    title: 'Profundo, frío, cercano.',
    description: 'Un café de textura intensa para empezar por algo conocido y descubrir lo demás.',
    note: 'Concepto visual de producto.',
    image: visualAssets.coffeeCutout,
    tone: 'coffee',
    href: '#menu',
    linkLabel: 'Abrir menú',
  },
];

const transitionEase = [0.23, 1, 0.32, 1];

export default function FeaturedProducts() {
  const [activeId, setActiveId] = useState(beverages[0].id);
  const [direction, setDirection] = useState(1);
  const prefersReducedMotion = useReducedMotion();
  const activeIndex = beverages.findIndex((beverage) => beverage.id === activeId);
  const active = beverages[activeIndex] ?? beverages[0];

  const selectBeverage = (id) => {
    const nextIndex = beverages.findIndex((beverage) => beverage.id === id);
    if (nextIndex === -1 || id === activeId) return;
    setDirection(nextIndex > activeIndex ? 1 : -1);
    setActiveId(id);
  };

  return (
    <section className={`phase3-section phase5c-featured is-${active.tone}`} aria-labelledby="featured-title">
      <div className="phase3-container phase5c-featured-shell">
        <div className="phase5c-featured-topline">
          <h2 id="featured-title">Prueba otro mundo.</h2>
          <p>Elige una bebida y deja que el color te lleve.</p>
        </div>

        <div
          className="phase5c-featured-stage"
          id="specimen-panel"
          role="tabpanel"
          aria-labelledby={`specimen-tab-${active.id}`}
        >
          <motion.div
            className="phase5c-featured-field"
            key={`field-${active.id}`}
            aria-hidden="true"
            initial={prefersReducedMotion ? false : { opacity: 0, transform: 'scaleX(0.4)' }}
            animate={{ opacity: 1, transform: 'scaleX(1)' }}
            transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.28, ease: transitionEase }}
          />
          <AnimatePresence initial={false} custom={direction} mode="sync">
            <motion.div
              key={active.id}
              className="phase5c-featured-state"
              custom={direction}
              initial={prefersReducedMotion ? false : 'enter'}
              animate="center"
              exit={prefersReducedMotion ? undefined : 'exit'}
              variants={{
                enter: (travel) => ({ opacity: 0, transform: `translate3d(${travel * 72}px, 0, 0) scale(0.94)` }),
                center: { opacity: 1, transform: 'translate3d(0, 0, 0) scale(1)' },
                exit: (travel) => ({ opacity: 0, transform: `translate3d(${travel * -52}px, 0, 0) scale(0.97)` }),
              }}
              transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.28, ease: transitionEase }}
            >
              <div className="phase5c-featured-product">
                <img src={active.image.src} alt={active.image.alt} width={active.image.width} height={active.image.height} loading="lazy" />
              </div>
              <div className="phase5c-featured-copy">
                <h3>{active.title}</h3>
                <p>{active.description}</p>
                <span className="phase5c-featured-note">{active.note}</span>
                <a href={active.href}>{active.linkLabel}</a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="phase5c-featured-controls">
          <div className="phase5c-featured-tabs" role="tablist" aria-label="Elegir una bebida destacada">
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
                onKeyDown={(event) => {
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
                }}
              >
                <span>{beverage.label}</span>
              </button>
            ))}
          </div>
          <p className="phase5c-featured-caption" aria-live="polite">{active.label} seleccionado · {active.note}</p>
        </div>
      </div>
    </section>
  );
}
