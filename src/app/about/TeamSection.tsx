import Image from "next/image";
import { FaGithub, FaLinkedinIn, FaTwitterSquare } from "react-icons/fa";

const team = [
  {
    name: "Alice Doe",
    role: "Chief Executive Officer",
    image: "https://i.pravatar.cc/300?img=5",
  },
  {
    name: "Bob Smith",
    role: "Chief Technology Officer",
    image: "https://i.pravatar.cc/300?img=12",
  },
  {
    name: "Sophia Wilson",
    role: "Head of AI Research",
    image: "https://i.pravatar.cc/300?img=32",
  },
  {
    name: "Daniel Brown",
    role: "Product Manager",
    image: "https://i.pravatar.cc/300?img=15",
  },
];

export default function TeamSection() {
  return (
    <section className="py-20 bg-white dark:bg-zinc-950">
      <div className="container mx-auto px-6">

        {/* Heading */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="mt-5 text-4xl font-bold text-zinc-900 dark:text-white">
            Meet the Team Behind AgenticAI
          </h2>

          <p className="mt-4 text-zinc-600 dark:text-zinc-400">
            Our passionate engineers, researchers, and product leaders are
            building the next generation of AI-powered solutions.
          </p>
        </div>

        {/* Team Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member) => (
            <div
              key={member.name}
              className="group rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="relative h-72 overflow-hidden">
                {/* <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                /> */}
              </div>

              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">
                  {member.name}
                </h3>

                <p className="mt-1 text-sm text-violet-600 dark:text-violet-400 font-medium">
                  {member.role}
                </p>

                <div className="mt-6 flex justify-center gap-4">
                  <a
                    href="#"
                    className="rounded-full bg-zinc-100 dark:bg-zinc-800 p-2 hover:bg-violet-600 hover:text-white transition"
                  >
                    <FaGithub className="w-5 h-5" />
                  </a>

                  <a
                    href="#"
                    className="rounded-full bg-zinc-100 dark:bg-zinc-800 p-2 hover:bg-violet-600 hover:text-white transition"
                  >
                    <FaLinkedinIn className="w-5 h-5" />
                  </a>

                  <a
                    href="#"
                    className="rounded-full bg-zinc-100 dark:bg-zinc-800 p-2 hover:bg-violet-600 hover:text-white transition"
                  >
                    <FaTwitterSquare className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}