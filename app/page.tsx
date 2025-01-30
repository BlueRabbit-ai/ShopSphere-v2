import { getProducts } from "@/lib/products"
import { ProductList } from "@/components/product-list"
import { CategoryCard } from "@/components/category-card"
import { FAQ } from "@/components/faq"
import { InfoColumns } from "@/components/info-columns"

const categories = [
  { name: "Women", image: "/images/category-women.jpg", href: "/category/women" },
  { name: "Men", image: "/images/category-men.jpg", href: "/category/men" },
  { name: "Kids", image: "/images/category-kids.jpg", href: "/category/kids" },
  { name: "Accessories", image: "/images/category-accessories.jpg", href: "/category/accessories" },
]

export default async function Page() {
  const products = await getProducts({ limit: 8 })

  return (
    <div className="mx-auto flex max-w-screen-xl flex-col gap-12 px-4 py-8">
      <section>
        <h2 className="mb-6 text-2xl font-bold">Shop by Category</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <CategoryCard key={category.name} {...category} />
          ))}
        </div>
      </section>
      <section>
        <h2 className="mb-6 text-2xl font-bold">Featured Products</h2>
        <ProductList products={products} />
      </section>
      <InfoColumns />
      <FAQ />
    </div>
  )
}

