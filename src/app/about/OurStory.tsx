import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function OurStory() {
  return (
    <section className="py-24 bg-white dark:bg-zinc-950">
      <div className="container mx-auto px-6">

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Left Content */}
          <div>
            <span className="inline-flex rounded-full bg-violet-100 dark:bg-violet-900/30 px-4 py-1 text-sm font-medium text-violet-600 dark:text-violet-300">
              Our Story
            </span>

            <h2 className="mt-6 text-4xl font-bold tracking-tight text-zinc-900 dark:text-white">
              Building the Future of
              <span className="text-violet-600"> Agentic AI</span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
              Founded with a vision to make Artificial Intelligence accessible
              for everyone, AgenticAI empowers developers, startups, and
              enterprises to automate workflows, build intelligent agents, and
              accelerate innovation through cutting-edge AI technologies.
            </p>

            <p className="mt-4 text-zinc-600 dark:text-zinc-400 leading-7">
              Today, thousands of users rely on our platform to deploy secure,
              scalable, and production-ready AI solutions with confidence.
            </p>

            <button className="mt-8 inline-flex items-center gap-2 rounded-xl bg-violet-600 px-6 py-3 font-semibold text-white transition hover:bg-violet-700">
              Learn More
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>

          {/* Right Image */}
          <div className="relative">

            <div className="absolute -top-6 -left-6 h-40 w-40 rounded-full bg-violet-500/20 blur-3xl" />

            <div className="absolute -bottom-6 -right-6 h-40 w-40 rounded-full bg-indigo-500/20 blur-3xl" />

            <div className="relative overflow-hidden rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-2xl">

<Image
  src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e"
  alt="AI Technology"
  width={700}
  height={500}
  className="h-full w-full object-cover transition duration-500 hover:scale-105"
/>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}