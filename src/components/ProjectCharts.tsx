/**
 * Project-specific chart components.
 * Each project gets its own tailored visualization using Recharts.
 */
import { useState } from "react";
import {
  LineChart, Line, BarChart, Bar, RadarChart, Radar, PolarGrid, PolarAngleAxis,
  PolarRadiusAxis, AreaChart, Area, XAxis, YAxis,
  CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from "recharts";

// ─────────────────────────────────────────────
// PROJECT 1: Hurricane Recovery
// ─────────────────────────────────────────────

const insurancePremiumData = [
  { year: "2018", highRisk: 8200, medRisk: 4100, lowRisk: 2400 },
  { year: "2019", highRisk: 9100, medRisk: 4400, lowRisk: 2500 },
  { year: "2020", highRisk: 9800, medRisk: 4700, lowRisk: 2520 },
  { year: "2021", highRisk: 11200, medRisk: 5100, lowRisk: 2550 },
  { year: "2022", highRisk: 13400, medRisk: 5900, lowRisk: 2560 },
  { year: "2023", highRisk: 15200, medRisk: 6600, lowRisk: 2570 },
  { year: "2024", highRisk: 17800, medRisk: 7300, lowRisk: 2584 },
];

const insurer_data = [
  { year: "2018", entering: 8, exiting: 3 },
  { year: "2019", entering: 6, exiting: 4 },
  { year: "2020", entering: 4, exiting: 5 },
  { year: "2021", entering: 3, exiting: 7 },
  { year: "2022", entering: 2, exiting: 9 },
  { year: "2023", entering: 1, exiting: 8 },
  { year: "2024", entering: 2, exiting: 6 },
];

export function HurricaneCharts() {
  const [view, setView] = useState<"premiums" | "insurers">("premiums");

  return (
    <div className="space-y-8">
      {/* Toggle */}
      <div className="flex gap-2">
        {(["premiums", "insurers"] as const).map((v) => (
          <button
            key={v}
            onClick={() => setView(v)}
            className={`px-4 py-1.5 rounded-full font-mono text-xs transition-all duration-200 ${
              view === v
                ? "bg-[#00D9FF] text-navy-900 font-semibold"
                : "dark:bg-navy-700 bg-gray-100 dark:text-[#94A3B8] text-gray-500 hover:text-[#00D9FF]"
            }`}
          >
            {v === "premiums" ? "Premium Trends" : "Market Exits vs Entries"}
          </button>
        ))}
      </div>

      {view === "premiums" && (
        <div>
          <h3 className="font-mono text-sm font-semibold dark:text-[#F8F9FA] text-gray-900 mb-1">
            Average Annual Home Insurance Premium (2018–2024)
          </h3>
          <p className="font-body text-xs dark:text-[#94A3B8] text-gray-500 mb-4">
            Florida premium growth by risk zone — vs. $2,584 national average
          </p>
          <ResponsiveContainer width="100%" height={320}>
            <LineChart data={insurancePremiumData} margin={{ top: 8, right: 24, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" />
              <XAxis dataKey="year" tick={{ fill: "#94A3B8", fontSize: 11, fontFamily: "IBM Plex Mono" }} />
              <YAxis
                tickFormatter={(v) => `$${(v / 1000).toFixed(0)}k`}
                tick={{ fill: "#94A3B8", fontSize: 11, fontFamily: "IBM Plex Mono" }}
                width={48}
              />
              <Tooltip
                formatter={(v, name) => [
                  `$${Number(v).toLocaleString()}`,
                  String(name) === "highRisk" ? "High-Risk Coastal" : String(name) === "medRisk" ? "Medium Risk" : "Low Risk Inland",
                ]}
                contentStyle={{ background: "#0D1F3C", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 8, fontFamily: "IBM Plex Mono", fontSize: 12 }}
                labelStyle={{ color: "#94A3B8" }}
              />
              <Legend
                formatter={(v) => (v === "highRisk" ? "High-Risk Coastal" : v === "medRisk" ? "Medium Risk" : "Low Risk Inland")}
                wrapperStyle={{ fontFamily: "IBM Plex Mono", fontSize: 11, color: "#94A3B8" }}
              />
              <Line type="monotone" dataKey="highRisk" stroke="#FF6B6B" strokeWidth={2} dot={false} />
              <Line type="monotone" dataKey="medRisk" stroke="#FFB800" strokeWidth={2} dot={false} />
              <Line type="monotone" dataKey="lowRisk" stroke="#00D9FF" strokeWidth={2} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      )}

      {view === "insurers" && (
        <div>
          <h3 className="font-mono text-sm font-semibold dark:text-[#F8F9FA] text-gray-900 mb-1">
            Insurers Entering vs. Exiting the Florida Market
          </h3>
          <p className="font-body text-xs dark:text-[#94A3B8] text-gray-500 mb-4">
            12+ major insurers declared insolvency or exited Florida between 2018–2024
          </p>
          <ResponsiveContainer width="100%" height={320}>
            <BarChart data={insurer_data} margin={{ top: 8, right: 24, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" />
              <XAxis dataKey="year" tick={{ fill: "#94A3B8", fontSize: 11, fontFamily: "IBM Plex Mono" }} />
              <YAxis tick={{ fill: "#94A3B8", fontSize: 11, fontFamily: "IBM Plex Mono" }} width={36} />
              <Tooltip
                contentStyle={{ background: "#0D1F3C", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 8, fontFamily: "IBM Plex Mono", fontSize: 12 }}
                labelStyle={{ color: "#94A3B8" }}
              />
              <Legend wrapperStyle={{ fontFamily: "IBM Plex Mono", fontSize: 11, color: "#94A3B8" }} />
              <Bar dataKey="entering" name="Entering" fill="#52B788" radius={[4, 4, 0, 0]} />
              <Bar dataKey="exiting" name="Exiting" fill="#FF6B6B" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
}

// ─────────────────────────────────────────────
// PROJECT 2: University Climate
// ─────────────────────────────────────────────

const grfReturnData = [
  { name: "GRF Median ROI", value: 28, fill: "#52B788" },
  { name: "Traditional Endowment CAGR", value: 11, fill: "#94A3B8" },
  { name: "S&P 500 10yr Avg", value: 13, fill: "#00D9FF" },
];

const emissionsByType = [
  { type: "Scope 1 (Direct)", rutgers: 185000, peer: 142000 },
  { type: "Scope 2 (Energy)", rutgers: 220000, peer: 180000 },
  { type: "Scope 3 (Indirect)", rutgers: 65000, peer: 58000 },
];

export function ClimateCharts() {
  return (
    <div className="space-y-10">
      <div>
        <h3 className="font-mono text-sm font-semibold dark:text-[#F8F9FA] text-gray-900 mb-1">
          Green Revolving Fund ROI vs. Traditional Returns
        </h3>
        <p className="font-body text-xs dark:text-[#94A3B8] text-gray-500 mb-4">
          GRFs deliver 28% median annual ROI with a 3.5-year payback — vs. 11% for endowments
        </p>
        <ResponsiveContainer width="100%" height={240}>
          <BarChart data={grfReturnData} layout="vertical" margin={{ top: 0, right: 24, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" horizontal={false} />
            <XAxis
              type="number"
              tickFormatter={(v) => `${v}%`}
              tick={{ fill: "#94A3B8", fontSize: 11, fontFamily: "IBM Plex Mono" }}
            />
            <YAxis
              type="category"
              dataKey="name"
              tick={{ fill: "#94A3B8", fontSize: 11, fontFamily: "IBM Plex Mono" }}
              width={180}
            />
            <Tooltip
              formatter={(v) => [`${v}%`, "Annual Return"]}
              contentStyle={{ background: "#0D1F3C", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 8, fontFamily: "IBM Plex Mono", fontSize: 12 }}
              labelStyle={{ color: "#94A3B8" }}
            />
            <Bar dataKey="value" radius={[0, 4, 4, 0]} fill="#52B788">
              {grfReturnData.map((entry, i) => (
                <rect key={i} fill={entry.fill} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div>
        <h3 className="font-mono text-sm font-semibold dark:text-[#F8F9FA] text-gray-900 mb-1">
          Rutgers Emissions vs. Peer Average (MTCO₂, 2021)
        </h3>
        <p className="font-body text-xs dark:text-[#94A3B8] text-gray-500 mb-4">
          Rutgers total: ~470,000 MTCO₂ — 40% of buildings over 50 years old drive Scope 1 & 2
        </p>
        <ResponsiveContainer width="100%" height={280}>
          <BarChart data={emissionsByType} margin={{ top: 8, right: 24, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" />
            <XAxis dataKey="type" tick={{ fill: "#94A3B8", fontSize: 10, fontFamily: "IBM Plex Mono" }} />
            <YAxis
              tickFormatter={(v) => `${(v / 1000).toFixed(0)}k`}
              tick={{ fill: "#94A3B8", fontSize: 11, fontFamily: "IBM Plex Mono" }}
              width={44}
            />
            <Tooltip
              formatter={(v) => [`${Number(v).toLocaleString()} MTCO₂`, ""]}
              contentStyle={{ background: "#0D1F3C", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 8, fontFamily: "IBM Plex Mono", fontSize: 12 }}
              labelStyle={{ color: "#94A3B8" }}
            />
            <Legend wrapperStyle={{ fontFamily: "IBM Plex Mono", fontSize: 11, color: "#94A3B8" }} />
            <Bar dataKey="rutgers" name="Rutgers" fill="#52B788" radius={[4, 4, 0, 0]} />
            <Bar dataKey="peer" name="Peer Avg" fill="#94A3B8" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// PROJECT 3: JAPEX
// ─────────────────────────────────────────────

const japexComps = [
  { metric: "P/E", JAPEX: 8.3, USPeers: 14.2 },
  { metric: "EV/EBITDA", JAPEX: 4.1, USPeers: 7.8 },
  { metric: "Div Yield %", JAPEX: 5.2, USPeers: 3.1 },
  { metric: "ROE %", JAPEX: 6.8, USPeers: 12.4 },
];

const radarData = [
  { subject: "Valuation", JAPEX: 88, USPeers: 55 },
  { subject: "Dividend", JAPEX: 82, USPeers: 48 },
  { subject: "FCF Yield", JAPEX: 75, USPeers: 60 },
  { subject: "Growth", JAPEX: 38, USPeers: 70 },
  { subject: "ROIC", JAPEX: 42, USPeers: 72 },
];

export function JapexCharts() {
  const [view, setView] = useState<"comps" | "radar">("comps");

  return (
    <div className="space-y-6">
      <div className="flex gap-2">
        {(["comps", "radar"] as const).map((v) => (
          <button
            key={v}
            onClick={() => setView(v)}
            className={`px-4 py-1.5 rounded-full font-mono text-xs transition-all duration-200 ${
              view === v
                ? "bg-[#FFB800] text-navy-900 font-semibold"
                : "dark:bg-navy-700 bg-gray-100 dark:text-[#94A3B8] text-gray-500 hover:text-[#FFB800]"
            }`}
          >
            {v === "comps" ? "Valuation Comps" : "Competitive Radar"}
          </button>
        ))}
      </div>

      {view === "comps" && (
        <div>
          <h3 className="font-mono text-sm font-semibold dark:text-[#F8F9FA] text-gray-900 mb-1">
            JAPEX vs. U.S. Energy Peers — Key Metrics
          </h3>
          <p className="font-body text-xs dark:text-[#94A3B8] text-gray-500 mb-4">
            20–30% discount driven by excess liquidity premium and asset opacity
          </p>
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={japexComps} margin={{ top: 8, right: 24, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" />
              <XAxis dataKey="metric" tick={{ fill: "#94A3B8", fontSize: 11, fontFamily: "IBM Plex Mono" }} />
              <YAxis tick={{ fill: "#94A3B8", fontSize: 11, fontFamily: "IBM Plex Mono" }} width={36} />
              <Tooltip
                contentStyle={{ background: "#0D1F3C", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 8, fontFamily: "IBM Plex Mono", fontSize: 12 }}
                labelStyle={{ color: "#94A3B8" }}
              />
              <Legend wrapperStyle={{ fontFamily: "IBM Plex Mono", fontSize: 11, color: "#94A3B8" }} />
              <Bar dataKey="JAPEX" fill="#FFB800" radius={[4, 4, 0, 0]} />
              <Bar dataKey="USPeers" name="U.S. Peers Avg" fill="#94A3B8" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      )}

      {view === "radar" && (
        <div>
          <h3 className="font-mono text-sm font-semibold dark:text-[#F8F9FA] text-gray-900 mb-1">
            Competitive Positioning — JAPEX vs. U.S. Energy Peers
          </h3>
          <p className="font-body text-xs dark:text-[#94A3B8] text-gray-500 mb-4">
            JAPEX screens cheaply on valuation and income; U.S. peers lead on growth and ROIC
          </p>
          <ResponsiveContainer width="100%" height={320}>
            <RadarChart data={radarData} margin={{ top: 8, right: 40, bottom: 8, left: 40 }}>
              <PolarGrid stroke="rgba(255,255,255,0.1)" />
              <PolarAngleAxis dataKey="subject" tick={{ fill: "#94A3B8", fontSize: 11, fontFamily: "IBM Plex Mono" }} />
              <PolarRadiusAxis domain={[0, 100]} tick={{ fill: "#94A3B8", fontSize: 9 }} tickCount={4} />
              <Radar name="JAPEX" dataKey="JAPEX" stroke="#FFB800" fill="#FFB800" fillOpacity={0.2} strokeWidth={2} />
              <Radar name="U.S. Peers" dataKey="USPeers" stroke="#94A3B8" fill="#94A3B8" fillOpacity={0.1} strokeWidth={1.5} />
              <Legend wrapperStyle={{ fontFamily: "IBM Plex Mono", fontSize: 11, color: "#94A3B8" }} />
              <Tooltip
                contentStyle={{ background: "#0D1F3C", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 8, fontFamily: "IBM Plex Mono", fontSize: 12 }}
              />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
}

// ─────────────────────────────────────────────
// PROJECT 4: Broadcom
// ─────────────────────────────────────────────

const broadcomRevenue = [
  { year: "FY20", ai: 2.1, wireless: 5.8, industrial: 3.2, software: 5.5 },
  { year: "FY21", ai: 3.4, wireless: 6.6, industrial: 3.4, software: 6.6 },
  { year: "FY22", ai: 5.2, wireless: 7.1, industrial: 3.5, software: 7.1 },
  { year: "FY23", ai: 8.6, wireless: 7.4, industrial: 3.3, software: 9.8 },
  { year: "FY24", ai: 15.4, wireless: 7.8, industrial: 3.0, software: 25.2 },
];

export function BroadcomCharts() {
  const [mode, setMode] = useState<"dollar" | "percent">("dollar");

  const totalByYear = broadcomRevenue.map((d) => ({
    ...d,
    total: d.ai + d.wireless + d.industrial + d.software,
  }));

  const pctData = totalByYear.map((d) => ({
    year: d.year,
    ai: parseFloat(((d.ai / d.total) * 100).toFixed(1)),
    wireless: parseFloat(((d.wireless / d.total) * 100).toFixed(1)),
    industrial: parseFloat(((d.industrial / d.total) * 100).toFixed(1)),
    software: parseFloat(((d.software / d.total) * 100).toFixed(1)),
  }));

  const displayData = mode === "dollar" ? broadcomRevenue : pctData;

  return (
    <div className="space-y-6">
      <div className="flex gap-2">
        {(["dollar", "percent"] as const).map((v) => (
          <button
            key={v}
            onClick={() => setMode(v)}
            className={`px-4 py-1.5 rounded-full font-mono text-xs transition-all duration-200 ${
              mode === v
                ? "bg-[#7B2CBF] text-white font-semibold"
                : "dark:bg-navy-700 bg-gray-100 dark:text-[#94A3B8] text-gray-500"
            }`}
          >
            {v === "dollar" ? "$ Revenue" : "% Mix"}
          </button>
        ))}
      </div>

      <div>
        <h3 className="font-mono text-sm font-semibold dark:text-[#F8F9FA] text-gray-900 mb-1">
          Broadcom Revenue by Segment (FY20–FY24)
        </h3>
        <p className="font-body text-xs dark:text-[#94A3B8] text-gray-500 mb-4">
          AI/custom silicon and software (VMware) now dominate — FY24 total ~$51.6B
        </p>
        <ResponsiveContainer width="100%" height={320}>
          <AreaChart data={displayData} margin={{ top: 8, right: 24, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" />
            <XAxis dataKey="year" tick={{ fill: "#94A3B8", fontSize: 11, fontFamily: "IBM Plex Mono" }} />
            <YAxis
              tickFormatter={(v) => mode === "dollar" ? `$${v}B` : `${v}%`}
              tick={{ fill: "#94A3B8", fontSize: 11, fontFamily: "IBM Plex Mono" }}
              width={48}
            />
            <Tooltip
              formatter={(v, name) => [
                mode === "dollar" ? `$${v}B` : `${v}%`,
                String(name).charAt(0).toUpperCase() + String(name).slice(1),
              ]}
              contentStyle={{ background: "#0D1F3C", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 8, fontFamily: "IBM Plex Mono", fontSize: 12 }}
              labelStyle={{ color: "#94A3B8" }}
            />
            <Legend wrapperStyle={{ fontFamily: "IBM Plex Mono", fontSize: 11, color: "#94A3B8" }} />
            <Area type="monotone" dataKey="software" name="Software" stackId="1" stroke="#7B2CBF" fill="#7B2CBF" fillOpacity={0.6} />
            <Area type="monotone" dataKey="ai" name="AI / Networking" stackId="1" stroke="#00D9FF" fill="#00D9FF" fillOpacity={0.6} />
            <Area type="monotone" dataKey="wireless" name="Wireless" stackId="1" stroke="#FFB800" fill="#FFB800" fillOpacity={0.6} />
            <Area type="monotone" dataKey="industrial" name="Industrial" stackId="1" stroke="#52B788" fill="#52B788" fillOpacity={0.6} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// PROJECT 5: Chipotle
// ─────────────────────────────────────────────

const chipotleSSS = [
  { period: "FY20", traffic: -14.0, ticket: 1.2, total: -12.8 },
  { period: "FY21", traffic: 8.6, ticket: 10.2, total: 19.3 },
  { period: "FY22", traffic: 0.4, ticket: 7.2, total: 7.9 },
  { period: "FY23", traffic: 5.0, ticket: 4.8, total: 8.4 },
  { period: "FY24", traffic: -2.3, ticket: 3.8, total: 5.4 },
  { period: "FY25E", traffic: 1.2, ticket: 2.0, total: 3.3 },
];

const unitEcon = [
  { name: "Avg Unit Vol", value: 3050000, fill: "#00D9FF" },
  { name: "Food & Paper", value: -915000, fill: "#FF6B6B" },
  { name: "Labor", value: -763750, fill: "#FF6B6B" },
  { name: "Occupancy", value: -305000, fill: "#FF6B6B" },
  { name: "Other Ops", value: -152500, fill: "#FF6B6B" },
  { name: "Restaurant Margin", value: 913750, fill: "#52B788" },
];

export function ChipotleCharts() {
  const [view, setView] = useState<"sss" | "unitEcon">("sss");

  return (
    <div className="space-y-6">
      <div className="flex gap-2 flex-wrap">
        {(["sss", "unitEcon"] as const).map((v) => (
          <button
            key={v}
            onClick={() => setView(v)}
            className={`px-4 py-1.5 rounded-full font-mono text-xs transition-all duration-200 ${
              view === v
                ? "bg-[#A6192E] text-white font-semibold"
                : "dark:bg-navy-700 bg-gray-100 dark:text-[#94A3B8] text-gray-500"
            }`}
          >
            {v === "sss" ? "Comp Store Sales" : "Unit Economics"}
          </button>
        ))}
      </div>

      {view === "sss" && (
        <div>
          <h3 className="font-mono text-sm font-semibold dark:text-[#F8F9FA] text-gray-900 mb-1">
            Comparable Store Sales Growth — Traffic vs. Ticket
          </h3>
          <p className="font-body text-xs dark:text-[#94A3B8] text-gray-500 mb-4">
            FY24 weakness was traffic-driven (-2.3%) — ticket pricing still positive at +3.8%
          </p>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={chipotleSSS} margin={{ top: 8, right: 24, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" />
              <XAxis dataKey="period" tick={{ fill: "#94A3B8", fontSize: 11, fontFamily: "IBM Plex Mono" }} />
              <YAxis
                tickFormatter={(v) => `${v}%`}
                tick={{ fill: "#94A3B8", fontSize: 11, fontFamily: "IBM Plex Mono" }}
                width={44}
              />
              <Tooltip
                formatter={(v) => [`${Number(v).toFixed(1)}%`, ""]}
                contentStyle={{ background: "#0D1F3C", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 8, fontFamily: "IBM Plex Mono", fontSize: 12 }}
                labelStyle={{ color: "#94A3B8" }}
              />
              <Legend wrapperStyle={{ fontFamily: "IBM Plex Mono", fontSize: 11, color: "#94A3B8" }} />
              <Bar dataKey="traffic" name="Traffic %" fill="#FF6B6B" radius={[4, 4, 0, 0]} />
              <Bar dataKey="ticket" name="Ticket %" fill="#52B788" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      )}

      {view === "unitEcon" && (
        <div>
          <h3 className="font-mono text-sm font-semibold dark:text-[#F8F9FA] text-gray-900 mb-1">
            Unit Economics Breakdown — Traditional Format
          </h3>
          <p className="font-body text-xs dark:text-[#94A3B8] text-gray-500 mb-4">
            ~$3.05M AUV → ~30% restaurant-level margin; 60%+ cash-on-cash return on new units
          </p>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={unitEcon} layout="vertical" margin={{ top: 0, right: 24, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" horizontal={false} />
              <XAxis
                type="number"
                tickFormatter={(v) => `$${(v / 1000).toFixed(0)}k`}
                tick={{ fill: "#94A3B8", fontSize: 10, fontFamily: "IBM Plex Mono" }}
              />
              <YAxis
                type="category"
                dataKey="name"
                tick={{ fill: "#94A3B8", fontSize: 10, fontFamily: "IBM Plex Mono" }}
                width={140}
              />
              <Tooltip
                formatter={(v) => [`$${Math.abs(Number(v) / 1000).toFixed(0)}k`, ""]}
                contentStyle={{ background: "#0D1F3C", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 8, fontFamily: "IBM Plex Mono", fontSize: 12 }}
                labelStyle={{ color: "#94A3B8" }}
              />
              <Bar dataKey="value" radius={[0, 4, 4, 0]}>
                {unitEcon.map((entry, i) => (
                  <rect key={i} fill={entry.fill} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
}
