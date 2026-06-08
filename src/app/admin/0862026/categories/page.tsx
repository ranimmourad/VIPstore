import { categories, products } from "@/lib/products";

export default function AdminCategories() {
  return (
    <section className="max-w-[1600px] mx-auto px-6 lg:px-10 py-10 lg:py-14">
      <header className="flex items-end justify-between gap-4 mb-10">
        <div>
          <p className="eyebrow mb-2">Taxonomy</p>
          <h1 className="serif-display text-[32px] lg:text-[42px]">Categories</h1>
        </div>
        <button className="btn-primary">+ Add Category</button>
      </header>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {categories.map((c) => {
          const count = products.filter((p) => p.category === c.slug).length;
          return (
            <article
              key={c.slug}
              className="bg-warm border hairline overflow-hidden group"
            >
              <div className="relative aspect-[4/3] bg-ivory overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={c.image}
                  alt={c.name}
                  className="absolute inset-0 w-full h-full object-cover luxe-img"
                />
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="eyebrow text-stone">{count} pieces</p>
                    <h2 className="serif-display text-[22px] mt-1">{c.name}</h2>
                  </div>
                  <span className="text-[10.5px] tracking-[0.22em] uppercase bg-emerald-100 text-emerald-900 px-2.5 py-1">
                    Visible
                  </span>
                </div>
                <p className="cormorant text-[16px] text-stone mt-3 leading-relaxed">
                  {c.description}
                </p>
                <div className="flex gap-4 mt-5 pt-4 border-t hairline">
                  <button className="text-[11px] tracking-[0.24em] uppercase link-underline">
                    Edit
                  </button>
                  <button className="text-[11px] tracking-[0.24em] uppercase link-underline text-stone">
                    Hide
                  </button>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
