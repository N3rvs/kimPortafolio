import { motion } from "framer-motion";
import { FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";
import fondoD from "@/assets/fondo.png";
import Starfield from "./Starfield";
import OrbitalSystem from "./OrbitalSystem";
import { Link } from "react-router-dom";

// ...

<Link
  to="/about"
  className="inline-block mt-6 px-6 py-2 border border-white rounded-full hover:bg-white hover:text-black transition text-sm sm:text-base"
>
  About
</Link>;

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col md:flex-row">
      {/* LADO IZQUIERDO */}
      <div className="relative bg-neutral-900 text-white flex-1 flex flex-col items-center justify-center px-6 py-12 text-center overflow-hidden h-[60vh] md:h-auto">
        <Starfield />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.6 }}
          className="relative z-10 space-y-4"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Kim Longueira López
          </h1>
          <h2 className="text-base sm:text-lg md:text-xl font-light">
            Junior Project Manager and Content Creator
          </h2>

          <Link
            to="/about"
            className="inline-block mt-6 px-6 py-2 border border-white rounded-full hover:bg-white hover:text-black transition text-sm sm:text-base"
          >
            About
          </Link>

          <div className="mt-10 bg-neutral-800 px-6 py-4 rounded-xl shadow-md text-white/60 w-full max-w-xs mx-auto">
            <p className="text-sm mb-3">Click to add social profiles</p>
            <div className="flex justify-center gap-4 text-xl">
              <a
                href="https://www.linkedin.com/in/kim-longueira-l%C3%B3pez-0b6a2414b/"
                rel="noopener noreferrer"
                className="text-purple-300 hover:text-white transition-colors"
              >
                <FaLinkedin className="w-6 h-6" />
              </a>

              {/* <FaInstagram className="hover:text-white cursor-pointer" /> */}
              {/* <FaEnvelope className="hover:text-white cursor-pointer" /> */}
            </div>
          </div>
        </motion.div>
      </div>

      {/* LADO DERECHO */}
      <div className="flex-1 relative overflow-hidden h-[40vh] md:h-screen">
        <img
          src={fondoD}
          alt="Creative illustration"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <OrbitalSystem />
      </div>
    </section>
  );
}
