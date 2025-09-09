export const metadata = {
  title: "Dashboard — Brain Box Online",
};

const cards = [
  { title: "Timetable", href: "#", desc: "Weekly schedule and upcoming lessons." },
  { title: "Subjects", href: "#", desc: "Maths, English, Science and more." },
  { title: "Pricing", href: "#", desc: "Simple plans for families and groups." },
  { title: "Book a Call", href: "/contact", desc: "Talk to a teacher coordinator." },
];

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <h1>Dashboard</h1>
      <p className="text-neutral-300">
        Quick links to common actions. Logins for students and guardians coming soon.
      </p>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((c) => (
          <a key={c.title} href={c.href} className="block rounded-md border border-white/10 p-4 hover:bg-white/5 transition">
            <h3 className="font-semibold">{c.title}</h3>
            <p className="text-sm text-neutral-400 mt-1">{c.desc}</p>
          </a>
        ))}
      </div>
    </div>
  );
}
