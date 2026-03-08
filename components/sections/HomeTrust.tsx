import BulletList from "../ui/BulletList";

type HomeTrustProps = {
  eyebrow: string;
  title: string;
  summary?: string;
  sectors?: string[];
  whoTitle?: string;
  whoIntro?: string;
  whoItems?: string[];
  experienceTitle?: string;
  experienceIntro?: string;
  experienceItems?: string[];
  aboutTitle?: string;
  aboutParagraphs?: string[];
};

export default function HomeTrust({
  eyebrow,
  title,
  summary,
  sectors,
  whoTitle,
  whoIntro,
  whoItems,
  experienceTitle,
  experienceIntro,
  experienceItems,
  aboutTitle,
  aboutParagraphs,
}: HomeTrustProps) {
  return (
    <section className="border-b border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid items-start gap-10 lg:grid-cols-12">
          <div className="lg:col-span-12">
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
            {sectors?.length ? <BulletList items={sectors} className="mt-4" /> : null}
            {whoTitle ? (
              <h3 className="mt-10 font-serif text-3xl text-slate-900">{whoTitle}</h3>
            ) : null}
            {whoIntro ? (
              <p className="mt-3 text-base leading-7 text-slate-600 sm:text-xl sm:leading-8">
                {whoIntro}
              </p>
            ) : null}
            {whoItems?.length ? (
              <BulletList items={whoItems} className="mt-4" />
            ) : null}
            {experienceTitle ? (
              <h3 className="mt-10 font-serif text-3xl text-slate-900">{experienceTitle}</h3>
            ) : null}
            {experienceIntro ? (
              <p className="mt-3 text-base leading-7 text-slate-600 sm:text-xl sm:leading-8">
                {experienceIntro}
              </p>
            ) : null}
            {experienceItems?.length ? (
              <BulletList items={experienceItems} className="mt-4" />
            ) : null}
            {aboutTitle ? (
              <h3 className="mt-10 font-serif text-3xl text-slate-900">{aboutTitle}</h3>
            ) : null}
            {aboutParagraphs?.map((text) => (
              <p
                key={text}
                className="mt-3 text-base leading-7 text-slate-600 sm:text-xl sm:leading-8"
              >
                {text}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
