export const metadata = {
  title: "Contact — Brain Box Online",
  description:
    "Questions about enrolment, timetables, or pricing? Send us a message and we’ll get back to you.",
};

export default function Page() {
  return (
    <div className="space-y-8">
      <h1>Contact</h1>
      <p>
        Questions about enrolment, timetables, or pricing? Send us a message and
        we’ll get back to you.
      </p>

      <form
        name="contact"
        method="POST"
        action="/contact/success"
        data-netlify="true"
        netlify-honeypot="bot-field"
        className="space-y-4 max-w-xl"
      >
        {/* Netlify needs these */}
        <input type="hidden" name="form-name" value="contact" />
        <p className="hidden">
          <label>
            Don’t fill this out: <input name="bot-field" />
          </label>
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <label className="block">
            <span className="block mb-1">First name</span>
            <input
              className="input w-full"
              type="text"
              name="firstName"
              required
            />
          </label>

          <label className="block">
            <span className="block mb-1">Last name</span>
            <input
              className="input w-full"
              type="text"
              name="lastName"
              required
            />
          </label>
        </div>

        <label className="block">
          <span className="block mb-1">Email</span>
          <input className="input w-full" type="email" name="email" required />
        </label>

        <label className="block">
          <span className="block mb-1">Message</span>
          <textarea
            className="input w-full"
            name="message"
            rows={6}
            required
          />
        </label>

        <button className="btn btn-lg" type="submit">
          Send message
        </button>
      </form>
    </div>
  );
}
