const values = [
  { title: "Innovation", desc: "Pushing the boundaries of what is possible." },
  { title: "Integrity", desc: "Doing the right thing, even when no one is looking." },
  { title: "Customer First", desc: "Your success is our success." },
];

export default function CoreValues() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 grid md:grid-cols-3 gap-8 text-center">
        {values.map((v) => (
          <div key={v.title} className="p-6 bg-white rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold mb-2">{v.title}</h3>
            <p className="text-slate-500">{v.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}