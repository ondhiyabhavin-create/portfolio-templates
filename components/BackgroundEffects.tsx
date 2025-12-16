"use client";

import { useEffect, useRef } from "react";

export function BackgroundEffects() {
  const meshRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !meshRef.current) return;

    // Dynamic import for GSAP to avoid SSR issues
    import("gsap").then(({ default: gsap }) => {
      import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
        gsap.registerPlugin(ScrollTrigger);

        // Animated gradient mesh
        gsap.to(meshRef.current, {
          backgroundPosition: "200% 200%",
          duration: 20,
          repeat: -1,
          ease: "none",
        });

        // Parallax effect on scroll
        gsap.to(meshRef.current, {
          y: -100,
          scrollTrigger: {
            trigger: meshRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      });
    });
  }, []);

  return (
    <div
      ref={meshRef}
      className="fixed inset-0 -z-10 pointer-events-none"
      style={{
        background: `
          radial-gradient(circle at 20% 50%, rgba(0, 200, 255, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 80% 80%, rgba(138, 43, 226, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 40% 20%, rgba(0, 100, 255, 0.1) 0%, transparent 50%)
        `,
        backgroundSize: "200% 200%",
      }}
    />
  );
}

