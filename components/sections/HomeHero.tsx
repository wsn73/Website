type HomeHeroProps = {
  title: string;
  subhead: string;
  cta: { label: string; href: string };
};

export default function HomeHero({
  title,
  subhead,
  cta,
}: HomeHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-b from-slate-50 via-white to-white">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 right-10 h-72 w-72 rounded-full bg-slate-400/20 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div>
          <h1 className="font-serif text-4xl leading-[1.05] text-slate-900 sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-4 text-base leading-7 text-slate-600 sm:text-xl sm:leading-8">
            {subhead}
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href={cta.href}
              className="w-full rounded-full bg-[#4A5D93] px-5 py-3 text-center text-xs font-semibold uppercase tracking-[0.25em] text-white transition hover:bg-[#3f507d] sm:w-auto sm:min-w-[320px] sm:whitespace-nowrap"
            >
              {cta.label}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
