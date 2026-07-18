export default function HelpPage() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold">Help Center</h1>

      <p className="mt-4 text-slate-600 dark:text-slate-400">
        Welcome to the AI Hub Help Center. Find answers to common questions,
        troubleshoot issues, and learn how to use our AI tools effectively.
      </p>

      <div className="mt-10 space-y-6">
        <div className="rounded-xl border p-6">
          <h2 className="font-semibold text-xl">Account & Login</h2>
          <p className="mt-2 text-slate-600">
            Learn how to create an account, sign in, reset your password, and
            manage your profile.
          </p>
        </div>

        <div className="rounded-xl border p-6">
          <h2 className="font-semibold text-xl">Using AI Tools</h2>
          <p className="mt-2 text-slate-600">
            Discover how to use AI Chat, Content Generator, Recommendation,
            Document Analyzer, and other AI features.
          </p>
        </div>

        <div className="rounded-xl border p-6">
          <h2 className="font-semibold text-xl">Need More Help?</h2>
          <p className="mt-2 text-slate-600">
            Contact our support team through the Contact page.
          </p>
        </div>
      </div>
    </section>
  );
}