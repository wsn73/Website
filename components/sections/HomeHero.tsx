type HomeHeroProps = {
  title: string;
  subhead: string;
  description?: string;
  cta: { label: string; href: string };
  ctaDivider?: string;
  secondaryCta?: { label: string; href: string };
};

export default function HomeHero({
  title,
  subhead,
  description,
  cta,
  ctaDivider,
  secondaryCta,
}: HomeHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-b from-slate-50 via-white to-white">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 right-10 h-72 w-72 rounded-full bg-slate-400/20 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="max-w-[700px]">
          <h1 className="font-serif text-5xl leading-[1.02] text-slate-900 lg:text-6xl">
            {title}
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-600 sm:text-xl sm:leading-9">
            {subhead}
          </p>
          {description ? (
            <p className="mt-5 text-lg leading-8 text-slate-600 sm:text-xl sm:leading-9">
              {description}
            </p>
          ) : null}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href={cta.href}
              className="w-full rounded-full bg-[#4A5D93] px-7 py-4 text-center text-sm font-semibold uppercase tracking-[0.12em] text-white transition hover:bg-[#3f507d] sm:w-auto sm:min-w-[420px] sm:whitespace-nowrap"
            >
              {cta.label}
            </a>
            {ctaDivider ? (
              <p className="self-center text-center text-sm uppercase tracking-[0.2em] text-slate-500">
                {ctaDivider}
              </p>
            ) : null}
            {secondaryCta ? (
              <a
                href={secondaryCta.href}
                className="w-full rounded-full border border-[#4A5D93] bg-white px-6 py-3 text-center text-xs font-semibold uppercase tracking-[0.25em] text-[#4A5D93] transition hover:bg-slate-50 sm:w-auto sm:min-w-[300px] sm:whitespace-nowrap"
              >
                {secondaryCta.label}
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
