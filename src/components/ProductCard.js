"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Image from "next/image";
import Link from "next/link";
import { Heart, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
export function ProductCard({ product }) {
    const [isFavorite, setIsFavorite] = useState(false);
    return (_jsxs("div", { className: "group bg-card rounded-lg overflow-hidden border border-border shadow-sm hover:shadow-md transition-shadow", children: [_jsxs("div", { className: "relative h-64 bg-muted overflow-hidden", children: [_jsx(Image, { src: product.image || "/placeholder.svg", alt: product.name, fill: true, className: "object-cover group-hover:scale-105 transition-transform duration-300", crossOrigin: "anonymous" }), _jsx("div", { className: "absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" }), _jsx("button", { onClick: () => setIsFavorite(!isFavorite), className: "absolute top-4 right-4 p-2 bg-white/90 hover:bg-white rounded-full transition-all shadow-md hover:shadow-lg", "aria-label": "Add to favorites", children: _jsx(Heart, { className: `w-5 h-5 transition-colors ${isFavorite ? "fill-accent text-accent" : "text-foreground"}` }) }), _jsx("div", { className: "absolute top-4 left-4 bg-accent text-accent-foreground text-xs font-semibold px-3 py-1 rounded-full", children: product.category })] }), _jsxs("div", { className: "p-4 flex flex-col h-full", children: [_jsx(Link, { href: `/product/${product.id}`, children: _jsx("h3", { className: "font-semibold text-foreground hover:text-accent transition-colors line-clamp-2 mb-2", children: product.name }) }), _jsx("div", { className: "flex-1" }), _jsxs("div", { className: "space-y-3 mt-4", children: [_jsx("div", { className: "flex items-center justify-between", children: _jsxs("span", { className: "text-2xl font-bold text-primary", children: ["$", product.price] }) }), _jsxs(Button, { className: "w-full bg-primary hover:bg-primary/90 text-primary-foreground flex items-center justify-center gap-2", children: [_jsx(ShoppingCart, { className: "w-4 h-4" }), "Add to Cart"] })] })] })] }));
}
