import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "VIP Store — Admin",
  robots: { index: false, follow: false },
};

const NAV = [
  { href: "/admin/0862026", label: "Dashboard", exact: true },
  { href: "/admin/0862026/products", label: "Products" },
  { href: "/admin/0862026/orders", label: "Orders" },
  { href: "/admin/0862026/categories", label: "Categories" },
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-warm text-ink">
      <header className="border-b hairline bg-warm sticky top-0 z-20">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-10 py-4 flex items-center justify-between">
          <div className="flex items-center gap-10">
            <Link href="/admin/0862026" className="serif-display text-[20px] tracking-[0.24em] uppercase">
              VIP <span className="font-light">Admin</span>
            </Link>
            <nav className="hidden md:flex items-center gap-7">
              {NAV.map((n) => (
                <Link
                  key={n.href}
                  href={n.href}
                  className="text-[11px] tracking-[0.24em] uppercase link-underline text-graphite"
                >
                  {n.label}
                </Link>
              ))}
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="text-[11px] tracking-[0.24em] uppercase text-stone link-underline"
            >
              View Site
            </Link>
            <button className="text-[11px] tracking-[0.24em] uppercase border hairline px-3 py-1.5 hover:bg-ink hover:text-warm transition">
              Sign Out
            </button>
          </div>
        </div>
        <nav className="md:hidden border-t hairline overflow-x-auto no-scrollbar">
          <div className="flex gap-6 px-6 py-3 whitespace-nowrap">
            {NAV.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                className="text-[11px] tracking-[0.22em] uppercase text-graphite"
              >
                {n.label}
              </Link>
            ))}
          </div>
        </nav>
      </header>
      <main>{children}</main>
    </div>
  );
}
