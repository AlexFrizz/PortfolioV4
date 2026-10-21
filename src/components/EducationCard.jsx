import React from 'react';
import { motion } from 'framer-motion';

/**
 * EducationCard component displaying an academic milestone.
 */
export default function EducationCard({
  icon = 'school',
  degree = 'Laurea in Computer Science (Placeholder)',
  institution = 'Università degli Studi • 2021 — 2025',
  description = 'Percorso accademico focalizzato su algoritmi, strutture dati, sistemi distribuiti e architetture software moderne. Testo descrittivo placeholder.',
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.1 }}
      whileHover={{ y: -2 }}
      className="p-6 rounded-[20px] bg-[#f6eff9] dark:bg-[#1f1a2e] border border-purple-200/70 dark:border-purple-800/40 text-left transition-shadow hover:shadow-md"
    >
      <span className="material-symbols-rounded text-2xl text-purple-600 dark:text-purple-400 mb-2 block">
        {icon}
      </span>
      <h3 className="font-headline font-bold text-lg text-slate-950 dark:text-white">
        {degree}
      </h3>
      <p className="text-xs text-purple-800 dark:text-purple-300 font-mono font-medium mb-2">
        {institution}
      </p>
      <p className="font-sans text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}
