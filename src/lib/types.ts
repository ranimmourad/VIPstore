export type Category =
  | "bags"
  | "shoes"
  | "dresses"
  | "swimwear"
  | "t-shirts"
  | "tops"
  | "skirts"
  | "sets"
  | "accessories"
  | "ready-to-wear";

export interface Product {
  id: string;
  slug: string;
  name: string;
  brand: string;
  price: number; // in TND
  category: Category;
  description: string;
  details: string[];
  images: string[];
  sizes: string[];
  colors?: string[];
  stock: number;
  isNew?: boolean;
  isBestSeller?: boolean;
}

export interface CategoryMeta {
  slug: Category;
  name: string;
  image: string;
  description: string;
}

export interface CartItem {
  productId: string;
  size: string;
  quantity: number;
}
