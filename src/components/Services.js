import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const SERVICES = [
    {
        icon: "🚚",
        title: "White-Glove Delivery",
        subtitle: "Concierge Shipping",
        description: "Every order is hand-packaged in our signature matte-black boxes and delivered to your door within 48 hours. We partner exclusively with premium courier services.",
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
        description: "Every item in our collection is individually authenticated by our in-house experts and comes with a serialised certificate of provenance.",
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
        description: "Book a 1-on-1 session with one of our curators, available via video or in our flagship showroom. We help you build a collection that tells your story.",
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
        description: "Our master craftspeople can restore, resize, re-leather, and refinish any item purchased from us — keeping your investment looking impeccable for decades.",
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
        description: "Transform any purchase into a one-of-a-kind heirloom. Our laser and hand engraving studio accepts custom text, monograms, and artwork.",
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
        description: "Change your mind? No problem. Return any item within 360 days of purchase, in any condition, for a full refund or store credit — no questions asked.",
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
    return (_jsxs("div", { className: "min-h-screen bg-gray-50", children: [_jsx("div", { className: "bg-gray-900 text-white px-6 py-14 sm:px-10", children: _jsxs("div", { className: "max-w-7xl mx-auto", children: [_jsx("p", { className: "text-yellow-400 text-xs tracking-[0.3em] uppercase font-medium mb-3", children: "What We Offer" }), _jsxs("h1", { className: "text-4xl sm:text-5xl font-light leading-tight mb-4", children: ["Our ", _jsx("span", { className: "italic text-yellow-400", children: "Services" })] }), _jsx("p", { className: "text-gray-400 text-sm font-light max-w-lg leading-relaxed", children: "Every purchase is backed by a suite of bespoke services designed to protect, personalise, and enhance your investment \u2014 for life." })] }) }), _jsx("div", { className: "bg-white border-b border-gray-100", children: _jsx("div", { className: "max-w-7xl mx-auto px-6 sm:px-10 grid grid-cols-2 sm:grid-cols-4 divide-x divide-gray-100", children: STATS.map((stat) => (_jsxs("div", { className: "py-6 px-6 text-center", children: [_jsx("div", { className: "text-2xl font-bold text-gray-900 mb-1", children: stat.value }), _jsx("div", { className: "text-xs text-gray-400 tracking-wide uppercase font-medium", children: stat.label })] }, stat.label))) }) }), _jsx("div", { className: "max-w-7xl mx-auto px-6 sm:px-10 pt-14 pb-8", children: _jsx("p", { className: "text-gray-500 text-base font-light leading-relaxed max-w-2xl", children: "At Premium Store, ownership doesn't end at checkout. Our team of specialists and craftspeople are available to support, personalise, and preserve every item you choose \u2014 for the lifetime of the product." }) }), _jsx("div", { className: "max-w-7xl mx-auto px-6 sm:px-10 pb-16", children: _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6", children: SERVICES.map((svc) => (_jsxs("div", { className: `bg-white rounded-2xl border ${svc.accent.split(" ")[1]} p-7 flex flex-col hover:shadow-lg transition-all duration-300 group`, children: [_jsxs("div", { className: "flex items-start justify-between mb-5", children: [_jsx("div", { className: `w-12 h-12 rounded-xl ${svc.iconBg} flex items-center justify-center text-xl flex-shrink-0`, children: svc.icon }), _jsx("span", { className: `text-[10px] tracking-widest uppercase font-semibold px-3 py-1 rounded-full border ${svc.accent}`, children: svc.tag })] }), _jsx("p", { className: "text-[10px] tracking-[0.2em] uppercase text-gray-400 font-medium mb-1", children: svc.subtitle }), _jsx("h3", { className: "text-xl font-semibold text-gray-900 mb-3 leading-tight", children: svc.title }), _jsx("p", { className: "text-sm text-gray-500 font-light leading-relaxed mb-5 flex-1", children: svc.description }), _jsx("ul", { className: "space-y-2 border-t border-gray-100 pt-5", children: svc.features.map((f) => (_jsxs("li", { className: "flex items-center gap-2.5 text-xs text-gray-500", children: [_jsx("span", { className: "w-4 h-4 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0 text-gray-400 text-[10px]", children: "\u2713" }), f] }, f))) })] }, svc.title))) }) })] }));
}
