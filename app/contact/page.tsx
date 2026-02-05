export default function Page() {
  return (
    <main>
      <section className="mx-auto max-w-6xl px-6 py-20">
        <h1 className="font-serif text-4xl">Contact</h1>
        <p className="mt-6 max-w-3xl text-zinc-700 leading-7">
          For project reviews, governance setup, or hands-on support, reach out to
          discuss scope and timing.
        </p>
        <div className="mt-8 rounded-md border border-zinc-200 bg-white p-6">
          <p className="text-sm text-zinc-600">Email</p>
          <p className="mt-2 text-lg">
            <a className="underline" href="mailto:hello@saintconsulting.nl">
              hello@saintconsulting.nl
            </a>
          </p>
        </div>
      </section>

      <footer className="bg-slate-700 text-white">
        <div className="mx-auto max-w-6xl px-6 py-6 text-sm opacity-90">
          (c) {new Date().getFullYear()} Saint Consulting
        </div>
      </footer>
    </main>
  );
}
