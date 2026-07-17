"use client";

import { useState } from "react";
import axios from "axios";
import { Bot, User, Send, Loader2, Sparkles } from "lucide-react";

export default function AIChatAssistant() {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!message.trim()) return;

    try {
      setLoading(true);

      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/ai/chat`,
        {
          message,
        }
      );

      setResponse(data.reply);
    } catch (error) {
      console.error(error);
      setResponse("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xl overflow-hidden">

      {/* Header */}
      <div className="bg-gradient-to-r from-violet-600 to-indigo-600 p-6 text-white">
        <div className="flex items-center gap-3">
          <Bot className="w-8 h-8" />

          <div>
            <h2 className="text-2xl font-bold">
              AI Chat Assistant
            </h2>

            <p className="text-violet-100 text-sm">
              Ask anything and receive AI-powered responses.
            </p>
          </div>
        </div>
      </div>

      {/* Chat */}
      <div className="p-6 space-y-6">

        {/* User */}
        {message && (
          <div className="flex gap-3">
            <div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center">
              <User size={18} />
            </div>

            <div className="bg-slate-100 dark:bg-slate-800 rounded-2xl px-4 py-3 max-w-xl">
              {message}
            </div>
          </div>
        )}

        {/* AI */}
        {response && (
          <div className="flex gap-3">
            <div className="w-10 h-10 rounded-full bg-violet-600 text-white flex items-center justify-center">
              <Sparkles size={18} />
            </div>

            <div className="bg-violet-50 dark:bg-slate-800 rounded-2xl px-4 py-3 max-w-xl whitespace-pre-wrap">
              {response}
            </div>
          </div>
        )}

        {/* Input */}
        <div className="border-t border-slate-200 dark:border-slate-700 pt-6 flex gap-3">
          <textarea
            rows={3}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Ask anything..."
            className="flex-1 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 px-4 py-3 outline-none focus:ring-2 focus:ring-violet-500 resize-none"
          />

          <button
            onClick={sendMessage}
            disabled={loading}
            className="h-fit bg-violet-600 hover:bg-violet-700 text-white rounded-xl px-5 py-3 flex items-center gap-2 transition"
          >
            {loading ? (
              <Loader2 className="animate-spin" size={18} />
            ) : (
              <>
                <Send size={18} />
                Send
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}