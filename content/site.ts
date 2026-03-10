type EngagementIcon = "review" | "governance" | "support";

type EngagementItem = {
  title: string;
  icon: EngagementIcon;
  purpose: string | string[];
  when: string;
};

export const site = {
  companyName: "Saint Consulting",
  contactEmail: "wouter@saintconsulting.nl",
  home: {
    hero: {
      title:
        "Protecting project value by bringing clarity to critical decisions",
      subhead:
        "Capital projects move forward under uncertainty, with significant value at stake and commitments that cannot easily be undone. Saint Consulting helps leadership teams create clarity in the early phases of projects so that decisions are deliberate, aligned and based on a sound understanding of the issues at hand. Support can also extend to governance, project control and delivery setup when projects need stronger structure and direction.",
      cta: { label: "Start a conversation", href: "/contact" },
    },
    problem: {
      eyebrow: "The problem",
      title: "Where projects drift in early phases",
      intro:
        "Capital projects rarely struggle because of lack of expertise. More often, problems begin in the early phases, when critical issues are not fully resolved, technical and commercial development do not stay aligned, and teams move forward without a sufficiently solid basis for commitment.",
      items: [
        {
          title: "Deliverables do not support the decisions to be made",
          body: "Large volumes of documentation are produced, but it remains unclear what information is required for a specific decision. Different options are supported by different levels of evidence, while key assumptions and open issues remain difficult to identify.",
        },
        {
          title: "Technical and commercial work diverge",
          body: "Engineering and commercial workstreams progress in parallel but do not stay aligned. Scope, cost and risk evolve separately, making it harder to maintain a consistent project direction.",
        },
        {
          title: "Weak tollgate discipline",
          body: "Tollgates are intended to confirm that key issues have been properly addressed before a project moves forward. In practice, criteria are sometimes interpreted flexibly and projects progress while assumptions remain open. When gate discipline weakens, earlier choices often return for discussion later in the project.",
        },
        {
          title: "The problems surface during execution",
          body: "When projects move into execution without a sufficiently developed front-end, changes become far more disruptive. Every adjustment hits cost and schedule harder, often leading to overruns, delays and assets that ultimately underperform expectations.",
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
        "In practice this means helping projects structure the early phases, clarify what must be resolved and keep technical and commercial development aligned. It also involves finding the right balance between investing scarce pre-FID resources in project definition and reducing risk before major commitments are made. Depending on the situation, support can extend to governance, project control or the overall project setup.",
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
        "The aim is simple: resolve critical issues early so that uncertainty does not later turn into delay, redesign or loss of momentum.",
    },
    engagements: {
      eyebrow: "Form of support",
      title: "Our Services",
      intro:
        "Projects typically reach out when key issues approach a point of commitment, when governance or project structure needs strengthening, or when leadership teams want an independent view on project readiness and direction. Depending on the situation, Saint provides several focused forms of support.",
      link: { label: "View services overview", href: "/engagements" },
      items: [
        {
          title: "Project Reviews",
          body: "Independent assessment of project readiness, key risks and unresolved issues. Reviews help leadership teams understand the real project situation and what needs attention before further commitments are made.",
        },
        {
          title: "Governance Setup",
          body: "Designing practical governance structures, roles and ways of working that support clear accountability, alignment and effective project control.",
        },
        {
          title: "Hands-on Support",
          body: "Targeted owner-side reinforcement during critical project phases, helping leadership teams regain structure, focus and forward momentum.",
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
        "After more than 25 years working on large capital projects at Shell, AkzoNobel (later Nobian) and HyCC, I decided to start my own firm: Saint Consulting.",
        "The name “Saint” refers to Saint Nicholas, traditionally known as the protector of sailors and merchants. It also reflects my own surname. In earlier times ships often had to leave harbour without knowing exactly what conditions they would encounter at sea. Waiting for perfect certainty was not an option, but moving forward without sufficient preparation could easily end badly.",
        "Large capital projects face a similar reality. Major investments must move forward while uncertainty still exists, and the quality of the preparation before those commitments are made often determines how the project unfolds later.",
        "Over the years I often found myself working around the moments where projects move from exploration into commitment. These are the phases where technical questions, commercial considerations and organisational dynamics all come together.",
        "My mission with Saint Consulting is to help project organisations move forward through those moments. That means not only strengthening processes and information, but also supporting the human side of projects, helping teams align, structure complex discussions and create the conditions for sound judgement.",
        "The aim is simple: helping projects move forward on a solid basis before major commitments are made.",
      ],
      footerSymbol: "(c)",
    },
    contact: {
      title: "Contact",
      intro:
        "For project or portfolio support, you can contact Wouter Sint Nicolaas, founder of Saint Consulting, directly by email.",
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
          purpose: [
            "Independent reviews of project readiness to test assumptions, expose delivery risks and clarify where priorities should lie.",
            "Depending on the scope, Saint can assemble a small review team from its network to ensure that technical, commercial and project delivery perspectives are properly addressed.",
          ],
          when:
            "When leadership needs a clear and realistic view of the project situation before major commitments are made.",
        },
        {
          title: "Project Governance Setup",
          icon: "governance",
          purpose: [
            "Designing or strengthening practical governance structures, decision roles and escalation paths so that projects can move forward while maintaining clear oversight and accountability.",
            "This includes defining how information flows into steering discussions and ensuring that technical and commercial perspectives remain aligned.",
          ],
          when:
            "When governance exists on paper but decisions, escalation or alignment are not working well in practice.",
        },
        {
          title: "Hands-on Project Support",
          icon: "support",
          purpose: [
            "Owner-side reinforcement during critical project phases, helping structure discussions, prepare commitment points and translate improvement ideas into practical action.",
            "The focus is always on helping the project organisation regain structure, alignment and forward momentum.",
          ],
          when: "When a critical project needs direct owner-side reinforcement.",
        },
      ] as EngagementItem[],
      footerSymbol: "(c)",
    },
  },
};
