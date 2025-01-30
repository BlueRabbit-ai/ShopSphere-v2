import { getProduct } from "@/lib/products"
import { ProductBuyForm } from "@/components/product-buy-form"
import { ProductReviews } from "@/components/product-reviews"
import { ProductRecommendations } from "@/components/product-recommendations"
import { SocialShare } from "@/components/social-share"
import Image from "next/image"
import { formatCurrency } from "@/lib/utils"
import { notFound } from "next/navigation"

export default async function ProductPage({ params }: { params: { id: string } }) {
  const product = await getProduct(params.id)

  if (!product) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            width={500}
            height={500}
            className="w-full h-auto rounded-lg"
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-xl mb-4">{formatCurrency(product.price, product.currency)}</p>
          <p className="mb-6">{product.description}</p>
          <ProductBuyForm product={product} />
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-2">Product Details</h3>
            <ul className="list-disc list-inside mb-4">
              {product.details.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </ul>
          </div>
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-2">Features</h3>
            <ul className="list-disc list-inside mb-4">
              {product.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-2">Share this product</h3>
            <SocialShare url={`https://yourdomain.com/product/${product.id}`} title={product.name} />
          </div>
        </div>
      </div>
      <ProductReviews productId={product.id} />
      <ProductRecommendations category={product.category} currentProductId={product.id} />
    </div>
  )
}

