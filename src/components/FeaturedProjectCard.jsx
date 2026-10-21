import React from 'react';
import { motion } from 'framer-motion';

/**
 * FeaturedProjectCard component for showcasing a primary project with stats and CTA links.
 */
export default function FeaturedProjectCard({
  category = 'Featured System',
  title = 'HealthAI Diagnostics & Patient Stream (Placeholder)',
  tags = ['Python / C++', 'FastAPI', 'WebSocket'],
  description = 'Piattaforma di calcolo e triage per dati clinici complessi. Realizzata per ottimizzare il throughput di referti e telemetrie mediche in tempo reale, combinando modelli predittivi e caching a bassissima latenza. Testo placeholder.',
  stats = [
    { value: '94%', label: 'Telemetry Precision' },
    { value: '7.2M', label: 'Packets Elaborati' },
    { value: '04:50', label: 'Reach Window' },
  ],
  githubUrl = '#',
  docsUrl = '#',
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="p-6 sm:p-7 rounded-[20px] bg-gradient-to-br from-amber-50/70 to-yellow-100/50 dark:from-[#231e0b] dark:to-[#171407] border border-amber-300/80 dark:border-amber-700/50 text-left shadow-sm"
    >
      {/* Header with Title and Tags */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
        <div>
          <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-amber-800 dark:text-amber-400">
            {category}
          </span>
          <h3 className="font-headline font-extrabold text-xl sm:text-2xl text-slate-950 dark:text-white">
            {title}
          </h3>
        </div>
        <div className="flex items-center gap-2 flex-wrap">
          {tags.map((tag, idx) => (
            <span
              key={idx}
              className={
                idx === 0
                  ? 'px-3 py-1 rounded-full bg-slate-950 dark:bg-white text-white dark:text-slate-950 text-xs font-mono font-bold'
                  : 'px-3 py-1 rounded-full bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-xs font-mono font-bold border border-slate-200 dark:border-slate-700'
              }
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Description */}
      <p className="font-sans text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed mb-5">
        {description}
      </p>

      {/* Key Metrics / Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-4 rounded-[20px] bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border border-amber-200 dark:border-slate-700 mb-5">
        {stats.map((stat, idx) => (
          <div key={idx} className={idx === 2 ? 'col-span-2 sm:col-span-1' : ''}>
            <div className="font-headline font-black text-2xl sm:text-3xl text-slate-950 dark:text-white">
              {stat.value}
            </div>
            <div className="text-[11px] font-mono text-slate-500 dark:text-slate-400 mt-1">
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap items-center gap-2.5">
        <a
          href={githubUrl}
          onClick={(e) => {
            if (githubUrl === '#') {
              e.preventDefault();
              alert('Link di esempio (Placeholder)');
            }
          }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-950 dark:bg-white text-white dark:text-slate-950 text-xs font-headline font-bold hover:opacity-90 transition-opacity"
        >
          <span>Repository GitHub</span>
          <span className="material-symbols-rounded text-[1.1rem]">code</span>
        </a>
        <a
          href={docsUrl}
          onClick={(e) => {
            if (docsUrl === '#') {
              e.preventDefault();
              alert('Link di esempio (Placeholder)');
            }
          }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-xs font-headline font-bold border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
        >
          <span>Documentazione Tecnica</span>
          <span className="material-symbols-rounded text-[1.1rem]">open_in_new</span>
        </a>
      </div>
    </motion.div>
  );
}
