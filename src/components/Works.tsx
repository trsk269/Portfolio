"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import pic01 from "../app/PIC01.png";
import pic02 from "../app/PIC02.png";
import pic03 from "../app/PIC03.png";
import pic04 from "../app/PIC04.png";

gsap.registerPlugin(ScrollTrigger);

const portfolioItems = [
  {
    image: pic01,
    title: "MS Dhoni | Captain Cool Tribute",
    category: "Front-end Development, UI Design",
  },
  {
    image: pic02,
    title: "QRcraft",
    category: "React · qrcode.react · html2canvas",
  },
  {
    image: pic03,
    title: "Colosseum",
    category: "Branding, UI Design",
  },
  {
    image: pic04,
    title: "Shanghai Riders",
    category: "UX Design, Usability Test",
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

                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
              </div>

              {/* Text */}
              <h3 className="text-base sm:text-lg font-bold text-white mb-1">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm font-medium text-white/50">
                {item.category}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
