export default function ToolCardSkeleton() {
  return (
    <div className="animate-pulse rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden bg-white dark:bg-slate-900">
      <div className="h-44 w-full bg-slate-200 dark:bg-slate-800" />

      <div className="p-5 space-y-3">
        <div className="h-5 w-3/4 rounded bg-slate-200 dark:bg-slate-800" />

        <div className="h-4 w-1/2 rounded bg-slate-200 dark:bg-slate-800" />

        <div className="flex justify-between mt-5">
          <div className="h-4 w-12 rounded bg-slate-200 dark:bg-slate-800" />
          <div className="h-4 w-16 rounded bg-slate-200 dark:bg-slate-800" />
        </div>

        <div className="h-10 rounded-xl bg-slate-200 dark:bg-slate-800 mt-5" />
      </div>
    </div>
  );
}