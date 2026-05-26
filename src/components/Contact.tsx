import { motion } from "framer-motion";
import { Mail } from "lucide-react";

export function Contact() {
  return (
    <section className="py-24 px-6 dark:bg-navy-900 bg-[#F1F5F9]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-mono text-xs uppercase tracking-widest text-[#00D9FF] mb-2">
            Get in touch
          </p>
          <h2 className="font-mono text-3xl md:text-4xl font-bold dark:text-[#F8F9FA] text-gray-900 mb-4">
            Let's Connect
          </h2>
          <p className="font-body dark:text-[#94A3B8] text-gray-500 leading-relaxed mb-8 max-w-md mx-auto">
            Open to research collaborations, investment discussions, and new opportunities.
          </p>
          <a
            href="mailto:raaghavg2006@gmail.com"
            className="inline-flex items-center gap-3 px-6 py-3 rounded-lg bg-[#FFB800] text-navy-900 font-semibold font-body hover:bg-[#FFB800]/90 transition-all duration-200 shadow-lg shadow-[#FFB800]/20 no-underline"
          >
            <Mail size={16} />
            raaghavg2006@gmail.com
          </a>
        </motion.div>
      </div>
    </section>
  );
}
