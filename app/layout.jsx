// app/layout.jsx
import "../styles/globals.css";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Brain Box Online",
  description: "Qualified UK teachers. Structured learning.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-neutral-950 text-neutral-100">
        {/* Top bar */}
        <header className="border-b border-white/10 bg-slate-950/80 backdrop-blur">
          <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 no-underline">
              <Image src="/logo.png" alt="Brain Box" width={28} height={28} />
              <span className="font-semibold tracking-wide">Brain Box Online</span>
            </Link>

            <nav className="flex items-center gap-5 text-sm">
              <Link href="/dashboard" className="hover:opacity-80">Dashboard</Link>
              <Link href="/pricing" className="hover:opacity-80">Pricing</Link>
              <Link href="/contact" className="btn btn-sm rounded-sm !no-underline">Contact</Link>
            </nav>
          </div>
        </header>

        {/* Page container */}
        <main className="mx-auto max-w-6xl px-4 py-8">{children}</main>

        <footer className="mx-auto max-w-6xl px-4 py-10 text-sm text-neutral-400">
          © {new Date().getFullYear()} Brain Box Academy Ltd. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
