type HomeProblemProps = {
  eyebrow: string;
  title: string;
  intro: string;
  symptoms: string[];
};

export default function HomeProblem({
  eyebrow,
  title,
  intro,
  symptoms,
}: HomeProblemProps) {
  return (
    <section className="border-b border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-[#90A2CF]">
            {eyebrow}
          </p>
          <h2 className="font-serif mt-3 text-4xl text-slate-900">{title}</h2>
          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-xl sm:leading-8">
            {intro}
          </p>
        </div>
        <ul className="mt-8 grid gap-4 text-base text-slate-600 sm:grid-cols-2">
          {symptoms.map((symptom) => (
            <li key={symptom} className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#4A5D93]" />
              <span>{symptom}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
