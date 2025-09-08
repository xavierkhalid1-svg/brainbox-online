import "../styles/globals.css";
import Link from "next/link";

export const metadata = {
  title: "Brain Box Online",
  description: "Qualified UK teachers. Structured learning.",
};

function Logo() {
  // Tries multiple sources: /logo.png → /Transparent2.png → GitHub raw
  const srcs = [
    "/logo.png",
    "/Transparent2.png",
    "https://raw.githubusercontent.com/xavierkhalid1-svg/brainbox-online/main/logo.png",
  ];
  return (
    <img
      src={srcs[0]}
      data-try="0"
      onError={(e) => {
        const el = e.currentTarget;
        const i = parseInt(el.getAttribute("data-try") || "0", 10);
        if (i < srcs.length - 1) {
          el.setAttribute("data-try", String(i + 1));
          el.src = srcs[i + 1];
        }
      }}
      alt="Brain Box"
      width={36}
      height={36}
      style={{ display: "block", objectFit: "contain" }}
    />
  );
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-neutral-950 text-neutral-100">
        <header className="border-b border-white/10 bg-slate-950/80 backdrop-blur">
          <div className="mx-auto max-w-6xl px-4 py-3 flex items-center gap-3">
            <Logo />
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
        <main className="mx-auto max-w-6xl px-4 py-8">{children}</main>
      </body>
    </html>
  );
}
