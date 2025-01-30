"use client"

import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function OrderSuccessPage() {
  const [orderDetails, setOrderDetails] = useState<any>(null)
  const searchParams = useSearchParams()
  const sessionId = searchParams.get("session_id")

  useEffect(() => {
    if (sessionId) {
      fetch(`/api/order?session_id=${sessionId}`)
        .then((res) => res.json())
        .then((data) => setOrderDetails(data))
    }
  }, [sessionId])

  if (!orderDetails) {
    return <div>Loading order details...</div>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Order Successful</h1>
      <p className="mb-4">Thank you for your purchase! Your order has been confirmed.</p>
      <div className="bg-gray-100 p-4 rounded-lg mb-6">
        <h2 className="text-xl font-semibold mb-2">Order Summary</h2>
        <p>Order ID: {orderDetails.id}</p>
        <p>
          Total: {orderDetails.amount_total / 100} {orderDetails.currency.toUpperCase()}
        </p>
      </div>
      <Button asChild>
        <Link href="/">Continue Shopping</Link>
      </Button>
    </div>
  )
}

