import BulletList from "../ui/BulletList";

type HomeContactProps = {
  eyebrow: string;
  title: string;
  ctaLabel: string;
  ctaHref: string;
  reassurance: string;
  highlights?: string[];
};

export default function HomeContact({
  eyebrow,
  title,
  ctaLabel,
  ctaHref,
  reassurance,
  highlights,
}: HomeContactProps) {
  return (
    <section className="border-b border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <p className="text-xs uppercase tracking-[0.35em] text-[#90A2CF]">
            {eyebrow}
          </p>
          <h2 className="font-serif mt-3 text-4xl text-slate-900">{title}</h2>
          <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href={ctaHref}
              className="w-full rounded-full border border-[#4A5D93] bg-white px-5 py-3 text-center text-xs font-semibold uppercase tracking-[0.25em] text-[#4A5D93] transition hover:bg-slate-50 sm:w-auto sm:min-w-[320px] sm:whitespace-nowrap"
            >
              {ctaLabel}
            </a>
            {reassurance ? (
              <p className="text-base text-slate-600 sm:text-lg">{reassurance}</p>
            ) : null}
          </div>
          {highlights?.length ? (
            <BulletList items={highlights} className="mt-6" />
          ) : null}
        </div>
      </div>
    </section>
  );
}
