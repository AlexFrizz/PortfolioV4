import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function ContactButton() {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ y: -2 }}
      onClick={() => navigate("/contact")}
      className="group bg-[#7beba8] dark:bg-[#12442c] hover:bg-[#6ee39d] dark:hover:bg-[#175337] text-slate-950 dark:text-emerald-100 rounded-[28px] p-5 flex flex-col justify-between min-h-[115px] lg:min-h-0 border border-emerald-400/50 dark:border-emerald-600/30 shadow-sm cursor-pointer transition-colors duration-300"
    >
      {/* Label */}
      <span className="font-headline font-bold text-xl sm:text-2xl lg:text-[1.45rem] xl:text-[1.65rem] tracking-tight leading-tight text-slate-950 dark:text-white">
        Contact Me
      </span>

      {/* Arrow circle */}
      <div className="flex justify-end">
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-slate-950/10 dark:bg-white/10 transition-transform duration-300 group-hover:translate-x-1">
          <span className="material-symbols-rounded text-lg">arrow_forward</span>
        </span>
      </div>
    </motion.div>
  );
}
