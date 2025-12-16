"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Heart, Send } from "lucide-react";
import { PERSONAL_INFO } from "@/lib/constants";

export function SoftCreativeContact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    form.action = "https://formsubmit.co/bhavinondhiya0@gmail.com";
    form.method = "POST";
    form.submit();
  };

  return (
    <section id="contact" ref={ref} className="relative py-32 soft-creative overflow-hidden">
      <div className="absolute bottom-0 left-0 decorative-circle w-250 h-250 opacity-15" />

      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            className="text-center mb-16"
          >
            <h2 className="font-light text-5xl md:text-6xl mb-4">
              Let's Connect
            </h2>
            <p className="text-xl text-[#8b7355]">
              I'd love to hear from you
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
            >
              <div className="soft-card">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <input type="hidden" name="_captcha" value="false" />
                  <div>
                    <label className="block mb-2 text-[#5a5a5a]">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full p-4"
                      required
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-[#5a5a5a]">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full p-4"
                      required
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-[#5a5a5a]">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={5}
                      className="w-full p-4 resize-none"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="soft-accent w-full hover:opacity-90 transition-opacity inline-flex items-center justify-center gap-2"
                  >
                    Send Message
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              </div>
            </motion.div>

            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
              className="space-y-6"
            >
              <div className="soft-card">
                <Mail className="w-8 h-8 mb-4 text-[#d4a574]" />
                <h4 className="text-xl font-light mb-2">Email</h4>
                <p className="text-[#8b7355]">{PERSONAL_INFO.email}</p>
              </div>
              <div className="soft-card">
                <Heart className="w-8 h-8 mb-4 text-[#d4a574]" />
                <h4 className="text-xl font-light mb-2">Let's Create</h4>
                <p className="text-[#8b7355]">
                  I'm always open to new projects and collaborations
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

