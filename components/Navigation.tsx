"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { TemplateSwitcher } from "./TemplateSwitcher";
import { useTemplate } from "@/context/TemplateContext";

// Inline keyframes for snake animation
const snakeKeyframes = `
  @keyframes snakeRotate {
    from {
      stroke-dashoffset: 0;
    }
    to {
      stroke-dashoffset: -400;
    }
  }
  
  /* Force AI Chat button to have transparent background */
  a[href="#ai-interaction"],
  a[href="#ai-interaction"] *,
  a[href="#ai-interaction"] svg,
  a[href="#ai-interaction"] rect {
    background-color: transparent !important;
    background: transparent !important;
    fill: none !important;
  }
  
  a[href="#ai-interaction"] {
    color: #06b6d4 !important;
  }
  
  a[href="#ai-interaction"] span {
    color: #06b6d4 !important;
    background: transparent !important;
  }
  
  /* Ensure AI Chat snake border SVG is visible */
  .ai-chat-snake-border {
    display: block !important;
    visibility: visible !important;
    opacity: 1 !important;
    background: transparent !important;
    fill: none !important;
  }
  
  /* Ensure the rect is visible with gradient stroke */
  .ai-chat-snake-border rect {
    stroke-width: 8 !important;
    stroke-dasharray: 80 320 !important;
    animation: snakeRotate 5s linear infinite !important;
    fill: none !important;
    display: block !important;
    visibility: visible !important;
    opacity: 1 !important;
  }
  
  /* Override template CSS that forces black strokes in light mode - inline styles should work but add CSS backup */
  /* The about-svg class should exclude it from .ai-template-bw svg:not(.about-svg) [stroke] rule */
  /* But if it still applies, this more specific rule will override it */
  .ai-template-bw nav a[href="#ai-interaction"] .about-svg .snake-border-rect[style],
  .ai-template-bw a[href="#ai-interaction"] .about-svg .snake-border-rect[style] {
    /* Let inline style take precedence - don't override if inline style exists */
    stroke-width: 8 !important;
    stroke-dasharray: 80 320 !important;
    animation: snakeRotate 5s linear infinite !important;
    fill: none !important;
  }
  
  /* Fallback: If inline style doesn't work, use gradient directly */
  .ai-template-bw .about-svg .snake-border-rect[data-gradient-id="snakeGradient-0"],
  .ai-template-bw .about-svg .snake-border-rect[data-gradient-id="snakeGradient-1"],
  .ai-template-bw .about-svg .snake-border-rect[data-gradient-id="snakeGradient-2"],
  .ai-template-bw .about-svg .snake-border-rect[data-gradient-id="snakeGradient-3"],
  .ai-template-bw .about-svg .snake-border-rect[data-gradient-id="snakeGradient-4"],
  .ai-template-bw .about-svg .snake-border-rect[data-gradient-id="snakeGradient-5"],
  .ai-template-bw .about-svg .snake-border-rect[data-gradient-id="snakeGradient-6"],
  .ai-template-bw .about-svg .snake-border-rect[data-gradient-id="snakeGradient-7"] {
    stroke: url(#snakeGradient-0) !important;
    stroke: url(#snakeGradient-1) !important;
    stroke: url(#snakeGradient-2) !important;
    stroke: url(#snakeGradient-3) !important;
    stroke: url(#snakeGradient-4) !important;
    stroke: url(#snakeGradient-5) !important;
    stroke: url(#snakeGradient-6) !important;
    stroke: url(#snakeGradient-7) !important;
  }
`;

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "AI Chat", href: "#ai-interaction", isSpecial: true },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { currentTemplate } = useTemplate();
  const navRef = useRef<HTMLElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);

  // Track cursor position for mirror effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (navRef.current) {
        const rect = navRef.current.getBoundingClientRect();
        if (
          e.clientX >= rect.left &&
          e.clientX <= rect.right &&
          e.clientY >= rect.top &&
          e.clientY <= rect.bottom
        ) {
          mouseX.set(e.clientX);
          mouseY.set(e.clientY);
        }
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // Calculate light position for mirror effect
  const lightX = useTransform(mouseX, (x) => {
    if (!navRef.current) return '50%';
    const rect = navRef.current.getBoundingClientRect();
    const percent = ((x - rect.left) / rect.width) * 100;
    return `${Math.max(0, Math.min(100, percent))}%`;
  });

  const lightY = useTransform(mouseY, (y) => {
    if (!navRef.current) return '0%';
    const rect = navRef.current.getBoundingClientRect();
    const percent = ((y - rect.top) / rect.height) * 100;
    return `${Math.max(0, Math.min(100, percent))}%`;
  });

  const lightAngle = useTransform(
    [mouseX, mouseY],
    ([x, y]: number[]) => {
      if (!navRef.current) return 180;
      const rect = navRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const deltaX = x - centerX;
      const deltaY = y - centerY;
      return (Math.atan2(deltaY, deltaX) * 180) / Math.PI + 90;
    }
  );

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isMirrorTemplate = false;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: snakeKeyframes }} />
      <motion.nav
      ref={navRef}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 relative",
        scrolled
          ? isMirrorTemplate 
            ? "mirror-frosted border-b border-white/10 py-5"
            : "glass-strong border-b border-white/20 py-5"
          : isMirrorTemplate
            ? "bg-transparent py-8"
            : "bg-transparent py-8"
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Mirror reflection effect for mirror-display template */}
      {isMirrorTemplate && (
        <>
          <motion.div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `radial-gradient(circle 300px at ${lightX} ${lightY}, rgba(255, 255, 255, 0.1) 0%, transparent 70%)`,
              opacity: isHovered ? 0.6 : 0.2,
            }}
          />
          <motion.div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `linear-gradient(${lightAngle}deg, rgba(255, 255, 255, 0.08) 0%, transparent 50%)`,
              opacity: isHovered ? 0.5 : 0.2,
            }}
          />
        </>
      )}
      <div className="container mx-auto px-6 flex items-center justify-between">
        <motion.a
          href="#hero"
          className="text-3xl md:text-4xl font-black gradient-text"
          whileHover={{ scale: 1.1, rotate: 2 }}
          whileTap={{ scale: 0.95 }}
        >
          Bhavin
        </motion.a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item, index) => (
            <NavItemMirror
              key={item.name}
              item={item}
              index={index}
              mouseX={mouseX}
              mouseY={mouseY}
              isMirrorTemplate={isMirrorTemplate}
              currentTemplate={currentTemplate}
            />
          ))}
          <div className="flex items-center gap-3 ml-2">
            <TemplateSwitcher />
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-3">
          <TemplateSwitcher />
          <button
            className="p-2 text-cyan-600"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-strong border-t border-white/20"
          >
            <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
              {navItems.map((item, idx) => {
                const isLightMode = currentTemplate === "ai-template-light";
                const isAIChat = item.isSpecial;
                
                if (isAIChat) {
                  return (
                    <motion.a
                      key={item.name}
                      href={item.href}
                      className="text-base font-bold transition-all py-2 px-3 inline-flex items-center justify-center overflow-visible"
                      style={{
                        color: '#06b6d4',
                        backgroundColor: 'transparent',
                        border: 'none',
                        outline: 'none',
                        textDecoration: 'none',
                        background: 'transparent',
                        boxShadow: 'none',
                        position: 'relative',
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      } as React.CSSProperties}
                      onClick={() => setMobileMenuOpen(false)}
                      whileHover={{ color: '#0891b2' }}
                    >
                      {/* SVG Snake Border with inline styles */}
                      <svg
                        className="ai-chat-snake-border about-svg"
                        style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          width: '100%',
                          height: '100%',
                          pointerEvents: 'none',
                          overflow: 'visible',
                          zIndex: 0,
                          backgroundColor: 'transparent',
                          background: 'transparent',
                          display: 'block',
                          visibility: 'visible',
                          opacity: 1,
                        } as React.CSSProperties}
                        viewBox="0 0 200 60"
                        preserveAspectRatio="none"
                      >
                        <defs>
                          <linearGradient id={`snakeGradientMobile-${idx}`} x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#06b6d4" />
                            <stop offset="50%" stopColor="#a855f7" />
                            <stop offset="100%" stopColor="#ec4899" />
                          </linearGradient>
                        </defs>
                        <rect
                          x="4"
                          y="4"
                          width="192"
                          height="52"
                          fill="none"
                          stroke={`url(#snakeGradientMobile-${idx})`}
                          strokeWidth="8"
                          className="snake-border-rect"
                          style={{
                            stroke: `url(#snakeGradientMobile-${idx})`,
                            strokeWidth: '8',
                            strokeDasharray: '80 320',
                            strokeDashoffset: 0,
                            animation: 'snakeRotate 5s linear infinite',
                            filter: 'drop-shadow(0 0 4px rgba(6, 182, 212, 0.6)) drop-shadow(0 0 8px rgba(168, 85, 247, 0.4)) drop-shadow(0 0 12px rgba(236, 72, 153, 0.3))',
                            fill: 'none',
                          } as React.CSSProperties}
                          data-gradient-id={`snakeGradientMobile-${idx}`}
                        />
                      </svg>
                      
                      {/* Text with proper z-index */}
                      <span
                        style={{
                          position: 'relative',
                          zIndex: 10,
                          fontWeight: 'bold',
                          whiteSpace: 'nowrap',
                          color: '#06b6d4',
                          backgroundColor: 'transparent',
                          display: 'inline-block',
                        } as React.CSSProperties}
                      >
                        {item.name}
                      </span>
                    </motion.a>
                  );
                }
                
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-base font-bold transition-all py-2 px-3"
                    style={{ color: '#06b6d4' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#2563eb'}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#06b6d4'}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
    </>
  );
}

// Nav Item with Mirror Effect
function NavItemMirror({ 
  item, 
  index, 
  mouseX, 
  mouseY, 
  isMirrorTemplate,
  currentTemplate
}: { 
  item: { name: string; href: string; isSpecial?: boolean }; 
  index: number; 
  mouseX: ReturnType<typeof useMotionValue<number>>; 
  mouseY: ReturnType<typeof useMotionValue<number>>; 
  isMirrorTemplate: boolean;
  currentTemplate: string;
}) {
  const itemRef = useRef<HTMLAnchorElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const lightX = useTransform(mouseX, (x: number) => {
    if (!itemRef.current) return '50%';
    const rect = itemRef.current.getBoundingClientRect();
    const percent = ((x - rect.left) / rect.width) * 100;
    return `${Math.max(0, Math.min(100, percent))}%`;
  });

  const lightY = useTransform(mouseY, (y: number) => {
    if (!itemRef.current) return '50%';
    const rect = itemRef.current.getBoundingClientRect();
    const percent = ((y - rect.top) / rect.height) * 100;
    return `${Math.max(0, Math.min(100, percent))}%`;
  });

  const lightAngle = useTransform(
    [mouseX, mouseY],
    ([x, y]: number[]) => {
      if (!itemRef.current) return 180;
      const rect = itemRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const deltaX = x - centerX;
      const deltaY = y - centerY;
      return (Math.atan2(deltaY, deltaX) * 180) / Math.PI + 90;
    }
  );

  if (isMirrorTemplate) {
    return (
      <motion.a
        ref={itemRef}
        href={item.href}
        className="relative px-4 py-2 rounded-lg overflow-hidden"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Mirror Surface Background */}
        <motion.div
          className="absolute inset-0 mirror-frosted rounded-lg"
          style={{
            opacity: isHovered ? 1 : 0,
          }}
        >
          {/* Cursor-driven radial light */}
          <motion.div
            className="absolute inset-0 pointer-events-none rounded-lg"
            style={{
              background: `radial-gradient(circle 150px at ${lightX} ${lightY}, rgba(255, 255, 255, 0.15) 0%, transparent 70%)`,
              opacity: isHovered ? 0.6 : 0,
            }}
          />
          {/* Cursor-driven directional light */}
          <motion.div
            className="absolute inset-0 pointer-events-none rounded-lg"
            style={{
              background: `linear-gradient(${lightAngle}deg, rgba(255, 255, 255, 0.1) 0%, transparent 50%)`,
              opacity: isHovered ? 0.5 : 0,
            }}
          />
        </motion.div>
        {/* Text */}
        <span className="relative z-10 text-sm font-medium text-white/90">
          {item.name}
        </span>
      </motion.a>
    );
  }

  // Default behavior for other templates
  const isLightMode = currentTemplate === "ai-template-light";
  const isAIChat = item.isSpecial;
  
  if (isAIChat) {
    return (
      <motion.a
        key={item.name}
        href={item.href}
        className="text-base md:text-lg font-bold transition-all relative px-4 py-2 inline-flex items-center justify-center overflow-visible"
        style={{
          color: '#06b6d4',
          backgroundColor: 'transparent',
          border: 'none',
          outline: 'none',
          textDecoration: 'none',
          background: 'transparent',
          boxShadow: 'none',
          position: 'relative',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
        } as React.CSSProperties}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1 }}
        whileHover={{ y: -2, scale: 1.05, color: '#0891b2' }}
      >
        {/* SVG Snake Border with inline styles */}
        <svg
          className="ai-chat-snake-border about-svg"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            pointerEvents: 'none',
            overflow: 'visible',
            zIndex: 0,
            backgroundColor: 'transparent',
            background: 'transparent',
            fill: 'none',
          } as React.CSSProperties}
          viewBox="0 0 200 60"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id={`snakeGradient-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#06b6d4" />
              <stop offset="50%" stopColor="#a855f7" />
              <stop offset="100%" stopColor="#ec4899" />
            </linearGradient>
          </defs>
          <rect
            x="4"
            y="4"
            width="192"
            height="52"
            fill="none"
            stroke={`url(#snakeGradient-${index})`}
            strokeWidth="8"
            className="snake-border-rect"
            style={{
              stroke: `url(#snakeGradient-${index})`,
              strokeWidth: '8',
              strokeDasharray: '80 320',
              strokeDashoffset: 0,
              animation: 'snakeRotate 5s linear infinite',
              filter: 'drop-shadow(0 0 4px rgba(6, 182, 212, 0.6)) drop-shadow(0 0 8px rgba(168, 85, 247, 0.4)) drop-shadow(0 0 12px rgba(236, 72, 153, 0.3))',
              fill: 'none',
            } as React.CSSProperties & { stroke: string }}
          />
        </svg>
        
        {/* Text with proper z-index */}
        <span
          style={{
            position: 'relative',
            zIndex: 10,
            fontWeight: 'bold',
            whiteSpace: 'nowrap',
            color: '#06b6d4',
            backgroundColor: 'transparent',
            display: 'inline-block',
          } as React.CSSProperties}
        >
          {item.name}
        </span>
      </motion.a>
    );
  }
  
  return (
    <motion.a
      key={item.name}
      href={item.href}
      className="text-base md:text-lg font-bold transition-all relative px-3 py-2"
      style={{ color: '#06b6d4' }}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -2, scale: 1, color: '#2563eb' }}
    >
      {item.name}
      <motion.div
        className="absolute -bottom-1 left-0 right-0 h-1 rounded-full bg-gradient-to-r from-blue-500 to-purple-600"
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.3 }}
      />
    </motion.a>
  );
}
