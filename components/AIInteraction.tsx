"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { Send, Bot, Loader2, Sparkles, Download } from "lucide-react";
import { AI_PROMPTS, PERSONAL_INFO } from "@/lib/constants";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { useTemplate } from "@/context/TemplateContext";

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  isTyping?: boolean;
  showResumeButton?: boolean;
}

export function AIInteraction() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { currentTemplate } = useTemplate();
  const isBwMode = currentTemplate === "ai-template-light";

  useEffect(() => {
    // Auto-scroll to bottom when new messages arrive
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  }, [messages]);

  const typeMessage = (text: string, messageId: string, callback: () => void) => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index < text.length) {
        setMessages((prev) => {
          const newMessages = [...prev];
          const messageIndex = newMessages.findIndex(m => m.id === messageId);
          if (messageIndex !== -1) {
            newMessages[messageIndex] = {
              ...newMessages[messageIndex],
              text: text.slice(0, index + 1),
              isTyping: true, // Keep typing indicator while typing
            };
          }
          return newMessages;
        });
        index++;
      } else {
        clearInterval(typingInterval);
        // Mark typing as complete
        setMessages((prev) => {
          const newMessages = [...prev];
          const messageIndex = newMessages.findIndex(m => m.id === messageId);
          if (messageIndex !== -1) {
            newMessages[messageIndex] = {
              ...newMessages[messageIndex],
              text: text,
              isTyping: false,
            };
          }
          return newMessages;
        });
        setIsTyping(false);
        callback();
      }
    }, 15); // Typing speed (15ms per character for smooth effect)
  };

  const fetchAIResponse = async (userMessage: string, conversationHistory: Message[]) => {
    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: userMessage,
          conversationHistory: conversationHistory.map(msg => ({
            text: msg.text,
            isUser: msg.isUser,
          })),
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to get AI response');
      }

      const data = await response.json();
      return {
        message: data.message,
        showResumeButton: data.showResumeButton || false
      };
    } catch (error) {
      console.error('AI API Error:', error);
      return {
        message: "I'm having trouble right now. Please contact me at bhavinondhiya0@gmail.com or try again later.",
        showResumeButton: false
      };
    }
  };

  const handleSend = async () => {
    if (!input.trim() || isTyping) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: input.trim(),
      isUser: true,
    };

    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInput("");
    setIsTyping(true);

    // Add typing indicator
    const typingMessage: Message = {
      id: `typing-${Date.now()}`,
      text: "",
      isUser: false,
      isTyping: true,
    };

    setMessages((prev) => [...prev, typingMessage]);

    // Fetch AI response from Groq API
    const aiResponseData = await fetchAIResponse(userMessage.text, updatedMessages);

    // Update typing message with resume button flag
    setMessages((prev) => {
      const newMessages = [...prev];
      const messageIndex = newMessages.findIndex(m => m.id === typingMessage.id);
      if (messageIndex !== -1) {
        newMessages[messageIndex] = {
          ...newMessages[messageIndex],
          showResumeButton: aiResponseData.showResumeButton,
        };
      }
      return newMessages;
    });

    // Start typing animation after getting response
    typeMessage(aiResponseData.message, typingMessage.id, () => {
      // Animation complete
    });
  };

  const handlePromptClick = async (prompt: typeof AI_PROMPTS[0]) => {
    if (isTyping) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: prompt.text,
      isUser: true,
    };

    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setIsTyping(true);

    // Add typing indicator
    const typingMessage: Message = {
      id: `typing-${Date.now()}`,
      text: "",
      isUser: false,
      isTyping: true,
    };

    setMessages((prev) => [...prev, typingMessage]);

    // Fetch AI response from Groq API
    const aiResponseData = await fetchAIResponse(prompt.text, updatedMessages);

    // Update typing message with resume button flag
    setMessages((prev) => {
      const newMessages = [...prev];
      const messageIndex = newMessages.findIndex(m => m.id === typingMessage.id);
      if (messageIndex !== -1) {
        newMessages[messageIndex] = {
          ...newMessages[messageIndex],
          showResumeButton: aiResponseData.showResumeButton,
        };
      }
      return newMessages;
    });

    // Start typing animation after getting response
    typeMessage(aiResponseData.message, typingMessage.id, () => {
      // Animation complete
    });
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const clearChat = () => {
    setMessages([]);
    setInput("");
    setIsTyping(false);
  };

  return (
    <section id="ai-interaction" ref={ref} className={`relative py-32 overflow-hidden ${isBwMode ? 'bg-white' : ''}`}>
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <motion.h2 
              variants={fadeInUp}
              className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-4 ${isBwMode ? 'text-black' : 'gradient-text'}`}
            >
              Ask Me Anything
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className={`text-xl max-w-2xl mx-auto ${isBwMode ? 'text-black/70' : 'text-muted-foreground'}`}
            >
              Chat with AI to get instant answers about my experience, skills, and projects
            </motion.p>
          </motion.div>

          {/* Chat Container */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className={`rounded-2xl overflow-hidden flex flex-col h-[600px] ${
              isBwMode
                ? 'bg-white border-2 border-gray-200 shadow-lg'
                : 'glass border border-border'
            }`}
          >
            {/* Chat Header */}
            <div className={`flex items-center justify-between p-4 border-b ${
              isBwMode ? 'border-gray-200' : 'border-border'
            }`}>
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  isBwMode 
                    ? 'bg-blue-100' 
                    : 'bg-gradient-to-br from-cyan-400 to-purple-500'
                }`}>
                  <Bot className={`w-6 h-6 ${isBwMode ? 'text-blue-600' : 'text-white'}`} />
                </div>
                <div>
                  <h3 className={`font-semibold ${isBwMode ? 'text-black' : 'text-white'}`}>
                    AI Assistant
                  </h3>
                  <p className={`text-xs ${isBwMode ? 'text-black/60' : 'text-muted-foreground'}`}>
                    {isTyping ? 'Typing...' : 'Online'}
                  </p>
                </div>
              </div>
              {messages.length > 0 && (
                <button
                  onClick={clearChat}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                    isBwMode
                      ? 'text-black/70 hover:bg-gray-100'
                      : 'text-muted-foreground hover:bg-white/10'
                  }`}
                >
                  Clear
                </button>
              )}
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.length === 0 ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex flex-col items-center justify-center h-full text-center py-12"
                >
                  <motion.div
                    animate={{
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                      scale: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                      rotate: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                    }}
                    className={`mb-6 ${isBwMode ? 'text-blue-400' : 'text-cyan-400'}`}
                  >
                    <Bot className="w-16 h-16" />
                  </motion.div>
                  <p className={`text-lg mb-2 ${isBwMode ? 'text-black/70' : 'text-muted-foreground'}`}>
                    Start a conversation
                  </p>
                  <p className={`text-sm ${isBwMode ? 'text-black/50' : 'text-muted-foreground/70'}`}>
                    Ask me anything or choose a quick question below
                  </p>
                </motion.div>
              ) : (
                <AnimatePresence>
                  {messages.map((message) => (
                    <motion.div
                      key={message.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className={`flex gap-3 ${message.isUser ? 'justify-end' : 'justify-start'}`}
                    >
                      {!message.isUser && (
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                          isBwMode 
                            ? 'bg-blue-100' 
                            : 'bg-gradient-to-br from-cyan-400 to-purple-500'
                        }`}>
                          <Bot className={`w-4 h-4 ${isBwMode ? 'text-blue-600' : 'text-white'}`} />
                        </div>
                      )}
                      <div className={`max-w-[75%] rounded-2xl px-4 py-3 ${
                        message.isUser
                          ? isBwMode
                            ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                            : 'bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/30'
                          : isBwMode
                          ? 'bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-blue-200 text-gray-800 shadow-sm'
                          : 'bg-gradient-to-br from-cyan-500/20 via-purple-500/20 to-pink-500/20 backdrop-blur-md border border-cyan-400/30 text-white shadow-lg shadow-cyan-500/20'
                      }`}>
                        {message.isTyping && !message.text ? (
                          <div className="flex items-center gap-1">
                            <Loader2 className="w-4 h-4 animate-spin" />
                            <span className={`text-sm ${isBwMode ? 'text-black/70' : 'text-white/70'}`}>
                              AI is thinking...
                            </span>
                          </div>
                        ) : (
                          <div className="space-y-3">
                            <p className={`text-sm leading-relaxed whitespace-pre-wrap ${
                              message.isUser ? 'text-white' : isBwMode ? 'text-black' : 'text-white'
                            }`}>
                              {message.text || ''}
                            </p>
                            {message.showResumeButton && !message.isUser && (
                              <motion.a
                                href={PERSONAL_INFO.resume}
                                download
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all shadow-lg ${
                                  isBwMode
                                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700'
                                    : 'bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 text-white hover:from-cyan-600 hover:via-purple-600 hover:to-pink-600 shadow-purple-500/30'
                                }`}
                              >
                                <Download className="w-5 h-5" />
                                <span>Download Resume</span>
                              </motion.a>
                            )}
                          </div>
                        )}
                      </div>
                      {message.isUser && (
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                          isBwMode ? 'bg-gray-200' : 'bg-white/10'
                        }`}>
                          <span className={`text-xs font-semibold ${isBwMode ? 'text-black' : 'text-white'}`}>
                            You
                          </span>
                        </div>
                      )}
                    </motion.div>
                  ))}
                  <div ref={messagesEndRef} />
                </AnimatePresence>
              )}
            </div>

            {/* Quick Prompts */}
            {messages.length === 0 && (
              <div className={`px-4 pb-4 border-t ${isBwMode ? 'border-gray-200' : 'border-border'}`}>
                <p className={`text-xs font-medium mb-3 ${isBwMode ? 'text-black/60' : 'text-muted-foreground'}`}>
                  Quick questions:
                </p>
                <div className="flex flex-wrap gap-2">
                  {AI_PROMPTS.map((prompt) => (
                    <motion.button
                      key={prompt.id}
                      onClick={() => handlePromptClick(prompt)}
                      disabled={isTyping}
                      className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all disabled:opacity-50 disabled:cursor-not-allowed ${
                        isBwMode
                          ? 'bg-gray-100 text-black hover:bg-gray-200 border border-gray-200'
                          : 'glass border border-border text-white hover:border-[var(--accent-primary)]/50'
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {prompt.text}
                    </motion.button>
                  ))}
                </div>
              </div>
            )}

            {/* Chat Input */}
            <div className={`p-4 border-t ${isBwMode ? 'border-gray-200' : 'border-border'}`}>
              <div className="flex gap-3">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  disabled={isTyping}
                  className={`flex-1 px-4 py-3 rounded-xl text-sm ${
                    isBwMode
                      ? "bg-white border-2 border-gray-200 text-black placeholder:text-black/40 focus:border-blue-400"
                      : "glass border border-border text-white placeholder:text-white/50 focus:border-[var(--accent-primary)]"
                  } focus:outline-none transition-all disabled:opacity-50`}
                />
                <motion.button
                  onClick={handleSend}
                  disabled={!input.trim() || isTyping}
                  className={`px-6 py-3 rounded-xl font-semibold flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all relative overflow-hidden ${
                    isBwMode
                      ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-lg hover:shadow-purple-500/40"
                      : "bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 text-white hover:shadow-lg hover:shadow-purple-500/40"
                  }`}
                  whileHover={{ scale: input.trim() && !isTyping ? 1.05 : 1 }}
                  whileTap={{ scale: input.trim() && !isTyping ? 0.95 : 1 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />
                  <span className="relative z-10 flex items-center gap-2">
                    {isTyping ? (
                      <Loader2 className="w-5 h-5 animate-spin" />
                    ) : (
                      <Send className="w-5 h-5" />
                    )}
                  </span>
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
