type HomeFooterProps = {
  companyName: string;
  copyrightSymbol: string;
  company: { label: string; href: string }[];
  email: string;
};

export default function HomeFooter({
  companyName,
  copyrightSymbol,
  company,
  email,
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
            </div>
          </div>
        </div>
        <div className="mt-10 text-sm text-slate-500">
          {copyrightSymbol} {new Date().getFullYear()} {companyName}
        </div>
      </div>
    </footer>
  );
}
