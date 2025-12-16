"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { SKILLS } from "@/lib/constants";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { useTemplate } from "@/context/TemplateContext";

const categories = ["All", ...Array.from(new Set(SKILLS.map((s) => s.category)))];

export function Skills() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { currentTemplate } = useTemplate();
  const isBwMode = currentTemplate === "ai-template-light";

  const filteredSkills =
    selectedCategory === "All"
      ? SKILLS
      : SKILLS.filter((skill) => skill.category === selectedCategory);

  return (
    <section id="skills" ref={ref} className={`relative py-32 overflow-hidden ${isBwMode ? 'bg-white' : 'bg-gradient-to-b from-pink-900/50 via-purple-900/50 to-blue-900/50'}`}>
      <div className="container mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className={`text-5xl md:text-6xl lg:text-7xl font-black mb-4 ${
              currentTemplate === "ai-template-dark" || currentTemplate === "ai-template-light" 
                ? "gradient-text" 
                : currentTemplate === "mirror-display"
                ? "gradient-text ai-glow"
                : currentTemplate === "brutalist-tech"
                ? "uppercase text-black"
                : currentTemplate === "soft-creative"
                ? "font-light text-[#2d2d2d]"
                : "gradient-text-2"
            }`}>
              {currentTemplate === "brutalist-tech" ? "SKILLS & EXPERTISE" : "Skills & Expertise"}
            </h2>
            <p className={`text-xl max-w-2xl mx-auto ${isBwMode ? 'text-black/80' : 'text-white/80'}`}>
              Technologies and tools I work with
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-bold transition-all ${
                  selectedCategory === category
                    ? isBwMode
                      ? "bg-black text-white shadow-2xl scale-110"
                      : "bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-2xl scale-110"
                    : isBwMode
                      ? "glass text-black/80 hover:text-black hover:scale-105 border border-black/20"
                      : "glass text-white/80 hover:text-white hover:scale-105"
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>

          {/* Skills Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  variants={fadeInUp}
                  className="glass rounded-2xl p-6 group cursor-pointer hover-lift"
                  whileHover={{ y: -10, rotate: 2, scale: 1.02 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <motion.div
                      className={`relative w-14 h-14 flex-shrink-0 flex items-center justify-center rounded-lg p-2 border ${
                        isBwMode
                          ? "bg-gray-100 border-black/20"
                          : "bg-white/5 border-white/10"
                      }`}
                      whileHover={{ rotate: 360, scale: 1.15 }}
                      transition={{ duration: 0.5 }}
                    >
                      {skill.icon.startsWith("http") || skill.icon.startsWith("/") ? (
                        <img
                          src={skill.icon}
                          alt={skill.name}
                          className="w-full h-full object-contain"
                          style={{
                            // Keep original colored logos in both modes - they're more visible
                            filter: "none",
                            width: "100%",
                            height: "100%",
                            maxWidth: "40px",
                            maxHeight: "40px",
                            // Zoom in AWS Lex image to match other logo sizes
                            transform: skill.icon === "/aws-lex.jpg" ? "scale(1.5)" : "none"
                          }}
                          loading="lazy"
                          onError={(e) => {
                            // Fallback to emoji
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                            const fallback = document.createElement('span');
                            fallback.className = 'text-3xl';
                            fallback.textContent = '💼';
                            if (target.parentElement && !target.parentElement.querySelector('span.text-3xl')) {
                              target.parentElement.appendChild(fallback);
                            }
                          }}
                        />
                      ) : (
                        <span className="text-4xl">{skill.icon}</span>
                      )}
                    </motion.div>
                    <div className="flex-1">
                      <h3 className={`text-xl font-bold mb-1 ${isBwMode ? 'text-black' : 'text-white'}`}>{skill.name}</h3>
                      <span className={`text-sm font-semibold ${
                        isBwMode
                          ? "text-black/70"
                          : "bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent"
                      }`}>
                        {skill.category}
                      </span>
                    </div>
                  </div>
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    whileHover={{ opacity: 1, height: "auto" }}
                    className={`text-sm overflow-hidden ${isBwMode ? 'text-black/70' : 'text-white/80'}`}
                  >
                    {skill.description}
                  </motion.p>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
