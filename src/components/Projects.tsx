import { motion } from "framer-motion";
import { projects } from "../data/projects";
import { ProjectCard } from "./ProjectCard";

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6 dark:bg-navy-900 bg-[#F1F5F9]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <p className="font-mono text-xs uppercase tracking-widest text-[#00D9FF] mb-2">
            Portfolio
          </p>
          <h2 className="font-mono text-3xl md:text-4xl font-bold dark:text-[#F8F9FA] text-gray-900 mb-3">
            Featured Work
          </h2>
          <p className="font-body dark:text-[#94A3B8] text-gray-500 text-base max-w-xl">
            Climate finance research, institutional analysis, and equity pitches delivered to investment committees and nonprofits.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
