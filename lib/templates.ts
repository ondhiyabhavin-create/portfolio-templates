export type TemplateType = "ai-template-dark" | "ai-template-light";

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
};
