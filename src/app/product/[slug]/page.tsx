import { notFound } from "next/navigation";
import { getProductBySlug, products } from "@/lib/products";
import ProductDetailClient from "@/components/ProductDetailClient";
import ProductCard from "@/components/ProductCard";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = getProductBySlug(slug);
  return {
    title: p ? `${p.name} — ${p.brand} — VIP Store` : "Product — VIP Store",
    description: p?.description.slice(0, 160),
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <>
      <ProductDetailClient product={product} />

      {related.length > 0 && (
        <section className="max-w-[1600px] mx-auto px-6 lg:px-10 mt-12 lg:mt-24 mb-24">
          <header className="text-center mb-12">
            <p className="eyebrow mb-3">You may also love</p>
            <h2 className="serif-display text-[28px] lg:text-[36px]">
              The edit continues
            </h2>
          </header>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-5 gap-y-12 lg:gap-x-8">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </>
  );
}
