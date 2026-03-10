import HomeFooter from "@/components/sections/HomeFooter";
import { site } from "@/content/site";

export default function Page() {
  const { pages, home, companyName, contactEmail } = site;

  return (
    <main>
      <section id="contact" className="bg-slate-50 py-28">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              {pages.contact.title}
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              {pages.contact.intro}
            </p>
          </div>

          <div className="mt-10">
            <p className="text-sm uppercase tracking-wider text-slate-500">
              {pages.contact.emailLabel}
            </p>

            <a
              href={`mailto:${contactEmail}`}
              className="mt-2 block text-xl font-medium text-slate-900 hover:text-slate-700"
            >
              {contactEmail}
            </a>
          </div>

          <p className="mt-8 max-w-2xl leading-relaxed text-slate-600">
            {pages.contact.requestNote}
          </p>
        </div>
      </section>

      <HomeFooter
        companyName={companyName}
        copyrightSymbol={home.contact.copyrightSymbol}
        company={home.footer.company}
        email={contactEmail}
        showLinkedIn
      />
    </main>
  );
}
