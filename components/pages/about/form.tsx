"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  User,
  MessageSquare,
  Send,
  Globe,
  CheckCircle2,
} from "lucide-react";
import { BsGithub, BsInstagram, BsLinkedin, BsTwitterX } from "react-icons/bs";

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/Yanmife123/",
    icon: BsGithub,
    color: "hover:text-purple-400 hover:border-purple-500/50",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/yanmife-adegbola-1785152aa/", // Replace with your link
    icon: BsLinkedin,
    color: "hover:text-blue-400 hover:border-blue-500/50",
  },
  {
    name: "X Twitter",
    url: "",
    icon: BsTwitterX,
    color: "hover:text-emerald-400 hover:border-emerald-500/50",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/adegbolayanmife?igsh=N3gxMHEyYjBqcDMw&utm_source=qr", // Replace with your link
    icon: BsInstagram,
    color: "hover:text-pink-400 hover:border-pink-500/50",
  },
];

export default function ContactFormSection() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate submission delay
    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
    }, 1200);
  };

  return (
    <section
      className="relative w-full max-w-6xl mx-auto  pt-20 text-white"
      id="contact-form"
    >
      <div className="mx-auto px-6 md:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl font-bold font-sans leading-tight ">
            Contact <span className="text-primary">Me</span>
          </h2>
        </motion.div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Left Column: Form Section */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="p-8 rounded-2xl bg-neutral-900/60 border border-neutral-800 backdrop-blur-xl shadow-2xl"
        >
          <div className="mb-8">
            <h2 className="text-3xl font-bold tracking-tight mb-2">
              Get in Touch
            </h2>
            <p className="text-neutral-400 text-sm">
              Have a project in mind or want to collaborate? Send me a message.
            </p>
          </div>

          {isSubmitted ? (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="flex flex-col items-center justify-center py-12 text-center space-y-4"
            >
              <CheckCircle2 className="w-16 h-16 text-emerald-400" />
              <h3 className="text-xl font-semibold">Message Sent!</h3>
              <p className="text-neutral-400 text-sm max-w-xs">
                Thanks for reaching out. I'll get back to you as soon as
                possible.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="mt-4 px-4 py-2 text-xs text-neutral-300 hover:text-white underline underline-offset-4"
              >
                Send another message
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name Field */}
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-neutral-300">
                  Name
                </label>
                <div className="relative">
                  <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" />
                  <input
                    required
                    type="text"
                    placeholder="Your Name"
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-neutral-950/50 border border-neutral-800 text-sm text-neutral-200 placeholder-neutral-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
                  />
                </div>
              </div>

              {/* Email Field */}
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-neutral-300">
                  Email
                </label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" />
                  <input
                    required
                    type="email"
                    placeholder="you@example.com"
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-neutral-950/50 border border-neutral-800 text-sm text-neutral-200 placeholder-neutral-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
                  />
                </div>
              </div>

              {/* Message Field */}
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-neutral-300">
                  Message
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-3.5 top-3.5 w-4 h-4 text-neutral-500" />
                  <textarea
                    required
                    rows={4}
                    placeholder="Your message here..."
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-neutral-950/50 border border-neutral-800 text-sm text-neutral-200 placeholder-neutral-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all resize-none"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                disabled={loading}
                type="submit"
                className="w-full py-3 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-neutral-950 font-medium text-sm flex items-center justify-center gap-2 transition-colors disabled:opacity-50"
              >
                {loading ? (
                  <span>Sending...</span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </motion.button>
            </form>
          )}
        </motion.div>

        {/* Right Column: Social Links */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true }}
          className="flex flex-col justify-between h-full space-y-6 lg:pl-6"
        >
          <div>
            <h3 className="text-2xl font-bold tracking-tight mb-3">
              Let's Connect
            </h3>
            <p className="text-neutral-400 text-sm leading-relaxed mb-8">
              Prefer direct links or social media? Find me across these
              platforms or reach out directly on any channel.
            </p>

            {/* Social Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {socialLinks.map((link, idx) => {
                const Icon = link.icon;
                return (
                  <motion.a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -3 }}
                    className={`p-4 rounded-xl bg-neutral-900/40 border border-neutral-800/80 flex items-center gap-3.5 text-neutral-300 transition-all ${link.color}`}
                  >
                    <div className="p-2.5 rounded-lg bg-neutral-800/60 text-neutral-200">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-sm font-medium">{link.name}</span>
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Quick Email Note */}
          <div className="p-5 rounded-2xl bg-neutral-900/30 border border-neutral-800/50">
            <p className="text-xs text-neutral-400">
              Direct Email:{" "}
              <a
                href="mailto:yanmifeigwe@gmail.com"
                className="text-neutral-200 hover:text-emerald-400 underline underline-offset-2 transition-colors"
              >
                yanmifeigwe@gmail.com
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
