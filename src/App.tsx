import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ThemeProvider } from "./context/ThemeContext";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { BackToTop } from "./components/BackToTop";
import { About } from "./pages/About";
import { ProjectPage } from "./pages/ProjectPage";
import { ContactPage } from "./pages/ContactPage";
import { NotFound } from "./pages/NotFound";

function Footer() {
  return (
    <footer className="py-8 px-6 dark:bg-navy-900 bg-[#F1F5F9] border-t dark:border-white/5 border-gray-200">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="font-mono text-xs dark:text-[#94A3B8] text-gray-400">
          © 2026 helloitsraaghav.
        </span>
        <div className="flex gap-6">
          <a href="https://github.com/helloitsraaghav" target="_blank" rel="noopener noreferrer" className="font-mono text-xs dark:text-[#94A3B8] text-gray-400 hover:text-[#00D9FF] no-underline transition-colors">GitHub</a>
          <a href="https://linkedin.com/in/helloitsraaghav" target="_blank" rel="noopener noreferrer" className="font-mono text-xs dark:text-[#94A3B8] text-gray-400 hover:text-[#00D9FF] no-underline transition-colors">LinkedIn</a>
          <a href="mailto:raaghavg2006@gmail.com" className="font-mono text-xs dark:text-[#94A3B8] text-gray-400 hover:text-[#00D9FF] no-underline transition-colors">Email</a>
        </div>
      </div>
    </footer>
  );
}

function HomePage() {
  return (
    <>
      <Hero />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
      >
        <Routes location={location}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<><About /><Footer /></>} />
          <Route path="/contact" element={<><ContactPage /><Footer /></>} />
          <Route path="/projects/:id" element={<><ProjectPage /><Footer /></>} />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

function AppInner() {
  return (
    <div className="min-h-screen font-body overflow-x-hidden">
      <Navbar />
      <main>
        <AnimatedRoutes />
      </main>
      <BackToTop />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <AppInner />
      </ThemeProvider>
    </BrowserRouter>
  );
}
