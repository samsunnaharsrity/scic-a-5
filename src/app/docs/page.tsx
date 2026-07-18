export default function DocsPage() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold">Documentation</h1>

      <p className="mt-4 text-slate-600">
        Learn how every AI tool works and how to get the best results.
      </p>

      <div className="mt-10 grid md:grid-cols-2 gap-6">
        {[
          "AI Chat Assistant",
          "Content Generator",
          "Recommendation Engine",
          "Document Analyzer",
          "Data Analyzer",
          "Auto Tagging",
        ].map((item) => (
          <div key={item} className="border rounded-xl p-6">
            <h2 className="font-semibold text-lg">{item}</h2>
            <p className="mt-2 text-slate-600">
              Learn how to use {item} effectively with practical examples.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}