"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";
import { ROLES, PERSONAL_INFO, TAGLINE } from "@/lib/constants";
import { fadeInUp, textReveal } from "@/lib/animations";
import { useTemplate } from "@/context/TemplateContext";

export function Hero() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const { currentTemplate } = useTemplate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const getBackgroundStyle = () => {
    if (currentTemplate === "ai-template-dark" || currentTemplate === "ai-template-light") {
      return {
        background: "oklch(0.05 0 0)",
      };
    }
    return {
      background: "oklch(0.05 0 0)",
    };
  };

  const getBackgroundOverlay = () => {
    if (currentTemplate === "ai-template-dark" || currentTemplate === "ai-template-light") {
      return "bg-gradient-to-br from-cyan-900/10 via-purple-900/10 to-transparent";
    }
    return "bg-gradient-to-br from-cyan-900/10 via-purple-900/10 to-transparent";
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={getBackgroundStyle()}
    >
      
      {/* Animated Gradient Background */}
      <div className={`absolute inset-0 ${getBackgroundOverlay()}`} />
      
      {/* Grid Pattern for AI Template */}
      {(currentTemplate === "ai-template-dark" || currentTemplate === "ai-template-light") && (
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `linear-gradient(rgba(0, 200, 255, 0.1) 1px, transparent 1px),
                          linear-gradient(90deg, rgba(0, 200, 255, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      )}
      
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20" />

      <div className="container mx-auto px-6 py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Sparkle Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0, rotate: -180 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
            className="inline-block mb-8"
          >
            <Sparkles className={`w-16 h-16 drop-shadow-lg animate-float ${
              (currentTemplate === "ai-template-dark" || currentTemplate === "ai-template-light")? "text-cyan-400" : "text-white"
            }`} />
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            variants={textReveal}
            initial="hidden"
            animate="visible"
            className="text-6xl md:text-8xl lg:text-9xl font-black mb-6 leading-tight tracking-tight"
          >
            <span className={`block mb-2 drop-shadow-2xl ${
              (currentTemplate === "ai-template-dark" || currentTemplate === "ai-template-light")
                ? "text-white neon-glow" 
                : currentTemplate === "vibrant-animated"
                ? "text-white neon-glow"
                : "text-white"
            }`}>
              Hello, I'm
            </span>
            <span className={`block text-7xl md:text-8xl lg:text-9xl font-black drop-shadow-2xl ${
              (currentTemplate === "ai-template-dark" || currentTemplate === "ai-template-light")? "gradient-text" :
              "gradient-text"
            }`}>
              {PERSONAL_INFO.name.split(' ')[0]}
            </span>
            <span className={`block text-4xl md:text-5xl mt-4 font-bold ${
              (currentTemplate === "ai-template-dark" || currentTemplate === "ai-template-light")? "text-white/90" : "text-white/90"
            }`}>
              Software Developer
            </span>
          </motion.h1>

          {/* Dynamic Subtitle */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="h-20 mb-8 flex items-center justify-center"
          >
            <AnimatedRole roles={ROLES} currentIndex={currentRoleIndex} template={currentTemplate} />
          </motion.div>

          {/* Description */}
          <motion.p
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className={`text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed drop-shadow-lg ${
              (currentTemplate === "ai-template-dark" || currentTemplate === "ai-template-light")? "text-white/80" : "text-white/90"
            }`}
          >
            {TAGLINE}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <motion.a
              href={PERSONAL_INFO.resume}
              download
              className={`group relative px-10 py-5 text-white font-bold rounded-full overflow-hidden shadow-2xl hover-lift ${
                (currentTemplate === "ai-template-dark" || currentTemplate === "ai-template-light")
                  ? "bg-gradient-to-r from-cyan-500 to-purple-600"
                  : "bg-gradient-to-r from-cyan-500 to-purple-600"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center gap-2">
                Download CV
              </span>
              <motion.div
                className={`absolute inset-0 shimmer ${
                  (currentTemplate === "ai-template-dark" || currentTemplate === "ai-template-light")
                    ? "bg-gradient-to-r from-purple-600 to-cyan-500"
                    : "bg-gradient-to-r from-purple-600 to-cyan-500"
                }`}
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>

            <motion.a
              href="#contact"
              className="group px-10 py-5 glass-strong border-2 border-white/30 text-white font-bold rounded-full hover:border-white/60 transition-all hover-lift"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <motion.a
              href="#about"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ArrowDown className={`w-8 h-8 drop-shadow-lg ${
                (currentTemplate === "ai-template-dark" || currentTemplate === "ai-template-light")? "text-cyan-400" : "text-white"
              }`} />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function AnimatedRole({ roles, currentIndex, template }: { roles: string[]; currentIndex: number; template: string }) {
  return (
    <div className="relative h-20 overflow-hidden">
      {roles.map((role, index) => (
        <motion.div
          key={role}
          initial={{ opacity: 0, y: 50, rotateX: -90 }}
          animate={{
            opacity: index === currentIndex ? 1 : 0,
            y: index === currentIndex ? 0 : 50,
            rotateX: index === currentIndex ? 0 : -90,
          }}
          transition={{ duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <span className={`text-2xl md:text-3xl font-bold drop-shadow-lg ${
            (template === "ai-template-dark" || template === "ai-template-light") ? "text-cyan-400" : "text-cyan-400"
          }`}>
            {role}
          </span>
        </motion.div>
      ))}
    </div>
  );
}
