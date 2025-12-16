"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { SKILLS } from "@/lib/constants";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { useTemplate } from "@/context/TemplateContext";

const categories = ["All", ...Array.from(new Set(SKILLS.map((s) => s.category)))];

export function Skills() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { currentTemplate } = useTemplate();

  const filteredSkills =
    selectedCategory === "All"
      ? SKILLS
      : SKILLS.filter((skill) => skill.category === selectedCategory);

  return (
    <section id="skills" ref={ref} className="relative py-32 overflow-hidden bg-gradient-to-b from-pink-900/50 via-purple-900/50 to-blue-900/50">
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
              currentTemplate === "ai-template" 
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
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
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
                    ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-2xl scale-110"
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
                    <motion.span
                      className="text-4xl"
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.5 }}
                    >
                      {skill.icon}
                    </motion.span>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-1">{skill.name}</h3>
                      <span className="text-sm font-semibold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                        {skill.category}
                      </span>
                    </div>
                  </div>
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    whileHover={{ opacity: 1, height: "auto" }}
                    className="text-sm text-white/80 overflow-hidden"
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
