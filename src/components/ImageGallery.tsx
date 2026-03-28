import React from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import profilepic from "../app/profilepic.png";

export default function ImageGallery() {
  // Creating an array of 12 items for the marquee
  const items = Array.from({ length: 12 }).map((_, i) => ({
    id: i,
    img: profilepic,
    alt: `Image Generation ${i + 1}`,
  }));

  return (
    <section className="w-full py-20 overflow-hidden flex flex-col items-center border-t border-white/5 bg-[#050505]">
      <div className="w-full max-w-5xl px-4 text-center md:text-left mb-10 flex flex-col items-center md:items-start">
        <span className="text-xl md:text-2xl font-serif italic text-white/70">
          AI & Creativity
        </span>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mt-1">
          Image Generations
        </h2>
      </div>

      <div className="relative w-full overflow-hidden flex py-4">
        {/* Left and Right Fade Gradients */}
        <div className="absolute top-0 bottom-0 left-0 w-24 md:w-40 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-24 md:w-40 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none" />

        <Marquee
          speed={30}
          pauseOnHover={true}
          className="overflow-hidden"
          autoFill={true}
        >
          {items.map((item) => (
            <div
              key={item.id}
              className="relative w-40 h-20 mx-3 rounded-md overflow-hidden border border-white/10 group cursor-pointer shadow-lg hover:border-[#CAFF00] transition-colors duration-300"
            >
              <Image
                src={item.img}
                alt={item.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300" />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
