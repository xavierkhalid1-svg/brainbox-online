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
      <body className="bg-black text-white">
        {/* Green top bar + nav */}
        <header className="border-b border-white/10 bg-emerald-700">
          <div className="mx-auto max-w-6xl px-4 py-3 flex items-center gap-4">
            <Link href="/" className="flex items-center gap-2 no-underline">
              <Image src="/logo.png" alt="Brain Box" width={36} height={36} />
              <span className="font-semibold tracking-wide">Brain Box Online</span>
            </Link>

            <nav className="ml-auto flex items-center gap-6 text-sm">
              <Link href="/" className="hover:opacity-80 no-underline">Home</Link>
              <Link href="/dashboard" className="hover:opacity-80 no-underline">Dashboard</Link>
              <Link href="/about" className="hover:opacity-80 no-underline">About</Link>
              <Link href="/contact" className="hover:opacity-80 no-underline">Contact</Link>
            </nav>
          </div>
        </header>

        <main className="mx-auto max-w-6xl px-4 py-8">{children}</main>
      </body>
    </html>
  );
}
