import React, { useMemo, useRef, useState } from 'react';
import { allMenuItems, menuCategories, starterMenuItems } from '../data/menu';
import { visualAssets } from '../data/assets';

const discoveryAnchors = [
  {
    id: 'matcha-anchor',
    categoryId: 'cold-drinks',
    eyebrow: 'Para empezar',
    title: 'Verde y cremoso.',
    copy: 'Matcha frío para entrar al universo Maneki con algo familiar.',
    tone: 'olive',
    image: visualAssets.heroCutout,
  },
  {
    id: 'coffee-anchor',
    categoryId: 'cold-drinks',
    eyebrow: 'Para explorar',
    title: 'Frío, profundo, cercano.',
    copy: 'Café frío y sabores dulces para empezar por lo conocido.',
    tone: 'coffee',
    image: visualAssets.coffeeCutout,
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
  },
];

function MenuEntry({ item }) {
  return (
    <article className={`phase3-menu-entry phase5-menu-entry phase5e-menu-entry is-${item.type}`}>
      <div className="phase5e-menu-index" aria-hidden="true">
        <span>{item.type === 'combo' ? 'C' : item.type === 'extra' ? '+' : 'M'}</span>
      </div>
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
    <section className="phase3-section phase3-menu-section phase5e-menu" id="menu" aria-labelledby="menu-title">
      <div className="phase3-container">
        <div className="phase3-section-heading phase5e-menu-intro">
          <p className="phase5e-label">El menú Maneki</p>
          <h2 id="menu-title">Elige con curiosidad.</h2>
          <p>Empieza con seis antojos, descubre una familia y abre el catálogo completo cuando quieras. Los precios se publicarán cuando estén aprobados.</p>
          <div className="phase5e-menu-proof" aria-label="Composición documentada del menú">
            <span><strong>31</strong> bebidas y alimentos</span>
            <span><strong>3</strong> extras</span>
            <span><strong>5</strong> combos</span>
          </div>
        </div>

        <div className="phase5e-discovery" aria-labelledby="discovery-title">
          <div className="phase5e-subheading">
            <p className="phase5e-label">Para empezar</p>
            <h3 id="discovery-title">Encuentra tu primer antojo.</h3>
          </div>
          <div className="phase5e-discovery-grid">
            {discoveryAnchors.map((anchor) => (
              <article className={`phase5e-discovery-card is-${anchor.tone}`} key={anchor.id}>
                <div className="phase5e-discovery-media" aria-hidden={!anchor.image}>
                  {anchor.image ? <img src={anchor.image.src} alt="" width={anchor.image.width} height={anchor.image.height} loading="lazy" /> : <span className="phase5e-food-mark">ONIGIRI</span>}
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
            {showAll ? `Mostrando las ${items.length} opciones del catálogo.` : `Mostrando ${items.length} opciones para empezar. Abre el menú completo para ver las 39 opciones.`}
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
