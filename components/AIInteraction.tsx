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
  const isDark = currentTemplate === "ai-template-dark";
  const isBwMode = currentTemplate === "ai-template-light";

  useEffect(() => {
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
              isTyping: true,
            };
          }
          return newMessages;
        });
        index++;
      } else {
        clearInterval(typingInterval);
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
    }, 15);
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

    const typingMessage: Message = {
      id: `typing-${Date.now()}`,
      text: "",
      isUser: false,
      isTyping: true,
    };

    setMessages((prev) => [...prev, typingMessage]);

    const aiResponseData = await fetchAIResponse(userMessage.text, updatedMessages);

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

    typeMessage(aiResponseData.message, typingMessage.id, () => {});
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

    const typingMessage: Message = {
      id: `typing-${Date.now()}`,
      text: "",
      isUser: false,
      isTyping: true,
    };

    setMessages((prev) => [...prev, typingMessage]);

    const aiResponseData = await fetchAIResponse(prompt.text, updatedMessages);

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

    typeMessage(aiResponseData.message, typingMessage.id, () => {});
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
    <section id="ai-interaction" ref={ref} className="relative py-32 overflow-hidden">
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
              className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-4 ${
                isDark 
                  ? 'gradient-text' 
                  : 'gradient-text'
              }`}
            >
              Ask Me Anything
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className={`text-xl max-w-2xl mx-auto ${isDark ? 'text-white/80' : 'text-gray-700'}`}
            >
              Chat with AI to get instant answers about my experience, skills, and projects
            </motion.p>
          </motion.div>

          {/* Chat Container */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className={`rounded-3xl overflow-hidden flex flex-col h-[600px] shadow-2xl border-2 ${
              isDark 
                ? 'bg-gradient-to-br from-cyan-500/20 via-purple-500/20 to-pink-500/20 backdrop-blur-2xl border-cyan-400/40 shadow-cyan-500/30' 
                : isBwMode
                  ? 'bg-white border-purple-100 shadow-lg'
                  : 'bg-white border-gray-200 shadow-lg'
            }`}
          >
            {/* Chat Header */}
            <div className={`flex items-center justify-between p-5 border-b ${
              isDark 
                ? 'border-cyan-400/20 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 backdrop-blur-sm' 
                : 'border-gray-200 bg-white'
            }`}>
              <div className="flex items-center gap-3">
                <motion.div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500"
                  animate={{ 
                    boxShadow: [
                      '0 0 20px rgba(59, 130, 246, 0.3)',
                      '0 0 30px rgba(139, 92, 246, 0.4)',
                      '0 0 20px rgba(59, 130, 246, 0.3)'
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Bot className="w-6 h-6 text-white" />
                </motion.div>
                <div>
                  <h3 className={`font-bold text-lg ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    AI Assistant
                  </h3>
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${isTyping ? 'animate-pulse' : ''} ${isDark ? 'bg-cyan-400' : 'bg-cyan-500'}`}></div>
                    <p className={`text-xs font-medium ${isDark ? 'text-cyan-200' : 'text-gray-600'}`}>
                      {isTyping ? 'Typing...' : 'Online'}
                    </p>
                  </div>
                </div>
              </div>
              {messages.length > 0 && (
                  <button
                    onClick={clearChat}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                      isDark 
                        ? 'text-white/70 hover:text-white hover:bg-white/10' 
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    Clear
                  </button>
              )}
            </div>

            {/* Messages Area */}
            <div className={`flex-1 overflow-y-auto p-4 space-y-4 ${
              isDark 
                ? 'bg-gradient-to-b from-transparent via-cyan-500/5 to-purple-500/5' 
                : 'bg-white'
            }`}>
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
                    className="mb-6"
                  >
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500 flex items-center justify-center shadow-2xl">
                      <Bot className="w-10 h-10 text-white" />
                    </div>
                  </motion.div>
                  <p className={`text-lg mb-2 font-bold ${
                    isDark 
                      ? 'bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent' 
                      : 'gradient-text'
                  }`}>
                    Start a conversation
                  </p>
                  <p className={`text-sm ${isDark ? 'text-white/70' : 'text-gray-600'}`}>
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
                        <motion.div 
                          className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500"
                          whileHover={{ scale: 1.1 }}
                        >
                          <Bot className="w-5 h-5 text-white" />
                        </motion.div>
                      )}
                      <div className={`max-w-[75%] rounded-2xl px-5 py-4 ${
                        message.isUser
                          ? isDark 
                            ? 'bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 text-white shadow-lg'
                            : 'bg-white border-2 border-gray-200 text-gray-800 shadow-md'
                          : isDark 
                            ? 'bg-gradient-to-br from-cyan-500/30 via-purple-500/30 to-pink-500/30 backdrop-blur-xl border border-cyan-400/40 text-white shadow-xl shadow-cyan-500/30'
                            : 'bg-white border-2 border-gray-200 text-gray-800 shadow-md'
                      }`}>
                        {message.isTyping && !message.text ? (
                          <div className="flex items-center gap-2">
                            <Loader2 className={`w-4 h-4 animate-spin ${isDark ? 'text-white' : 'text-purple-500'}`} />
                            <span className={`text-sm ${isDark ? 'text-white' : 'text-gray-600'}`}>
                              AI is thinking...
                            </span>
                          </div>
                        ) : (
                          <div className="space-y-3">
                            <p className={`text-sm leading-relaxed whitespace-pre-wrap ${isDark ? 'text-white' : ''}`}>
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
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition-all shadow-lg bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 text-white hover:shadow-xl"
                              >
                                <Download className="w-5 h-5" />
                                <span>Download Resume</span>
                              </motion.a>
                            )}
                          </div>
                        )}
                      </div>
                      {message.isUser && (
                        <motion.div 
                          className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500"
                          whileHover={{ scale: 1.1 }}
                        >
                          <span className="text-xs font-bold text-white">
                            You
                          </span>
                        </motion.div>
                      )}
                    </motion.div>
                  ))}
                  <div ref={messagesEndRef} />
                </AnimatePresence>
              )}
            </div>

            {/* Quick Prompts */}
            {messages.length === 0 && (
              <div className={`px-4 pb-4 pt-3 border-t ${
                isDark 
                  ? 'border-cyan-400/20 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 backdrop-blur-sm' 
                  : 'border-gray-200 bg-white'
              }`}>
                <p className={`text-xs font-medium mb-3 ${isDark ? 'text-white/70' : 'text-gray-600'}`}>
                  Quick questions:
                </p>
                <div className="flex flex-wrap gap-2">
                  {AI_PROMPTS.map((prompt) => (
                    <motion.button
                      key={prompt.id}
                      onClick={() => handlePromptClick(prompt)}
                      disabled={isTyping}
                      className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all disabled:opacity-50 disabled:cursor-not-allowed ${
                        isDark 
                          ? 'backdrop-blur-sm shadow-md glass border border-cyan-400/30 text-white hover:border-cyan-400/60 hover:bg-cyan-500/20 hover:shadow-lg hover:shadow-cyan-500/30' 
                          : 'bg-white border-2 border-gray-200 text-gray-700 hover:border-purple-400 hover:bg-purple-50 shadow-sm hover:shadow-md'
                      }`}
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {prompt.text}
                    </motion.button>
                  ))}
                </div>
              </div>
            )}

            {/* Chat Input */}
            <div className={`p-5 border-t ${
              isDark 
                ? 'border-cyan-400/20 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 backdrop-blur-sm' 
                : 'border-gray-200 bg-white'
            }`}>
              <div className="flex gap-3">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  disabled={isTyping}
                  className={`flex-1 px-5 py-4 rounded-2xl text-sm font-medium transition-all disabled:opacity-50 ${
                    isDark 
                      ? 'backdrop-blur-xl glass border border-cyan-400/30 text-white placeholder:text-white/60 focus:border-cyan-400 focus:ring-4 focus:ring-cyan-400/30 shadow-xl shadow-cyan-500/20' 
                      : 'bg-white border-2 border-gray-200 text-gray-900 placeholder:text-gray-400 focus:border-purple-400 focus:ring-4 focus:ring-purple-100 shadow-sm'
                  } focus:outline-none`}
                />
                <motion.button
                  onClick={handleSend}
                  disabled={!input.trim() || isTyping}
                  className={`px-8 py-4 rounded-2xl font-bold flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all ${
                    isDark 
                      ? 'shadow-xl bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 text-white hover:shadow-2xl hover:shadow-purple-500/50' 
                      : 'shadow-lg bg-gradient-to-r from-blue-500 via-purple-400 to-pink-500 text-white hover:shadow-xl hover:shadow-purple-500/30'
                  }`}
                  whileHover={{ 
                    scale: input.trim() && !isTyping ? 1.05 : 1,
                    boxShadow: isDark && input.trim() && !isTyping ? "0 20px 40px rgba(139, 92, 246, 0.4)" : undefined
                  }}
                  whileTap={{ scale: input.trim() && !isTyping ? 0.95 : 1 }}
                >
                  <span className="flex items-center gap-2 text-white">
                    {isTyping ? (
                      <Loader2 className="w-5 h-5 animate-spin text-white" />
                    ) : (
                      <Send className="w-5 h-5 text-white" />
                    )}
                    {!isTyping && <span className="hidden sm:inline text-white">Send</span>}
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