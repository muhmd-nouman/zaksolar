"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import { ShoppingCart, User, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/lib/cart-context"
import { useAuth } from "@clerk/nextjs"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Search } from "@/components/search"

export function Layout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  const { cart } = useCart()
  const { isSignedIn } = useAuth()

  const totalItems = cart?.items?.reduce((acc, item) => acc + item.quantity, 0) || 0

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/">
              <div className="flex items-center gap-2">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-03-12%20at%204.06.40%E2%80%AFPM-rJN23Xd9T60XPkPGCb72pO221WtQQn.png"
                  alt="ZAKSolar Logo"
                  width={50}
                  height={50}
                  className="h-10 w-auto"
                />
                <span className="text-xl font-bold text-primary">ZAKSolar</span>
              </div>
            </Link>
          </div>

          <nav className="hidden md:flex gap-6">
            {/* <Link href="/" className="text-sm font-medium hover:text-primary">
              Home
            </Link> */}
            <Link href="/services" className="text-sm font-medium hover:text-primary">
              Services
            </Link>
            {/* <Link href="/products" className="text-sm font-medium hover:text-primary">
              Products
            </Link> */}
            <Link href="/shop" className="text-sm font-medium hover:text-primary">
              Shop
            </Link>
            <Link href="/blog" className="text-sm font-medium hover:text-primary">
              Blog
            </Link>
            {/* <Link href="/about" className="text-sm font-medium hover:text-primary">
              About
            </Link>
            <Link href="/contact" className="text-sm font-medium hover:text-primary">
              Contact
            </Link> */}
          </nav>

          <div className="flex items-center">
            <Search />

            <Link href="/cart">
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </Button>
            </Link>

            <Link href={isSignedIn ? "/account" : "/sign-in"}>
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
              </Button>
            </Link>

            <Button variant="outline" size="sm" className="hidden md:inline-flex">
              Get a Quote
            </Button>

            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="md:hidden">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="flex flex-col gap-6 mt-6">
                  <Link href="/" className="text-sm font-medium hover:text-primary">
                    Home
                  </Link>
                  <Link href="/services" className="text-sm font-medium hover:text-primary">
                    Services
                  </Link>
                  <Link href="/shop" className="text-sm font-medium hover:text-primary">
                    Shop
                  </Link>
                  <Link href="/blog" className="text-sm font-medium hover:text-primary">
                    Blog
                  </Link>
                  <Link href="/about" className="text-sm font-medium hover:text-primary">
                    About
                  </Link>
                  <Link href="/contact" className="text-sm font-medium hover:text-primary">
                    Contact
                  </Link>
                  <Button className="mt-4">Get a Quote</Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-03-12%20at%204.06.40%E2%80%AFPM-rJN23Xd9T60XPkPGCb72pO221WtQQn.png"
                  alt="ZAKSolar Logo"
                  width={40}
                  height={40}
                  className="h-8 w-auto"
                />
                <span className="text-lg font-bold text-white">ZAKSolar</span>
              </div>
              <p className="text-sm text-gray-400">Providing premium solar solutions across Pakistan since 2015.</p>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">Services</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/services/residential" className="hover:text-white">
                    Residential Installation
                  </Link>
                </li>
                <li>
                  <Link href="/services/commercial" className="hover:text-white">
                    Commercial Installation
                  </Link>
                </li>
                <li>
                  <Link href="/services/industrial" className="hover:text-white">
                    Industrial Installation
                  </Link>
                </li>
                <li>
                  <Link href="/maintenance" className="hover:text-white">
                    Maintenance & Support
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/shop" className="hover:text-white">
                    Shop
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="hover:text-white">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/terms-of-service" className="hover:text-white">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/privacy-policy" className="hover:text-white">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/refund-policy" className="hover:text-white">
                    Refund Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center text-gray-400">
            <p>© {new Date().getFullYear()} ZAKSolar. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

