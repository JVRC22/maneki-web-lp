import React, { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { UtensilsCrossed, Star } from 'lucide-react';
import { menuItems } from '../data/menu';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

function MenuCard({ item }) {
  const [imgFailed, setImgFailed] = useState(false);
  const showImage = item.image && !imgFailed;

  const handleError = useCallback(() => {
    setImgFailed(true);
  }, []);

  return (
    <motion.div className="menu-card" variants={fadeUp}>
      <div className="menu-card-image">
        {showImage && (
          <img
            src={process.env.PUBLIC_URL + item.image}
            alt={item.name}
            className="menu-card-photo"
            onError={handleError}
            loading="lazy"
          />
        )}
        <div
          className="menu-card-gradient"
          style={{ background: item.gradient }}
        />
        <span
          className="menu-card-category"
          style={{ color: item.accent }}
        >
          {item.category}
        </span>
      </div>
      <div className="menu-card-body">
        <h3 className="menu-card-name">{item.name}</h3>
        <p className="menu-card-desc">{item.description}</p>
        <div className="menu-card-footer">
          <span className="menu-card-price" style={{ color: item.accent }}>
            {item.price}
          </span>
          <span className="menu-card-detail">
            <Star size={12} />
            Premium
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export default function MenuShowcase() {
  return (
    <section className="menu-section section-padding" id="menu">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp}
        >
          <span className="section-label">
            <UtensilsCrossed size={14} />
            Menú destacado
          </span>
          <h2 className="section-title">
            Sabores que no encontrarás en otro lado.
          </h2>
          <p className="section-subtitle">
            Cada producto es una fusión cuidada entre tradición asiática y el
            paladar local. Servidos con estética premium en cada detalle.
          </p>
        </motion.div>

        <motion.div
          className="menu-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={stagger}
        >
          {menuItems.map((item) => (
            <MenuCard key={item.id} item={item} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
