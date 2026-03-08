type HomeTrustProps = {
  eyebrow: string;
  title: string;
  summary?: string;
  sectors: string[];
};

export default function HomeTrust({
  eyebrow,
  title,
  summary,
  sectors,
}: HomeTrustProps) {
  return (
    <section className="border-b border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 sm:py-6 lg:px-8 lg:py-8">
        <div className="grid items-start gap-10 lg:grid-cols-12">
          <div className="lg:col-span-12">
            <p className="text-xs uppercase tracking-[0.35em] text-[#90A2CF]">
              {eyebrow}
            </p>
            <h2 className="font-serif mt-3 text-4xl text-slate-900">
              {title}
            </h2>
            {summary ? (
              <p className="mt-3 text-base leading-7 text-slate-600 sm:text-xl sm:leading-8">
                {summary}
              </p>
            ) : null}
            <div className="mt-4 flex flex-wrap gap-2">
              {sectors.map((sector) => (
                <span
                  key={sector}
                  className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-600"
                >
                  {sector}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
