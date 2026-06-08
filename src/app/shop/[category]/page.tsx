import { notFound } from "next/navigation";
import ShopGrid from "@/components/ShopGrid";
import { categories, products } from "@/lib/products";
import type { Category } from "@/lib/types";

export function generateStaticParams() {
  return categories.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const c = categories.find((c) => c.slug === category);
  return { title: `${c?.name ?? "Shop"} — VIP Store` };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const meta = categories.find((c) => c.slug === category);
  if (!meta) notFound();

  const list = products.filter((p) => p.category === (category as Category));

  return (
    <section className="max-w-[1600px] mx-auto px-6 lg:px-10 pt-12 lg:pt-16 pb-24">
      <nav className="text-[11px] tracking-[0.24em] uppercase text-stone mb-8">
        <a href="/" className="link-underline">Home</a>{" "}
        <span className="mx-2">/</span>
        <a href="/shop" className="link-underline">Shop</a>{" "}
        <span className="mx-2">/</span>
        <span className="text-ink">{meta.name}</span>
      </nav>

      <header className="text-center mb-12 lg:mb-16">
        <p className="eyebrow mb-4">Category</p>
        <h1 className="serif-display text-[40px] lg:text-[72px] leading-[1.02]">
          {meta.name}
        </h1>
        <p className="cormorant text-[20px] lg:text-[22px] text-stone mt-5 max-w-xl mx-auto leading-relaxed">
          {meta.description}
        </p>
      </header>

      <ShopGrid products={list} />
    </section>
  );
}
