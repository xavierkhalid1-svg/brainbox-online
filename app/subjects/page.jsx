export const metadata = {
  title: "Subjects — Brain Box Online",
  description: "Maths, English, Science and more.",
};

export default function Page() {
  return (
    <div className="space-y-6">
      <h1>Subjects</h1>
      <p>We currently teach core subjects aligned to the UK curriculum.</p>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <div className="rounded border border-white/10 p-4">
          <h3 className="mb-2">Maths</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Primary (KS1–KS2)</li>
            <li>Lower Secondary (KS3)</li>
          </ul>
        </div>

        <div className="rounded border border-white/10 p-4">
          <h3 className="mb-2">English</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Primary (KS1–KS2)</li>
            <li>Lower Secondary (KS3)</li>
          </ul>
        </div>

        <div className="rounded border border-white/10 p-4">
          <h3 className="mb-2">Science</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Primary (KS2)</li>
            <li>Lower Secondary (KS3)</li>
          </ul>
        </div>
      </div>

      <p className="text-sm opacity-75">
        Looking for something else? Ask us — we may be able to place your child
        in a suitable small group or arrange 1:1.
      </p>
    </div>
  );
}
