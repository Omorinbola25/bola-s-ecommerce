import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useMemo } from "react";
import { useCart } from "../CartContext";
import { keyboard, leatherBag, notebook, pen, scarf, watch, } from "../assets/assests";
const CATEGORIES = [
    "All",
    "Watches",
    "Accessories",
    "Electronics",
    "Stationery",
    "Bags",
];
const PRICE_RANGES = [
    { label: "All Prices", min: 0, max: Infinity },
    { label: "Under ₦50,000", min: 0, max: 50000 },
    { label: "₦50,000 – ₦150,000", min: 50000, max: 150000 },
    { label: "₦150,000 – ₦300,000", min: 150000, max: 300000 },
    { label: "Over ₦300,000", min: 300000, max: Infinity },
];
const ALL_PRODUCTS = [
    {
        id: 1,
        name: "Premium Leather Watch",
        price: 65000,
        image: watch,
        category: "Watches",
    },
    {
        id: 2,
        name: "Minimalist Sunglasses",
        price: 48000,
        image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&h=500&fit=crop",
        category: "Accessories",
    },
    {
        id: 3,
        name: "Luxury Pen Set",
        price: 35000,
        image: pen,
        category: "Stationery",
    },
    {
        id: 4,
        name: "Premium Headphones",
        price: 185000,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop",
        category: "Electronics",
        badge: "New",
    },
    {
        id: 5,
        name: "Designer Backpack",
        price: 120000,
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop",
        category: "Bags",
    },
    {
        id: 6,
        name: "Leather Wallet",
        price: 42000,
        image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=500&h=500&fit=crop",
        category: "Accessories",
    },
    {
        id: 7,
        name: "Premium Notebook",
        price: 18000,
        image: notebook,
        category: "Stationery",
    },
    {
        id: 8,
        name: "Mechanical Keyboard",
        price: 95000,
        image: keyboard,
        category: "Electronics",
    },
    {
        id: 9,
        name: "Leather Document Case",
        price: 145000,
        image: leatherBag,
        category: "Bags",
        badge: "Limited",
    },
    {
        id: 10,
        name: "Classic Wristwatch",
        price: 210000,
        image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500&h=500&fit=crop",
        category: "Watches",
    },
    {
        id: 11,
        name: "Wireless Mouse",
        price: 38000,
        image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=500&h=500&fit=crop",
        category: "Electronics",
    },
    {
        id: 12,
        name: "Premium Scarf",
        price: 55000,
        image: scarf,
        category: "Accessories",
    },
];
const formatNaira = (amount) => "₦" + amount.toLocaleString("en-NG");
function ProductCard({ product, onAddToCart, }) {
    const [added, setAdded] = useState(false);
    const handleAdd = () => {
        onAddToCart(product);
        setAdded(true);
        setTimeout(() => setAdded(false), 1500);
    };
    return (_jsxs("div", { className: "group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 flex flex-col", children: [_jsxs("div", { className: "relative overflow-hidden aspect-square bg-gray-50", children: [_jsx("img", { src: product.image, alt: product.name, className: "w-full h-full object-cover transition-transform duration-700 group-hover:scale-110", loading: "lazy" }), product.badge && (_jsx("span", { className: "absolute top-3 left-3 bg-gray-900 text-yellow-400 text-[10px] font-semibold tracking-widest uppercase px-3 py-1 rounded-full", children: product.badge })), _jsx("div", { className: "absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6", children: _jsx("button", { onClick: handleAdd, className: `text-xs tracking-widest uppercase font-semibold px-6 py-3 rounded-full transition-all duration-300 transform translate-y-4 group-hover:translate-y-0
              ${added ? "bg-green-400 text-gray-900" : "bg-yellow-400 text-gray-900 hover:bg-yellow-300"}`, children: added ? "✓ Added!" : "Add to Cart" }) })] }), _jsxs("div", { className: "p-5 flex flex-col flex-1", children: [_jsx("span", { className: "text-[10px] tracking-widest uppercase text-gray-400 font-medium mb-1", children: product.category }), _jsx("h3", { className: "text-gray-900 font-semibold text-sm leading-snug mb-3 flex-1", children: product.name }), _jsxs("div", { className: "flex items-center justify-between mt-auto", children: [_jsx("span", { className: "text-yellow-600 font-bold text-base", children: formatNaira(product.price) }), _jsx("button", { onClick: handleAdd, className: "text-gray-400 hover:text-gray-700 transition-colors", "aria-label": "Add to cart", children: _jsx("svg", { className: "w-5 h-5", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 1.5, children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 4.5v15m7.5-7.5h-15" }) }) })] })] })] }));
}
function FilterButton({ label, active, onClick, }) {
    return (_jsxs("button", { onClick: onClick, className: `w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 text-left
        ${active ? "bg-yellow-50 text-yellow-700 border border-yellow-200" : "text-gray-500 hover:bg-gray-50 hover:text-gray-800 border border-transparent"}`, children: [_jsx("span", { className: `w-2 h-2 rounded-full flex-shrink-0 ${active ? "bg-yellow-500" : "bg-gray-200"}` }), label] }));
}
export default function ProductsPage() {
    const { addToCart } = useCart();
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [selectedPriceRange, setSelectedPriceRange] = useState(PRICE_RANGES[0]);
    const [sortBy, setSortBy] = useState("featured");
    const [toast, setToast] = useState({ show: false, name: "" });
    const handleAddToCart = (product) => {
        addToCart(product);
        setToast({ show: true, name: product.name });
        setTimeout(() => setToast({ show: false, name: "" }), 2500);
    };
    const filtered = useMemo(() => {
        let p = [...ALL_PRODUCTS];
        if (selectedCategory !== "All")
            p = p.filter((x) => x.category === selectedCategory);
        if (selectedPriceRange.label !== "All Prices") {
            p = p.filter((x) => x.price >= selectedPriceRange.min &&
                x.price <= selectedPriceRange.max);
        }
        if (sortBy === "price-low")
            p.sort((a, b) => a.price - b.price);
        else if (sortBy === "price-high")
            p.sort((a, b) => b.price - a.price);
        else if (sortBy === "name")
            p.sort((a, b) => a.name.localeCompare(b.name));
        return p;
    }, [selectedCategory, selectedPriceRange, sortBy]);
    const clearFilters = () => {
        setSelectedCategory("All");
        setSelectedPriceRange(PRICE_RANGES[0]);
        setSortBy("featured");
    };
    return (_jsxs("div", { className: "min-h-screen bg-gray-50", children: [_jsx("div", { className: "bg-gray-900 text-white px-6 py-14 sm:px-10", children: _jsxs("div", { className: "max-w-7xl mx-auto", children: [_jsx("p", { className: "text-yellow-400 text-xs tracking-[0.3em] uppercase font-medium mb-3", children: "Our Collection" }), _jsxs("h1", { className: "text-4xl sm:text-5xl font-light leading-tight mb-3", children: ["All ", _jsx("span", { className: "italic text-yellow-400", children: "Products" })] }), _jsx("p", { className: "text-gray-400 text-sm font-light max-w-md", children: "Curated essentials, each chosen for its craft, materials, and lasting value." })] }) }), _jsxs("div", { className: "max-w-7xl mx-auto flex gap-0 min-h-screen", children: [_jsxs("aside", { className: "hidden lg:block w-64 flex-shrink-0 bg-white border-r border-gray-100 p-6 sticky top-16 self-start max-h-[calc(100vh-64px)] overflow-y-auto", children: [_jsxs("div", { className: "mb-8", children: [_jsx("p", { className: "text-[10px] tracking-[0.25em] uppercase text-gray-400 font-semibold mb-3", children: "Categories" }), _jsx("div", { className: "flex flex-col gap-1", children: CATEGORIES.map((cat) => (_jsx(FilterButton, { label: cat, active: selectedCategory === cat, onClick: () => setSelectedCategory(cat) }, cat))) })] }), _jsxs("div", { className: "mb-8", children: [_jsx("p", { className: "text-[10px] tracking-[0.25em] uppercase text-gray-400 font-semibold mb-3", children: "Price Range" }), _jsx("div", { className: "flex flex-col gap-1", children: PRICE_RANGES.map((range) => (_jsx(FilterButton, { label: range.label, active: selectedPriceRange.label === range.label, onClick: () => setSelectedPriceRange(range) }, range.label))) })] }), _jsxs("div", { className: "mb-8", children: [_jsx("p", { className: "text-[10px] tracking-[0.25em] uppercase text-gray-400 font-semibold mb-3", children: "Sort By" }), _jsx("div", { className: "flex flex-col gap-1", children: [
                                            { value: "featured", label: "Featured" },
                                            { value: "price-low", label: "Price: Low → High" },
                                            { value: "price-high", label: "Price: High → Low" },
                                            { value: "name", label: "Name: A → Z" },
                                        ].map((opt) => (_jsx(FilterButton, { label: opt.label, active: sortBy === opt.value, onClick: () => setSortBy(opt.value) }, opt.value))) })] }), _jsx("button", { onClick: clearFilters, className: "w-full text-xs text-gray-400 hover:text-gray-700 border border-gray-200 hover:border-gray-400 py-2 rounded-lg transition-colors", children: "Clear All Filters" })] }), _jsxs("div", { className: "flex-1 p-6 sm:p-8", children: [_jsxs("div", { className: "flex flex-wrap gap-2 lg:hidden mb-6", children: [_jsx("select", { value: selectedCategory, onChange: (e) => setSelectedCategory(e.target.value), className: "text-sm border border-gray-200 rounded-lg px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-yellow-400", children: CATEGORIES.map((c) => (_jsx("option", { children: c }, c))) }), _jsx("select", { value: selectedPriceRange.label, onChange: (e) => setSelectedPriceRange(PRICE_RANGES.find((r) => r.label === e.target.value)), className: "text-sm border border-gray-200 rounded-lg px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-yellow-400", children: PRICE_RANGES.map((r) => (_jsx("option", { children: r.label }, r.label))) })] }), _jsxs("div", { className: "flex items-center justify-between mb-6 pb-4 border-b border-gray-100", children: [_jsxs("span", { className: "text-sm text-gray-500", children: [_jsx("span", { className: "font-semibold text-gray-900", children: filtered.length }), " ", "products"] }), _jsxs("select", { value: sortBy, onChange: (e) => setSortBy(e.target.value), className: "hidden lg:block text-sm border border-gray-200 rounded-lg px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-yellow-400", children: [_jsx("option", { value: "featured", children: "Featured" }), _jsx("option", { value: "price-low", children: "Price: Low to High" }), _jsx("option", { value: "price-high", children: "Price: High to Low" }), _jsx("option", { value: "name", children: "Name: A to Z" })] })] }), filtered.length > 0 ? (_jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5", children: filtered.map((product) => (_jsx(ProductCard, { product: product, onAddToCart: handleAddToCart }, product.id))) })) : (_jsxs("div", { className: "flex flex-col items-center justify-center py-24 text-center", children: [_jsx("div", { className: "text-5xl mb-4 opacity-20", children: "\u25CC" }), _jsx("p", { className: "text-gray-400 text-lg font-light mb-6", children: "No products match your selection." }), _jsx("button", { onClick: clearFilters, className: "text-sm font-medium text-yellow-700 border border-yellow-300 hover:bg-yellow-50 px-6 py-2.5 rounded-full transition-colors", children: "Clear All Filters" })] }))] })] }), _jsxs("div", { className: `fixed bottom-6 right-6 bg-gray-900 text-white px-5 py-3 rounded-xl shadow-2xl flex items-center gap-3 transition-all duration-500 z-50
        ${toast.show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6 pointer-events-none"}`, children: [_jsx("span", { className: "text-yellow-400 text-lg", children: "\u2713" }), _jsxs("span", { className: "text-sm font-medium", children: ["\u201C", toast.name, "\u201D added to cart"] })] })] }));
}
