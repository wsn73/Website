import HomeContact from "@/components/sections/HomeContact";
import HomeEngageTriggers from "@/components/sections/HomeEngageTriggers";
import HomeEngagements from "@/components/sections/HomeEngagements";
import HomeFooter from "@/components/sections/HomeFooter";
import HomeHero from "@/components/sections/HomeHero";
import HomePillars from "@/components/sections/HomePillars";
import HomeProblem from "@/components/sections/HomeProblem";
import HomeTrust from "@/components/sections/HomeTrust";
import { site } from "@/content/site";

export default function Page() {
  const { home, pages, companyName, contactEmail } = site;

  return (
    <main>
      <HomeHero {...home.hero} />
      <HomeEngageTriggers {...home.engage} />
      <HomeProblem {...home.problem} />
      <HomePillars
        eyebrow={home.principles.eyebrow}
        title={home.principles.title}
        summary={home.principles.summary}
        items={home.principles.items}
      />
      <HomeEngagements
        eyebrow={home.engagements.eyebrow}
        title={home.engagements.title}
        link={home.engagements.link}
        items={pages.engagements.items}
      />
      <HomeContact
        eyebrow={home.contact.eyebrow}
        title={home.contact.title}
        ctaLabel={home.contact.ctaLabel}
        ctaHref="/contact"
        reassurance={home.contact.reassurance}
      />
      <HomeTrust {...home.trust} />
      <HomeFooter
        companyName={companyName}
        copyrightSymbol={home.contact.copyrightSymbol}
        services={home.footer.services}
        company={home.footer.company}
        email={contactEmail}
      />
    </main>
  );
}
