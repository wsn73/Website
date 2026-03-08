type HomeEngagementsProps = {
  eyebrow: string;
  title: string;
  intro?: string;
  link?: { label: string; href: string };
  items: { title: string; body: string }[];
};

export default function HomeEngagements({
  eyebrow,
  title,
  intro,
  link,
  items,
}: HomeEngagementsProps) {
  return (
    <section className="border-b border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div>
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-[#90A2CF]">
              {eyebrow}
            </p>
            <h2 className="font-serif mt-3 max-w-4xl text-4xl text-slate-900 sm:text-5xl">
              {title}
            </h2>
            {intro ? (
              <p className="mt-6 max-w-4xl text-base leading-7 text-slate-600 sm:text-xl sm:leading-8">
                {intro}
              </p>
            ) : null}
          </div>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-6"
            >
              <h3 className="text-xl font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-3 text-base leading-7 text-slate-600">{item.body}</p>
            </article>
          ))}
        </div>
        {link ? (
          <div className="mt-10 flex justify-center">
            <a
              href={link.href}
              className="inline-flex items-center rounded-full border border-[#4A5D93] bg-white px-7 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-[#4A5D93] transition hover:bg-slate-50"
            >
              {link.label}
            </a>
          </div>
        ) : null}
      </div>
    </section>
  );
}
