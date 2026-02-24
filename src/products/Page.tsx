import { useState, useMemo } from "react";
import { useCart } from "../CartContext";
import {
  keyboard,
  leatherBag,
  notebook,
  pen,
  scarf,
  watch,
} from "../assets/assests";

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
    image:
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&h=500&fit=crop",
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
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop",
    category: "Electronics",
    badge: "New",
  },
  {
    id: 5,
    name: "Designer Backpack",
    price: 120000,
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop",
    category: "Bags",
  },
  {
    id: 6,
    name: "Leather Wallet",
    price: 42000,
    image:
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=500&h=500&fit=crop",
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
    image:
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500&h=500&fit=crop",
    category: "Watches",
  },
  {
    id: 11,
    name: "Wireless Mouse",
    price: 38000,
    image:
      "https://images.unsplash.com/photo-1527814050087-3793815479db?w=500&h=500&fit=crop",
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

type Product = (typeof ALL_PRODUCTS)[0];

const formatNaira = (amount: number) => "₦" + amount.toLocaleString("en-NG");

function ProductCard({
  product,
  onAddToCart,
}: {
  product: Product;
  onAddToCart: (p: Product) => void;
}) {
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    onAddToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 flex flex-col">
      <div className="relative overflow-hidden aspect-square bg-gray-50">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        {product.badge && (
          <span className="absolute top-3 left-3 bg-gray-900 text-yellow-400 text-[10px] font-semibold tracking-widest uppercase px-3 py-1 rounded-full">
            {product.badge}
          </span>
        )}
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
          <button
            onClick={handleAdd}
            className={`text-xs tracking-widest uppercase font-semibold px-6 py-3 rounded-full transition-all duration-300 transform translate-y-4 group-hover:translate-y-0
              ${added ? "bg-green-400 text-gray-900" : "bg-yellow-400 text-gray-900 hover:bg-yellow-300"}`}
          >
            {added ? "✓ Added!" : "Add to Cart"}
          </button>
        </div>
      </div>
      <div className="p-5 flex flex-col flex-1">
        <span className="text-[10px] tracking-widest uppercase text-gray-400 font-medium mb-1">
          {product.category}
        </span>
        <h3 className="text-gray-900 font-semibold text-sm leading-snug mb-3 flex-1">
          {product.name}
        </h3>
        <div className="flex items-center justify-between mt-auto">
          <span className="text-yellow-600 font-bold text-base">
            {formatNaira(product.price)}
          </span>
          <button
            onClick={handleAdd}
            className="text-gray-400 hover:text-gray-700 transition-colors"
            aria-label="Add to cart"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

function FilterButton({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 text-left
        ${active ? "bg-yellow-50 text-yellow-700 border border-yellow-200" : "text-gray-500 hover:bg-gray-50 hover:text-gray-800 border border-transparent"}`}
    >
      <span
        className={`w-2 h-2 rounded-full flex-shrink-0 ${active ? "bg-yellow-500" : "bg-gray-200"}`}
      />
      {label}
    </button>
  );
}

export default function ProductsPage() {
  const { addToCart } = useCart();

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedPriceRange, setSelectedPriceRange] = useState(PRICE_RANGES[0]);
  const [sortBy, setSortBy] = useState("featured");
  const [toast, setToast] = useState({ show: false, name: "" });

  const handleAddToCart = (product: Product) => {
    addToCart(product);
    setToast({ show: true, name: product.name });
    setTimeout(() => setToast({ show: false, name: "" }), 2500);
  };

  const filtered = useMemo(() => {
    let p = [...ALL_PRODUCTS];
    if (selectedCategory !== "All")
      p = p.filter((x) => x.category === selectedCategory);
    if (selectedPriceRange.label !== "All Prices") {
      p = p.filter(
        (x) =>
          x.price >= selectedPriceRange.min &&
          x.price <= selectedPriceRange.max,
      );
    }
    if (sortBy === "price-low") p.sort((a, b) => a.price - b.price);
    else if (sortBy === "price-high") p.sort((a, b) => b.price - a.price);
    else if (sortBy === "name") p.sort((a, b) => a.name.localeCompare(b.name));
    return p;
  }, [selectedCategory, selectedPriceRange, sortBy]);

  const clearFilters = () => {
    setSelectedCategory("All");
    setSelectedPriceRange(PRICE_RANGES[0]);
    setSortBy("featured");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gray-900 text-white px-6 py-14 sm:px-10">
        <div className="max-w-7xl mx-auto">
          <p className="text-yellow-400 text-xs tracking-[0.3em] uppercase font-medium mb-3">
            Our Collection
          </p>
          <h1 className="text-4xl sm:text-5xl font-light leading-tight mb-3">
            All <span className="italic text-yellow-400">Products</span>
          </h1>
          <p className="text-gray-400 text-sm font-light max-w-md">
            Curated essentials, each chosen for its craft, materials, and
            lasting value.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex gap-0 min-h-screen">
        {/* Sidebar */}
        <aside className="hidden lg:block w-64 flex-shrink-0 bg-white border-r border-gray-100 p-6 sticky top-16 self-start max-h-[calc(100vh-64px)] overflow-y-auto">
          <div className="mb-8">
            <p className="text-[10px] tracking-[0.25em] uppercase text-gray-400 font-semibold mb-3">
              Categories
            </p>
            <div className="flex flex-col gap-1">
              {CATEGORIES.map((cat) => (
                <FilterButton
                  key={cat}
                  label={cat}
                  active={selectedCategory === cat}
                  onClick={() => setSelectedCategory(cat)}
                />
              ))}
            </div>
          </div>
          <div className="mb-8">
            <p className="text-[10px] tracking-[0.25em] uppercase text-gray-400 font-semibold mb-3">
              Price Range
            </p>
            <div className="flex flex-col gap-1">
              {PRICE_RANGES.map((range) => (
                <FilterButton
                  key={range.label}
                  label={range.label}
                  active={selectedPriceRange.label === range.label}
                  onClick={() => setSelectedPriceRange(range)}
                />
              ))}
            </div>
          </div>
          <div className="mb-8">
            <p className="text-[10px] tracking-[0.25em] uppercase text-gray-400 font-semibold mb-3">
              Sort By
            </p>
            <div className="flex flex-col gap-1">
              {[
                { value: "featured", label: "Featured" },
                { value: "price-low", label: "Price: Low → High" },
                { value: "price-high", label: "Price: High → Low" },
                { value: "name", label: "Name: A → Z" },
              ].map((opt) => (
                <FilterButton
                  key={opt.value}
                  label={opt.label}
                  active={sortBy === opt.value}
                  onClick={() => setSortBy(opt.value)}
                />
              ))}
            </div>
          </div>
          <button
            onClick={clearFilters}
            className="w-full text-xs text-gray-400 hover:text-gray-700 border border-gray-200 hover:border-gray-400 py-2 rounded-lg transition-colors"
          >
            Clear All Filters
          </button>
        </aside>

        {/* Main */}
        <div className="flex-1 p-6 sm:p-8">
          <div className="flex flex-wrap gap-2 lg:hidden mb-6">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="text-sm border border-gray-200 rounded-lg px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
            >
              {CATEGORIES.map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>
            <select
              value={selectedPriceRange.label}
              onChange={(e) =>
                setSelectedPriceRange(
                  PRICE_RANGES.find((r) => r.label === e.target.value)!,
                )
              }
              className="text-sm border border-gray-200 rounded-lg px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
            >
              {PRICE_RANGES.map((r) => (
                <option key={r.label}>{r.label}</option>
              ))}
            </select>
          </div>

          <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100">
            <span className="text-sm text-gray-500">
              <span className="font-semibold text-gray-900">
                {filtered.length}
              </span>{" "}
              products
            </span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="hidden lg:block text-sm border border-gray-200 rounded-lg px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="name">Name: A to Z</option>
            </select>
          </div>

          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
              {filtered.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={handleAddToCart}
                />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-24 text-center">
              <div className="text-5xl mb-4 opacity-20">◌</div>
              <p className="text-gray-400 text-lg font-light mb-6">
                No products match your selection.
              </p>
              <button
                onClick={clearFilters}
                className="text-sm font-medium text-yellow-700 border border-yellow-300 hover:bg-yellow-50 px-6 py-2.5 rounded-full transition-colors"
              >
                Clear All Filters
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Toast */}
      <div
        className={`fixed bottom-6 right-6 bg-gray-900 text-white px-5 py-3 rounded-xl shadow-2xl flex items-center gap-3 transition-all duration-500 z-50
        ${toast.show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6 pointer-events-none"}`}
      >
        <span className="text-yellow-400 text-lg">✓</span>
        <span className="text-sm font-medium">
          &ldquo;{toast.name}&rdquo; added to cart
        </span>
      </div>
    </div>
  );
}
