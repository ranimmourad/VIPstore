import { products, formatPrice } from "@/lib/products";

export default function AdminProducts() {
  return (
    <section className="max-w-[1600px] mx-auto px-6 lg:px-10 py-10 lg:py-14">
      <header className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
        <div>
          <p className="eyebrow mb-2">Catalogue</p>
          <h1 className="serif-display text-[32px] lg:text-[42px]">Products</h1>
        </div>
        <div className="flex gap-3">
          <button className="btn-outline">Export</button>
          <button className="btn-primary">+ Add Product</button>
        </div>
      </header>

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-3 md:items-center mb-8">
        <input
          placeholder="Search by name, brand, SKU..."
          className="flex-1 bg-warm border hairline px-4 py-3 text-[13px] outline-none focus:border-ink"
        />
        <select className="bg-warm border hairline px-4 py-3 text-[13px]">
          <option>All Categories</option>
          <option>Bags</option>
          <option>Shoes</option>
          <option>Ready-to-Wear</option>
        </select>
        <select className="bg-warm border hairline px-4 py-3 text-[13px]">
          <option>All Brands</option>
          <option>Dior</option>
          <option>Chanel</option>
          <option>Fendi</option>
        </select>
      </div>

      <div className="bg-warm border hairline overflow-x-auto">
        <table className="w-full text-[13px]">
          <thead>
            <tr className="bg-ivory text-[11px] tracking-[0.2em] uppercase text-stone">
              <th className="text-left p-4 w-12"></th>
              <th className="text-left p-4">Product</th>
              <th className="text-left p-4">Brand</th>
              <th className="text-left p-4">Category</th>
              <th className="text-right p-4">Price</th>
              <th className="text-center p-4">Stock</th>
              <th className="text-center p-4">Status</th>
              <th className="p-4"></th>
            </tr>
          </thead>
          <tbody>
            {products.map((p) => (
              <tr key={p.id} className="border-t hairline hover:bg-ivory/60">
                <td className="p-4">
                  <div className="w-10 h-14 bg-ivory relative overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={p.images[0]}
                      alt={p.name}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                </td>
                <td className="p-4">
                  <p className="serif-display text-[15px]">{p.name}</p>
                  <p className="text-[11px] text-stone font-mono mt-0.5">{p.id}</p>
                </td>
                <td className="p-4">{p.brand}</td>
                <td className="p-4 capitalize">{p.category.replace("-", " ")}</td>
                <td className="p-4 text-right">{formatPrice(p.price)}</td>
                <td className="p-4 text-center">
                  <span
                    className={
                      p.stock === 0
                        ? "text-red-700"
                        : p.stock <= 3
                        ? "text-accent"
                        : ""
                    }
                  >
                    {p.stock}
                  </span>
                </td>
                <td className="p-4 text-center">
                  <span className="text-[10.5px] tracking-[0.22em] uppercase bg-emerald-100 text-emerald-900 px-2.5 py-1">
                    Active
                  </span>
                </td>
                <td className="p-4 text-right">
                  <button className="text-[11px] tracking-[0.24em] uppercase link-underline">
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="text-[11px] tracking-[0.22em] uppercase text-stone mt-6 text-center">
        Showing {products.length} of {products.length} pieces
      </p>
    </section>
  );
}
