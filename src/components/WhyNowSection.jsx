import React from 'react';
import { motion } from 'framer-motion';
import { Flame, TrendingUp, Camera, Globe, Zap } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.08 } },
};

const chips = [
  { icon: <Flame size={16} />, label: 'Calor sostenido en La Laguna', color: 'var(--yuzu)' },
  { icon: <TrendingUp size={16} />, label: 'Boom del consumo asiático en México', color: 'var(--matcha)' },
  { icon: <Camera size={16} />, label: 'Generación aesthetic + UGC', color: 'var(--sakura)' },
  { icon: <Globe size={16} />, label: 'K-Culture y J-Culture mainstream', color: 'var(--copper)' },
];

export default function WhyNowSection() {
  return (
    <section className="whynow-section section-padding" id="por-que-ahora">
      <div className="container">
        <motion.div
          className="whynow-inner"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={stagger}
        >
          <motion.span className="section-label" style={{ margin: '0 auto var(--space-xl)' }} variants={fadeUp}>
            <Zap size={14} />
            ¿Por qué ahora?
          </motion.span>

          <motion.h2 className="whynow-title" variants={fadeUp}>
            El calor, la cultura asiática y el consumo aesthetic ya se encontraron.
          </motion.h2>

          <motion.p className="whynow-text" variants={fadeUp}>
            Sakura Brew convierte esa tendencia en una experiencia local, portable
            y memorable. No es solo una bebida fría. Es un ritual portable diseñado
            para probarse, fotografiarse y recordarse.
          </motion.p>

          <motion.div className="whynow-chips" variants={stagger}>
            {chips.map((chip) => (
              <motion.div
                className="whynow-chip"
                key={chip.label}
                variants={fadeUp}
                style={{ '--chip-color': chip.color }}
              >
                <span style={{ color: chip.color }}>{chip.icon}</span>
                {chip.label}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
