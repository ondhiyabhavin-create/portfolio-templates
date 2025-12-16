"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useMotionValue } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";
import { ROLES, PERSONAL_INFO, TAGLINE } from "@/lib/constants";
import { textReveal } from "@/lib/animations";

export function MirrorHero() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const containerRef = useRef<HTMLElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // Calculate light angle based on cursor position
  const lightAngle = useTransform(
    [mouseX, mouseY],
    ([x, y]: number[]) => {
      if (!heroRef.current) return 180;
      const rect = heroRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const deltaX = x - centerX;
      const deltaY = y - centerY;
      return (Math.atan2(deltaY, deltaX) * 180) / Math.PI + 90;
    }
  );

  const lightX = useTransform(mouseX, (x) => {
    if (!heroRef.current) return '50%';
    const rect = heroRef.current.getBoundingClientRect();
    return `${((x - rect.left) / rect.width) * 100}%`;
  });

  const lightY = useTransform(mouseY, (y) => {
    if (!heroRef.current) return '0%';
    const rect = heroRef.current.getBoundingClientRect();
    return `${((y - rect.top) / rect.height) * 100}%`;
  });

  // Scroll-driven animations - NO idle motion
  const mirrorLight = useTransform(scrollYProgress, [0, 0.3], [0.2, 0.6]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);
  const contentScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.98]);
  const headlineBlur = useTransform(scrollYProgress, [0, 0.15], [0, 0]);

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden mirror-display"
    >
      {/* Black Mirror Background - Reacts to Scroll & Cursor */}
      <motion.div
        ref={heroRef}
        className="absolute inset-0 mirror-black"
        style={{
          opacity: mirrorLight,
        }}
      >
        {/* Cursor-Driven Light Reflection */}
        <motion.div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(circle 400px at ${lightX} ${lightY}, rgba(255, 255, 255, 0.12) 0%, transparent 60%)`,
            opacity: mirrorLight,
          }}
        />
        {/* Environmental Light Reflection - Scroll Driven */}
        <motion.div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(${lightAngle}deg, rgba(255, 255, 255, 0.08) 0%, transparent 50%)`,
            opacity: useTransform(mirrorLight, (v) => v * 0.6),
          }}
        />
      </motion.div>

      <motion.div 
        className="container mx-auto px-6 py-32 relative z-10"
        style={{ 
          opacity: contentOpacity,
          scale: contentScale,
          filter: `blur(${headlineBlur}px)`,
        }}
      >
        <div className="max-w-4xl mx-auto text-center">
          {/* AI Badge - Etched Mirror (No Glow) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-block mb-16"
          >
            <div className="ai-badge-mirror rounded-full px-6 py-2.5 flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-white/70" />
              <span className="text-xs font-medium text-white/80 tracking-wider uppercase">
                AI-Enhanced Portfolio
              </span>
            </div>
          </motion.div>

          {/* Main Headline - Sharp, No Animation on Load */}
          <motion.h1
            variants={textReveal}
            initial="hidden"
            animate="visible"
            className="text-6xl md:text-8xl font-light mb-8 leading-tight tracking-tight"
          >
            <span className="block mb-3 text-white/98 font-light">
              Hello, I'm
            </span>
            <span className="block text-7xl md:text-9xl font-light text-white">
              {PERSONAL_INFO.name.split(' ')[0]}
            </span>
            <span className="block text-4xl md:text-5xl mt-6 font-light text-white/75">
              Software Developer
            </span>
          </motion.h1>

          {/* Dynamic Subtitle */}
          <div className="h-20 mb-12 flex items-center justify-center">
            <AnimatedRole roles={ROLES} currentIndex={currentRoleIndex} />
          </div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl md:text-2xl mb-16 max-w-2xl mx-auto text-white/60 font-light leading-relaxed"
          >
            {TAGLINE}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.a
              href={PERSONAL_INFO.resume}
              download
              className="group relative px-10 py-4 mirror-edge rounded-full overflow-hidden mirror-hover-tilt"
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10 flex items-center gap-2 font-medium text-white/95">
                Download CV
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/3 to-transparent"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.5 }}
              />
            </motion.a>

            <motion.a
              href="#contact"
              className="group px-10 py-4 mirror-edge rounded-full font-medium text-white/95 mirror-hover-tilt"
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.98 }}
            >
              Get In Touch
            </motion.a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2"
          >
            <motion.a
              href="#about"
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowDown className="w-5 h-5 text-white/50" />
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

function AnimatedRole({ roles, currentIndex }: { roles: string[]; currentIndex: number }) {
  return (
    <div className="relative h-20 overflow-hidden">
      {roles.map((role, index) => (
        <motion.div
          key={role}
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: index === currentIndex ? 1 : 0,
            y: index === currentIndex ? 0 : 20,
          }}
          transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <span className="text-2xl md:text-3xl font-light text-white/70">
            {role}
          </span>
        </motion.div>
      ))}
    </div>
  );
}
