import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    avatar: "/avatars/user1.png",
    name: "Alex Johnson",
    role: "Product Manager",
    rating: 5,
    review: "AgenticAI transformed our workflow – the AI tools are lightning fast and incredibly reliable.",
  },
  {
    avatar: "/avatars/user2.png",
    name: "Maria Garcia",
    role: "Lead Engineer",
    rating: 5,
    review: "The platform's flexibility let us prototype new features in hours instead of weeks. Highly recommend!",
  },
  {
    avatar: "/avatars/user3.png",
    name: "Samir Patel",
    role: "Growth Marketer",
    rating: 5,
    review: "Our campaign ROI jumped 3x after integrating the AI content generator. Pure magic.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
          What Our Users Say
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              whileHover={{ translateY: -8, scale: 1.02 }}
              className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-6 flex flex-col items-center text-center shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-20 h-20 rounded-full overflow-hidden mb-4">
                <Image src={t.avatar} alt={t.name} width={80} height={80} className="object-cover" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">{t.name}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{t.role}</p>
              <div className="flex justify-center mb-3">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star
                    key={s}
                    className={`w-5 h-5 ${s < t.rating ? "text-yellow-400" : "text-gray-300"}`}
                  />
                ))}
              </div>
              <p className="text-gray-700 dark:text-gray-200 text-sm">{t.review}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
