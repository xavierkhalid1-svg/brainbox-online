import "../styles/globals.css";
import Link from "next/link";

export const metadata = {
  title: "Brain Box Online",
  description: "Qualified UK teachers. Structured learning.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-neutral-950 text-neutral-100">
        <header className="border-b border-white/10 bg-slate-950/80 backdrop-blur">
          <div className="mx-auto max-w-6xl px-4 py-3 flex items-center gap-3">
            {/* Uses your existing file name */}
            <img src="/Transparent2.png" alt="Brain Box" width="36" height="36" />
            <Link href="/" className="font-semibold tracking-wide">
              Brain Box Online
            </Link>
          </div>
        </header>
        <main className="mx-auto max-w-6xl px-4 py-8">{children}</main>
      </body>
    </html>
  );
}
