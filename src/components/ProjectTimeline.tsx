import { motion } from "framer-motion";
import type { ProjectMilestone } from "../types";

interface ProjectTimelineProps {
  milestones: ProjectMilestone[];
  accentColor: string;
}

export function ProjectTimeline({ milestones, accentColor }: ProjectTimelineProps) {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-3 top-0 bottom-0 w-px dark:bg-white/10 bg-gray-200" />

      <div className="flex flex-col gap-8">
        {milestones.map((m, i) => (
          <motion.div
            key={i}
            className="relative pl-10"
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
          >
            {/* Dot */}
            <div
              className="absolute left-0 top-1 w-7 h-7 rounded-full border-2 dark:bg-navy-900 bg-white flex items-center justify-center"
              style={{ borderColor: accentColor }}
            >
              <div className="w-2 h-2 rounded-full" style={{ background: accentColor }} />
            </div>

            <div className="font-mono text-xs mb-1" style={{ color: accentColor }}>
              {m.date}
            </div>
            <div className="font-mono text-sm font-semibold dark:text-[#F8F9FA] text-gray-900 mb-1">
              {m.title}
            </div>
            <p className="font-body text-sm dark:text-[#94A3B8] text-gray-500 leading-relaxed">
              {m.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
