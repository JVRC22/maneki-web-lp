import React from 'react';
import { motion } from 'framer-motion';
import {
  Cherry, Fingerprint, Lightbulb, Heart, Leaf, Sprout,
  Compass, Eye, BookOpen, Quote,
} from 'lucide-react';
import { aboutData } from '../data/about';

const iconMap = {
  Fingerprint,
  Lightbulb,
  Heart,
  Leaf,
  Sprout,
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function AboutSection() {
  const storyImage = `${process.env.PUBLIC_URL}/images/about/about-story.png`;
  const missionImage = `${process.env.PUBLIC_URL}/images/about/founder-moment.png`;
  const visionImage = `${process.env.PUBLIC_URL}/images/about/craft-process.png`;
  const valuesImage = `${process.env.PUBLIC_URL}/images/about/values-detail.png`;

  return (
    <section className="about-section section-padding" id="nosotros">
      <div className="container">
        {/* Section header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp}
        >
          <span className="section-label">
            <Cherry size={14} />
            Nosotros
          </span>
          <h2 className="section-title">Sobre Sakura Brew</h2>
          <p className="section-subtitle">
            Un refugio donde el sabor asiático abraza el desayuno todo el día.
          </p>
        </motion.div>

        {/* Story block */}
        <div className="about-story">
          <motion.div
            className="about-story-text"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={stagger}
          >
            <motion.h3 className="about-story-title" variants={fadeUp}>
              <BookOpen size={20} />
              {aboutData.story.title}
            </motion.h3>
            {aboutData.story.paragraphs.map((paragraph, idx) => (
              <motion.p key={idx} className="about-story-paragraph" variants={fadeUp}>
                {idx === 0 && (
                  <Quote size={18} className="about-quote-icon" />
                )}
                {paragraph}
              </motion.p>
            ))}
          </motion.div>

          <motion.div
            className="about-story-visual"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            {storyImage ? (
              <div className="about-story-image">
                <img src={storyImage} alt="Interior de Sakura Brew Café" />
                <div className="about-story-overlay" />
              </div>
            ) : (
              <div className="about-story-placeholder">
                <Cherry size={48} />
                <span>Sakura Brew Café</span>
              </div>
            )}
          </motion.div>
        </div>

        {/* Mission & Vision cards */}
        <motion.div
          className="about-pillars"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={stagger}
        >
          <motion.div className="about-pillar about-pillar-mission" variants={fadeUp}>
            <div className="about-pillar-image" style={{ marginBottom: '1.5rem', borderRadius: '1rem', overflow: 'hidden', height: '200px', position: 'relative' }}>
               <img src={missionImage} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="Mission" />
               <div className="about-pillar-icon" style={{ position: 'absolute', top: '1rem', right: '1rem', margin: 0, zIndex: 2, background: 'rgba(14,10,7,0.5)', backdropFilter: 'blur(10px)' }}>
                 <Compass size={24} />
               </div>
            </div>
            <h3>{aboutData.mission.title}</h3>
            <p>{aboutData.mission.text}</p>
          </motion.div>

          <motion.div className="about-pillar about-pillar-vision" variants={fadeUp}>
            <div className="about-pillar-image" style={{ marginBottom: '1.5rem', borderRadius: '1rem', overflow: 'hidden', height: '200px', position: 'relative' }}>
               <img src={visionImage} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="Vision" />
               <div className="about-pillar-icon about-pillar-icon-vision" style={{ position: 'absolute', top: '1rem', right: '1rem', margin: 0, zIndex: 2, background: 'rgba(14,10,7,0.5)', backdropFilter: 'blur(10px)' }}>
                 <Eye size={24} />
               </div>
            </div>
            <h3>{aboutData.vision.title}</h3>
            <p>{aboutData.vision.text}</p>
          </motion.div>
        </motion.div>

        {/* Values */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={fadeUp}
          className="about-values-header"
        >
          <div style={{ width: '100%', maxWidth: '800px', height: '300px', margin: '0 auto 3rem auto', borderRadius: '1.5rem', overflow: 'hidden', position: 'relative' }}>
             <img src={valuesImage} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="Nuestros Valores" />
             <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(0deg, rgba(14,10,7,0.8) 0%, transparent 50%)' }} />
          </div>
          <h3 className="about-values-title">Nuestros Valores</h3>
          <p className="about-values-subtitle">
            Los principios que guían cada decisión, cada receta y cada experiencia.
          </p>
        </motion.div>

        <motion.div
          className="about-values-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={stagger}
        >
          {aboutData.values.map((value) => {
            const IconComponent = iconMap[value.icon];
            return (
              <motion.div
                className="about-value-card"
                key={value.id}
                variants={fadeUp}
              >
                <div
                  className="about-value-icon"
                  style={{
                    color: value.accent,
                    background: `color-mix(in srgb, ${value.accent} 8%, transparent)`,
                  }}
                >
                  {IconComponent && <IconComponent size={22} />}
                </div>
                <h4>{value.title}</h4>
                <p>{value.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
