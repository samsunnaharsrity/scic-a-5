export default function PrivacyPage() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold">Privacy Policy</h1>

      <p className="mt-6 text-slate-600 leading-8">
        AI Hub respects your privacy. We only collect information required to
        provide our AI services, improve user experience, and maintain account
        security.
      </p>

      <ul className="list-disc pl-6 mt-8 space-y-3 text-slate-600">
        <li>Your data is securely stored.</li>
        <li>We never sell personal information.</li>
        <li>You may request account deletion anytime.</li>
        <li>AI conversations may be processed to improve service quality.</li>
      </ul>
    </section>
  );
}