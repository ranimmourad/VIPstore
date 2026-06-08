import Link from "next/link";
import Image from "next/image";
import type { Product } from "@/lib/types";
import { formatPrice } from "@/lib/products";

export default function ProductCard({
  product,
  priority = false,
}: {
  product: Product;
  priority?: boolean;
}) {
  return (
    <Link
      href={`/product/${product.slug}`}
      className="group block"
    >
      <div className="relative aspect-[3/4] bg-ivory overflow-hidden">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover luxe-img"
          priority={priority}
        />
        {product.images[1] && (
          <Image
            src={product.images[1]}
            alt=""
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-700"
          />
        )}
        {product.isNew && (
          <span className="absolute top-3 left-3 bg-warm/90 text-ink text-[9.5px] tracking-[0.3em] uppercase px-2.5 py-1">
            New
          </span>
        )}
      </div>
      <div className="pt-4 pb-2">
        <p className="eyebrow text-stone">{product.brand}</p>
        <h3 className="serif-display text-[15px] md:text-[16px] leading-tight mt-1.5">
          {product.name}
        </h3>
        <p className="text-[13px] text-graphite mt-2">
          {formatPrice(product.price)}
        </p>
      </div>
    </Link>
  );
}
