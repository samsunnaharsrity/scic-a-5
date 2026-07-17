import {
  Users,
  Bot,
  Activity,
  ShieldCheck,
} from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "25K+",
    label: "Active Users",
  },
  {
    icon: Bot,
    value: "120+",
    label: "AI Agents",
  },
  {
    icon: Activity,
    value: "3.2M",
    label: "AI Tasks Completed",
  },
  {
    icon: ShieldCheck,
    value: "99.99%",
    label: "Platform Uptime",
  },
];

export default function CompanyStats() {
  return (
    <section className="py-10 bg-gradient-to-r from-violet-700 via-indigo-700 to-purple-700 text-white">
      <div className="container mx-auto px-6">

        {/* Heading */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-flex rounded-full bg-white/10 px-4 py-1 text-sm font-medium backdrop-blur-md">
            Company Statistics
          </span>

          <h2 className="mt-5 text-4xl font-bold">
            Trusted by Thousands Worldwide
          </h2>

          <p className="mt-4 text-violet-100">
            Businesses, developers, and startups rely on AgenticAI every day
            to automate workflows and build intelligent AI solutions.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <div
                key={index}
                className="rounded-3xl border border-white/10 bg-white/10 p-8 text-center backdrop-blur-md transition duration-300 hover:-translate-y-2 hover:bg-white/20"
              >
                <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15">
                  <Icon className="h-8 w-8 text-white" />
                </div>

                <h3 className="text-4xl font-extrabold">
                  {stat.value}
                </h3>

                <p className="mt-3 text-violet-100">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}