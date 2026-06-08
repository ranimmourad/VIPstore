"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useCart } from "./CartContext";
import CartDrawer from "./CartDrawer";

const NAV = [
  { name: "New In", href: "/shop?filter=new" },
  { name: "Bags", href: "/shop/bags" },
  { name: "Shoes", href: "/shop/shoes" },
  { name: "Ready-to-Wear", href: "/shop/ready-to-wear" },
  { name: "Dresses", href: "/shop/dresses" },
  { name: "Swimwear", href: "/shop/swimwear" },
  { name: "Accessories", href: "/shop/accessories" },
  { name: "Best Sellers", href: "/shop?filter=best" },
];

export default function Header() {
  const { count, openCart } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMobileOpen(false), [pathname]);

  // Hide global header on admin
  if (pathname?.startsWith("/admin")) return null;

  return (
    <>
      <header
        className={`sticky top-0 z-40 bg-warm/95 backdrop-blur-sm transition-shadow ${
          scrolled ? "shadow-[0_1px_0_rgba(0,0,0,0.06)]" : ""
        }`}
      >
        <div className="max-w-[1600px] mx-auto px-6 lg:px-10">
          {/* Top row */}
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Mobile menu */}
            <button
              aria-label="Open menu"
              className="lg:hidden -ml-2 p-2"
              onClick={() => setMobileOpen(true)}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="1.2" />
              </svg>
            </button>

            <div className="flex-1 lg:flex-none">
              <Link
                href="/"
                className="block text-center lg:text-left serif-display text-[22px] lg:text-[26px] tracking-[0.28em] uppercase"
              >
                VIP <span className="font-light">Store</span>
              </Link>
              <div className="hidden lg:block text-[9.5px] tracking-[0.32em] uppercase text-stone mt-0.5">
                Luxury Fashion · Dubai → Tunisia
              </div>
            </div>

            <div className="flex items-center gap-4 lg:gap-6">
              <button aria-label="Search" className="hidden lg:block p-1">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.2" />
                  <path d="M20 20l-3.5-3.5" stroke="currentColor" strokeWidth="1.2" />
                </svg>
              </button>
              <Link
                href="/shop"
                className="hidden lg:inline text-[11px] tracking-[0.24em] uppercase link-underline"
              >
                Shop
              </Link>
              <button
                aria-label="Cart"
                onClick={openCart}
                className="relative p-1"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M5 7h14l-1.2 12.2a1 1 0 0 1-1 .8H7.2a1 1 0 0 1-1-.8L5 7z"
                    stroke="currentColor"
                    strokeWidth="1.2"
                  />
                  <path d="M9 7V5a3 3 0 1 1 6 0v2" stroke="currentColor" strokeWidth="1.2" />
                </svg>
                {count > 0 && (
                  <span className="absolute -top-1 -right-1 bg-ink text-warm text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                    {count}
                  </span>
                )}
              </button>
            </div>
          </div>

          {/* Nav row */}
          <nav className="hidden lg:flex items-center justify-center gap-10 border-t hairline border-b py-3.5">
            {NAV.map((n) => (
              <Link
                key={n.name}
                href={n.href}
                className="text-[11px] tracking-[0.24em] uppercase link-underline text-graphite"
              >
                {n.name}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-50 lg:hidden transition ${
          mobileOpen ? "visible" : "invisible pointer-events-none"
        }`}
      >
        <div
          className={`absolute inset-0 bg-ink/30 transition-opacity ${
            mobileOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setMobileOpen(false)}
        />
        <div
          className={`absolute top-0 left-0 h-full w-[82%] max-w-[360px] bg-warm transition-transform duration-500 ease-luxe ${
            mobileOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between px-6 py-5 border-b hairline">
            <span className="serif-display tracking-[0.28em] uppercase">VIP Store</span>
            <button onClick={() => setMobileOpen(false)} aria-label="Close" className="p-2">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.2" />
              </svg>
            </button>
          </div>
          <ul className="px-6 py-4">
            {NAV.map((n) => (
              <li key={n.name} className="py-3 border-b hairline">
                <Link
                  href={n.href}
                  className="text-[12px] tracking-[0.24em] uppercase text-graphite"
                >
                  {n.name}
                </Link>
              </li>
            ))}
            <li className="py-4">
              <Link
                href="/shop"
                className="text-[12px] tracking-[0.28em] uppercase serif-display"
              >
                Shop All
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <CartDrawer />
    </>
  );
}