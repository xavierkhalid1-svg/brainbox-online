export const metadata = { title: "Brain Box Online — UK Curriculum Tuition" };

export default function Page() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-4xl px-4 text-center space-y-6">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
          Welcome to Brain Box Online
        </h1>
        <p className="text-lg text-neutral-300">
          UK-curriculum online tuition for homeschooling families and expats.
          Qualified teachers. Structured learning. Real progress.
        </p>

        <div className="flex items-center justify-center gap-4 pt-2">
          <a href="/dashboard" className="btn btn-lg">Get started</a>
          <a href="/teacher" className="btn btn-lg" style={{ background: "transparent", border: "1px solid #2bdcd2" }}>
            Meet the teacher
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-10 text-left">
          <Feature title="Qualified UK Teachers" text="Experienced educators delivering the National Curriculum." />
          <Feature title="Structured Curriculum" text="Clear scope & sequence for KS1–KS4 with check-ins." />
          <Feature title="Small Group Focus" text="Live sessions and support that adapts to each child." />
          <Feature title="Parent Portal" text="Progress, assignments, and communication in one place." />
        </div>
      </div>
    </section>
  );
}

function Feature({ title, text }) {
  return (
    <div className="rounded-md border border-white/10 p-4 bg-white/5">
      <h3 className="font-semibold">{title}</h3>
      <p className="mt-1 text-sm text-neutral-300">{text}</p>
    </div>
  );
}
