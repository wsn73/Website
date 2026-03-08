import EngagementCard from "../ui/EngagementCard";

type HomeEngagementsProps = {
  eyebrow: string;
  title: string;
  link: { label: string; href: string };
  items: { title: string; purpose: string; when: string; icon?: "review" | "governance" | "support" }[];
};

export default function HomeEngagements({
  eyebrow,
  title,
  link,
  items,
}: HomeEngagementsProps) {
  return (
    <section className="border-b border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-[#90A2CF]">
              {eyebrow}
            </p>
            <h2 className="font-serif mt-3 text-4xl text-slate-900">
              {title}
            </h2>
          </div>
          <a
            href={link.href}
            className="text-base font-semibold uppercase tracking-[0.25em] text-[#4A5D93] hover:underline"
          >
            {link.label}
          </a>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <EngagementCard
              key={item.title}
              title={item.title}
              purpose={item.purpose}
              when={item.when}
              icon={item.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
