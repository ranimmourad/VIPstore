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
  const [brand, setBrand] = useState<string>("all");
  const [sort, setSort] = useState<"featured" | "price-asc" | "price-desc">(
    "featured"
  );

  // Extract unique brands from the products passed in
  const brands = useMemo(() => {
    const set = new Set(products.map((p) => p.brand));
    return [...set].sort();
  }, [products]);

  const list = useMemo(() => {
    let l = products;
    if (filter === "new") l = l.filter((p) => p.isNew);
    if (filter === "best") l = l.filter((p) => p.isBestSeller);
    if (brand !== "all") l = l.filter((p) => p.brand === brand);
    if (sort === "price-asc") l = [...l].sort((a, b) => a.price - b.price);
    if (sort === "price-desc") l = [...l].sort((a, b) => b.price - a.price);
    return l;
  }, [products, filter, brand, sort]);

  // Reset brand when it's no longer available after changing filter
  const handleFilterChange = (f: "all" | "new" | "best") => {
    setFilter(f);
    const filtered = f === "all"
      ? products
      : f === "new"
      ? products.filter((p) => p.isNew)
      : products.filter((p) => p.isBestSeller);
    const available = new Set(filtered.map((p) => p.brand));
    if (brand !== "all" && !available.has(brand)) {
      setBrand("all");
    }
  };

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
              onClick={() => handleFilterChange(f.id as any)}
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

        <div className="flex items-center gap-4">
          {/* Brand filter */}
          {brands.length > 1 && (
            <div className="flex items-center gap-2">
              <label className="text-[11px] tracking-[0.26em] uppercase text-stone">
                Brand
              </label>
              <select
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
                className="bg-transparent text-[12px] tracking-wide py-1 px-2 border hairline outline-none"
              >
                <option value="all">All Brands</option>
                {brands.map((b) => (
                  <option key={b} value={b}>
                    {b}
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* Sort */}
          <div className="flex items-center gap-2">
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
      </div>

      <p className="text-[11px] tracking-[0.24em] uppercase text-stone mb-8">
        {list.length} {list.length === 1 ? "piece" : "pieces"}
        {brand !== "all" && (
          <span>
            {" "}in <span className="text-ink">{brand}</span>
          </span>
        )}
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