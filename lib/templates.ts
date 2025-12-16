export type TemplateType = "ai-template-dark" | "ai-template-light" | "warm-professional" | "vibrant-animated" | "mirror-display" | "brutalist-tech" | "soft-creative";

export interface TemplateConfig {
  id: TemplateType;
  name: string;
  description: string;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
  };
}

export const TEMPLATES: Record<TemplateType, TemplateConfig> = {
  "ai-template-dark": {
    id: "ai-template-dark",
    name: "AI Template (Dark)",
    description: "Premium dark theme with glassmorphism & neon accents",
    colors: {
      primary: "oklch(0.7 0.2 200)",
      secondary: "oklch(0.65 0.25 250)",
      accent: "oklch(0.65 0.25 300)",
      background: "oklch(0.05 0 0)",
    },
  },
  "ai-template-light": {
    id: "ai-template-light",
    name: "AI Template (Light)",
    description: "Clean white theme with blue/purple accents",
    colors: {
      primary: "#3b82f6",
      secondary: "#8b5cf6",
      accent: "#a855f7",
      background: "#ffffff",
    },
  },
  "warm-professional": {
    id: "warm-professional",
    name: "Warm Professional",
    description: "Professional theme with warm orange accents",
    colors: {
      primary: "oklch(0.75 0.15 45)",
      secondary: "oklch(0.65 0.2 200)",
      accent: "oklch(0.7 0.18 280)",
      background: "oklch(0.08 0 0)",
    },
  },
  "vibrant-animated": {
    id: "vibrant-animated",
    name: "Vibrant Animated",
    description: "Colorful animated theme with gradients",
    colors: {
      primary: "#ff6b6b",
      secondary: "#4ecdc4",
      accent: "#ffe66d",
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    },
  },
  "mirror-display": {
    id: "mirror-display",
    name: "Mirror Display",
    description: "Premium mirror effects with AI integration",
    colors: {
      primary: "#00d9ff",
      secondary: "#7b61ff",
      accent: "#ff00ff",
      background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)",
    },
  },
  "brutalist-tech": {
    id: "brutalist-tech",
    name: "Brutalist Tech",
    description: "Raw, bold, high-contrast engineering aesthetic",
    colors: {
      primary: "#000000",
      secondary: "#ffffff",
      accent: "#ff0000",
      background: "#ffffff",
    },
  },
  "soft-creative": {
    id: "soft-creative",
    name: "Soft Creative",
    description: "Calm, artistic, handcrafted feel",
    colors: {
      primary: "#f5e6d3",
      secondary: "#d4a574",
      accent: "#c9a88a",
      background: "#faf8f5",
    },
  },
};
