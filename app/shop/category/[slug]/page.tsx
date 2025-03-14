import Image from "next/image"
import Link from "next/link"
import { Filter, ArrowUpDown } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function CategoryPage({ params }: { params: { slug: string } }) {
  // This would normally fetch category data based on the slug
  const category = {
    name: "Solar Panels",
    description: "High-efficiency solar panels for residential, commercial, and industrial applications.",
    products: [
      {
        name: "400W Monocrystalline Solar Panel",
        price: 45000,
        image: "/placeholder.svg?height=400&width=400",
        slug: "400w-monocrystalline-solar-panel",
        isNew: true,
      },
      {
        name: "300W Polycrystalline Solar Panel",
        price: 35000,
        image: "/placeholder.svg?height=400&width=400",
        slug: "300w-polycrystalline-solar-panel",
      },
      {
        name: "500W Bifacial Solar Panel",
        price: 60000,
        image: "/placeholder.svg?height=400&width=400",
        slug: "500w-bifacial-solar-panel",
        isSale: true,
        originalPrice: 68000,
      },
      {
        name: "200W Flexible Solar Panel",
        price: 30000,
        image: "/placeholder.svg?height=400&width=400",
        slug: "200w-flexible-solar-panel",
      },
      {
        name: "450W Half-Cell Solar Panel",
        price: 52000,
        image: "/placeholder.svg?height=400&width=400",
        slug: "450w-half-cell-solar-panel",
        isBestSeller: true,
      },
      {
        name: "350W PERC Solar Panel",
        price: 42000,
        image: "/placeholder.svg?height=400&width=400",
        slug: "350w-perc-solar-panel",
      },
      {
        name: "550W Commercial Solar Panel",
        price: 65000,
        image: "/placeholder.svg?height=400&width=400",
        slug: "550w-commercial-solar-panel",
      },
      {
        name: "320W All-Black Solar Panel",
        price: 38000,
        image: "/placeholder.svg?height=400&width=400",
        slug: "320w-all-black-solar-panel",
      },
    ],
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Breadcrumb */}
      <div className="border-b">
        <div className="container py-4">
          <div className="flex items-center text-sm">
            <Link href="/shop" className="text-muted-foreground hover:text-primary">
              Shop
            </Link>
            <span className="mx-2 text-muted-foreground">/</span>
            <span className="text-foreground">{category.name}</span>
          </div>
        </div>
      </div>

      {/* Page Header */}
      <div className="bg-primary/10 py-12">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{category.name}</h1>
            <p className="text-lg text-muted-foreground">{category.description}</p>
          </div>
        </div>
      </div>

      {/* Shop Content */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-10">
            {/* Sidebar Filters */}
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-4">Product Categories</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/shop/category/solar-panels" className="text-primary font-medium">
                      Solar Panels
                    </Link>
                  </li>
                  <li>
                    <Link href="/shop/category/inverters" className="text-muted-foreground hover:text-primary">
                      Inverters
                    </Link>
                  </li>
                  <li>
                    <Link href="/shop/category/batteries" className="text-muted-foreground hover:text-primary">
                      Batteries
                    </Link>
                  </li>
                  <li>
                    <Link href="/shop/category/mounting-systems" className="text-muted-foreground hover:text-primary">
                      Mounting Systems
                    </Link>
                  </li>
                  <li>
                    <Link href="/shop/category/accessories" className="text-muted-foreground hover:text-primary">
                      Accessories
                    </Link>
                  </li>
                  <li>
                    <Link href="/shop/category/complete-systems" className="text-muted-foreground hover:text-primary">
                      Complete Systems
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="border-t pt-6">
                <h3 className="font-semibold mb-4">Filter by Brand</h3>
                <div className="space-y-2">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="rounded text-primary" />
                    <span className="text-muted-foreground">SunPower</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="rounded text-primary" />
                    <span className="text-muted-foreground">Canadian Solar</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="rounded text-primary" />
                    <span className="text-muted-foreground">JinkoSolar</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="rounded text-primary" />
                    <span className="text-muted-foreground">LG Solar</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="rounded text-primary" />
                    <span className="text-muted-foreground">Trina Solar</span>
                  </label>
                </div>
              </div>

              <div className="border-t pt-6">
                <h3 className="font-semibold mb-4">Power Rating</h3>
                <div className="space-y-2">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="rounded text-primary" />
                    <span className="text-muted-foreground">100W - 200W</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="rounded text-primary" />
                    <span className="text-muted-foreground">300W - 400W</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="rounded text-primary" />
                    <span className="text-muted-foreground">500W - 600W</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="rounded text-primary" />
                    <span className="text-muted-foreground">700W+</span>
                  </label>
                </div>
              </div>

              <div className="border-t pt-6">
                <h3 className="font-semibold mb-4">Cell Type</h3>
                <div className="space-y-2">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="rounded text-primary" />
                    <span className="text-muted-foreground">Monocrystalline</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="rounded text-primary" />
                    <span className="text-muted-foreground">Polycrystalline</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="rounded text-primary" />
                    <span className="text-muted-foreground">Bifacial</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="rounded text-primary" />
                    <span className="text-muted-foreground">PERC</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="rounded text-primary" />
                    <span className="text-muted-foreground">Half-Cell</span>
                  </label>
                </div>
              </div>

              <div className="pt-4">
                <Button className="w-full">Apply Filters</Button>
              </div>
            </div>

            {/* Product Grid */}
            <div>
              {/* Sort Controls */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
                <div>
                  <h2 className="text-2xl font-bold">{category.name}</h2>
                  <p className="text-muted-foreground">Showing {category.products.length} products</p>
                </div>
                <div className="flex items-center gap-4">
                  <Button variant="outline" size="sm" className="hidden md:flex">
                    <Filter className="h-4 w-4 mr-2" />
                    Filters
                  </Button>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" size="sm">
                        <ArrowUpDown className="h-4 w-4 mr-2" />
                        Sort
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-[200px]">
                      <DropdownMenuRadioGroup value="featured">
                        <DropdownMenuRadioItem value="featured">Featured</DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="newest">Newest</DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="price-low">Price: Low to High</DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="price-high">Price: High to Low</DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="best-selling">Best Selling</DropdownMenuRadioItem>
                      </DropdownMenuRadioGroup>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>

              {/* Products */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.products.map((product, index) => (
                  <Link key={index} href={`/shop/product/${product.slug}`} className="group">
                    <div className="bg-white border rounded-lg overflow-hidden transition-all hover:shadow-md">
                      <div className="aspect-square relative">
                        <Image
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          fill
                          className="object-cover"
                        />
                        {product.isNew && (
                          <div className="absolute top-2 left-2">
                            <span className="bg-green-500 text-white text-xs px-2 py-1 rounded">New</span>
                          </div>
                        )}
                        {product.isSale && (
                          <div className="absolute top-2 left-2">
                            <span className="bg-red-500 text-white text-xs px-2 py-1 rounded">Sale</span>
                          </div>
                        )}
                        {product.isBestSeller && (
                          <div className="absolute top-2 left-2">
                            <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded">Best Seller</span>
                          </div>
                        )}
                      </div>
                      <div className="p-4">
                        <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors">
                          {product.name}
                        </h3>
                        <div className="flex justify-between items-center">
                          <div>
                            <span className="font-bold">₨{product.price.toLocaleString()}</span>
                            {product.originalPrice && (
                              <span className="text-sm text-muted-foreground line-through ml-2">
                                ₨{product.originalPrice.toLocaleString()}
                              </span>
                            )}
                          </div>
                          <Button size="sm">Add to Cart</Button>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

