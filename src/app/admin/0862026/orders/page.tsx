import { formatPrice } from "@/lib/products";

const orders = [
  { id: "VIP-748210", client: "Yasmine Belhaj", phone: "+216 22 145 879", city: "Tunis", items: 1, total: 3450, status: "Confirmed", date: "2026-06-08" },
  { id: "VIP-748196", client: "Sarra Khelifi", phone: "+216 98 442 117", city: "Sousse", items: 1, total: 1290, status: "Shipped", date: "2026-06-08" },
  { id: "VIP-748182", client: "Rim Trabelsi", phone: "+216 55 778 290", city: "Sfax", items: 2, total: 2580, status: "Delivered", date: "2026-06-07" },
  { id: "VIP-748173", client: "Lina Mansour", phone: "+216 27 304 156", city: "Nabeul", items: 1, total: 1850, status: "Confirmed", date: "2026-06-07" },
  { id: "VIP-748159", client: "Hana Ayadi", phone: "+216 50 619 042", city: "Ariana", items: 1, total: 980, status: "Pending", date: "2026-06-06" },
  { id: "VIP-748144", client: "Maryem Saidi", phone: "+216 99 218 357", city: "Monastir", items: 3, total: 4750, status: "Delivered", date: "2026-06-05" },
  { id: "VIP-748130", client: "Nour Hammami", phone: "+216 26 514 803", city: "Tunis", items: 1, total: 1300, status: "Cancelled", date: "2026-06-05" },
  { id: "VIP-748118", client: "Amira Jouini", phone: "+216 98 332 974", city: "Bizerte", items: 1, total: 1200, status: "Delivered", date: "2026-06-04" },
];

const counts = orders.reduce<Record<string, number>>((acc, o) => {
  acc[o.status] = (acc[o.status] ?? 0) + 1;
  return acc;
}, {});

export default function AdminOrders() {
  return (
    <section className="max-w-[1600px] mx-auto px-6 lg:px-10 py-10 lg:py-14">
      <header className="mb-10">
        <p className="eyebrow mb-2">Operations</p>
        <h1 className="serif-display text-[32px] lg:text-[42px]">Orders</h1>
      </header>

      {/* Status counters */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-10">
        {["All", "Pending", "Confirmed", "Shipped", "Delivered"].map((s) => (
          <div
            key={s}
            className={`p-5 border hairline ${s === "All" ? "bg-ink text-warm" : "bg-warm"}`}
          >
            <p className={`eyebrow ${s === "All" ? "text-warm/70" : "text-stone"}`}>{s}</p>
            <p className="serif-display text-[26px] mt-1">
              {s === "All" ? orders.length : counts[s] ?? 0}
            </p>
          </div>
        ))}
      </div>

      <div className="flex flex-col md:flex-row gap-3 md:items-center mb-6">
        <input
          placeholder="Search by order # or client..."
          className="flex-1 bg-warm border hairline px-4 py-3 text-[13px] outline-none focus:border-ink"
        />
        <select className="bg-warm border hairline px-4 py-3 text-[13px]">
          <option>All Statuses</option>
          <option>Pending</option>
          <option>Confirmed</option>
          <option>Shipped</option>
          <option>Delivered</option>
          <option>Cancelled</option>
        </select>
        <input
          type="date"
          className="bg-warm border hairline px-4 py-3 text-[13px]"
        />
      </div>

      <div className="bg-warm border hairline overflow-x-auto">
        <table className="w-full text-[13px]">
          <thead>
            <tr className="bg-ivory text-[11px] tracking-[0.2em] uppercase text-stone">
              <th className="text-left p-4">Order</th>
              <th className="text-left p-4">Client</th>
              <th className="text-left p-4">Phone</th>
              <th className="text-left p-4">City</th>
              <th className="text-center p-4">Items</th>
              <th className="text-right p-4">Total</th>
              <th className="text-left p-4">Status</th>
              <th className="text-left p-4">Date</th>
              <th className="p-4"></th>
            </tr>
          </thead>
          <tbody>
            {orders.map((o) => (
              <tr key={o.id} className="border-t hairline hover:bg-ivory/60">
                <td className="p-4 font-mono text-[12px]">{o.id}</td>
                <td className="p-4 serif-display text-[15px]">{o.client}</td>
                <td className="p-4 text-stone">{o.phone}</td>
                <td className="p-4">{o.city}</td>
                <td className="p-4 text-center">{o.items}</td>
                <td className="p-4 text-right">{formatPrice(o.total)}</td>
                <td className="p-4">
                  <StatusBadge status={o.status} />
                </td>
                <td className="p-4 text-stone">{o.date}</td>
                <td className="p-4 text-right">
                  <button className="text-[11px] tracking-[0.24em] uppercase link-underline">
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function StatusBadge({ status }: { status: string }) {
  const color: Record<string, string> = {
    Pending: "bg-amber-100 text-amber-900",
    Confirmed: "bg-blue-100 text-blue-900",
    Shipped: "bg-indigo-100 text-indigo-900",
    Delivered: "bg-emerald-100 text-emerald-900",
    Cancelled: "bg-rose-100 text-rose-900",
  };
  return (
    <span
      className={`text-[10.5px] tracking-[0.22em] uppercase px-2.5 py-1 ${
        color[status] ?? "bg-gray-100 text-gray-900"
      }`}
    >
      {status}
    </span>
  );
}
