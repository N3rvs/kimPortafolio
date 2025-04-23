import { useState, useRef } from "react";
import {
  Sparkles,
  Palette,
  Camera,
  Send,
  GraduationCap,
  PenLine,
  MapPin,
  School,
  Wrench,
  Languages,
  X,
} from "lucide-react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";

export default function Bio() {
  const [showModal, setShowModal] = useState(false);
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_9idy4lb", // tu service ID
        "template_89n9bpi", // tu template ID
        formRef.current,
        "BsrdXd3k1FeFNg8X7" // tu public key
      )
      .then(() => {
        toast.success("¡Mensaje enviado correctamente!");
        e.target.reset();
        setShowModal(false);
      })
      .catch(() => {
        toast.error(" Ocurrió un error. Intenta de nuevo.");
      });
  };

  return (
    <section id="bio" className="text-white px-6 py-20 scroll-mt-24">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* HEADER */}
        <div className="space-y-6">
          <h3 className="text-5xl font-semibold text-purple-400">Bio</h3>
          <ul className="space-y-3 text-xxl md:text-lg">
            <li className="flex items-center gap-3">
              <MapPin className="text-purple-400 w-5 h-5" />
              <span>
                <strong>Based in:</strong> Ghent, Belgium & Madrid, Spain
              </span>
            </li>
            <li className="flex items-center gap-3">
              <School className="text-purple-400 w-5 h-5" />
              <span>
                <strong>Studies:</strong> Audiovisual Arts, Central University
                of Venezuela
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Wrench className="text-purple-400 w-5 h-5" />
              <span>
                <strong>Tools:</strong> Notion, HubSpot, Canva, Discord
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Languages className="text-purple-400 w-5 h-5" />
              <span>
                <strong>Languages:</strong> Spanish, English, Dutch
              </span>
            </li>
          </ul>
        </div>

        {/* TRAYECTORIA */}
        <div className="text-base md:text-lg leading-relaxed text-gray-300 space-y-4">
          <p>
            I started out in TV production back in Caracas, and since then, I’ve
            built a multidisciplinary path in storytelling, content creation,
            and project management. From producing photo shoots to building
            marketing strategies and visual identities, I bring empathy,
            curiosity, and clarity to everything I create.
          </p>
          <p className="text-white font-medium">
            Here’s a mix of what I’ve done (and love doing):
          </p>
        </div>

        {/* SKILLS */}
        <ul className="grid sm:grid-cols-2 gap-6 text-gray-200 text-base md:text-lg">
          <li className="flex items-start gap-3">
            <Sparkles className="text-yellow-400 w-5 h-5 mt-1" />
            <span>
              <strong>Creative Project Management:</strong> Coordinating
              timelines, teams, and tools to bring projects to life.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <Palette className="text-pink-400 w-5 h-5 mt-1" />
            <span>
              <strong>Branding:</strong> Visual & strategic identity — from
              moodboards to messaging.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <Camera className="text-blue-400 w-5 h-5 mt-1" />
            <span>
              <strong>Content Creation:</strong> Photo, video, copywriting for
              digital campaigns.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <Send className="text-rose-400 w-5 h-5 mt-1" />
            <span>
              <strong>Social Media:</strong> Planning, publishing, growing
              communities online.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <GraduationCap className="text-green-400 w-5 h-5 mt-1" />
            <span>
              <strong>Marketing Internships:</strong> Learning by doing — from
              analytics to storytelling.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <PenLine className="text-purple-400 w-5 h-5 mt-1" />
            <span>
              <strong>Copywriting:</strong> Writing fresh, intentional, and
              engaging content across platforms.
            </span>
          </li>
        </ul>

        {/* CTA */}
        <div className="text-center mt-10 text-lg text-purple-200">
          Want to collaborate?{" "}
          <button
            onClick={() => setShowModal(true)}
            className="underline hover:text-purple-100 transition"
          >
            Let’s talk ✉
          </button>
        </div>

        {/* MODAL */}
        {showModal && (
          <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-[#1a1a2e] p-6 rounded-xl max-w-md w-full relative shadow-2xl">
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-2 right-2 text-white hover:text-purple-300"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              <h4 className="text-xl font-semibold text-purple-300 mb-4">
                Let’s connect
              </h4>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="user_name"
                  placeholder="Your Name"
                  required
                  className="w-full p-3 rounded-md bg-[#0e0e1a] text-white border border-white/10 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <input
                  type="email"
                  name="user_email"
                  placeholder="Your Email"
                  required
                  className="w-full p-3 rounded-md bg-[#0e0e1a] text-white border border-white/10 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="4"
                  required
                  className="w-full p-3 rounded-md bg-[#0e0e1a] text-white border border-white/10 focus:outline-none focus:ring-2 focus:ring-purple-500"
                ></textarea>

                <button
                  type="submit"
                  className="w-full flex justify-center items-center gap-2 bg-purple-600 text-white px-5 py-3 rounded-md font-semibold hover:bg-purple-500 transition mt-2"
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
      <div className="flex justify-center gap-4 mt-6">
        <a
          href="/files/cv_kim_longueira_lopez_2025.pdf"
          download
          className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-semibold px-5 py-2 rounded-md shadow-lg transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4"
            />
          </svg>
          Download CV
        </a>
      </div>
    </section>
  );
}
