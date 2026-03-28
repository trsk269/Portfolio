import React from "react";
import { Box, AppWindow, SquareTerminal } from "lucide-react";

const servicesData = [
  {
    title: "Product\nDesign",
    projects: "56 Projects",
    icon: <Box strokeWidth={1.5} size={28} />,
  },
  {
    title: "Front-End\nDevelopment",
    projects: "145 Projects",
    icon: <AppWindow strokeWidth={1.5} size={28} />,
  },
  {
    title: "Back-End\nDevelopment",
    projects: "78 Projects",
    icon: <SquareTerminal strokeWidth={1.5} size={28} />,
  },
];

export default function Services() {
  return (
    <div className="relative w-full py-32 flex items-center justify-center overflow-hidden border-t border-white/5">
      {/* Background glowing path */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none opacity-80">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1440 600"
          preserveAspectRatio="none"
          className="w-[120%] h-full max-h-[700px]"
        >
          {/* Multi-layered path for glow effect */}
          <path
            d="M-100 400 Q 300 20, 720 300 T 1540 50"
            fill="none"
            stroke="#CAFF00"
            strokeWidth="4"
          />
          <path
            d="M-100 400 Q 300 20, 720 300 T 1540 50"
            fill="none"
            stroke="#CAFF00"
            strokeWidth="12"
            opacity="0.3"
            className="blur-[12px]"
          />
          <path
            d="M-100 400 Q 300 20, 720 300 T 1540 50"
            fill="none"
            stroke="#CAFF00"
            strokeWidth="30"
            opacity="0.1"
            className="blur-[24px]"
          />
        </svg>
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col md:flex-row gap-6 justify-center items-stretch px-4">
        {servicesData.map((service, idx) => (
          <div
            key={idx}
            className="relative group bg-[#111111]/80 backdrop-blur-3xl rounded-none border border-white/5 p-10 flex flex-col items-start gap-16 flex-1 hover:bg-[#1a1a1a]/80 transition-all duration-300"
          >
            {/* Subtle glow spot behind card content to simulate the glowing intersection */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#CAFF00]/0 to-[#CAFF00]/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

            <div className="text-white">{service.icon}</div>

            <div className="mt-auto">
              <h3 className="text-2xl font-semibold text-white mb-2 whitespace-pre-line leading-tight">
                {service.title}
              </h3>
              <p className="text-[11px] text-white/50 font-medium tracking-wider uppercase">
                {service.projects}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
