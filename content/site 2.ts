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
      eyebrow: "Where projects lose clarity",
      title: "What often goes wrong before execution starts",
      intro:
        "Capital projects rarely struggle because of a lack of expertise. More often, they lose clarity in the front-end phase.",
      items: [
        {
          title: "Decisions do not fully close key issues",
          body: "Projects progress, but underlying choices, trade-offs or assumptions remain unresolved.",
        },
        {
          title: "Technical and commercial work move out of sync",
          body: "Workstreams move in parallel, but not closely enough together to support robust decisions.",
        },
        {
          title: "Decision ownership and escalation are unclear",
          body: "Governance structures exist, but it remains unclear who ultimately owns decisions or how issues should escalate.",
        },
        {
          title: "Tollgates confirm progress rather than test readiness",
          body: "Formal reviews take place, but they often confirm momentum instead of rigorously testing whether the project is ready to proceed.",
        },
      ],
      closing:
        "By the time these issues become visible in execution, most of the important choices have already been made.",
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
      title: "How Saint can help",
      summary:
        "In practice, this often means strengthening how early project phases are structured, how decisions are prepared, and how technical and commercial work stay aligned.",
      items: [
        {
          title: "Structuring early project phases",
          body: "Clarifying how the front-end should be organised and what decisions need to be made when.",
        },
        {
          title: "Improving decision quality",
          body: "Making sure the right information is available at key decision moments.",
        },
        {
          title: "Keeping technical and commercial development aligned",
          body: "Helping workstreams move together rather than separately.",
        },
      ],
      closing:
        "The aim is not to add more process, but to help make the right decisions at the right moment.",
    },
    engagements: {
      eyebrow: "Services",
      title: "Services",
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
        "Over the years he has seen many projects struggle not because of a lack of expertise, but because decisions never quite close. Technical and commercial development move in parallel but not fully together, and tollgates often confirm progress rather than truly test readiness.",
        "By the time problems appear in execution, most of the important choices have already been made.",
        "Saint Consulting focuses on that earlier front-end phase of projects, working with decision-makers to strengthen how early project phases are structured, how decisions are prepared, and how technical and commercial development stay aligned.",
        "The name Saint refers to Saint Nicholas, the protector of sailors and merchants, a reminder that navigating uncertainty requires judgment, clarity and steady progress.",
      ],
      footerSymbol: "(c)",
    },
    contact: {
      title: "Contact",
      intro:
        "For project or portfolio support, contact Saint Consulting by email.",
      emailLabel: "Email",
      requestNote:
        "Please include a short description of your situation, current project phase, key decision moments, and preferred timing for a first conversation.",
      footerSymbol: "(c)",
    },
    engagements: {
      title: "Three ways to work together",
      intro:
        "Each pathway strengthens decision and delivery control at a different depth, depending on project maturity and urgency.",
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
