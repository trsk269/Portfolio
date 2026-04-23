"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ delay: 0.2 });

      tl.to(".hero-heading", {
        y: 0,
        autoAlpha: 1,
        duration: 1.4,
        ease: "expo.out",
      }).to(
        ".hero-description",
        {
          y: 0,
          autoAlpha: 1,
          duration: 1.2,
          ease: "expo.out",
        },
        "-=1.0",
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
      <h1 className="hero-heading gsap-reveal text-[clamp(2.2rem,5vw,4rem)] font-extrabold leading-[1.15] tracking-tight max-w-3xl translate-y-8">
        Hey, It's TRSK. <br className="hidden sm:block" />
        Full stack Developer
      </h1>

      {/* Description */}
      <p className="hero-description gsap-reveal text-white/60 text-sm sm:text-base md:text-lg max-w-md sm:max-w-xl leading-[1.8] translate-y-5">
        I've been working as a full stack{" "}
        <strong className="text-white font-semibold">web developer</strong> over
        a year.
        <br />I am based in{" "}
        <strong className="text-white font-semibold">India</strong>.
      </p>
    </div>
  );
}
