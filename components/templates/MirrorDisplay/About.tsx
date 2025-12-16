"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Palette, Zap, Brain } from "lucide-react";
import { fadeInUp, slideInLeft, slideInRight, staggerContainer, textReveal } from "@/lib/animations";
import { PERSONAL_INFO, ABOUT_TEXT } from "@/lib/constants";

export function MirrorAbout() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const values = [
    {
      icon: Brain,
      title: "AI-Powered",
      description: "Leveraging AI to enhance user experiences and automate workflows.",
    },
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
      className="relative py-32 overflow-hidden mirror-display"
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
              className="text-5xl md:text-6xl font-bold mb-4 gradient-text ai-glow mirror-reflect"
            >
              About Me
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-white/80 max-w-2xl mx-auto"
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
              <p className="text-lg text-white/90 leading-relaxed">
                {ABOUT_TEXT}
              </p>
              <p className="text-lg text-white/90 leading-relaxed">
                My approach combines technical excellence with creative problem-solving. I
                believe in writing clean, maintainable code and designing interfaces that
                users love to interact with.
              </p>
              <p className="text-lg text-white/90 leading-relaxed">
                When I'm not coding, I'm exploring new technologies, contributing to open
                source, or sharing knowledge with the developer community.
              </p>
            </motion.div>

            {/* Mirror Illustration */}
            <motion.div variants={slideInRight} className="relative">
              <div className="glass-strong rounded-2xl p-8 aspect-square flex items-center justify-center mirror-surface float-element">
                <MirrorIllustration />
              </div>
            </motion.div>
          </div>

          {/* Values Grid */}
          <motion.div
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                variants={fadeInUp}
                className="glass rounded-xl p-6 group hover:border-[#00d9ff]/50 transition-all mirror-reflect"
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <value.icon className="w-8 h-8 gradient-text mb-4" />
                <h3 className="text-xl font-semibold mb-2 gradient-text">{value.title}</h3>
                <p className="text-white/80">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function MirrorIllustration() {
  return (
    <svg
      viewBox="0 0 400 400"
      className="w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="mirror-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00d9ff" />
          <stop offset="50%" stopColor="#7b61ff" />
          <stop offset="100%" stopColor="#ff00ff" />
        </linearGradient>
        <linearGradient id="mirror-grad-2" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#00d9ff" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#ff00ff" stopOpacity="0.1" />
        </linearGradient>
      </defs>
      
      {/* Mirror Surface */}
      <motion.rect
        x="50"
        y="50"
        width="300"
        height="300"
        rx="20"
        fill="url(#mirror-grad-2)"
        stroke="url(#mirror-grad)"
        strokeWidth="2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />
      
      {/* Reflected Content */}
      <motion.g
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        {/* Central AI Symbol */}
        <motion.path
          d="M 200 150 L 250 200 L 200 250 L 150 200 Z"
          fill="none"
          stroke="url(#mirror-grad)"
          strokeWidth="3"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2 }}
        />
        
        {/* AI Neural Network */}
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => {
          const rad = (angle * Math.PI) / 180;
          const x1 = 200 + Math.cos(rad) * 60;
          const y1 = 200 + Math.sin(rad) * 60;
          return (
            <motion.g key={i}>
              <motion.circle
                cx={x1}
                cy={y1}
                r="8"
                fill="url(#mirror-grad)"
                initial={{ scale: 0 }}
                animate={{ scale: [0, 1.2, 1] }}
                transition={{ duration: 0.5, delay: 1 + i * 0.1 }}
              />
              <motion.line
                x1="200"
                y1="200"
                x2={x1}
                y2={y1}
                stroke="url(#mirror-grad)"
                strokeWidth="1"
                opacity="0.5"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 1.2 + i * 0.1 }}
              />
            </motion.g>
          );
        })}
        
        {/* Floating Particles */}
        {[...Array(12)].map((_, i) => {
          const angle = (i * 30 * Math.PI) / 180;
          const radius = 100 + (i % 3) * 20;
          return (
            <motion.circle
              key={i}
              cx={200 + Math.cos(angle) * radius}
              cy={200 + Math.sin(angle) * radius}
              r="4"
              fill="url(#mirror-grad)"
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          );
        })}
      </motion.g>
      
      {/* Mirror Reflection Effect */}
      <motion.g
        opacity="0.3"
        transform="scale(1, -1) translate(0, -400)"
      >
        <motion.rect
          x="50"
          y="50"
          width="300"
          height="300"
          rx="20"
          fill="url(#mirror-grad-2)"
          stroke="url(#mirror-grad)"
          strokeWidth="2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 1 }}
        />
      </motion.g>
    </svg>
  );
}

