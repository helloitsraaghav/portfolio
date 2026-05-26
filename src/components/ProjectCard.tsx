import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { ResearchProject } from "../types";

interface ProjectCardProps {
  project: ResearchProject;
  index: number;
}

const categoryIcons: Record<string, string> = {
  "Financial Preparedness": "🌀",
  "Climate Action Research": "🌿",
  "Equity Research": "📈",
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  const icon = categoryIcons[project.category] ?? "📄";

  return (
    <motion.article
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, delay: index * 0.08, ease: "easeOut" }}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      className="group relative rounded-xl overflow-hidden dark:bg-navy-800 bg-white border dark:border-white/5 border-gray-200 dark:hover:border-[#00D9FF]/20 hover:border-[#00D9FF]/30 transition-all duration-300 hover:shadow-xl dark:hover:shadow-[#00D9FF]/5"
    >
      {/* Gradient top bar */}
      <div
        className="h-1 w-full"
        style={{
          background: `linear-gradient(90deg, ${project.heroGradientFrom}, ${project.heroGradientTo === "#0A1628" ? project.accentColor : project.heroGradientTo})`,
        }}
      />

      <Link to={`/projects/${project.id}`} className="no-underline block p-6">
        {/* Category pill */}
        <div className="flex items-center justify-between mb-4">
          <span
            className={`text-xs font-mono font-medium uppercase tracking-wider px-2.5 py-1 rounded-full dark:bg-white/5 bg-gray-100 ${project.categoryColor}`}
          >
            {project.category}
          </span>
          <span className="text-xl" role="img" aria-label={project.category}>
            {icon}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-mono text-base font-semibold dark:text-[#F8F9FA] text-gray-900 leading-snug mb-3 group-hover:text-[#00D9FF] transition-colors duration-200">
          {project.title}
        </h3>

        {/* Description */}
        <p className="font-body text-sm dark:text-[#94A3B8] text-gray-500 leading-relaxed mb-5 line-clamp-3">
          {project.description}
        </p>

        {/* Timeline */}
        <div className="flex items-center justify-between text-xs dark:text-[#94A3B8]/60 text-gray-400 font-mono">
          <span>{project.timeline.start} — {project.timeline.end}</span>
          <span className="flex items-center gap-1 dark:text-[#00D9FF] text-[#0099BB] font-semibold group-hover:gap-2 transition-all duration-200">
            Read more <ArrowRight size={12} />
          </span>
        </div>
      </Link>
    </motion.article>
  );
}
