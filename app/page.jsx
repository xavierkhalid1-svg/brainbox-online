import Link from "next/link";

export const metadata = {
  title: "Brain Box Online — UK-Curriculum Tuition",
  description:
    "Qualified UK teachers. Structured learning for homeschooling families and expats.",
};

export default function Page() {
  return (
    <div className="space-y-14">
      {/* Hero */}
      <section className="pt-6">
        <h1>Welcome to Brain Box Online</h1>
        <p className="mt-4 text-lg text-neutral-300 max-w-3xl">
          UK-curriculum online tuition for homeschooling families and expats.
          Small groups, clear weekly goals, and progress you can see.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/contact" className="btn btn-lg">
            Book a call
          </Link>
          <Link href="/dashboard" className="btn btn-lg" style={{ opacity: 0.9 }}>
            Explore dashboard
          </Link>
        </div>
      </section>

      {/* Quick Links */}
      <section>
        <h2 className="mb-4">Quick links</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Tile
            href="/dashboard"
            title="Timetable"
            desc="Weekly schedule and upcoming lessons."
          />
          <Tile
            href="/dashboard"
            title="Subjects"
            desc="Maths, English, Science and more."
          />
          <Tile
            href="/dashboard"
            title="Pricing"
            desc="Simple plans for families and groups."
          />
          <Tile
            href="/contact"
            title="Book a call"
            desc="Talk to a teacher coordinator."
          />
        </div>
      </section>

      {/* Why choose us */}
      <section>
        <h2 className="mb-4">Why families choose us</h2>
        <ul className="list-disc pl-6 space-y-2 text-neutral-200">
          <li>Qualified UK teachers</li>
          <li>Clear schemes of work & weekly goals</li>
          <li>Small groups and individual attention</li>
          <li>Progress reports parents can actually use</li>
        </ul>
      </section>

      {/* CTA band */}
      <section className="rounded-md border border-white/10 p-6">
        <h3 className="text-xl font-bold">Ready to get started?</h3>
        <p className="mt-2 text-neutral-300">
          Tell us about your child and we’ll map the right route.
        </p>
        <div className="mt-4">
          <Link href="/contact" className="btn btn-lg">
            Send us a message
          </Link>
        </div>
      </section>
    </div>
  );
}

function Tile({ href, title, desc }) {
  return (
    <Link
      href={href}
      className="block rounded-md border border-white/10 p-5 transition hover:bg-white/5"
    >
      <div className="text-lg font-semibold">{title}</div>
      <p className="mt-1 text-sm text-neutral-300">{desc}</p>
    </Link>
  );
}
