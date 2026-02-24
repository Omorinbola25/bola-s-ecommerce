import { type ReactNode } from "react";
export interface CartItem {
    id: number;
    name: string;
    price: number;
    image: string;
    category: string;
    qty: number;
}
interface CartContextType {
    cartItems: CartItem[];
    addToCart: (product: Omit<CartItem, "qty">) => void;
    removeFromCart: (id: number) => void;
    updateQty: (id: number, delta: number) => void;
    clearCart: () => void;
    cartCount: number;
    cartTotal: number;
}
export declare function CartProvider({ children }: {
    children: ReactNode;
}): import("react/jsx-runtime").JSX.Element;
export declare function useCart(): CartContextType;
export {};
