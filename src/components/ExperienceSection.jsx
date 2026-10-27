import React from 'react';
import { motion } from 'framer-motion';
import {
  TreePine, GlassWater, BookOpen, Camera, Truck, Store, LayoutGrid,
} from 'lucide-react';
import { images } from '../data/images';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

const features = [
  {
    icon: <TreePine size={20} />,
    title: 'Patio central con sakura',
    description: 'Un árbol de sakura como pieza central, rodeado de madera clara y plantas.',
  },
  {
    icon: <GlassWater size={20} />,
    title: 'Barra de bebidas premium',
    description: 'Preparación a la vista con ingredientes importados y utensilios japoneses.',
  },
  {
    icon: <BookOpen size={20} />,
    title: 'Zona para estudiantes y freelancers',
    description: 'WiFi de alta velocidad, enchufes, mesas amplias y ambiente ideal para concentrarse.',
  },
  {
    icon: <Camera size={20} />,
    title: 'Spot instagrameable',
    description: 'Cada rincón está diseñado para crear contenido. Iluminación, texturas y composiciones listas.',
  },
  {
    icon: <Truck size={20} />,
    title: 'Pick-up y delivery',
    description: 'Recoge tu pedido o recíbelo en casa. Empaque premium para mantener la experiencia.',
  },
];

export default function ExperienceSection() {
  const hasMainImage = !!images.cafeInterior;
  const hasTeaRoom = !!images.teaRoom;
  const hasCoffeeBar = !!images.coffeeBar;
  const hasFloorplan = !!images.floorplan;

  return (
    <section className="experience-section section-padding" id="experiencia">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp}
        >
          <span className="section-label">
            <Store size={14} />
            La experiencia
          </span>
          <h2 className="section-title">
            Un refugio fresco entre madera, luz cálida y sakuras.
          </h2>
          <p className="section-subtitle">
            Madera clara, cerámica artesanal, plantas, música lo-fi, barra
            premium y un ambiente diseñado para conversar, estudiar, crear
            contenido o simplemente desconectar.
          </p>
        </motion.div>

        <div className="experience-grid">
          {/* Features list */}
          <motion.div
            className="experience-features"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={stagger}
          >
            {features.map((feature) => (
              <motion.div
                className="experience-feature"
                key={feature.title}
                variants={fadeUp}
              >
                <div className="experience-feature-icon">{feature.icon}</div>
                <div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Visual column */}
          <motion.div
            className="experience-visual"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            {hasMainImage ? (
              <>
                {/* Primary image */}
                <div className="experience-image-card experience-image-primary">
                  <img src={images.cafeInterior} alt="Interior de Sakura Brew Café" />
                  <div className="exp-img-overlay" />
                  <span className="exp-img-label">Ambiente interior</span>
                </div>

                {/* Secondary images row */}
                {(hasTeaRoom || hasCoffeeBar) && (
                  <div className="experience-image-row">
                    {hasTeaRoom && (
                      <div className="experience-image-card experience-image-secondary">
                        <img src={images.teaRoom} alt="Sala de té" />
                        <div className="exp-img-overlay" />
                        <span className="exp-img-label">Ritual & calma</span>
                      </div>
                    )}
                    {hasCoffeeBar && (
                      <div className="experience-image-card experience-image-secondary">
                        <img src={images.coffeeBar} alt="Barra de café premium" />
                        <div className="exp-img-overlay" />
                        <span className="exp-img-label">Craft beverages</span>
                      </div>
                    )}
                  </div>
                )}
              </>
            ) : (
              /* Fallback gradient visual */
              <div className="experience-visual-card">
                <div className="experience-visual-inner">
                  <Store size={48} />
                  <div className="experience-visual-title">
                    Sakura Brew Café
                  </div>
                  <div className="experience-visual-subtitle">
                    Madera · Cerámica · Sakura · Lo-fi
                  </div>
                </div>
              </div>
            )}

            {/* Floorplan card */}
            {hasFloorplan && (
              <div className="floorplan-card">
                <div className="floorplan-card-header">
                  <LayoutGrid size={18} />
                  <div>
                    <h4>Concepto del espacio</h4>
                    <p>Diseñado para flujo, calma y comunidad.</p>
                  </div>
                </div>
                <img src={images.floorplan} alt="Plano conceptual del espacio Sakura Brew" />
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
