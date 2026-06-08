import ShopGrid from "@/components/ShopGrid";
import { products } from "@/lib/products";

export const metadata = {
  title: "Shop All — VIP Store",
};

export default async function ShopPage({
  searchParams,
}: {
  searchParams: Promise<{ filter?: string }>;
}) {
  const sp = await searchParams;
  const filter =
    sp.filter === "new" ? "new" : sp.filter === "best" ? "best" : "all";

  return (
    <section className="max-w-[1600px] mx-auto px-6 lg:px-10 pt-12 lg:pt-16 pb-24">
      <header className="text-center mb-12 lg:mb-16">
        <p className="eyebrow mb-4">The Collection</p>
        <h1 className="serif-display text-[40px] lg:text-[64px] leading-[1.02]">
          {filter === "new"
            ? "New Arrivals"
            : filter === "best"
            ? "Best Sellers"
            : "Shop All"}
        </h1>
        <p className="cormorant text-[19px] text-stone mt-5 max-w-xl mx-auto leading-relaxed">
          {filter === "new"
            ? "The latest pieces from our Dubai atelier — added this season."
            : filter === "best"
            ? "Our clients' most coveted pieces."
            : "An edit of the season's most considered pieces."}
        </p>
      </header>

      <ShopGrid products={products} initialFilter={filter as any} />
    </section>
  );
}
