"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ delay: 0.2 });

      tl.from(".hero-heading", {
        y: 30,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
      }).from(
        ".hero-description",
        {
          y: 20,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.6",
      );
    },
    { scope: container },
  );

  return (
    <div
      ref={container}
      className="w-full flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 mt-8 sm:mt-10 lg:mt-12 mb-12 sm:mb-0 lg:mb-8 gap-5"
    >
      {/* Heading */}
      <h1 className="hero-heading text-[clamp(2.2rem,5vw,4rem)] font-extrabold leading-[1.15] tracking-tight max-w-3xl">
        Hey, It's TRSK. <br className="hidden sm:block" />
        Full stack Developer
      </h1>

      {/* Description */}
      <p className="hero-description text-white/60 text-sm sm:text-base md:text-lg max-w-md sm:max-w-xl leading-[1.8]">
        I've been working as a full stack{" "}
        <strong className="text-white font-semibold">web developer</strong> for
        1 year.
        <br />I am based in{" "}
        <strong className="text-white font-semibold">India</strong>.
      </p>
    </div>
  );
}
