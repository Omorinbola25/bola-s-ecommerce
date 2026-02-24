import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./CartContext";
import { Header } from "./components/Header";
import AboutPage from "./about/Page";
import ServicesPage from "./components/Services";
import ProductsPage from "./products/Page";
import ContactPage from "./components/contact";
import CartPage from "./cart/Page";
function MainSite() {
    return (_jsxs(_Fragment, { children: [_jsxs("main", { children: [_jsx("section", { id: "about", children: _jsx(AboutPage, {}) }), _jsx("section", { id: "services", children: _jsx(ServicesPage, {}) }), _jsx("section", { id: "products", children: _jsx(ProductsPage, {}) }), _jsx("section", { id: "contact", children: _jsx(ContactPage, {}) })] }), _jsx("footer", { className: "bg-gray-900 text-white px-6 sm:px-10 py-10", children: _jsxs("div", { className: "max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6", children: [_jsxs("div", { children: [_jsxs("div", { className: "flex items-center gap-3 mb-2", children: [_jsx("div", { className: "w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-sm", children: "O" }), _jsx("span", { className: "font-semibold text-base", children: "Omorinbola's Store" })] }), _jsxs("p", { className: "text-gray-500 text-xs font-light", children: ["\u00A9 ", new Date().getFullYear(), " Omorinbola's Store. All rights reserved."] })] }), _jsx("div", { className: "flex flex-wrap gap-5 text-xs text-gray-400", children: ["home", "about", "services", "products", "contact"].map((id) => (_jsx("button", { onClick: () => document
                                    .getElementById(id)
                                    ?.scrollIntoView({ behavior: "smooth" }), className: "hover:text-yellow-400 transition-colors capitalize", children: id }, id))) })] }) })] }));
}
export default function App() {
    return (_jsx(CartProvider, { children: _jsxs(BrowserRouter, { children: [_jsx(Header, {}), _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(MainSite, {}) }), _jsx(Route, { path: "/cart", element: _jsx(CartPage, {}) })] })] }) }));
}
