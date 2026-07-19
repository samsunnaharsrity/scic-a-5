"use client";

import Link from "next/link";
import {
  Bot,
  FileText,
  Sparkles,
  BarChart3,
  Tags,
  Lightbulb,
  ArrowRight,
} from "lucide-react";
import ToolCardSkeleton from "../components/skeletons/ToolCardSkeleton";
import { useState } from "react";
// import { useSession } from "@/lib/auth-client";
// import { useRouter } from "next/navigation";
// import { useEffect } from "react";

const aiTools = [
  {
    id: 1,
    title: "AI Chat Assistant",
    description:
      "Chat with an intelligent AI assistant to get answers, ideas and coding help.",
    icon: Bot,
    href: "/ai-tools/chat",
    color: "bg-violet-100 text-violet-600",
    available: true,
  },
  {
    id: 2,
    title: "AI Content Generator",
    description:
      "Generate blogs, social posts, emails and marketing content instantly.",
    icon: Sparkles,
    href: "/ai-tools/content-generator",
    color: "bg-pink-100 text-pink-600",
    available: true,
  },
  {
    id: 3,
    title: "AI Document Analyzer",
    description: "Upload documents and get summaries and insights.",
    icon: FileText,
    href: "#",
    color: "bg-blue-100 text-blue-600",
    available: false,
  },
  {
    id: 4,
    title: "AI Recommendation",
    description: "Receive personalized AI recommendations.",
    icon: Lightbulb,
    href: "#",
    color: "bg-amber-100 text-amber-600",
    available: false,
  },
  {
    id: 5,
    title: "AI Data Analyzer",
    description: "Analyze CSV, Excel or JSON data.",
    icon: BarChart3,
    href: "#",
    color: "bg-green-100 text-green-600",
    available: false,
  },
  {
    id: 6,
    title: "AI Auto Tagging",
    description: "Automatically generate tags.",
    icon: Tags,
    href: "#",
    color: "bg-cyan-100 text-cyan-600",
    available: false,
  },
];
const [tools,setTools]=useState([]);
const [loading,setLoading]=useState(true);
export default function AIToolsPage() {


  // const router = useRouter();

  // const { data: session, isPending } = useSession();


  // useEffect(() => {

  //   if(!isPending && !session){
  //     router.push("/login");
  //   }

  // }, [session, isPending, router]);



  // if(isPending){
  //   return (
  //     <div className="min-h-screen flex items-center justify-center">
  //       Loading...
  //     </div>
  //   );
  // }


  // if(!session){
  //   return null;
  // }



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
    <section className="min-h-screen bg-slate-50 dark:bg-slate-950 py-14">
      <div className="max-w-7xl mx-auto px-4">

        {/* Hero */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">
            AI Workspace
          </h1>

          <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Access powerful Agentic AI tools designed to help you create,
            analyze, recommend and automate your workflow.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {aiTools.map((tool) => {
            const Icon = tool.icon;

            return (
              <div
                key={tool.id}
                className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm hover:shadow-xl transition duration-300"
              >
                <div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center ${tool.color}`}
                >
                  <Icon size={28} />
                </div>

                <h2 className="mt-5 text-xl font-bold text-slate-900 dark:text-white">
                  {tool.title}
                </h2>

                <p className="mt-3 text-sm text-slate-600 dark:text-slate-400 leading-6">
                  {tool.description}
                </p>

<div className="mt-6">
  {tool.available ? (
    <Link
      href={tool.href}
      className="inline-flex items-center gap-2 text-violet-600 font-semibold hover:gap-3 transition-all"
    >
      Open Tool
      <ArrowRight size={18} />
    </Link>
  ) : (
    <span className="inline-flex items-center rounded-full bg-slate-200 dark:bg-slate-800 px-3 py-1 text-sm font-medium text-slate-600 dark:text-slate-400">
      Coming Soon
    </span>
  )}
</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}