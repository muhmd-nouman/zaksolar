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

export default function ShopPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Header */}
      <div className="bg-primary/10 py-12 md:py-20">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Solar Products Shop</h1>
            <p className="text-lg text-muted-foreground">
              Browse our selection of high-quality solar panels, inverters, batteries, and accessories.
            </p>
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
                    <Link href="/shop/category/solar-panels" className="text-muted-foreground hover:text-primary">
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
                    <span className="text-muted-foreground">SMA</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="rounded text-primary" />
                    <span className="text-muted-foreground">Fronius</span>
                  </label>
                </div>
              </div>

              <div className="border-t pt-6">
                <h3 className="font-semibold mb-4">Price Range</h3>
                <div className="space-y-2">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="price" className="text-primary" />
                    <span className="text-muted-foreground">All Prices</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="price" className="text-primary" />
                    <span className="text-muted-foreground">Under ₨10,000</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="price" className="text-primary" />
                    <span className="text-muted-foreground">₨10,000 - ₨50,000</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="price" className="text-primary" />
                    <span className="text-muted-foreground">₨50,000 - ₨100,000</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="price" className="text-primary" />
                    <span className="text-muted-foreground">Over ₨100,000</span>
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

              <div className="pt-4">
                <Button className="w-full">Apply Filters</Button>
              </div>
            </div>

            {/* Product Grid */}
            <div>
              {/* Sort Controls */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
                <div>
                  <h2 className="text-2xl font-bold">All Products</h2>
                  <p className="text-muted-foreground">Showing 24 of 124 products</p>
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
                {/* Product 1 */}
                <Link href="/shop/product/400w-monocrystalline-solar-panel" className="group">
                  <div className="bg-white border rounded-lg overflow-hidden transition-all hover:shadow-md">
                    <div className="aspect-square relative">
                      <Image
                        src="/placeholder.svg?height=400&width=400"
                        alt="400W Monocrystalline Solar Panel"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-2 left-2">
                        <span className="bg-green-500 text-white text-xs px-2 py-1 rounded">New</span>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors">
                        400W Monocrystalline Solar Panel
                      </h3>
                      <p className="text-sm text-muted-foreground mb-2">High-efficiency A-grade panel</p>
                      <div className="flex justify-between items-center">
                        <span className="font-bold">₨45,000</span>
                        <Button size="sm">Add to Cart</Button>
                      </div>
                    </div>
                  </div>
                </Link>

                {/* Product 2 */}
                <Link href="/shop/product/5kw-hybrid-inverter" className="group">
                  <div className="bg-white border rounded-lg overflow-hidden transition-all hover:shadow-md">
                    <div className="aspect-square relative">
                      <Image
                        src="/placeholder.svg?height=400&width=400"
                        alt="5kW Hybrid Inverter"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-2 left-2">
                        <span className="bg-red-500 text-white text-xs px-2 py-1 rounded">Sale</span>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors">
                        5kW Hybrid Inverter
                      </h3>
                      <p className="text-sm text-muted-foreground mb-2">On/off-grid capability with battery support</p>
                      <div className="flex justify-between items-center">
                        <div>
                          <span className="font-bold">₨120,000</span>
                          <span className="text-sm text-muted-foreground line-through ml-2">₨135,000</span>
                        </div>
                        <Button size="sm">Add to Cart</Button>
                      </div>
                    </div>
                  </div>
                </Link>

                {/* Product 3 */}
                <Link href="/shop/product/lithium-battery-48v-100ah" className="group">
                  <div className="bg-white border rounded-lg overflow-hidden transition-all hover:shadow-md">
                    <div className="aspect-square relative">
                      <Image
                        src="/placeholder.svg?height=400&width=400"
                        alt="Lithium Battery 48V 100Ah"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors">
                        Lithium Battery 48V 100Ah
                      </h3>
                      <p className="text-sm text-muted-foreground mb-2">Long-life lithium battery for solar storage</p>
                      <div className="flex justify-between items-center">
                        <span className="font-bold">₨180,000</span>
                        <Button size="sm">Add to Cart</Button>
                      </div>
                    </div>
                  </div>
                </Link>

                {/* Product 4 */}
                <Link href="/shop/product/solar-mounting-structure" className="group">
                  <div className="bg-white border rounded-lg overflow-hidden transition-all hover:shadow-md">
                    <div className="aspect-square relative">
                      <Image
                        src="/placeholder.svg?height=400&width=400"
                        alt="Solar Mounting Structure"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors">
                        Solar Mounting Structure
                      </h3>
                      <p className="text-sm text-muted-foreground mb-2">Durable aluminum mounting system</p>
                      <div className="flex justify-between items-center">
                        <span className="font-bold">₨15,000</span>
                        <Button size="sm">Add to Cart</Button>
                      </div>
                    </div>
                  </div>
                </Link>

                {/* Product 5 */}
                <Link href="/shop/product/3kw-off-grid-inverter" className="group">
                  <div className="bg-white border rounded-lg overflow-hidden transition-all hover:shadow-md">
                    <div className="aspect-square relative">
                      <Image
                        src="/placeholder.svg?height=400&width=400"
                        alt="3kW Off-Grid Inverter"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors">
                        3kW Off-Grid Inverter
                      </h3>
                      <p className="text-sm text-muted-foreground mb-2">Pure sine wave inverter for off-grid systems</p>
                      <div className="flex justify-between items-center">
                        <span className="font-bold">₨75,000</span>
                        <Button size="sm">Add to Cart</Button>
                      </div>
                    </div>
                  </div>
                </Link>

                {/* Product 6 */}
                <Link href="/shop/product/solar-charge-controller-60a" className="group">
                  <div className="bg-white border rounded-lg overflow-hidden transition-all hover:shadow-md">
                    <div className="aspect-square relative">
                      <Image
                        src="/placeholder.svg?height=400&width=400"
                        alt="Solar Charge Controller 60A"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-2 left-2">
                        <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded">Best Seller</span>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors">
                        Solar Charge Controller 60A
                      </h3>
                      <p className="text-sm text-muted-foreground mb-2">MPPT technology for maximum efficiency</p>
                      <div className="flex justify-between items-center">
                        <span className="font-bold">₨25,000</span>
                        <Button size="sm">Add to Cart</Button>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>

              {/* Pagination */}
              <div className="flex justify-center mt-12">
                <nav className="flex items-center gap-1">
                  <Button variant="outline" size="icon" disabled>
                    <span className="sr-only">Previous page</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4"
                    >
                      <polyline points="15 18 9 12 15 6" />
                    </svg>
                  </Button>
                  <Button variant="outline" size="sm" className="bg-primary text-primary-foreground">
                    1
                  </Button>
                  <Button variant="outline" size="sm">
                    2
                  </Button>
                  <Button variant="outline" size="sm">
                    3
                  </Button>
                  <Button variant="outline" size="sm">
                    4
                  </Button>
                  <Button variant="outline" size="sm">
                    5
                  </Button>
                  <Button variant="outline" size="icon">
                    <span className="sr-only">Next page</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4"
                    >
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </Button>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

