import Image from "next/image";
import Link from "next/link";

export const metadata = { title: "Our Story — VIP Store" };

export default function AboutPage() {
  return (
    <>
      <section className="relative w-full aspect-[16/10] sm:aspect-[16/8] bg-ivory overflow-hidden">
        <Image
          src="/products/dior-straw-hat.jpg"
          alt="VIP Store"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[50%_35%]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-warm/30 via-transparent to-warm/40" />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-[1600px] mx-auto w-full px-6 lg:px-14 pb-14 lg:pb-20">
            <p className="eyebrow mb-4">The House</p>
            <h1 className="serif-display text-[44px] sm:text-[64px] lg:text-[96px] leading-[0.98]">
              A house with two homes.
            </h1>
          </div>
        </div>
      </section>

      <section className="max-w-[860px] mx-auto px-6 lg:px-10 py-20 lg:py-28">
        <div className="cormorant text-[20px] lg:text-[24px] text-graphite leading-[1.7] space-y-6">
          <p className="serif-display text-[28px] lg:text-[34px] text-ink leading-[1.25]">
            VIP Store was born of a simple conviction — that the precision and
            craft of the world's great maisons deserves a quieter, more
            considered route to its clients.
          </p>
          <p>
            We began in Dubai, in the discreet boutiques of DIFC and the Mall of
            the Emirates, hand-selecting pieces from the authorised stockists
            of Dior, Hermès, Chanel, Loro Piana, Saint Laurent, Loewe, Fendi
            and beyond.
          </p>
          <p>
            Each piece is inspected in our atelier, photographed in natural
            light, and delivered — by hand and with care — to clients across
            Tunisia.
          </p>
          <p>
            We do not chase volume. We chase the right piece, for the right
            client, at the right moment.
          </p>
        </div>
      </section>

      <section id="why" className="bg-ivory py-20 lg:py-28">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <header className="text-center mb-16">
            <p className="eyebrow mb-3">The VIP Standard</p>
            <h2 className="serif-display text-[32px] lg:text-[44px]">
              Four guarantees, without exception.
            </h2>
          </header>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            {[
              {
                t: "Authentic Sourcing",
                d: "Every piece is purchased from authorised stockists in Dubai. Original receipts, packaging and dust bags are retained.",
              },
              {
                t: "Atelier Inspection",
                d: "Every item is inspected by our team before listing — stitching, hardware, leather, packaging, dust bag and serial codes.",
              },
              {
                t: "Insured Delivery",
                d: "Complimentary, insured delivery across all 24 governorates of Tunisia, in 2–4 business days.",
              },
              {
                t: "Cash on Delivery",
                d: "Inspect your piece before paying. A relationship of trust, by design.",
              },
            ].map((g) => (
              <div key={g.t}>
                <p className="serif-display text-[36px] text-accent mb-2">·</p>
                <h3 className="serif-display text-[22px] lg:text-[26px] mb-3">
                  {g.t}
                </h3>
                <p className="cormorant text-[19px] text-stone leading-relaxed">
                  {g.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-[1100px] mx-auto px-6 lg:px-10 py-24 text-center">
        <h2 className="serif-display text-[30px] lg:text-[44px] leading-[1.1]">
          Discover the current edit.
        </h2>
        <div className="mt-10 flex flex-wrap gap-4 justify-center">
          <Link href="/shop" className="btn-primary">Shop All</Link>
          <Link href="/shop?filter=new" className="btn-outline">New Arrivals</Link>
        </div>
      </section>
    </>
  );
}
