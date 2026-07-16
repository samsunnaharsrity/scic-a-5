"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Sparkles,
  ArrowRight,
  Play,
  CheckCircle,
  MessageSquare,
  BarChart3,
  Lightbulb,
  FileText,
  Users,
  Layers,
  Cpu,
  Bot
} from "lucide-react";

export default function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY, currentTarget } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    // Normalize coordinates from -1 to 1, then scale down for subtle parallax
    const x = ((clientX - left) / width - 0.5) * 35;
    const y = ((clientY - top) / height - 0.5) * 35;
    setMousePosition({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
  };

  // Avatar group images for demonstration (using standard premium color placeholder initials)
  const users = [
    { name: "Alex", color: "bg-violet-500" },
    { name: "Sarah", color: "bg-indigo-500" },
    { name: "John", color: "bg-emerald-500" },
    { name: "Elena", color: "bg-amber-500" }
  ];

  return (
    <section
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative overflow-hidden pt-20 pb-20 lg:pt-28 lg:pb-28 border-b border-zinc-200/50 dark:border-zinc-800/50 transition-colors duration-300"
    >
      {/* Background Glows & Circles */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        {/* Breathing backdrop glow 1 */}
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.35, 0.45, 0.35]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -top-1/4 left-1/4 w-[600px] h-[600px] bg-violet-600/10 dark:bg-violet-600/5 rounded-full blur-[130px]"
        />
        {/* Breathing backdrop glow 2 */}
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.25, 0.35, 0.25]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-indigo-600/10 dark:bg-indigo-600/5 rounded-full blur-[130px]"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT CONTENT COLUMN */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            {/* Small Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/25 dark:border-violet-500/20 text-xs font-semibold text-violet-600 dark:text-violet-400 mb-6 shadow-sm select-none"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>AI Platform for Smarter Solutions</span>
            </motion.div>

            {/* Large Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.08] text-zinc-900 dark:text-white mb-6"
            >
              Your All-in-One{" "}
              <span className="relative inline-block">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-indigo-600 dark:from-violet-400 dark:to-indigo-400">
                  Agentic AI
                </span>
                <span className="absolute -bottom-1 left-0 w-full h-[3px] bg-gradient-to-r from-violet-600 to-indigo-600 dark:from-violet-400 dark:to-indigo-400 rounded-full" />
              </span>{" "}
              Platform
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
              className="text-base sm:text-lg text-zinc-655 dark:text-zinc-400 leading-relaxed mb-8 max-w-xl"
            >
              Generate, analyze, recommend and automate everything with intelligent AI tools. Empower your team with autonomous AI workflows designed to scale.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
              className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto mb-8"
            >
              <Link
                href="/signup"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-750 hover:to-indigo-750 shadow-md shadow-violet-500/10 active:scale-[0.98] transition-all select-none"
              >
                <span>Get Started Free</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/features"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors select-none"
              >
                <span>Explore Features</span>
              </Link>
            </motion.div>

            {/* Trusted Users Pile */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex items-center gap-3 select-none"
            >
              <div className="flex -space-x-2">
                {users.map((user, idx) => (
                  <div
                    key={idx}
                    className={`w-7.5 h-7.5 rounded-full ring-2 ring-white dark:ring-zinc-950 ${user.color} flex items-center justify-center text-[10px] font-bold text-white shadow-sm`}
                  >
                    {user.name[0]}
                  </div>
                ))}
                <div className="w-7.5 h-7.5 rounded-full ring-2 ring-white dark:ring-zinc-950 bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 flex items-center justify-center text-[9px] font-bold shadow-sm">
                  +12
                </div>
              </div>
              <span className="text-xs font-semibold text-zinc-500 dark:text-zinc-400">
                Loved by <span className="text-zinc-900 dark:text-white font-bold">25K+</span> users worldwide
              </span>
            </motion.div>
          </div>

          {/* RIGHT COLUMN (ROBOT ILLUSTRATION & INTERACTIVE FLOATING CARDS) */}
          <div className="lg:col-span-6 relative flex items-center justify-center min-h-[460px] sm:min-h-[520px]">
            
            {/* Robot Image Base Frame */}
            <motion.div
              animate={{
                y: [0, -10, 0],
                rotateZ: [0, 0.5, 0]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{
                x: mousePosition.x * 0.3,
                y: mousePosition.y * 0.3
              }}
              className="relative w-72 h-72 sm:w-85 sm:h-85 rounded-full bg-gradient-to-tr from-violet-500/10 to-indigo-500/10 border border-violet-500/15 dark:border-violet-500/10 flex items-center justify-center shadow-xl shadow-violet-500/2"
            >
              <div className="absolute inset-4 rounded-full bg-white/40 dark:bg-zinc-950/40 backdrop-blur-md border border-white/50 dark:border-zinc-900/50 flex items-center justify-center overflow-hidden">
                <Image
                  src="/robot.png"
                  alt="3D AI Robot illustration representing autonomous workflow execution"
                  width={340}
                  height={340}
                  priority
                  className="object-contain drop-shadow-2xl brightness-105"
                />
              </div>
            </motion.div>

            {/* FLOATING CARD 1: Smart Assistant */}
            <motion.div
              animate={{
                x: mousePosition.x * 0.6,
                y: [mousePosition.y * 0.6 - 4, mousePosition.y * 0.6 + 4, mousePosition.y * 0.6 - 4]
              }}
              transition={{
                y: { repeat: Infinity, duration: 4.5, ease: "easeInOut" },
                x: { type: "spring", stiffness: 80, damping: 15 }
              }}
              className="absolute top-8 left-0 sm:left-4 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md border border-zinc-200/50 dark:border-zinc-800/50 p-3 rounded-xl shadow-lg flex items-center gap-3 max-w-[170px]"
            >
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                <Bot className="w-4 h-4" />
              </div>
              <div className="truncate">
                <h4 className="text-[11px] font-bold text-zinc-900 dark:text-white">Smart Assistant</h4>
                <p className="text-[9px] text-emerald-600 dark:text-emerald-400 font-semibold mt-0.5 flex items-center gap-1">
                  <span className="w-1 h-1 rounded-full bg-emerald-500 animate-ping" />
                  <span>Agent running</span>
                </p>
              </div>
            </motion.div>

            {/* FLOATING CARD 2: Content Generator */}
            <motion.div
              animate={{
                x: mousePosition.x * -0.5,
                y: [mousePosition.y * -0.5 + 4, mousePosition.y * -0.5 - 4, mousePosition.y * -0.5 + 4]
              }}
              transition={{
                y: { repeat: Infinity, duration: 5.2, ease: "easeInOut" },
                x: { type: "spring", stiffness: 85, damping: 18 }
              }}
              className="absolute top-16 right-0 sm:right-6 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md border border-zinc-200/50 dark:border-zinc-800/50 p-3.5 rounded-xl shadow-lg flex items-start gap-3 max-w-[190px]"
            >
              <div className="w-8 h-8 rounded-lg bg-violet-500/10 text-violet-600 dark:text-violet-400 flex items-center justify-center shrink-0">
                <FileText className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-[11px] font-bold text-zinc-900 dark:text-white">Content Gen</h4>
                <p className="text-[9px] text-zinc-500 dark:text-zinc-400 mt-1 leading-normal italic">
                  &quot;Writing blog outline...&quot;
                </p>
              </div>
            </motion.div>

            {/* FLOATING CARD 3: Data Analyzer */}
            <motion.div
              animate={{
                x: mousePosition.x * 0.7,
                y: [mousePosition.y * 0.7 + 6, mousePosition.y * 0.7 - 6, mousePosition.y * 0.7 + 6]
              }}
              transition={{
                y: { repeat: Infinity, duration: 4.8, ease: "easeInOut" },
                x: { type: "spring", stiffness: 75, damping: 14 }
              }}
              className="absolute bottom-16 left-2 sm:left-10 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md border border-zinc-200/50 dark:border-zinc-800/50 p-3.5 rounded-xl shadow-lg flex flex-col gap-2 min-w-[150px]"
            >
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-1.5">
                  <BarChart3 className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
                  <span className="text-[10px] font-bold text-zinc-900 dark:text-white">Data Analyzer</span>
                </div>
                <span className="text-[9px] bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold px-1.5 py-0.5 rounded">
                  +42%
                </span>
              </div>
              <div className="flex items-end gap-1 h-6 pt-1">
                <div className="w-2 bg-indigo-500 dark:bg-indigo-400 rounded-t h-[30%]" />
                <div className="w-2 bg-indigo-500 dark:bg-indigo-400 rounded-t h-[60%]" />
                <div className="w-2 bg-indigo-500 dark:bg-indigo-400 rounded-t h-[45%]" />
                <div className="w-2 bg-indigo-600 dark:bg-indigo-400 rounded-t h-[90%]" />
              </div>
            </motion.div>

            {/* FLOATING CARD 4: Recommendations */}
            <motion.div
              animate={{
                x: mousePosition.x * -0.6,
                y: [mousePosition.y * -0.6 - 5, mousePosition.y * -0.6 + 5, mousePosition.y * -0.6 - 5]
              }}
              transition={{
                y: { repeat: Infinity, duration: 5.6, ease: "easeInOut" },
                x: { type: "spring", stiffness: 90, damping: 16 }
              }}
              className="absolute bottom-8 right-2 sm:right-8 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md border border-zinc-200/50 dark:border-zinc-800/50 p-3 rounded-xl shadow-lg flex items-center gap-2.5 max-w-[180px]"
            >
              <div className="w-7.5 h-7.5 rounded-lg bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0">
                <Lightbulb className="w-3.5 h-3.5" />
              </div>
              <div>
                <h4 className="text-[10px] font-bold text-zinc-900 dark:text-white">Recommendations</h4>
                <p className="text-[8px] text-zinc-500 dark:text-zinc-400 truncate mt-0.5">Optimize model cache</p>
              </div>
            </motion.div>

          </div>
        </div>

        {/* BOTTOM STATS CARD ROW */}
        <div className="mt-20 border-t border-zinc-200/50 dark:border-zinc-800/50 pt-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {[
              { val: "25K+", desc: "Active Users" },
              { val: "3.2M+", desc: "Tasks Automated" },
              { val: "98%", desc: "Accuracy Rate" },
              { val: "50+", desc: "Specialist Tools" }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * i + 0.3 }}
                className="relative p-5 rounded-2xl bg-white dark:bg-zinc-900/40 border border-zinc-200/50 dark:border-zinc-800/50 hover:border-violet-500/30 hover:bg-zinc-100/50 dark:hover:bg-zinc-900/80 transition-all shadow-xs flex flex-col items-center text-center group"
              >
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Sparkles className="w-3 h-3 text-violet-500/70" />
                </div>
                <span className="text-2xl sm:text-3xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-indigo-600 dark:from-violet-400 dark:to-indigo-400">
                  {stat.val}
                </span>
                <span className="text-[10px] sm:text-xs font-semibold text-zinc-500 dark:text-zinc-400 mt-1 uppercase tracking-wider">
                  {stat.desc}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
