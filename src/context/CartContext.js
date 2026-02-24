"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import React, { createContext, useContext, useState, useCallback } from "react";
const CartContext = createContext(undefined);
export function CartProvider({ children }) {
    const [items, setItems] = useState([]);
    const addItem = useCallback((item) => {
        setItems((prevItems) => {
            const existingItem = prevItems.find((i) => i.id === item.id);
            if (existingItem) {
                return prevItems.map((i) => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i);
            }
            return [...prevItems, { ...item, quantity: 1 }];
        });
    }, []);
    const removeItem = useCallback((id) => {
        setItems((prevItems) => prevItems.filter((item) => item.id !== id));
    }, []);
    const updateQuantity = useCallback((id, quantity) => {
        if (quantity <= 0) {
            removeItem(id);
            return;
        }
        setItems((prevItems) => prevItems.map((item) => item.id === id ? { ...item, quantity } : item));
    }, [removeItem]);
    const clearCart = useCallback(() => {
        setItems([]);
    }, []);
    const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const itemCount = items.reduce((acc, item) => acc + item.quantity, 0);
    return (_jsx(CartContext.Provider, { value: {
            items,
            addItem,
            removeItem,
            updateQuantity,
            clearCart,
            total,
            itemCount,
        }, children: children }));
}
export function useCart() {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return context;
}
