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
      <section className="mx-auto max-w-6xl px-6 py-20">
        <h1 className="font-serif text-4xl">Engagements</h1>
        <p className="mt-6 max-w-3xl text-zinc-700 leading-7">
          Structured, senior support to stabilise complex investment projects and
          get decisions made with clarity.
        </p>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {ENGAGEMENTS.map((e) => (
            <Card key={e.title} title={e.title} body={e.body} />
          ))}
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
