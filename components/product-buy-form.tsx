"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/lib/use-cart"
import type { Product } from "@/types/product"

interface ProductBuyFormProps {
  product: Product
}

export function ProductBuyForm({ product }: ProductBuyFormProps) {
  const { addItem } = useCart()
  const [isAdding, setIsAdding] = useState(false)

  const handleAddToCart = () => {
    setIsAdding(true)
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      currency: product.currency,
      image: product.image || "/placeholder.svg",
      quantity: 1,
    })
    setTimeout(() => setIsAdding(false), 1000)
  }

  return (
    <Button onClick={handleAddToCart} disabled={isAdding}>
      {isAdding ? "Adding to Cart..." : "Add to Cart"}
    </Button>
  )
}

