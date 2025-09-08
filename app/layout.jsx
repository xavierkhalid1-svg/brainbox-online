import "../styles/globals.css";
import Link from "next/link";

export const metadata = {
  title: "Brain Box Online",
  description: "Qualified UK teachers. Structured learning.",
  icons: {
    icon: "/favicon.svg", // make sure public/favicon.svg exists (you added it)
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-neutral-950 text-neutral-100">
        <div className="min-h-screen flex flex-col">
          {/* Header */}
          <header className="border-b border-white/10 bg-slate-950/80 backdrop-blur">
            <div className="mx-auto max-w-6xl px-4 py-3 flex items-center gap-3">
              {/* Simple <img>, no event handlers (safe for Server Components) */}
              <img
                src="https://raw.githubusercontent.com/xavierkhalid1-svg/brainbox-online/main/logo.png"
                alt="Brain Box"
                width="36"
                height="36"
                style={{ display: "block", objectFit: "contain" }}
              />
              <Link href="/" className="font-semibold tracking-wide">
                Brain Box Online
              </Link>
              <nav className="ml-auto flex gap-5 text-sm">
                <Link href="/dashboard" className="hover:opacity-80">Dashboard</Link>
                <Link href="/teacher" className="hover:opacity-80">Teacher</Link>
                <Link href="/admin" className="hover:opacity-80">Admin</Link>
              </nav>
            </div>
          </header>

          {/* Main */}
          <main className="mx-auto max-w-6xl px-4 py-8 flex-1">{children}</main>

          {/* Footer */}
          <footer className="border-t border-white/10">
            <div className="mx-auto max-w-6xl px-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="flex items-center gap-2 text-sm text-neutral-400">
                <span>© {new Date().getFullYear()} Brain Box Online</span>
                <span className="hidden sm:inline">•</span>
                <span className="text-primary">Light–mid green theme</span>
              </div>
              <div className="flex gap-4 text-sm">
                <Link href="/dashboard" className="hover:opacity-80">Dashboard</Link>
                <Link href="/teacher" className="hover:opacity-80">Teacher</Link>
                <Link href="/admin" className="hover:opacity-80">Admin</Link>
                <a href="mailto:support@brainboxacademy.com" className="hover:opacity-80">Contact</a>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
