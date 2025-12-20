"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Prevent scroll jumps by waiting for DOM to be ready
    const initLenis = () => {
      const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: "vertical",
        gestureOrientation: "vertical",
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 2,
        infinite: false,
        autoResize: true,
      });

      // Prevent scroll jumps on initialization
      let rafId: number;
      function raf(time: number) {
        lenis.raf(time);
        rafId = requestAnimationFrame(raf);
      }

      // Start after a small delay to ensure DOM is stable
      setTimeout(() => {
        rafId = requestAnimationFrame(raf);
      }, 100);

      return () => {
        cancelAnimationFrame(rafId);
        lenis.destroy();
      };
    };

    const cleanup = initLenis();
    return cleanup;
  }, []);

  return <>{children}</>;
}

