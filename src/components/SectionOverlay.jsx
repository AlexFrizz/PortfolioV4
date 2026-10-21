import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

/**
 * M3 Expressive Emphasized easing curve.
 * See: https://m3.material.io/styles/motion/easing-and-duration
 */
const M3_EMPHASIZED = [0.2, 0.0, 0.0, 1.0];
const DURATION = 0.45; // seconds — within the 0.4–0.5s spec

/**
 * SectionOverlay — full-screen overlay container rendered *on top* of the
 * always-visible Landing Page. Provides:
 *  - Fixed, full-viewport backdrop with `backdrop-blur-lg` and semi-transparent bg
 *  - Automatic body scroll-lock while mounted
 *  - Material 3 Expressive enter/exit animations (fade + slide-up + scale)
 *  - Click-on-backdrop to close (navigates to "/")
 *
 * @param {Object}  props
 * @param {React.ReactNode} props.children — The section content to render inside the card
 */
export default function SectionOverlay({ children }) {
  const navigate = useNavigate();

  // ── Scroll lock ──────────────────────────────────────────────────────
  useEffect(() => {
    const original = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = original;
    };
  }, []);

  // ── Close on Escape key ──────────────────────────────────────────────
  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'Escape') navigate('/');
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [navigate]);

  // ── Backdrop click → close ───────────────────────────────────────────
  const handleBackdropClick = (e) => {
    // Only close when the backdrop itself is clicked, not the inner card
    if (e.target === e.currentTarget) navigate('/');
  };

  return (
    <motion.div
      // Backdrop — fixed, full viewport
      className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto p-3 sm:p-5 md:p-6 backdrop-blur-lg bg-black/30 dark:bg-black/50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: DURATION * 0.6, ease: M3_EMPHASIZED }}
      onClick={handleBackdropClick}
    >
      {/* Inner card — animated with M3 Emphasized easing */}
      <motion.div
        className="relative w-full max-w-4xl mx-auto my-auto bg-white dark:bg-[#101522] rounded-[32px] border border-slate-200/80 dark:border-slate-800 p-6 sm:p-8 md:p-10 shadow-2xl text-left max-h-[92vh] overflow-y-auto no-scrollbar"
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 40, scale: 0.95 }}
        transition={{ duration: DURATION, ease: M3_EMPHASIZED }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
