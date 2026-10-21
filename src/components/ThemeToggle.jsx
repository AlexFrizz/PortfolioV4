import React from "react";
import { motion } from "framer-motion";

/**
 * Dark mode toggle button – pill-shaped with sun/moon icon and text label.
 */
export default function ThemeToggle({ isDark, onToggle }) {
  return (
    <motion.button
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      onClick={onToggle}
      className="px-3.5 py-1.5 rounded-full bg-white dark:bg-[#141824] border border-slate-200/90 dark:border-slate-800 text-slate-800 dark:text-slate-100 shadow-sm hover:shadow flex items-center gap-2 cursor-pointer select-none group"
    >
      {isDark ? (
        <span className="material-symbols-outlined text-[1.15rem] text-cyan-300 transition-transform duration-300 group-hover:-rotate-12">
          dark_mode
        </span>
      ) : (
        <span className="material-symbols-outlined text-[1.15rem] text-amber-500 transition-transform duration-300 group-hover:rotate-45">
          light_mode
        </span>
      )}

      <span className="text-xs font-mono font-bold uppercase tracking-wider">
        {isDark ? "Dark" : "Light"}
      </span>
    </motion.button>
  );
}
