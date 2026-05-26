import { motion } from "framer-motion";
import {
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { skills } from "../data/skills";

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-display text-5xl font-bold text-gray-800 mb-3">
            Skills
          </h2>
          <p className="font-body text-gray-500 text-lg">
            Technologies I work with
          </p>
        </motion.div>

        <motion.div
          className="card-surface p-8"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <ResponsiveContainer width="100%" height={420}>
            <RadarChart
              data={skills}
              margin={{ top: 20, right: 40, bottom: 20, left: 40 }}
            >
              <PolarGrid stroke="#86efac" strokeOpacity={0.5} />
              <PolarAngleAxis
                dataKey="subject"
                tick={{
                  fill: "#374151",
                  fontSize: 13,
                  fontFamily: "Inter",
                  fontWeight: 500,
                }}
              />
              <PolarRadiusAxis
                angle={90}
                domain={[0, 100]}
                tick={{ fill: "#9ca3af", fontSize: 10 }}
                tickCount={5}
              />
              <Radar
                name="Skill Level"
                dataKey="level"
                stroke="#4ade80"
                fill="#4ade80"
                fillOpacity={0.25}
                strokeWidth={2}
              />
              <Tooltip
                formatter={(value) => [`${value}%`, "Proficiency"]}
                contentStyle={{
                  borderRadius: "12px",
                  border: "1px solid #86efac",
                  fontFamily: "Inter",
                  fontSize: "13px",
                  background: "#fff",
                }}
              />
            </RadarChart>
          </ResponsiveContainer>
        </motion.div>
      </div>
    </section>
  );
}
