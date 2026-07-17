import AIContentGenerator from "@/app/components/commonPage/AIContentGenerator";


export default function ContentGeneratorPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-10">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-6">
          AI Content Generator
        </h1>

        <AIContentGenerator />
      </div>
    </div>
  );
}