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
        "Helping Companies make critical project decisions before execution begins",
      subhead:
        "Saint Consulting provides independent owner-side support in front-end capital project development, where decision quality determines whether delivery becomes predictable, effective and efficient.",
      description:
        "Saint is typically engaged when projects or portfolios need explicit decision gates, stronger technical-commercial alignment and clearer steering before major commitments are made.",
      cta: { label: "Schedule an introduction conversation", href: "/contact" },
    },
    problem: {
      eyebrow: "The problem",
      title: "Why capital projects struggle to reach clear decisions",
      intro:
        "In many projects, unpredictability starts long before execution. Gates approve progress, but core choices remain open.",
      items: [
        {
          title: "Decisions approved, not resolved",
          body: "Approvals are granted without explicit choices between real alternatives, so unresolved issues are carried forward.",
        },
        {
          title: "Technical and commercial drift",
          body: "Engineering, cost, risk and contracting logic progress in parallel rather than as one integrated decision basis.",
        },
        {
          title: "Governance without steering",
          body: "Roles and mandates exist, but decision rights, criteria and escalation are not applied with enough discipline.",
        },
        {
          title: "Decision-ready information is missing",
          body: "Large document sets are available, but the minimum decision-critical content is inconsistent or incomplete at gate moments.",
        },
      ],
      closing:
        "The result is rework, delay, cost erosion and value dilution. By execution start, most value-defining choices are already locked in.",
    },
    engage: {
      eyebrow: "Situations",
      title: "Situations where Saint can be engaged",
      intro: "Saint Consulting can be brought in when:",
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
      eyebrow: "Decision clarity",
      title: "What Saint helps clarify",
      summary:
        "Saint applies a practical decision-gate lens to make the basis for commitment explicit. This is typically structured through four routes:",
      items: [
        {
          title: "Assurance Reviews and Health Checks",
          body: "Independent project reviews to test readiness, expose delivery risks and show where reported progress differs from decision reality.",
        },
        {
          title: "Decision Gate Readiness Support",
          body: "Sharpening gate intent, criteria and alternatives so decisions close real switches instead of conditionally approving to maintain momentum.",
        },
        {
          title: "Governance and PM Framework Design",
          body: "Strengthening decision rights, steering cadence, minimum deliverables and portfolio governance so projects are controlled consistently.",
        },
        {
          title: "Implementation and Capability Embedding",
          body: "Supporting teams in execution of improvements through targeted follow-up, coaching and temporary reinforcement at critical moments.",
        },
      ],
      closing:
        "The objective is not more process, but stronger decision and delivery control before commitments are made.",
    },
    engagements: {
      eyebrow: "Support structure",
      title: "How Saint can support",
      intro:
        "The homepage gives a short overview. Full service detail is available on the Our Services page.",
      link: { label: "View full services", href: "/engagements" },
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
      eyebrow: "CALL TO ACTION",
      title: "Start a conversation",
      ctaLabel: "Schedule an introduction",
      reassurance:
        "If you recognise these patterns in your projects, an initial conversation can help explore where Saint can add value.",
      highlights: [],
      copyrightSymbol: "©",
    },
    trust: {
      eyebrow: "Clients",
      title: "Who Saint works with",
      summary:
        "Saint typically works with decision-makers responsible for major capital investments, including:",
      sectors: [
        "Project sponsors",
        "Portfolio leaders",
        "Heads of projects or capital programmes",
        "Executive teams overseeing major investments",
        "Boards or steering committees",
      ],
      whoIntro:
        "Engagements typically take place where projects involve significant capital investment and strategic importance.",
    },
    footer: {
      company: [
        { label: "About", href: "/about" },
        { label: "Engagements", href: "/engagements" },
        { label: "Contact", href: "/contact" },
      ],
    },
  },
  pages: {
    about: {
      title: "About Saint",
      paragraphs: [
        "Saint Consulting is an independent owner-side advisory practice focused on decision quality, governance and predictability in capital projects.",
        "The work draws on more than two decades of capital project experience across energy, chemicals and marine infrastructure, from early development through delivery.",
        "This includes leadership and assurance experience in environments such as Shell, AkzoNobel/Nobian and HyCC.",
        "Support spans both hands-on project delivery and portfolio-level oversight, combining technical depth with commercial understanding to improve decision-making at every level.",
        "Assignments typically involve front-end shaping, gate readiness, project assurance, governance design and practical implementation support in complex investment environments.",
        "Saint works with project sponsors, portfolio leaders and executive teams to create decision-ready clarity: clear choices, clear ownership and clear next steps.",
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
