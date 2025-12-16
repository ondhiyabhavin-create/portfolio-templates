"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Heart } from "lucide-react";
import { ROLES, PERSONAL_INFO, TAGLINE } from "@/lib/constants";

export function SoftCreativeHero() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center soft-creative overflow-hidden"
    >
      {/* Decorative circles */}
      <div className="absolute top-20 left-10 decorative-circle opacity-30" />
      <div className="absolute bottom-20 right-10 decorative-circle opacity-20" />

      <div className="container mx-auto px-6 py-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Gentle intro */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            className="mb-8"
          >
            <div className="soft-accent inline-block mb-6">
              <span className="text-sm">Creative Developer</span>
            </div>
          </motion.div>

          {/* Soft headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
            className="font-light mb-8 leading-tight"
          >
            Hello, I'm
            <br />
            <span className="text-6xl md:text-8xl">{PERSONAL_INFO.name.split(' ')[0]}</span>
            <br />
            <span className="text-3xl md:text-4xl text-[#8b7355]">Software Developer</span>
          </motion.h1>

          {/* Role switcher - gentle */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-12"
          >
            <div className="hand-drawn inline-block">
              <span className="text-lg italic">{ROLES[currentRoleIndex]}</span>
            </div>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="text-xl mb-16 max-w-2xl mx-auto leading-relaxed text-[#5a5a5a]"
          >
            {TAGLINE}
          </motion.p>

          {/* CTA - soft buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: [0.4, 0, 0.2, 1] }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <a
              href={PERSONAL_INFO.resume}
              download
              className="soft-accent hover:opacity-90 transition-opacity inline-flex items-center gap-2"
            >
              Download CV
              <Heart className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              className="hand-drawn hover:bg-white/80 transition-colors inline-flex items-center gap-2"
            >
              Get In Touch
            </a>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2"
          >
            <motion.a
              href="#about"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowDown className="w-6 h-6 text-[#8b7355]" />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


