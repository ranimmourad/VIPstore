import Link from "next/link";

export default function NotFound() {
  return (
    <section className="max-w-[800px] mx-auto px-6 py-32 text-center">
      <p className="eyebrow mb-5">404</p>
      <h1 className="serif-display text-[44px] lg:text-[72px] leading-[1.02]">
        This page could not be found.
      </h1>
      <p className="cormorant text-[20px] text-stone mt-5 max-w-md mx-auto">
        It may have been moved, renamed, or perhaps it was never here.
      </p>
      <div className="mt-10 flex flex-wrap gap-3 justify-center">
        <Link href="/" className="btn-primary">Return Home</Link>
        <Link href="/shop" className="btn-outline">Shop All</Link>
      </div>
    </section>
  );
}
