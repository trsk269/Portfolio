"use client";

import React, { useRef } from "react";
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
import { motion, useAnimationControls, useMotionValue } from "framer-motion";

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
  const controls = useAnimationControls();
  const x = useMotionValue(0);
  const [isHovered, setIsHovered] = React.useState(false);
  const [isDragging, setIsDragging] = React.useState(false);
  const [isMounted, setIsMounted] = React.useState(false);

  // Triple the skills to ensure seamless looping
  const duplicatedSkills = [...skills, ...skills, ...skills];

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  useGSAP(
    () => {
      gsap.to(".skills-header", {
        scrollTrigger: {
          trigger: ".skills-header",
          start: "top 90%",
        },
        y: 0,
        autoAlpha: 1,
        duration: 1,
        ease: "power3.out",
      });

      gsap.to(".skills-marquee", {
        scrollTrigger: {
          trigger: ".skills-marquee",
          start: "top 90%",
        },
        scaleX: 1,
        autoAlpha: 1,
        duration: 1.2,
        ease: "power2.out",
        delay: 0.2,
      });
    },
    { scope: container },
  );

  React.useEffect(() => {
    if (isMounted && !isDragging && !isHovered) {
      controls.start({
        x: [x.get(), x.get() - 1000],
        transition: {
          duration: 30,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop",
        },
      });
    } else {
      controls.stop();
    }
  }, [isDragging, isHovered, controls, x, isMounted]);

  return (
    <section
      ref={container}
      className="w-full py-12 sm:py-14 lg:py-16 overflow-hidden flex flex-col items-center"
    >
      {/* Header */}
      <div className="skills-header gsap-reveal w-full max-w-3xl px-4 sm:px-6 lg:px-8 mb-6 sm:mb-8 text-center translate-y-8">
        <span className="text-lg sm:text-xl md:text-2xl font-serif italic text-white/70 block">
          Superpowers
        </span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white mt-1">
          My Toolkit
        </h2>
      </div>

      {/* Marquee */}
      <div
        className="skills-marquee gsap-reveal relative w-full overflow-hidden flex bg-[#0a0a0a] py-6 sm:py-8 border-y border-white/5 cursor-grab active:cursor-grabbing scale-x-[0.95]"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Gradients */}
        <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-24 lg:w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-24 lg:w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

        <motion.div
          drag="x"
          dragConstraints={{ left: -2000, right: 0 }}
          style={{ x }}
          animate={controls}
          onDragStart={() => setIsDragging(true)}
          onDragEnd={() => {
            setIsDragging(false);
            // Reset position if we drag too far
            if (x.get() < -1000) {
              x.set(x.get() + 1000);
            } else if (x.get() > 0) {
              x.set(x.get() - 1000);
            }
          }}
          className="flex whitespace-nowrap"
        >
          {duplicatedSkills.map((skill, index) => (
            <div
              key={index}
              className="flex items-center gap-2 sm:gap-3 px-4 sm:px-5 lg:px-6 py-2.5 sm:py-3 mx-2 sm:mx-3 bg-[#161616] border border-white/10 rounded-lg text-white/80 hover:text-white hover:bg-[#1a1a1a] hover:border-white/20 transition-all cursor-default whitespace-nowrap select-none"
            >
              <div className="text-[#CAFF00] text-sm sm:text-base">
                {skill.icon}
              </div>
              <span className="font-semibold text-xs sm:text-sm tracking-wide">
                {skill.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
