import React, { useMemo, useState } from 'react';
import { allMenuItems, menuCategories } from '../data/menu';

function Price({ item }) {
  return <span className="phase3-menu-price">{item.publicPrice || 'Precio por confirmar'}</span>;
}

function MenuEntry({ item }) {
  return (
    <article className="phase3-menu-entry">
      <div className="phase3-menu-media" aria-label={`Imagen de ${item.name} por aprobar`}>
        <span>Imagen por aprobar</span>
      </div>
      <div className="phase3-menu-copy">
        <div className="phase3-menu-entry-header">
          <h3>{item.name}</h3>
          <Price item={item} />
        </div>
        <p>{item.description}</p>
        {item.flavors?.length > 0 && (
          <p className="phase3-menu-flavors"><strong>Sabores:</strong> {item.flavors.join(' · ')}</p>
        )}
        {item.options?.length > 0 && (
          <p className="phase3-menu-flavors"><strong>Opciones:</strong> {item.options.join(' · ')}</p>
        )}
        {item.discoveryLabel && <span className="phase3-menu-label">{item.discoveryLabel}</span>}
      </div>
    </article>
  );
}

export default function MenuExplorer() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const items = useMemo(
    () => selectedCategory === 'all'
      ? allMenuItems
      : allMenuItems.filter((item) => item.category === selectedCategory),
    [selectedCategory]
  );

  return (
    <section className="phase3-section phase3-menu-section" id="menu" aria-labelledby="menu-title">
      <div className="phase3-container">
        <div className="phase3-section-heading">
          <p className="phase3-kicker">El menú</p>
          <h2 id="menu-title">Empieza por lo conocido. Sigue la curiosidad.</h2>
          <p>Explora bebidas, comida, extras y combos. Los precios mostrados en la documentación todavía están pendientes de aprobación para lanzamiento.</p>
        </div>

        <div className="phase3-menu-tabs" role="tablist" aria-label="Categorías del menú">
          {menuCategories.map((category) => (
            <button
              key={category.id}
              type="button"
              role="tab"
              aria-selected={selectedCategory === category.id}
              className={selectedCategory === category.id ? 'is-selected' : ''}
              onClick={() => setSelectedCategory(category.id)}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="phase3-menu-results" aria-live="polite">
          <p className="phase3-results-count">{items.length} {items.length === 1 ? 'opción' : 'opciones'}</p>
          <div className="phase3-menu-list">
            {items.map((item) => <MenuEntry key={item.id} item={item} />)}
          </div>
        </div>
      </div>
    </section>
  );
}
