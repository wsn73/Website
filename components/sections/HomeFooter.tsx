type HomeFooterProps = {
  companyName: string;
  copyrightSymbol: string;
  company: { label: string; href: string }[];
  email: string;
  showLinkedIn?: boolean;
};

export default function HomeFooter({
  companyName,
  copyrightSymbol,
  company,
  email,
  showLinkedIn = false,
}: HomeFooterProps) {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.25em] text-[#4A5D93]">
              Company
            </div>
            <ul className="mt-4 space-y-2 text-base text-slate-600">
              {company.map((item) => (
                <li key={item.href}>
                  <a className="hover:underline" href={item.href}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.25em] text-[#4A5D93]">
              Contact
            </div>
            <div className="mt-4 text-base text-slate-600">
              <a className="font-semibold text-[#4A5D93] underline" href={`mailto:${email}`}>
                {email}
              </a>
              {showLinkedIn ? (
                <div className="mt-4">
                  <a
                    href="https://www.linkedin.com/in/wouter-sint-nicolaas-1936626/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn profile"
                    className="inline-flex items-center gap-3 rounded-full border border-[#4A5D93] bg-[#F4F7FF] px-4 py-3 font-semibold text-[#4A5D93] transition hover:bg-[#E8EEFF] hover:text-[#2F437A]"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      className="h-5 w-5"
                      fill="currentColor"
                    >
                      <path d="M4.98 3.5a2.49 2.49 0 1 1 0 4.98 2.49 2.49 0 0 1 0-4.98ZM3 9h4v12H3zm7 0h3.83v1.64h.05c.53-1.01 1.84-2.08 3.79-2.08 4.05 0 4.8 2.67 4.8 6.14V21h-4v-5.5c0-1.31-.03-3-1.83-3-1.84 0-2.12 1.43-2.12 2.9V21h-4z" />
                    </svg>
                    <span>Connect on LinkedIn</span>
                  </a>
                </div>
              ) : null}
            </div>
          </div>
        </div>
        <div className="mt-10 flex items-center gap-2 text-sm text-slate-500">
          <span>
            {copyrightSymbol} {new Date().getFullYear()} Saint Consulting B.V.
          </span>
          <span aria-hidden="true">·</span>
          <span>KvK 42001151</span>
        </div>
      </div>
    </footer>
  );
}
