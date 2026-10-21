import { motion } from "framer-motion";
import proPic from "../assets/pro-pic.jpeg";

export default function PortraitCard() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="group relative overflow-hidden rounded-[28px] bg-slate-900 min-h-[340px] sm:min-h-[400px] lg:min-h-0 lg:flex-[2] border border-slate-200/80 dark:border-slate-800 shadow-sm"
    >
      {/* Portrait Image */}
      <img
        src={proPic}
        alt="Portrait"
        className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-105 transition-transform duration-700 ease-out"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/15 to-transparent pointer-events-none" />

      {/* Top Pill Overlay */}
      <span className="absolute top-4 left-4 z-10 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/60 backdrop-blur-md border border-white/20 text-white text-xs font-mono">
        ✦ AI-Driven Developer
      </span>

      {/* Bottom Glass Bar */}
      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs sm:text-sm backdrop-blur-md bg-black/60 px-4 py-2.5 rounded-full border border-white/20 shadow-lg">
        <span className="font-headline font-semibold tracking-wide">
          Placeholder Name • CS Portfolio
        </span>
        <span className="flex items-center gap-1.5 text-emerald-300 font-medium font-mono text-xs">
          <span className="w-2 h-2 rounded-full bg-emerald-400" />
          Disponibile
        </span>
      </div>
    </motion.div>
  );
}
