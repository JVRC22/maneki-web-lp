import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Crown, CheckCircle, Users, Send, Percent, Palette, Ticket } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

const STORAGE_KEY = 'maneki_leads';

function getLeadCount() {
  try {
    const leads = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    return leads.length;
  } catch {
    return 0;
  }
}

const benefits = [
  {
    icon: <Percent size={20} />,
    title: '15% primera visita',
    desc: 'Descuento exclusivo para VIPs',
  },
  {
    icon: <Palette size={20} />,
    title: 'Sabores de temporada',
    desc: 'Acceso anticipado a nuevos sabores',
  },
  {
    icon: <Ticket size={20} />,
    title: 'Soft opening',
    desc: 'Invitación al evento de apertura',
  },
];

export default function LeadForm() {
  const [submitted, setSubmitted] = useState(false);
  const [leadCount, setLeadCount] = useState(0);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  useEffect(() => {
    setLeadCount(getLeadCount());
  }, []);

  const onSubmit = (data) => {
    try {
      const existing = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
      const newLead = {
        ...data,
        timestamp: new Date().toISOString(),
        id: Date.now(),
      };
      existing.push(newLead);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(existing));
      setLeadCount(existing.length);
      setSubmitted(true);
      reset();
    } catch (err) {
      console.error('Error saving lead:', err);
    }
  };

  return (
    <section className="lead-section section-padding" id="lista-vip">
      <div className="container">
        <div className="lead-container">
          {/* Header */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeUp}
            style={{ textAlign: 'center', marginBottom: 'var(--space-2xl)' }}
          >
            <span className="section-label" style={{ margin: '0 auto var(--space-xl)' }}>
              <Crown size={14} />
              Lista VIP
            </span>
            <h2 className="section-title" style={{ margin: '0 auto var(--space-md)', textAlign: 'center' }}>
              Sé de los primeros en probar Sakura Brew.
            </h2>
            <p className="section-subtitle" style={{ margin: '0 auto', textAlign: 'center' }}>
              Únete a la lista VIP de pre-apertura y recibe invitación,
              promociones y acceso anticipado a sabores de temporada.
            </p>
          </motion.div>

          {/* VIP Benefits */}
          <motion.div
            className="lead-benefits"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            variants={stagger}
          >
            {benefits.map((b) => (
              <motion.div className="lead-benefit" key={b.title} variants={fadeUp}>
                <div className="lead-benefit-icon">{b.icon}</div>
                <h4>{b.title}</h4>
                <p>{b.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Form Card */}
          <motion.div
            className="lead-form-card"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={fadeUp}
          >
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  className="form-success"
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="form-success-icon">
                    <CheckCircle size={32} />
                  </div>
                  <h3>¡Listo! Tu lugar en la lista VIP quedó reservado.</h3>
                  <p>Te contactaremos antes de la apertura con tu invitación exclusiva y descuento del 15%.</p>
                  <button
                    className="btn-secondary"
                    style={{ marginTop: 'var(--space-xl)' }}
                    onClick={() => setSubmitted(false)}
                  >
                    Registrar otro invitado
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit(onSubmit)}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  noValidate
                >
                  {/* Nombre */}
                  <div className="form-group">
                    <label className="form-label" htmlFor="lead-name">Nombre *</label>
                    <input
                      id="lead-name"
                      className="form-input"
                      type="text"
                      placeholder="Tu nombre completo"
                      {...register('nombre', { required: 'Tu nombre es obligatorio' })}
                    />
                    {errors.nombre && (
                      <span className="form-error">{errors.nombre.message}</span>
                    )}
                  </div>

                  {/* WhatsApp */}
                  <div className="form-group">
                    <label className="form-label" htmlFor="lead-whatsapp">WhatsApp *</label>
                    <input
                      id="lead-whatsapp"
                      className="form-input"
                      type="tel"
                      placeholder="871 123 4567"
                      {...register('whatsapp', {
                        required: 'Tu WhatsApp es obligatorio',
                        minLength: { value: 10, message: 'Ingresa un número válido' },
                      })}
                    />
                    {errors.whatsapp && (
                      <span className="form-error">{errors.whatsapp.message}</span>
                    )}
                  </div>

                  {/* Instagram o Email */}
                  <div className="form-group">
                    <label className="form-label" htmlFor="lead-contact">Instagram o email *</label>
                    <input
                      id="lead-contact"
                      className="form-input"
                      type="text"
                      placeholder="@tu_instagram o tu@email.com"
                      {...register('contacto', {
                        required: 'Instagram o email es obligatorio',
                      })}
                    />
                    {errors.contacto && (
                      <span className="form-error">{errors.contacto.message}</span>
                    )}
                  </div>

                  {/* Interés */}
                  <div className="form-group">
                    <label className="form-label" htmlFor="lead-interest">¿Qué te interesa probar primero? *</label>
                    <select
                      id="lead-interest"
                      className="form-select"
                      defaultValue=""
                      {...register('interes', { required: 'Selecciona una opción' })}
                    >
                      <option value="" disabled>Selecciona una opción</option>
                      <option value="matcha">Matcha</option>
                      <option value="bubble-tea">Bubble Tea</option>
                      <option value="hotcakes">Hot Cakes</option>
                      <option value="mochi">Mochi</option>
                      <option value="todo">Todo — quiero probar de todo</option>
                    </select>
                    {errors.interes && (
                      <span className="form-error">{errors.interes.message}</span>
                    )}
                  </div>

                  {/* Zona */}
                  <div className="form-group">
                    <label className="form-label" htmlFor="lead-zone">Zona donde vives/estudias/trabajas</label>
                    <input
                      id="lead-zone"
                      className="form-input"
                      type="text"
                      placeholder="Ej: Centro, Campestre, La Rosita..."
                      {...register('zona')}
                    />
                  </div>

                  {/* Checkbox */}
                  <div className="form-checkbox-group">
                    <input
                      id="lead-consent"
                      type="checkbox"
                      className="form-checkbox"
                      {...register('consentimiento', {
                        required: 'Debes aceptar para continuar',
                      })}
                    />
                    <label htmlFor="lead-consent" className="form-checkbox-label">
                      Quiero recibir invitación de apertura y promociones exclusivas de Sakura Brew Café.
                    </label>
                  </div>
                  {errors.consentimiento && (
                    <span className="form-error" style={{ display: 'block', marginTop: '-12px', marginBottom: '16px' }}>
                      {errors.consentimiento.message}
                    </span>
                  )}

                  {/* Submit */}
                  <button
                    type="submit"
                    className="btn-primary form-submit"
                    disabled={isSubmitting}
                  >
                    <Send size={18} />
                    Reservar mi lugar VIP
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Lead counter */}
          {leadCount > 0 && (
            <motion.div
              className="lead-counter"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Users size={16} />
              <strong>{leadCount}</strong> personas ya se unieron a la lista VIP
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
