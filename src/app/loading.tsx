export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950">

      <div className="text-center">

        <div className="w-16 h-16 border-4 border-violet-600 border-t-transparent rounded-full animate-spin mx-auto"></div>

        <h2 className="mt-6 text-xl font-semibold text-slate-900 dark:text-white">
          Loading AI Workspace...
        </h2>

        <p className="mt-2 text-slate-500">
          Please wait while we prepare your experience.
        </p>

      </div>

    </div>
  );
}