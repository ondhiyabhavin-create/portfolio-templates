"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { ROLES, PERSONAL_INFO, TAGLINE } from "@/lib/constants";

export function BrutalistHero() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center brutalist-tech bg-white"
    >
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-5xl mx-auto">
          {/* Hard cut intro */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3, ease: "linear" }}
            className="mb-8"
          >
            <div className="brutal-accent inline-block mb-4">
              <span className="font-mono text-sm font-bold">ENGINEER</span>
            </div>
          </motion.div>

          {/* Massive headline */}
          <motion.h1
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.1, ease: "linear" }}
            className="font-black uppercase mb-6 leading-none"
          >
            {PERSONAL_INFO.name.split(' ')[0]}
            <br />
            <span className="text-red-600">SOFTWARE</span>
            <br />
            DEVELOPER
          </motion.h1>

          {/* Role switcher - hard snap */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2, delay: 0.3 }}
            className="mb-12"
          >
            <div className="brutal-border inline-block p-4 bg-black text-white">
              <span className="font-mono text-xl font-bold">
                {ROLES[currentRoleIndex].toUpperCase()}
              </span>
            </div>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.4 }}
            className="text-xl font-mono mb-12 max-w-2xl text-gray-700"
          >
            {TAGLINE}
          </motion.p>

          {/* CTA - Hard edges */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.5, ease: "linear" }}
            className="flex flex-wrap gap-4"
          >
            <a
              href={PERSONAL_INFO.resume}
              download
              className="brutal-border bg-black text-white px-8 py-4 font-bold uppercase hover:bg-red-600 transition-colors inline-flex items-center gap-2"
            >
              Download CV
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#contact"
              className="brutal-border bg-white text-black px-8 py-4 font-bold uppercase hover:bg-gray-100 transition-colors inline-flex items-center gap-2"
            >
              Contact
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


