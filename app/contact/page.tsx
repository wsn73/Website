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
              For project or portfolio support, you can contact
              <span className="font-medium text-slate-900">
                {" "}
                Wouter, founder of Saint Consulting
              </span>{" "}
              directly by email.
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
            If helpful, please include a short description of your situation,
            the current phase of the project, key decision moments ahead, and
            your preferred timing for an initial conversation.
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
