"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTemplate } from "@/context/TemplateContext";

export function ColorModeSwitcher() {
  const { currentTemplate } = useTemplate();
  const [colorMode, setColorMode] = useState<"color" | "bw">("color");
  const [mounted, setMounted] = useState(false);

  const applyColorMode = (mode: "color" | "bw") => {
    if (typeof window === "undefined") return;
    
    const body = document.body;
    const root = document.documentElement;
    
    if (mode === "bw") {
      body.classList.add("ai-template-bw");
      body.classList.remove("ai-template-color");
      root.classList.add("ai-template-bw");
      root.classList.remove("ai-template-color");
    } else {
      body.classList.add("ai-template-color");
      body.classList.remove("ai-template-bw");
      root.classList.add("ai-template-color");
      root.classList.remove("ai-template-bw");
    }
  };

  useEffect(() => {
    setMounted(true);
    // Load saved color mode
    const saved = localStorage.getItem("ai-template-color-mode") as "color" | "bw" | null;
    if (saved) {
      setColorMode(saved);
      applyColorMode(saved);
    } else {
      applyColorMode("color");
    }
  }, []);

  // Only show for AI Template
  if (currentTemplate !== "ai-template" || !mounted) {
    return null;
  }

  const toggleMode = () => {
    const newMode = colorMode === "color" ? "bw" : "color";
    setColorMode(newMode);
    applyColorMode(newMode);
    localStorage.setItem("ai-template-color-mode", newMode);
  };

  return (
    <motion.button
      onClick={toggleMode}
      className="flex items-center gap-2 px-4 py-2 glass-strong rounded-lg text-white font-semibold hover:bg-white/20 transition-all"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      title={colorMode === "color" ? "Switch to Black & White" : "Switch to Color"}
    >
      {colorMode === "color" ? (
        <>
          <Moon className="w-4 h-4" />
          <span className="hidden sm:inline">B&W</span>
        </>
      ) : (
        <>
          <Sun className="w-4 h-4" />
          <span className="hidden sm:inline">Color</span>
        </>
      )}
    </motion.button>
  );
}
