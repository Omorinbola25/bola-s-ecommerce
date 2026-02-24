import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Menu, X, ShoppingBag } from "lucide-react";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useCart } from "../CartContext";
const NAV_LINKS = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Services", id: "services" },
    { label: "Products", id: "products" },
    { label: "Contact", id: "contact" },
];
export function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const { cartCount } = useCart();
    const navigate = useNavigate();
    const location = useLocation();
    const handleNavClick = (id) => {
        setIsOpen(false);
        if (location.pathname === "/") {
            document
                .getElementById(id)
                ?.scrollIntoView({ behavior: "smooth", block: "start" });
        }
        else {
            navigate("/");
            setTimeout(() => {
                document
                    .getElementById(id)
                    ?.scrollIntoView({ behavior: "smooth", block: "start" });
            }, 150);
        }
    };
    const goToCart = () => {
        setIsOpen(false);
        navigate("/cart");
    };
    return (_jsxs("header", { className: "sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100", children: [_jsxs("nav", { className: "max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between", children: [_jsxs("button", { onClick: () => handleNavClick("home"), className: "flex items-center gap-2 hover:opacity-80 transition-opacity", children: [_jsx("div", { className: "w-8 h-8 bg-blue-500 rounded-xl flex items-center justify-center shadow-sm", children: _jsx("span", { className: "text-white font-semibold text-base", children: "O" }) }), _jsx("span", { className: "font-medium text-gray-700 hidden sm:block", children: "Omorinbola's Store" })] }), _jsx("div", { className: "hidden md:flex items-center gap-1", children: NAV_LINKS.map((link) => (_jsx("button", { onClick: () => handleNavClick(link.id), className: "px-4 py-2 text-gray-600 hover:text-blue-600 font-medium text-sm rounded-lg hover:bg-blue-50 transition-all", children: link.label }, link.id))) }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsxs("button", { onClick: goToCart, className: "relative p-2.5 bg-blue-500 hover:bg-blue-600 rounded-xl transition-colors", "aria-label": "Shopping cart", children: [_jsx(ShoppingBag, { className: "w-5 h-5 text-white" }), cartCount > 0 && (_jsx("span", { className: "absolute -top-1 -right-1 bg-yellow-400 text-gray-900 text-xs w-5 h-5 rounded-full flex items-center justify-center font-medium shadow-sm", children: cartCount }))] }), _jsx("button", { onClick: () => setIsOpen(!isOpen), className: "md:hidden p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors", "aria-label": "Toggle menu", children: isOpen ? _jsx(X, { className: "w-5 h-5" }) : _jsx(Menu, { className: "w-5 h-5" }) })] })] }), isOpen && (_jsx("div", { className: "md:hidden border-t border-gray-100 bg-white/95 backdrop-blur-sm", children: _jsxs("div", { className: "px-4 py-2", children: [NAV_LINKS.map((link) => (_jsx("button", { onClick: () => handleNavClick(link.id), className: "block w-full text-left px-3 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors font-medium", children: link.label }, link.id))), _jsxs("button", { onClick: goToCart, className: "w-full flex items-center gap-2 px-3 py-3 text-yellow-600 hover:text-yellow-700 hover:bg-yellow-50 rounded-lg transition-colors font-medium border-t border-gray-100 mt-2", children: [_jsx(ShoppingBag, { className: "w-4 h-4" }), "Cart ", cartCount > 0 && `(${cartCount} items)`] })] }) }))] }));
}
