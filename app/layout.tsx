import "./globals.css";
import type { Metadata } from "next";
import Image from "next/image";
import { DM_Serif_Display, Hammersmith_One } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";

const serif = DM_Serif_Display({ weight: "400", subsets: ["latin"] });
const hammersmith = Hammersmith_One({ weight: "400", subsets: ["latin"] });

const NAV = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Engagements", href: "/engagements" },
  { label: "Contact", href: "/contact" },
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
          <header className="border-b border-slate-200 bg-white text-slate-900">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
              <div className="flex items-center gap-2">
                <Image
                  src="/logo.png"
                  alt="Saint Consulting logo"
                  width={110}
                  height={36}
                  className="h-9 w-auto"
                  priority
                />
                <div className="inline-block h-9 leading-none -ml-1">
                  <div
                    className="font-hammersmith uppercase tracking-[0.22em] text-[#4A5D93]"
                    style={{ fontSize: "20px", lineHeight: "1" }}
                  >
                    Saint Consulting
                  </div>
                  <div
                    className="mt-[2px] w-full text-left font-hammersmith uppercase tracking-[0.04em] text-[#90A2CF]"
                    style={{ fontSize: "16px", lineHeight: "1", transform: "translate(1.35ch, -1px)" }}
                  >
                    Capital Projects Expertise
                  </div>
                </div>
              </div>
              <nav className="flex gap-7 text-lg font-semibold text-[#4A5D93]">
                {NAV.map((i) => (
                  <a
                    key={i.href}
                    href={i.href}
                    className="opacity-80 hover:opacity-100"
                  >
                    {i.label}
                  </a>
                ))}
              </nav>
            </div>
          </header>

          {children}
        </div>

        {/* helper class to match your serif headings */}
        <style>{`
          .font-serif { font-family: ${serif.style.fontFamily}; }
          .font-hammersmith { font-family: ${hammersmith.style.fontFamily}; }
          body { font-family: Calibri, "Segoe UI", Arial, sans-serif; }
        `}</style>
        <Analytics />
      </body>
    </html>
  );
}
