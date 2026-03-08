type PageFooterDarkProps = {
  companyName: string;
  symbol: string;
};

export default function PageFooterDark({
  companyName,
  symbol,
}: PageFooterDarkProps) {
  return (
    <footer className="bg-slate-700 text-white">
      <div className="mx-auto max-w-7xl px-4 py-6 text-base opacity-90 sm:px-6 lg:px-8">
        {symbol} {new Date().getFullYear()} {companyName}
      </div>
    </footer>
  );
}
