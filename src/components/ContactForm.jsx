import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * ContactForm component with validation, feedback banner, and placeholder inputs.
 */
export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => {
      setSubmitted(false);
    }, 3500);
  };

  return (
    <div className="bg-slate-50 dark:bg-slate-900/70 p-6 sm:p-7 rounded-[20px] border border-slate-200 dark:border-slate-800 text-left">
      <h3 className="font-headline font-bold text-lg text-slate-950 dark:text-white mb-3">
        Invia un messaggio diretto
      </h3>

      <form onSubmit={handleSubmit} className="space-y-3.5">
        <div>
          <label className="block text-xs font-headline font-semibold text-slate-700 dark:text-slate-300 mb-1">
            Nome e Cognome
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Nome Cognome (Placeholder)"
            required
            className="w-full px-3.5 py-2.5 rounded-[16px] bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-700 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-colors"
          />
        </div>

        <div>
          <label className="block text-xs font-headline font-semibold text-slate-700 dark:text-slate-300 mb-1">
            Indirizzo Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="placeholder@example.com"
            required
            className="w-full px-3.5 py-2.5 rounded-[16px] bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-700 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-colors"
          />
        </div>

        <div>
          <label className="block text-xs font-headline font-semibold text-slate-700 dark:text-slate-300 mb-1">
            Messaggio o Proposta
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Messaggio placeholder per iniziare una conversazione o proposta..."
            required
            rows={4}
            className="w-full px-3.5 py-2.5 rounded-[16px] bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-700 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-colors"
          />
        </div>

        <motion.button
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
          type="submit"
          className="w-full py-3 rounded-[16px] bg-slate-950 dark:bg-white text-white dark:text-slate-950 font-headline font-bold text-xs hover:opacity-90 transition-opacity flex items-center justify-center gap-2 cursor-pointer shadow-sm"
        >
          <span>Invia Messaggio</span>
          <span className="material-symbols-rounded text-[1.1rem]">send</span>
        </motion.button>

        <AnimatePresence>
          {submitted && (
            <motion.div
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              className="text-xs text-emerald-600 dark:text-emerald-400 font-semibold text-center mt-2 p-2 bg-emerald-50 dark:bg-emerald-950/40 rounded-lg border border-emerald-200 dark:border-emerald-800"
            >
              Messaggio inviato con successo! Ti risponderò a breve.
            </motion.div>
          )}
        </AnimatePresence>
      </form>
    </div>
  );
}
