import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-violet-950 via-indigo-900 to-slate-950 py-20 text-white">
      {/* Background Glow */}
      <div className="absolute -top-32 left-0 h-80 w-80 rounded-full bg-violet-600/20 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-indigo-500/20 blur-3xl" />

      <div className="container relative mx-auto px-6">

        <div className="mx-auto max-w-4xl text-center">

          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-400/30 bg-white/10 px-4 py-2 backdrop-blur-md">
            <Sparkles className="h-4 w-4 text-violet-300" />
            <span className="text-sm font-medium text-violet-200">
              About AgenticAI
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-5xl font-extrabold leading-tight md:text-6xl lg:text-7xl">
            Building the Future of
            <span className="bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">
              {" "}
              Intelligent AI
            </span>
          </h1>

          {/* Description */}
          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl">
            AgenticAI empowers developers, startups, and enterprises with
            autonomous AI agents that automate workflows, boost productivity,
            and accelerate innovation.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/Explore"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-violet-600 px-8 py-4 font-semibold transition hover:bg-violet-700"
            >
              Explore AI Agents
              <ArrowRight className="h-5 w-5" />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/10 px-8 py-4 font-semibold backdrop-blur-md transition hover:bg-white/20"
            >
              Contact Us
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-2 gap-8 md:grid-cols-4">

            <div>
              <h3 className="text-3xl font-bold">25K+</h3>
              <p className="mt-2 text-sm text-slate-300">
                Active Users
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold">120+</h3>
              <p className="mt-2 text-sm text-slate-300">
                AI Agents
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold">3.2M</h3>
              <p className="mt-2 text-sm text-slate-300">
                Tasks Completed
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold">99.99%</h3>
              <p className="mt-2 text-sm text-slate-300">
                Platform Uptime
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}