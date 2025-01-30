import { useState, useEffect } from "react"
import { formatCurrency } from "@/lib/utils"

export interface CartItem {
  id: string
  name: string
  price: number
  currency: string
  quantity: number
  image: string
}

export function useCart() {
  const [items, setItems] = useState<CartItem[]>([])

  useEffect(() => {
    const storedItems = localStorage.getItem("cart")
    if (storedItems) {
      setItems(JSON.parse(storedItems))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(items))
  }, [items])

  const addItem = (item: CartItem) => {
    setItems((prevItems) => {
      const existingItem = prevItems.find((i) => i.id === item.id)
      if (existingItem) {
        return prevItems.map((i) => (i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i))
      }
      return [...prevItems, item]
    })
  }

  const removeItem = (id: string) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id))
  }

  const updateQuantity = (id: string, quantity: number) => {
    setItems((prevItems) =>
      prevItems
        .map((item) => (item.id === id ? { ...item, quantity: Math.max(0, quantity) } : item))
        .filter((item) => item.quantity > 0),
    )
  }

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const formattedTotal = formatCurrency(total, items[0]?.currency || "USD")

  return { items, addItem, removeItem, updateQuantity, total, formattedTotal }
}

