import React from 'react';
import { motion } from 'framer-motion';
import { Snowflake, Smartphone, Coffee, Sparkles, Gem } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
};

const pillars = [
  {
    icon: <Snowflake size={24} />,
    title: 'Frío y ligero',
    description: 'Bebidas diseñadas para el calor extremo. Refrescantes, bajas en azúcar y de textura premium.',
  },
  {
    icon: <Smartphone size={24} />,
    title: 'Portable e instagrameable',
    description: 'Lata PET transparente que se ve increíble, se lleva a cualquier lado y genera contenido.',
  },
  {
    icon: <Coffee size={24} />,
    title: 'All-day café',
    description: 'Hot cakes, french toast, crepas y mochi desde temprano hasta la noche. Desayuno todo el día.',
  },
  {
    icon: <Sparkles size={24} />,
    title: 'Experiencia sensorial',
    description: 'Cada visita es un ritual. Aromas, texturas, colores y un ambiente que invita a quedarse.',
  },
];

export default function ValueSection() {
  return (
    <section className="value-section section-padding" id="concepto">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp}
        >
          <span className="section-label">
            <Gem size={14} />
            Propuesta de valor
          </span>
          <h2 className="section-title">
            La primera experiencia asiática fría, portable y aesthetic de Torreón.
          </h2>
        </motion.div>

        <motion.div
          className="value-pillars"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={stagger}
        >
          {pillars.map((item) => (
            <motion.div className="value-pillar" key={item.title} variants={fadeUp}>
              <div className="value-pillar-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.blockquote
          className="value-quote"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={fadeUp}
        >
          "No vendemos solo bebidas. Diseñamos pequeños rituales fríos para
          sobrevivir el calor con estilo."
        </motion.blockquote>
      </div>
    </section>
  );
}
