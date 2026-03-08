import PageFooterDark from "@/components/sections/PageFooterDark";
import { site } from "@/content/site";

export default function Page() {
  const { pages, companyName } = site;

  return (
    <main>
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <h1 className="font-serif text-4xl leading-[1.05] text-slate-900 sm:text-5xl lg:text-6xl">
          {pages.about.title}
        </h1>
        {pages.about.paragraphs.map((text) => (
          <p key={text} className="mt-6 max-w-prose text-base leading-7 text-slate-600 sm:text-xl sm:leading-8">
            {text}
          </p>
        ))}
      </section>

      <PageFooterDark
        companyName={companyName}
        symbol={pages.about.footerSymbol}
      />
    </main>
  );
}
