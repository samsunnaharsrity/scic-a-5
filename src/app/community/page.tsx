export default function CommunityPage() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold">Community</h1>

      <p className="mt-4 text-slate-600">
        Join our growing AI community to share ideas, ask questions, and connect
        with developers and AI enthusiasts.
      </p>

      <div className="mt-10 grid md:grid-cols-3 gap-6">
        <div className="border rounded-xl p-6">
          <h2 className="font-semibold">Discussion</h2>
          <p className="mt-2 text-slate-600">
            Share experiences and discuss AI topics.
          </p>
        </div>

        <div className="border rounded-xl p-6">
          <h2 className="font-semibold">Events</h2>
          <p className="mt-2 text-slate-600">
            Stay updated with webinars and AI workshops.
          </p>
        </div>

        <div className="border rounded-xl p-6">
          <h2 className="font-semibold">Feedback</h2>
          <p className="mt-2 text-slate-600">
            Help improve AI Hub by sharing your suggestions.
          </p>
        </div>
      </div>
    </section>
  );
}