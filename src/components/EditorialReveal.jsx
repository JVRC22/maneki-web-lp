import { motion, useReducedMotion } from 'framer-motion';

export function useEditorialReveal() {
  const prefersReducedMotion = useReducedMotion();

  return (delay = 0) => ({
    // Keep the editorial content rendered in its final state. Viewport observation
    // can enhance the transition, but it must never be required for readability.
    initial: false,
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: prefersReducedMotion ? { duration: 0 } : { duration: 0.36, delay, ease: [0.16, 1, 0.3, 1] },
  });
}

export { motion };
