type HomeAboutProps = {
  eyebrow: string;
  title: string;
  body: string;
  focusEyebrow: string;
  focusAreas: string[];
};

export default function HomeAbout({
  eyebrow,
  title,
  body,
  focusEyebrow,
  focusAreas,
}: HomeAboutProps) {
  return (
    <section className="border-b border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="text-xs uppercase tracking-[0.35em] text-[#90A2CF]">
              {eyebrow}
            </p>
            <h2 className="font-serif mt-3 text-4xl text-slate-900">{title}</h2>
            <p className="mt-5 text-base leading-7 text-slate-600 sm:text-xl sm:leading-8">
              {body}
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm lg:col-span-5">
            <p className="text-xs uppercase tracking-[0.35em] text-[#4A5D93]">
              {focusEyebrow}
            </p>
            <ul className="mt-4 space-y-3 text-base text-slate-600">
              {focusAreas.map((area) => (
                <li key={area} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#4A5D93]" />
                  <span>{area}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
