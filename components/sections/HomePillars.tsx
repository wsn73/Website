import Card from "../ui/Card";

type HomePillarsProps = {
  eyebrow: string;
  title: string;
  items: { title: string; body: string }[];
  summary?: string;
  closing?: string;
};

export default function HomePillars({
  eyebrow,
  title,
  items,
  summary,
  closing,
}: HomePillarsProps) {
  return (
    <section className="border-b border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mb-10">
          <p className="text-xs uppercase tracking-[0.35em] text-[#90A2CF]">
            {eyebrow}
          </p>
          <h2 className="font-serif mt-3 max-w-4xl text-4xl text-slate-900 sm:text-5xl">
            {title}
          </h2>
          {summary ? (
            <p className="mt-6 max-w-4xl text-base leading-7 text-slate-600 sm:text-xl sm:leading-8">
              {summary}
            </p>
          ) : null}
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <Card
              key={item.title}
              title={item.title}
              body={item.body}
              index={index}
            />
          ))}
        </div>
        {closing ? (
          <p className="mt-8 text-base leading-7 text-slate-600 sm:text-xl sm:leading-8">
            {closing}
          </p>
        ) : null}
      </div>
    </section>
  );
}
