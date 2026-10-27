import React from 'react';
import { motion } from 'framer-motion';
import { Thermometer, ShoppingBag, Camera, Palette, BarChart3 } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
};

const problems = [
  {
    icon: <Thermometer size={22} />,
    iconClass: 'icon-heat',
    title: 'Calor extremo',
    description: 'Temperaturas superiores a 38°C durante más de 6 meses. El consumo se mueve hacia lo frío y lo ligero.',
  },
  {
    icon: <ShoppingBag size={22} />,
    iconClass: 'icon-offer',
    title: 'Poca oferta asiática fría',
    description: 'La oferta de bebidas asiáticas frías es limitada, cara y poco accesible para el día a día.',
  },
  {
    icon: <Camera size={22} />,
    iconClass: 'icon-photo',
    title: 'Productos poco instagrameables',
    description: 'Los jóvenes buscan experiencias visuales. Las opciones actuales no generan contenido ni engagement.',
  },
  {
    icon: <Palette size={22} />,
    iconClass: 'icon-space',
    title: 'Falta de espacios aesthetic',
    description: 'No hay cafeterías con estética moderna, ambiente premium y diseño pensado para crear contenido.',
  },
];

export default function ProblemSection() {
  return (
    <section className="problem-section section-padding" id="problema">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp}
        >
          <span className="section-label">
            <BarChart3 size={14} />
            Insights de mercado
          </span>
          <h2 className="section-title">
            Torreón tiene calor. Los jóvenes quieren algo distinto.
          </h2>
          <p className="section-subtitle">
            Durante gran parte del año, el consumo se mueve hacia bebidas frías,
            espacios frescos y productos ligeros. Pero la oferta asiática local
            sigue siendo limitada, poco portable y poco memorable.
          </p>
        </motion.div>

        <motion.div
          className="problem-cards"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={stagger}
        >
          {problems.map((item) => (
            <motion.div className="problem-card" key={item.title} variants={fadeUp}>
              <div className={`problem-card-icon ${item.iconClass}`}>
                {item.icon}
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
