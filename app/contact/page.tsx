import HomeFooter from "@/components/sections/HomeFooter";
import { site } from "@/content/site";

export default function Page() {
  const { pages, home, companyName, contactEmail } = site;

  return (
    <main>
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <h1 className="font-serif text-4xl leading-[1.05] text-slate-900 sm:text-5xl lg:text-6xl">
          {pages.contact.title}
        </h1>
        <p className="mt-6 text-base leading-7 text-slate-600 sm:text-xl sm:leading-8">
          {pages.contact.intro}
        </p>
        <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <p className="text-base text-slate-600">{pages.contact.emailLabel}</p>
          <p className="mt-2 text-xl">
            <a className="font-semibold text-[#4A5D93] underline" href={`mailto:${contactEmail}`}>
              {contactEmail}
            </a>
          </p>
          <p className="mt-6 text-base leading-7 text-slate-600">
            {pages.contact.requestNote}
          </p>
        </div>
      </section>

      <HomeFooter
        companyName={companyName}
        copyrightSymbol={home.contact.copyrightSymbol}
        company={home.footer.company}
        email={contactEmail}
      />
    </main>
  );
}
