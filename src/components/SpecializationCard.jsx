import React from 'react';
import { motion } from 'framer-motion';

/**
 * SpecializationCard component displaying a technical specialization area.
 */
export default function SpecializationCard({
  icon = 'psychology',
  title = 'Aree di Specializzazione (Placeholder)',
  field = 'Sistemi Distribuiti & Frontend',
  description = 'Focus sull\'ingegneria del software moderna, containerizzazione e architetture scalabili con standard elevati. Testo descrittivo placeholder.',
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.2 }}
      whileHover={{ y: -2 }}
      className="p-6 rounded-[20px] bg-[#fefce8] dark:bg-[#25200c] border border-amber-200 dark:border-amber-700/40 text-left transition-shadow hover:shadow-md"
    >
      <span className="material-symbols-rounded text-2xl text-amber-600 dark:text-amber-400 mb-2 block">
        {icon}
      </span>
      <h3 className="font-headline font-bold text-lg text-slate-950 dark:text-white">
        {title}
      </h3>
      <p className="text-xs text-amber-800 dark:text-amber-300 font-mono font-medium mb-2">
        {field}
      </p>
      <p className="font-sans text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}
