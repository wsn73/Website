type CardProps = {
  title: string;
  body: string;
  index?: number;
};

const ROMANS = ["I", "II", "III", "IV", "V"];

export default function Card({ title, body, index }: CardProps) {
  const label =
    typeof index === "number" && ROMANS[index] ? ROMANS[index] : "I";
  return (
    <div className="group rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm transition hover:shadow-md">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-[#4A5D93]">
        <span className="text-sm font-semibold">{label}</span>
      </div>
      <h3 className="mt-4 text-xl font-semibold text-slate-900">{title}</h3>
      <p className="mt-3 text-base leading-7 text-slate-600">{body}</p>
    </div>
  );
}
