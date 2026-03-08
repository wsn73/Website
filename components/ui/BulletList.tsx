type BulletListProps = {
  items: string[];
  className?: string;
  twoColumns?: boolean;
};

export default function BulletList({
  items,
  className,
  twoColumns = true,
}: BulletListProps) {
  return (
    <ul
      className={`grid gap-4 text-base text-slate-600 ${twoColumns ? "sm:grid-cols-2" : ""} ${className ?? ""}`}
    >
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#4A5D93]" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
