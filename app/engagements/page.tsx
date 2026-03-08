import HomeFooter from "@/components/sections/HomeFooter";
import EngagementCard from "@/components/ui/EngagementCard";
import { site } from "@/content/site";

export default function Page() {
  const { pages, home, companyName, contactEmail } = site;
  const { engagements } = pages;

  return (
    <main>
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <h1 className="font-serif text-3xl leading-[1.05] text-slate-900 sm:text-4xl lg:text-5xl">
          {engagements.title}
        </h1>
        <p className="mt-6 max-w-prose text-base leading-7 text-slate-600 sm:text-xl sm:leading-8">
          {engagements.intro}
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {engagements.items.map((item) => (
            <EngagementCard
              key={item.title}
              title={item.title}
              purpose={item.purpose}
              when={item.when}
              icon={item.icon}
            />
          ))}
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
