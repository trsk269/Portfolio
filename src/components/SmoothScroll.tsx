"use client";

import { ReactNode, useEffect } from "react";
import ReactLenis from "lenis/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SmoothScroll({ children }: { children: ReactNode }) {
  useEffect(() => {
    // Lenis initialization is handled by the ReactLenis component,
    // but we can add global GSAP settings here if needed.
    gsap.defaults({ ease: "power3.out", duration: 1.2 });
  }, []);

  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>
      {children}
    </ReactLenis>
  );
}
