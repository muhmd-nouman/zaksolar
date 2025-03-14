import Image from "next/image"
import Link from "next/link"
import { Calendar, User, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function BlogPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Header */}
      <div className="bg-primary/10 py-12 md:py-20">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Solar Energy Blog</h1>
            <p className="text-lg text-muted-foreground">
              Stay updated with the latest news, tips, and insights about solar energy and sustainable living.
            </p>
          </div>
        </div>
      </div>

      {/* Featured Post */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-2xl font-bold mb-8">Featured Article</h2>
          <div className="bg-white border rounded-lg overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="aspect-video lg:aspect-auto relative">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Solar Panels on Rooftop"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    March 10, 2025
                  </div>
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-1" />
                    Ahmed Khan
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4">
                  The Future of Solar Energy in Pakistan: Opportunities and Challenges
                </h3>
                <p className="text-muted-foreground mb-6">
                  Pakistan has immense solar potential with over 300 sunny days per year. This article explores the
                  growing solar industry in Pakistan, government initiatives, and the challenges that need to be
                  addressed to fully harness this renewable energy source.
                </p>
                <Link
                  href="/blog/future-of-solar-energy-pakistan"
                  className="inline-flex items-center text-primary font-medium hover:underline"
                >
                  Read Full Article <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-2xl font-bold mb-8">Recent Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white border rounded-lg overflow-hidden">
              <div className="aspect-video relative">
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  alt="Solar Panel Installation"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    March 5, 2025
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">5 Tips for Maintaining Your Solar Panels</h3>
                <p className="text-muted-foreground mb-4">
                  Learn how to keep your solar panels operating at peak efficiency with these simple maintenance tips.
                </p>
                <Link
                  href="/blog/solar-panel-maintenance-tips"
                  className="inline-flex items-center text-primary font-medium hover:underline"
                >
                  Read More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="bg-white border rounded-lg overflow-hidden">
              <div className="aspect-video relative">
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  alt="Solar Battery Storage"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    February 28, 2025
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">Understanding Solar Battery Storage Options</h3>
                <p className="text-muted-foreground mb-4">
                  A comprehensive guide to solar battery storage systems and how they can enhance your solar
                  installation.
                </p>
                <Link
                  href="/blog/solar-battery-storage-guide"
                  className="inline-flex items-center text-primary font-medium hover:underline"
                >
                  Read More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="bg-white border rounded-lg overflow-hidden">
              <div className="aspect-video relative">
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  alt="Solar ROI Chart"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    February 20, 2025
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">Calculating ROI for Your Solar Investment</h3>
                <p className="text-muted-foreground mb-4">
                  How to calculate the return on investment for your solar system and understand the financial benefits.
                </p>
                <Link
                  href="/blog/solar-roi-calculation"
                  className="inline-flex items-center text-primary font-medium hover:underline"
                >
                  Read More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-2xl font-bold mb-8">Browse by Category</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <Link
              href="/blog/category/solar-basics"
              className="bg-white border rounded-lg p-6 hover:border-primary hover:shadow-sm transition-all"
            >
              <h3 className="font-semibold mb-2">Solar Basics</h3>
              <p className="text-sm text-muted-foreground">Fundamental concepts and information about solar energy</p>
            </Link>
            <Link
              href="/blog/category/installation-tips"
              className="bg-white border rounded-lg p-6 hover:border-primary hover:shadow-sm transition-all"
            >
              <h3 className="font-semibold mb-2">Installation Tips</h3>
              <p className="text-sm text-muted-foreground">Advice and best practices for solar system installation</p>
            </Link>
            <Link
              href="/blog/category/maintenance"
              className="bg-white border rounded-lg p-6 hover:border-primary hover:shadow-sm transition-all"
            >
              <h3 className="font-semibold mb-2">Maintenance</h3>
              <p className="text-sm text-muted-foreground">How to maintain and care for your solar system</p>
            </Link>
            <Link
              href="/blog/category/technology"
              className="bg-white border rounded-lg p-6 hover:border-primary hover:shadow-sm transition-all"
            >
              <h3 className="font-semibold mb-2">Technology</h3>
              <p className="text-sm text-muted-foreground">Latest advancements in solar technology</p>
            </Link>
            <Link
              href="/blog/category/case-studies"
              className="bg-white border rounded-lg p-6 hover:border-primary hover:shadow-sm transition-all"
            >
              <h3 className="font-semibold mb-2">Case Studies</h3>
              <p className="text-sm text-muted-foreground">Real-world examples of successful solar installations</p>
            </Link>
            <Link
              href="/blog/category/industry-news"
              className="bg-white border rounded-lg p-6 hover:border-primary hover:shadow-sm transition-all"
            >
              <h3 className="font-semibold mb-2">Industry News</h3>
              <p className="text-sm text-muted-foreground">Updates and news from the solar energy industry</p>
            </Link>
            <Link
              href="/blog/category/sustainability"
              className="bg-white border rounded-lg p-6 hover:border-primary hover:shadow-sm transition-all"
            >
              <h3 className="font-semibold mb-2">Sustainability</h3>
              <p className="text-sm text-muted-foreground">Environmental benefits and sustainable living with solar</p>
            </Link>
            <Link
              href="/blog/category/financial"
              className="bg-white border rounded-lg p-6 hover:border-primary hover:shadow-sm transition-all"
            >
              <h3 className="font-semibold mb-2">Financial</h3>
              <p className="text-sm text-muted-foreground">Financial aspects, incentives, and ROI of solar energy</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-primary-foreground/80 mb-8">
              Stay updated with the latest solar news, tips, and exclusive offers from ZAKSolar.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-2 rounded-md flex-1 text-foreground"
              />
              <Button variant="secondary">Subscribe</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

