import React from "react";
import { motion } from "framer-motion";

/**
 * Footer bar with placeholder copyright and status info.
 */
export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: 0.15 }}
      className="w-full max-w-[1720px] mx-auto text-xs opacity-60 flex flex-wrap justify-between items-center py-1.5 lg:py-2 shrink-0 border-t border-slate-200/60 dark:border-slate-800/80 mt-2 lg:mt-2.5"
    >
      <span className="font-mono">
        © 2025 Placeholder Name • Computer Science Portfolio
      </span>

      <span className="font-mono text-[11px]">
        STATUS: ACTIVE • NODE: PLACEHOLDER, XX
      </span>
    </motion.footer>
  );
}
