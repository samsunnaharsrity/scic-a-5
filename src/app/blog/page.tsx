"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Search,
  Calendar,
  Clock3,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import ToolCardSkeleton from "../components/skeletons/ToolCardSkeleton";
import { useState } from "react";

const categories = [
  "AI",
  "Agentic AI",
  "ChatGPT",
  "Machine Learning",
  "Automation",
  "Tutorials",
];

const blogs = [
  {
    id: 1,
    title: "Getting Started with Agentic AI",
    description:
      "Learn how autonomous AI agents are changing software development and business automation.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
    category: "Agentic AI",
    date: "July 15, 2026",
    read: "5 min read",
  },
  {
    id: 2,
    title: "Top 10 AI Tools for Developers",
    description:
      "Discover the best AI-powered tools that can improve your workflow and productivity.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
    category: "AI",
    date: "July 10, 2026",
    read: "7 min read",
  },
  {
    id: 3,
    title: "Building AI Workflows with Next.js",
    description:
      "Create scalable AI applications using Next.js, TypeScript and modern APIs.",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c",
    category: "Tutorial",
    date: "July 8, 2026",
    read: "6 min read",
  },
];

export default function BlogPage() {
  const [tools,setTools]=useState([]);
  const [loading,setLoading]=useState(true);
if (loading) {

  return (

    <section className="bg-slate-50 dark:bg-slate-950 min-h-screen py-10">

      <div className="max-w-6xl mx-auto px-4">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {[...Array(8)].map((_, index) => (

            <ToolCardSkeleton key={index} />

          ))}

        </div>

      </div>

    </section>

  );

}



return (
    <main className="bg-background">

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-violet-950 via-indigo-900 to-slate-950 py-28 text-white">
        <div className="container mx-auto px-6 text-center">

          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-md">
            <Sparkles className="h-4 w-4" />
            <span>Latest Articles</span>
          </div>

          <h1 className="mt-8 text-5xl font-bold md:text-6xl">
            AI Insights & Resources
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300">
            Explore tutorials, AI trends, productivity guides, and engineering
            insights from the AgenticAI team.
          </p>

          {/* Search */}
          <div className="mx-auto mt-10 flex max-w-xl items-center rounded-xl bg-white px-4 py-3 text-black">
            <Search className="mr-3 h-5 w-5 text-gray-500" />
            <input
              type="text"
              placeholder="Search articles..."
              className="w-full bg-transparent outline-none"
            />
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-10">
        <div className="container mx-auto px-6 flex flex-wrap justify-center gap-4">
          {categories.map((cat) => (
            <button
              key={cat}
              className="rounded-full border px-5 py-2 transition hover:bg-violet-600 hover:text-white"
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Featured */}
      <section className="container mx-auto px-6 py-10">
        <div className="grid gap-10 lg:grid-cols-2 items-center">
{/* 
          <Image
            src={blogs[0].image}
            alt={blogs[0].title}
            width={700}
            height={500}
            className="rounded-3xl object-cover"
          /> */}

          <div>
            <span className="rounded-full bg-violet-100 px-4 py-1 text-sm font-medium text-violet-600">
              Featured
            </span>

            <h2 className="mt-5 text-4xl font-bold">
              {blogs[0].title}
            </h2>

            <p className="mt-6 text-muted-foreground">
              {blogs[0].description}
            </p>

            <div className="mt-6 flex gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                {blogs[0].date}
              </span>

              <span className="flex items-center gap-2">
                <Clock3 className="h-4 w-4" />
                {blogs[0].read}
              </span>
            </div>

            <Link
              href="/blog/1"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-violet-600 px-6 py-3 text-white hover:bg-violet-700"
            >
              Read Article
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>

        </div>
      </section>

      {/* Latest Blogs */}
      <section className="container mx-auto px-6 py-20">

        <h2 className="mb-12 text-center text-4xl font-bold">
          Latest Articles
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="overflow-hidden rounded-3xl border bg-card shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
            >
              {/* <Image
                src={blog.image}
                alt={blog.title}
                width={500}
                height={300}
                className="h-60 w-full object-cover"
              /> */}

              <div className="p-6">

                <span className="rounded-full bg-violet-100 px-3 py-1 text-xs font-semibold text-violet-600">
                  {blog.category}
                </span>

                <h3 className="mt-4 text-2xl font-bold">
                  {blog.title}
                </h3>

                <p className="mt-3 text-muted-foreground">
                  {blog.description}
                </p>

                <div className="mt-6 flex justify-between text-sm text-muted-foreground">
                  <span>{blog.date}</span>
                  <span>{blog.read}</span>
                </div>

                <Link
                  href={`/blog/${blog.id}`}
                  className="mt-6 inline-flex items-center gap-2 text-violet-600 font-semibold"
                >
                  Read More
                  <ArrowRight className="h-4 w-4" />
                </Link>

              </div>
            </div>
          ))}

        </div>

      </section>

      {/* Newsletter */}
      <section className="py-20">
        <div className="container mx-auto px-6">

          <div className="rounded-3xl bg-gradient-to-r from-violet-950 to-indigo-900 p-12 text-center text-white">

            <h2 className="text-4xl font-bold">
              Stay Updated
            </h2>

            <p className="mt-4 text-violet-100">
              Subscribe to receive the latest AI articles, tutorials, and product updates.
            </p>

            <div className="mx-auto mt-8 flex max-w-lg">

              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-l-xl px-4 py-3 text-black bg-white/70 outline-black"
              />

              <button className="rounded-r-xl bg-white/70 px-6 font-semibold text-black">
                Subscribe
              </button>

            </div>

          </div>

        </div>
      </section>

    </main>
  );
}