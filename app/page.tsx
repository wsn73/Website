const NAV = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Engagements", href: "/engagements" },
  { label: "Contact", href: "/contact" },
];

const PILLARS = [
  {
    title: "Decision-making",
    body:
      "Explicit, fact-based decisions taken at the right level, with clear ownership and understood consequences.",
  },
  {
    title: "Governance & structure",
    body:
      "Practical governance that fits the project context and supports delivery rather than constraining it.",
  },
  {
    title: "Execution support",
    body:
      "Hands-on senior support to stabilise teams and progress projects during critical phases.",
  },
];

const ENGAGEMENTS = [
  {
    title: "Project Reviews",
    body:
      "Independent assessments of decision readiness, execution maturity and key risks to support stage-gate and investment decisions.",
  },
  {
    title: "Project Governance Setup",
    body:
      "Design and implementation of practical project governance and project management frameworks tailored to the organisation and project context.",
  },
  {
    title: "Hands-on Project Support",
    body:
      "Senior, pragmatic support embedded in the project team to strengthen decision-making, coordination and delivery during critical phases.",
  },
];

function Card({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-md border border-zinc-200 bg-white p-8">
      <h3 className="font-serif text-xl">{title}</h3>
      <p className="mt-4 text-sm leading-6 text-zinc-700">{body}</p>
    </div>
  );
}

export default function Page() {
  return (
    <main>
      {/* Top bar */}
      <header className="bg-slate-700 text-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="font-serif text-lg tracking-wide">Saint</div>
          <nav className="flex gap-6 text-sm">
            {NAV.map((i) => (
              <a
                key={i.href}
                href={i.href}
                className="opacity-90 hover:opacity-100"
              >
                {i.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pt-16">
        <h1 className="font-serif text-center text-5xl leading-tight">
          Saint Consulting
        </h1>
        <p className="font-serif mt-3 text-center text-2xl text-zinc-800">
          Predictable delivery of complex investment projects
        </p>

        <div className="mx-auto mt-10 max-w-3xl text-center">
          <p className="text-lg leading-8 text-zinc-800">
            Large investment projects often struggle not because of a lack of expertise,
            but because decisions are unclear, responsibilities are blurred, or governance
            does not support the reality of the project.
          </p>
          <p className="mt-6 text-lg leading-8 text-zinc-800">
            Saint helps organisations regain control by bringing structure, facts and facilitation
            to critical decision moments, from early development through execution.
          </p>
        </div>

        {/* 3 pillars */}
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {PILLARS.map((p) => (
            <Card key={p.title} title={p.title} body={p.body} />
          ))}
        </div>
      </section>

      {/* Engagements */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="font-serif text-center text-3xl">Engagements</h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {ENGAGEMENTS.map((e) => (
            <Card key={e.title} title={e.title} body={e.body} />
          ))}
        </div>
      </section>

      {/* About */}
      <section className="mx-auto max-w-6xl px-6 pb-20">
        <h2 className="font-serif text-3xl">About</h2>
        <p className="mt-4 max-w-3xl text-zinc-700 leading-7">
          Saint Consulting supports organisations with decision clarity, governance that fits the real project,
          and hands-on execution support—integrating the right project data and documentation into day-to-day delivery
          so decisions are traceable and teams stay aligned.
        </p>
      </section>

      {/* Contact */}
      <section className="bg-zinc-50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="font-serif text-3xl">Contact</h2>
          <p className="mt-4 text-zinc-700">
            Email: <a className="underline" href="mailto:hello@saintconsulting.nl">hello@saintconsulting.nl</a>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-700 text-white">
        <div className="mx-auto max-w-6xl px-6 py-6 text-sm opacity-90">
          © {new Date().getFullYear()} Saint Consulting
        </div>
      </footer>
    </main>
  );
}
