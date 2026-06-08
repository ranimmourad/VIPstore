import Link from "next/link";
import { notFound } from "next/navigation";

const PAGES: Record<
  string,
  { title: string; eyebrow: string; body: { h: string; p: string }[] }
> = {
  shipping: {
    eyebrow: "Client Services",
    title: "Shipping",
    body: [
      {
        h: "Complimentary delivery, all of Tunisia",
        p: "VIP Store offers complimentary insured delivery to all 24 governorates of Tunisia. Orders are typically delivered in 2–4 business days from confirmation.",
      },
      {
        h: "Same-day in Tunis & Sousse",
        p: "For orders confirmed before 14:00, same-day delivery is available in Greater Tunis, Sousse, and Sfax — subject to courier availability.",
      },
      {
        h: "Tracked & insured",
        p: "Every order is fully tracked and insured until it reaches your hands. Our concierge will call to confirm your delivery slot.",
      },
    ],
  },
  returns: {
    eyebrow: "Client Services",
    title: "Returns",
    body: [
      {
        h: "7-day return window",
        p: "Returns are accepted within 7 days of delivery, provided the piece is unworn, in its original packaging, and with all tags and dust bags intact.",
      },
      {
        h: "Easy pick-up",
        p: "Our courier will collect the piece from your door at no cost. Refunds are issued within 3 business days of inspection.",
      },
      {
        h: "Final sale",
        p: "Pieces marked as final sale, swimwear and personalised items are not eligible for return.",
      },
    ],
  },
  authenticity: {
    eyebrow: "The VIP Promise",
    title: "Authenticity",
    body: [
      {
        h: "Sourced from authorised stockists",
        p: "Every piece is purchased from authorised maison stockists in Dubai. We retain original receipts, packaging, and authenticity cards.",
      },
      {
        h: "Inspected in our atelier",
        p: "Each piece passes through a four-point inspection in our Tunis atelier — stitching, hardware, leather, and packaging — before being listed.",
      },
      {
        h: "Lifetime authenticity guarantee",
        p: "If a piece is ever proven inauthentic, we offer a full refund — without conditions, without expiry.",
      },
    ],
  },
  contact: {
    eyebrow: "Get in Touch",
    title: "Contact",
    body: [
      {
        h: "Concierge",
        p: "+216 — by appointment. concierge@vipstore.tn",
      },
      {
        h: "Showroom",
        p: "Les Berges du Lac, Tunis. Visits by appointment only.",
      },
      {
        h: "Press & Partnerships",
        p: "press@vipstore.tn",
      },
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(PAGES).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = PAGES[slug];
  return { title: p ? `${p.title} — VIP Store` : "VIP Store" };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = PAGES[slug];
  if (!p) notFound();

  return (
    <section className="max-w-[900px] mx-auto px-6 lg:px-10 py-20 lg:py-28">
      <p className="eyebrow mb-5">{p.eyebrow}</p>
      <h1 className="serif-display text-[44px] lg:text-[72px] leading-[1.02] mb-12">
        {p.title}
      </h1>
      <div className="space-y-10">
        {p.body.map((b) => (
          <article key={b.h}>
            <h2 className="serif-display text-[22px] lg:text-[26px] mb-3">
              {b.h}
            </h2>
            <p className="cormorant text-[19px] lg:text-[20px] text-graphite leading-[1.7]">
              {b.p}
            </p>
          </article>
        ))}
      </div>
      <div className="mt-16">
        <Link href="/shop" className="btn-outline">
          Continue Shopping
        </Link>
      </div>
    </section>
  );
}
