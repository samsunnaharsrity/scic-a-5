import React from "react";
import HeroSection from "@/app/components/hero-section";
import {
  Code,
  Shield,
  Zap,
  CheckCircle,
  Database,
  Cpu,
  BarChart3,
  Play,
  ArrowRight

} from "lucide-react";

export default function Home() {
  return (
    <main className="flex-1 bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50 transition-colors duration-300">
      
      {/* HERO SECTION */}
      <HeroSection />

      {/* AGENTS FEATURES SECTION */}
      <section className="py-20 border-t border-zinc-200/50 dark:border-zinc-800/50 bg-white dark:bg-zinc-950/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl mb-4">
              Pre-built Specialists Ready To Go
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base leading-relaxed">
              No need to build from scratch. Launch pre-configured agents to accelerate your development, support, and business workflows instantly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Code className="w-6 h-6 text-violet-600 dark:text-violet-400" />,
                title: "Developer Agent",
                desc: "Write unit tests, analyze pull requests, and optimize component performance. Integrates with GitHub & GitLab."
              },
              {
                icon: <Database className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />,
                title: "Data Indexer",
                desc: "Ingest CSV, PDFs, Notion pages, and database tables. Provides a vector-based knowledge query system for your AI bots."
              },
              {
                icon: <Shield className="w-6 h-6 text-purple-600 dark:text-purple-400" />,
                title: "Guardrails Gatekeeper",
                desc: "Filter unsafe content, protect API credentials, verify prompt compliance, and enforce privacy standards automatically."
              }
            ].map((feature, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:border-violet-500/50 dark:hover:border-violet-500/30 hover:shadow-xl hover:shadow-violet-500/5 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-violet-50 dark:bg-violet-950/30 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-base font-bold text-zinc-900 dark:text-white mb-2">{feature.title}</h3>
                <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US SCROLLING TEST SECTION */}
      <section className="py-20 border-t border-zinc-200/50 dark:border-zinc-800/50 bg-zinc-50 dark:bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white mb-6">
                Why Teams Choose AgenticAI for Production workloads
              </h2>
              <p className="text-zinc-650 dark:text-zinc-400 text-sm leading-relaxed mb-8">
                Unlike wrappers, our platform uses autonomous execution loops that run on isolated serverless workers, ensuring complete stability, speed, and safety.
              </p>
              <div className="space-y-4">
                {[
                  "Serverless compute with automatic memory management",
                  "Built-in guardrails preventing looping resource consumption",
                  "Deep telemetry logs showing token metrics and performance analytics",
                  "Instant integrations with Slack, Discord, HubSpot, and GitHub"
                ].map((point, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 font-medium">{point}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: <Zap className="w-5 h-5" />, title: "Sub-second response", val: "940ms" },
                { icon: <BarChart3 className="w-5 h-5" />, title: "Tokens per second", val: "12,500" },
                { icon: <Cpu className="w-5 h-5" />, title: "Active AI workflows", val: "24.5k" },
                { icon: <Play className="w-5 h-5" />, title: "Server Uptime", val: "99.99%" }
              ].map((stat, i) => (
                <div key={i} className="p-5 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm flex flex-col gap-1.5">
                  <div className="text-violet-600 dark:text-violet-400">{stat.icon}</div>
                  <span className="text-2xl font-extrabold tracking-tight text-zinc-900 dark:text-white mt-2">{stat.val}</span>
                  <span className="text-[11px] text-zinc-500 dark:text-zinc-400 font-semibold uppercase tracking-wider">{stat.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

<section className="py-20 lg:py-28">
  <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="relative rounded-3xl bg-gradient-to-r from-purple-600 via-indigo-600 to-pink-500 text-white p-10 sm:p-12 lg:p-16 overflow-hidden shadow-2xl text-center ring-1 ring-white/10 backdrop-blur-lg">
      {/* Decorative glow circles */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-72 bg-purple-400/20 rounded-full blur-3xl -z-10" />
      <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4">
        AI for Everyone, Everywhere
      </h2>
      <p className="text-purple-100 text-sm sm:text-base leading-relaxed mb-8 max-w-xl mx-auto">
        Whether you are a student, developer, marketer or business owner, our AI tools help you work faster.
      </p>
      <button className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white text-purple-700 font-semibold hover:bg-purple-50 transition-colors shadow-lg shadow-purple-500/20">
        Start Exploring AI Tools
      </button>
    </div>
  </div>
</section>

    </main>
  );
}
