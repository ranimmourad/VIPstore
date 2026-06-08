import Image from "next/image";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import {
  categories,
  getBestSellers,
  getNewArrivals,
  products,
} from "@/lib/products";

export default function HomePage() {
  const featured = products.slice(0, 8);
  const newIn = getNewArrivals().slice(0, 4);
  const best = getBestSellers().slice(0, 4);

  return (
    <>
      {/* ============ HERO ============ */}
      <section className="relative w-full">
        <div className="relative w-full aspect-[3/4] sm:aspect-[16/9] lg:aspect-[21/9] bg-ivory overflow-hidden">
          <Image
            src="/hero.jpg"
            alt="VIP Store — Editorial campaign"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />

          <div className="absolute inset-0 flex items-center">
            <div className="max-w-[1600px] mx-auto w-full px-6 lg:px-14">
              <div className="w-1/2 sm:max-w-[480px] lg:max-w-[560px] fade-in">
                <h1 className="serif-display text-[24px] sm:text-[56px] lg:text-[80px] leading-[0.98] tracking-[-0.01em] text-ink">
                  Luxury, <em className="cormorant italic font-light">curated</em> in Dubai.
                </h1>
                <p className="cormorant text-[15px] sm:text-[24px] text-graphite mt-3 sm:mt-6 leading-relaxed">
                  Authentic pieces from the world's leading maisons,
                  delivered to your door across Tunisia.
                </p>
                <div className="mt-6 sm:mt-10 flex flex-wrap gap-3 sm:gap-4">
                  <Link href="/shop" className="btn-primary px-5 py-3 sm:px-8 sm:py-4 text-[10px] sm:text-[11px]">
                    Discover Collection
                  </Link>
                  <Link href="/shop?filter=new" className="btn-outline px-5 py-3 sm:px-8 sm:py-4 text-[10px] sm:text-[11px]">
                    New Arrivals
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ CATEGORIES ============ */}
      <section className="max-w-[1600px] mx-auto px-6 lg:px-10 mt-20 lg:mt-28">
        <header className="text-center mb-12 lg:mb-16">
          <p className="eyebrow mb-4">Shop By Category</p>
          <h2 className="serif-display text-[34px] lg:text-[48px] leading-tight">
            A complete wardrobe, signed.
          </h2>
        </header>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((c, i) => (
            <Link
              key={c.slug}
              href={`/shop/${c.slug}`}
              className={`group relative block overflow-hidden ${
                i === 0 ? "md:row-span-2 md:col-span-1" : ""
              }`}
            >
              <div
                className={`relative bg-ivory overflow-hidden ${
                  i === 0 ? "aspect-[3/4] md:aspect-[3/5]" : "aspect-[3/4]"
                }`}
              >
                <Image
                  src={c.image}
                  alt={c.name}
                  fill
                  sizes="(min-width: 768px) 33vw, 50vw"
                  className="object-cover luxe-img"
                />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-5 lg:p-7 bg-gradient-to-t from-ink/55 to-transparent">
                <p className="eyebrow text-warm/80 mb-1.5">Explore</p>
                <h3 className="serif-display text-warm text-[22px] lg:text-[28px]">
                  {c.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ============ FEATURED ============ */}
      <section className="max-w-[1600px] mx-auto px-6 lg:px-10 mt-24 lg:mt-32">
        <header className="flex items-end justify-between mb-10 lg:mb-14">
          <div>
            <p className="eyebrow mb-3">The Edit</p>
            <h2 className="serif-display text-[30px] lg:text-[42px] leading-tight">
              Featured pieces
            </h2>
          </div>
          <Link
            href="/shop"
            className="hidden md:inline text-[11px] tracking-[0.28em] uppercase link-underline"
          >
            View All
          </Link>
        </header>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-12 lg:gap-x-8 lg:gap-y-16">
          {featured.map((p, i) => (
            <ProductCard key={p.id} product={p} priority={i < 4} />
          ))}
        </div>
      </section>

      {/* ============ NEW ARRIVALS — editorial split ============ */}
      <section className="mt-28 lg:mt-40">
        <div className="grid lg:grid-cols-2">
          <div className="relative aspect-[4/5] lg:aspect-auto lg:min-h-[640px] bg-ivory">
            <Image
              src="/products/lady-dior-micro-green.jpg"
              alt="Lady Dior"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="flex items-center bg-cream">
            <div className="px-8 lg:px-20 py-16 lg:py-24 max-w-xl">
              <p className="eyebrow mb-5">New Arrivals</p>
              <h2 className="serif-display text-[36px] lg:text-[56px] leading-[1.05] mb-6">
                Spring's quiet icons
              </h2>
              <p className="cormorant text-[19px] lg:text-[21px] text-graphite leading-relaxed mb-8">
                A precise edit of the season's most considered pieces — from the
                Lady Dior Micro in sage cannage to Loro Piana's sky-suede Charms
                Walk. Hand-selected from our Dubai atelier.
              </p>
              <Link href="/shop?filter=new" className="btn-outline">
                Shop New In
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* New arrivals grid */}
      <section className="max-w-[1600px] mx-auto px-6 lg:px-10 mt-20 lg:mt-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-5 gap-y-12 lg:gap-x-8">
          {newIn.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      {/* ============ BEST SELLERS ============ */}
      <section className="max-w-[1600px] mx-auto px-6 lg:px-10 mt-28 lg:mt-40">
        <header className="text-center mb-12 lg:mb-16">
          <p className="eyebrow mb-4">House Favourites</p>
          <h2 className="serif-display text-[34px] lg:text-[48px] leading-tight">
            Best sellers
          </h2>
          <p className="cormorant text-[19px] text-stone mt-4 max-w-lg mx-auto">
            The pieces our clients return to, season after season.
          </p>
        </header>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-5 gap-y-12 lg:gap-x-8">
          {best.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>

        <div className="text-center mt-16">
          <Link href="/shop?filter=best" className="btn-outline">
            View Best Sellers
          </Link>
        </div>
      </section>

      {/* ============ BRAND STORY ============ */}
      <section className="mt-28 lg:mt-40 bg-ivory">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-10 py-20 lg:py-28 text-center">
          <p className="eyebrow mb-6">The House</p>
          <h2 className="serif-display text-[36px] lg:text-[56px] leading-[1.05] mb-8">
            From the boutiques of Dubai
            <br />
            to the doorsteps of Tunisia.
          </h2>
          <div className="cormorant text-[19px] lg:text-[22px] text-graphite leading-[1.7] space-y-5 max-w-2xl mx-auto">
            <p>
              VIP Store was founded with a single intention — to bring the
              precision and craft of the world's great maisons closer to home.
              Every piece is sourced personally in Dubai, inspected in our
              atelier and delivered to clients across Tunisia.
            </p>
            <p>
              We work directly with authorised stockists. Authenticity is not a
              promise — it is the starting point.
            </p>
          </div>
          <div className="mt-12">
            <Link href="/about" className="btn-outline">
              Read Our Story
            </Link>
          </div>
        </div>
      </section>

      {/* ============ WHY VIP STORE ============ */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-10 mt-24 lg:mt-32">
        <header className="text-center mb-14">
          <p className="eyebrow mb-3">Why VIP Store</p>
          <h2 className="serif-display text-[30px] lg:text-[40px]">
            The VIP standard
          </h2>
        </header>
        <div className="grid md:grid-cols-3 gap-12 lg:gap-20 text-center">
          {[
            {
              t: "Authentic Sourcing",
              d: "Every piece is hand-selected from authorised stockists in Dubai. No exceptions.",
            },
            {
              t: "Delivered to Your Door",
              d: "Complimentary, insured delivery to all 24 governorates of Tunisia.",
            },
            {
              t: "Cash on Delivery",
              d: "Inspect your piece before paying. Confidence, by design.",
            },
          ].map((item) => (
            <div key={item.t}>
              <div className="serif-display text-[42px] text-accent mb-3">·</div>
              <h3 className="serif-display text-[22px] mb-3">{item.t}</h3>
              <p className="cormorant text-[18px] text-stone leading-relaxed">
                {item.d}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}