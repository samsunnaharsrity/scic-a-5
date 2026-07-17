export default function TrustedCompanies() {
  return (
    <section className="py-16 border-y bg-white dark:bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-sm uppercase tracking-widest text-zinc-500 mb-10">
          Trusted by innovative teams worldwide
        </p>

        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 items-center opacity-70">
          <div>Google</div>
          <div>Microsoft</div>
          <div>OpenAI</div>
          <div>Vercel</div>
          <div>Notion</div>
          <div>GitHub</div>
        </div>
      </div>
    </section>
  );
}