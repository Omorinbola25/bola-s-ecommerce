import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./CartContext";
import { Header } from "./components/Header";
import AboutPage from "./about/Page";
import ServicesPage from "./components/Services";
import ProductsPage from "./products/Page";
import ContactPage from "./components/contact";
import CartPage from "./cart/Page";

function MainSite() {
  return (
    <>
      <main>
        {/* <section id="home">
          <div className="bg-gray-900 text-white py-24 px-6 sm:px-10 text-center mb-10">
            <p className="text-yellow-400 text-xs tracking-[0.3em] uppercase font-semibold mb-4">
              Welcome to Premium Store
            </p>
            <h1 className="text-5xl sm:text-6xl font-bold mb-6">
              Discover <span className="text-yellow-400 italic">Premium</span>{" "}
              Products
            </h1>
            <p className="text-gray-400 text-base font-light max-w-md mx-auto mb-8">
              Curated essentials chosen for their craft, materials, and lasting
              value.
            </p>
            <button
              onClick={() =>
                document
                  .getElementById("products")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-semibold text-sm px-8 py-3.5 rounded-full transition-colors"
            >
              Shop Now →
            </button>
          </div>
        </section> */}

        <section id="about">
          <AboutPage />
        </section>
        <section id="services">
          <ServicesPage />
        </section>
        <section id="products">
          <ProductsPage />
        </section>
        <section id="contact">
          <ContactPage />
        </section>
      </main>

      <footer className="bg-gray-900 text-white px-6 sm:px-10 py-10">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-sm">
                O
              </div>
              <span className="font-semibold text-base">
                Omorinbola's Store
              </span>
            </div>
            <p className="text-gray-500 text-xs font-light">
              © {new Date().getFullYear()} Omorinbola's Store. All rights
              reserved.
            </p>
          </div>
          <div className="flex flex-wrap gap-5 text-xs text-gray-400">
            {["home", "about", "services", "products", "contact"].map((id) => (
              <button
                key={id}
                onClick={() =>
                  document
                    .getElementById(id)
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="hover:text-yellow-400 transition-colors capitalize"
              >
                {id}
              </button>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
}

export default function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        {/* Header is always visible — handles both scroll nav and /cart navigation */}
        <Header />

        <Routes>
          {/* Main scrollable page */}
          <Route path="/" element={<MainSite />} />

          {/* Standalone cart page — completely separate from the scroll site */}
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}
