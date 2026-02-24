interface ProductCardProps {
    product: {
        id: number;
        name: string;
        price: number;
        image: string;
        category: string;
    };
}
export declare function ProductCard({ product }: ProductCardProps): import("react/jsx-runtime").JSX.Element;
export {};
