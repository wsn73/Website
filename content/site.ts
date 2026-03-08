type EngagementIcon = "review" | "governance" | "support";

type EngagementItem = {
  title: string;
  icon: EngagementIcon;
  purpose: string;
  when: string;
};

export const site = {
  companyName: "Saint Consulting",
  contactEmail: "wouter@saintconsulting.nl",
  home: {
    hero: {
      title:
        "Helping companies make critical project decisions before execution begins",
      subhead:
        "Independent support in the front-end of capital projects, where direction, governance and investment readiness need to become clear before major commitments are made.",
      description:
        "Saint works with decision makers to strengthen early project phases, decision readiness and alignment between technical and commercial development. It is not necessary to have the scope fully defined at the outset - an initial conversation often helps clarify where value can be added.",
      cta: { label: "Start a conversation", href: "/contact" },
    },
    problem: {
      eyebrow: "The problem",
      title: "Where decision quality breaks down",
      intro:
        "Capital projects rarely struggle because of lack of expertise. More often, a clear decision framework is missing and it is unclear how technical and commercial progress align and which documents need to be produced when.",
      items: [
        {
          title: "Deliverables do not support the decisions to be made",
          body: "Large volumes of documentation are produced, but it remains unclear what information is required for a specific decision. Different options are supported by different levels of evidence, while key assumptions and open issues remain difficult to identify.",
        },
        {
          title: "Technical and commercial work drift apart",
          body: "Engineering and commercial workstreams progress in parallel, but not closely enough aligned. Options evolve, costs shift, and risks change without a shared decision view, making robust project choices difficult.",
        },
        {
          title: "Decision gates leave key issues unresolved",
          body: "Criteria may be interpreted flexibly, documentation accepted conditionally, and projects proceed despite unresolved assumptions or incomplete evidence.",
        },
        {
          title: "Decisions lack robustness",
          body: "Projects appear to move forward, but earlier decisions are repeatedly revisited. Trade-offs were not fully explored, key assumptions remained implicit, and uncertainties were not resolved before approval.",
        },
      ],
    },
    engage: {
      eyebrow: "Situations",
      title: "Situations where Saint is engaged",
      intro: "Saint Consulting is brought in when:",
      items: [
        {
          title: "Investment decision approaching",
          body: "A major investment decision is near, while readiness and alignment remain unclear.",
        },
        {
          title: "Workstreams are misaligned",
          body: "Technical and commercial development diverge and create uncertainty around next steps.",
        },
        {
          title: "Decisions do not land",
          body: "Governance exists, but decision ownership and escalation are not working effectively.",
        },
        {
          title: "Independent owner-side view needed",
          body: "Leadership requires an external perspective to clarify risks, assumptions and choices.",
        },
      ],
      closing:
        "These situations often arise in the front-end development phase, before execution commitments are made.",
    },
    principles: {
      eyebrow: "Typical areas of support",
      title: "Where Saint can help",
      summary:
        "In practice, this means helping projects organise the front-end phases around clear decisions, aligned workstreams, and decision-ready information.",
      items: [
        {
          title: "Structuring early project phases",
          body: "Clarifying how the front-end should be organised and what decisions need to be made when.",
        },
        {
          title: "Keeping technical and commercial development aligned",
          body: "Helping workstreams move together rather than separately.",
        },
        {
          title: "Improving decision quality",
          body: "Making sure the right information is available at key decision moments and properly laid down in project documentation.",
        },
      ],
      closing:
        "The aim is not to add more process, but to help make the right decisions at the right moment.",
    },
    engagements: {
      eyebrow: "Form of support",
      title: "Our Services",
      intro:
        "Depending on the situation and stage of the project, Saint can support through a number of focused services.",
      link: { label: "View services overview", href: "/engagements" },
      items: [
        {
          title: "Project Reviews",
          body: "Independent assessment of decision readiness, delivery risks and immediate priorities.",
        },
        {
          title: "Governance Setup",
          body: "Clear decision rights, gate criteria and steering structure that work in practice.",
        },
        {
          title: "Hands-on Support",
          body: "Targeted owner-side reinforcement during critical project phases and decision moments.",
        },
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "Start a conversation",
      ctaLabel: "Schedule an introduction",
      reassurance:
        "It is not necessary to have the scope fully defined at the outset. A first conversation can help clarify what is needed and whether Saint can add value.",
      highlights: [],
      copyrightSymbol: "©",
    },
    trust: {
      eyebrow: "Context",
      title: "Where Saint typically works",
      summary:
        "Saint works in capital project environments where major investment decisions are prepared before execution begins.",
      sectors: [],
      whoTitle: "Who Saint works with",
      whoItems: [
        "Decision makers responsible for major capital investments",
        "Project sponsors and capital project leaders",
        "Executive teams and boards preparing investment decisions",
      ],
      experienceTitle: "Experience context",
      experienceItems: [
        "Energy infrastructure",
        "Chemical and industrial projects",
        "LNG and green hydrogen developments",
        "Capital project portfolios",
      ],
    },
    footer: {
      company: [
        { label: "About", href: "/about" },
        { label: "Our Services", href: "/engagements" },
        { label: "Contact", href: "/contact" },
      ],
    },
  },
  pages: {
    about: {
      title: "About Saint",
      paragraphs: [
        "Saint Consulting was founded by Wouter Sint Nicolaas after more than 25 years working on capital projects at organisations including Shell, AkzoNobel / Nobian and HyCC.",
        "Over the years he worked across project development, project management and owner-side governance. This provided a close view of how large projects actually move forward: not only through engineering and execution, but through the decisions that shape them.",
        "In many projects he observed a similar pattern. Experienced teams and strong technical work are in place, yet progress becomes uncertain because key decisions remain partially open, are revisited, or are not supported by aligned technical and commercial development.",
        "By the time difficulties appear during execution, most of the important choices have already been made.",
        "Saint Consulting focuses on those earlier phases of projects, working with decision-makers to strengthen how projects prepare and test the decisions that define the direction of the project.",
        "The name Saint reflects both the founder’s surname and Saint Nicholas, the protector of sailors and merchants; a reminder that when visibility is limited and the stakes are high, progress depends on judgment, clarity and steady navigation.",
      ],
      footerSymbol: "(c)",
    },
    contact: {
      title: "Contact",
      intro:
        "For project or portfolio support, you can contact Wouter (founder of Saint Consulting) directly by email.",
      emailLabel: "Email",
      requestNote:
        "A short note describing your situation, the current project phase, key decision moments, and preferred timing for a first conversation is helpful.",
      footerSymbol: "(c)",
    },
    engagements: {
      title: "Three ways to work together",
      intro:
        "Depending on project maturity and urgency, cooperation can take different forms. In many situations, a short health check helps establish a clear view of how the project or portfolio environment is functioning and where support would be most valuable.",
      items: [
        {
          title: "Project Reviews",
          icon: "review",
          purpose:
            "Independent readiness and assurance reviews to test decision quality, expose delivery risks and clarify priority actions.",
          when: "When leadership needs a fast, realistic view before a major decision.",
        },
        {
          title: "Project Governance Setup",
          icon: "governance",
          purpose:
            "Designing or strengthening decision frameworks, governance roles, gate criteria and steering information across projects.",
          when: "When governance exists but decisions and escalation are not working in practice.",
        },
        {
          title: "Hands-on Project Support",
          icon: "support",
          purpose:
            "Embedded support to shape early decisions, prepare gates, and translate improvement advice into implementation.",
          when: "When a critical project needs direct owner-side reinforcement.",
        },
      ] as EngagementItem[],
      footerSymbol: "(c)",
    },
  },
};
