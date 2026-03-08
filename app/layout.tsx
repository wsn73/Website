import "./globals.css";
import type { Metadata } from "next";
import Image from "next/image";
import { DM_Serif_Display, Montserrat } from "next/font/google";

const serif = DM_Serif_Display({ weight: "400", subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"] });

const NAV = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Our Services", href: "/engagements" },
  { label: "Contact Us", href: "/contact" },
];

export const metadata: Metadata = {
  title: "Saint Consulting",
  description: "Predictable delivery of complex investment projects",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl">
      <body className="bg-white text-zinc-900">
        <div className="min-h-dvh">
          <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 text-slate-900 backdrop-blur">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
              <a href="/" className="flex items-center">
                <Image
                  src="/logo-20260209.png"
                  alt="Saint Consulting logo"
                  width={1839}
                  height={179}
                  className="h-5 w-auto sm:h-7"
                  priority
                />
              </a>
              <nav className="hidden items-center gap-6 text-base font-semibold text-[#4A5D93] md:flex">
                {NAV.map((i) => (
                  <a
                    key={i.href}
                    href={i.href}
                    className={
                      i.href === "/contact"
                        ? "rounded-full bg-[#4A5D93] px-4 py-2 text-xs uppercase tracking-[0.25em] text-white"
                        : "opacity-80 transition hover:opacity-100"
                    }
                  >
                    {i.label}
                  </a>
                ))}
              </nav>
              <div className="relative md:hidden">
                <details className="group">
                  <summary className="list-none rounded-full border border-slate-200 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#4A5D93]">
                    Menu
                  </summary>
                  <div className="absolute right-0 mt-3 w-56 rounded-2xl border border-slate-200 bg-white p-3 shadow-lg">
                    <div className="flex flex-col gap-2 text-base font-semibold text-[#4A5D93]">
                      {NAV.map((i) => (
                        <a
                          key={i.href}
                          href={i.href}
                          className={
                            i.href === "/contact"
                              ? "rounded-lg bg-[#4A5D93] px-3 py-2 text-center text-xs uppercase tracking-[0.25em] text-white"
                              : "rounded-lg px-3 py-2 opacity-80 hover:bg-slate-50 hover:opacity-100"
                          }
                        >
                          {i.label}
                        </a>
                      ))}
                    </div>
                  </div>
                </details>
              </div>
            </div>
          </header>

          {children}
        </div>

        {/* helper class to match your serif headings */}
        <style>{`
          .font-serif { font-family: ${serif.style.fontFamily}; }
          body { font-family: ${montserrat.style.fontFamily}, Arial, sans-serif; }
        `}</style>
      </body>
    </html>
  );
}
