"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { Copy, Loader2, Sparkles, Wand2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useSession } from "@/lib/auth-client";

const contentTypes = [
  "Blog",
  "Email",
  "Facebook Post",
  "Instagram Caption",
  "LinkedIn Post",
  "Product Description",
];

export default function AIContentGenerator() {
  const [type, setType] = useState("Blog");
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);



  const router = useRouter();

  const { data: session, isPending } = useSession();



  useEffect(() => {

    if(!isPending && !session){
      router.replace("/login");
    }

  }, [session, isPending, router]);



  if(isPending){
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        Loading...
      </div>
    );
  }



  if(!session){
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        Redirecting...
      </div>
    );
  }

  const generateContent = async () => {
    if (!prompt.trim()) return;

    try {
      setLoading(true);

      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/ai/content`,
        {
          type,
          prompt,
        }
      );

      setResult(data.content);
    } catch (error) {
      console.error(error);
      setResult("Failed to generate content. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const copyContent = async () => {
    if (!result) return;

    await navigator.clipboard.writeText(result);
    alert("Content copied!");
  };

  return (
    <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xl overflow-hidden">

      {/* Header */}
      <div className="bg-gradient-to-r from-pink-600 to-violet-600 p-6 text-white">
        <div className="flex items-center gap-3">
          <Sparkles className="w-8 h-8" />

          <div>
            <h2 className="text-2xl font-bold">
              AI Content Generator
            </h2>

            <p className="text-pink-100">
              Generate high-quality content in seconds.
            </p>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="p-6 space-y-6">

        <div>
          <label className="font-semibold mb-2 block">
            Content Type
          </label>

          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="w-full rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 px-4 py-3"
          >
            {contentTypes.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="font-semibold mb-2 block">
            Prompt
          </label>

          <textarea
            rows={6}
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Describe what you want AI to generate..."
            className="w-full rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 px-4 py-3 resize-none"
          />
        </div>

        <button
          onClick={generateContent}
          disabled={loading}
          className="w-full rounded-xl bg-violet-600 hover:bg-violet-700 text-white py-3 font-semibold flex justify-center items-center gap-2"
        >
          {loading ? (
            <>
              <Loader2 className="animate-spin" size={18} />
              Generating...
            </>
          ) : (
            <>
              <Wand2 size={18} />
              Generate Content
            </>
          )}
        </button>

        {result && (
          <div className="rounded-2xl bg-slate-100 dark:bg-slate-800 p-5">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-lg">
                Generated Content
              </h3>

              <button
                onClick={copyContent}
                className="flex items-center gap-2 text-violet-600 hover:text-violet-700"
              >
                <Copy size={18} />
                Copy
              </button>
            </div>

            <div className="whitespace-pre-wrap leading-7 text-slate-700 dark:text-slate-300">
              {result}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}