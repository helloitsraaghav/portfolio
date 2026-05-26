import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import type { ProjectMetric } from "../types";

interface MetricCardProps {
  metric: ProjectMetric;
  index: number;
  accentColor: string;
}

export function MetricCard({ metric, index, accentColor }: MetricCardProps) {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.3 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      ref={ref}
      className="dark:bg-navy-800 bg-white border dark:border-white/5 border-gray-200 rounded-xl p-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.07 }}
    >
      <div
        className="text-3xl font-mono font-bold mb-2 transition-opacity duration-500"
        style={{ color: accentColor, opacity: visible ? 1 : 0 }}
      >
        {metric.value}
      </div>
      <div className="font-mono text-xs uppercase tracking-widest dark:text-[#94A3B8] text-gray-500 mb-2">
        {metric.label}
      </div>
      <p className="font-body text-sm dark:text-[#94A3B8] text-gray-500 leading-relaxed">
        {metric.description}
      </p>
    </motion.div>
  );
}
