import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function ExperienceCard() {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
      whileHover={{ y: -2 }}
      onClick={() => navigate("/experiences")}
      className="bg-[#f1e6fa] dark:bg-[#1a1528] border border-purple-200/80 dark:border-purple-900/50 rounded-[28px] p-5 sm:p-6 lg:p-6 flex flex-col justify-between min-h-[220px] lg:min-h-0 cursor-pointer"
    >
      {/* Top */}
      <div>
        <div className="flex items-start justify-between gap-3 mb-3">
          <div>
            <p className="text-[10px] font-mono font-semibold uppercase tracking-widest text-purple-700 dark:text-purple-300 mb-2">
              01 / CAREER &amp; MILESTONES
            </p>
            <h2 className="font-headline font-bold text-2xl sm:text-3xl tracking-tight text-slate-950 dark:text-white">
              Experiences
            </h2>
          </div>

          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
            className="w-9 h-9 lg:w-10 lg:h-10 rounded-full flex items-center justify-center shrink-0 bg-purple-500/10 dark:bg-white/10"
          >
            <span className="material-symbols-rounded text-purple-800 dark:text-purple-200 text-lg">
              north_east
            </span>
          </motion.div>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-auto">
        <p className="text-[0.825rem] sm:text-[0.875rem] leading-relaxed text-slate-700 dark:text-slate-300 line-clamp-4 mb-3">
          A curated timeline of professional milestones, internships, and academic
          achievements that have shaped my journey in computer science and software
          engineering.
        </p>

        <span className="inline-flex items-center gap-1 text-xs sm:text-sm font-headline font-bold text-purple-900 dark:text-purple-200">
          Dettagli Percorso →
        </span>
      </div>
    </motion.div>
  );
}
