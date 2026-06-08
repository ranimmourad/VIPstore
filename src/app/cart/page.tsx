"use client";

import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/components/CartContext";
import { getProductById, formatPrice } from "@/lib/products";

export default function CartPage() {
  const { items, updateQuantity, removeItem, subtotal } = useCart();

  return (
    <section className="max-w-[1400px] mx-auto px-6 lg:px-10 pt-12 lg:pt-16 pb-24">
      <header className="text-center mb-12 lg:mb-16">
        <p className="eyebrow mb-4">Your Selection</p>
        <h1 className="serif-display text-[36px] lg:text-[56px]">
          Shopping Bag
        </h1>
      </header>

      {items.length === 0 ? (
        <div className="text-center py-20 border-y hairline">
          <p className="cormorant text-2xl text-stone mb-8">
            Your bag is currently empty.
          </p>
          <Link href="/shop" className="btn-primary">
            Discover Collection
          </Link>
        </div>
      ) : (
        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-12 lg:gap-20">
          <div>
            <div className="border-t hairline">
              {items.map((it) => {
                const p = getProductById(it.productId);
                if (!p) return null;
                return (
                  <div
                    key={`${it.productId}-${it.size}`}
                    className="flex gap-5 lg:gap-8 py-8 border-b hairline"
                  >
                    <Link
                      href={`/product/${p.slug}`}
                      className="relative w-[120px] sm:w-[160px] aspect-[3/4] bg-ivory flex-shrink-0 overflow-hidden"
                    >
                      <Image
                        src={p.images[0]}
                        alt={p.name}
                        fill
                        sizes="160px"
                        className="object-cover"
                      />
                    </Link>
                    <div className="flex-1 min-w-0 flex flex-col">
                      <p className="eyebrow text-stone">{p.brand}</p>
                      <Link
                        href={`/product/${p.slug}`}
                        className="serif-display text-[17px] lg:text-[20px] mt-1.5 leading-tight"
                      >
                        {p.name}
                      </Link>
                      <p className="text-[12px] text-stone mt-2">
                        Size {it.size}
                      </p>

                      <div className="flex-1" />

                      <div className="flex items-end justify-between mt-4 gap-4">
                        <div className="flex items-center border hairline">
                          <button
                            className="w-9 h-9 text-[14px]"
                            onClick={() =>
                              updateQuantity(
                                it.productId,
                                it.size,
                                it.quantity - 1
                              )
                            }
                          >
                            −
                          </button>
                          <span className="w-9 text-center text-[13px]">
                            {it.quantity}
                          </span>
                          <button
                            className="w-9 h-9 text-[14px]"
                            onClick={() =>
                              updateQuantity(
                                it.productId,
                                it.size,
                                it.quantity + 1
                              )
                            }
                          >
                            +
                          </button>
                        </div>
                        <p className="serif-display text-[16px] lg:text-[18px]">
                          {formatPrice(p.price * it.quantity)}
                        </p>
                      </div>

                      <button
                        onClick={() => removeItem(it.productId, it.size)}
                        className="text-[10.5px] tracking-[0.22em] uppercase text-stone mt-4 self-start link-underline"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <aside className="bg-ivory p-8 lg:p-10 self-start sticky top-32">
            <p className="eyebrow mb-5">Order Summary</p>

            <dl className="space-y-3 text-[13.5px]">
              <div className="flex justify-between">
                <dt className="text-stone">Subtotal</dt>
                <dd>{formatPrice(subtotal)}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-stone">Shipping</dt>
                <dd className="eyebrow text-accent">Complimentary</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-stone">Taxes</dt>
                <dd className="text-stone">Included</dd>
              </div>
            </dl>

            <div className="border-t hairline mt-6 pt-5 flex items-baseline justify-between">
              <p className="eyebrow">Total</p>
              <p className="serif-display text-[26px]">
                {formatPrice(subtotal)}
              </p>
            </div>

            <Link href="/checkout" className="btn-primary w-full mt-8">
              Proceed to Checkout
            </Link>
            <p className="text-[11px] text-stone text-center mt-4 leading-relaxed">
              Cash on delivery available across Tunisia.
            </p>
          </aside>
        </div>
      )}
    </section>
  );
}
