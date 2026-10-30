import React, { useEffect, useRef, useState } from 'react';

const initialErrors = {};

function validate(values) {
  const errors = {};

  if (values.name.trim().length < 2) errors.name = 'Escribe tu nombre para continuar.';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) errors.email = 'Escribe un correo electrónico válido.';
  if (!values.reason) errors.reason = 'Elige un motivo de contacto.';
  if (values.message.trim().length < 10) errors.message = 'Cuéntanos un poco más en al menos 10 caracteres.';

  return errors;
}

export default function ContactDemoForm() {
  const [errors, setErrors] = useState(initialErrors);
  const [submitted, setSubmitted] = useState(false);
  const [reason, setReason] = useState('');
  const summaryRef = useRef(null);

  useEffect(() => {
    const handleMiniContact = (event) => setReason(event.detail === 'mini' ? 'mini' : '');
    window.addEventListener('maneki-contact-reason', handleMiniContact);
    return () => window.removeEventListener('maneki-contact-reason', handleMiniContact);
  }, []);

  const clearSubmission = () => {
    if (submitted) setSubmitted(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const values = Object.fromEntries(new FormData(form));
    const nextErrors = validate(values);

    setErrors(nextErrors);
    setSubmitted(false);

    if (Object.keys(nextErrors).length > 0) {
      window.requestAnimationFrame(() => summaryRef.current?.focus());
      return;
    }

    form.reset();
    setReason('');
    setSubmitted(true);
  };

  return (
    <section className="phase5j-contact-demo" id="contacto" aria-labelledby="contacto-title">
      <div className="phase5j-contact-intro">
        <h3 id="contacto-title">Hablemos de ideas nuevas.</h3>
        <p>¿Tienes una pregunta, una propuesta para Maneki Mini o una idea para colaborar? Cuéntanos.</p>
        <small>Contacto de demostración: no guarda ni envía información a ningún destinatario.</small>
      </div>
      <form className="phase5j-contact-form" noValidate onSubmit={handleSubmit}>
        {Object.keys(errors).length > 0 && (
          <div className="phase5j-contact-errors" ref={summaryRef} tabIndex="-1" role="alert">
            Revisa los campos marcados antes de continuar.
          </div>
        )}
        {submitted && (
          <p className="phase5j-contact-success" role="status">
            Demostración completada. Tu mensaje se validó correctamente, pero no se envió a ningún destinatario.
          </p>
        )}
        <div className="phase5j-contact-fields">
          <label htmlFor="contact-name">
            <span>Nombre</span>
            <input id="contact-name" name="name" type="text" autoComplete="name" placeholder="¿Cómo te llamas?" aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? 'contact-name-error' : undefined} onChange={clearSubmission} />
            {errors.name && <small id="contact-name-error">{errors.name}</small>}
          </label>
          <label htmlFor="contact-email">
            <span>Correo electrónico</span>
            <input id="contact-email" name="email" type="email" autoComplete="email" placeholder="tu-correo@ejemplo.com" aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? 'contact-email-error' : undefined} onChange={clearSubmission} />
            {errors.email && <small id="contact-email-error">{errors.email}</small>}
          </label>
          <label htmlFor="contact-reason">
            <span>Motivo de contacto</span>
            <select id="contact-reason" name="reason" value={reason} aria-invalid={Boolean(errors.reason)} aria-describedby={errors.reason ? 'contact-reason-error' : undefined} onChange={(event) => { setReason(event.target.value); clearSubmission(); }}>
              <option value="" disabled>Selecciona el motivo</option>
              <option value="general">Pregunta general</option>
              <option value="mini">Maneki Mini / Universidad</option>
              <option value="collab">Colaboraciones</option>
              <option value="events">Eventos</option>
              <option value="other">Otra propuesta</option>
            </select>
            {errors.reason && <small id="contact-reason-error">{errors.reason}</small>}
          </label>
          <label className="phase5j-contact-message" htmlFor="contact-message">
            <span>Mensaje</span>
            <textarea id="contact-message" name="message" rows="4" placeholder="Cuéntanos un poco sobre tu idea..." aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? 'contact-message-error' : undefined} onChange={clearSubmission} />
            {errors.message && <small id="contact-message-error">{errors.message}</small>}
          </label>
        </div>
        <button className="phase3-button phase3-button-primary" type="submit">Validar demostración</button>
      </form>
    </section>
  );
}
