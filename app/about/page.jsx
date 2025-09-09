export const metadata = {
  title: "About — Brain Box Online",
  description: "UK-curriculum online tuition for homeschooling families and expats.",
};

export default function AboutPage() {
  return (
    <div className="space-y-6">
      <h1>About Brain Box Online</h1>
      <p className="text-neutral-300">
        We provide structured, UK-curriculum tuition delivered by qualified teachers.
        Our lessons are designed for homeschooling families and expats who want a
        consistent pathway through Primary and Lower Secondary.
      </p>
      <ul className="list-disc pl-6 text-neutral-200 space-y-2">
        <li>Qualified UK teachers</li>
        <li>Clear schemes of work & weekly goals</li>
        <li>Small groups and individual attention</li>
        <li>Progress reports parents can actually use</li>
      </ul>
      <p className="text-neutral-300">
        Want to learn more? <a href="/contact">Send us a message</a> and we’ll
        help you plan the right route for your child.
      </p>
    </div>
  );
}
