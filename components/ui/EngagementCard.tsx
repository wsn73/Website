type EngagementCardProps = {
  title: string;
  purpose: string | string[];
  when: string;
  icon?: "review" | "governance" | "support";
};

function Icon({ icon }: { icon?: "review" | "governance" | "support" }) {
  switch (icon) {
    case "review":
      return (
        <svg
          viewBox="0 0 24 24"
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="11" cy="11" r="6" />
          <path d="M16 16l4 4" />
        </svg>
      );
    case "governance":
      return (
        <svg
          viewBox="0 0 24 24"
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <rect x="4" y="4" width="8" height="8" rx="2" />
          <rect x="12" y="12" width="8" height="8" rx="2" />
          <path d="M12 8h4a4 4 0 0 1 4 4v4" />
        </svg>
      );
    case "support":
      return (
        <svg
          viewBox="0 0 24 24"
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M7 13l3 3 7-7" />
          <path d="M12 3a9 9 0 1 0 9 9" />
        </svg>
      );
    default:
      return (
        <svg
          viewBox="0 0 24 24"
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M7 7h10v10H7z" />
          <path d="M7 12h10" />
        </svg>
      );
  }
}

export default function EngagementCard({
  title,
  purpose,
  when,
  icon,
}: EngagementCardProps) {
  const purposeParagraphs = Array.isArray(purpose) ? purpose : [purpose];

  return (
    <div className="group rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm transition hover:shadow-md">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-[#4A5D93]">
        <Icon icon={icon} />
      </div>
      <h3 className="mt-4 text-xl font-semibold text-slate-900">{title}</h3>
      <div className="mt-3 space-y-4 text-base leading-7 text-slate-600">
        {purposeParagraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
      <p className="mt-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#4A5D93]">
        When to use
      </p>
      <p className="mt-2 text-base leading-7 text-slate-600">{when}</p>
    </div>
  );
}
