import { useState } from "react";

const CONTACT_DETAILS = [
  {
    icon: "📍",
    label: "Adress",
    value: "N0 7, iyarere, aguda, surulere.",
    sub: "Lagos Nigeria",
  },
  {
    icon: "📞",
    label: "Phone",
    value: "08104819650",
    sub: "Mon–Fri, 9AM–7PM",
  },
  {
    icon: "✉️",
    label: "Email",
    value: "favourakinwunmi06@gmail.com",
    sub: "We reply within 24 hours",
  },
];

const HOURS = [
  { day: "Monday – Friday", time: "9:00 AM – 7:00 PM" },
  { day: "Saturday", time: "10:00 AM – 6:00 PM" },
  { day: "Sunday", time: "11:00 AM – 5:00 PM" },
  { day: "Public Holidays", time: "By appointment only" },
];

const SUBJECTS = [
  "General Enquiry",
  "Order Support",
  "Book a Stylist Session",
  "Repair & Restoration",
  "Bespoke Engraving",
  "Returns & Refunds",
  "Press & Partnerships",
];

const SOCIALS = [
  {
    name: "Instagram",
    href: "https://instagram.com",
    color: "hover:text-pink-500 hover:border-pink-300",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    name: "TikTok",
    href: "https://tiktok.com",
    color: "hover:text-black hover:border-gray-400",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.75a4.85 4.85 0 01-1.01-.06z" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    href: "https://youtube.com",
    color: "hover:text-red-500 hover:border-red-300",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
];

export default function ContactPage() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "General Enquiry",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<{
    firstName?: string;
    lastName?: string;
    email?: string;
    message?: string;
  }>({});

  const validate = () => {
    const e: typeof errors = {};
    if (!form.firstName.trim()) e.firstName = "First name is required";
    if (!form.lastName.trim()) e.lastName = "Last name is required";
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email))
      e.email = "A valid email is required";
    if (!form.message.trim()) e.message = "Please enter a message";
    return e;
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1400));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div className="bg-gray-900 text-white px-6 py-14 sm:px-10">
        <div className="max-w-7xl mx-auto">
          <p className="text-yellow-400 text-xs tracking-[0.3em] uppercase font-medium mb-3">
            Get In Touch
          </p>
          <h1 className="text-4xl sm:text-5xl font-light leading-tight mb-4">
            Contact <span className="italic text-yellow-400">Us</span>
          </h1>
          <p className="text-gray-400 text-sm font-light max-w-md">
            We respond to every enquiry within one business day.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-10 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* ── Left Info Panel ── */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {/* Contact details */}
            <div className="bg-gray-900 text-white rounded-2xl p-7">
              <h2 className="text-xl font-semibold text-white mb-6">
                Let's start a conversation.
              </h2>
              <p className="text-gray-400 text-sm font-light leading-relaxed mb-8">
                Whether you have a question about our collection, need help with
                an order, or want to book a personal styling session — we're
                here.
              </p>

              <div className="flex flex-col gap-6">
                {CONTACT_DETAILS.map((d) => (
                  <div key={d.label} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center text-lg flex-shrink-0">
                      {d.icon}
                    </div>
                    <div>
                      <p className="text-[10px] tracking-[0.2em] uppercase text-yellow-400 font-medium mb-0.5">
                        {d.label}
                      </p>
                      <p className="text-white text-sm font-light">{d.value}</p>
                      <p className="text-gray-500 text-xs">{d.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Opening hours */}
            <div className="bg-white rounded-2xl border border-gray-100 p-7">
              <h3 className="text-sm font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <span className="text-yellow-500">🕐</span> Opening Hours
              </h3>
              <div className="divide-y divide-gray-50">
                {HOURS.map(({ day, time }) => (
                  <div
                    key={day}
                    className="flex justify-between py-2.5 text-sm"
                  >
                    <span className="text-gray-500 font-light">{day}</span>
                    <span className="text-gray-800 font-medium">{time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Social links */}
            <div className="bg-white rounded-2xl border border-gray-100 p-7">
              <h3 className="text-sm font-semibold text-gray-900 mb-4">
                Follow Us
              </h3>
              <div className="flex gap-3">
                {SOCIALS.map((s) => (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.name}
                    className={`flex-1 flex flex-col items-center gap-1.5 py-3 rounded-xl border border-gray-100 text-gray-400 transition-all duration-200 ${s.color}`}
                  >
                    {s.icon}
                    <span className="text-[10px] font-medium tracking-wide">
                      {s.name}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* ── Right Form Panel ── */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-2xl mb-5">
                    ✓
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Message Received!
                  </h3>
                  <p className="text-gray-500 text-sm font-light max-w-sm">
                    Thank you,{" "}
                    <span className="font-medium text-gray-800">
                      {form.firstName}
                    </span>
                    . We'll be in touch within one business day.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setForm({
                        firstName: "",
                        lastName: "",
                        email: "",
                        phone: "",
                        subject: "General Enquiry",
                        message: "",
                      });
                    }}
                    className="mt-8 text-sm font-medium text-yellow-700 border border-yellow-300 hover:bg-yellow-50 px-6 py-2.5 rounded-full transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <>
                  <h3 className="text-xl font-semibold text-gray-900 mb-7">
                    Send us a message
                  </h3>

                  <form
                    onSubmit={handleSubmit}
                    noValidate
                    className="flex flex-col gap-5"
                  >
                    {/* Name row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-[10px] tracking-[0.2em] uppercase text-gray-400 font-semibold mb-1.5">
                          First Name <span className="text-red-400">*</span>
                        </label>
                        <input
                          name="firstName"
                          value={form.firstName}
                          onChange={handleChange}
                          placeholder="Jane"
                          className={`w-full border rounded-xl px-4 py-3 text-sm font-light text-gray-800 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-300 transition-all
                            ${errors.firstName ? "border-red-300 bg-red-50" : "border-gray-200 bg-gray-50 focus:bg-white"}`}
                        />
                        {errors.firstName && (
                          <p className="text-red-400 text-xs mt-1">
                            {errors.firstName}
                          </p>
                        )}
                      </div>
                      <div>
                        <label className="block text-[10px] tracking-[0.2em] uppercase text-gray-400 font-semibold mb-1.5">
                          Last Name <span className="text-red-400">*</span>
                        </label>
                        <input
                          name="lastName"
                          value={form.lastName}
                          onChange={handleChange}
                          placeholder="Smith"
                          className={`w-full border rounded-xl px-4 py-3 text-sm font-light text-gray-800 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-300 transition-all
                            ${errors.lastName ? "border-red-300 bg-red-50" : "border-gray-200 bg-gray-50 focus:bg-white"}`}
                        />
                        {errors.lastName && (
                          <p className="text-red-400 text-xs mt-1">
                            {errors.lastName}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Email + Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-[10px] tracking-[0.2em] uppercase text-gray-400 font-semibold mb-1.5">
                          Email <span className="text-red-400">*</span>
                        </label>
                        <input
                          name="email"
                          type="email"
                          value={form.email}
                          onChange={handleChange}
                          placeholder="jane@example.com"
                          className={`w-full border rounded-xl px-4 py-3 text-sm font-light text-gray-800 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-300 transition-all
                            ${errors.email ? "border-red-300 bg-red-50" : "border-gray-200 bg-gray-50 focus:bg-white"}`}
                        />
                        {errors.email && (
                          <p className="text-red-400 text-xs mt-1">
                            {errors.email}
                          </p>
                        )}
                      </div>
                      <div>
                        <label className="block text-[10px] tracking-[0.2em] uppercase text-gray-400 font-semibold mb-1.5">
                          Phone{" "}
                          <span className="text-gray-300">(optional)</span>
                        </label>
                        <input
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="+234 9144567897"
                          className="w-full border border-gray-200 bg-gray-50 focus:bg-white rounded-xl px-4 py-3 text-sm font-light text-gray-800 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-300 transition-all"
                        />
                      </div>
                    </div>

                    {/* Subject */}
                    <div>
                      <label className="block text-[10px] tracking-[0.2em] uppercase text-gray-400 font-semibold mb-1.5">
                        Subject
                      </label>
                      <select
                        name="subject"
                        value={form.subject}
                        onChange={handleChange}
                        className="w-full border border-gray-200 bg-gray-50 focus:bg-white rounded-xl px-4 py-3 text-sm font-light text-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-300 transition-all appearance-none cursor-pointer"
                      >
                        {SUBJECTS.map((s) => (
                          <option key={s}>{s}</option>
                        ))}
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-[10px] tracking-[0.2em] uppercase text-gray-400 font-semibold mb-1.5">
                        Message <span className="text-red-400">*</span>
                      </label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        rows={5}
                        placeholder="Tell us how we can help…"
                        className={`w-full border rounded-xl px-4 py-3 text-sm font-light text-gray-800 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-300 transition-all resize-none
                          ${errors.message ? "border-red-300 bg-red-50" : "border-gray-200 bg-gray-50 focus:bg-white"}`}
                      />
                      {errors.message && (
                        <p className="text-red-400 text-xs mt-1">
                          {errors.message}
                        </p>
                      )}
                    </div>

                    {/* Submit */}
                    <div className="flex items-center justify-between pt-2">
                      <button
                        type="submit"
                        disabled={loading}
                        className={`flex items-center gap-2 bg-gray-900 hover:bg-yellow-400 hover:text-gray-900 text-white font-semibold text-sm tracking-wide px-8 py-3.5 rounded-full transition-all duration-300
                          ${loading ? "opacity-60 cursor-not-allowed" : ""}`}
                      >
                        {loading ? (
                          <>
                            <svg
                              className="w-4 h-4 animate-spin"
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              />
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8v8z"
                              />
                            </svg>
                            Sending…
                          </>
                        ) : (
                          "Send Message →"
                        )}
                      </button>
                    </div>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
