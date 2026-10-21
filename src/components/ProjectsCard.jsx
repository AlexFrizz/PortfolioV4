import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function ProjectsCard() {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
      whileHover={{ y: -2 }}
      onClick={() => navigate("/projects")}
      className="bg-[#fde989] dark:bg-[#28220a] border border-amber-300/80 dark:border-amber-700/50 rounded-[28px] p-5 sm:p-6 lg:p-6 flex flex-col justify-between min-h-[220px] lg:min-h-0 cursor-pointer"
    >
      {/* Top */}
      <div>
        <div className="flex items-start justify-between gap-3 mb-3">
          <div>
            <p className="text-[10px] font-mono font-semibold uppercase tracking-widest text-amber-800 dark:text-amber-300 mb-2">
              02 / CODE &amp; PROTOTYPES
            </p>
            <h2 className="font-headline font-bold text-2xl sm:text-3xl tracking-tight text-slate-950 dark:text-white">
              Projects
            </h2>
          </div>

          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
            className="w-9 h-9 lg:w-10 lg:h-10 rounded-full flex items-center justify-center shrink-0 bg-amber-500/10 dark:bg-white/10"
          >
            <span className="material-symbols-rounded text-amber-900 dark:text-amber-200 text-lg">
              north_east
            </span>
          </motion.div>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-auto">
        <p className="text-[0.825rem] sm:text-[0.875rem] leading-relaxed text-slate-700 dark:text-slate-300 line-clamp-4 mb-3">
          Translating ideas into reality — a collection of personal and
          collaborative projects spanning web applications, algorithms, and
          creative prototypes built with modern technologies.
        </p>

        <span className="inline-flex items-center gap-1 text-xs sm:text-sm font-headline font-bold text-amber-950 dark:text-amber-200">
          Vedi Tutti i Progetti →
        </span>
      </div>
    </motion.div>
  );
}
