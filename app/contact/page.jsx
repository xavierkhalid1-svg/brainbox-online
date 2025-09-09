export const metadata = {
  title: "Contact — Brain Box Online",
  description: "Get in touch with Brain Box Online.",
};

export default function ContactPage() {
  return (
    <div className="space-y-6">
      <h1>Contact</h1>
      <p className="text-neutral-300">
        Questions about enrolment, timetables, or pricing? Send us a message and we’ll get back to you.
      </p>

      {/* Netlify Forms: static-friendly, no JS required */}
      <form
        name="contact"
        method="POST"
        action="/contact/success"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        className="max-w-xl space-y-4"
      >
        {/* Required hidden input for Netlify */}
        <input type="hidden" name="form-name" value="contact" />
        {/* Honeypot */}
        <p className="hidden">
          <label>
            Don’t fill this out: <input name="bot-field" />
          </label>
        </p>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="block mb-1 text-sm">First name</label>
            <input name="firstName" className="input w-full" required />
          </div>
          <div>
            <label className="block mb-1 text-sm">Last name</label>
            <input name="lastName" className="input w-full" required />
          </div>
        </div>

        <div>
          <label className="block mb-1 text-sm">Email</label>
          <input type="email" name="email" className="input w-full" required />
        </div>

        <div>
          <label className="block mb-1 text-sm">Message</label>
          <textarea name="message" rows={6} className="input w-full" required />
        </div>

        <button className="btn btn-lg" type="submit">Send message</button>
      </form>

      <p className="text-xs text-neutral-400">
        This form is powered by Netlify Forms. Submissions will show up in your Netlify dashboard.
      </p>
    </div>
  );
}
