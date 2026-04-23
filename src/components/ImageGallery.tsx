"use client";

import React, { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, useAnimationControls, useMotionValue } from "framer-motion";

import C0 from "../app/CreativeImages/C0.png";
import C01 from "../app/CreativeImages/C1.png";
import C02 from "../app/CreativeImages/C2.png";
import C03 from "../app/CreativeImages/C3.png";
import C04 from "../app/CreativeImages/C4.png";
import C05 from "../app/CreativeImages/C5.png";
import C06 from "../app/CreativeImages/C6.png";
import C07 from "../app/CreativeImages/C7.png";
import C08 from "../app/CreativeImages/C8.png";
import C09 from "../app/CreativeImages/C9.png";
import C10 from "../app/CreativeImages/C10.png";
import C11 from "../app/CreativeImages/C11.png";

gsap.registerPlugin(ScrollTrigger);

export default function ImageGallery() {
  const container = useRef<HTMLElement>(null);
  const controls = useAnimationControls();
  const x = useMotionValue(0);
  const [isHovered, setIsHovered] = React.useState(false);
  const [isDragging, setIsDragging] = React.useState(false);

  // Creating an array of items for the marquee (duplicated for loop)
  const items = [
    { id: 0, img: C0, alt: "Creative Image 1" },
    { id: 1, img: C01, alt: "Creative Image 2" },
    { id: 2, img: C02, alt: "Creative Image 3" },
    { id: 3, img: C03, alt: "Creative Image 4" },
    { id: 4, img: C04, alt: "Creative Image 5" },
    { id: 5, img: C05, alt: "Creative Image 6" },
    { id: 6, img: C06, alt: "Creative Image 7" },
    { id: 7, img: C07, alt: "Creative Image 8" },
    { id: 8, img: C08, alt: "Creative Image 9" },
    { id: 9, img: C09, alt: "Creative Image 10" },
    { id: 10, img: C10, alt: "Creative Image 11" },
    { id: 11, img: C11, alt: "Creative Image 12" },
  ];

  const duplicatedItems = [...items, ...items, ...items];

  useGSAP(
    () => {
      // Reveal Header
      gsap.from(".gallery-header", {
        scrollTrigger: {
          trigger: ".gallery-header",
          start: "top 90%",
        },
        y: 30,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      // Reveal Marquee
      gsap.from(".gallery-marquee", {
        scrollTrigger: {
          trigger: ".gallery-marquee",
          start: "top 85%",
        },
        y: 40,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        delay: 0.2,
      });
    },
    { scope: container },
  );

  React.useEffect(() => {
    if (!isDragging && !isHovered) {
      controls.start({
        x: [x.get(), x.get() - 1000],
        transition: {
          duration: 35,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop",
        },
      });
    } else {
      controls.stop();
    }
  }, [isDragging, isHovered, controls, x]);

  return (
    <section
      ref={container}
      className="w-full py-20 overflow-hidden flex flex-col items-center border-t border-white/5 bg-[#050505]"
    >
      <div className="gallery-header w-full max-w-5xl px-4 text-center md:text-left mb-10 flex flex-col items-center md:items-start">
        <span className="text-xl md:text-2xl font-serif italic text-white/70">
          AI & Creativity
        </span>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mt-1">
          Image Generations
        </h2>
      </div>

      <div
        className="gallery-marquee relative w-full overflow-hidden flex py-4 cursor-grab active:cursor-grabbing"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Left and Right Fade Gradients */}
        <div className="absolute top-0 bottom-0 left-0 w-24 md:w-40 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-24 md:w-40 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none" />

        <motion.div
          drag="x"
          dragConstraints={{ left: -2000, right: 0 }}
          style={{ x }}
          animate={controls}
          onDragStart={() => setIsDragging(true)}
          onDragEnd={() => {
            setIsDragging(false);
            if (x.get() < -1000) {
              x.set(x.get() + 1000);
            } else if (x.get() > 0) {
              x.set(x.get() - 1000);
            }
          }}
          className="flex whitespace-nowrap"
        >
          {duplicatedItems.map((item, idx) => (
            <div
              key={`${item.id}-${idx}`}
              className="relative w-40 h-40 mx-3 rounded-md overflow-hidden border border-white/10 group cursor-pointer shadow-lg hover:border-[#CAFF00] transition-colors duration-300 flex-shrink-0 select-none"
            >
              <Image
                src={item.img}
                alt={item.alt}
                fill
                className="object-cover object-start group-hover:scale-110 transition-transform duration-700"
                draggable={false}
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
