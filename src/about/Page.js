import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { bolu, dami, favkins, tola } from "../assets/assests";
import { Package, Shield, Truck } from "lucide-react";
const VALUES = [
    {
        icon: Package,
        title: "Curated for you",
        description: "From premium headphones to designer backpacks, we pick only the stuff we'd actually use ourselves.",
        color: "bg-blue-50",
        iconColor: "text-blue-500",
    },
    {
        icon: Shield,
        title: "Quality, always",
        description: "No shortcuts. Every product is checked before it reaches you. If it's not right, we'll make it right.",
        color: "bg-yellow-50",
        iconColor: "text-yellow-500",
    },
    {
        icon: Truck,
        title: "Fast & Stressfree shipping",
        description: "Because waiting is no fun. Get your gear quickly and track it every step of the way.",
        color: "bg-rose-50",
        iconColor: "text-rose-500",
    },
];
const TEAM = [
    {
        name: "Omorinbola Favour",
        role: "Founder",
        image: favkins,
        bio: "Finds cool stuff so you don't have to",
    },
    {
        name: "Akinwunmi Jokotola",
        role: "Product Hunter",
        image: tola,
        bio: "Always looking for the next great thing",
    },
    {
        name: "Boluwatifeh Akinwunmi",
        role: "Customer Love",
        image: bolu,
        bio: "Here to make your day better",
    },
    {
        name: "Damilola john",
        role: "Logistic Wizard",
        image: dami,
        bio: "Gets your order to you fast",
    },
];
export default function AboutPage() {
    return (_jsxs("main", { className: "bg-white", children: [_jsx("section", { className: "bg-gradient-to-br from-blue-900 to-blue-600 text-white px-6 py-20", children: _jsxs("div", { className: "max-w-3xl mx-auto text-center", children: [_jsx("h1", { className: "text-4xl sm:text-5xl font-bold mb-6", children: "Welcome to Omorinbola's Store" }), _jsx("p", { className: "text-xl text-blue-100 leading-relaxed", children: "We sell Premium headphones, sleek backpacks, quality accessories, we find them, test them, and bring them to you. No fluff, just the good stuff." })] }) }), _jsx("section", { className: "py-20 px-6", children: _jsxs("div", { className: "max-w-4xl mx-auto", children: [_jsx("h2", { className: "text-3xl font-bold text-gray-800 mb-6", children: "Here's the thing" }), _jsx("p", { className: "text-lg text-gray-600 leading-relaxed mb-4", children: "Shopping online can be a mess. Too many choices, too many cheap knockoffs, too much \"meh.\" We started Omorinbola's Store because we believe you deserve better." }), _jsx("p", { className: "text-lg text-gray-600 leading-relaxed", children: "Whether it's noise-cancelling headphones for your commute, a backpack that actually lasts, or a wallet that ages beautifully, or any product you need we've got you covered. We test everything, so you don't have to gamble." })] }) }), _jsx("section", { className: "py-20 px-6 bg-gray-50", children: _jsxs("div", { className: "max-w-6xl mx-auto", children: [_jsx("h2", { className: "text-3xl font-bold text-gray-800 text-center mb-4", children: "Three things we never compromise on" }), _jsx("p", { className: "text-gray-500 text-center mb-12 max-w-xl mx-auto", children: "Simple promises we keep, every single day." }), _jsx("div", { className: "grid md:grid-cols-3 gap-8", children: VALUES.map((value, i) => {
                                const Icon = value.icon;
                                return (_jsxs("div", { className: "bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow", children: [_jsx("div", { className: `w-14 h-14 rounded-xl ${value.color} flex items-center justify-center mb-6`, children: _jsx(Icon, { className: `w-6 h-6 ${value.iconColor}` }) }), _jsx("h3", { className: "text-xl font-semibold text-gray-800 mb-3", children: value.title }), _jsx("p", { className: "text-gray-500 leading-relaxed", children: value.description })] }, i));
                            }) })] }) }), _jsx("section", { className: "py-16 px-6", children: _jsxs("div", { className: "max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8", children: [_jsxs("div", { className: "text-center", children: [_jsx("div", { className: "text-3xl font-bold text-blue-600 mb-1", children: "50K+" }), _jsx("div", { className: "text-sm text-gray-500", children: "Happy humans" })] }), _jsxs("div", { className: "text-center", children: [_jsx("div", { className: "text-3xl font-bold text-blue-600 mb-1", children: "1000+" }), _jsx("div", { className: "text-sm text-gray-500", children: "Products" })] }), _jsxs("div", { className: "text-center", children: [_jsx("div", { className: "text-3xl font-bold text-blue-600 mb-1", children: "15K+" }), _jsx("div", { className: "text-sm text-gray-500", children: "5-star reviews" })] }), _jsxs("div", { className: "text-center", children: [_jsx("div", { className: "text-3xl font-bold text-blue-600 mb-1", children: "3-day" }), _jsx("div", { className: "text-sm text-gray-500", children: "Shipping" })] })] }) }), _jsx("section", { className: "py-20 px-6 bg-gray-50", children: _jsxs("div", { className: "max-w-6xl mx-auto", children: [_jsx("h2", { className: "text-3xl font-bold text-gray-800 text-center mb-4", children: "The faces behind your orders" }), _jsx("p", { className: "text-gray-500 text-center mb-12 max-w-xl mx-auto", children: "We're the ones packing your boxes, answering your questions, and finding the next thing you'll love." }), _jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-8", children: TEAM.map((member, i) => (_jsxs("div", { className: "text-center", children: [_jsx("div", { className: "w-40 h-40 mx-auto mb-4 rounded-full overflow-hidden bg-gray-100 border-4 border-white shadow-md", children: _jsx("img", { src: member.image, alt: member.name, className: "w-full h-full object-cover object-top" }) }), _jsx("h3", { className: "font-semibold text-gray-800", children: member.name }), _jsx("p", { className: "text-blue-600 text-sm mb-2", children: member.role }), _jsx("p", { className: "text-gray-400 text-xs", children: member.bio })] }, i))) })] }) })] }));
}
