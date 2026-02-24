import { jsx as _jsx } from "react/jsx-runtime";
/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";
// ── Context ──
const CartContext = createContext(undefined);
// ── Provider ──
export function CartProvider({ children }) {
    const [cartItems, setCartItems] = useState([]);
    // Add item — if already in cart, increment qty
    const addToCart = (product) => {
        setCartItems((prev) => {
            const exists = prev.find((i) => i.id === product.id);
            if (exists) {
                return prev.map((i) => i.id === product.id ? { ...i, qty: i.qty + 1 } : i);
            }
            return [...prev, { ...product, qty: 1 }];
        });
    };
    // Remove item completely
    const removeFromCart = (id) => {
        setCartItems((prev) => prev.filter((i) => i.id !== id));
    };
    // Increment or decrement qty (min 1)
    const updateQty = (id, delta) => {
        setCartItems((prev) => prev.map((i) => i.id === id ? { ...i, qty: Math.max(1, i.qty + delta) } : i));
    };
    // Empty the cart (after checkout etc.)
    const clearCart = () => setCartItems([]);
    // Derived values
    const cartCount = cartItems.reduce((sum, i) => sum + i.qty, 0);
    const cartTotal = cartItems.reduce((sum, i) => sum + i.price * i.qty, 0);
    return (_jsx(CartContext.Provider, { value: {
            cartItems,
            addToCart,
            removeFromCart,
            updateQty,
            clearCart,
            cartCount,
            cartTotal,
        }, children: children }));
}
// ── Hook ──
export function useCart() {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("useCart must be used inside a <CartProvider>");
    }
    return context;
}
