import { bolu, dami, favkins, tola } from "../assets/assests";
import { Package, Shield, Truck } from "lucide-react";

const VALUES = [
  {
    icon: Package,
    title: "Curated for you",
    description:
      "From premium headphones to designer backpacks, we pick only the stuff we'd actually use ourselves.",
    color: "bg-blue-50",
    iconColor: "text-blue-500",
  },
  {
    icon: Shield,
    title: "Quality, always",
    description:
      "No shortcuts. Every product is checked before it reaches you. If it's not right, we'll make it right.",
    color: "bg-yellow-50",
    iconColor: "text-yellow-500",
  },
  {
    icon: Truck,
    title: "Fast & Stressfree shipping",
    description:
      "Because waiting is no fun. Get your gear quickly and track it every step of the way.",
    color: "bg-rose-50",
    iconColor: "text-rose-500",
  },
];

const TEAM = [
  {
    name: "Omorinbola Favour",
    role: "Founder",
    image: favkins,
    bio: "Finds cool stuff so you don't have to",
  },
  {
    name: "Akinwunmi Jokotola",
    role: "Product Hunter",
    image: tola,
    bio: "Always looking for the next great thing",
  },
  {
    name: "Boluwatifeh Akinwunmi",
    role: "Customer Love",
    image: bolu,
    bio: "Here to make your day better",
  },
  {
    name: "Damilola john",
    role: "Logistic Wizard",
    image: dami,
    bio: "Gets your order to you fast",
  },
];

export default function AboutPage() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-600 text-white px-6 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Welcome to Omorinbola's Store
          </h1>
          <p className="text-xl text-blue-100 leading-relaxed">
            We sell Premium headphones, sleek backpacks, quality accessories, we
            find them, test them, and bring them to you. No fluff, just the good
            stuff.
          </p>
        </div>
      </section>

      {/* Why we exist */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Here's the thing
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-4">
            Shopping online can be a mess. Too many choices, too many cheap
            knockoffs, too much "meh." We started Omorinbola's Store because we
            believe you deserve better.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            Whether it's noise-cancelling headphones for your commute, a
            backpack that actually lasts, or a wallet that ages beautifully, or
            any product you need we've got you covered. We test everything, so
            you don't have to gamble.
          </p>
        </div>
      </section>

      {/* What we're about */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-4">
            Three things we never compromise on
          </h2>
          <p className="text-gray-500 text-center mb-12 max-w-xl mx-auto">
            Simple promises we keep, every single day.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {VALUES.map((value, i) => {
              const Icon = value.icon;
              return (
                <div
                  key={i}
                  className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <div
                    className={`w-14 h-14 rounded-xl ${value.color} flex items-center justify-center mb-6`}
                  >
                    <Icon className={`w-6 h-6 ${value.iconColor}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-500 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Real quick stats */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-1">50K+</div>
            <div className="text-sm text-gray-500">Happy humans</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-1">1000+</div>
            <div className="text-sm text-gray-500">Products</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-1">15K+</div>
            <div className="text-sm text-gray-500">5-star reviews</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-1">3-day</div>
            <div className="text-sm text-gray-500">Shipping</div>
          </div>
        </div>
      </section>

      {/* Meet the team */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-4">
            The faces behind your orders
          </h2>
          <p className="text-gray-500 text-center mb-12 max-w-xl mx-auto">
            We're the ones packing your boxes, answering your questions, and
            finding the next thing you'll love.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {TEAM.map((member, i) => (
              <div key={i} className="text-center">
                <div className="w-40 h-40 mx-auto mb-4 rounded-full overflow-hidden bg-gray-100 border-4 border-white shadow-md">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <h3 className="font-semibold text-gray-800">{member.name}</h3>
                <p className="text-blue-600 text-sm mb-2">{member.role}</p>
                <p className="text-gray-400 text-xs">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* See the goods */}
      {/* <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <Heart className="w-12 h-12 text-rose-400 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Ready to find your next favorite thing?
          </h2>
          <p className="text-gray-500 mb-8 text-lg">
            From noise-cancelling headphones to that perfect leather wallet —
            we've got something you'll love.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="/products"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-medium transition-colors shadow-md hover:shadow-lg"
            >
              Shop Electronics
            </a>
            <a
              href="/products"
              className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-8 py-4 rounded-xl font-medium transition-colors"
            >
              Browse Accessories
            </a>
          </div>
          <p className="text-sm text-gray-400 mt-6">
            ✨ Free shipping on orders over $50
          </p>
        </div>
      </section> */}
    </main>
  );
}
