const SERVICES = [
  {
    icon: "🚚",
    title: "White-Glove Delivery",
    subtitle: "Concierge Shipping",
    description:
      "Every order is hand-packaged in our signature matte-black boxes and delivered to your door within 48 hours. We partner exclusively with premium courier services.",
    features: [
      "Same-day dispatch on orders before 2PM",
      "Real-time GPS tracking",
      "Signature required on delivery",
      "Insured up to $10,000",
    ],
    accent: "bg-yellow-50 border-yellow-200",
    iconBg: "bg-yellow-100 text-yellow-700",
    tag: "Shipping",
  },
  {
    icon: "🛡️",
    title: "Lifetime Authenticity",
    subtitle: "Guarantee & Certification",
    description:
      "Every item in our collection is individually authenticated by our in-house experts and comes with a serialised certificate of provenance.",
    features: [
      "Expert authentication on every item",
      "Digital certificate of authenticity",
      "Blockchain provenance record",
      "Free re-authentication anytime",
    ],
    accent: "bg-blue-50 border-blue-200",
    iconBg: "bg-blue-100 text-blue-700",
    tag: "Trust",
  },
  {
    icon: "🎨",
    title: "Personal Stylist",
    subtitle: "Private Shopping Experience",
    description:
      "Book a 1-on-1 session with one of our curators, available via video or in our flagship showroom. We help you build a collection that tells your story.",
    features: [
      "30 or 60-minute sessions",
      "Virtual or in-person available",
      "Curated gift recommendations",
      "Seasonal style updates",
    ],
    accent: "bg-green-50 border-green-200",
    iconBg: "bg-green-100 text-green-700",
    tag: "Experience",
  },
  {
    icon: "🔧",
    title: "Repair & Restoration",
    subtitle: "Expert Craftsmanship",
    description:
      "Our master craftspeople can restore, resize, re-leather, and refinish any item purchased from us — keeping your investment looking impeccable for decades.",
    features: [
      "Watch servicing & polishing",
      "Leather conditioning & repair",
      "Free first-year maintenance",
      "Loaner items during service",
    ],
    accent: "bg-orange-50 border-orange-200",
    iconBg: "bg-orange-100 text-orange-700",
    tag: "Care",
  },
  {
    icon: "✍️",
    title: "Bespoke Engraving",
    subtitle: "Personalisation Studio",
    description:
      "Transform any purchase into a one-of-a-kind heirloom. Our laser and hand engraving studio accepts custom text, monograms, and artwork.",
    features: [
      "Laser & hand engraving",
      "Monogram & artwork accepted",
      "Preview before commitment",
      "Gift wrapping included",
    ],
    accent: "bg-purple-50 border-purple-200",
    iconBg: "bg-purple-100 text-purple-700",
    tag: "Personalise",
  },
  {
    icon: "↩️",
    title: "360-Day Returns",
    subtitle: "No-Questions Policy",
    description:
      "Change your mind? No problem. Return any item within 360 days of purchase, in any condition, for a full refund or store credit — no questions asked.",
    features: [
      "Full refund or store credit",
      "Free return shipping label",
      "No restocking fees",
      "Instant credit on drop-off",
    ],
    accent: "bg-pink-50 border-pink-200",
    iconBg: "bg-pink-100 text-pink-700",
    tag: "Peace of Mind",
  },
];

const STATS = [
  { value: "48hrs", label: "Average Delivery" },
  { value: "360", label: "Day Return Window" },
  { value: "100%", label: "Authenticity Guarantee" },
  { value: "24/7", label: "Customer Support" },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div className="bg-gray-900 text-white px-6 py-14 sm:px-10">
        <div className="max-w-7xl mx-auto">
          <p className="text-yellow-400 text-xs tracking-[0.3em] uppercase font-medium mb-3">
            What We Offer
          </p>
          <h1 className="text-4xl sm:text-5xl font-light leading-tight mb-4">
            Our <span className="italic text-yellow-400">Services</span>
          </h1>
          <p className="text-gray-400 text-sm font-light max-w-lg leading-relaxed">
            Every purchase is backed by a suite of bespoke services designed to
            protect, personalise, and enhance your investment — for life.
          </p>
        </div>
      </div>

      {/* Stats bar */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 grid grid-cols-2 sm:grid-cols-4 divide-x divide-gray-100">
          {STATS.map((stat) => (
            <div key={stat.label} className="py-6 px-6 text-center">
              <div className="text-2xl font-bold text-gray-900 mb-1">
                {stat.value}
              </div>
              <div className="text-xs text-gray-400 tracking-wide uppercase font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Intro */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 pt-14 pb-8">
        <p className="text-gray-500 text-base font-light leading-relaxed max-w-2xl">
          At Premium Store, ownership doesn't end at checkout. Our team of
          specialists and craftspeople are available to support, personalise,
          and preserve every item you choose — for the lifetime of the product.
        </p>
      </div>

      {/* Services grid */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {SERVICES.map((svc) => (
            <div
              key={svc.title}
              className={`bg-white rounded-2xl border ${svc.accent.split(" ")[1]} p-7 flex flex-col hover:shadow-lg transition-all duration-300 group`}
            >
              {/* Top row */}
              <div className="flex items-start justify-between mb-5">
                <div
                  className={`w-12 h-12 rounded-xl ${svc.iconBg} flex items-center justify-center text-xl flex-shrink-0`}
                >
                  {svc.icon}
                </div>
                <span
                  className={`text-[10px] tracking-widest uppercase font-semibold px-3 py-1 rounded-full border ${svc.accent}`}
                >
                  {svc.tag}
                </span>
              </div>

              {/* Title */}
              <p className="text-[10px] tracking-[0.2em] uppercase text-gray-400 font-medium mb-1">
                {svc.subtitle}
              </p>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 leading-tight">
                {svc.title}
              </h3>
              <p className="text-sm text-gray-500 font-light leading-relaxed mb-5 flex-1">
                {svc.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 border-t border-gray-100 pt-5">
                {svc.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-center gap-2.5 text-xs text-gray-500"
                  >
                    <span className="w-4 h-4 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0 text-gray-400 text-[10px]">
                      ✓
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Banner */}
      {/* <div className="bg-gray-900 text-white py-16 px-6 sm:px-10 text-center">
        <p className="text-yellow-400 text-xs tracking-[0.3em] uppercase font-medium mb-4">
          Get Started
        </p>
        <h2 className="text-3xl sm:text-4xl font-light mb-4">
          Ready to experience the difference?
        </h2>
        <p className="text-gray-400 text-sm font-light mb-8 max-w-md mx-auto">
          Speak to one of our curators today — no commitment required.
        </p>
        <a
          href="/contact"
          className="inline-block bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-semibold text-sm tracking-wider uppercase px-8 py-3.5 rounded-full transition-colors duration-200"
        >
          Contact Us →
        </a>
      </div> */}
    </div>
  );
}
