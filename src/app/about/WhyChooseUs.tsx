import {
  ShieldCheck,
  Rocket,
  Headphones,
  Sparkles,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Enterprise-Grade Security",
    description:
      "Protect your data with advanced encryption, secure authentication, and privacy-first architecture.",
  },
  {
    icon: Rocket,
    title: "High Performance",
    description:
      "Lightning-fast AI responses powered by scalable cloud infrastructure and optimized workflows.",
  },
  {
    icon: Sparkles,
    title: "Smart AI Automation",
    description:
      "Automate repetitive tasks with intelligent AI agents that learn and improve over time.",
  },
  {
    icon: Headphones,
    title: "24/7 Expert Support",
    description:
      "Our dedicated team is always available to help you succeed with your AI projects.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-6">

        {/* Heading */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-flex items-center rounded-full bg-violet-100 dark:bg-violet-900/40 px-4 py-1 text-sm font-medium text-violet-600 dark:text-violet-300">
            Why Choose AgenticAI
          </span>

          <h2 className="mt-5 text-4xl font-bold tracking-tight">
            Why Thousands of Teams Trust Our AI Platform
          </h2>

          <p className="mt-4 text-muted-foreground text-lg">
            We combine cutting-edge AI technology, enterprise-grade security,
            and exceptional performance to help businesses automate smarter.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="group rounded-2xl border border-border bg-card p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-violet-500 hover:shadow-2xl"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-violet-100 text-violet-600 dark:bg-violet-900/40 dark:text-violet-300 group-hover:scale-110 transition-transform">
                  <Icon className="h-7 w-7" />
                </div>

                <h3 className="mb-3 text-xl font-semibold">
                  {feature.title}
                </h3>

                <p className="text-sm leading-7 text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 rounded-3xl bg-gradient-to-r from-violet-600 to-indigo-600 p-10 text-center text-white shadow-xl">
          <h3 className="text-3xl font-bold">
            Ready to Build with AI?
          </h3>

          <p className="mt-3 text-violet-100 max-w-2xl mx-auto">
            Join thousands of developers, startups, and enterprises using
            AgenticAI to automate workflows and accelerate innovation.
          </p>

          <button className="mt-8 rounded-xl bg-white px-8 py-3 font-semibold text-violet-700 transition hover:bg-violet-100">
            Get Started Free
          </button>
        </div>

      </div>
    </section>
  );
}