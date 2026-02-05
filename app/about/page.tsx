export default function Page() {
  return (
    <main>
      <section className="mx-auto max-w-6xl px-6 py-20">
        <h1 className="font-serif text-4xl">About</h1>
        <p className="mt-6 max-w-3xl text-zinc-700 leading-7">
          Saint Consulting supports organisations with decision clarity, governance
          that fits the real project, and hands-on execution support. We integrate
          the right project data and documentation into day-to-day delivery so
          decisions are traceable and teams stay aligned.
        </p>
        <p className="mt-6 max-w-3xl text-zinc-700 leading-7">
          The work is pragmatic and senior-led, focused on moments where the cost
          of ambiguity is highest: investment decisions, scope change, and project
          recovery.
        </p>
      </section>

      <footer className="bg-slate-700 text-white">
        <div className="mx-auto max-w-6xl px-6 py-6 text-sm opacity-90">
          (c) {new Date().getFullYear()} Saint Consulting
        </div>
      </footer>
    </main>
  );
}
