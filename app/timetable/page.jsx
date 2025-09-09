export const metadata = {
  title: "Timetable — Brain Box Online",
  description: "Weekly schedule and upcoming lessons.",
};

export default function Page() {
  return (
    <div className="space-y-6">
      <h1>Timetable</h1>
      <p>Weekly schedule and upcoming lessons (sample data below).</p>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <div className="rounded border border-white/10 p-4">
          <h3 className="mb-2">Monday</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>09:00 — Maths (Primary)</li>
            <li>11:00 — English (Lower Secondary)</li>
          </ul>
        </div>

        <div className="rounded border border-white/10 p-4">
          <h3 className="mb-2">Wednesday</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>10:00 — Science (Primary)</li>
            <li>13:00 — Maths (Lower Secondary)</li>
          </ul>
        </div>

        <div className="rounded border border-white/10 p-4">
          <h3 className="mb-2">Friday</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>09:30 — English (Primary)</li>
            <li>12:00 — Science (Lower Secondary)</li>
          </ul>
        </div>
      </div>

      <p className="text-sm opacity-75">
        Finalised times may vary by group. We’ll confirm exact slots during
        enrolment.
      </p>
    </div>
  );
}
