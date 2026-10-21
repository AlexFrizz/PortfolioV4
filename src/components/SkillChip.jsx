import React from 'react';
import { motion } from 'framer-motion';

/**
 * SkillChip component for technology and competence tags.
 */
export default function SkillChip({ label }) {
  return (
    <motion.span
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.15 }}
      className="px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 text-xs font-mono inline-block"
    >
      {label}
    </motion.span>
  );
}
