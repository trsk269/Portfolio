"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import pic01 from "../app/PIC01.png";
import pic02 from "../app/PIC02.png";
import pic03 from "../app/PIC03.png";
import pic04 from "../app/PIC04.png";

gsap.registerPlugin(ScrollTrigger);

const portfolioItems = [
  {
    image: pic04,
    title: "Notes",
    category: "MERN Stack",
    link: "https://notes-frontend-virid.vercel.app/",
  },
  {
    image: pic01,
    title: "MS Dhoni | Captain Cool Tribute",
    category: "Front-end Development, UI Design",
    link: "https://msd-pink.vercel.app/",
  },
  {
    image: pic02,
    title: "QRcraft",
    category: "React · qrcode.react · html2canvas",
    link: "https://qr-snowy-zeta.vercel.app/",
  },
  {
    image: pic03,
    title: "Let's Eat",
    category: "HTML, CSS, and JavaScript",
    link: "https://trsk269.github.io/LetsEatRestro/",
  },
];

export default function Works() {
  const container = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      // Reveal Header
      gsap.from(".works-header", {
        scrollTrigger: {
          trigger: ".works-header",
          start: "top 90%",
        },
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      // Reveal Cards
      gsap.from(".portfolio-item", {
        scrollTrigger: {
          trigger: ".portfolio-grid",
          start: "top 85%",
        },
        y: 60,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: "power4.out",
      });

      // Reveal GitHub CTA
      gsap.from(".github-cta", {
        scrollTrigger: {
          trigger: ".github-cta",
          start: "top 95%",
        },
        y: 20,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });
    },
    { scope: container },
  );

  return (
    <section
      ref={container}
      className="relative w-full py-14 sm:py-16 lg:py-18 border-t border-white/5 overflow-hidden"
    >
      {/* Background Grid */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, white 1px, transparent 1px),
            linear-gradient(to bottom, white 1px, transparent 1px)
          `,
          backgroundSize: "4rem 4rem",
        }}
      />

      <div className="relative z-10 w-full max-w-[90%] mx-auto flex flex-col items-center">
        {/* Header (Centered like Skills) */}
        <div className="works-header w-full max-w-3xl px-4 sm:px-6 lg:px-8 mb-10 sm:mb-12 text-center">
          <span className="text-lg sm:text-xl md:text-2xl font-serif italic text-white/70 block">
            Works
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight text-white mt-1 leading-tight">
            My Beautiful <br className="hidden sm:block" />
            Works
          </h2>
        </div>

        {/* Grid */}
        <div className="portfolio-grid w-full max-w-5xl grid grid-cols-1 sm:grid-cols-2 gap-y-12 sm:gap-y-14 lg:gap-y-16 gap-x-6 sm:gap-x-10 lg:gap-x-16">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className="portfolio-item flex flex-col items-center text-center group"
            >
              {/* Image Container */}
              <div className="w-full max-w-[240px] sm:max-w-[260px] md:max-w-[280px] aspect-[3/4] relative overflow-hidden mb-5 sm:mb-6 bg-[#161616] border border-white/10 rounded-md">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 80vw, (max-width: 1024px) 40vw, 280px"
                />

                {/* Hover Overlay with Link */}
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                >
                  <div className="bg-[#CAFF00] text-black p-3 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <ExternalLink size={24} strokeWidth={2.5} />
                  </div>
                </a>
              </div>

              {/* Text */}
              <div className="flex flex-col items-center gap-1">
                <h3 className="text-base sm:text-lg font-bold text-white">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm font-medium text-white/50 mb-2">
                  {item.category}
                </p>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[#CAFF00] text-xs sm:text-sm font-bold hover:underline"
                >
                  Live Demo
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="github-cta mt-20 sm:mt-24 text-center">
          <p className="text-white/40 text-sm sm:text-base mb-6 font-medium uppercase tracking-widest">
            Want to see more?
          </p>
          <a
            href="https://github.com/trsk269"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white hover:bg-[#e0e0e0] text-black font-bold px-8 sm:px-10 py-3.5 sm:py-4 rounded-full transition-all group shadow-[0_0_40px_rgba(255,255,255,0.1)]"
          >
            <FaGithub size={20} />
            View My GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
