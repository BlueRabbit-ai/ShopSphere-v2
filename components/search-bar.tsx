"use client"

import { useState, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import { useDebounce } from "@/lib/use-debounce"
import Link from "next/link"

export function SearchBar({ className }: { className?: string }) {
  const [query, setQuery] = useState("")
  const [results, setResults] = useState([])
  const debouncedQuery = useDebounce(query, 300)

  useEffect(() => {
    if (debouncedQuery) {
      // Replace this with an actual API call to search products
      fetch(`/api/search?q=${debouncedQuery}`)
        .then((res) => res.json())
        .then((data) => setResults(data))
    } else {
      setResults([])
    }
  }, [debouncedQuery])

  return (
    <div className={`relative ${className}`}>
      <Search className="text-muted-foreground absolute left-2 top-2 size-4" />
      <Input
        type="search"
        placeholder="Search products..."
        className="h-8 rounded-lg pl-8 text-sm sm:w-[200px] md:w-[200px] lg:w-[200px]"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {results.length > 0 && (
        <div className="absolute z-10 mt-1 w-full rounded-md bg-white shadow-lg">
          {results.map((result) => (
            <Link key={result.id} href={`/product/${result.id}`} className="block px-4 py-2 hover:bg-gray-100">
              {result.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

