"use client"

import { useState } from "react"
import { useCart } from "@/lib/use-cart"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { loadStripe } from "@stripe/stripe-js"
import type React from "react" // Added import for React

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)

export default function CheckoutPage() {
  const { items, formattedTotal } = useCart()
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)

    const stripe = await stripePromise
    const response = await fetch("/api/create-checkout-session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ items }),
    })

    if (response.ok) {
      const { sessionId } = await response.json()
      const result = await stripe!.redirectToCheckout({
        sessionId,
      })

      if (result.error) {
        console.error(result.error.message)
      }
    } else {
      console.error("Error creating checkout session")
    }

    setLoading(false)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
          {items.map((item) => (
            <div key={item.id} className="flex justify-between items-center mb-2">
              <span>
                {item.name} x {item.quantity}
              </span>
              <span>{formatCurrency(item.price * item.quantity, item.currency)}</span>
            </div>
          ))}
          <div className="border-t pt-2 mt-4">
            <div className="flex justify-between items-center font-semibold">
              <span>Total</span>
              <span>{formattedTotal}</span>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-4">Shipping Information</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input type="text" placeholder="Full Name" required />
            <Input type="email" placeholder="Email" required />
            <Input type="text" placeholder="Address" required />
            <Input type="text" placeholder="City" required />
            <Input type="text" placeholder="Postal Code" required />
            <Input type="text" placeholder="Country" required />
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? "Processing..." : "Pay Now"}
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}

function formatCurrency(amount: number, currency: string) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
  }).format(amount)
}

