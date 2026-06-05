import type { ResearchProject } from "../types";

export const projects: ResearchProject[] = [
  {
    id: "hurricane-recovery",
    title: "Who's Going to Pay for Hurricane Recovery?",
    category: "Financial Preparedness",
    categoryColor: "text-[#00D9FF]",
    description: "Analyzing the structural breakdown of Florida's home insurance market and the growing gap between disaster costs and recovery capacity.",
    synopsis: [
      "Florida's home insurance market is in structural breakdown — and most families aren't financially equipped to handle the fallout. This project, submitted as a formal proposal to the American Red Cross of Central Florida, examined the accelerating cost of natural disasters in Gulf Coast states and the growing gap between what families need to recover and what the insurance system can actually provide. With Florida homeowners paying an average of $14,140 annually for home insurance — nearly 5x the national average — and over a dozen insurers having declared insolvency in the past six years, the financial safety net for disaster recovery has eroded faster than public awareness has caught up.",
      "The proposal analyzed FEMA disaster loan data, NOAA billion-dollar disaster records, and state-level insurance market trends to map the financial exposure faced by Central Florida households, particularly in the Tampa Bay, Sarasota, and St. Petersburg areas. The findings reinforced that existing preparation guidance is inadequate: advice to \"maintain liquidity\" and \"document everything\" fails families who are uninsured, underinsured, or caught in the Citizens' Insurance overflow with no coverage alternatives. The core gap isn't awareness — it's the absence of structured, accessible financial planning resources that can help families build resilience on their own.",
      "The proposal recommended a two-part intervention: an online Financial Preparedness Quiz scoring households across ten dimensions (assets, liabilities, income, credit, flood insurance coverage, and more), and a curated handbook of case-study-driven guidance from Central Florida financial planners — supplemented by video interviews. Success benchmarks: 340,000 video views and 34,000 quiz completions — 10% and 1% of the Greater Tampa Bay region population, respectively.",
    ],
    pullQuote: "The core gap isn't awareness — it's the absence of structured, accessible financial planning resources that can help families build resilience before the next storm season.",
    heroGradientFrom: "#0B4F6C",
    heroGradientTo: "#0A1628",
    accentColor: "#00D9FF",
    timeline: {
      start: "01/2025",
      end: "07/2025",
      duration: "6 months",
    },
    milestones: [
      {
        date: "Jan 2025",
        title: "Data Collection",
        description: "Analyzed NOAA, FEMA SBA loan, and state insurance market data to quantify Florida's disaster cost exposure.",
      },
      {
        date: "Mar 2025",
        title: "Risk Modeling",
        description: "Mapped insurance coverage gaps across Gulf Coast counties using regression-based risk modeling.",
      },
      {
        date: "May 2025",
        title: "Quiz Design",
        description: "Designed a 10-dimension Financial Preparedness Quiz with scoring rubric and interpretive guidance.",
      },
    ],
    metrics: [
      { value: "5.5×", label: "Premium vs. National Avg", description: "$14,140 vs. $2,584 national average annual premium" },
      { value: "$184.8B", label: "2024 Disaster Losses", description: "Total U.S. disaster losses from 27 billion-dollar events in 2024 alone" },
      { value: "60%", label: "Uninsured for Flood", description: "Florida homeowners without separate flood insurance" },
      { value: "$4.4B", label: "SBA Loans to FL", description: "Florida received more SBA disaster loans than any other state (2017–2023)" },
    ],
    downloads: [
      { title: "Full Research Proposal", file: "/pdfs/hurricane-recovery-report.pdf", size: "2.4 MB", type: "pdf" },
      { title: "Florida Insurance Dataset", file: "/datasets/florida-insurance-data.csv", size: "180 KB", type: "csv" },
      { title: "Summary Infographic", file: "/images/hurricane-infographic.png", size: "1.1 MB", type: "png" },
    ],
    relatedIds: ["university-climate", "japex-pitch"],
  },
  {
    id: "university-climate",
    title: "Can Universities Do More for the Environment?",
    category: "Climate Action Research",
    categoryColor: "text-[#52B788]",
    description: "Evaluating why 700 U.S. university climate commitments have stalled — and what a tridental framework of environmental, governance, and financial forces reveals about the path forward.",
    synopsis: [
      "University climate action plans are failing — not because of a lack of ambition, but because feasibility is treated as a single question rather than a system of interacting forces. This term paper, submitted for an Environmental Issues course at Rutgers University, argued that the dominant approach to university climate action conflates ecological ambition, governance structure, and financial capacity into a single monolithic \"feasibility\" determination. The result: 700 U.S. institutions have signed climate commitments since 2010, yet meaningful progress on emissions reduction has stalled across the board.",
      "The paper proposed a tridental framework that evaluates university climate action across three dimensions — environmental, political-governance, and financial — and focuses on the second and third-order interactions between them. The financial dimension challenges the assumption that green initiatives are cost-prohibitive, highlighting Green Revolving Funds (GRFs) as a self-replenishing mechanism with a documented median annual ROI of 28% and a 3.5-year payback period — dramatically outperforming traditional endowment returns.",
      "Rutgers University served as the case study. With a $5.939B operating budget, 470,000 tonnes of CO2 emissions in 2021, and approximately $5B in deferred maintenance liabilities, Rutgers illustrates exactly how misaligned incentive structures — not financial incapacity — stall climate progress. The paper recommended establishing a Green Revolving Fund, centralizing project savings at the university level, and creating a Climate Mobilization Office with genuine accountability mechanisms.",
    ],
    pullQuote: "Institutional barriers, not technical or financial ones, are the primary obstacle — a 172-university survey identified lack of leadership commitment as the top constraint on climate action.",
    heroGradientFrom: "#2D6A4F",
    heroGradientTo: "#0A1628",
    accentColor: "#52B788",
    timeline: {
      start: "01/2026",
      end: "05/2026",
      duration: "4 months",
    },
    milestones: [
      {
        date: "Jan 2026",
        title: "Literature Review",
        description: "Conducted review across environmental, governance, and financial dimensions of university climate action.",
      },
      {
        date: "Feb 2026",
        title: "Rutgers Analysis",
        description: "Analyzed Rutgers' Climate Action Plan (RUCAP), FY2026 budget, and annual financial reports.",
      },
      {
        date: "Apr 2026",
        title: "Peer Comparison",
        description: "Compared Rutgers governance to peer institutions including Purdue and the University of California system.",
      },
      {
        date: "May 2026",
        title: "Paper Submitted",
        description: "Submitted for Environmental Issues course, Rutgers University.",
      },
    ],
    metrics: [
      { value: "700", label: "Universities Committed", description: "U.S. universities with signed climate commitments since 2010, yet progress has stalled" },
      { value: "121M", label: "MTCO₂/Year", description: "Annual emissions from the U.S. university system (~2% of total U.S. emissions)" },
      { value: "28%", label: "GRF Median ROI", description: "Median annual ROI of Green Revolving Funds vs. 11% CAGR for traditional endowments" },
      { value: "3.5 yrs", label: "GRF Payback Period", description: "Median payback period for Green Revolving Fund projects — dramatically faster than endowment returns" },
    ],
    downloads: [
      { title: "Full Research Paper", file: "/pdfs/climate-action-research.pdf", size: "1.8 MB", type: "pdf" },
      { title: "University Climate Dataset", file: "/datasets/university-climate-commitments.csv", size: "240 KB", type: "csv" },
      { title: "Methodology Appendix", file: "/pdfs/climate-methodology.pdf", size: "420 KB", type: "pdf" },
    ],
    relatedIds: ["hurricane-recovery", "chipotle-pitch"],
  },
  {
    id: "japex-pitch",
    title: "Japanese v. U.S. Equities",
    subtitle: "JAPEX Stock Pitch",
    category: "Equity Research",
    categoryColor: "text-[#FFB800]",
    description: "Identifying a 20–30% valuation dislocation in Japan Petroleum Exploration Co. — delivered to Alta Fox Capital's small-cap competition in Fort Worth, TX.",
    synopsis: [
      "Japan Petroleum Exploration Co. (JAPEX) presented a textbook case of mispricing in a market where liquidity discounts and asset opacity systematically disadvantage foreign investors. This stock pitch, delivered to Alta Fox Capital's small-cap competition in Fort Worth, TX, identified a 20–30% valuation dislocation relative to sector peers and the broader index — driven by an excessively large liquidity discount embedded in the equity and a misread of the company's underlying asset base.",
      "The pitch built a multi-scenario valuation model — DCF, dividend discount, and comparables — projecting 7x upside under base-case crude strip pricing. The core catalyst was a ¥500B cash redeployment decision: the analysis assessed how allocating that capital across buybacks, special dividends, or reinvestment into higher-ROIC projects would compress the equity risk premium and close the gap between intrinsic and market value.",
      "Sensitivity analysis mapped the risk/reward asymmetry across throughput, capex, and FX (JPY volatility) assumptions, with particular attention to OPEC quota dynamics and supply shock scenarios as key macro risks. The downside case was anchored by NAV support, elevated free cash flow yields, and low balance-sheet leverage — framing the idea as a high-conviction long with a clearly defined valuation floor.",
    ],
    pullQuote: "7x upside under base-case crude strip pricing — downside anchored by NAV support, elevated FCF yields, and low leverage, with a clearly defined valuation floor.",
    heroGradientFrom: "#BC002D",
    heroGradientTo: "#0A1628",
    accentColor: "#FFB800",
    timeline: {
      start: "12/2024",
      end: "01/2025",
      duration: "~6 weeks",
    },
    milestones: [
      {
        date: "Dec 2024",
        title: "Sector Analysis",
        description: "Analyzed Japanese energy sector dynamics: JPY volatility, OPEC quota impacts, and supply shock risk.",
      },
      {
        date: "Dec 2024",
        title: "Valuation Model",
        description: "Built multi-scenario model: DCF, dividend discount, and comparable company analysis.",
      },
      {
        date: "Jan 2025",
        title: "Catalyst Analysis",
        description: "Assessed ¥500B cash redeployment options and modeled impact on equity risk premium across three paths.",
      },
      {
        date: "Jan 2025",
        title: "Pitch Delivered",
        description: "Submitted pitch to Alta Fox Capital investment committee.",
      },
    ],
    metrics: [
      { value: "7×", label: "Base Case Upside", description: "Projected upside under base-case crude strip pricing across DCF, DDM, and comps" },
      { value: "20–30%", label: "Valuation Dislocation", description: "Discount to sector peers and index driven by mispriced asset base and excess liquidity discount" },
      { value: "¥500B", label: "Catalyst", description: "Cash redeployment scenario analyzed as the primary equity risk premium compression catalyst" },
      { value: "Alta Fox", label: "Competition", description: "Small Cap Stock Pitch Competition — Fort Worth, TX (January 2025)" },
    ],
    downloads: [
      { title: "JAPEX Pitch Deck", file: "/pdfs/japex-pitch-deck.pdf", size: "3.2 MB", type: "pdf" },
      { title: "Financial Model", file: "/datasets/japex-financials.csv", size: "540 KB", type: "excel" },
      { title: "Investment Memo", file: "/pdfs/japex-memo.pdf", size: "680 KB", type: "pdf" },
    ],
    relatedIds: ["broadcom-pitch", "chipotle-pitch"],
  },
  {
    id: "broadcom-pitch",
    title: "Are Semiconductors Here to Stay?",
    subtitle: "Broadcom (AVGO) Stock Pitch",
    category: "Equity Research",
    categoryColor: "text-[#FFB800]",
    description: "Analyzing Broadcom's structural position in AI infrastructure, software diversification through VMware, and the long-term secular case for semiconductor demand.",
    synopsis: [
      "Broadcom (AVGO) sits at the intersection of the two most powerful secular trends in technology: AI infrastructure build-out and enterprise software consolidation. This equity research report examined whether Broadcom's premium valuation is justified by its structural positioning — or whether the AI hype cycle has run ahead of underlying fundamentals.",
      "The analysis focused on Broadcom's differentiated custom silicon strategy (XPUs), its VMware integration, and the durability of its recurring revenue streams across networking, wireless, and industrial segments. The central question: is AVGO a cyclical semiconductor story dressed up in AI clothing, or a compounding platform business with genuine pricing power?",
      "The pitch built a multi-scenario valuation framework examining revenue concentration risk (Apple represents ~20% of revenue), the pace of VMware cost synergy capture, and whether custom AI silicon TAM estimates are realistic given hyperscaler capex trajectories. [Add your specific thesis, price target, and recommendation here.]",
    ],
    pullQuote: "The question isn't whether semiconductors are here to stay — it's whether Broadcom's custom silicon strategy captures the AI infrastructure wave before hyperscalers bring design work in-house.",
    heroGradientFrom: "#7B2CBF",
    heroGradientTo: "#0A1628",
    accentColor: "#7B2CBF",
    timeline: {
      start: "09/2024",
      end: "12/2024",
      duration: "15 weeks",
    },
    milestones: [
      {
        date: "Sept 2024",
        title: "Industry Analysis",
        description: "Analyzed semiconductor industry cycle and structural trends in AI infrastructure demand.",
      },
      {
        date: "Oct 2024",
        title: "Revenue Modeling",
        description: "Modeled Broadcom's AI networking revenue opportunity and VMware synergy capture timeline.",
      },
      {
        date: "Oct 2024",
        title: "Peer Comparison",
        description: "Compared to peers: NVDA, AMD, QCOM across valuation, growth, and moat dimensions.",
      },
      {
        date: "Dec 2024",
        title: "Pitch Presented",
        description: "Presented to a MD at Neuberger Berman",
      },
    ],
    metrics: [
      { value: "$352.02", label: "Price Target", description: "11/24 Price: 183.64" },
      { value: "91.69%", label: "Upside Potential", description: "Calculated against 11/24 price" },
    ],
    downloads: [
      { title: "Broadcom Pitch Deck", file: "/pdfs/broadcom-pitch-deck.pdf", size: "TBD", type: "pdf" },
      { title: "Financial Model", file: "/datasets/broadcom-financials.csv", size: "TBD", type: "excel" },
      { title: "Semiconductor Deep Dive", file: "/pdfs/semiconductor-industry.pdf", size: "TBD", type: "pdf" },
    ],
    relatedIds: ["japex-pitch", "chipotle-pitch"],
  },
  {
    id: "chipotle-pitch",
    title: "Can Chipotle Compete in the Coming World?",
    subtitle: "CMG Stock Pitch",
    category: "Equity Research",
    categoryColor: "text-[#FFB800]",
    description: "A bottom-up equity research report on Chipotle Mexican Grill — HOLD at $40, with a full DCF, exit multiple, and comps analysis navigating inflation and competitive pressure.",
    synopsis: [
      "Chipotle enters 2026 as the dominant force in fast-casual dining — but its stock is being priced for a growth story that faces real headwinds. This equity research report evaluated CMG across its business fundamentals, competitive positioning, cost environment, and growth runway to arrive at a HOLD rating with a $40 price target (vs. the $34.92 price at research initiation on April 14, 2026). The thesis centers on a company with genuine structural advantages — a debt-free balance sheet, 60%+ cash-on-cash returns on new unit openings, and a 7,000-unit North American target with 8–10 years of expansion visibility — navigating a cyclical pause in fast-casual traffic.",
      "The report built a bottom-up financial model projecting $19.5B in revenue by 2030 (14.6% historical CAGR compressing to 8.5% as the business matures) and 16.5–17% EBIT margins, with a 5-year DCF yielding an implied share price of $23.42 under conservative WACC assumptions, and an exit multiple method producing $39.44. A comps analysis against CAVA, Wingstop, and Shake Shack placed fair value in the $35–55 range. The HOLD reflects fair current pricing, not a negative outlook.",
      "Key risks are quantified throughout: beef inflation running 14% above prior-year levels, avocado tariff impacts estimated at 60 basis points on cost of sales, California FAST Act wage hikes adding 40 basis points to labor costs YoY, and CAVA's aggressive expansion (19.6% unit growth in FY2025) as the most credible long-term competitive threat. Against these, the automation roadmap — HEAP appliance rollouts to 2,000+ stores by end of 2026, Autocado, and the Augmented Makeline — offers 100–200 basis points of potential restaurant-level margin improvement.",
    ],
    pullQuote: "The DCF at $23.42 vs. the exit multiple at $39.44 tells the whole story: Chipotle's all-equity capital structure punishes its cost of capital, but the market prices it like the category-defining compounder it actually is.",
    heroGradientFrom: "#A6192E",
    heroGradientTo: "#0A1628",
    accentColor: "#A6192E",
    timeline: {
      start: "01/2026",
      end: "04/2026",
      duration: "~3.5 months",
    },
    milestones: [
      {
        date: "Jan 2026",
        title: "Industry Analysis",
        description: "Fast-casual competitive set analysis across 8 competitors: CAVA, Wingstop, Shake Shack, Taco Bell, Sweetgreen, Qdoba, Moe's, Panera.",
      },
      {
        date: "Feb 2026",
        title: "Model Built",
        description: "5-year DCF model, exit multiple valuation, and comparable company analysis built from scratch.",
      },
      {
        date: "Mar 2026",
        title: "Cost Environment",
        description: "Quantified cost headwinds: beef inflation, avocado tariffs, California FAST Act labor impacts.",
      },
      {
        date: "Apr 2026",
        title: "Report Published",
        description: "Full equity research report published April 14, 2026 with HOLD recommendation at $40 price target.",
      },
    ],
    metrics: [
      { value: "$40", label: "Price Target", description: "HOLD rating vs. $34.92 at initiation on April 14, 2026 — 15% upside to target" },
      { value: "36.7%", label: "Digital Sales Mix", description: "Digital order penetration (FY2025) — Chipotle Rewards relaunch targets 21M enrolled members" },
      { value: "4,042", label: "Restaurants", description: "Company-owned restaurants at end of FY2025, targeting 7,000-unit North American buildout" },
      { value: "$19.5B", label: "2030 Revenue Target", description: "Projected revenue by FY2030 (8.5% CAGR from 2025 base of $11.93B)" },
    ],
    downloads: [
      { title: "CMG Pitch Deck", file: "/pdfs/chipotle-pitch-deck.pdf", size: "2.8 MB", type: "pdf" },
      { title: "Financial Model", file: "/datasets/chipotle-metrics.csv", size: "620 KB", type: "excel" },
      { title: "Store Expansion Analysis", file: "/pdfs/chipotle-expansion.pdf", size: "890 KB", type: "pdf" },
    ],
    relatedIds: ["japex-pitch", "broadcom-pitch"],
  },
];

export function getProjectById(id: string): ResearchProject | undefined {
  return projects.find((p) => p.id === id);
}

export function getRelatedProjects(ids: string[]): ResearchProject[] {
  return projects.filter((p) => ids.includes(p.id));
}
