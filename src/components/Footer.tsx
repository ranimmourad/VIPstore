"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  if (pathname?.startsWith("/admin")) return null;

  return (
    <footer className="bg-ivory border-t hairline mt-24">
      {/* Newsletter */}
      <section className="border-b hairline">
        <div className="max-w-[1100px] mx-auto px-6 py-20 text-center">
          <p className="eyebrow mb-4">The VIP Letter</p>
          <h3 className="serif-display text-[32px] md:text-[44px] leading-[1.1] mb-5">
            Be the first to know
          </h3>
          <p className="cormorant text-[18px] md:text-[20px] text-stone max-w-xl mx-auto mb-8">
            New arrivals, private events and editorial stories — straight from
            our Dubai atelier.
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thank you. You are on the list.");
            }}
            className="flex flex-col sm:flex-row max-w-[520px] mx-auto gap-3 sm:gap-0"
          >
            <input
              type="email"
              required
              placeholder="Email address"
              className="flex-1 bg-transparent border-b sm:border-b border-ink/30 px-1 py-3 outline-none focus:border-ink text-[14px] tracking-wider"
            />
            <button
              type="submit"
              className="sm:ml-6 text-[11px] tracking-[0.28em] uppercase border-b border-ink pb-1 self-start sm:self-auto"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* Columns */}
      <section className="max-w-[1600px] mx-auto px-6 lg:px-10 py-16 grid grid-cols-2 md:grid-cols-4 gap-10">
        <div>
          <p className="eyebrow mb-5">Maison</p>
          <ul className="space-y-3 text-[13px] text-graphite">
            <li><Link href="/about" className="link-underline">Brand Story</Link></li>
            <li><Link href="/about#why" className="link-underline">Why VIP Store</Link></li>
            <li><Link href="/shop?filter=new" className="link-underline">New Arrivals</Link></li>
            <li><Link href="/shop?filter=best" className="link-underline">Best Sellers</Link></li>
          </ul>
        </div>
        <div>
          <p className="eyebrow mb-5">Client Services</p>
          <ul className="space-y-3 text-[13px] text-graphite">
            <li><Link href="/services/shipping" className="link-underline">Shipping</Link></li>
            <li><Link href="/services/returns" className="link-underline">Returns</Link></li>
            <li><Link href="/services/authenticity" className="link-underline">Authenticity</Link></li>
            <li><Link href="/services/contact" className="link-underline">Contact</Link></li>
          </ul>
        </div>
        <div>
          <p className="eyebrow mb-5">Shop</p>
          <ul className="space-y-3 text-[13px] text-graphite">
            <li><Link href="/shop/bags" className="link-underline">Bags</Link></li>
            <li><Link href="/shop/shoes" className="link-underline">Shoes</Link></li>
            <li><Link href="/shop/ready-to-wear" className="link-underline">Ready-to-Wear</Link></li>
            <li><Link href="/shop/accessories" className="link-underline">Accessories</Link></li>
          </ul>
        </div>
        <div>
          <p className="eyebrow mb-5">Contact</p>
          <address className="not-italic text-[13px] text-graphite space-y-2 leading-relaxed">
            <p>VIP Store — Showroom</p>
            <p>Les Berges du Lac, Tunis</p>
            <p>+216 — by appointment</p>
            <p>concierge@vipstore.tn</p>
          </address>
        </div>
      </section>

      <section className="border-t hairline">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-10 py-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-[11px] tracking-[0.22em] uppercase text-stone">
            © {new Date().getFullYear()} VIP Store — All rights reserved
          </p>
          <p className="text-[11px] tracking-[0.22em] uppercase text-stone">
            Sourced in Dubai · Delivered across Tunisia
          </p>
        </div>
      </section>
    </footer>
  );
}
