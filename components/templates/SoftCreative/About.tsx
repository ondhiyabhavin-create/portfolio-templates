"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Palette, Brush, Sparkles } from "lucide-react";
import { PERSONAL_INFO, ABOUT_TEXT } from "@/lib/constants";

export function SoftCreativeAbout() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const values = [
    { icon: Palette, title: "Design", desc: "Beautiful, thoughtful interfaces" },
    { icon: Brush, title: "Craft", desc: "Handcrafted with care" },
    { icon: Sparkles, title: "Magic", desc: "Delightful user experiences" },
  ];

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-32 soft-creative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 decorative-circle w-300 h-300 opacity-20" />

      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            className="text-center mb-20"
          >
            <h2 className="font-light text-5xl md:text-6xl mb-4">
              About Me
            </h2>
            <p className="text-xl text-[#8b7355] max-w-2xl mx-auto">
              A creative developer who loves crafting beautiful experiences
            </p>
          </motion.div>

          {/* Content */}
          <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
              className="space-y-6"
            >
              <h3 className="text-3xl font-light mb-6">
                I'm {PERSONAL_INFO.name}
              </h3>
              <p className="text-lg leading-relaxed text-[#5a5a5a]">
                {ABOUT_TEXT}
              </p>
              <p className="text-lg leading-relaxed text-[#5a5a5a]">
                I believe in creating digital experiences that feel human,
                thoughtful, and delightful. Every project is an opportunity to
                craft something beautiful.
              </p>
            </motion.div>

            {/* Illustration */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
              className="relative"
            >
              <div className="soft-card aspect-square flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#f5e6d3] to-[#d4a574] opacity-60" />
                  <p className="text-[#8b7355] italic">Creative Space</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Values */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="grid md:grid-cols-3 gap-8"
          >
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1, ease: [0.4, 0, 0.2, 1] }}
                className="soft-card text-center"
              >
                <value.icon className="w-10 h-10 mx-auto mb-4 text-[#d4a574]" />
                <h4 className="text-xl font-light mb-2">{value.title}</h4>
                <p className="text-[#8b7355]">{value.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}


