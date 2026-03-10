import Image from "next/image";
import HomeFooter from "@/components/sections/HomeFooter";
import { site } from "@/content/site";
import wsnImage from "@/public/wsn.jpg";

export default function Page() {
  const { pages, home, companyName, contactEmail } = site;

  return (
    <main>
      <section id="about" className="bg-white py-28">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-12 px-6 md:grid-cols-2 lg:px-8">
          <div className="relative mx-auto w-full max-w-[140px] md:order-2 md:mx-0 md:max-w-[250px] md:justify-self-end">
            <Image
              src={wsnImage}
              alt="Wouter - founder of Saint Consulting"
              width={250}
              height={300}
              className="rounded-2xl object-cover"
            />
          </div>

          <div className="md:order-1">
            <h1 className="font-serif text-3xl leading-[1.05] text-slate-900 sm:text-4xl lg:text-5xl">
              {pages.about.title}
            </h1>
            {pages.about.paragraphs.map((text) => (
              <p
                key={text}
                className="mt-6 max-w-prose text-base leading-7 text-slate-600 sm:text-xl sm:leading-8"
              >
                {text}
              </p>
            ))}
          </div>
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
