import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useTypewriter } from "../hooks/useTypewriter";

const HEADING_TEXT = "Hi, I'm Raaghav.";
const SUBTITLE_TEXT = "I study financial markets and the feasibility of climate finance.";

export function Hero() {
  const [headingDone, setHeadingDone] = useState(false);

  const { displayText: heading } = useTypewriter({
    text: HEADING_TEXT,
    speed: 55,
    startDelay: 400,
    onComplete: () => setHeadingDone(true),
  });

  const { displayText: subtitle, isComplete: subtitleDone } = useTypewriter({
    text: SUBTITLE_TEXT,
    speed: 35,
    startDelay: headingDone ? 200 : 999_999,
  });

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-16 text-center overflow-hidden dark:bg-navy-900 bg-[#F1F5F9]"
    >
      {/* Animated grid background */}
      <div className="absolute inset-0 grid-bg opacity-60 pointer-events-none" />

      {/* Subtle radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#00D9FF]/5 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl">
        {/* Terminal-style label */}
        <motion.div
          className="inline-flex items-center gap-2 mb-6 px-3 py-1 rounded-full border dark:border-[#00D9FF]/20 border-[#00D9FF]/40 dark:bg-[#00D9FF]/5 bg-[#00D9FF]/10"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <span className="w-2 h-2 rounded-full bg-[#52B788] animate-pulse" />
          <span className="font-mono text-xs dark:text-[#94A3B8] text-gray-500">
            Discipline Research & Investment Analysis
          </span>
        </motion.div>

        {/* Heading with typewriter */}
        <h1 className="font-mono text-4xl md:text-6xl lg:text-7xl font-bold dark:text-[#F8F9FA] text-gray-900 leading-tight mb-4 min-h-[1.25em]">
          {heading}
          {!headingDone && (
            <span className="inline-block w-0.5 h-10 md:h-14 bg-[#00D9FF] ml-1 align-middle animate-blink" />
          )}
        </h1>

        {/* Subtitle */}
        <p className="font-body text-lg md:text-2xl dark:text-[#94A3B8] text-gray-500 max-w-2xl mx-auto mb-10 min-h-[2rem]">
          {subtitle}
          {headingDone && !subtitleDone && (
            <span className="inline-block w-0.5 h-5 bg-[#00D9FF] ml-0.5 align-middle animate-blink" />
          )}
        </p>

        {/* CTAs */}
        {subtitleDone && (
          <motion.div
            className="flex flex-wrap gap-4 justify-center"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <a
              href="#projects"
              className="px-8 py-3 rounded-lg bg-[#FFB800] text-navy-900 font-semibold font-body hover:bg-[#FFB800]/90 transition-all duration-200 no-underline shadow-lg shadow-[#FFB800]/20 hover:shadow-[#FFB800]/30 hover:-translate-y-0.5"
            >
              View Projects
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-lg border dark:border-[#00D9FF]/40 border-[#00D9FF]/60 dark:text-[#00D9FF] text-[#0099BB] font-semibold font-body hover:dark:bg-[#00D9FF]/10 hover:bg-[#00D9FF]/10 transition-all duration-200 no-underline"
            >
              Download Resume
            </a>
          </motion.div>
        )}

        {/* Stats row */}
        {subtitleDone && (
          <motion.div
            className="flex flex-wrap justify-center gap-8 mt-16 dark:text-[#94A3B8] text-gray-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            {[
              { num: "5", label: "Research Projects" },
              { num: "3", label: "Equity Pitches" },
              { num: "2", label: "Climate Reports" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-mono text-2xl font-bold text-[#00D9FF]">{stat.num}</div>
                <div className="font-body text-xs uppercase tracking-widest mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        )}
      </div>

      {/* Scroll chevron */}
      {subtitleDone && (
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 dark:text-[#94A3B8]/50 text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <Link to="/#projects" className="no-underline dark:text-[#94A3B8]/50 text-gray-400">
            <ChevronDown size={24} className="animate-chevronBounce" />
          </Link>
        </motion.div>
      )}
    </section>
  );
}
