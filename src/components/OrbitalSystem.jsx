import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function OrbitalSystem() {
  const [tooltip, setTooltip] = useState(null);

  // Ocultar mensaje después de 2.5s
  useEffect(() => {
    if (tooltip) {
      const timer = setTimeout(() => setTooltip(null), 2500);
      return () => clearTimeout(timer);
    }
  }, [tooltip]);

  return (
    <>
      {/* Texto flotante */}
      {tooltip && (
        <motion.div
          className="absolute top-[30%] left-[40%] bg-white/80 text-black px-3 py-1 rounded-full text-sm font-medium shadow-lg z-20"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
        >
          {tooltip}
        </motion.div>
      )}

      {/* Planeta central */}
      <motion.div
        className="absolute w-12 h-12 md:w-16 md:h-16 bg-yellow-300 rounded-full shadow-[0_0_40px_#fde68a] opacity-90"
        style={{ top: "56%", left: "32%" }}
        animate={{ y: [0, -10, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Órbita girando */}
      <motion.div
        className="absolute rounded-full border border-white/10"
        style={{ top: "40%", left: "20%", width: "160px", height: "160px" }}
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        {/* Planeta 1 - Creatividad */}
        <motion.div
          className="absolute w-3 h-3 md:w-4 md:h-4 bg-pink-400 rounded-full top-0 left-1/2 -translate-x-1/2 shadow-[0_0_8px_#f472b6]"
          whileTap={{ scale: 1.8, boxShadow: "0 0 20px #f472b6" }}
          transition={{ type: "spring", stiffness: 200, damping: 10 }}
          onTap={() => setTooltip("Creatividad")}
        />

        {/* Planeta 2 - Organización */}
        <motion.div
          className="absolute w-2.5 h-2.5 md:w-3 h-3 bg-blue-400 rounded-full bottom-0 left-1/4 -translate-x-1/2 shadow-[0_0_6px_#38bdf8]"
          whileTap={{ scale: 1.6, boxShadow: "0 0 16px #38bdf8" }}
          transition={{ type: "spring", stiffness: 200, damping: 10 }}
          onTap={() => setTooltip("Organización")}
        />

        {/* Planeta 3 - Liderazgo */}
        <motion.div
          className="absolute w-2 h-2 md:w-2.5 md:h-2.5 bg-purple-400 rounded-full top-1/2 left-0 -translate-y-1/2 shadow-[0_0_6px_#a78bfa]"
          whileTap={{ scale: 1.6, boxShadow: "0 0 16px #a78bfa" }}
          transition={{ type: "spring", stiffness: 200, damping: 10 }}
          onTap={() => setTooltip("Liderazgo")}
        />
      </motion.div>
    </>
  );
}
