type HomeHeroProps = {
  title: string;
  subhead: string;
  description?: string;
  cta: { label: string; href: string };
  ctaDivider?: string;
  secondaryCta?: { label: string; href: string };
};

export default function HomeHero(_props: HomeHeroProps) {
  const { title, subhead, description, cta, ctaDivider, secondaryCta } = _props;

  return (
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/picture1.jpeg"
          alt="Ship navigating through uncertain conditions at sea"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-950/55" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-28 sm:py-36 lg:px-8 lg:py-44">
        <div className="max-w-3xl">
          <h1 className="max-w-2xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            {title}
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
            {subhead}
          </p>
          {description ? (
            <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-200">
              {description}
            </p>
          ) : null}

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href={cta.href}
              className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-sm font-medium text-slate-900 transition hover:bg-slate-100"
            >
              {cta.label}
            </a>
            {secondaryCta ? (
              <>
                {ctaDivider ? (
                  <span className="inline-flex items-center text-sm text-slate-300">
                    {ctaDivider}
                  </span>
                ) : null}
                <a
                  href={secondaryCta.href}
                  className="inline-flex items-center justify-center rounded-md border border-white/30 px-6 py-3 text-sm font-medium text-white transition hover:border-white/50"
                >
                  {secondaryCta.label}
                </a>
              </>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
