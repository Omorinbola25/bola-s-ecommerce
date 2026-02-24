import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Trash2,
  Plus,
  Minus,
  ShoppingBag,
  Tag,
  ChevronRight,
  Shield,
  Truck,
  RotateCcw,
  ArrowLeft,
} from "lucide-react";
import { useCart } from "../CartContext";

const PROMO_CODES: Record<string, number> = {
  PREMIUM10: 10,
  SAVE20: 20,
  FIRST15: 15,
};

const TRUST_BADGES = [
  { icon: Truck, label: "Free Shipping", sub: "On orders over #150" },
  { icon: Shield, label: "Secure Payment", sub: "256-bit SSL encryption" },
  { icon: RotateCcw, label: "360-Day Returns", sub: "No questions asked" },
];

export default function CartPage() {
  const navigate = useNavigate();
  const { cartItems, removeFromCart, updateQty, clearCart } = useCart();

  const [promoInput, setPromoInput] = useState("");
  const [appliedPromo, setAppliedPromo] = useState<{
    code: string;
    pct: number;
  } | null>(null);
  const [promoError, setPromoError] = useState("");
  const [checkoutDone, setCheckoutDone] = useState(false);
  const [removingId, setRemovingId] = useState<number | null>(null);
  const [orderId] = useState(() => Math.floor(100000 + Math.random() * 900000));

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.qty,
    0,
  );
  const discount = appliedPromo ? (subtotal * appliedPromo.pct) / 100 : 0;
  const shipping = subtotal - discount >= 150 ? 0 : 12.99;
  const total = subtotal - discount + shipping;
  const totalItems = cartItems.reduce((sum, i) => sum + i.qty, 0);

  const handleRemove = (id: number) => {
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
    } else {
      setPromoError("Invalid code. Try PREMIUM10, SAVE20, or FIRST15.");
      setAppliedPromo(null);
    }
  };

  const handleCheckout = () => {
    clearCart();
    setCheckoutDone(true);
  };

  // ── Empty State ──
  if (cartItems.length === 0 && !checkoutDone) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-6 text-center">
        <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-6">
          <ShoppingBag className="w-10 h-10 text-gray-300" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Your cart is empty
        </h2>
        <p className="text-gray-400 text-sm font-light mb-8 max-w-xs">
          You haven't added anything yet. Go back and explore our collection!
        </p>
        <button
          onClick={() => navigate("/")}
          className="inline-flex items-center gap-2 bg-gray-900 hover:bg-yellow-400 hover:text-gray-900 text-white font-semibold text-sm px-8 py-3.5 rounded-full transition-all duration-200"
        >
          <ArrowLeft className="w-4 h-4" /> Browse Products
        </button>
      </div>
    );
  }

  // ── Order Success ──
  if (checkoutDone) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-6 text-center">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6 text-3xl">
          ✓
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Order Placed!</h2>
        <p className="text-gray-400 text-sm font-light mb-2 max-w-xs">
          Thank you for your purchase. A confirmation has been sent to your
          email.
        </p>
        <p className="text-xs text-gray-300 mb-8">Order #PS-{orderId}</p>
        <button
          onClick={() => navigate("/")}
          className="inline-flex items-center gap-2 bg-gray-900 hover:bg-yellow-400 hover:text-gray-900 text-white font-semibold text-sm px-8 py-3.5 rounded-full transition-all duration-200"
        >
          Continue Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div className="bg-gray-900 text-white px-6 sm:px-10 py-12">
        <div className="max-w-7xl mx-auto">
          <p className="text-yellow-400 text-xs tracking-[0.3em] uppercase font-medium mb-3">
            Review & Checkout
          </p>
          <h1 className="text-4xl font-light mb-1">
            Your <span className="italic text-yellow-400">Cart</span>
          </h1>
          <p className="text-gray-400 text-sm font-light">
            {totalItems} {totalItems === 1 ? "item" : "items"} in your cart
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-10 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* LEFT */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <button
              onClick={() => navigate("/")}
              className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-gray-700 transition-colors mb-2 w-fit"
            >
              <ArrowLeft className="w-4 h-4" /> Continue Shopping
            </button>

            {cartItems.map((item) => (
              <div
                key={item.id}
                className={`bg-white rounded-2xl border border-gray-100 p-5 flex gap-5 shadow-sm transition-all duration-300
                  ${removingId === item.id ? "opacity-0 scale-95" : "opacity-100 scale-100"}`}
              >
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-xl overflow-hidden bg-gray-50 flex-shrink-0">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 flex flex-col justify-between min-w-0">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-[10px] tracking-widest uppercase text-gray-400 font-medium mb-0.5">
                        {item.category}
                      </p>
                      <h3 className="font-semibold text-gray-900 text-sm sm:text-base leading-snug">
                        {item.name}
                      </h3>
                    </div>
                    <button
                      onClick={() => handleRemove(item.id)}
                      className="text-gray-300 hover:text-red-400 transition-colors flex-shrink-0 mt-0.5"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center gap-1 bg-gray-50 border border-gray-100 rounded-full p-1">
                      <button
                        onClick={() => updateQty(item.id, -1)}
                        disabled={item.qty === 1}
                        className="w-7 h-7 rounded-full flex items-center justify-center text-gray-500 hover:bg-white hover:shadow-sm disabled:opacity-30 transition-all"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="w-8 text-center text-sm font-semibold text-gray-800">
                        {item.qty}
                      </span>
                      <button
                        onClick={() => updateQty(item.id, 1)}
                        className="w-7 h-7 rounded-full flex items-center justify-center text-gray-500 hover:bg-white hover:shadow-sm transition-all"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-gray-900 text-base">
                        #{(item.price * item.qty).toFixed(2)}
                      </p>
                      {item.qty > 1 && (
                        <p className="text-xs text-gray-400">
                          #{item.price.toFixed(2)} each
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <div className="grid grid-cols-3 gap-3 mt-4">
              {TRUST_BADGES.map(({ icon: Icon, label, sub }) => (
                <div
                  key={label}
                  className="bg-white rounded-2xl border border-gray-100 p-4 text-center"
                >
                  <div className="w-8 h-8 bg-yellow-50 rounded-xl flex items-center justify-center mx-auto mb-2">
                    <Icon className="w-4 h-4 text-yellow-600" />
                  </div>
                  <p className="text-xs font-semibold text-gray-800 mb-0.5">
                    {label}
                  </p>
                  <p className="text-[10px] text-gray-400 leading-tight">
                    {sub}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex flex-col gap-5">
            <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
              <h3 className="text-sm font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Tag className="w-4 h-4 text-yellow-500" /> Promo Code
              </h3>
              {appliedPromo ? (
                <div className="flex items-center justify-between bg-green-50 border border-green-200 rounded-xl px-4 py-3">
                  <div>
                    <p className="text-xs font-bold text-green-700">
                      {appliedPromo.code}
                    </p>
                    <p className="text-[10px] text-green-500">
                      {appliedPromo.pct}% discount applied
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setAppliedPromo(null);
                      setPromoInput("");
                    }}
                    className="text-green-400 hover:text-red-400 transition-colors"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              ) : (
                <>
                  <div className="flex gap-2">
                    <input
                      value={promoInput}
                      onChange={(e) => setPromoInput(e.target.value)}
                      onKeyDown={(e) => e.key === "Enter" && applyPromo()}
                      placeholder="Enter code…"
                      className="flex-1 border border-gray-200 bg-gray-50 rounded-xl px-3 py-2.5 text-sm font-light placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:bg-white transition-all"
                    />
                    <button
                      onClick={applyPromo}
                      className="bg-gray-900 hover:bg-yellow-400 hover:text-gray-900 text-white text-xs font-semibold px-4 rounded-xl transition-all duration-200"
                    >
                      Apply
                    </button>
                  </div>
                  {promoError && (
                    <p className="text-red-400 text-[10px] mt-2">
                      {promoError}
                    </p>
                  )}
                  <p className="text-[10px] text-gray-300 mt-2">
                    Try: PREMIUM10, SAVE20, FIRST15
                  </p>
                </>
              )}
            </div>

            <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm sticky top-24">
              <h3 className="text-sm font-semibold text-gray-900 mb-5">
                Order Summary
              </h3>
              <div className="flex flex-col gap-3 mb-5">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between text-sm"
                  >
                    <div className="flex items-center gap-2 min-w-0">
                      <div className="w-8 h-8 rounded-lg overflow-hidden bg-gray-50 flex-shrink-0">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <span className="text-gray-500 font-light truncate">
                        {item.name}
                        {item.qty > 1 && (
                          <span className="text-gray-300"> ×{item.qty}</span>
                        )}
                      </span>
                    </div>
                    <span className="text-gray-800 font-medium flex-shrink-0 ml-2">
                      #{(item.price * item.qty).toFixed(2)}
                    </span>
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-50 my-4" />

              <div className="flex flex-col gap-2.5 mb-5">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400 font-light">Subtotal</span>
                  <span className="text-gray-800 font-medium">
                    #{subtotal.toFixed(2)}
                  </span>
                </div>
                {appliedPromo && (
                  <div className="flex justify-between text-sm">
                    <span className="text-green-500 font-light">
                      Discount ({appliedPromo.pct}%)
                    </span>
                    <span className="text-green-500 font-medium">
                      −#{discount.toFixed(2)}
                    </span>
                  </div>
                )}
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400 font-light">Shipping</span>
                  {shipping === 0 ? (
                    <span className="text-green-500 font-medium">Free</span>
                  ) : (
                    <span className="text-gray-800 font-medium">
                      #{shipping.toFixed(2)}
                    </span>
                  )}
                </div>
                {shipping > 0 && (
                  <p className="text-[10px] text-gray-300">
                    Add #{(150 - (subtotal - discount)).toFixed(2)} more for
                    free shipping
                  </p>
                )}
              </div>

              <div className="border-t border-gray-100 pt-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="font-bold text-gray-900">Total</span>
                  <div className="text-right">
                    <span className="font-bold text-xl text-gray-900">
                      #{total.toFixed(2)}
                    </span>
                    <p className="text-[10px] text-gray-400">
                      NGN, taxes included
                    </p>
                  </div>
                </div>
              </div>

              <button
                onClick={handleCheckout}
                className="w-full bg-gray-900 hover:bg-yellow-400 hover:text-gray-900 text-white font-semibold text-sm py-4 rounded-2xl transition-all duration-200 flex items-center justify-center gap-2 group"
              >
                Proceed to Checkout
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <p className="text-center text-[10px] text-gray-300 mt-3">
                Secure checkout · SSL encrypted
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
