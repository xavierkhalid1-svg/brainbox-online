export const metadata = {
  title: "Pricing — Brain Box Online",
  description: "Simple plans for families and groups.",
};

const plans = [
  {
    name: "Small Group",
    price: "£xx / lesson",
    blurb: "3–6 learners. Weekly 60-min sessions.",
    points: ["Qualified UK teachers", "Structured scheme of work", "Progress feedback each half-term"],
  },
  {
    name: "1:1 Tuition",
    price: "£xx / lesson",
    blurb: "Personalised 1:1 support.",
    points: ["Tailored goals", "Flexible timetable", "Parent feedback after sessions"],
  },
  {
    name: "Sibling / Pod",
    price: "Custom",
    blurb: "Private small group for siblings or friends.",
    points: ["Choose times that suit you", "Shared goals & reports", "Best value per learner"],
  },
];

export default function Page() {
  return (
    <div className="space-y-6">
      <h1>Pricing</h1>
      <p>Simple, transparent options — contact us for current rates and availability.</p>

      <div className="grid gap-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1">
        {plans.map((p) => (
          <div key={p.name} className="rounded border border-white/10 p-5">
            <h3 className="mb-1">{p.name}</h3>
            <div className="text-2xl font-bold mb-2">{p.price}</div>
            <p className="mb-3 opacity-90">{p.blurb}</p>
            <ul className="list-disc pl-5 space-y-1">
              {p.points.map((pt) => (
                <li key={pt}>{pt}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <p className="text-sm opacity-75">
        Prices depend on level and timetable. We’ll confirm exact rates during your
        call.
      </p>
    </div>
  );
}
