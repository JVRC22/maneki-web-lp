import React, { useMemo, useRef, useState } from 'react';
import { allMenuItems, menuCategories, starterMenuItems } from '../data/menu';
import { menuPhotoAssets, visualAssets } from '../data/assets';
import { gsap, prefersReducedMotion, useGSAP } from '../motion/gsap';

const discoveryAnchors = [
  {
    id: 'matcha-anchor',
    categoryId: 'cold-drinks',
    eyebrow: 'Para empezar',
    title: 'Verde y cremoso.',
    copy: 'Matcha frío para entrar al universo Maneki con algo familiar.',
    tone: 'olive',
    image: menuPhotoAssets['matcha-kiss'],
  },
  {
    id: 'coffee-anchor',
    categoryId: 'cold-drinks',
    eyebrow: 'Para explorar',
    title: 'Frío, profundo, cercano.',
    copy: 'Café frío y sabores dulces para empezar por lo conocido.',
    tone: 'coffee',
    image: menuPhotoAssets['kohi-rocks'],
  },
  {
    id: 'seasonal-anchor',
    categoryId: 'cold-drinks',
    eyebrow: 'Algo distinto',
    title: 'Un color nuevo.',
    copy: 'Una bebida conceptual para imaginar la siguiente temporada.',
    tone: 'pink',
    image: visualAssets.seasonalCutout,
  },
  {
    id: 'food-anchor',
    categoryId: 'savory',
    eyebrow: 'Comida salada',
    title: 'Cruje por fuera.',
    copy: 'Onigiri empanizado, sin alga, con sabores que se sienten cerca.',
    tone: 'burgundy',
    image: menuPhotoAssets['onigiri-crunch'],
  },
];

function MenuEntry({ item }) {
  const image = menuPhotoAssets[item.id];

  return (
    <article className={`phase3-menu-entry phase5-menu-entry phase5e-menu-entry is-${item.type} ${image ? 'has-photo' : 'no-photo'}`}>
      {image ? (
        <div className="phase5f-menu-photo">
          <img src={image.src} srcSet={image.srcSet} sizes={image.sizes} alt={image.alt} width={image.width} height={image.height} loading="lazy" decoding="async" />
        </div>
      ) : (
        <div className="phase5e-menu-index" aria-hidden="true">
          <span>{item.type === 'combo' ? 'C' : item.type === 'extra' ? '+' : 'M'}</span>
        </div>
      )}
      <div className="phase3-menu-copy phase5-menu-copy phase5e-menu-copy">
        <div className="phase3-menu-entry-header">
          <h4>{item.name}</h4>
        </div>
        <p>{item.description}</p>
        {item.flavors?.length > 0 && (
          <div className="phase5e-flavor-line"><strong>Sabores</strong><span>{item.flavors.join(' · ')}</span></div>
        )}
        {item.options?.length > 0 && (
          <div className="phase5e-flavor-line"><strong>Opciones</strong><span>{item.options.join(' · ')}</span></div>
        )}
      </div>
      <div className="phase3-menu-meta phase5-menu-meta">
        <div className="phase5f-menu-price" aria-label={`Precio ${item.publicPrice} pesos mexicanos`}>
          <strong>{item.publicPrice}</strong>
          <span>MXN</span>
        </div>
        {item.discoveryLabel && <span className="phase3-menu-label">{item.discoveryLabel}</span>}
        <span className="phase5e-menu-type">{item.type === 'combo' ? 'Para compartir' : item.type === 'extra' ? 'A tu manera' : 'Maneki'}</span>
      </div>
    </article>
  );
}

function groupByFamily(items) {
  return items.reduce((groups, item) => {
    const existing = groups.find((group) => group.label === item.family);
    if (existing) {
      existing.items.push(item);
    } else {
      groups.push({ label: item.family, items: [item] });
    }
    return groups;
  }, []);
}

export default function MenuExplorer() {
  const menuRef = useRef(null);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showAll, setShowAll] = useState(false);
  const categoryButtonRefs = useRef([]);
  const filteredItems = useMemo(
    () => selectedCategory === 'all'
      ? allMenuItems
      : allMenuItems.filter((item) => item.category === selectedCategory),
    [selectedCategory]
  );
  const items = showAll || selectedCategory !== 'all' ? filteredItems : starterMenuItems;
  const groupedItems = useMemo(() => groupByFamily(items), [items]);

  useGSAP(() => {
    if (prefersReducedMotion() || !menuRef.current) return undefined;

    const discovery = menuRef.current.querySelector('.phase5l-discovery');
    if (!discovery) return undefined;

    const entrance = gsap.timeline({
      defaults: { ease: 'power3.out' },
      scrollTrigger: {
        trigger: discovery,
        start: 'top 82%',
        once: true,
      },
    });

    entrance
      .fromTo('.phase5l-menu-intro h2',
        { opacity: 0, transform: 'translate3d(0, 22px, 0)' },
        { opacity: 1, transform: 'translate3d(0, 0, 0)', duration: 0.58 },
        0
      )
      .fromTo('.phase5l-menu-intro > p:not(.phase5e-label)',
        { opacity: 0, transform: 'translate3d(0, 14px, 0)' },
        { opacity: 1, transform: 'translate3d(0, 0, 0)', duration: 0.42 },
        0.08
      )
      .fromTo('.phase5l-menu-proof',
        { opacity: 0, transform: 'translate3d(0, 12px, 0)' },
        { opacity: 1, transform: 'translate3d(0, 0, 0)', duration: 0.32 },
        0.16
      )
      .fromTo('.phase5l-discovery-heading',
        { opacity: 0, transform: 'translate3d(0, 18px, 0)' },
        { opacity: 1, transform: 'translate3d(0, 0, 0)', duration: 0.52 },
        0.24
      )
      .fromTo('.phase5l-discovery-card',
        { opacity: 0, transform: 'translate3d(0, 24px, 0)' },
        { opacity: 1, transform: 'translate3d(0, 0, 0)', duration: 0.56, stagger: 0.09 },
        0.34
      );

    return () => entrance.kill();
  }, { scope: menuRef });

  const selectCategory = (categoryId) => {
    setSelectedCategory(categoryId);
    setShowAll(true);
  };

  const handleCategoryKeyDown = (event, index) => {
    const direction = event.key === 'ArrowRight' || event.key === 'ArrowDown' ? 1 : event.key === 'ArrowLeft' || event.key === 'ArrowUp' ? -1 : 0;
    const targetIndex = event.key === 'Home' ? 0 : event.key === 'End' ? menuCategories.length - 1 : (index + direction + menuCategories.length) % menuCategories.length;
    if (direction || event.key === 'Home' || event.key === 'End') {
      event.preventDefault();
      const targetCategory = menuCategories[targetIndex];
      selectCategory(targetCategory.id);
      categoryButtonRefs.current[targetIndex]?.focus();
    }
  };

  const handleDiscoveryClick = (categoryId) => {
    selectCategory(categoryId);
    window.requestAnimationFrame(() => document.getElementById('menu-results')?.focus());
  };

  return (
    <section ref={menuRef} className="phase3-section phase3-menu-section phase5e-menu" id="menu" aria-labelledby="menu-title">
      <div className="phase3-container">
        <div className="phase3-section-heading phase5e-menu-intro phase5l-menu-intro">
          <p className="phase5e-label">El menú Maneki</p>
          <h2 id="menu-title">Elige con curiosidad.</h2>
          <p>Empieza con seis antojos, descubre una familia y abre el catálogo completo cuando quieras. Cada precio está expresado en pesos mexicanos.</p>
          <div className="phase5e-menu-proof phase5l-menu-proof" aria-label="Composición documentada del menú">
            <span><strong>31</strong> bebidas y alimentos</span>
            <span><strong>3</strong> extras</span>
            <span><strong>4</strong> combos</span>
          </div>
        </div>

        <div className="phase5e-discovery phase5l-discovery" aria-labelledby="discovery-title">
          <div className="phase5e-subheading phase5l-discovery-heading">
            <p className="phase5e-label">Para empezar</p>
            <h3 id="discovery-title">Encuentra tu primer antojo.</h3>
          </div>
          <div className="phase5e-discovery-grid">
            {discoveryAnchors.map((anchor) => (
              <article className={`phase5e-discovery-card phase5l-discovery-card is-${anchor.tone}`} key={anchor.id}>
                <div className="phase5e-discovery-media" aria-hidden={!anchor.image}>
                  {anchor.image ? <img src={anchor.image.src} srcSet={anchor.image.srcSet} sizes={anchor.image.sizes} alt="" width={anchor.image.width} height={anchor.image.height} loading="lazy" /> : (
                    <span className="phase5j-food-mark">
                      <strong>ONIGIRI</strong>
                      <small>empanizado<br />sin alga</small>
                    </span>
                  )}
                </div>
                <div className="phase5e-discovery-copy">
                  <p>{anchor.eyebrow}</p>
                  <h4>{anchor.title}</h4>
                  <span>{anchor.copy}</span>
                  <button type="button" onClick={() => handleDiscoveryClick(anchor.categoryId)}>Explorar familia</button>
                </div>
              </article>
            ))}
          </div>
          <p className="phase5e-discovery-hint" aria-hidden="true">Desliza para descubrir más →</p>
        </div>

        <div className="phase3-menu-tabs-wrap">
          <div className="phase3-menu-tabs phase5e-menu-tabs" role="tablist" aria-label="Categorías del menú">
          {menuCategories.map((category, index) => (
            <button
              key={category.id}
              ref={(element) => { categoryButtonRefs.current[index] = element; }}
              type="button"
              role="tab"
              id={`menu-tab-${category.id}`}
              aria-controls="menu-results"
              aria-selected={selectedCategory === category.id}
              tabIndex={selectedCategory === category.id ? 0 : -1}
              className={selectedCategory === category.id ? 'is-selected' : ''}
              onClick={() => selectCategory(category.id)}
              onKeyDown={(event) => handleCategoryKeyDown(event, index)}
            >
              {category.label}
            </button>
          ))}
          </div>
          <p className="phase3-menu-tabs-hint">Desliza para ver más categorías</p>
        </div>

        <div className="phase3-menu-results phase5e-menu-results" id="menu-results" role="tabpanel" tabIndex="-1" aria-labelledby={`menu-tab-${selectedCategory}`} aria-describedby="menu-status">
          <div className="phase3-menu-results-summary phase5e-menu-results-summary">
            <div>
              <p className="phase5e-label">Catálogo completo</p>
              <p className="phase5e-results-note">Cada familia conserva sus sabores, variantes y estado de descubrimiento.</p>
            </div>
            <button
              className="phase3-menu-discovery-toggle phase5e-menu-toggle"
              type="button"
              aria-expanded={showAll}
              onClick={() => setShowAll((visible) => !visible)}
            >
              {showAll ? 'Volver a empezar por aquí' : 'Explorar el menú completo'}
            </button>
          </div>
          <p className="phase3-visually-hidden" id="menu-status" role="status" aria-live="polite" aria-atomic="true">
            {showAll ? `Mostrando las ${items.length} opciones del catálogo.` : `Mostrando ${items.length} opciones para empezar. Abre el menú completo para ver las 38 opciones.`}
          </p>
          <div className="phase3-menu-families phase5e-menu-families">
            {groupedItems.map((group) => (
              <section className="phase3-menu-family" key={group.label} aria-labelledby={`family-${group.label.replace(/\s+/g, '-').toLowerCase()}`}>
                <h3 id={`family-${group.label.replace(/\s+/g, '-').toLowerCase()}`}>{group.label}</h3>
                <div className="phase3-menu-list">
                  {group.items.map((item) => <MenuEntry key={item.id} item={item} />)}
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
