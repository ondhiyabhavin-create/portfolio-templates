"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTemplate } from "@/context/TemplateContext";

export function ColorModeSwitcher() {
  const { currentTemplate } = useTemplate();
  const [colorMode, setColorMode] = useState<"color" | "bw">("bw"); // Default to white (B&W)
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
    // Only run on client side
    if (typeof window === "undefined") return;
    
    setMounted(true);
    // Load saved color mode, default to "bw" (white) if not set
    try {
      const saved = localStorage.getItem("ai-template-color-mode") as "color" | "bw" | null;
      // Check current DOM state first (set by beforeInteractive script)
      const body = document.body;
      const root = document.documentElement;
      const isBw = body.classList.contains("ai-template-bw") || root.classList.contains("ai-template-bw");
      
      if (saved) {
        setColorMode(saved);
        // Ensure classes match saved preference
        applyColorMode(saved);
      } else if (isBw) {
        // If DOM already has B&W class (from script), use that
        setColorMode("bw");
        localStorage.setItem("ai-template-color-mode", "bw");
      } else {
        // Default to white (B&W) mode
        setColorMode("bw");
        applyColorMode("bw");
        localStorage.setItem("ai-template-color-mode", "bw");
      }
    } catch (e) {
      // localStorage might not be available, default to white
      applyColorMode("bw");
    }
  }, []);

  // ColorModeSwitcher is deprecated - templates are now separate
  // Always return null since we're using separate templates instead
  return null;

  const toggleMode = () => {
    const newMode = colorMode === "color" ? "bw" : "color";
    setColorMode(newMode);
    applyColorMode(newMode);
    try {
      localStorage.setItem("ai-template-color-mode", newMode);
    } catch (e) {
      // localStorage might not be available
    }
  };

  return (
    <motion.button
      onClick={toggleMode}
      className={`flex items-center gap-2 px-4 py-2 glass-strong rounded-lg font-semibold hover:bg-white/20 transition-all ${
        colorMode === "bw" ? "text-black" : "text-white"
      }`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      title={colorMode === "bw" ? "Switch to Dark Mode" : "Switch to Light Mode"}
    >
      {colorMode === "bw" ? (
        <>
          <Moon className="w-4 h-4" />
          <span className="hidden sm:inline">Dark</span>
        </>
      ) : (
        <>
          <Sun className="w-4 h-4" />
          <span className="hidden sm:inline">Light</span>
        </>
      )}
    </motion.button>
  );
}
