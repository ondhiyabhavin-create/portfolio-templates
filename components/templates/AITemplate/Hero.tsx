"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";
import { ROLES, PERSONAL_INFO, TAGLINE } from "@/lib/constants";
import { fadeInUp, textReveal } from "@/lib/animations";
import { useTemplate } from "@/context/TemplateContext";

export function AIHero() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const { currentTemplate } = useTemplate();
  const isBwMode = currentTemplate === "ai-template-light";

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className={`relative min-h-screen flex items-center justify-center overflow-hidden ${
        isBwMode ? 'bg-white' : 'bg-[oklch(0.05_0_0)]'
      }`}
    >
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-[oklch(0.7_0.2_200)]/10 via-[oklch(0.65_0.25_300)]/5 to-transparent animate-gradient ai-bg-gradient" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,oklch(0.7_0.2_200)/20%,transparent_70%)] ai-radial-gradient" />
        
        {/* Subtle Grid Pattern - Always Visible */}
        <div 
          className="absolute inset-0 opacity-[0.12] ai-grid-pattern"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 212, 255, 0.4) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 212, 255, 0.4) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="container mx-auto px-6 py-32 relative z-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Sparkle Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block mb-8"
          >
            <Sparkles className="w-12 h-12 gradient-text animate-glow" />
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            variants={textReveal}
            initial="hidden"
            animate="visible"
            className="text-6xl md:text-8xl font-bold mb-6 leading-tight"
          >
            <span className={`block ${isBwMode ? '' : 'text-white'}`}>
              {isBwMode ? (
                <>
                  <span className="gradient-text">Hello, I'm</span> <span className="gradient-text">{PERSONAL_INFO.name.split(' ')[0]}</span>
                </>
              ) : (
                <>
                  Hello, I'm <span className="gradient-text">{PERSONAL_INFO.name.split(' ')[0]}</span>
                </>
              )}
            </span>
            <span className="block gradient-text">
              Software Developer
            </span>
          </motion.h1>

          {/* Dynamic Subtitle */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="h-16 mb-8 flex items-center justify-center"
          >
            <AnimatedRole roles={ROLES} currentIndex={currentRoleIndex} />
          </motion.div>

          {/* Description */}
          <motion.p
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className={`text-xl md:text-2xl mb-12 max-w-2xl mx-auto ${
              isBwMode ? 'text-black/70' : 'text-muted-foreground'
            }`}
          >
            {TAGLINE}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.a
              href={PERSONAL_INFO.resume}
              download
              className="group relative px-8 py-4 bg-gradient-to-r from-[oklch(0.7_0.2_200)] to-[oklch(0.65_0.25_250)] text-black font-semibold rounded-full overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Download CV</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[oklch(0.65_0.25_250)] to-[oklch(0.65_0.25_300)]"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>

            <motion.a
              href="#contact"
              className="group px-8 py-4 glass border border-border/50 font-semibold rounded-full"
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
              <ArrowDown className="w-6 h-6 text-muted-foreground" />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function AnimatedRole({ roles, currentIndex }: { roles: string[]; currentIndex: number }) {
  return (
    <div className="relative h-16 overflow-hidden">
      {roles.map((role, index) => (
        <motion.div
          key={role}
          initial={{ opacity: 0, y: 50 }}
          animate={{
            opacity: index === currentIndex ? 1 : 0,
            y: index === currentIndex ? 0 : 50,
          }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <span className="text-2xl md:text-3xl font-medium gradient-text">
            {role}
          </span>
        </motion.div>
      ))}
    </div>
  );
}

