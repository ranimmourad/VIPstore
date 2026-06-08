import type { Product, CategoryMeta } from "./types";

export const categories: CategoryMeta[] = [
  {
    slug: "bags",
    name: "Bags",
    image: "/products/lady-dior-micro-green.jpg",
    description: "Iconic carriers, hand-finished in European ateliers.",
  },
  {
    slug: "shoes",
    name: "Shoes",
    image: "/products/loropiana-loafers-blue.jpg",
    description: "From soft suede loafers to sculpted heels.",
  },
  {
    slug: "dresses",
    name: "Dresses",
    image: "/products/zimmermann-floral-set.jpg",
    description: "Effortless silhouettes for every season.",
  },
  {
    slug: "swimwear",
    name: "Swimwear",
    image: "/products/chanel-swimsuit.jpg",
    description: "Resort essentials from the maisons of Europe.",
  },
  {
    slug: "ready-to-wear",
    name: "Ready-to-Wear",
    image: "/products/dior-polo-trio.jpg",
    description: "Everyday luxury, refined in every detail.",
  },
  {
    slug: "accessories",
    name: "Accessories",
    image: "/products/dior-straw-hat.jpg",
    description: "Finishing touches with quiet authority.",
  },
];

export const products: Product[] = [
  // ============ BAGS ============
  {
    id: "p-001",
    slug: "lady-dior-micro-sage",
    name: "Lady Dior Micro — Sage Cannage",
    brand: "Dior",
    price: 3450,
    category: "bags",
    description:
      "The Micro Lady Dior in sage cannage lambskin is a sculptural emblem of Parisian craft. Hand-pleated cannage, light gold-finish charms and a removable shoulder strap make it equally precious in hand or worn close.",
    details: [
      "Lambskin with hand-stitched cannage",
      "Light gold-finish D.I.O.R. charms",
      "Removable, adjustable shoulder strap",
      "Lined interior with inner pocket",
      "Dimensions: 12 × 10 × 5 cm",
    ],
    images: ["/products/lady-dior-micro-green.jpg"],
    sizes: ["One Size"],
    stock: 3,
    isNew: true,
    isBestSeller: true,
  },

  // ============ SHOES ============
  {
    id: "p-101",
    slug: "loro-piana-summer-charms-walk-azure",
    name: "Summer Charms Walk — Azure Suede",
    brand: "Loro Piana",
    price: 1290,
    category: "shoes",
    description:
      "Loro Piana's Summer Charms Walk in soft azure suede — an unstructured loafer with hand-stitched apron, leather-trimmed strap and signature lock-and-key charms. Cushioned rubber sole for hours of quiet comfort.",
    details: [
      "Italian suede upper",
      "Hand-stitched apron toe",
      "Brass lock & key charms",
      "Lightweight rubber sole",
      "Made in Italy",
    ],
    images: ["/products/loropiana-loafers-blue.jpg"],
    sizes: ["36", "37", "38", "39", "40", "41"],
    stock: 6,
    isNew: true,
    isBestSeller: true,
  },
  {
    id: "p-102",
    slug: "gucci-marmont-platform-espadrille",
    name: "Marmont Platform Espadrille",
    brand: "Gucci",
    price: 1250,
    category: "shoes",
    description:
      "Quilted white leather, antique-gold Double-G hardware and a hand-woven jute platform — Gucci's Marmont espadrille is a Riviera-ready icon. Adjustable grosgrain ankle ribbon for a tailored fit.",
    details: [
      "Chevron-quilted lambskin",
      "Antique gold Double-G hardware",
      "Jute platform, 12 cm",
      "Grosgrain lace-up ribbon",
      "Made in Italy",
    ],
    images: ["/products/gucci-marmont-espadrilles.jpg"],
    sizes: ["36", "37", "38", "39", "40"],
    stock: 4,
    isBestSeller: true,
  },
  {
    id: "p-103",
    slug: "ysl-cassandra-flat-slide",
    name: "Cassandra Flat Mule — Trio",
    brand: "Saint Laurent",
    price: 1220,
    category: "shoes",
    description:
      "Saint Laurent's Cassandra mule in pleated nappa with the gold-tone YSL monogram. Available in black nappa, cognac suede and burgundy nappa — house essentials for the season.",
    details: [
      "Pleated nappa leather / suede",
      "Gold-finish YSL monogram",
      "Leather sole, 5 mm",
      "Made in Italy",
    ],
    images: ["/products/ysl-cassandra-sandals.jpg"],
    sizes: ["36", "37", "38", "39", "40"],
    colors: ["Black", "Cognac", "Burgundy"],
    stock: 8,
    isBestSeller: true,
  },
  {
    id: "p-104",
    slug: "chanel-gold-cc-mule",
    name: "Gold CC Padded Mule",
    brand: "Chanel",
    price: 1300,
    category: "shoes",
    description:
      "Padded metallic lambskin with the interlocking CC monogram across the vamp. A modern slide finished by hand in the maison's Italian ateliers.",
    details: [
      "Padded metallic lambskin",
      "Tonal CC monogram",
      "Leather insole",
      "Made in Italy",
    ],
    images: ["/products/chanel-gold-slides.jpg"],
    sizes: ["36", "37", "38", "39", "40"],
    stock: 2,
    isNew: true,
  },
  {
    id: "p-105",
    slug: "dolce-gabbana-dg-thong-sandal",
    name: "DG Logo Thong Sandal",
    brand: "Dolce & Gabbana",
    price: 1200,
    category: "shoes",
    description:
      "A glossy thong sandal with the polished gold-tone interlocking DG. Black calfskin straps and a contoured leather footbed.",
    details: [
      "Polished calfskin",
      "Gold-tone DG hardware",
      "Sculpted leather footbed",
      "Made in Italy",
    ],
    images: ["/products/dg-thong-sandals.jpg"],
    sizes: ["36", "37", "38", "39", "40"],
    stock: 5,
  },
  {
    id: "p-106",
    slug: "fendi-colibri-slingback-yellow",
    name: "Colibrì Slingback — Yellow Eyelet",
    brand: "Fendi",
    price: 1300,
    category: "shoes",
    description:
      "Fendi's Colibrì slingback in nude leather with hand-embroidered yellow eyelet florals and signature FF webbing strap. An architectural mid-heel built for long evenings.",
    details: [
      "Calfskin with mesh inserts",
      "Hand-embroidered eyelet motifs",
      "FF logo elastic webbing",
      "Architectural 8.5 cm heel",
      "Made in Italy",
    ],
    images: [
      "/products/fendi-colibri-yellow-4.jpg",
      "/products/fendi-colibri-yellow-1.jpg",
      "/products/fendi-colibri-yellow-2.jpg",
      "/products/fendi-colibri-yellow-3.jpg",
    ],
    sizes: ["36", "37", "38", "39", "40"],
    stock: 4,
    isNew: true,
    isBestSeller: true,
  },
  {
    id: "p-107",
    slug: "fendi-colibri-slingback-pink",
    name: "Colibrì Slingback — Pink Eyelet",
    brand: "Fendi",
    price: 1300,
    category: "shoes",
    description:
      "The Colibrì silhouette reimagined in cognac calfskin with vivid rose eyelet embroidery. Romantic, architectural, unmistakably Fendi.",
    details: [
      "Calfskin with mesh inserts",
      "Hand-embroidered rose eyelet motifs",
      "FF logo elastic webbing",
      "Architectural 8.5 cm heel",
      "Made in Italy",
    ],
    images: [
      "/products/fendi-colibri-pink-1.jpg",
      "/products/fendi-colibri-pink-2.jpg",
      "/products/fendi-colibri-pink-3.jpg",
      "/products/fendi-colibri-pink-4.jpg",
    ],
    sizes: ["36", "37", "38", "39", "40"],
    stock: 3,
    isNew: true,
  },
  {
    id: "p-108",
    slug: "gucci-denim-gg-heeled-mule",
    name: "GG Denim Horsebit Mule",
    brand: "Gucci",
    price: 1280,
    category: "shoes",
    description:
      "Indigo GG-denim mule with the gold-tone Horsebit — a heritage Gucci motif since 1953 — and a sculpted stiletto heel.",
    details: [
      "GG-jacquard denim",
      "Gold-tone Horsebit",
      "9.5 cm stiletto heel",
      "Leather sole",
      "Made in Italy",
    ],
    images: ["/products/gucci-denim-mules.jpg"],
    sizes: ["36", "37", "38", "39", "40"],
    stock: 3,
  },
  {
    id: "p-109",
    slug: "chanel-cc-leather-slide-five-colors",
    name: "CC Leather Slide — Five Colours",
    brand: "Chanel",
    price: 1290,
    category: "shoes",
    description:
      "A house essential. The cut-out CC slide in soft leather, available in nude, silver, black, gold and ivory — the complete maison palette.",
    details: [
      "Soft nappa leather",
      "Cut-out CC monogram",
      "Padded leather insole",
      "Made in Italy",
    ],
    images: ["/products/chanel-cc-slides-collection.jpg"],
    sizes: ["36", "37", "38", "39", "40"],
    colors: ["Nude", "Silver", "Black", "Gold", "Ivory"],
    stock: 12,
    isBestSeller: true,
  },

  // ============ DRESSES / SETS ============
  {
    id: "p-201",
    slug: "zimmermann-natura-tie-shoulder-set",
    name: "Natura Floral Tie-Shoulder Set",
    brand: "Zimmermann",
    price: 1850,
    category: "sets",
    description:
      "A two-piece in silk-cotton voile printed with the Natura morning-glory bouquet. Tiered camisole with lace insertion and matching scalloped shorts — Zimmermann at its most lyrical.",
    details: [
      "Silk-cotton voile",
      "Hand-guided floral print",
      "Lace insertion and scalloped trims",
      "Tie-shoulder camisole + matching shorts",
      "Dry clean only",
    ],
    images: ["/products/zimmermann-floral-set.jpg"],
    sizes: ["0", "1", "2", "3"],
    stock: 5,
    isNew: true,
    isBestSeller: true,
  },

  // ============ T-SHIRTS / TOPS ============
  {
    id: "p-301",
    slug: "louis-vuitton-lv-rib-tank-trio",
    name: "LV Signature Rib Tank",
    brand: "Louis Vuitton",
    price: 980,
    category: "t-shirts",
    description:
      "A scoop-neck ribbed tank with a tonal embroidered LV initials. Cut from a finely ribbed cotton-modal blend — available in white, black and powder blue.",
    details: [
      "Cotton–modal rib jersey",
      "Tonal embroidered LV initials",
      "Scoop neckline",
      "Made in Italy",
    ],
    images: ["/products/lv-ribbed-tanks.jpg"],
    sizes: ["XS", "S", "M", "L"],
    colors: ["White", "Black", "Powder Blue"],
    stock: 10,
    isBestSeller: true,
  },
  {
    id: "p-302",
    slug: "dior-christian-polo-trio",
    name: "Christian Dior Embroidered Polo",
    brand: "Dior",
    price: 1180,
    category: "ready-to-wear",
    description:
      "A fine-piqué cotton polo with the tonal Christian Dior medallion at the chest. A wardrobe staple available in mint, ivory and peach.",
    details: [
      "Fine cotton piqué",
      "Tonal embroidered medallion",
      "Two-button placket",
      "Made in Italy",
    ],
    images: ["/products/dior-polo-trio.jpg"],
    sizes: ["XS", "S", "M", "L"],
    colors: ["Mint", "Ivory", "Peach"],
    stock: 9,
    isNew: true,
  },

  // ============ SWIMWEAR ============
  {
    id: "p-401",
    slug: "chanel-cc-square-neck-swimsuit",
    name: "CC Square-Neck Swimsuit",
    brand: "Chanel",
    price: 1450,
    category: "swimwear",
    description:
      "A sculpted one-piece in matte black technical jersey with contrast ivory straps and the embroidered CC at the hip. A modern resort essential.",
    details: [
      "Italian technical jersey",
      "Contrast ivory binding",
      "Embroidered CC monogram",
      "Lined throughout",
    ],
    images: ["/products/chanel-swimsuit.jpg"],
    sizes: ["XS", "S", "M", "L"],
    stock: 4,
    isNew: true,
  },

  // ============ ACCESSORIES ============
  {
    id: "p-501",
    slug: "dior-christian-woven-boater",
    name: "Christian Dior Woven Boater",
    brand: "Dior",
    price: 980,
    category: "accessories",
    description:
      "A hand-woven raffia boater hat banded with the iconic Christian Dior jacquard ribbon. The perfect finishing touch for resort and city alike.",
    details: [
      "Hand-woven natural raffia",
      "Jacquard Christian Dior band",
      "Inner grosgrain trim",
      "Made in Italy",
    ],
    images: ["/products/dior-straw-hat.jpg"],
    sizes: ["S/M", "M/L"],
    stock: 6,
    isBestSeller: true,
  },
];

// helpers
export const getProductBySlug = (slug: string) =>
  products.find((p) => p.slug === slug);

export const getProductById = (id: string) =>
  products.find((p) => p.id === id);

export const getProductsByCategory = (cat: string) =>
  products.filter((p) => p.category === cat);

export const getNewArrivals = () => products.filter((p) => p.isNew);
export const getBestSellers = () => products.filter((p) => p.isBestSeller);

export const formatPrice = (price: number) =>
  `${price.toLocaleString("fr-FR")} TND`;
