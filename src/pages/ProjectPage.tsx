import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { getProjectById, getRelatedProjects } from "../data/projects";
import { MetricCard } from "../components/MetricCard";
import { ProjectTimeline } from "../components/ProjectTimeline";
import { DownloadsSection } from "../components/DownloadsSection";
import { ProjectCard } from "../components/ProjectCard";
import {
  HurricaneCharts,
  ClimateCharts,
  JapexCharts,
  BroadcomCharts,
  ChipotleCharts,
} from "../components/ProjectCharts";

function getChartComponent(id: string) {
  switch (id) {
    case "hurricane-recovery": return <HurricaneCharts />;
    case "university-climate":  return <ClimateCharts />;
    case "japex-pitch":         return <JapexCharts />;
    case "broadcom-pitch":      return <BroadcomCharts />;
    case "chipotle-pitch":      return <ChipotleCharts />;
    default:                    return null;
  }
}

export function ProjectPage() {
  const { id } = useParams<{ id: string }>();
  const project = id ? getProjectById(id) : undefined;

  if (!project) return <Navigate to="/404" replace />;

  const relatedProjects = getRelatedProjects(project.relatedIds).slice(0, 2);
  const chartEl = getChartComponent(project.id);

  return (
    <div className="min-h-screen dark:bg-navy-900 bg-[#F1F5F9]">
      {/* Hero */}
      <div
        className="relative pt-28 pb-20 px-6"
        style={{
          background: `linear-gradient(135deg, ${project.heroGradientFrom}CC 0%, ${project.heroGradientTo} 100%)`,
        }}
      >
        <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10">
          {/* Back link */}
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors no-underline mb-8 font-mono"
          >
            <ArrowLeft size={14} />
            Back to projects
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Category */}
            <span
              className="inline-block text-xs font-mono uppercase tracking-widest px-3 py-1 rounded-full mb-4 bg-white/10 text-white/80"
            >
              {project.category}
            </span>

            {/* Title */}
            <h1 className="font-mono text-2xl md:text-4xl font-bold text-white leading-snug mb-2">
              {project.title}
            </h1>
            {project.subtitle && (
              <p className="font-mono text-sm text-white/60 mb-4">{project.subtitle}</p>
            )}

            {/* Timeline */}
            <div className="flex flex-wrap gap-4 text-sm text-white/60 font-mono">
              <span className="flex items-center gap-1.5">
                <Calendar size={13} />
                {project.timeline.start} — {project.timeline.end}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock size={13} />
                {project.timeline.duration}
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-16 space-y-20">

        {/* Synopsis */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <SectionLabel>Overview</SectionLabel>
          <div className="space-y-5">
            {project.synopsis.map((para, i) => (
              <p key={i} className="font-serif text-lg dark:text-[#F8F9FA]/90 text-gray-700 leading-relaxed">
                {para}
              </p>
            ))}
          </div>

          {/* Pull quote */}
          <blockquote className="mt-8 pl-5 border-l-2 border-[#00D9FF]">
            <p className="font-serif italic text-xl dark:text-[#00D9FF]/90 text-[#0099BB] leading-relaxed">
              "{project.pullQuote}"
            </p>
          </blockquote>
        </motion.section>

        {/* Key Metrics */}
        <section>
          <SectionLabel>Key Findings</SectionLabel>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {project.metrics.map((m, i) => (
              <MetricCard key={m.label} metric={m} index={i} accentColor={project.accentColor} />
            ))}
          </div>
        </section>

        {/* Timeline */}
        <section>
          <SectionLabel>Milestones</SectionLabel>
          <ProjectTimeline milestones={project.milestones} accentColor={project.accentColor} />
        </section>

        {/* Charts */}
        {chartEl && (
          <section>
            <SectionLabel>Data & Analysis</SectionLabel>
            <div className="dark:bg-navy-800 bg-white rounded-xl border dark:border-white/5 border-gray-200 p-6">
              {chartEl}
            </div>
          </section>
        )}

        {/* Downloads */}
        <section>
          <SectionLabel>Downloads</SectionLabel>
          <DownloadsSection downloads={project.downloads} />
        </section>

        {/* Related Projects */}
        {relatedProjects.length > 0 && (
          <section>
            <SectionLabel>You might also like</SectionLabel>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedProjects.map((rp, i) => (
                <ProjectCard key={rp.id} project={rp} index={i} />
              ))}
            </div>
          </section>
        )}

        {/* CTA */}
        <motion.section
          className="text-center py-12 dark:bg-navy-800 bg-white rounded-xl border dark:border-white/5 border-gray-200"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <p className="font-mono text-xs uppercase tracking-widest dark:text-[#94A3B8] text-gray-400 mb-3">
            Interested in this research?
          </p>
          <h3 className="font-mono text-xl font-bold dark:text-[#F8F9FA] text-gray-900 mb-6">
            Let's discuss the findings.
          </h3>
          <Link
            to="/contact"
            className="no-underline inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#FFB800] text-navy-900 font-semibold font-body hover:bg-[#FFB800]/90 transition-all duration-200"
          >
            Get in touch
          </Link>
        </motion.section>
      </div>
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <span className="font-mono text-xs uppercase tracking-widest text-[#00D9FF]">{children}</span>
      <div className="flex-1 h-px dark:bg-white/10 bg-gray-200" />
    </div>
  );
}
