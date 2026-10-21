import { motion } from "framer-motion";

export default function DownloadCvButton() {
  const handleClick = (e) => {
    e.preventDefault();
    alert("CV download simulated");
  };

  return (
    <motion.a
      href="#"
      onClick={handleClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ y: -2 }}
      className="group bg-[#abf4ce] dark:bg-[#163e30] hover:bg-[#9deec3] dark:hover:bg-[#1e4e3d] text-slate-950 dark:text-emerald-100 rounded-[28px] p-5 flex flex-col justify-between min-h-[115px] lg:min-h-0 border border-emerald-400/50 dark:border-emerald-600/30 shadow-sm cursor-pointer transition-colors duration-300"
    >
      {/* Label */}
      <span className="font-headline font-bold text-xl sm:text-2xl lg:text-[1.45rem] xl:text-[1.65rem] tracking-tight leading-tight text-slate-950 dark:text-white">
        Download CV
      </span>

      {/* Arrow circle */}
      <div className="flex justify-end">
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-slate-950/10 dark:bg-white/10 transition-transform duration-300 group-hover:translate-y-1">
          <span className="material-symbols-rounded text-lg">arrow_downward</span>
        </span>
      </div>
    </motion.a>
  );
}
