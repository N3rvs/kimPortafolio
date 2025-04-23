import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { ArrowLeft, ArrowRight, X } from "lucide-react";

const projects = [
  {
    title: "Mandela",
    role: "Video Producer & Editor",
    video: "/videos/MANDELAMEX.mp4",
    description: 'The Big History "Nelson Mandela"',
  },
  {
    title: "WW1",
    role: "Creative Direction & Storyboarding ",
    video: "/videos/WW1GENERICAversnueva.mp4",
    description: "WW1",
  },
  // {
  //   title: "Meet the Lenovo InSight 360",
  //   role: "Production & Motion Graphics",
  //   video: "/videos/MeetthelenovoInSight360.mp4",
  //   description: "Produced",
  // },
  {
    title: "MR GOOD WIN PRO4 MEX",
    role: "Production & Motion Graphics",
    video: "/videos/MRGOODWINPRO4MEX.mp4",
    description: "Produced",
  },
  {
    title: "TEASER ATAQUES AEREOS",
    role: "Production & Motion Graphics",
    video: "/videos/TEASERATAQUESAEREOS.mp4",
    description: "Produced",
  },
];

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeVideo, setActiveVideo] = useState(null);
  const videoRef = useRef(null);

  const next = () =>
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  const prev = () =>
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!activeVideo) next();
    }, 4000);
    return () => clearInterval(interval);
  }, [activeVideo]);

  useEffect(() => {
    if (videoRef.current && !activeVideo) {
      videoRef.current.load();
      videoRef.current.play();
    }
  }, [currentIndex, activeVideo]);

  const project = projects[currentIndex];

  const getActiveProject = () =>
    projects.find((p) => p.video === activeVideo);

  const getActiveIndex = () =>
    projects.findIndex((p) => p.video === activeVideo);

  const navigateModal = (dir) => {
    const current = getActiveIndex();
    const nextIndex =
      dir === "next"
        ? (current + 1) % projects.length
        : (current - 1 + projects.length) % projects.length;
    setActiveVideo(projects[nextIndex].video);
  };

  return (
    <motion.section
      id="projects"
      className="bg-[--background] text-white px-6 py-24 md:py-32 scroll-mt-24"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      viewport={{ once: true }}
    >
      <div className="max-w-5xl mx-auto space-y-12">
        <h2 className="text-4xl md:text-5xl font-bold text-purple-400 text-center">
          Projects
        </h2>

        {/* CARD visible solo sin modal */}
        {!activeVideo && (
          <div className="relative flex items-center justify-center">
            <div
              className="w-full md:w-[900px] rounded-2xl overflow-hidden bg-black shadow-xl cursor-pointer group"
              onClick={() => setActiveVideo(project.video)}
            >
              <video
                ref={videoRef}
                src={project.video}
                muted
                autoPlay
                playsInline
                className="w-full h-[300px] md:h-[400px] object-cover group-hover:brightness-90 transition duration-300"
              />
              <div className="p-6 space-y-1">
                <h3 className="text-white text-2xl font-bold">{project.title}</h3>
                <p className="text-purple-400 text-sm">{project.role}</p>
                <p className="text-gray-300 text-sm">{project.description}</p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* MODAL con navegación y flechas */}
      {activeVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-80 backdrop-blur-sm z-50 flex items-center justify-center p-6">
          <div className="relative max-w-5xl w-full bg-[#1a1a2e] rounded-xl overflow-hidden shadow-lg">
            {/* Cerrar */}
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute top-2 right-2 bg-white/10 hover:bg-white/20 p-2 rounded-full text-white z-10"
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Flechas modal */}
            <button
              onClick={() => navigateModal("prev")}
              className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 p-2 rounded-full text-white z-10"
            >
              <ArrowLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => navigateModal("next")}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 p-2 rounded-full text-white z-10"
            >
              <ArrowRight className="w-6 h-6" />
            </button>

            <div className="grid md:grid-cols-2 gap-0">
              <video
                src={activeVideo}
                autoPlay
                controls
                className="w-full h-full object-cover max-h-[60vh] md:max-h-none"
              />
              <div className="p-6 space-y-4 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-white">
                  {getActiveProject()?.title}
                </h3>
                <p className="text-purple-400 font-medium text-sm">
                  {getActiveProject()?.role}
                </p>
                <p className="text-gray-300 text-sm">
                  {getActiveProject()?.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </motion.section>
  );
}
