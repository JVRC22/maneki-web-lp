import React from 'react';
import { motion } from 'framer-motion';
import { Cherry, GraduationCap } from 'lucide-react';
import { images } from '../data/images';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

const footerLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Concepto', href: '#concepto' },
  { label: 'Menú', href: '#menu' },
  { label: 'Experiencia', href: '#experiencia' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Lista VIP', href: '#lista-vip' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" id="footer">
      <div className="container">
        <motion.div
          className="footer-content"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={fadeUp}
        >
          <div className="footer-brand">
            <h3>
              {images.logo ? (
                <img
                  src={images.logo}
                  alt="Sakura Brew Café"
                  style={{ height: 32, display: 'inline-block', verticalAlign: 'middle', marginRight: 10 }}
                />
              ) : (
                <Cherry size={22} style={{ display: 'inline', verticalAlign: 'middle', marginRight: 10, color: 'var(--sakura)' }} />
              )}
              Sakura Brew Café
            </h3>
            <p>
              Donde el sabor asiático abraza el desayuno todo el día. Bebidas
              frías, postres fusión y una experiencia diseñada para probarse,
              fotografiarse y recordarse.
            </p>
          </div>

          <div className="footer-links">
            <h4>Navegación</h4>
            {footerLinks.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </div>
        </motion.div>

        <div className="footer-bottom">
          <span>© {currentYear} Sakura Brew Café. Todos los derechos reservados.</span>
          <span className="footer-academic">
            <GraduationCap size={14} />
            Proyecto académico de landing page y validación de mercado.
          </span>
        </div>
      </div>
    </footer>
  );
}
