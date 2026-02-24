import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from "react";
import { Trash2, Plus, Minus, ShoppingBag, Tag, ChevronRight, Shield, Truck, RotateCcw, X, } from "lucide-react";
import { useCart } from "../CartContext";
const PROMO_CODES = {
    PREMIUM10: 10,
    SAVE20: 20,
    FIRST15: 15,
};
const TRUST_BADGES = [
    { icon: Truck, label: "Free Shipping", sub: "On orders over ₦150,000" },
    { icon: Shield, label: "Secure Payment", sub: "256-bit SSL encryption" },
    { icon: RotateCcw, label: "360-Day Returns", sub: "No questions asked" },
];
const formatNaira = (amount) => "₦" + amount.toLocaleString("en-NG");
export default function CartModal({ isOpen, onClose, }) {
    const { cartItems, removeFromCart, updateQty, clearCart } = useCart();
    const [promoInput, setPromoInput] = useState("");
    const [appliedPromo, setAppliedPromo] = useState(null);
    const [promoError, setPromoError] = useState("");
    const [checkoutDone, setCheckoutDone] = useState(false);
    const [removingId, setRemovingId] = useState(null);
    const [orderId] = useState(() => Math.floor(100000 + Math.random() * 900000));
    // ── Calculations ──
    const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);
    const discount = appliedPromo ? (subtotal * appliedPromo.pct) / 100 : 0;
    const shipping = subtotal - discount >= 150000 ? 0 : 5000;
    const total = subtotal - discount + shipping;
    const totalItems = cartItems.reduce((sum, i) => sum + i.qty, 0);
    // ── Handlers ──
    const handleRemove = (id) => {
        setRemovingId(id);
        setTimeout(() => {
            removeFromCart(id);
            setRemovingId(null);
        }, 300);
    };
    const applyPromo = () => {
        const code = promoInput.trim().toUpperCase();
        if (PROMO_CODES[code]) {
            setAppliedPromo({ code, pct: PROMO_CODES[code] });
            setPromoError("");
        }
        else {
            setPromoError("Invalid promo code. Try PREMIUM10, SAVE20, or FIRST15.");
            setAppliedPromo(null);
        }
    };
    const removePromo = () => {
        setAppliedPromo(null);
        setPromoInput("");
        setPromoError("");
    };
    const handleCheckout = () => {
        clearCart();
        setCheckoutDone(true);
    };
    if (!isOpen)
        return null;
    // ── Empty State ──
    if (cartItems.length === 0 && !checkoutDone) {
        return (_jsx("div", { className: "fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4", children: _jsxs("div", { className: "bg-white rounded-3xl max-w-md w-full max-h-[90vh] overflow-y-auto flex flex-col", children: [_jsxs("div", { className: "sticky top-0 bg-white border-b border-gray-100 flex items-center justify-between p-6", children: [_jsx("h2", { className: "text-xl font-bold text-gray-900", children: "Your Cart" }), _jsx("button", { onClick: onClose, className: "text-gray-400 hover:text-gray-600 transition-colors", "aria-label": "Close cart", children: _jsx(X, { className: "w-6 h-6" }) })] }), _jsxs("div", { className: "flex-1 flex flex-col items-center justify-center px-6 text-center py-20", children: [_jsx("div", { className: "w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-6", children: _jsx(ShoppingBag, { className: "w-10 h-10 text-gray-300" }) }), _jsx("h3", { className: "text-xl font-bold text-gray-900 mb-2", children: "Your cart is empty" }), _jsx("p", { className: "text-gray-400 text-sm font-light mb-8 max-w-xs", children: "Looks like you haven't added anything yet." }), _jsx("button", { onClick: () => {
                                    onClose();
                                    document
                                        .getElementById("products")
                                        ?.scrollIntoView({ behavior: "smooth" });
                                }, className: "inline-flex items-center gap-2 bg-gray-900 hover:bg-yellow-400 hover:text-gray-900 text-white font-semibold text-sm px-8 py-3.5 rounded-full transition-all duration-200", children: "Browse Products" })] })] }) }));
    }
    // ── Order Success ──
    if (checkoutDone) {
        return (_jsx("div", { className: "fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4", children: _jsx("div", { className: "bg-white rounded-3xl max-w-md w-full max-h-[90vh] overflow-y-auto flex flex-col", children: _jsxs("div", { className: "flex-1 flex flex-col items-center justify-center px-6 text-center py-12", children: [_jsx("div", { className: "w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6 text-3xl", children: "\u2713" }), _jsx("h2", { className: "text-2xl font-bold text-gray-900 mb-2", children: "Order Placed!" }), _jsx("p", { className: "text-gray-400 text-sm font-light mb-2 max-w-xs", children: "Thank you for your purchase. A confirmation has been sent to your email." }), _jsxs("p", { className: "text-xs text-gray-300 mb-8", children: ["Order #PS-", orderId] }), _jsx("button", { onClick: () => {
                                setCheckoutDone(false);
                                onClose();
                                document
                                    .getElementById("products")
                                    ?.scrollIntoView({ behavior: "smooth" });
                            }, className: "inline-flex items-center gap-2 bg-gray-900 hover:bg-yellow-400 hover:text-gray-900 text-white font-semibold text-sm px-8 py-3.5 rounded-full transition-all duration-200", children: "Continue Shopping" })] }) }) }));
    }
    // ── Main Cart ──
    return (_jsx("div", { className: "fixed inset-0 bg-black bg-opacity-50 z-50 flex items-end md:items-center justify-center p-4", children: _jsxs("div", { className: "bg-white rounded-3xl max-w-2xl w-full max-h-[95vh] overflow-y-auto flex flex-col", children: [_jsxs("div", { className: "sticky top-0 bg-white border-b border-gray-100 flex items-center justify-between p-6 z-10", children: [_jsxs("div", { children: [_jsx("p", { className: "text-yellow-400 text-xs tracking-[0.3em] uppercase font-medium mb-1", children: "Review & Checkout" }), _jsxs("h2", { className: "text-2xl font-bold text-gray-900", children: ["Your ", _jsx("span", { className: "italic text-yellow-400", children: "Cart" })] }), _jsxs("p", { className: "text-gray-400 text-sm font-light", children: [totalItems, " ", totalItems === 1 ? "item" : "items", " in your cart"] })] }), _jsx("button", { onClick: onClose, className: "text-gray-400 hover:text-gray-600 transition-colors flex-shrink-0", "aria-label": "Close cart", children: _jsx(X, { className: "w-6 h-6" }) })] }), _jsx("div", { className: "flex-1 px-6 py-8", children: _jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-8", children: [_jsxs("div", { className: "lg:col-span-2 flex flex-col gap-4", children: [_jsx("button", { onClick: () => {
                                            onClose();
                                            document
                                                .getElementById("products")
                                                ?.scrollIntoView({ behavior: "smooth" });
                                        }, className: "inline-flex items-center gap-2 text-sm text-gray-400 hover:text-gray-700 transition-colors mb-2 w-fit", children: "\u2190 Continue Shopping" }), cartItems.map((item) => (_jsxs("div", { className: `bg-white rounded-2xl border border-gray-100 p-5 flex gap-5 shadow-sm transition-all duration-300
                    ${removingId === item.id ? "opacity-0 scale-95" : "opacity-100 scale-100"}`, children: [_jsx("div", { className: "w-24 h-24 sm:w-28 sm:h-28 rounded-xl overflow-hidden bg-gray-50 flex-shrink-0", children: _jsx("img", { src: item.image, alt: item.name, className: "w-full h-full object-cover" }) }), _jsxs("div", { className: "flex-1 flex flex-col justify-between min-w-0", children: [_jsxs("div", { className: "flex items-start justify-between gap-3", children: [_jsxs("div", { children: [_jsx("p", { className: "text-[10px] tracking-widest uppercase text-gray-400 font-medium mb-0.5", children: item.category }), _jsx("h3", { className: "font-semibold text-gray-900 text-sm sm:text-base leading-snug", children: item.name })] }), _jsx("button", { onClick: () => handleRemove(item.id), className: "text-gray-300 hover:text-red-400 transition-colors flex-shrink-0 mt-0.5", children: _jsx(Trash2, { className: "w-4 h-4" }) })] }), _jsxs("div", { className: "flex items-center justify-between mt-4", children: [_jsxs("div", { className: "flex items-center gap-1 bg-gray-50 border border-gray-100 rounded-full p-1", children: [_jsx("button", { onClick: () => updateQty(item.id, -1), disabled: item.qty === 1, className: "w-7 h-7 rounded-full flex items-center justify-center text-gray-500 hover:bg-white hover:shadow-sm disabled:opacity-30 transition-all", children: _jsx(Minus, { className: "w-3 h-3" }) }), _jsx("span", { className: "w-8 text-center text-sm font-semibold text-gray-800", children: item.qty }), _jsx("button", { onClick: () => updateQty(item.id, 1), className: "w-7 h-7 rounded-full flex items-center justify-center text-gray-500 hover:bg-white hover:shadow-sm transition-all", children: _jsx(Plus, { className: "w-3 h-3" }) })] }), _jsxs("div", { className: "text-right", children: [_jsx("p", { className: "font-bold text-gray-900 text-base", children: formatNaira(item.price * item.qty) }), item.qty > 1 && (_jsxs("p", { className: "text-xs text-gray-400", children: [formatNaira(item.price), " each"] }))] })] })] })] }, item.id))), _jsx("div", { className: "grid grid-cols-3 gap-3 mt-4", children: TRUST_BADGES.map(({ icon: Icon, label, sub }) => (_jsxs("div", { className: "bg-white rounded-2xl border border-gray-100 p-4 text-center", children: [_jsx("div", { className: "w-8 h-8 bg-yellow-50 rounded-xl flex items-center justify-center mx-auto mb-2", children: _jsx(Icon, { className: "w-4 h-4 text-yellow-600" }) }), _jsx("p", { className: "text-xs font-semibold text-gray-800 mb-0.5", children: label }), _jsx("p", { className: "text-[10px] text-gray-400 leading-tight", children: sub })] }, label))) })] }), _jsxs("div", { className: "flex flex-col gap-5", children: [_jsxs("div", { className: "bg-white rounded-2xl border border-gray-100 p-6 shadow-sm", children: [_jsxs("h3", { className: "text-sm font-semibold text-gray-900 mb-4 flex items-center gap-2", children: [_jsx(Tag, { className: "w-4 h-4 text-yellow-500" }), " Promo Code"] }), appliedPromo ? (_jsxs("div", { className: "flex items-center justify-between bg-green-50 border border-green-200 rounded-xl px-4 py-3", children: [_jsxs("div", { children: [_jsx("p", { className: "text-xs font-bold text-green-700", children: appliedPromo.code }), _jsxs("p", { className: "text-[10px] text-green-500", children: [appliedPromo.pct, "% discount applied"] })] }), _jsx("button", { onClick: removePromo, className: "text-green-400 hover:text-red-400 transition-colors", children: _jsx(Trash2, { className: "w-3.5 h-3.5" }) })] })) : (_jsxs(_Fragment, { children: [_jsxs("div", { className: "flex gap-2", children: [_jsx("input", { value: promoInput, onChange: (e) => setPromoInput(e.target.value), onKeyDown: (e) => e.key === "Enter" && applyPromo(), placeholder: "Enter code\u2026", className: "flex-1 border border-gray-200 bg-gray-50 rounded-xl px-3 py-2.5 text-sm font-light text-gray-800 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:bg-white transition-all" }), _jsx("button", { onClick: applyPromo, className: "bg-gray-900 hover:bg-yellow-400 hover:text-gray-900 text-white text-xs font-semibold px-4 rounded-xl transition-all duration-200", children: "Apply" })] }), promoError && (_jsx("p", { className: "text-red-400 text-[10px] mt-2", children: promoError })), _jsx("p", { className: "text-[10px] text-gray-300 mt-2", children: "Try: PREMIUM10, SAVE20, FIRST15" })] }))] }), _jsxs("div", { className: "bg-white rounded-2xl border border-gray-100 p-6 shadow-sm sticky top-24", children: [_jsx("h3", { className: "text-sm font-semibold text-gray-900 mb-5", children: "Order Summary" }), _jsx("div", { className: "flex flex-col gap-3 mb-5", children: cartItems.map((item) => (_jsxs("div", { className: "flex items-center justify-between text-sm", children: [_jsxs("div", { className: "flex items-center gap-2 min-w-0", children: [_jsx("div", { className: "w-8 h-8 rounded-lg overflow-hidden bg-gray-50 flex-shrink-0", children: _jsx("img", { src: item.image, alt: item.name, className: "w-full h-full object-cover" }) }), _jsxs("span", { className: "text-gray-500 font-light truncate", children: [item.name, item.qty > 1 && (_jsxs("span", { className: "text-gray-300", children: [" \u00D7", item.qty] }))] })] }), _jsx("span", { className: "text-gray-800 font-medium flex-shrink-0 ml-2", children: formatNaira(item.price * item.qty) })] }, item.id))) }), _jsx("div", { className: "border-t border-gray-50 my-4" }), _jsxs("div", { className: "flex flex-col gap-2.5 mb-5", children: [_jsxs("div", { className: "flex justify-between text-sm", children: [_jsx("span", { className: "text-gray-400 font-light", children: "Subtotal" }), _jsx("span", { className: "text-gray-800 font-medium", children: formatNaira(subtotal) })] }), appliedPromo && (_jsxs("div", { className: "flex justify-between text-sm", children: [_jsxs("span", { className: "text-green-500 font-light", children: ["Discount (", appliedPromo.pct, "%)"] }), _jsxs("span", { className: "text-green-500 font-medium", children: ["\u2212", formatNaira(discount)] })] })), _jsxs("div", { className: "flex justify-between text-sm", children: [_jsx("span", { className: "text-gray-400 font-light", children: "Shipping" }), shipping === 0 ? (_jsx("span", { className: "text-green-500 font-medium", children: "Free" })) : (_jsx("span", { className: "text-gray-800 font-medium", children: formatNaira(shipping) }))] }), shipping > 0 && (_jsxs("p", { className: "text-[10px] text-gray-300", children: ["Add ", formatNaira(150000 - (subtotal - discount)), " more for free shipping"] }))] }), _jsx("div", { className: "border-t border-gray-100 pt-4 mb-6", children: _jsxs("div", { className: "flex justify-between items-center", children: [_jsx("span", { className: "font-bold text-gray-900", children: "Total" }), _jsxs("div", { className: "text-right", children: [_jsx("span", { className: "font-bold text-xl text-gray-900", children: formatNaira(total) }), _jsx("p", { className: "text-[10px] text-gray-400", children: "NGN, taxes included" })] })] }) }), _jsxs("button", { onClick: handleCheckout, className: "w-full bg-gray-900 hover:bg-yellow-400 hover:text-gray-900 text-white font-semibold text-sm py-4 rounded-2xl transition-all duration-200 flex items-center justify-center gap-2 group", children: ["Proceed to Checkout", _jsx(ChevronRight, { className: "w-4 h-4 group-hover:translate-x-1 transition-transform" })] }), _jsx("p", { className: "text-center text-[10px] text-gray-300 mt-3", children: "Secure checkout \u00B7 SSL encrypted" })] })] })] }) })] }) }));
}
