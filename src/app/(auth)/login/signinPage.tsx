"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Eye, EyeOff } from "lucide-react";
import toast from "react-hot-toast";
import { authClient } from "@/lib/auth-client";

const SigninPage = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectTo = searchParams.get("redirect") || "/";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email")?.toString() ?? "";
    const password = form.get("password")?.toString() ?? "";

    if (!email || !password) {
      toast.error("Email and password are required.");
      return;
    }

    const toastId = toast.loading("Signing in...");
    try {
      setLoading(true);
      const result = await authClient.signIn.email({
        email,
        password,
        rememberMe: true,
        callbackURL: redirectTo,
      });

      if (result?.error) {
        toast.error(result.error.message || "Login failed", { id: toastId });
        return;
      }

      toast.success("Login successful", { id: toastId });
      router.push(redirectTo);
    } catch (error) {
      toast.error("Invalid credentials", { id: toastId });
    } finally {
      setLoading(false);
    }
  };



  // demo credentials

  const demoEmail = "demo@example.com";
const demoPassword = "Demo@123456";

const copyText = async (text: string, label: string) => {
  await navigator.clipboard.writeText(text);
  toast.success(`${label} copied`);
};

const fillDemoCredentials = () => {
  (
    document.querySelector(
      'input[name="email"]'
    ) as HTMLInputElement
  ).value = demoEmail;

  (
    document.querySelector(
      'input[name="password"]'
    ) as HTMLInputElement
  ).value = demoPassword;

  toast.success("Demo credentials filled");
};

  return (
    <section className="min-h-screen flex items-center justify-center px-4 bg-[#F8F9FC] dark:bg-[#020617] transition-colors duration-300 py-20">
      {/* Card - Background White in light, slate-900 in dark */}
      <div className="w-full max-w-md rounded-3xl border border-[#E5E7EB] dark:border-slate-800 bg-white dark:bg-slate-900 p-8 shadow-xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Welcome Back</h1>
          <p className="mt-2 text-slate-600 dark:text-slate-400">Sign in to your account to continue</p>
        </div>




        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email Field */}
          <div>
            <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Email Address</label>
            <input
              name="email"
              type="email"
              required
              placeholder="you@example.com"
              className="w-full mt-2 h-12 px-4 rounded-xl border border-[#E5E7EB] dark:border-slate-700 bg-[#F9FAFB] dark:bg-slate-800 text-slate-900 dark:text-white outline-none focus:ring-4 focus:ring-[rgba(109,76,255,0.15)] focus:border-[#6D4CFF] transition"
            />
          </div>

          {/* Password Field */}
          <div>
            <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Password</label>
            <div className="relative mt-2">
              <input
                name="password"
                type={showPassword ? "text" : "password"}
                required
                placeholder="••••••••"
                className="w-full h-12 px-4 pr-12 rounded-xl border border-[#E5E7EB] dark:border-slate-700 bg-[#F9FAFB] dark:bg-slate-800 text-slate-900 dark:text-white outline-none focus:ring-4 focus:ring-[rgba(109,76,255,0.15)] focus:border-[#6D4CFF] transition"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          <div className="flex justify-end">
            <Link href="/forgot-password" className="text-sm text-[#6D4CFF] hover:underline">
              Forgot Password?
            </Link>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full h-12 rounded-xl bg-[#6D4CFF] text-white font-semibold hover:bg-[#5B3EF5] transition-all duration-300 disabled:opacity-70"
          >
            {loading ? "Signing In..." : "Sign In"}
          </button>
        </form>

        {/* Divider */}
        <div className="relative my-6">
          <div className="border-t border-[#E5E7EB] dark:border-slate-700"></div>
          <span className="absolute left-1/2 -translate-x-1/2 -top-3 px-3 bg-white dark:bg-slate-900 text-sm text-slate-500 dark:text-slate-400">OR</span>
        </div>

        {/* Google Login */}
        <button
          onClick={() => authClient.signIn.social({ provider: "google", callbackURL: redirectTo })}
          className="w-full h-12 rounded-xl border border-[#E5E7EB] dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 font-medium hover:bg-slate-50 dark:hover:bg-slate-700 transition"
        >
          Continue with Google
        </button>

        {/* Demo Credentials */}
<div className="my-5 rounded-xl border border-[#6D4CFF]/20 bg-[#F5F3FF] dark:bg-slate-800 px-4 py-3">
  <div className="flex items-center justify-between">
    <div>
      <p className="text-sm font-semibold text-slate-900 dark:text-white">
        🚀 Demo Account
      </p>
      <p className="text-xs text-slate-600 dark:text-slate-400">
        demo@example.com | Demo@123456
      </p>
    </div>

    <div className="flex gap-2">
      <button
        type="button"
        onClick={() => copyText(demoEmail, "Email")}
        className="text-xs text-[#6D4CFF] hover:underline"
      >
        Copy
      </button>

      <button
        type="button"
        onClick={fillDemoCredentials}
        className="rounded-md bg-[#6D4CFF] px-3 py-1.5 text-xs text-white hover:bg-[#5B3EF5]"
      >
        Fill
      </button>
    </div>
  </div>
</div>

        {/* Footer */}
        <p className="text-center text-sm text-slate-600 dark:text-slate-400 mt-6">
          Don't have an account?{" "}
          <Link href="/register" className="font-medium text-[#6D4CFF] hover:underline">
            Create Account
          </Link>


        </p>
      </div>
    </section>
  );
};

export default SigninPage;