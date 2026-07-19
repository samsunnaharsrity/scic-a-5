"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import ToolCardSkeleton from "../components/skeletons/ToolCardSkeleton";

export default function DashboardPage() {
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();
  const [tools,setTools]=useState([]);
const [loading,setLoading]=useState(true);

  useEffect(() => {
    if (isPending) return;

    if (!session || !session.user) {
      router.replace("/login");
      return;
    }


    const rawRole = (session.user as any).role || "user";
    const userRole = String(rawRole).toLowerCase().trim();
    

    if (userRole === "admin") {
      router.replace("/dashboard/admin");
    } else {
      router.replace("/dashboard/user");
    }
  }, [session, isPending, router]);

if (loading) {
  return (
    <section className="bg-slate-50 dark:bg-slate-950 min-h-screen py-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[...Array(8)].map((_, index) => (
            <ToolCardSkeleton key={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

return (
    <div className="flex h-screen items-center justify-center">
      Redirecting to your workspace...
    </div>
  );
}