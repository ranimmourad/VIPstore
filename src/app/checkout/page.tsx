"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCart } from "@/components/CartContext";
import { getProductById, formatPrice } from "@/lib/products";

const TN_CITIES = [
  "Tunis", "Ariana", "Ben Arous", "Manouba", "Nabeul", "Zaghouan",
  "Bizerte", "Béja", "Jendouba", "Le Kef", "Siliana", "Sousse",
  "Monastir", "Mahdia", "Sfax", "Kairouan", "Kasserine", "Sidi Bouzid",
  "Gabès", "Médenine", "Tataouine", "Gafsa", "Tozeur", "Kébili",
];

export default function CheckoutPage() {
  const router = useRouter();
  const { items, subtotal, clear } = useCart();
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [orderNumber, setOrderNumber] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    // Simulate order
    setTimeout(() => {
      const num =
        "VIP-" +
        Math.floor(100000 + Math.random() * 900000).toString();
      setOrderNumber(num);
      setSubmitted(true);
      setSubmitting(false);
      clear();
    }, 900);
  };

  if (submitted) {
    return (
      <section className="max-w-[800px] mx-auto px-6 py-24 text-center">
        <p className="eyebrow text-accent mb-5">Order Confirmed</p>
        <h1 className="serif-display text-[36px] lg:text-[52px] leading-[1.05]">
          Thank you for your order.
        </h1>
        <p className="cormorant text-[20px] text-stone mt-6 max-w-md mx-auto leading-relaxed">
          Your order <strong className="text-ink">{orderNumber}</strong> has
          been received. Our concierge will call you shortly to confirm
          delivery details. Payment is collected on delivery.
        </p>
        <div className="mt-10 flex flex-wrap gap-4 justify-center">
          <Link href="/" className="btn-outline">Return Home</Link>
          <Link href="/shop" className="btn-primary">Continue Shopping</Link>
        </div>
      </section>
    );
  }

  if (items.length === 0) {
    return (
      <section className="max-w-[800px] mx-auto px-6 py-24 text-center">
        <h1 className="serif-display text-[36px]">Your bag is empty.</h1>
        <p className="cormorant text-[19px] text-stone mt-4">
          Add a piece to your bag to proceed to checkout.
        </p>
        <Link href="/shop" className="btn-primary mt-8">
          Discover Collection
        </Link>
      </section>
    );
  }

  return (
    <section className="max-w-[1400px] mx-auto px-6 lg:px-10 pt-12 lg:pt-16 pb-24">
      <header className="text-center mb-12 lg:mb-16">
        <p className="eyebrow mb-4">Final Step</p>
        <h1 className="serif-display text-[36px] lg:text-[52px]">Checkout</h1>
      </header>

      <div className="grid lg:grid-cols-[1.3fr_1fr] gap-12 lg:gap-20">
        {/* FORM */}
        <form onSubmit={handleSubmit} className="space-y-12">
          {/* Contact */}
          <section>
            <h2 className="serif-display text-[22px] mb-6 pb-3 border-b hairline">
              Delivery Details
            </h2>
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Full Name" name="fullName" required />
              <Field label="Phone Number" name="phone" type="tel" required placeholder="+216 ..." />
              <Field label="Address" name="address" required full />
              <div>
                <label className="eyebrow block mb-2">City</label>
                <select
                  name="city"
                  required
                  className="w-full bg-transparent border-b hairline py-3 outline-none focus:border-ink text-[14px]"
                >
                  <option value="">Select governorate</option>
                  {TN_CITIES.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>
              <Field label="Postal Code" name="postal" />
              <Field label="Order Notes (optional)" name="notes" full />
            </div>
          </section>

          {/* Payment */}
          <section>
            <h2 className="serif-display text-[22px] mb-6 pb-3 border-b hairline">
              Payment Method
            </h2>
            <label className="flex items-start gap-4 p-5 border hairline cursor-pointer bg-ivory">
              <input
                type="radio"
                checked
                readOnly
                className="mt-1.5 accent-black"
              />
              <div>
                <p className="serif-display text-[18px]">Cash on Delivery</p>
                <p className="cormorant text-[16px] text-stone leading-relaxed mt-1">
                  Pay in cash to the courier upon receipt. Available across all
                  24 governorates of Tunisia.
                </p>
              </div>
            </label>
          </section>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <button
              type="submit"
              disabled={submitting}
              className="btn-primary flex-1 disabled:opacity-50"
            >
              {submitting ? "Placing Order..." : "Place Order"}
            </button>
            <Link href="/cart" className="btn-outline">
              Return to Bag
            </Link>
          </div>
          <p className="text-[11px] text-stone leading-relaxed">
            By placing your order, you agree to VIP Store's terms of sale and
            authenticity policy.
          </p>
        </form>

        {/* SUMMARY */}
        <aside className="bg-ivory p-8 lg:p-10 self-start lg:sticky lg:top-32">
          <p className="eyebrow mb-6">Order Summary</p>
          <ul className="space-y-5 max-h-[360px] overflow-y-auto pr-2 -mr-2">
            {items.map((it) => {
              const p = getProductById(it.productId);
              if (!p) return null;
              return (
                <li
                  key={`${it.productId}-${it.size}`}
                  className="flex gap-4"
                >
                  <div className="relative w-[64px] h-[80px] bg-warm flex-shrink-0 overflow-hidden">
                    <Image src={p.images[0]} alt={p.name} fill sizes="64px" className="object-cover" />
                    <span className="absolute -top-1 -right-1 bg-ink text-warm text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                      {it.quantity}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="eyebrow text-stone">{p.brand}</p>
                    <p className="serif-display text-[14px] leading-tight mt-1 truncate">{p.name}</p>
                    <p className="text-[11px] text-stone mt-1">Size {it.size}</p>
                  </div>
                  <p className="text-[13px] whitespace-nowrap">
                    {formatPrice(p.price * it.quantity)}
                  </p>
                </li>
              );
            })}
          </ul>

          <div className="border-t hairline mt-6 pt-5 space-y-2.5 text-[13.5px]">
            <div className="flex justify-between">
              <span className="text-stone">Subtotal</span>
              <span>{formatPrice(subtotal)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-stone">Shipping</span>
              <span className="eyebrow text-accent">Complimentary</span>
            </div>
          </div>
          <div className="border-t hairline mt-5 pt-5 flex items-baseline justify-between">
            <p className="eyebrow">Total</p>
            <p className="serif-display text-[24px]">{formatPrice(subtotal)}</p>
          </div>
        </aside>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
  full,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  full?: boolean;
}) {
  return (
    <div className={full ? "sm:col-span-2" : ""}>
      <label className="eyebrow block mb-2">
        {label} {required && <span className="text-accent">*</span>}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full bg-transparent border-b hairline py-3 outline-none focus:border-ink text-[14px]"
      />
    </div>
  );
}
