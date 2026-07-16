"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Bot,
  ArrowRight,
  CheckCircle2,
  Mail,
  Sparkles
} from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
    setSubscribed(true);
    setEmail("");
  };

  const productLinks = [
    { name: "Features", href: "/features" },
    { name: "Pricing", href: "/pricing" },
    { name: "Updates", href: "/updates" },
    { name: "API Docs", href: "/api" }
  ];

  const companyLinks = [
    { name: "About", href: "/about" },
    { name: "Careers", href: "/careers" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" }
  ];

  const resourceLinks = [
    { name: "Help Center", href: "/help" },
    { name: "Documentation", href: "/docs" },
    { name: "Community", href: "/community" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" }
  ];

  const socialLinks = [
    {
      name: "Twitter",
      icon: (
        <svg className="w-4.5 h-4.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
      href: "https://twitter.com",
      hoverClass: "hover:text-sky-400 hover:border-sky-400/30 hover:bg-sky-400/5"
    },
    {
      name: "GitHub",
      icon: (
        <svg className="w-4.5 h-4.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
        </svg>
      ),
      href: "https://github.com",
      hoverClass: "hover:text-zinc-900 dark:hover:text-white hover:border-zinc-900/30 dark:hover:border-zinc-100/30 hover:bg-zinc-900/5 dark:hover:bg-white/5"
    },
    {
      name: "LinkedIn",
      icon: (
        <svg className="w-4.5 h-4.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
        </svg>
      ),
      href: "https://linkedin.com",
      hoverClass: "hover:text-blue-500 hover:border-blue-500/30 hover:bg-blue-500/5"
    },
    {
      name: "Discord",
      icon: (
        <svg className="w-4.5 h-4.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.094 13.094 0 01-1.873-.894.077.077 0 01-.008-.128c.126-.093.252-.19.372-.287a.075.075 0 01.077-.011c3.92 1.793 8.18 1.793 12.061 0a.073.073 0 01.078.009c.12.099.246.195.373.289a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.894.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.156-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.156 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.156-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.156 2.418z" />
        </svg>
      ),
      href: "https://discord.com",
      hoverClass: "hover:text-violet-500 hover:border-violet-500/30 hover:bg-violet-500/5"
    }
  ];

  return (
    <footer className="relative bg-gradient-to-b from-zinc-50 to-zinc-100 dark:from-zinc-950 dark:to-zinc-950 border-t border-zinc-200/50 dark:border-zinc-800/50 pt-16 pb-8 transition-colors duration-300 overflow-hidden">
      
      {/* Decorative Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] h-[250px] bg-violet-600/5 dark:bg-violet-500/2 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* MAIN FOOTER DIRECTORY GRID */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 pb-12 border-b border-zinc-200/50 dark:border-zinc-800/50">
          
          {/* Logo & Description */}
          <div className="md:col-span-4 flex flex-col items-start gap-4">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-gradient-to-tr from-violet-600 to-indigo-600 text-white shadow-md shadow-violet-500/10 group-hover:scale-105 transition-transform duration-300">
                <Bot className="w-5 h-5" />
              </div>
              <span className="text-lg font-bold tracking-tight text-zinc-900 dark:text-white">
                Agentic<span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-indigo-600 dark:from-violet-400 dark:to-indigo-400">AI</span>
              </span>
            </Link>
            <p className="text-xs sm:text-sm text-zinc-550 dark:text-zinc-400 leading-relaxed max-w-sm">
              Deploy autonomous AI agents that optimize codebases, manage support pipelines, and automate enterprise workflows 24/7.
            </p>
          </div>

          {/* Directory Links */}
          <div className="grid grid-cols-3 gap-4 md:col-span-5">
            {/* Product Column */}
            <div className="flex flex-col gap-3">
              <h3 className="text-xs font-bold text-zinc-900 dark:text-white uppercase tracking-wider">Product</h3>
              <ul className="flex flex-col gap-2">
                {productLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-xs text-zinc-500 dark:text-zinc-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors font-medium"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Column */}
            <div className="flex flex-col gap-3">
              <h3 className="text-xs font-bold text-zinc-900 dark:text-white uppercase tracking-wider">Company</h3>
              <ul className="flex flex-col gap-2">
                {companyLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-xs text-zinc-500 dark:text-zinc-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors font-medium"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources Column */}
            <div className="flex flex-col gap-3">
              <h3 className="text-xs font-bold text-zinc-900 dark:text-white uppercase tracking-wider">Resources</h3>
              <ul className="flex flex-col gap-2">
                {resourceLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-xs text-zinc-500 dark:text-zinc-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors font-medium"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter Column */}
          <div className="md:col-span-3 flex flex-col items-start gap-3">
            <h3 className="text-xs font-bold text-zinc-900 dark:text-white uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-violet-500" />
              <span>Stay Updated</span>
            </h3>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-normal mb-2">
              Subscribe to stay updated with new model rollouts and enterprise agent templates.
            </p>

            <AnimatePresence mode="wait">
              {!subscribed ? (
                <motion.form
                  key="subscribe-form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubscribe}
                  className="w-full flex flex-col gap-2"
                >
                  <div className="relative w-full">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
                    <input
                      type="email"
                      required
                      placeholder="you@email.com"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (error) setError("");
                      }}
                      className="w-full pl-9 pr-3 py-2 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg text-xs text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 dark:placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-violet-500 dark:focus:ring-violet-500"
                    />
                  </div>
                  
                  {error && (
                    <p className="text-[10px] text-rose-500 font-semibold mt-0.5">{error}</p>
                  )}

                  <button
                    type="submit"
                    className="w-full py-2 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-750 hover:to-indigo-750 text-white font-semibold text-xs rounded-lg shadow-sm shadow-violet-500/10 active:scale-[0.98] transition-all flex items-center justify-center gap-1 cursor-pointer"
                  >
                    <span>Subscribe</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="subscribe-success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="w-full p-3 rounded-lg border border-emerald-100 dark:border-emerald-900/30 bg-emerald-500/5 flex gap-2.5 items-start"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-emerald-600 dark:text-emerald-400">Subscription Active!</h4>
                    <p className="text-[10px] text-zinc-500 dark:text-zinc-400 mt-0.5">Check your inbox for our next issue.</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

        {/* BOTTOM METRICS AND REGULATORY ROW */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Copyright Section */}
          <div className="text-xs text-zinc-500 dark:text-zinc-500 font-medium">
            <span>&copy; {new Date().getFullYear()} AgenticAI Inc. All rights reserved.</span>
          </div>

          {/* Social Network Connections */}
          <div className="flex items-center gap-2">
            {socialLinks.map((soc) => (
              <a
                key={soc.name}
                href={soc.href}
                target="_blank"
                rel="noopener noreferrer"
                title={`Follow AgenticAI on ${soc.name}`}
                className={`w-8 h-8 rounded-lg border border-zinc-200 dark:border-zinc-800 text-zinc-550 dark:text-zinc-400 flex items-center justify-center transition-all ${soc.hoverClass}`}
              >
                {soc.icon}
              </a>
            ))}
          </div>

          {/* Quick Legal Links */}
          <div className="flex items-center gap-4 text-xs font-semibold text-zinc-500 dark:text-zinc-550">
            <Link href="/privacy" className="hover:text-violet-600 dark:hover:text-violet-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-violet-600 dark:hover:text-violet-400 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
