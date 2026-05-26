import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Home } from "lucide-react";

export function NotFound() {
  return (
    <div className="min-h-screen dark:bg-navy-900 bg-[#F1F5F9] flex items-center justify-center px-6">
      <motion.div
        className="text-center max-w-md"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="font-mono text-8xl font-bold text-[#00D9FF]/20 mb-4">404</div>
        <h1 className="font-mono text-2xl font-bold dark:text-[#F8F9FA] text-gray-900 mb-3">
          Page not found
        </h1>
        <p className="font-body dark:text-[#94A3B8] text-gray-500 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="no-underline inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#FFB800] text-navy-900 font-semibold font-body hover:bg-[#FFB800]/90 transition-all duration-200"
        >
          <Home size={16} />
          Back to home
        </Link>
      </motion.div>
    </div>
  );
}
