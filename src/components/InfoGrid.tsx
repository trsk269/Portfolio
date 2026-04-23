"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { ChevronDown, ChevronUp } from "lucide-react";
import profilepic from "../app/my-avatar.jpg";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function InfoGrid() {
  const [showDetails, setShowDetails] = useState(false);
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Reveal the whole container first
      gsap.to(container.current, {
        scrollTrigger: {
          trigger: container.current,
          start: "top 92%",
          toggleActions: "play none none none",
        },
        y: 0,
        autoAlpha: 1,
        duration: 1.5,
        ease: "expo.out",
      });

      // Stagger the info blocks
      gsap.to(".info-block", {
        scrollTrigger: {
          trigger: container.current,
          start: "top 85%",
        },
        y: 0,
        autoAlpha: 1,
        duration: 1.2,
        stagger: 0.2,
        ease: "expo.out",
        delay: 0.4,
      });
    },
    { scope: container },
  );

  return (
    <div
      ref={container}
      className="gsap-reveal w-full flex flex-col md:flex-row gap-0 items-stretch justify-center border border-white/10 my-0 md:mt-10 md:mb-20 rounded-2xl md:rounded-none overflow-hidden translate-y-12"
    >
      {/* sub01 — Profile Picture (Ordered first on mobile) */}
      <div className="info-block gsap-reveal order-1 md:order-2 h-full w-full flex flex-col gap-8 items-center justify-center py-8 md:py-12 px-8 border-b md:border-b-0 md:border-r border-white/10 bg-[#050505] md:bg-transparent translate-y-5">
        <div className="rounded-full overflow-hidden border-[4px] md:border-[5px] border-[#CAFF00] w-[200px] h-[200px] md:w-[280px] md:h-[280px] relative shadow-[0_0_30px_rgba(202,255,0,0.15)]">
          <Image
            src={profilepic}
            alt="Profile picture"
            fill
            className="object-cover"
            priority={true}
          />
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setShowDetails(!showDetails)}
          className="md:hidden flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-white/20 text-sm font-semibold hover:bg-white/5 transition-colors text-white"
        >
          {showDetails ? "Hide Information" : "View Information"}
          {showDetails ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </button>
      </div>

      {/* sub02 — Left Info (Ordered second on mobile) */}
      <div
        className={`info-block gsap-reveal order-2 md:order-1 w-full flex-col gap-8 justify-center text-center md:text-left md:border-r border-white/10 translate-y-5 ${showDetails ? "flex py-10 px-8 border-b" : "hidden md:flex md:py-10 md:px-8"}`}
      >
        <div className="flex flex-col gap-1">
          <span className="text-[10px] font-semibold uppercase tracking-widest text-[#CAFF00]">
            Lives In
          </span>
          <span className="text-[15px] xl:text-lg font-semibold leading-snug">
            Rajahmundry,
            <br className="hidden md:block" />
            Andhra Pradesh, India
          </span>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-[10px] font-semibold uppercase tracking-widest text-[#CAFF00]">
            Hobbies
          </span>
          <span className="text-[15px] xl:text-lg font-semibold leading-snug">
            Cricket, Traveling
          </span>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-[10px] font-semibold uppercase tracking-widest text-[#CAFF00]">
            Education
          </span>
          <span className="text-[14px] xl:text-[16px] font-semibold leading-snug">
            B.Tech in Computer
            <br />
            Science & Engineering (9.32)
            <br />
            Honours in Data Science (8.8)
          </span>
        </div>
      </div>

      {/* sub03 — Right Info (Ordered third on mobile) */}
      <div
        className={`info-block gsap-reveal order-3 md:order-3 w-full flex-col gap-8 justify-center text-center md:text-right translate-y-5 ${showDetails ? "flex py-10 px-8" : "hidden md:flex md:py-10 md:px-8"}`}
      >
        <div className="flex flex-col gap-1">
          <span className="text-[10px] font-semibold uppercase tracking-widest text-[#CAFF00]">
            Experience
          </span>
          <span className="text-[15px] xl:text-lg font-semibold leading-snug">
            Over 1 year of
            <br className="hidden md:block" />
            experience as a full-stack developer.
          </span>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-[10px] font-semibold uppercase tracking-widest text-[#CAFF00]">
            Projects Done
          </span>
          <span className="text-[15px] xl:text-lg font-semibold leading-snug">
            Crafted around 15 projects
            <br className="hidden md:block" />
            across various domains
          </span>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-[10px] font-semibold uppercase tracking-widest text-[#CAFF00]">
            Awards
          </span>
          <span className="text-[14px] xl:text-[15px] font-semibold leading-snug">
            3rd Place in Academics
            <br />
            1st Prize - Web-Wizards
            <br />
            Best Solution - Hackathon
          </span>
        </div>
      </div>
    </div>
  );
}
