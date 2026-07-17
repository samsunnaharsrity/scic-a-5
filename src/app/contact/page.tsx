"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, Loader2 } from "lucide-react";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa6";
import toast, { Toaster } from "react-hot-toast";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);

  // ফর্ম সাবমিশন হ্যান্ডলার
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // ডেমো টাইমআউট
    setTimeout(() => {
      setLoading(false);
      toast.success("Message sent successfully! We'll get back to you soon.", {
        duration: 4000,
        position: 'top-right',
      });
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <main className="bg-white dark:bg-zinc-950">
      <Toaster /> {/* Toast Notification Container */}

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-violet-950 via-indigo-900 to-slate-950 py-28 text-white">
        <div className="container mx-auto px-6 text-center">
          <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-md">
            Contact Us
          </span>
          <h1 className="mt-6 text-5xl font-bold md:text-6xl">Let's Build Something Amazing</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300">
            Have questions or need support? Our team is here to help you build the future with AI.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24">
        <div className="container mx-auto px-6 grid gap-12 lg:grid-cols-2">
          
          {/* Contact Form */}
          <div className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-lg dark:border-zinc-800 dark:bg-zinc-900">
            <h2 className="mb-8 text-3xl font-bold text-zinc-900 dark:text-white">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              {[
                { label: "Full Name", type: "text", placeholder: "John Doe" },
                { label: "Email", type: "email", placeholder: "john@example.com" },
                { label: "Subject", type: "text", placeholder: "How can we help?" },
              ].map((field) => (
                <div key={field.label}>
                  <label className="mb-2 block text-sm font-medium">{field.label}</label>
                  <input
                    required
                    type={field.type}
                    placeholder={field.placeholder}
                    className="w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 outline-none focus:border-violet-600 dark:border-zinc-700 dark:bg-zinc-800"
                  />
                </div>
              ))}
              <div>
                <label className="mb-2 block text-sm font-medium">Message</label>
                <textarea required rows={4} className="w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 outline-none focus:border-violet-600 dark:border-zinc-700 dark:bg-zinc-800" />
              </div>

              <button 
                disabled={loading}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-violet-600 px-6 py-4 font-semibold text-white transition hover:bg-violet-700 disabled:opacity-70"
              >
                {loading ? <Loader2 className="h-5 w-5 animate-spin" /> : <Send className="h-5 w-5" />}
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

          {/* Contact Info (সামান্য ডিজাইন আপডেট করা হয়েছে) */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold">Contact Information</h2>
            <div className="space-y-6">
              {[
                { icon: Mail, title: "Email", info: "support@agenticai.com" },
                { icon: Phone, title: "Phone", info: "+880 1234-567890" },
                { icon: MapPin, title: "Office", info: "Dhaka, Bangladesh" },
                { icon: Clock, title: "Working Hours", info: "Mon - Fri • 9:00 AM - 6:00 PM" },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 rounded-2xl border border-zinc-200 p-6 dark:border-zinc-800">
                  <item.icon className="text-violet-600 h-6 w-6" />
                  <div>
                    <p className="font-semibold">{item.title}</p>
                    <p className="text-sm text-zinc-500">{item.info}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}