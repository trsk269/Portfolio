import React from "react";
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
  return (
    <section className="w-full py-16 overflow-hidden flex flex-col items-center">
      <div className="w-full max-w-5xl px-4 text-left mb-8 flex flex-col items-center">
        <span className="text-xl md:text-2xl font-serif italic text-white/70">
          Superpowers
        </span>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mt-1">
          My Toolkit
        </h2>
      </div>

      <div className="relative w-full overflow-hidden flex bg-[#0a0a0a] py-8 border-y border-white/5">
        {/* Left and Right Fade Gradients for a polished look */}
        <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

        <Marquee
          speed={40}
          pauseOnHover={true}
          className="overflow-hidden"
          autoFill={true}
        >
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex items-center gap-3 px-6 py-3 mx-3 bg-[#161616] border border-white/10 rounded-lg text-white/80 hover:text-white hover:bg-[#1a1a1a] hover:border-white/20 transition-all cursor-default"
            >
              <div className="text-[#CAFF00]">{skill.icon}</div>
              <span className="font-semibold text-sm tracking-wide">
                {skill.name}
              </span>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
