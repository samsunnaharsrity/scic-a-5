"use client";


import { Bot, Sparkles, MessageSquare } from "lucide-react";
import AIChatAssistant from "../ai-chat-assistant/page";

export default function AIChatPage() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950">
      {/* Hero Section */}
      <section className="border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
        <div className="max-w-6xl mx-auto px-4 py-16 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-violet-100 dark:bg-violet-500/20 mb-6">
            <Bot className="w-10 h-10 text-violet-600 dark:text-violet-400" />
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">
            AI Chat Assistant
          </h1>

          <p className="mt-5 max-w-2xl mx-auto text-slate-600 dark:text-slate-400 text-lg">
            Ask questions, generate ideas, solve coding problems, write content,
            and get instant AI-powered assistance.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6">
            <Sparkles className="w-8 h-8 text-violet-600 mb-4" />
            <h3 className="font-semibold text-lg text-slate-900 dark:text-white">
              Smart Responses
            </h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
              Receive fast, accurate, and context-aware AI answers.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6">
            <MessageSquare className="w-8 h-8 text-green-600 mb-4" />
            <h3 className="font-semibold text-lg text-slate-900 dark:text-white">
              Interactive Chat
            </h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
              Continue conversations naturally with your AI assistant.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6">
            <Bot className="w-8 h-8 text-blue-600 mb-4" />
            <h3 className="font-semibold text-lg text-slate-900 dark:text-white">
              Coding Help
            </h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
              Debug code, explain concepts, and generate snippets instantly.
            </p>
          </div>
        </div>
      </section>

      {/* Chat Section */}
      <section className="max-w-5xl mx-auto px-4 pb-20">
        <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-lg p-6 md:p-8">
          <AIChatAssistant />
        </div>
      </section>
    </main>
  );
}