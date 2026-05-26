import { Contact } from "../components/Contact";
import { motion } from "framer-motion";

export function ContactPage() {
  return (
    <div className="min-h-screen dark:bg-navy-900 bg-[#F1F5F9] pt-24">
      <div className="max-w-4xl mx-auto px-6 pt-8 pb-4">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <p className="font-mono text-xs uppercase tracking-widest text-[#00D9FF] mb-2">Contact</p>
          <div className="h-px dark:bg-white/10 bg-gray-200" />
        </motion.div>
      </div>
      <Contact />
    </div>
  );
}
