"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Trophy,
  Award,
  Code,
  Palette,
  Sparkles,
  Mic,
  Activity,
} from "lucide-react";
import profilepic from "../app/profilepic.png";

const data = [
  {
    id: 1,
    title: "Academics\n3rd Place",
    fullDesc: "Got 3rd place in academics for the 2024-25 academic year.",
    icon: <Trophy size={32} strokeWidth={1.5} />,
    theme: "bg-[#CAFF00] text-black",
    size: "w-48 h-48 md:w-56 md:h-56",
    img: profilepic,
  },
  {
    id: 2,
    title: "Best\nTemplate",
    fullDesc:
      "Awarded 1st prize for Best Template at the Web-Wizards contest, showcasing landing page expertise.",
    icon: <Award size={28} strokeWidth={1.5} />,
    theme: "bg-white text-black",
    size: "w-56 h-56 md:w-64 md:h-64",
    img: profilepic,
  },
  {
    id: 3,
    title: "Impactful\nSolution",
    fullDesc:
      "Best Impactful Solution in a national hackathon using MERN, Web3, Blockchain, and Solidity.",
    icon: <Code size={32} strokeWidth={1.5} />,
    theme:
      "bg-transparent border-[1.5px] border-white/30 text-white backdrop-blur-md",
    size: "w-60 h-60 md:w-72 md:h-72",
    img: profilepic,
  },
  {
    id: 4,
    title: "PurpleLane\nUI/UX",
    fullDesc:
      "Attended a UI/UX workshop by PurpleLane, gaining insights into beautiful interfaces.",
    icon: <Palette size={28} strokeWidth={1.5} />,
    theme: "bg-[#111111] text-white border border-white/10",
    size: "w-48 h-48 md:w-56 md:h-56",
    img: profilepic,
  },
  {
    id: 5,
    title: "College\nCricket",
    fullDesc: "Participated in internal college cricket tournaments.",
    icon: <Activity size={24} strokeWidth={1.5} />,
    theme: "bg-[#CAFF00] text-black",
    size: "w-40 h-40 md:w-48 md:h-48",
    img: profilepic,
  },
  {
    id: 6,
    title: "College\nHackathons",
    fullDesc:
      "Participated in college hackathons and workshops, enhancing collaboration skills.",
    icon: <Sparkles size={28} strokeWidth={1.5} />,
    theme: "bg-white text-black",
    size: "w-52 h-52 md:w-60 md:h-60",
    img: profilepic,
  },
];

export default function Achievements() {
  const [hoveredNode, setHoveredNode] = useState<number | null>(null);

  return (
    <section className="relative w-full py-24 bg-black overflow-hidden border-t border-white/5">
      <div className="w-full max-w-[90%] mx-auto flex flex-col items-center gap-10 md:gap-16 relative z-10">
        {/* Top Header */}
        <div className="w-full flex flex-col items-center text-center">
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter leading-[1.1] text-white">
            <span className="text-[#CAFF00]">Achievements</span> &<br />
            Participations
          </h2>
          <p className="mt-8 text-white/50 max-w-lg mx-auto font-medium leading-relaxed">
            Hover over the bubbles below to uncover the details of my proudest
            milestones and continuous learning journey.
          </p>
        </div>

        {/* Centered Overlapping Bubbles Cluster */}
        {/* The tightly bound look is achieved by negative margins pulling them into a "molecular" shape */}
        <div className="w-full max-w-5xl flex flex-wrap justify-center items-center pt-8 md:pl-8">
          {data.map((item) => {
            const isHovered = hoveredNode === item.id;

            return (
              <div
                key={item.id}
                onMouseEnter={() => setHoveredNode(item.id)}
                onMouseLeave={() => setHoveredNode(null)}
                className={`
                  relative rounded-full flex flex-col items-center justify-center text-center cursor-pointer 
                  transition-all duration-500 ease-out group overflow-hidden shadow-xl
                  ${item.theme} ${item.size}
                  hover:z-50 hover:scale-[1.05] hover:shadow-[0_0_30px_rgba(202,255,0,0.4)]
                  flex-shrink-0 -ml-6 -mt-6 md:-ml-10 md:-mt-10
                `}
              >
                {/* Background Image Reveal */}
                <div
                  className={`absolute inset-0 transition-opacity duration-700 z-0 ${
                    isHovered ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                  {/* Heavy dark overlay so white font remains readable */}
                  <div className="absolute inset-0 bg-black/80 backdrop-blur-[2px]" />
                </div>

                {/* Default State: Icon & Short Title (Fades out when hovered) */}
                <div
                  className={`absolute inset-0 z-10 flex flex-col items-center justify-center p-4 transition-all duration-500 ease-in-out ${
                    isHovered
                      ? "opacity-0 scale-90 pointer-events-none"
                      : "opacity-100 scale-100"
                  }`}
                >
                  <div className="mb-3">{item.icon}</div>
                  <span className="font-bold uppercase tracking-tight leading-tight text-sm md:text-base whitespace-pre-line">
                    {item.title}
                  </span>
                </div>

                {/* Hover State: Full Description Only (Fades in over image) */}
                <div
                  className={`absolute inset-0 z-20 flex flex-col items-center justify-center px-6 md:px-8 transition-all duration-500 ease-in-out ${
                    isHovered
                      ? "opacity-100 scale-100 delay-100"
                      : "opacity-0 scale-110 pointer-events-none"
                  }`}
                >
                  <p className="text-white text-xs md:text-sm font-semibold leading-relaxed line-clamp-4 shadow-black drop-shadow-lg">
                    {item.fullDesc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}