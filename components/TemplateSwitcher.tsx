"use client";

import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTemplate } from "@/context/TemplateContext";

export function TemplateSwitcher() {
  const { currentTemplate, setTemplate } = useTemplate();
  const isDark = currentTemplate === "ai-template-dark";
  const isBwMode = currentTemplate === "ai-template-light";

  const toggleTheme = () => {
    setTemplate(isDark ? "ai-template-light" : "ai-template-dark");
  };

  return (
    <motion.button
      onClick={toggleTheme}
      className={`flex items-center gap-2 px-5 py-3 rounded-lg font-semibold transition-all min-w-[100px] justify-center ${
        isBwMode
          ? "bg-white border-2 border-blue-200 text-black hover:border-blue-400 hover:bg-blue-50 shadow-lg"
          : "glass-strong text-white hover:bg-white/20"
      }`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDark ? (
        <>
          <Sun className="w-5 h-5" />
          <span className="hidden sm:inline text-base">Light</span>
        </>
      ) : (
        <>
          <Moon className="w-5 h-5" />
          <span className="hidden sm:inline text-base">Dark</span>
        </>
      )}
    </motion.button>
  );
}
