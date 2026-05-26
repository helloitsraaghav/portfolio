export interface ProjectMetric {
  value: string;
  label: string;
  description: string;
}

export interface ProjectMilestone {
  date: string;
  title: string;
  description: string;
}

export interface ProjectDownload {
  title: string;
  file: string;
  size: string;
  type: "pdf" | "csv" | "excel" | "png";
}

export interface ResearchProject {
  id: string;
  title: string;
  subtitle?: string;
  category: string;
  categoryColor: string;  // tailwind text color class
  description: string;    // one-liner for card
  synopsis: string[];     // paragraph array
  pullQuote: string;
  heroGradientFrom: string; // hex
  heroGradientTo: string;   // hex
  accentColor: string;      // hex for charts
  timeline: {
    start: string;
    end: string;
    duration: string;
  };
  milestones: ProjectMilestone[];
  metrics: ProjectMetric[];
  downloads: ProjectDownload[];
  relatedIds: string[];
}

// Legacy type kept for compatibility
export interface Skill {
  subject: string;
  level: number;
  fullMark: number;
}
