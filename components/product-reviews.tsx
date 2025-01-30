"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Star } from "lucide-react"

interface Review {
  id: string
  rating: number
  comment: string
  author: string
  date: string
}

export function ProductReviews({ productId }: { productId: string }) {
  const [reviews, setReviews] = useState<Review[]>([])
  const [newReview, setNewReview] = useState({ rating: 0, comment: "" })

  const handleSubmitReview = () => {
    const review: Review = {
      id: Date.now().toString(),
      ...newReview,
      author: "Anonymous", // Replace with actual user name when authentication is implemented
      date: new Date().toISOString(),
    }
    setReviews([...reviews, review])
    setNewReview({ rating: 0, comment: "" })
  }

  return (
    <div className="mt-8">
      <h3 className="text-2xl font-bold mb-4">Customer Reviews</h3>
      {reviews.map((review) => (
        <div key={review.id} className="mb-4 p-4 border rounded">
          <div className="flex items-center mb-2">
            {Array.from({ length: 5 }).map((_, index) => (
              <Star
                key={index}
                className={`w-5 h-5 ${index < review.rating ? "text-yellow-400 fill-current" : "text-gray-300"}`}
              />
            ))}
            <span className="ml-2 text-sm text-gray-600">{review.author}</span>
          </div>
          <p>{review.comment}</p>
          <p className="text-sm text-gray-500 mt-2">{new Date(review.date).toLocaleDateString()}</p>
        </div>
      ))}
      <div className="mt-6">
        <h4 className="text-lg font-semibold mb-2">Write a Review</h4>
        <div className="flex mb-2">
          {Array.from({ length: 5 }).map((_, index) => (
            <Star
              key={index}
              className={`w-6 h-6 cursor-pointer ${
                index < newReview.rating ? "text-yellow-400 fill-current" : "text-gray-300"
              }`}
              onClick={() => setNewReview({ ...newReview, rating: index + 1 })}
            />
          ))}
        </div>
        <Textarea
          value={newReview.comment}
          onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
          placeholder="Write your review here..."
          className="mb-2"
        />
        <Button onClick={handleSubmitReview}>Submit Review</Button>
      </div>
    </div>
  )
}

