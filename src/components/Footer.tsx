import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-lg">
                  P
                </span>
              </div>
              <span className="font-semibold text-lg">Premium Store</span>
            </div>
            <p className="text-sm opacity-90">
              Curated premium products delivered to your doorstep with
              excellence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/"
                  className="opacity-90 hover:opacity-100 transition-opacity"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="opacity-90 hover:opacity-100 transition-opacity"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="opacity-90 hover:opacity-100 transition-opacity"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="opacity-90 hover:opacity-100 transition-opacity"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/"
                  className="opacity-90 hover:opacity-100 transition-opacity"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="opacity-90 hover:opacity-100 transition-opacity"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="opacity-90 hover:opacity-100 transition-opacity"
                >
                  Shipping Info
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="opacity-90 hover:opacity-100 transition-opacity"
                >
                  Returns
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Get In Touch</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>hello@premiumstore.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+1 (555) 000-0000</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>San Francisco, CA</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center text-sm opacity-75">
          <p>&copy; 2026 Premium Store. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="/" className="hover:opacity-100 transition-opacity">
              Privacy Policy
            </Link>
            <Link href="/" className="hover:opacity-100 transition-opacity">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
