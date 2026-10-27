import React from 'react';
import { collections } from '../data/brand';

export default function CollectionsSection() {
  return (
    <section className="phase3-section phase3-collections" id="colecciones" aria-labelledby="colecciones-title">
      <div className="phase3-container">
        <div className="phase3-section-heading">
          <p className="phase3-kicker">El universo Maneki</p>
          <h2 id="colecciones-title">Colecciones que cambian con la curiosidad.</h2>
        </div>
        <div className="phase3-collection-grid">
          {collections.map((collection) => (
            <article className="phase3-collection" key={collection.id}>
              <div className="phase3-collection-media" aria-hidden="true">{collection.id === 'seasonal' ? 'Temporada' : 'Neko Neko'}</div>
              <p className="phase3-status">{collection.status === 'PROPOSED' ? 'Concepto en evaluación' : collection.status}</p>
              <h3>{collection.title}</h3>
              <p>{collection.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
