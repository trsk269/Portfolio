import React from "react";
import { FaGithub, FaLinkedinIn, FaTwitter, FaEnvelope } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="w-full bg-black py-16 md:py-24 border-t border-white/5 flex flex-col items-center">
      <div className="w-full max-w-5xl mx-auto px-6 flex flex-col items-center gap-10">
        {/* Logo Text */}
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white/90 uppercase">
          trsk<span className="text-[#CAFF00]">.</span>
        </h2>

        {/* Minimalist Social Icons */}
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/trsk269"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/40 hover:text-[#CAFF00] hover:-translate-y-1 transition-all duration-300"
            aria-label="GitHub"
          >
            <FaGithub size={26} />
          </a>
          <a
            href="https://linkedin.com/in/trskv5/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/40 hover:text-[#CAFF00] hover:-translate-y-1 transition-all duration-300"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn size={26} />
          </a>
          <a
            href="#"
            className="text-white/40 hover:text-[#CAFF00] hover:-translate-y-1 transition-all duration-300"
            aria-label="Twitter"
          >
            <FaTwitter size={26} />
          </a>
          <a
            href="mailto:t.r.s.kumar05v5@gmail.com"
            className="text-white/40 hover:text-[#CAFF00] hover:-translate-y-1 transition-all duration-300"
            aria-label="Email"
          >
            <FaEnvelope size={26} />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-white/30 text-sm font-medium tracking-wider mt-4 text-center">
          © {new Date().getFullYear()} Raghavendra Sai Kumar Thotakura.
          <br className="md:hidden" /> All rights reserved.
        </p>
      </div>
    </footer>
  );
}
