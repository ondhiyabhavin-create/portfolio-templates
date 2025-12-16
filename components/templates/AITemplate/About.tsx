"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Code2, Palette, Zap } from "lucide-react";
import { fadeInUp, slideInLeft, slideInRight, staggerContainer, textReveal } from "@/lib/animations";
import { PERSONAL_INFO, ABOUT_TEXT } from "@/lib/constants";
import { useTemplate } from "@/context/TemplateContext";

export function AIAbout() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { currentTemplate } = useTemplate();
  const isBwMode = currentTemplate === "ai-template-light";

  const values = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable, scalable code that stands the test of time.",
    },
    {
      icon: Palette,
      title: "Beautiful Design",
      description: "Creating interfaces that are both functional and visually stunning.",
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimizing every aspect for speed and smooth user experiences.",
    },
  ];

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-32 overflow-hidden"
    >
      <div className="container mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <motion.h2
              variants={textReveal}
              className="text-5xl md:text-6xl font-bold mb-4 gradient-text"
            >
              About Me
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-muted-foreground max-w-2xl mx-auto"
            >
              A passionate developer who bridges the gap between design and technology
            </motion.p>
          </motion.div>

          {/* Split Layout */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            {/* Text Content */}
            <motion.div variants={slideInLeft} className="space-y-6">
              <h3 className="text-3xl font-bold mb-4 text-white">
                I'm {PERSONAL_INFO.name} <span className="gradient-text">||</span> a <span className="gradient-text">Software Developer</span>
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {ABOUT_TEXT}
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                My approach combines technical excellence with creative problem-solving. I
                believe in writing clean, maintainable code and designing interfaces that
                users love to interact with.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                When I'm not coding, I'm exploring new technologies, contributing to open
                source, or sharing knowledge with the developer community.
              </p>
            </motion.div>

            {/* Animated Code/Developer Illustration */}
            <motion.div variants={slideInRight} className="relative">
              <div className="glass rounded-2xl p-8 aspect-square flex items-center justify-center overflow-hidden">
                <svg
                  viewBox="0 0 400 400"
                  className="w-full h-full about-svg"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    {isBwMode ? (
                      <>
                        {/* Light mode gradients - use blue/purple colors for visibility */}
                        <linearGradient id="ai-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#3b82f6" />
                          <stop offset="50%" stopColor="#8b5cf6" />
                          <stop offset="100%" stopColor="#a855f7" />
                        </linearGradient>
                        <linearGradient id="ai-gradient-2" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.2" />
                          <stop offset="100%" stopColor="#a855f7" stopOpacity="0.1" />
                        </linearGradient>
                      </>
                    ) : (
                      <>
                        {/* Dark mode gradients - original oklch colors */}
                        <linearGradient id="ai-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="oklch(0.7 0.2 200)" />
                          <stop offset="50%" stopColor="oklch(0.65 0.25 250)" />
                          <stop offset="100%" stopColor="oklch(0.65 0.25 300)" />
                        </linearGradient>
                        <linearGradient id="ai-gradient-2" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="oklch(0.7 0.2 200)" stopOpacity="0.3" />
                          <stop offset="100%" stopColor="oklch(0.65 0.25 300)" stopOpacity="0.1" />
                        </linearGradient>
                      </>
                    )}
                  </defs>
                  
                  {/* Background circles */}
                  <motion.circle
                    cx="200"
                    cy="200"
                    r="150"
                    fill="url(#ai-gradient-2)"
                    initial={{ scale: 0.8, opacity: 0.3 }}
                    animate={{ scale: [0.8, 1, 0.8], opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  />
                  
                  {/* Code brackets */}
                  <motion.g
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                  >
                    <motion.path
                      d="M 120 150 L 100 200 L 120 250"
                      fill="none"
                      stroke="url(#ai-gradient)"
                      strokeWidth="4"
                      strokeLinecap="round"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1.5, delay: 0.5 }}
                    />
                    <motion.path
                      d="M 280 150 L 300 200 L 280 250"
                      fill="none"
                      stroke="url(#ai-gradient)"
                      strokeWidth="4"
                      strokeLinecap="round"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1.5, delay: 0.7 }}
                    />
                  </motion.g>
                  
                  {/* Code lines */}
                  <motion.g
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                  >
                    <motion.rect
                      x="140"
                      y="180"
                      width="80"
                      height="3"
                      rx="1.5"
                      fill="url(#ai-gradient)"
                      initial={{ width: 0 }}
                      animate={{ width: [0, 80, 80, 0] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                    />
                    <motion.rect
                      x="140"
                      y="200"
                      width="60"
                      height="3"
                      rx="1.5"
                      fill="url(#ai-gradient)"
                      initial={{ width: 0 }}
                      animate={{ width: [0, 60, 60, 0] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 1.3 }}
                    />
                    <motion.rect
                      x="140"
                      y="220"
                      width="100"
                      height="3"
                      rx="1.5"
                      fill="url(#ai-gradient)"
                      initial={{ width: 0 }}
                      animate={{ width: [0, 100, 100, 0] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 1.6 }}
                    />
                  </motion.g>
                  
                  {/* Floating particles */}
                  {[...Array(6)].map((_, i) => (
                    <motion.circle
                      key={i}
                      cx={150 + i * 20}
                      cy={120 + (i % 3) * 60}
                      r="4"
                      fill="url(#ai-gradient)"
                      initial={{ opacity: 0, y: 0 }}
                      animate={{
                        opacity: [0, 1, 0],
                        y: [0, -30, 0],
                        scale: [0.5, 1, 0.5],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: i * 0.5,
                      }}
                    />
                  ))}
                  
                  {/* Central hexagon */}
                  <motion.polygon
                    points="200,100 250,125 250,175 200,200 150,175 150,125"
                    fill="none"
                    stroke="url(#ai-gradient)"
                    strokeWidth="3"
                    initial={{ rotate: 0, scale: 0 }}
                    animate={{ rotate: 360, scale: [0, 1, 1] }}
                    transition={{
                      rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                      scale: { duration: 1, delay: 0.5 },
                    }}
                    style={{ transformOrigin: "200px 150px" }}
                  />
                  
                  {/* Connecting lines */}
                  <motion.g
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                  >
                    <motion.line
                      x1="200"
                      y1="150"
                      x2="120"
                      y2="200"
                      stroke="url(#ai-gradient)"
                      strokeWidth="2"
                      strokeOpacity="0.4"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: [0, 1, 0] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
                    />
                    <motion.line
                      x1="200"
                      y1="150"
                      x2="280"
                      y2="200"
                      stroke="url(#ai-gradient)"
                      strokeWidth="2"
                      strokeOpacity="0.4"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: [0, 1, 0] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 1.8 }}
                    />
                  </motion.g>
                </svg>
              </div>
            </motion.div>
          </div>

          {/* Values Grid */}
          <motion.div
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-6"
          >
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                variants={fadeInUp}
                className="glass rounded-xl p-6 group hover:border-[oklch(0.7_0.2_200)]/50 transition-colors"
                whileHover={{ y: -5 }}
              >
                <value.icon className="w-8 h-8 gradient-text mb-4" />
                <h3 className="text-xl font-semibold mb-2 gradient-text">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

