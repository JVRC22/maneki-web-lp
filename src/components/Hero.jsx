import React from 'react';
import { motion } from 'framer-motion';
import { Cherry, Leaf, Coffee, MapPin, ArrowRight, Eye, Sparkles } from 'lucide-react';
import { images } from '../data/images';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] },
  }),
};

const badges = [
  { icon: <Leaf size={13} />, label: 'Matcha ceremonial' },
  { icon: <Coffee size={13} />, label: 'Lata PET transparente' },
  { icon: <Sparkles size={13} />, label: 'All-day breakfast' },
  { icon: <MapPin size={13} />, label: 'Torreón, Coahuila' },
];

export default function Hero() {
  const hasHeroImage = !!images.sakuraCourtyard;

  return (
    <section className="hero" id="inicio">
      {/* Background: real image or gradient fallback */}
      {hasHeroImage ? (
        <div className="hero-bg-image" aria-hidden="true">
          <img src={images.sakuraCourtyard} alt="" />
          <div className="hero-bg-overlay" />
        </div>
      ) : (
        <div className="hero-bg" aria-hidden="true">
          <div className="hero-gradient-1" />
          <div className="hero-gradient-2" />
          <div className="hero-gradient-3" />
        </div>
      )}

      <div className="container hero-content">
        {/* Text Column */}
        <div className="hero-text">
          <motion.div
            className="hero-badge-row"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
          >
            {badges.map((badge) => (
              <span className="hero-badge" key={badge.label}>
                {badge.icon}
                {badge.label}
              </span>
            ))}
          </motion.div>

          <motion.h1
            className="hero-title"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
          >
            <span className="accent-sakura">Sakura Brew</span>
            <br />
            Café
          </motion.h1>

          <motion.p
            className="hero-tagline"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
          >
            Asia en frío. Diseñado para Torreón.
          </motion.p>

          <motion.p
            className="hero-description"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={3}
          >
            Bebidas asiáticas frías, hot cakes artesanales y postres aesthetic
            para escapar del calor sin salir de la ciudad.
          </motion.p>

          <motion.div
            className="hero-cta-row"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={4}
          >
            <a href="#lista-vip" className="btn-primary">
              Quiero mi invitación de apertura
              <ArrowRight size={18} />
            </a>
            <a href="#concepto" className="btn-secondary">
              <Eye size={18} />
              Ver concepto
            </a>
          </motion.div>
        </div>

        {/* Visual Column */}
        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="hero-visual-container">
            {/* Main visual — image or gradient fallback */}
            {images.coffeeBar ? (
              <div className="hero-visual-image">
                <img src={images.coffeeBar} alt="Barra de bebidas Sakura Brew Café" />
                <div className="hero-image-overlay" />
              </div>
            ) : (
              <div className="hero-visual-main">
                <div className="hero-visual-inner">
                  <div className="hero-visual-icon">
                    <Cherry size={36} color="white" />
                  </div>
                  <div className="hero-visual-label">Sakura Brew Café</div>
                  <div className="hero-visual-sublabel">
                    Matcha · Bubble Tea · Dalgona · Mochi
                  </div>
                </div>
              </div>
            )}

            {/* Status card — Pre-apertura metrics */}
            <motion.div
              className="hero-status-card"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.9 }}
            >
              <div className="hero-status-items">
                <div className="hero-status-item">
                  <span className="hero-status-dot dot-live" />
                  Pre-apertura activa
                </div>
                <div className="hero-status-item">
                  <span className="hero-status-dot dot-sakura" />
                  Lista VIP abierta
                </div>
                <div className="hero-status-item">
                  <span className="hero-status-dot dot-copper" />
                  Torreón, Coahuila
                </div>
              </div>
            </motion.div>

            {/* Floating cards */}
            <motion.div
              className="hero-float-card card-matcha"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
            >
              <Leaf size={15} />
              Matcha Ceremonial
            </motion.div>

            <motion.div
              className="hero-float-card card-price"
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
            >
              <Coffee size={15} />
              Desde $70 MXN
            </motion.div>

            <motion.div
              className="hero-float-card card-location"
              animate={{ y: [0, -7, 0] }}
              transition={{ repeat: Infinity, duration: 5.5, ease: 'easeInOut' }}
            >
              <MapPin size={15} />
              Torreón, Coahuila
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
