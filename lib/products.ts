import type { Product } from "@/types/product"

const dummyProducts: Product[] = [
  {
    id: "1",
    name: "Classic T-Shirt",
    description: "A comfortable and stylish t-shirt for everyday wear.",
    price: 19.99,
    currency: "USD",
    image: "/images/classic-tshirt.jpg",
    category: "Men",
    details: ["100% cotton", "Available in multiple colors", "Sizes: S, M, L, XL", "Machine washable"],
    features: ["Breathable fabric", "Ribbed crew neck", "Short sleeves", "Straight hem"],
  },
  {
    id: "2",
    name: "Floral Dress",
    description: "A beautiful floral dress perfect for summer days.",
    price: 49.99,
    currency: "USD",
    image: "/images/floral-dress.jpg",
    category: "Women",
    details: ["95% polyester, 5% elastane", "Floral print", "Sizes: XS, S, M, L", "Hand wash cold"],
    features: ["V-neck", "Short puff sleeves", "Fitted waist", "Flowy skirt"],
  },
  {
    id: "3",
    name: "Kids' Sneakers",
    description: "Comfortable and durable sneakers for active kids.",
    price: 34.99,
    currency: "USD",
    image: "/images/kids-sneakers.jpg",
    category: "Kids",
    details: [
      "Synthetic leather and mesh upper",
      "Rubber outsole",
      "Available in multiple colors",
      "Sizes: 1-6 (Kids)",
    ],
    features: [
      "Velcro straps for easy on/off",
      "Padded collar and tongue",
      "Breathable mesh lining",
      "Lightweight and flexible",
    ],
  },
  {
    id: "4",
    name: "Leather Wallet",
    description: "A sleek and practical leather wallet.",
    price: 29.99,
    currency: "USD",
    image: "/images/leather-wallet.jpg",
    category: "Accessories",
    details: [
      "100% genuine leather",
      "RFID blocking technology",
      'Dimensions: 4.5" x 3.5"',
      "Available in black and brown",
    ],
    features: ["6 card slots", "2 hidden pockets", "1 bill compartment", "ID window"],
  },
  {
    id: "5",
    name: "Women's Blouse",
    description: "An elegant blouse for work or casual wear.",
    price: 39.99,
    currency: "USD",
    image: "/images/womens-blouse.jpg",
    category: "Women",
    details: ["100% silk", "Button-up front", "Sizes: XS, S, M, L, XL", "Dry clean only"],
    features: ["Pointed collar", "Long sleeves with button cuffs", "Curved hem", "Relaxed fit"],
  },
  {
    id: "6",
    name: "Men's Jeans",
    description: "Classic denim jeans for a timeless look.",
    price: 59.99,
    currency: "USD",
    image: "/images/mens-jeans.jpg",
    category: "Men",
    details: ["98% cotton, 2% elastane", "5-pocket styling", "Sizes: 28-40 waist, 30-34 length", "Machine washable"],
    features: ["Straight leg", "Mid-rise waist", "Button and zip fly", "Slightly stretchy for comfort"],
  },
  {
    id: "7",
    name: "Kids' Pajamas",
    description: "Soft and cozy pajamas for a good night's sleep.",
    price: 24.99,
    currency: "USD",
    image: "/images/kids-pajamas.jpg",
    category: "Kids",
    details: ["100% organic cotton", "Available in various prints", "Sizes: 2T-10", "Machine washable"],
    features: ["Long-sleeved top", "Elastic waist bottoms", "Ribbed cuffs", "Tagless for comfort"],
  },
  {
    id: "8",
    name: "Sunglasses",
    description: "Stylish sunglasses to protect your eyes in style.",
    price: 79.99,
    currency: "USD",
    image: "/images/sunglasses.jpg",
    category: "Accessories",
    details: ["Acetate frame", "Polarized lenses", "100% UV protection", "Includes protective case"],
    features: ["Oversized square frame", "Adjustable nose pads", "Spring hinges", "Available in multiple colors"],
  },
]

export async function getProducts({
  limit = 10,
  category = "",
}: { limit?: number; category?: string } = {}): Promise<Product[]> {
  let filteredProducts = dummyProducts

  if (category) {
    filteredProducts = dummyProducts.filter((product) => product.category.toLowerCase() === category.toLowerCase())
  }

  return filteredProducts.slice(0, limit)
}

export async function getProduct(id: string): Promise<Product | undefined> {
  return dummyProducts.find((product) => product.id === id)
}

