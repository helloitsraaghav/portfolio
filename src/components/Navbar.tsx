import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useScrollPosition } from "../hooks/useScrollPosition";
import { useTheme } from "../context/ThemeContext";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Projects", to: "/#projects" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export function Navbar() {
  const scrollY = useScrollPosition();
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const scrolled = scrollY > 40;

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "nav-glass shadow-lg" : "bg-transparent"}`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="font-mono text-lg font-bold text-[#00D9FF] hover:text-[#FFB800] transition-colors duration-200 no-underline tracking-tight"
          >
            helloitsraaghav
          </Link>

          {/* Desktop links */}
          <ul className="hidden md:flex gap-8 list-none m-0 p-0 items-center">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.to;
              return (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className={`font-body text-sm font-medium transition-colors duration-200 relative group no-underline ${
                      isActive
                        ? "text-[#00D9FF]"
                        : "dark:text-[#94A3B8] text-gray-600 hover:text-[#00D9FF] dark:hover:text-[#00D9FF]"
                    }`}
                  >
                    {link.label}
                    <span className="absolute -bottom-1 left-0 h-px bg-[#00D9FF] transition-all duration-300 w-0 group-hover:w-full rounded-full" />
                  </Link>
                </li>
              );
            })}

            {/* Theme toggle */}
            <li>
              <button
                onClick={toggleTheme}
                aria-label="Toggle color theme"
                className="w-8 h-8 rounded-full flex items-center justify-center dark:text-[#94A3B8] text-gray-500 dark:hover:text-[#00D9FF] hover:text-[#00D9FF] transition-colors duration-200"
              >
                {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
              </button>
            </li>
          </ul>

          {/* Mobile hamburger */}
          <button
            className="md:hidden dark:text-[#94A3B8] text-gray-500 dark:hover:text-[#00D9FF] hover:text-[#00D9FF] transition-colors"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-40 dark:bg-navy-900/95 bg-[#F1F5F9]/95 backdrop-blur-md flex flex-col items-center justify-center gap-8 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.to}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
              >
                <Link
                  to={link.to}
                  onClick={() => setMenuOpen(false)}
                  className="font-mono text-2xl font-semibold dark:text-[#F8F9FA] text-gray-800 hover:text-[#00D9FF] transition-colors no-underline"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              onClick={() => { toggleTheme(); setMenuOpen(false); }}
              className="flex items-center gap-2 text-sm dark:text-[#94A3B8] text-gray-500 hover:text-[#00D9FF] transition-colors mt-4"
            >
              {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
              {theme === "dark" ? "Light mode" : "Dark mode"}
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
