import { FaInstagram, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[--background] text-[--foreground] border-t border-white/10 mt-24">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Mensaje lindo */}
        <div className="text-center md:text-left space-y-1">
          <p className="text-lg font-medium text-purple-300">
            Made with ☕, 🎧 & 🌌
          </p>
          <p className="text-sm text-gray-400">
            Kim Longueira © {new Date().getFullYear()} — All rights reserved.
          </p>
        </div>

        {/* Redes sociales */}
        <div className="flex gap-5 text-xl text-purple-400">
          {/* <a
            href="mailto:kimlongueira@example.com"
            className="hover:text-purple-200 transition-colors"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://www.instagram.com/kimlongueira"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-200 transition-colors"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a> */}
          <a
            href="https://www.linkedin.com/in/kim-longueira-l%C3%B3pez-0b6a2414b/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-200 transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
}
