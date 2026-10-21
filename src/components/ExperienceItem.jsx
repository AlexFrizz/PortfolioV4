import React from 'react';
import { motion } from 'framer-motion';

/**
 * ExperienceItem component displaying a career or academic milestone.
 */
export default function ExperienceItem({
  role = 'Frontend & UI Engineering Intern (Placeholder)',
  period = '2024 — Presente',
  organization = 'Studio Tecnologico • Milano, Italia',
  description = 'Sviluppo di componenti reattivi modulari con Tailwind CSS, TypeScript e framework moderni. Ottimizzazione delle prestazioni con Web Vitals oltre il 95% e pipeline CI/CD automatiche. Testo placeholder.',
  badgeTheme = 'emerald', // 'emerald' | 'slate' | 'amber'
  index = 0,
}) {
  const badgeClasses = {
    emerald:
      'bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800',
    slate:
      'bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border-slate-300 dark:border-slate-700',
    amber:
      'bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 border-amber-200 dark:border-amber-800',
  }[badgeTheme] || 'bg-slate-100 text-slate-800';

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.12 }}
      className="p-6 rounded-[20px] bg-slate-50 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-all text-left"
    >
      <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
        <h3 className="font-headline font-bold text-base sm:text-lg text-slate-950 dark:text-white">
          {role}
        </h3>
        <span
          className={`px-3 py-1 rounded-full text-xs font-mono font-semibold border ${badgeClasses}`}
        >
          {period}
        </span>
      </div>
      <p className="text-xs text-slate-500 dark:text-slate-400 font-mono mb-2.5">
        {organization}
      </p>
      <p className="font-sans text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
        {description}
      </p>
    </motion.article>
  );
}
