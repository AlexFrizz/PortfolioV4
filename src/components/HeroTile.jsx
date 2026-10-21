import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function HeroTile() {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
      whileHover={{ y: -2 }}
      onClick={() => navigate("/presentation")}
      className="bg-[#90e8bf] dark:bg-[#0e3b2e] border border-emerald-400/40 dark:border-emerald-600/30 rounded-[28px] p-6 lg:p-8 flex flex-col justify-between flex-1 min-h-0 cursor-pointer"
    >
      {/* Top Section */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/10 dark:bg-white/10 backdrop-blur-md text-[11px] font-mono font-bold tracking-wider text-slate-900 dark:text-emerald-200 uppercase mb-3 lg:mb-4">
            ✦ NEURAL PROFILE STUDIO
          </span>
          <h1 className="font-headline font-extrabold text-[2.6rem] sm:text-[3.5rem] lg:text-[3.6rem] xl:text-[4.2rem] leading-[0.92] tracking-tighter uppercase text-slate-950 dark:text-emerald-50">
            HI, I'M
            <br />
            PLACEHOLDER NAME
          </h1>
        </div>

        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.2 }}
          className="w-11 h-11 lg:w-12 lg:h-12 rounded-full flex items-center justify-center shrink-0 bg-neutral-950/10 dark:bg-white/10"
        >
          <span className="material-symbols-rounded text-slate-900 dark:text-emerald-100 text-xl">
            north_east
          </span>
        </motion.div>
      </div>

      {/* Bottom Section */}
      <div className="mt-5 lg:mt-6 pt-3.5 border-t border-black/10 dark:border-white/10 flex items-center justify-between gap-4">
        <p className="font-sans text-sm sm:text-base lg:text-lg font-medium text-slate-900 dark:text-emerald-100">
          Student and Computer Science Enthusiast.
        </p>

        <button className="inline-flex items-center gap-1.5 text-xs font-headline font-bold uppercase tracking-wider px-4 py-2 rounded-full bg-slate-950 text-white dark:bg-emerald-400 dark:text-slate-950 shadow-sm whitespace-nowrap">
          ESPLORA PROFILO
          <span className="material-symbols-rounded text-sm">
            arrow_forward
          </span>
        </button>
      </div>
    </motion.div>
  );
}
