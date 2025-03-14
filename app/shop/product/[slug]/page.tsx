import Image from "next/image"
import Link from "next/link"
import { Truck, ShieldCheck, Star, Check, Minus, Plus, Heart } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ProductPage({ params }: { params: { slug: string } }) {
  // This would normally fetch the product data based on the slug
  const product = {
    name: "400W Monocrystalline Solar Panel",
    description:
      "High-efficiency A-grade monocrystalline solar panel with 25-year performance warranty. Ideal for residential and commercial installations.",
    price: 45000,
    rating: 4.8,
    reviewCount: 124,
    images: [
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
    ],
    features: [
      "400W power output",
      "Monocrystalline silicon cells",
      "21.5% efficiency",
      "25-year performance warranty",
      "Anti-reflective glass coating",
      "Robust aluminum frame",
      "IP68 junction box",
      "PID resistant",
      "Salt mist and ammonia corrosion resistant",
    ],
    specifications: {
      "Power Output": "400W",
      "Cell Type": "Monocrystalline",
      Efficiency: "21.5%",
      Dimensions: "1722 x 1134 x 35mm",
      Weight: "22.5kg",
      "Operating Temperature": "-40°C to +85°C",
      "Maximum System Voltage": "1000V DC",
      Frame: "Anodized Aluminum Alloy",
      "Front Glass": "3.2mm Tempered Glass",
      "Junction Box": "IP68 Rated",
      Cables: "4mm², 1200mm Length",
      Connectors: "MC4 Compatible",
    },
    relatedProducts: [
      {
        name: "300W Polycrystalline Solar Panel",
        price: 35000,
        image: "/placeholder.svg?height=300&width=300",
        slug: "300w-polycrystalline-solar-panel",
      },
      {
        name: "500W Bifacial Solar Panel",
        price: 60000,
        image: "/placeholder.svg?height=300&width=300",
        slug: "500w-bifacial-solar-panel",
      },
      {
        name: "Solar Panel Mounting Kit",
        price: 8000,
        image: "/placeholder.svg?height=300&width=300",
        slug: "solar-panel-mounting-kit",
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
            <Link href="/shop/category/solar-panels" className="text-muted-foreground hover:text-primary">
              Solar Panels
            </Link>
            <span className="mx-2 text-muted-foreground">/</span>
            <span className="text-foreground">{product.name}</span>
          </div>
        </div>
      </div>

      {/* Product Details */}
      <section className="py-12">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="aspect-square relative border rounded-lg overflow-hidden">
                <Image
                  src={product.images[0] || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="grid grid-cols-4 gap-4">
                {product.images.map((image, index) => (
                  <div
                    key={index}
                    className="aspect-square relative border rounded-lg overflow-hidden cursor-pointer hover:border-primary"
                  >
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${product.name} - Image ${index + 1}`}
                      fill
                      className="object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div>
              <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                    />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">
                  {product.rating} ({product.reviewCount} reviews)
                </span>
              </div>
              <p className="text-3xl font-bold mb-6">₨{product.price.toLocaleString()}</p>
              <p className="text-muted-foreground mb-8">{product.description}</p>

              <div className="space-y-6 mb-8">
                <div className="flex items-center gap-4">
                  <div className="border rounded-md flex items-center">
                    <Button variant="ghost" size="icon" className="rounded-none">
                      <Minus className="h-4 w-4" />
                      <span className="sr-only">Decrease quantity</span>
                    </Button>
                    <span className="w-12 text-center">1</span>
                    <Button variant="ghost" size="icon" className="rounded-none">
                      <Plus className="h-4 w-4" />
                      <span className="sr-only">Increase quantity</span>
                    </Button>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    <span className="text-green-600 font-medium">In Stock</span> - Ready to ship
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="flex-1">
                    Add to Cart
                  </Button>
                  <Button size="lg" variant="outline" className="flex-1">
                    Buy Now
                  </Button>
                  <Button size="lg" variant="outline" className="w-12 flex-shrink-0">
                    <Heart className="h-5 w-5" />
                    <span className="sr-only">Add to wishlist</span>
                  </Button>
                </div>
              </div>

              <div className="space-y-4 border-t pt-6">
                <div className="flex items-start gap-3">
                  <Truck className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Free Delivery</h3>
                    <p className="text-sm text-muted-foreground">Same-day delivery to major cities across Pakistan</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <ShieldCheck className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-medium">25-Year Warranty</h3>
                    <p className="text-sm text-muted-foreground">
                      Manufacturer's performance warranty with ZAKSolar support
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Details Tabs */}
      <section className="py-12 bg-gray-50">
        <div className="container">
          <Tabs defaultValue="features">
            <TabsList className="grid w-full grid-cols-3 max-w-2xl mx-auto">
              <TabsTrigger value="features">Features</TabsTrigger>
              <TabsTrigger value="specifications">Specifications</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>
            <div className="mt-8">
              <TabsContent value="features" className="max-w-3xl mx-auto">
                <div className="bg-white p-6 rounded-lg">
                  <h2 className="text-2xl font-bold mb-6">Key Features</h2>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </TabsContent>
              <TabsContent value="specifications" className="max-w-3xl mx-auto">
                <div className="bg-white p-6 rounded-lg">
                  <h2 className="text-2xl font-bold mb-6">Technical Specifications</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <div key={key} className="flex justify-between py-2 border-b">
                        <span className="font-medium">{key}</span>
                        <span className="text-muted-foreground">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="reviews" className="max-w-3xl mx-auto">
                <div className="bg-white p-6 rounded-lg">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold">Customer Reviews</h2>
                    <Button>Write a Review</Button>
                  </div>
                  <div className="flex items-center gap-4 mb-8">
                    <div className="text-5xl font-bold">{product.rating}</div>
                    <div>
                      <div className="flex mb-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-5 w-5 ${i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                          />
                        ))}
                      </div>
                      <p className="text-sm text-muted-foreground">Based on {product.reviewCount} reviews</p>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div className="border-b pb-6">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${i < 5 ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                            />
                          ))}
                        </div>
                        <span className="font-medium">Excellent Product</span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">By Farhan A. on March 10, 2025</p>
                      <p>
                        I installed these panels on my home in Lahore and they have been performing exceptionally well.
                        The power output is consistent and they've significantly reduced my electricity bills. The
                        delivery was prompt and the ZAKSolar team was very helpful with installation advice.
                      </p>
                    </div>
                    <div className="border-b pb-6">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${i < 4 ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                            />
                          ))}
                        </div>
                        <span className="font-medium">Good Quality</span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">By Ayesha M. on February 15, 2025</p>
                      <p>
                        These panels are well-built and have been reliable so far. I've had them for about 3 months and
                        they're performing as expected. The only reason I'm not giving 5 stars is that the delivery took
                        a bit longer than promised, but the product itself is great.
                      </p>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full mt-6">
                    Load More Reviews
                  </Button>
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-12">
        <div className="container">
          <h2 className="text-2xl font-bold mb-8">Related Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {product.relatedProducts.map((relatedProduct, index) => (
              <Link key={index} href={`/shop/product/${relatedProduct.slug}`} className="group">
                <div className="bg-white border rounded-lg overflow-hidden transition-all hover:shadow-md">
                  <div className="aspect-square relative">
                    <Image
                      src={relatedProduct.image || "/placeholder.svg"}
                      alt={relatedProduct.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors">
                      {relatedProduct.name}
                    </h3>
                    <div className="flex justify-between items-center">
                      <span className="font-bold">₨{relatedProduct.price.toLocaleString()}</span>
                      <Button size="sm">Add to Cart</Button>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

