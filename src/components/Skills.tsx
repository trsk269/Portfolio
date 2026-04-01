"use client";

import React, { useRef } from "react";
import Marquee from "react-fast-marquee";
import {
  Atom,
  Server,
  Database,
  PenTool,
  ImagePlus,
  Video,
  BookOpen,
  Microscope,
  GitBranch,
  FileCode2,
  Triangle,
  ServerCog,
} from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const skills = [
  { name: "NextJS", icon: <Triangle size={18} /> },
  { name: "React Native", icon: <Atom size={18} /> },
  { name: "Node", icon: <Server size={18} /> },
  { name: "Express", icon: <ServerCog size={18} /> },
  { name: "MongoDB", icon: <Database size={18} /> },
  { name: "Figma", icon: <PenTool size={18} /> },
  { name: "Image generation", icon: <ImagePlus size={18} /> },
  { name: "Video generation", icon: <Video size={18} /> },
  { name: "Confluence", icon: <BookOpen size={18} /> },
  { name: "Research", icon: <Microscope size={18} /> },
  { name: "Git", icon: <GitBranch size={18} /> },
  { name: "JS & TS", icon: <FileCode2 size={18} /> },
];

export default function Skills() {
  const container = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".skills-header", {
        scrollTrigger: {
          trigger: ".skills-header",
          start: "top 90%",
        },
        y: 30,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(".skills-marquee", {
        scrollTrigger: {
          trigger: ".skills-marquee",
          start: "top 90%",
        },
        scaleX: 0.95,
        opacity: 0,
        duration: 1.2,
        ease: "power2.out",
        delay: 0.2,
      });
    },
    { scope: container },
  );

  return (
    <section
      ref={container}
      className="w-full py-12 sm:py-14 lg:py-16 overflow-hidden flex flex-col items-center"
    >
      {/* Header */}
      <div className="skills-header w-full max-w-3xl px-4 sm:px-6 lg:px-8 mb-6 sm:mb-8 text-center">
        <span className="text-lg sm:text-xl md:text-2xl font-serif italic text-white/70 block">
          Superpowers
        </span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white mt-1">
          My Toolkit
        </h2>
      </div>

      {/* Marquee */}
      <div className="skills-marquee relative w-full overflow-hidden flex bg-[#0a0a0a] py-6 sm:py-8 border-y border-white/5">
        {/* Gradients */}
        <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-24 lg:w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-24 lg:w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

        <Marquee
          speed={35}
          pauseOnHover={true}
          className="overflow-hidden"
          autoFill={true}
        >
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex items-center gap-2 sm:gap-3 px-4 sm:px-5 lg:px-6 py-2.5 sm:py-3 mx-2 sm:mx-3 bg-[#161616] border border-white/10 rounded-lg text-white/80 hover:text-white hover:bg-[#1a1a1a] hover:border-white/20 transition-all cursor-default whitespace-nowrap"
            >
              <div className="text-[#CAFF00] text-sm sm:text-base">
                {skill.icon}
              </div>
              <span className="font-semibold text-xs sm:text-sm tracking-wide">
                {skill.name}
              </span>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
