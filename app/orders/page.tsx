"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

interface Order {
  id: string
  date: string
  total: number
  status: string
  items: { name: string; quantity: number }[]
}

export default function OrdersPage() {
  const [orders, setOrders] = useState<Order[]>([])

  useEffect(() => {
    // Replace this with an actual API call to fetch orders
    const fetchOrders = async () => {
      const response = await fetch("/api/orders")
      const data = await response.json()
      setOrders(data)
    }
    fetchOrders()
  }, [])

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Your Orders</h1>
      {orders.map((order) => (
        <div key={order.id} className="mb-6 p-6 border rounded-lg shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Order #{order.id}</h2>
            <span className="text-sm text-gray-500">{new Date(order.date).toLocaleDateString()}</span>
          </div>
          <p className="mb-2">Total: ${order.total.toFixed(2)}</p>
          <p className="mb-4">
            Status: <span className="font-medium">{order.status}</span>
          </p>
          <h3 className="font-medium mb-2">Items:</h3>
          <ul className="list-disc list-inside mb-4">
            {order.items.map((item, index) => (
              <li key={index}>
                {item.name} (x{item.quantity})
              </li>
            ))}
          </ul>
          <Button variant="outline">View Details</Button>
        </div>
      ))}
    </div>
  )
}

