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
  const { home, companyName, contactEmail } = site;

  return (
    <main>
      <HomeHero {...home.hero} />
      <HomeProblem {...home.problem} />
      <HomeEngageTriggers {...home.engage} />
      <HomePillars
        eyebrow={home.principles.eyebrow}
        title={home.principles.title}
        summary={home.principles.summary}
        items={home.principles.items}
        closing={home.principles.closing}
      />
      <HomeEngagements
        eyebrow={home.engagements.eyebrow}
        title={home.engagements.title}
        intro={home.engagements.intro}
        link={home.engagements.link}
        items={home.engagements.items}
      />
      <HomeContact
        eyebrow={home.contact.eyebrow}
        title={home.contact.title}
        ctaLabel={home.contact.ctaLabel}
        ctaHref="/contact"
        reassurance={home.contact.reassurance}
        highlights={home.contact.highlights}
      />
      <HomeTrust {...home.trust} />
      <HomeFooter
        companyName={companyName}
        copyrightSymbol={home.contact.copyrightSymbol}
        company={home.footer.company}
        email={contactEmail}
      />
    </main>
  );
}
