import { getProducts } from "@/lib/products"
import { ProductList } from "@/components/product-list"

export default async function CategoryPage({ params }: { params: { slug: string } }) {
  const products = await getProducts({ category: params.slug })

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-6 text-3xl font-bold capitalize">{params.slug}</h1>
      <ProductList products={products} />
    </div>
  )
}

