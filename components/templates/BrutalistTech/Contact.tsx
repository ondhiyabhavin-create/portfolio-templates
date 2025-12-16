"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { PERSONAL_INFO } from "@/lib/constants";

export function BrutalistContact() {
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
    <section id="contact" ref={ref} className="relative py-20 brutalist-tech bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ x: -100, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.3, ease: "linear" }}
            className="font-black uppercase text-6xl mb-12"
          >
            CONTACT
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Form */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.3, delay: 0.1, ease: "linear" }}
            >
              <form onSubmit={handleSubmit} className="space-y-4">
                <input type="hidden" name="_captcha" value="false" />
                <div>
                  <label className="block font-bold uppercase mb-2 text-sm">NAME</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full brutal-border p-4 font-mono"
                    required
                  />
                </div>
                <div>
                  <label className="block font-bold uppercase mb-2 text-sm">EMAIL</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full brutal-border p-4 font-mono"
                    required
                  />
                </div>
                <div>
                  <label className="block font-bold uppercase mb-2 text-sm">MESSAGE</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={6}
                    className="w-full brutal-border p-4 font-mono resize-none"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="brutal-border bg-black text-white px-8 py-4 font-bold uppercase hover:bg-red-600 transition-colors w-full"
                >
                  SEND
                </button>
              </form>
            </motion.div>

            {/* Info */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.3, delay: 0.2, ease: "linear" }}
              className="space-y-6"
            >
              <div className="brutal-card">
                <Mail className="w-8 h-8 mb-4 text-red-600" />
                <h4 className="font-bold uppercase mb-2">EMAIL</h4>
                <p className="font-mono">{PERSONAL_INFO.email}</p>
              </div>
              <div className="brutal-card">
                <Phone className="w-8 h-8 mb-4 text-red-600" />
                <h4 className="font-bold uppercase mb-2">PHONE</h4>
                <p className="font-mono">{PERSONAL_INFO.phone}</p>
              </div>
              <div className="brutal-card">
                <MapPin className="w-8 h-8 mb-4 text-red-600" />
                <h4 className="font-bold uppercase mb-2">LOCATION</h4>
                <p className="font-mono">{PERSONAL_INFO.city}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}


