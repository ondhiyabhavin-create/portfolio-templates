"use client";

import { ReactNode } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef, useState } from "react";

interface CursorMirrorSurfaceProps {
  children: ReactNode;
  variant?: "black" | "frosted" | "edge";
  className?: string;
  scrollTarget?: React.RefObject<HTMLElement | null>;
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
}

export function CursorMirrorSurface({ 
  children, 
  variant = "black", 
  className = "",
  scrollTarget,
  mouseX,
  mouseY
}: CursorMirrorSurfaceProps) {
  const ref = useRef<HTMLDivElement>(null);
  const targetRef = scrollTarget || ref;
  const [isHovered, setIsHovered] = useState(false);
  
  const { scrollYProgress } = useScroll({
    target: targetRef.current ? targetRef : undefined,
    offset: ["start end", "end start"]
  });

  // Light intensity tied to scroll position
  const lightIntensity = useTransform(scrollYProgress, [0, 0.5, 1], [0.2, 0.6, 0.2]);
  
  // Calculate light angle based on mouse position relative to element
  const lightAngle = useTransform(
    [mouseX, mouseY],
    ([x, y]: number[]) => {
      if (!ref.current) return 180;
      const rect = ref.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const deltaX = x - centerX;
      const deltaY = y - centerY;
      return (Math.atan2(deltaY, deltaX) * 180) / Math.PI + 90;
    }
  );

  // Light position based on mouse
  const lightX = useTransform(mouseX, (x) => {
    if (!ref.current) return '50%';
    const rect = ref.current.getBoundingClientRect();
    const percent = ((x - rect.left) / rect.width) * 100;
    return `${Math.max(0, Math.min(100, percent))}%`;
  });

  const lightY = useTransform(mouseY, (y) => {
    if (!ref.current) return '0%';
    const rect = ref.current.getBoundingClientRect();
    const percent = ((y - rect.top) / rect.height) * 100;
    return `${Math.max(0, Math.min(100, percent))}%`;
  });

  const variantClass = {
    black: "mirror-black",
    frosted: "mirror-frosted",
    edge: "mirror-edge"
  }[variant];

  return (
    <motion.div
      ref={ref}
      className={`mirror-surface ${variantClass} ${className}`}
      style={{
        "--light-intensity": lightIntensity,
      } as React.CSSProperties}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Cursor-driven radial light */}
      <motion.div
        className="mirror-light-active absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle 300px at ${lightX} ${lightY}, rgba(255, 255, 255, 0.15) 0%, transparent 70%)`,
          opacity: isHovered ? lightIntensity : useTransform(lightIntensity, (v) => v * 0.5),
        }}
      />
      {/* Cursor-driven directional light */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `linear-gradient(${lightAngle}deg, rgba(255, 255, 255, 0.1) 0%, transparent 50%)`,
          opacity: isHovered ? lightIntensity : useTransform(lightIntensity, (v) => v * 0.3),
        }}
      />
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
}

