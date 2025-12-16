"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { TemplateType, TEMPLATES } from "@/lib/templates";

interface TemplateContextType {
  currentTemplate: TemplateType;
  setTemplate: (template: TemplateType) => void;
  templateConfig: typeof TEMPLATES[TemplateType];
}

const TemplateContext = createContext<TemplateContextType | undefined>(undefined);

export function TemplateProvider({ children }: { children: React.ReactNode }) {
  const [currentTemplate, setCurrentTemplate] = useState<TemplateType>("ai-template-light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Load saved template from localStorage
    const saved = localStorage.getItem("portfolio-template") as TemplateType;
    if (saved && TEMPLATES[saved]) {
      setCurrentTemplate(saved);
    }
  }, []);

  const setTemplate = (template: TemplateType) => {
    setCurrentTemplate(template);
    localStorage.setItem("portfolio-template", template);
    applyTemplateStyles(template);
  };

  const applyTemplateStyles = (template: TemplateType) => {
    if (typeof window === "undefined") return;
    
    console.log("Applying template styles:", template);
    
    const root = document.documentElement;
    const body = document.body;
    const main = document.querySelector("main");
    
    // Remove all template classes
    body.classList.remove("vibrant-template", "ai-template-full", "ai-template-bw", "ai-template-color", "warm-professional-template", "mirror-display", "brutalist-tech", "soft-creative");
    root.classList.remove("vibrant-template", "ai-template-full", "ai-template-bw", "ai-template-color", "warm-professional-template", "mirror-display", "brutalist-tech", "soft-creative");
    if (main) {
      main.classList.remove("vibrant-template", "ai-template-full", "ai-template-bw", "ai-template-color", "warm-professional-template", "mirror-display", "brutalist-tech", "soft-creative");
    }
    
    // Remove inline styles
    body.style.background = "";
    root.style.setProperty("--template-primary", "");
    root.style.setProperty("--template-secondary", "");
    root.style.setProperty("--template-accent", "");
    
    if (template === "vibrant-animated") {
      body.className = "vibrant-template";
      body.style.background = "linear-gradient(135deg, #667eea 0%, #764ba2 100%)";
      body.style.color = "#ffffff";
      root.style.setProperty("--template-primary", "#ff6b6b");
      root.style.setProperty("--template-secondary", "#4ecdc4");
      root.style.setProperty("--template-accent", "#ffe66d");
      root.style.setProperty("--template-bg", "linear-gradient(135deg, #667eea 0%, #764ba2 100%)");
    } else if (template === "ai-template-dark") {
      body.className = "ai-template-full ai-template-color";
      body.style.background = "oklch(0.05 0 0)";
      body.style.color = "oklch(0.98 0 0)";
      root.className = "ai-template-full ai-template-color";
      root.style.setProperty("--template-primary", "oklch(0.7 0.2 200)");
      root.style.setProperty("--template-secondary", "oklch(0.65 0.25 250)");
      root.style.setProperty("--template-accent", "oklch(0.65 0.25 300)");
      root.style.setProperty("--template-bg", "oklch(0.05 0 0)");
    } else if (template === "ai-template-light") {
      body.className = "ai-template-full ai-template-bw";
      body.style.background = "#ffffff";
      body.style.color = "#000000";
      root.className = "ai-template-full ai-template-bw";
      root.style.setProperty("--template-primary", "#3b82f6");
      root.style.setProperty("--template-secondary", "#8b5cf6");
      root.style.setProperty("--template-accent", "#a855f7");
      root.style.setProperty("--template-bg", "#ffffff");
    } else if (template === "mirror-display") {
      body.className = "mirror-display";
      body.style.background = "linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)";
      body.style.color = "#ffffff";
      root.className = "mirror-display";
      root.style.setProperty("--template-primary", "#00d9ff");
      root.style.setProperty("--template-secondary", "#7b61ff");
      root.style.setProperty("--template-accent", "#ff00ff");
      root.style.setProperty("--template-bg", "linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)");
    } else if (template === "brutalist-tech") {
      body.className = "brutalist-tech";
      body.style.background = "#ffffff";
      body.style.color = "#000000";
      root.className = "brutalist-tech";
      root.style.setProperty("--template-primary", "#000000");
      root.style.setProperty("--template-secondary", "#ffffff");
      root.style.setProperty("--template-accent", "#ff0000");
      root.style.setProperty("--template-bg", "#ffffff");
    } else if (template === "soft-creative") {
      body.className = "soft-creative";
      body.style.background = "#faf8f5";
      body.style.color = "#3d3d3d";
      root.className = "soft-creative";
      root.style.setProperty("--template-primary", "#f5e6d3");
      root.style.setProperty("--template-secondary", "#d4a574");
      root.style.setProperty("--template-accent", "#c9a88a");
      root.style.setProperty("--template-bg", "#faf8f5");
    } else {
      body.className = "warm-professional-template";
      body.style.background = "#141414";
      body.style.color = "#ffffff";
      root.style.setProperty("--template-primary", "#ff8c42");
      root.style.setProperty("--template-secondary", "#4ecdc4");
      root.style.setProperty("--template-accent", "#ffe66d");
      root.style.setProperty("--template-bg", "#141414");
    }
    
    // Force re-render by updating data attribute
    root.setAttribute("data-template", template);
    
    // Dispatch custom event for components to listen to
    window.dispatchEvent(new CustomEvent("template-changed", { detail: template }));
  };

  useEffect(() => {
    if (mounted) {
      applyTemplateStyles(currentTemplate);
    }
  }, [currentTemplate, mounted]);

  return (
    <TemplateContext.Provider
      value={{
        currentTemplate,
        setTemplate,
        templateConfig: TEMPLATES[currentTemplate],
      }}
    >
      {children}
    </TemplateContext.Provider>
  );
}

export function useTemplate() {
  const context = useContext(TemplateContext);
  if (context === undefined) {
    throw new Error("useTemplate must be used within a TemplateProvider");
  }
  return context;
}
