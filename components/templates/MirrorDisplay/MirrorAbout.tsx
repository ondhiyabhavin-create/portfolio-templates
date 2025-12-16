"use client";

import { motion, useScroll, useTransform, useMotionValue } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import { Code2, Palette, Zap, Brain } from "lucide-react";
import { fadeInUp, slideInLeft, slideInRight, staggerContainer } from "@/lib/animations";
import { PERSONAL_INFO, ABOUT_TEXT } from "@/lib/constants";
import { MirrorSurface } from "./MirrorSurface";
import { CursorMirrorSurface } from "./CursorMirrorSurface";

export function MirrorAbout() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-200px" });
  const containerRef = useRef<HTMLElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // Scroll-driven: Enter blurred, peak sharp, exit dim
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.7]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.96, 1, 1, 0.98]);
  const blur = useTransform(scrollYProgress, [0, 0.2], [8, 0]);
  const mirrorLight = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.2, 0.5, 0.5, 0.3]);

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
      ref={containerRef}
      id="about"
      className="relative min-h-screen flex items-center py-32 overflow-hidden mirror-display"
    >
      <motion.div
        ref={ref}
        style={{ 
          opacity,
          scale,
          filter: `blur(${blur}px)`,
        }}
        className="container mx-auto px-6 w-full"
      >
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={fadeInUp} className="text-center mb-24">
            <motion.h2
              className="text-5xl md:text-6xl font-light mb-4 text-white/98 tracking-tight"
            >
              About Me
            </motion.h2>
            <motion.p
              className="text-xl text-white/55 max-w-2xl mx-auto font-light mt-4"
            >
              A passionate developer who bridges the gap between design and technology
            </motion.p>
          </motion.div>

          {/* Split Layout */}
          <div className="grid md:grid-cols-2 gap-20 items-center mb-32">
            {/* Text Content */}
            <motion.div variants={slideInLeft} className="space-y-8">
              <h3 className="text-3xl font-light mb-8 text-white/98 leading-relaxed">
                I'm {PERSONAL_INFO.name} <span className="text-white/40">||</span> a <span className="text-white/98">Software Developer</span>
              </h3>
              <p className="text-lg text-white/65 leading-relaxed font-light">
                {ABOUT_TEXT}
              </p>
              <p className="text-lg text-white/65 leading-relaxed font-light">
                My approach combines technical excellence with creative problem-solving. I
                believe in writing clean, maintainable code and designing interfaces that
                users love to interact with.
              </p>
              <p className="text-lg text-white/65 leading-relaxed font-light">
                When I'm not coding, I'm exploring new technologies, contributing to open
                source, or sharing knowledge with the developer community.
              </p>
            </motion.div>

            {/* Neural Mirror - Reflected Lines Only */}
            <motion.div variants={slideInRight} className="relative">
              <CursorMirrorSurface 
                variant="black" 
                className="rounded-2xl p-12 aspect-square"
                scrollTarget={containerRef}
                mouseX={mouseX}
                mouseY={mouseY}
              >
                <NeuralMirror lightIntensity={mirrorLight} />
              </CursorMirrorSurface>
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
                className="mirror-frosted rounded-xl p-6 mirror-hover-tilt"
                whileHover={{ y: -2 }}
              >
                <value.icon className="w-6 h-6 text-white/70 mb-4" />
                <h3 className="text-lg font-medium mb-2 text-white/95">{value.title}</h3>
                <p className="text-white/55 text-sm font-light leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

function NeuralMirror({ lightIntensity }: { lightIntensity: any }) {
  return (
    <div className="neural-mirror w-full h-full relative">
      <svg
        viewBox="0 0 400 400"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Neural Network Nodes - Subtle */}
        {[
          { x: 100, y: 100 },
          { x: 200, y: 120 },
          { x: 300, y: 100 },
          { x: 150, y: 200 },
          { x: 250, y: 200 },
          { x: 100, y: 300 },
          { x: 200, y: 280 },
          { x: 300, y: 300 },
        ].map((node, i) => (
          <motion.circle
            key={i}
            cx={node.x}
            cy={node.y}
            r="2"
            fill="rgba(255, 255, 255, 0.4)"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.5, 0.3] }}
            transition={{
              duration: 2,
              delay: i * 0.15,
              repeat: Infinity,
              repeatType: "reverse",
              repeatDelay: 3,
            }}
          />
        ))}
        
        {/* Neural Connections - Thin Reflected Lines */}
        {[
          { from: { x: 100, y: 100 }, to: { x: 200, y: 120 } },
          { from: { x: 200, y: 120 }, to: { x: 300, y: 100 } },
          { from: { x: 100, y: 100 }, to: { x: 150, y: 200 } },
          { from: { x: 200, y: 120 }, to: { x: 150, y: 200 } },
          { from: { x: 200, y: 120 }, to: { x: 250, y: 200 } },
          { from: { x: 300, y: 100 }, to: { x: 250, y: 200 } },
          { from: { x: 150, y: 200 }, to: { x: 100, y: 300 } },
          { from: { x: 150, y: 200 }, to: { x: 200, y: 280 } },
          { from: { x: 250, y: 200 }, to: { x: 200, y: 280 } },
          { from: { x: 250, y: 200 }, to: { x: 300, y: 300 } },
        ].map((connection, i) => (
          <motion.line
            key={i}
            x1={connection.from.x}
            y1={connection.from.y}
            x2={connection.to.x}
            y2={connection.to.y}
            stroke="rgba(255, 255, 255, 0.15)"
            strokeWidth="0.5"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: [0, 1, 0],
              opacity: [0, 0.2, 0]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          />
        ))}
      </svg>
    </div>
  );
}
