import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
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
        icon: (_jsx("svg", { viewBox: "0 0 24 24", fill: "currentColor", className: "w-5 h-5", children: _jsx("path", { d: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" }) })),
    },
    {
        name: "TikTok",
        href: "https://tiktok.com",
        color: "hover:text-black hover:border-gray-400",
        icon: (_jsx("svg", { viewBox: "0 0 24 24", fill: "currentColor", className: "w-5 h-5", children: _jsx("path", { d: "M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.75a4.85 4.85 0 01-1.01-.06z" }) })),
    },
    {
        name: "YouTube",
        href: "https://youtube.com",
        color: "hover:text-red-500 hover:border-red-300",
        icon: (_jsx("svg", { viewBox: "0 0 24 24", fill: "currentColor", className: "w-5 h-5", children: _jsx("path", { d: "M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" }) })),
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
    const [errors, setErrors] = useState({});
    const validate = () => {
        const e = {};
        if (!form.firstName.trim())
            e.firstName = "First name is required";
        if (!form.lastName.trim())
            e.lastName = "Last name is required";
        if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email))
            e.email = "A valid email is required";
        if (!form.message.trim())
            e.message = "Please enter a message";
        return e;
    };
    const handleChange = (e) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    const handleSubmit = async (e) => {
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
    return (_jsxs("div", { className: "min-h-screen bg-gray-50", children: [_jsx("div", { className: "bg-gray-900 text-white px-6 py-14 sm:px-10", children: _jsxs("div", { className: "max-w-7xl mx-auto", children: [_jsx("p", { className: "text-yellow-400 text-xs tracking-[0.3em] uppercase font-medium mb-3", children: "Get In Touch" }), _jsxs("h1", { className: "text-4xl sm:text-5xl font-light leading-tight mb-4", children: ["Contact ", _jsx("span", { className: "italic text-yellow-400", children: "Us" })] }), _jsx("p", { className: "text-gray-400 text-sm font-light max-w-md", children: "We respond to every enquiry within one business day." })] }) }), _jsx("div", { className: "max-w-7xl mx-auto px-6 sm:px-10 py-12", children: _jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-5 gap-10", children: [_jsxs("div", { className: "lg:col-span-2 flex flex-col gap-6", children: [_jsxs("div", { className: "bg-gray-900 text-white rounded-2xl p-7", children: [_jsx("h2", { className: "text-xl font-semibold text-white mb-6", children: "Let's start a conversation." }), _jsx("p", { className: "text-gray-400 text-sm font-light leading-relaxed mb-8", children: "Whether you have a question about our collection, need help with an order, or want to book a personal styling session \u2014 we're here." }), _jsx("div", { className: "flex flex-col gap-6", children: CONTACT_DETAILS.map((d) => (_jsxs("div", { className: "flex items-start gap-4", children: [_jsx("div", { className: "w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center text-lg flex-shrink-0", children: d.icon }), _jsxs("div", { children: [_jsx("p", { className: "text-[10px] tracking-[0.2em] uppercase text-yellow-400 font-medium mb-0.5", children: d.label }), _jsx("p", { className: "text-white text-sm font-light", children: d.value }), _jsx("p", { className: "text-gray-500 text-xs", children: d.sub })] })] }, d.label))) })] }), _jsxs("div", { className: "bg-white rounded-2xl border border-gray-100 p-7", children: [_jsxs("h3", { className: "text-sm font-semibold text-gray-900 mb-4 flex items-center gap-2", children: [_jsx("span", { className: "text-yellow-500", children: "\uD83D\uDD50" }), " Opening Hours"] }), _jsx("div", { className: "divide-y divide-gray-50", children: HOURS.map(({ day, time }) => (_jsxs("div", { className: "flex justify-between py-2.5 text-sm", children: [_jsx("span", { className: "text-gray-500 font-light", children: day }), _jsx("span", { className: "text-gray-800 font-medium", children: time })] }, day))) })] }), _jsxs("div", { className: "bg-white rounded-2xl border border-gray-100 p-7", children: [_jsx("h3", { className: "text-sm font-semibold text-gray-900 mb-4", children: "Follow Us" }), _jsx("div", { className: "flex gap-3", children: SOCIALS.map((s) => (_jsxs("a", { href: s.href, target: "_blank", rel: "noopener noreferrer", "aria-label": s.name, className: `flex-1 flex flex-col items-center gap-1.5 py-3 rounded-xl border border-gray-100 text-gray-400 transition-all duration-200 ${s.color}`, children: [s.icon, _jsx("span", { className: "text-[10px] font-medium tracking-wide", children: s.name })] }, s.name))) })] })] }), _jsx("div", { className: "lg:col-span-3", children: _jsx("div", { className: "bg-white rounded-2xl border border-gray-100 p-8 shadow-sm", children: submitted ? (_jsxs("div", { className: "flex flex-col items-center justify-center py-16 text-center", children: [_jsx("div", { className: "w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-2xl mb-5", children: "\u2713" }), _jsx("h3", { className: "text-xl font-semibold text-gray-900 mb-2", children: "Message Received!" }), _jsxs("p", { className: "text-gray-500 text-sm font-light max-w-sm", children: ["Thank you,", " ", _jsx("span", { className: "font-medium text-gray-800", children: form.firstName }), ". We'll be in touch within one business day."] }), _jsx("button", { onClick: () => {
                                                setSubmitted(false);
                                                setForm({
                                                    firstName: "",
                                                    lastName: "",
                                                    email: "",
                                                    phone: "",
                                                    subject: "General Enquiry",
                                                    message: "",
                                                });
                                            }, className: "mt-8 text-sm font-medium text-yellow-700 border border-yellow-300 hover:bg-yellow-50 px-6 py-2.5 rounded-full transition-colors", children: "Send Another Message" })] })) : (_jsxs(_Fragment, { children: [_jsx("h3", { className: "text-xl font-semibold text-gray-900 mb-7", children: "Send us a message" }), _jsxs("form", { onSubmit: handleSubmit, noValidate: true, className: "flex flex-col gap-5", children: [_jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-5", children: [_jsxs("div", { children: [_jsxs("label", { className: "block text-[10px] tracking-[0.2em] uppercase text-gray-400 font-semibold mb-1.5", children: ["First Name ", _jsx("span", { className: "text-red-400", children: "*" })] }), _jsx("input", { name: "firstName", value: form.firstName, onChange: handleChange, placeholder: "Jane", className: `w-full border rounded-xl px-4 py-3 text-sm font-light text-gray-800 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-300 transition-all
                            ${errors.firstName ? "border-red-300 bg-red-50" : "border-gray-200 bg-gray-50 focus:bg-white"}` }), errors.firstName && (_jsx("p", { className: "text-red-400 text-xs mt-1", children: errors.firstName }))] }), _jsxs("div", { children: [_jsxs("label", { className: "block text-[10px] tracking-[0.2em] uppercase text-gray-400 font-semibold mb-1.5", children: ["Last Name ", _jsx("span", { className: "text-red-400", children: "*" })] }), _jsx("input", { name: "lastName", value: form.lastName, onChange: handleChange, placeholder: "Smith", className: `w-full border rounded-xl px-4 py-3 text-sm font-light text-gray-800 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-300 transition-all
                            ${errors.lastName ? "border-red-300 bg-red-50" : "border-gray-200 bg-gray-50 focus:bg-white"}` }), errors.lastName && (_jsx("p", { className: "text-red-400 text-xs mt-1", children: errors.lastName }))] })] }), _jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-5", children: [_jsxs("div", { children: [_jsxs("label", { className: "block text-[10px] tracking-[0.2em] uppercase text-gray-400 font-semibold mb-1.5", children: ["Email ", _jsx("span", { className: "text-red-400", children: "*" })] }), _jsx("input", { name: "email", type: "email", value: form.email, onChange: handleChange, placeholder: "jane@example.com", className: `w-full border rounded-xl px-4 py-3 text-sm font-light text-gray-800 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-300 transition-all
                            ${errors.email ? "border-red-300 bg-red-50" : "border-gray-200 bg-gray-50 focus:bg-white"}` }), errors.email && (_jsx("p", { className: "text-red-400 text-xs mt-1", children: errors.email }))] }), _jsxs("div", { children: [_jsxs("label", { className: "block text-[10px] tracking-[0.2em] uppercase text-gray-400 font-semibold mb-1.5", children: ["Phone", " ", _jsx("span", { className: "text-gray-300", children: "(optional)" })] }), _jsx("input", { name: "phone", value: form.phone, onChange: handleChange, placeholder: "+234 9144567897", className: "w-full border border-gray-200 bg-gray-50 focus:bg-white rounded-xl px-4 py-3 text-sm font-light text-gray-800 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-300 transition-all" })] })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-[10px] tracking-[0.2em] uppercase text-gray-400 font-semibold mb-1.5", children: "Subject" }), _jsx("select", { name: "subject", value: form.subject, onChange: handleChange, className: "w-full border border-gray-200 bg-gray-50 focus:bg-white rounded-xl px-4 py-3 text-sm font-light text-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-300 transition-all appearance-none cursor-pointer", children: SUBJECTS.map((s) => (_jsx("option", { children: s }, s))) })] }), _jsxs("div", { children: [_jsxs("label", { className: "block text-[10px] tracking-[0.2em] uppercase text-gray-400 font-semibold mb-1.5", children: ["Message ", _jsx("span", { className: "text-red-400", children: "*" })] }), _jsx("textarea", { name: "message", value: form.message, onChange: handleChange, rows: 5, placeholder: "Tell us how we can help\u2026", className: `w-full border rounded-xl px-4 py-3 text-sm font-light text-gray-800 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-300 transition-all resize-none
                          ${errors.message ? "border-red-300 bg-red-50" : "border-gray-200 bg-gray-50 focus:bg-white"}` }), errors.message && (_jsx("p", { className: "text-red-400 text-xs mt-1", children: errors.message }))] }), _jsx("div", { className: "flex items-center justify-between pt-2", children: _jsx("button", { type: "submit", disabled: loading, className: `flex items-center gap-2 bg-gray-900 hover:bg-yellow-400 hover:text-gray-900 text-white font-semibold text-sm tracking-wide px-8 py-3.5 rounded-full transition-all duration-300
                          ${loading ? "opacity-60 cursor-not-allowed" : ""}`, children: loading ? (_jsxs(_Fragment, { children: [_jsxs("svg", { className: "w-4 h-4 animate-spin", viewBox: "0 0 24 24", fill: "none", children: [_jsx("circle", { className: "opacity-25", cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "4" }), _jsx("path", { className: "opacity-75", fill: "currentColor", d: "M4 12a8 8 0 018-8v8z" })] }), "Sending\u2026"] })) : ("Send Message →") }) })] })] })) }) })] }) })] }));
}
