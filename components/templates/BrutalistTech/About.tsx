"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Terminal, Cpu } from "lucide-react";
import { PERSONAL_INFO, ABOUT_TEXT } from "@/lib/constants";

export function BrutalistAbout() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skills = [
    { icon: Code2, title: "CODE", desc: "Clean, efficient, production-ready" },
    { icon: Terminal, title: "SYSTEMS", desc: "Architecture & infrastructure" },
    { icon: Cpu, title: "PERFORMANCE", desc: "Optimized for scale" },
  ];

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-20 brutalist-tech bg-white"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.3, ease: "linear" }}
            className="mb-16"
          >
            <h2 className="font-black uppercase text-6xl mb-4">
              ABOUT
            </h2>
            <div className="brutal-border inline-block p-2 bg-black text-white">
              <span className="font-mono text-sm">ENGINEER PROFILE</span>
            </div>
          </motion.div>

          {/* Content grid */}
          <div className="brutal-grid mb-12">
            <div className="col-span-2">
              <h3 className="font-bold text-3xl uppercase mb-4">
                {PERSONAL_INFO.name.toUpperCase()}
              </h3>
              <p className="font-mono text-lg leading-relaxed mb-6">
                {ABOUT_TEXT}
              </p>
              <p className="font-mono text-lg leading-relaxed">
                Building systems that scale. Writing code that lasts.
                Solving problems that matter.
              </p>
            </div>
          </div>

          {/* Skills grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ x: -50, opacity: 0 }}
                animate={isInView ? { x: 0, opacity: 1 } : {}}
                transition={{ duration: 0.3, delay: index * 0.1, ease: "linear" }}
                className="brutal-card"
              >
                <skill.icon className="w-12 h-12 mb-4 text-red-600" />
                <h4 className="font-bold text-xl uppercase mb-2">{skill.title}</h4>
                <p className="font-mono text-sm">{skill.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

