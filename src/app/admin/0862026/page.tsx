import { products, formatPrice } from "@/lib/products";
import Link from "next/link";

const stats = [
  { label: "Revenue (30d)", value: "184,250 TND", trend: "+12.4%" },
  { label: "Orders (30d)", value: "78", trend: "+8.1%" },
  { label: "New Clients", value: "23", trend: "+18.6%" },
  { label: "Avg. Order", value: "2,361 TND", trend: "+3.2%" },
];

const recentOrders = [
  { id: "VIP-748210", client: "Yasmine B.", city: "Tunis", total: 3450, status: "Confirmed", date: "Today, 10:42" },
  { id: "VIP-748196", client: "Sarra K.", city: "Sousse", total: 1290, status: "Shipped", date: "Today, 09:15" },
  { id: "VIP-748182", client: "Rim T.", city: "Sfax", total: 2580, status: "Delivered", date: "Yesterday" },
  { id: "VIP-748173", client: "Lina M.", city: "Nabeul", total: 1850, status: "Confirmed", date: "Yesterday" },
  { id: "VIP-748159", client: "Hana A.", city: "Ariana", total: 980, status: "Pending", date: "2 days ago" },
];

export default function AdminDashboard() {
  return (
    <section className="max-w-[1600px] mx-auto px-6 lg:px-10 py-10 lg:py-14">
      <header className="mb-10">
        <p className="eyebrow mb-2">Overview</p>
        <h1 className="serif-display text-[32px] lg:text-[42px]">Dashboard</h1>
      </header>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5 mb-12">
        {stats.map((s) => (
          <div key={s.label} className="bg-ivory p-6 lg:p-7">
            <p className="eyebrow text-stone mb-2">{s.label}</p>
            <p className="serif-display text-[26px] lg:text-[32px]">{s.value}</p>
            <p className="text-[12px] text-accent mt-2">{s.trend} vs last period</p>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-[1.4fr_1fr] gap-8">
        <div className="bg-warm border hairline">
          <div className="flex items-center justify-between p-6 border-b hairline">
            <h2 className="serif-display text-[20px]">Recent Orders</h2>
            <Link
              href="/admin/0862026/orders"
              className="text-[11px] tracking-[0.24em] uppercase link-underline"
            >
              View All
            </Link>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-[13px]">
              <thead>
                <tr className="bg-ivory text-[11px] tracking-[0.2em] uppercase text-stone">
                  <th className="text-left p-4">Order</th>
                  <th className="text-left p-4">Client</th>
                  <th className="text-left p-4">City</th>
                  <th className="text-right p-4">Total</th>
                  <th className="text-left p-4">Status</th>
                </tr>
              </thead>
              <tbody>
                {recentOrders.map((o) => (
                  <tr key={o.id} className="border-t hairline">
                    <td className="p-4 font-mono text-[12px]">{o.id}</td>
                    <td className="p-4">
                      {o.client}
                      <div className="text-[11px] text-stone">{o.date}</div>
                    </td>
                    <td className="p-4">{o.city}</td>
                    <td className="p-4 text-right">{formatPrice(o.total)}</td>
                    <td className="p-4">
                      <StatusBadge status={o.status} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-warm border hairline">
          <div className="flex items-center justify-between p-6 border-b hairline">
            <h2 className="serif-display text-[20px]">Top Pieces</h2>
            <Link
              href="/admin/0862026/products"
              className="text-[11px] tracking-[0.24em] uppercase link-underline"
            >
              Manage
            </Link>
          </div>
          <ul>
            {products.slice(0, 5).map((p, i) => (
              <li
                key={p.id}
                className="flex items-center gap-4 p-4 border-t hairline"
              >
                <span className="serif-display text-[20px] text-stone w-6">
                  0{i + 1}
                </span>
                <div className="w-12 h-16 bg-ivory flex-shrink-0 relative overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={p.images[0]}
                    alt={p.name}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="eyebrow text-stone">{p.brand}</p>
                  <p className="serif-display text-[14px] truncate">{p.name}</p>
                </div>
                <p className="text-[13px] whitespace-nowrap">
                  {formatPrice(p.price)}
                </p>
              </li>
            ))}
          </ul>
        </div>
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
