import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowUp, ArrowLeft } from "lucide-react";
import About from "@/components/About";
import Bio from "@/components/Bio";
import Projects from "@/components/Projects";

const fadeZigzag = [
  {
    initial: { opacity: 0, x: -50, y: 40 },
    whileInView: { opacity: 1, x: 0, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
  },
  {
    initial: { opacity: 0, x: 50, y: 40 },
    whileInView: { opacity: 1, x: 0, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
  },
];

export default function AboutPage() {
  return (
    <div className="relative bg-universe text-[--foreground] overflow-x-hidden space-y-24 py-12 z-10">
      {/* Botón volver al home */}
      <div className="px-6">
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-[--primary] rounded-full shadow-md hover:bg-[--primary]/90 transition ml-6 mt-2"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
      </div>

      {/* Sección About */}
      <motion.section {...fadeZigzag[0]} viewport={{ once: true }}>
        <About />
      </motion.section>

      {/* Neblina divisora */}
      <div className="h-24 bg-gradient-to-b from-transparent via-[#1a1a2e]/70 to-[#0e0e1a] opacity-80"></div>

      {/* Sección Bio */}
      <motion.section {...fadeZigzag[1]} viewport={{ once: true }}>
        <Bio />
      </motion.section>

      {/* Neblina divisora */}
      <div className="h-24 bg-gradient-to-b from-transparent via-[#1a1a2e]/70 to-[#0e0e1a] opacity-80"></div>

      {/* Sección Projects */}
      <motion.section {...fadeZigzag[0]} viewport={{ once: true }}>
        <Projects />
      </motion.section>

      {/* Botón flotante volver arriba */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 bg-[--primary] text-white p-3 rounded-full shadow-lg hover:opacity-90 transition-opacity z-50"
        aria-label="Back to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>

      {/* Footer */}
      <Footer />
    </div>
  );
}
