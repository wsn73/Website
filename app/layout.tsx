import "./globals.css";
import type { Metadata } from "next";
import { DM_Serif_Display, Inter } from "next/font/google";

const serif = DM_Serif_Display({ weight: "400", subsets: ["latin"] });
const sans = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Saint Consulting",
  description: "Predictable delivery of complex investment projects",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl">
      <body className={`${sans.className} bg-white text-zinc-900`}>
        <div className="min-h-dvh">{children}</div>

        {/* helper class to match your serif headings */}
        <style>{`
          .font-serif { font-family: ${serif.style.fontFamily}; }
        `}</style>
      </body>
    </html>
  );
}
