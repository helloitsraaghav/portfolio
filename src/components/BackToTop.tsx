import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useScrollPosition } from "../hooks/useScrollPosition";

export function BackToTop() {
  const scrollY = useScrollPosition();
  const visible = scrollY > 400;

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          aria-label="Back to top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-8 right-6 z-40 w-10 h-10 rounded-full dark:bg-navy-800 bg-white border dark:border-white/10 border-gray-200 flex items-center justify-center dark:text-[#94A3B8] text-gray-500 hover:text-[#00D9FF] dark:hover:border-[#00D9FF]/30 hover:border-[#00D9FF]/40 shadow-lg transition-all duration-200"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.2 }}
          whileHover={{ y: -2 }}
        >
          <ArrowUp size={16} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
