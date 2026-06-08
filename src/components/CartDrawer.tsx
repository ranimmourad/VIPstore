"use client";

import Link from "next/link";
import Image from "next/image";
import { useCart } from "./CartContext";
import { getProductById, formatPrice } from "@/lib/products";

export default function CartDrawer() {
  const { isOpen, closeCart, items, updateQuantity, removeItem, subtotal } =
    useCart();

  return (
    <div
      className={`fixed inset-0 z-50 ${
        isOpen ? "visible" : "invisible pointer-events-none"
      }`}
      aria-hidden={!isOpen}
    >
      <div
        className={`absolute inset-0 bg-ink/30 transition-opacity duration-500 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
        onClick={closeCart}
      />
      <aside
        className={`absolute right-0 top-0 h-full w-full sm:w-[460px] bg-warm shadow-xl transition-transform duration-500 ease-luxe ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } flex flex-col`}
      >
        <header className="flex items-center justify-between px-6 py-5 border-b hairline">
          <div>
            <p className="eyebrow">Shopping Bag</p>
            <p className="serif-display text-[22px] mt-1">
              {items.length} {items.length === 1 ? "item" : "items"}
            </p>
          </div>
          <button onClick={closeCart} aria-label="Close" className="p-2">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.2" />
            </svg>
          </button>
        </header>

        <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">
          {items.length === 0 && (
            <div className="text-center py-20">
              <p className="cormorant text-2xl text-stone">Your bag is empty.</p>
              <Link
                href="/shop"
                onClick={closeCart}
                className="btn-outline mt-8"
              >
                Discover Collection
              </Link>
            </div>
          )}

          {items.map((it) => {
            const p = getProductById(it.productId);
            if (!p) return null;
            return (
              <article
                key={`${it.productId}-${it.size}`}
                className="flex gap-4"
              >
                <Link
                  href={`/product/${p.slug}`}
                  onClick={closeCart}
                  className="relative w-[92px] h-[120px] bg-ivory flex-shrink-0 overflow-hidden"
                >
                  <Image
                    src={p.images[0]}
                    alt={p.name}
                    fill
                    className="object-cover"
                    sizes="92px"
                  />
                </Link>
                <div className="flex-1 min-w-0">
                  <p className="eyebrow text-stone">{p.brand}</p>
                  <Link
                    href={`/product/${p.slug}`}
                    onClick={closeCart}
                    className="serif-display text-[16px] block leading-tight mt-1 truncate"
                  >
                    {p.name}
                  </Link>
                  <p className="text-[12px] text-stone mt-1">Size {it.size}</p>
                  <div className="flex items-center justify-between mt-3">
                    <div className="flex items-center border hairline">
                      <button
                        className="w-8 h-8 text-[14px]"
                        onClick={() =>
                          updateQuantity(it.productId, it.size, it.quantity - 1)
                        }
                      >
                        −
                      </button>
                      <span className="w-8 text-center text-[12px]">
                        {it.quantity}
                      </span>
                      <button
                        className="w-8 h-8 text-[14px]"
                        onClick={() =>
                          updateQuantity(it.productId, it.size, it.quantity + 1)
                        }
                      >
                        +
                      </button>
                    </div>
                    <p className="text-[13px]">
                      {formatPrice(p.price * it.quantity)}
                    </p>
                  </div>
                  <button
                    onClick={() => removeItem(it.productId, it.size)}
                    className="text-[10.5px] tracking-[0.22em] uppercase text-stone mt-3 link-underline"
                  >
                    Remove
                  </button>
                </div>
              </article>
            );
          })}
        </div>

        {items.length > 0 && (
          <footer className="border-t hairline px-6 py-6 space-y-4 bg-ivory">
            <div className="flex justify-between text-[14px]">
              <span className="eyebrow">Subtotal</span>
              <span className="serif-display text-[18px]">
                {formatPrice(subtotal)}
              </span>
            </div>
            <p className="text-[11px] text-stone leading-relaxed">
              Shipping and taxes calculated at checkout. Cash on delivery
              available across Tunisia.
            </p>
            <Link
              href="/checkout"
              onClick={closeCart}
              className="btn-primary w-full"
            >
              Proceed to Checkout
            </Link>
            <Link
              href="/cart"
              onClick={closeCart}
              className="block text-center text-[11px] tracking-[0.24em] uppercase link-underline pt-1"
            >
              View Bag
            </Link>
          </footer>
        )}
      </aside>
    </div>
  );
}
