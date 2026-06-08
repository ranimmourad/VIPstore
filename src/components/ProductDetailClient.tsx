"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import type { Product } from "@/lib/types";
import { useCart } from "./CartContext";
import { formatPrice } from "@/lib/products";

export default function ProductDetailClient({ product }: { product: Product }) {
  const { addItem } = useCart();
  const router = useRouter();
  const [activeImage, setActiveImage] = useState(0);
  const [size, setSize] = useState<string | null>(
    product.sizes.length === 1 ? product.sizes[0] : null
  );
  const [qty, setQty] = useState(1);
  const [shake, setShake] = useState(false);
  const [openSection, setOpenSection] = useState<string | null>("details");

  const handleAdd = () => {
    if (!size) {
      setShake(true);
      setTimeout(() => setShake(false), 600);
      return;
    }
    addItem(product.id, size, qty);
  };

  const handleBuyNow = () => {
    if (!size) {
      setShake(true);
      setTimeout(() => setShake(false), 600);
      return;
    }
    addItem(product.id, size, qty);
    router.push("/checkout");
  };

  const stockLabel =
    product.stock === 0
      ? "Out of stock"
      : product.stock <= 3
      ? `Only ${product.stock} left`
      : "In stock";

  return (
    <article className="max-w-[1600px] mx-auto px-6 lg:px-10 pt-8 lg:pt-12 pb-24">
      {/* Breadcrumbs */}
      <nav className="text-[11px] tracking-[0.24em] uppercase text-stone mb-8">
        <Link href="/" className="link-underline">Home</Link>{" "}
        <span className="mx-2">/</span>
        <Link href={`/shop/${product.category}`} className="link-underline capitalize">
          {product.category.replace("-", " ")}
        </Link>{" "}
        <span className="mx-2">/</span>
        <span className="text-ink">{product.brand}</span>
      </nav>

      <div className="grid lg:grid-cols-[1.15fr_1fr] gap-10 lg:gap-20">
        {/* ============== GALLERY ============== */}
        <div>
          {/* Mobile: horizontal scroll */}
          <div className="lg:hidden -mx-6 flex overflow-x-auto snap-x snap-mandatory no-scrollbar">
            {product.images.map((src, i) => (
              <div
                key={i}
                className="relative w-full flex-shrink-0 aspect-[3/4] bg-ivory snap-center"
              >
                <Image
                  src={src}
                  alt={`${product.name} — view ${i + 1}`}
                  fill
                  sizes="100vw"
                  className="object-cover"
                  priority={i === 0}
                />
              </div>
            ))}
          </div>

          {/* Desktop: thumb + main */}
          <div className="hidden lg:grid grid-cols-[80px_1fr] gap-5">
            <div className="flex flex-col gap-3">
              {product.images.map((src, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(i)}
                  className={`relative aspect-[3/4] bg-ivory overflow-hidden ${
                    activeImage === i ? "ring-1 ring-ink" : "opacity-70 hover:opacity-100"
                  }`}
                >
                  <Image
                    src={src}
                    alt={`View ${i + 1}`}
                    fill
                    sizes="80px"
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
            <div className="relative aspect-[3/4] bg-ivory overflow-hidden">
              <Image
                src={product.images[activeImage]}
                alt={product.name}
                fill
                sizes="(min-width: 1024px) 60vw, 100vw"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>

        {/* ============== DETAILS ============== */}
        <div className="lg:pt-6">
          <p className="eyebrow text-stone">{product.brand}</p>
          <h1 className="serif-display text-[28px] lg:text-[40px] leading-[1.1] mt-3">
            {product.name}
          </h1>
          <p className="serif-display text-[22px] lg:text-[24px] mt-5 tracking-wide">
            {formatPrice(product.price)}
          </p>
          <p className="text-[11px] tracking-[0.24em] uppercase mt-3 text-stone">
            <span
              className={
                product.stock === 0
                  ? "text-red-700"
                  : product.stock <= 3
                  ? "text-accent"
                  : ""
              }
            >
              · {stockLabel}
            </span>
          </p>

          <p className="cormorant text-[18px] lg:text-[19px] text-graphite leading-[1.7] mt-7">
            {product.description}
          </p>

          {/* Color note */}
          {product.colors && product.colors.length > 0 && (
            <div className="mt-8">
              <p className="eyebrow mb-3">
                Available Colours · {product.colors.length}
              </p>
              <p className="text-[13px] text-graphite">
                {product.colors.join(" · ")}
              </p>
            </div>
          )}

          {/* Sizes */}
          <div className="mt-8">
            <div className="flex items-center justify-between mb-3">
              <p className="eyebrow">Size</p>
              <button className="text-[10.5px] tracking-[0.24em] uppercase link-underline text-stone">
                Size Guide
              </button>
            </div>
            <div
              className={`grid grid-cols-4 sm:grid-cols-5 gap-2 ${
                shake ? "animate-[shake_0.4s]" : ""
              }`}
            >
              {product.sizes.map((s) => (
                <button
                  key={s}
                  onClick={() => setSize(s)}
                  className={`py-3.5 text-[12px] tracking-[0.18em] uppercase border transition ${
                    size === s
                      ? "border-ink bg-ink text-warm"
                      : "border-ink/20 hover:border-ink"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
            {!size && shake && (
              <p className="text-[12px] text-red-700 mt-2">
                Please select a size.
              </p>
            )}
          </div>

          {/* Quantity */}
          <div className="mt-7 flex items-center gap-5">
            <p className="eyebrow">Quantity</p>
            <div className="flex items-center border hairline">
              <button
                onClick={() => setQty(Math.max(1, qty - 1))}
                className="w-10 h-10 text-[14px]"
              >
                −
              </button>
              <span className="w-10 text-center text-[13px]">{qty}</span>
              <button
                onClick={() => setQty(qty + 1)}
                className="w-10 h-10 text-[14px]"
              >
                +
              </button>
            </div>
          </div>

          {/* Actions */}
          <div className="mt-8 space-y-3">
            <button
              onClick={handleAdd}
              disabled={product.stock === 0}
              className="btn-primary w-full disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Add to Bag
            </button>
            <button
              onClick={handleBuyNow}
              disabled={product.stock === 0}
              className="btn-outline w-full disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Buy Now
            </button>
          </div>

          {/* Trust strip */}
          <div className="mt-10 border-t border-b hairline py-5 grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="eyebrow mb-1">Authentic</p>
              <p className="text-[11px] text-stone">100% Original</p>
            </div>
            <div>
              <p className="eyebrow mb-1">Delivery</p>
              <p className="text-[11px] text-stone">All Tunisia</p>
            </div>
            <div>
              <p className="eyebrow mb-1">Payment</p>
              <p className="text-[11px] text-stone">Cash On Delivery</p>
            </div>
          </div>

          {/* Accordion */}
          <div className="mt-8 border-t hairline">
            {[
              { id: "details", label: "Product Details", body: (
                <ul className="space-y-2">
                  {product.details.map((d) => (
                    <li key={d} className="flex gap-3 cormorant text-[18px] text-graphite">
                      <span className="text-accent">·</span>
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              )},
              { id: "shipping", label: "Shipping & Returns", body: (
                <p className="cormorant text-[18px] text-graphite leading-[1.7]">
                  Complimentary insured delivery across all 24 governorates of
                  Tunisia, in 2–4 business days. Cash on delivery — inspect your
                  piece before paying. Returns accepted within 7 days,
                  unworn and in original packaging.
                </p>
              )},
              { id: "auth", label: "Authenticity Guarantee", body: (
                <p className="cormorant text-[18px] text-graphite leading-[1.7]">
                  Every piece sold by VIP Store is sourced from authorised
                  stockists in Dubai and inspected by our atelier. If a product
                  is ever found to be inauthentic, we offer a full refund — no
                  conditions.
                </p>
              )},
            ].map((s) => {
              const open = openSection === s.id;
              return (
                <div key={s.id} className="border-b hairline">
                  <button
                    onClick={() => setOpenSection(open ? null : s.id)}
                    className="w-full flex items-center justify-between py-5 text-left"
                  >
                    <span className="text-[12px] tracking-[0.26em] uppercase">
                      {s.label}
                    </span>
                    <span className="text-xl font-light">{open ? "−" : "+"}</span>
                  </button>
                  {open && <div className="pb-6">{s.body}</div>}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </article>
  );
}
