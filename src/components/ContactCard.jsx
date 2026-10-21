import React from 'react';
import { motion } from 'framer-motion';

/**
 * ContactCard component for displaying a single contact channel (Email, Phone, Location).
 */
export default function ContactCard({
  icon = 'mail',
  label = 'Email',
  value = 'placeholder@example.com',
  href = 'mailto:placeholder@example.com',
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.01 }}
      className="p-3.5 rounded-[20px] bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 flex items-center gap-3 text-left"
    >
      <span className="material-symbols-rounded text-emerald-600 dark:text-emerald-400 text-2xl">
        {icon}
      </span>
      <div>
        <div className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
          {label}
        </div>
        {href ? (
          <a
            href={href}
            className="text-xs font-headline font-bold text-slate-900 dark:text-white hover:underline"
          >
            {value}
          </a>
        ) : (
          <div className="text-xs font-headline font-bold text-slate-900 dark:text-white">
            {value}
          </div>
        )}
      </div>
    </motion.div>
  );
}
