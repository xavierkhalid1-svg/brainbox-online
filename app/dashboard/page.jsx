// app/dashboard/page.jsx
export const metadata = { title: "Dashboard — Brain Box Online" };

const cards = [
  { title: "Classes", body: "Manage live sessions and timetables." },
  { title: "Students", body: "View enrolments and progress." },
  { title: "Curriculum", body: "KS1–KS4 modules and resources." },
];

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <h1>Dashboard</h1>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((c) => (
          <div key={c.title} className="rounded-md border border-white/10 p-4 bg-neutral-900">
            <h3 className="mb-2">{c.title}</h3>
            <p className="text-neutral-300">{c.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
