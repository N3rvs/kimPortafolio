import { motion } from "framer-motion";
import { FaMagic } from "react-icons/fa";
import avatar from "@/assets/kim.jpg";

export default function About() {
  return (
    
    <section
      id="about"
      className="scroll-mt-10  text-white px-6 py-20 md:py-28"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center section-neblina">
        {/* Imagen */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="flex justify-center md:justify-end"
        >
          <div className="w-52 h-60 md:w-100 md:h-150 bg-white p-2 rounded-3xl shadow-xl flex items-center justify-center overflow-hidden ">
            <img
              src={avatar}
              alt="Kim avatar"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
        </motion.div>

        {/* Texto */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="text-center md:text-left space-y-6"
        >
          <h2 className="text-5xl md:text-4xl font-bold flex items-center justify-center md:justify-start gap-2">
            <FaMagic className="text-purple-400" />
            About Me
          </h2>

          <p className="text-xl md:text-xl leading-relaxed text-gray-300">
            Hi, I’m <strong className="text-white">Kim Longueira</strong> — a creative
            project manager, content creator, and visual storyteller. I’ve worked across
            Belgium and Spain, bringing structure to creative chaos and crafting meaningful
            content with soul.
          </p>

          <p className="text-lg md:text-xl leading-relaxed text-gray-300">
            I mix strategy with intuition, blending my background in audiovisual arts with a
            hands-on approach to digital marketing, branding, and social media. I believe
            creativity should feel like <span className="italic text-purple-300">magic</span> —
            but run on <span className="font-semibold text-white">good planning</span>.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
