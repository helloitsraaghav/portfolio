import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { BarChart2, FileText, PieChart, Code2, TrendingUp, Leaf } from "lucide-react";

const skills = [
  { icon: BarChart2, label: "Financial Modeling", desc: "DCF, DDM, comps, scenario analysis" },
  { icon: TrendingUp, label: "Equity Research", desc: "Bottom-up fundamental analysis, pitch delivery" },
  { icon: PieChart, label: "Data Analysis", desc: "Python, Excel, regression modeling" },
  { icon: FileText, label: "Research & Writing", desc: "Long-form proposals, policy briefs, academic papers" },
  { icon: Code2, label: "Data Visualization", desc: "Recharts, D3.js, Matplotlib" },
  { icon: Leaf, label: "Climate Finance", desc: "GRF modeling, sustainability frameworks, TCFD" },
];

const interests = [
  "Climate risk & insurance markets",
  "Energy transition investing",
  "Institutional governance reform",
  "Small-cap value equities",
  "Japanese markets & FX dynamics",
];

export function About() {
  return (
    <div className="min-h-screen dark:bg-navy-900 bg-[#F1F5F9] pt-24">
      {/* Hero */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-mono text-xs uppercase tracking-widest text-[#00D9FF] mb-2">About</p>
          <h1 className="font-mono text-3xl md:text-5xl font-bold dark:text-[#F8F9FA] text-gray-900 mb-6">
            Raaghupathi
          </h1>
        </motion.div>

        {/* Bio */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {/* Photo placeholder */}
          <div className="lg:col-span-1 flex justify-center lg:justify-start">
            <div className="w-48 h-48 rounded-2xl dark:bg-navy-800 bg-gray-200 border dark:border-white/10 border-gray-300 flex items-center justify-center">
              <span className="font-mono text-4xl font-bold text-[#00D9FF]">R</span>
            </div>
          </div>

          {/* Text */}
          <div className="lg:col-span-2 space-y-4">
            <p className="font-serif text-lg dark:text-[#F8F9FA]/90 text-gray-700 leading-relaxed">
              I'm an undergraduate student at Rutgers University studying Economics and Environmental Policy. My work sits at the intersection of financial markets and real-world impact — whether that's analyzing how Florida families are exposed to climate-driven insurance collapse, or building equity valuation models for international markets.
            </p>
            <p className="font-serif text-lg dark:text-[#F8F9FA]/90 text-gray-700 leading-relaxed">
              I've delivered equity pitches to institutional investment committees, submitted research proposals to nonprofits, and built financial models from scratch for both private and public companies. I care about the rigor of the analysis and the clarity of the communication — the work only matters if it reaches the right people.
            </p>
            <p className="font-serif text-lg dark:text-[#F8F9FA]/90 text-gray-700 leading-relaxed">
              Outside of research, I'm interested in how institutions make decisions under uncertainty — whether that's a university board choosing between a GRF and a capital project, or an investment committee deciding how to price emerging-market risk.
            </p>
          </div>
        </motion.div>

        {/* Skills */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <span className="font-mono text-xs uppercase tracking-widest text-[#00D9FF]">Skills</span>
            <div className="flex-1 h-px dark:bg-white/10 bg-gray-200" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {skills.map(({ icon: Icon, label, desc }, i) => (
              <motion.div
                key={label}
                className="dark:bg-navy-800 bg-white border dark:border-white/5 border-gray-200 rounded-xl p-5 flex gap-4"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.4 }}
                whileHover={{ y: -3, transition: { duration: 0.15 } }}
              >
                <div className="w-9 h-9 rounded-lg bg-[#00D9FF]/10 flex items-center justify-center flex-shrink-0">
                  <Icon size={16} className="text-[#00D9FF]" />
                </div>
                <div>
                  <div className="font-mono text-sm font-semibold dark:text-[#F8F9FA] text-gray-900 mb-0.5">
                    {label}
                  </div>
                  <div className="font-body text-xs dark:text-[#94A3B8] text-gray-500">{desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Interests */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <span className="font-mono text-xs uppercase tracking-widest text-[#00D9FF]">Research Interests</span>
            <div className="flex-1 h-px dark:bg-white/10 bg-gray-200" />
          </div>

          <div className="flex flex-wrap gap-3">
            {interests.map((interest) => (
              <span
                key={interest}
                className="font-mono text-sm px-4 py-2 rounded-full dark:bg-navy-800 bg-white border dark:border-white/10 border-gray-200 dark:text-[#94A3B8] text-gray-600"
              >
                {interest}
              </span>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center py-12 dark:bg-navy-800 bg-white rounded-xl border dark:border-white/5 border-gray-200"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <h3 className="font-mono text-xl font-bold dark:text-[#F8F9FA] text-gray-900 mb-4">
            Want to work together?
          </h3>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/contact"
              className="no-underline px-6 py-3 rounded-lg bg-[#FFB800] text-navy-900 font-semibold font-body hover:bg-[#FFB800]/90 transition-all duration-200"
            >
              Get in touch
            </Link>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="no-underline px-6 py-3 rounded-lg border dark:border-[#00D9FF]/30 border-[#00D9FF]/50 dark:text-[#00D9FF] text-[#0099BB] font-semibold font-body hover:dark:bg-[#00D9FF]/10 hover:bg-[#00D9FF]/10 transition-all duration-200"
            >
              Download Resume
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
