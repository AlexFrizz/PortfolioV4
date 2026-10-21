import React from 'react';
import { motion } from 'framer-motion';

/**
 * ProjectItemCard component for secondary project listings.
 */
export default function ProjectItemCard({
  title = 'EchoCode Engine (Placeholder)',
  stack = 'Rust • WebAssembly • Monaco',
  description = 'Micro-ambiente di esecuzione e parsing di codice direttamente nel browser senza dipendenze server, garantendo isolamento di memoria. Testo placeholder.',
  linkText = 'Esplora sorgenti',
  linkUrl = '#',
  index = 0,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
      whileHover={{ y: -2 }}
      className="p-6 rounded-[20px] bg-slate-50 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 text-left flex flex-col justify-between"
    >
      <div>
        <h4 className="font-headline font-bold text-lg text-slate-950 dark:text-white mb-1">
          {title}
        </h4>
        <p className="text-xs font-mono text-slate-500 dark:text-slate-400 mb-2.5">
          {stack}
        </p>
        <p className="font-sans text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
          {description}
        </p>
      </div>

      <div>
        <a
          href={linkUrl}
          onClick={(e) => {
            if (linkUrl === '#') {
              e.preventDefault();
              alert('Link di esempio (Placeholder)');
            }
          }}
          className="inline-flex items-center gap-1.5 text-xs font-headline font-bold text-slate-900 dark:text-white hover:underline"
        >
          <span>{linkText}</span>
          <span className="material-symbols-rounded text-[1rem]">north_east</span>
        </a>
      </div>
    </motion.div>
  );
}
