"use client"

import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"

export default function SuccessPage() {
  const [order, setOrder] = useState<any>(null)
  const searchParams = useSearchParams()
  const sessionId = searchParams.get("session_id")

  useEffect(() => {
    if (sessionId) {
      fetch(`/api/get-order?session_id=${sessionId}`)
        .then((res) => res.json())
        .then((data) => setOrder(data))
    }
  }, [sessionId])

  if (!order) {
    return <div>Loading...</div>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Thank you for your order!</h1>
      <p className="mb-4">Your order has been successfully placed and is being processed.</p>
      <div className="bg-gray-100 p-4 rounded-lg mb-4">
        <h2 className="text-xl font-semibold mb-2">Order Summary</h2>
        <p>Order ID: {order.id}</p>
        <p>Total: ${order.amount_total / 100}</p>
      </div>
      <Link href="/" className="text-blue-600 hover:underline">
        Continue Shopping
      </Link>
    </div>
  )
}

