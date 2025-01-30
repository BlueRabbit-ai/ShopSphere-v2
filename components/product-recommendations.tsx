import { ProductListThumbnail } from "@/components/product-list-thumbnail"
import { getProducts } from "@/lib/products"

interface ProductRecommendationsProps {
  category: string
  currentProductId: string
}

export async function ProductRecommendations({ category, currentProductId }: ProductRecommendationsProps) {
  const products = await getProducts({ category, limit: 4 })
  const recommendations = products.filter((product) => product.id !== currentProductId)

  return (
    <div className="mt-12">
      <h3 className="text-2xl font-bold mb-4">You Might Also Like</h3>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {recommendations.map((product) => (
          <ProductListThumbnail key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

