"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    id: 1,
    role: "Full Stack Developer",
    company: "Memoa (US-based Startup)",
    date: "Jan 2025 — Present",
    points: [
      "Spearheaded the development of core scalable features, including complex gamified streak mechanisms.",
      "Maintained strict performance and clean code standards across both frontend and backend architectures.",
    ],
    tech: [
      "React",
      "React Native",
      "Next.js",
      "Node.js",
      "MongoDB",
      "Tailwind",
      "Redux",
      "Git",
    ],
  },
  {
    id: 2,
    role: "AI-ML-DS Intern",
    company: "Blackbucks Engineers (Remote)",
    date: "Jul 2024",
    points: [
      "Engineered an end-to-end weather prediction model achieving 82% accuracy utilizing Naive Bayes algorithms.",
      "Elevated data analysis and evaluation pipelines leveraging Python (sklearn, NumPy, Pandas, Matplotlib).",
    ],
    tech: ["Python", "scikit-learn", "Pandas", "NumPy"],
  },
  {
    id: 3,
    role: "Java Developer Intern",
    company: "Henotic Technology",
    date: "Jul 2023",
    points: [
      "Developed responsive interactive desktop applications leveraging robust Java Swing architectures.",
      "Built a functional 2D game simulation within a collaborative, fast-paced team environment.",
    ],
    tech: ["Java", "Swing", "OOP", "Teamwork"],
  },
];

export default function Experience() {
  const container = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      // Reveal Header
      gsap.from(".exp-header", {
        scrollTrigger: {
          trigger: ".exp-header",
          start: "top 90%",
        },
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      // Reveal Timeline Items
      const items = gsap.utils.toArray(".exp-item");
      items.forEach((item: any) => {
        gsap.from(item, {
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
          },
          x: item.classList.contains("md:flex-row-reverse") ? 40 : -40,
          opacity: 0,
          duration: 1,
          ease: "power2.out",
        });
      });
    },
    { scope: container },
  );

  return (
    <section
      ref={container}
      className="relative w-full py-14 sm:py-16 lg:py-18 bg-black overflow-hidden border-t border-white/5"
    >
      {/* Glow */}
      <div className="absolute top-0 right-1/4 w-[300px] sm:w-[400px] lg:w-[500px] h-[300px] sm:h-[400px] lg:h-[500px] bg-[#CAFF00]/5 rounded-full blur-[120px] sm:blur-[140px] lg:blur-[150px] pointer-events-none" />

      <div className="w-full max-w-[90%] mx-auto flex flex-col items-center gap-12 sm:gap-14 lg:gap-16 relative z-10">
        {/* Header */}
        <div className="exp-header w-full max-w-5xl mb-10 sm:mb-12 lg:mb-16 flex flex-col items-center md:items-start text-center md:text-left gap-2 sm:gap-3 md:gap-4">
          <span className="text-lg sm:text-xl md:text-2xl font-serif italic text-white/70">
            Career
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight text-white leading-tight">
            My Professional
            <br />
            Experience
          </h2>
        </div>

        {/* Timeline */}
        <div className="w-full max-w-4xl flex flex-col gap-10 sm:gap-12 relative">
          {/* Timeline Line (desktop only) */}
          <div className="absolute left-1/2 -translate-x-1/2 top-2 bottom-2 w-[1px] bg-white/10 hidden md:block" />

          {experiences.map((exp, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={exp.id}
                className={`exp-item relative flex flex-col md:flex-row justify-between items-start md:items-center w-full group ${
                  isEven ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline Dot (desktop only) */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#161616] border-[3px] border-[#CAFF00]/50 group-hover:border-[#CAFF00] group-hover:shadow-[0_0_15px_rgba(202,255,0,0.5)] transition-all duration-500 z-10" />

                {/* Content */}
                <div className="w-full md:w-[45%] flex flex-col gap-3 sm:gap-4 p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl bg-[#111111] border border-white/5 group-hover:bg-[#161616] group-hover:border-white/10 transition-colors duration-500">
                  {/* Title */}
                  <div className="flex flex-col gap-1">
                    <span className="text-[#CAFF00] text-xs sm:text-sm font-mono tracking-widest uppercase mb-1 sm:mb-2">
                      {exp.date}
                    </span>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold tracking-tight text-white">
                      {exp.role}
                    </h3>
                    <p className="text-white/50 text-sm sm:text-base font-medium">
                      {exp.company}
                    </p>
                  </div>

                  {/* Points */}
                  <ul className="flex flex-col gap-2 sm:gap-3 mt-2">
                    {exp.points.map((point, i) => (
                      <li
                        key={i}
                        className="text-sm sm:text-base text-white/70 leading-relaxed flex items-start gap-2 sm:gap-3"
                      >
                        <span className="text-[#CAFF00] mt-[5px]">▹</span>
                        <span className="flex-1">{point}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech */}
                  <div className="flex flex-wrap gap-2 mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-white/5">
                    {exp.tech.map((t, i) => (
                      <span
                        key={i}
                        className="px-2.5 sm:px-3 py-1 text-[10px] sm:text-xs font-semibold rounded-full bg-white/5 text-white/60 group-hover:bg-white/10 group-hover:text-white transition-colors duration-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
