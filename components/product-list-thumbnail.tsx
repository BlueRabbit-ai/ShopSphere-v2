import Image from "next/image"
import Link from "next/link"
import { formatCurrency } from "@/lib/utils"
import type { Product } from "@/types/product"

interface ProductListThumbnailProps {
  product: Product
}

export function ProductListThumbnail({ product }: ProductListThumbnailProps) {
  return (
    <Link href={`/product/${product.id}`} className="group">
      <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          width={300}
          height={300}
          className="h-full w-full object-cover object-center group-hover:opacity-75"
        />
      </div>
      <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
      <p className="mt-1 text-lg font-medium text-gray-900">{formatCurrency(product.price, product.currency)}</p>
    </Link>
  )
}

