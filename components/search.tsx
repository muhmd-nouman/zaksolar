"use client"

import type React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { SearchIcon, Loader2 } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"

type SearchResult = {
  id: string
  name: string
  type: "product" | "blog" | "service"
  url: string
}

export function Search() {
  const [isOpen, setIsOpen] = useState(false)
  const [query, setQuery] = useState("")
  const [results, setResults] = useState<SearchResult[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!query.trim()) return

    setIsLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 500))

    // Mock results
    const mockResults: SearchResult[] = [
      {
        id: "1",
        name: "400W Monocrystalline Solar Panel",
        type: "product",
        url: "/shop/product/400w-monocrystalline-solar-panel",
      },
      {
        id: "2",
        name: "5kW Hybrid Inverter",
        type: "product",
        url: "/shop/product/5kw-hybrid-inverter",
      },
      {
        id: "3",
        name: "Residential Solar Services",
        type: "service",
        url: "/services/residential",
      },
      {
        id: "4",
        name: "Understanding Solar Battery Storage Options",
        type: "blog",
        url: "/blog/solar-battery-storage-guide",
      },
    ].filter((item) => item.name.toLowerCase().includes(query.toLowerCase()))

    setResults(mockResults)
    setIsLoading(false)
  }

  const handleResultClick = (url: string) => {
    setIsOpen(false)
    router.push(url)
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon">
          <SearchIcon className="h-5 w-5" />
          <span className="sr-only">Search</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={handleSearch} className="mb-4">
          <div className="flex gap-2">
            <Input
              placeholder="Search products, blogs, services..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="flex-1"
              autoFocus
            />
            <Button type="submit" disabled={isLoading}>
              {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <SearchIcon className="h-4 w-4" />}
            </Button>
          </div>
        </form>

        {isLoading ? (
          <div className="flex justify-center py-8">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
          </div>
        ) : results.length > 0 ? (
          <div className="space-y-2">
            {results.map((result) => (
              <div
                key={result.id}
                className="p-3 hover:bg-gray-100 rounded-md cursor-pointer"
                onClick={() => handleResultClick(result.url)}
              >
                <div className="font-medium">{result.name}</div>
                <div className="text-xs text-muted-foreground capitalize">{result.type}</div>
              </div>
            ))}
          </div>
        ) : query && !isLoading ? (
          <div className="text-center py-8">
            <p className="text-muted-foreground">No results found for "{query}"</p>
          </div>
        ) : null}
      </DialogContent>
    </Dialog>
  )
}

