"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Bot, Send, Sparkles } from "lucide-react";
import { AI_PROMPTS } from "@/lib/constants";
import { fadeInUp, staggerContainer, scaleIn } from "@/lib/animations";

export function AIInteraction() {
  const [selectedPrompt, setSelectedPrompt] = useState<number | null>(null);
  const [messages, setMessages] = useState<Array<{ text: string; isUser: boolean }>>([]);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handlePromptClick = (prompt: typeof AI_PROMPTS[0]) => {
    setSelectedPrompt(prompt.id);
    setMessages([
      { text: prompt.text, isUser: true },
      { text: prompt.response, isUser: false },
    ]);
  };

  return (
    <section id="ai-interaction" ref={ref} className="relative py-32 overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4">
              <Sparkles className="w-8 h-8 text-[var(--accent-primary)]" />
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold gradient-text">
                Ask AI About Me
              </h2>
            </div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get instant answers about my experience, skills, and projects
            </p>
          </motion.div>

          {/* AI Chat Interface */}
          <div className="glass rounded-2xl p-8 min-h-[500px] flex flex-col">
            {/* Chat Header */}
            <div className="flex items-center gap-3 mb-6 pb-6 border-b border-border/50">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-tertiary)] flex items-center justify-center">
                <Bot className="w-5 h-5 text-black" />
              </div>
              <div>
                <h3 className="font-semibold">AI Assistant</h3>
                <p className="text-sm text-muted-foreground">Ask me anything</p>
              </div>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 space-y-4 mb-6 overflow-y-auto">
              {messages.length === 0 ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center text-muted-foreground py-12"
                >
                  <Bot className="w-12 h-12 mx-auto mb-4 opacity-50" />
                  <p>Select a prompt below to start a conversation</p>
                </motion.div>
              ) : (
                <AnimatePresence>
                  {messages.map((message, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className={`flex ${message.isUser ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`max-w-[80%] rounded-lg p-4 ${
                          message.isUser
                            ? "bg-[var(--accent-primary)] text-[var(--primary-foreground)] shadow-lg shadow-[var(--accent-primary)]/30"
                            : "glass border border-border"
                        }`}
                      >
                        <p className="text-sm">{message.text}</p>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              )}
            </div>

            {/* Predefined Prompts */}
            <div className="space-y-3">
              <p className="text-sm text-muted-foreground mb-3">Quick prompts:</p>
              <div className="grid md:grid-cols-3 gap-3">
                {AI_PROMPTS.map((prompt) => (
                  <motion.button
                    key={prompt.id}
                    onClick={() => handlePromptClick(prompt)}
                    className={`p-4 glass rounded-lg text-left transition-all ${
                      selectedPrompt === prompt.id
                        ? "border-2 border-[var(--accent-primary)] shadow-lg shadow-[var(--accent-primary)]/20"
                        : "border border-border hover:border-[var(--accent-primary)]/50"
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <p className="text-sm font-medium">{prompt.text}</p>
                  </motion.button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

