"use client";

import { Check, Sparkles } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "/month",
    description: "Perfect for getting started with AI tools.",
    button: "Get Started",
    featured: false,
    features: [
      "Access to AI Chat Assistant",
      "10 AI requests per day",
      "Basic AI Content Generator",
      "Community Support",
    ],
  },
  {
    name: "Pro",
    price: "$19",
    period: "/month",
    description: "Best for professionals and creators.",
    button: "Upgrade to Pro",
    featured: true,
    features: [
      "Unlimited AI Chat",
      "Unlimited Content Generation",
      "AI Recommendation Engine",
      "Document Analyzer",
      "Priority Support",
      "Export Results",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For teams and businesses with advanced needs.",
    button: "Contact Sales",
    featured: false,
    features: [
      "Everything in Pro",
      "Unlimited Team Members",
      "API Access",
      "Dedicated Account Manager",
      "Custom AI Workflows",
      "Enterprise Security",
    ],
  },
];

export default function PricingPage() {
  return (
    <section className="min-h-screen bg-slate-50 dark:bg-slate-950 py-16">
      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 rounded-full bg-violet-100 text-violet-700 px-4 py-2 text-sm font-medium">
            <Sparkles size={16} />
            Flexible Pricing
          </div>

          <h1 className="mt-6 text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">
            Choose Your Plan
          </h1>

          <p className="mt-4 max-w-2xl mx-auto text-slate-600 dark:text-slate-400">
            Start for free and upgrade anytime to unlock advanced AI tools and
            premium features.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-3">

          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-3xl border bg-white dark:bg-slate-900 p-8 shadow-sm transition hover:shadow-xl ${
                plan.featured
                  ? "border-violet-600 scale-105"
                  : "border-slate-200 dark:border-slate-800"
              }`}
            >
              {plan.featured && (
                <span className="inline-block rounded-full bg-violet-600 px-3 py-1 text-xs font-semibold text-white">
                  Most Popular
                </span>
              )}

              <h2 className="mt-5 text-2xl font-bold text-slate-900 dark:text-white">
                {plan.name}
              </h2>

              <div className="mt-4 flex items-end">
                <span className="text-5xl font-bold text-slate-900 dark:text-white">
                  {plan.price}
                </span>
                <span className="ml-2 text-slate-500">{plan.period}</span>
              </div>

              <p className="mt-4 text-slate-600 dark:text-slate-400">
                {plan.description}
              </p>

              <button
                className={`mt-8 w-full rounded-xl py-3 font-semibold transition ${
                  plan.featured
                    ? "bg-violet-600 text-white hover:bg-violet-700"
                    : "border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800"
                }`}
              >
                {plan.button}
              </button>

              <ul className="mt-8 space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <Check
                      size={18}
                      className="text-green-600 flex-shrink-0"
                    />
                    <span className="text-slate-700 dark:text-slate-300">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}