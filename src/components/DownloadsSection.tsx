import { motion } from "framer-motion";
import { FileText, Table, Download, Image } from "lucide-react";
import type { ProjectDownload } from "../types";

const iconMap = {
  pdf: FileText,
  csv: Table,
  excel: Table,
  png: Image,
};

const colorMap = {
  pdf: "#FF6B6B",
  csv: "#52B788",
  excel: "#52B788",
  png: "#00D9FF",
};

interface DownloadsSectionProps {
  downloads: ProjectDownload[];
}

export function DownloadsSection({ downloads }: DownloadsSectionProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {downloads.map((dl, i) => {
        const Icon = iconMap[dl.type];
        const color = colorMap[dl.type];

        return (
          <motion.a
            key={dl.title}
            href={dl.file}
            target="_blank"
            rel="noopener noreferrer"
            download
            className="no-underline flex items-center gap-4 p-4 rounded-xl dark:bg-navy-800 bg-white border dark:border-white/5 border-gray-200 dark:hover:border-[#00D9FF]/20 hover:border-[#00D9FF]/30 transition-all duration-200 group"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: i * 0.07 }}
            whileHover={{ y: -2 }}
          >
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
              style={{ background: `${color}15`, color }}
            >
              <Icon size={18} />
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-body text-sm font-medium dark:text-[#F8F9FA] text-gray-900 truncate">
                {dl.title}
              </div>
              <div className="font-mono text-xs dark:text-[#94A3B8] text-gray-400 uppercase">
                {dl.type} · {dl.size}
              </div>
            </div>
            <Download
              size={14}
              className="dark:text-[#94A3B8] text-gray-400 group-hover:text-[#00D9FF] transition-colors flex-shrink-0"
            />
          </motion.a>
        );
      })}
    </div>
  );
}
