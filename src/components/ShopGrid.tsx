"use client";

import { useMemo, useState } from "react";
import ProductCard from "./ProductCard";
import type { Product } from "@/lib/types";

export default function ShopGrid({
  products,
  initialFilter,
}: {
  products: Product[];
  initialFilter?: "new" | "best" | "all";
}) {
  const [filter, setFilter] = useState<"all" | "new" | "best">(
    initialFilter ?? "all"
  );
  const [sort, setSort] = useState<"featured" | "price-asc" | "price-desc">(
    "featured"
  );

  const list = useMemo(() => {
    let l = products;
    if (filter === "new") l = l.filter((p) => p.isNew);
    if (filter === "best") l = l.filter((p) => p.isBestSeller);
    if (sort === "price-asc") l = [...l].sort((a, b) => a.price - b.price);
    if (sort === "price-desc") l = [...l].sort((a, b) => b.price - a.price);
    return l;
  }, [products, filter, sort]);

  return (
    <div>
      {/* Filter / sort bar */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-y hairline py-4 mb-10 lg:mb-14">
        <div className="flex items-center gap-6 lg:gap-8 overflow-x-auto no-scrollbar">
          {[
            { id: "all", label: "All" },
            { id: "new", label: "New Arrivals" },
            { id: "best", label: "Best Sellers" },
          ].map((f) => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id as any)}
              className={`text-[11px] tracking-[0.26em] uppercase whitespace-nowrap pb-0.5 border-b ${
                filter === f.id
                  ? "border-ink text-ink"
                  : "border-transparent text-stone hover:text-ink"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <label className="text-[11px] tracking-[0.26em] uppercase text-stone">
            Sort
          </label>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as any)}
            className="bg-transparent text-[12px] tracking-wide py-1 px-2 border hairline outline-none"
          >
            <option value="featured">Featured</option>
            <option value="price-asc">Price: Low → High</option>
            <option value="price-desc">Price: High → Low</option>
          </select>
        </div>
      </div>

      <p className="text-[11px] tracking-[0.24em] uppercase text-stone mb-8">
        {list.length} {list.length === 1 ? "piece" : "pieces"}
      </p>

      {list.length === 0 ? (
        <p className="cormorant text-2xl text-stone text-center py-20">
          No pieces match your selection.
        </p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-12 lg:gap-x-8 lg:gap-y-16">
          {list.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      )}
    </div>
  );
}
