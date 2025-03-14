import Image from "next/image"
import Link from "next/link"
import { Sun, Zap, ShieldCheck, Clock, Phone, Mail, MapPin } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      {/* <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
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
          <nav className="hidden md:flex gap-6">
            <Link href="/" className="text-sm font-medium hover:text-primary">
              Home
            </Link>
            <Link href="/services" className="text-sm font-medium hover:text-primary">
              Services
            </Link>
            <Link href="/products" className="text-sm font-medium hover:text-primary">
              Products
            </Link>
            <Link href="/about" className="text-sm font-medium hover:text-primary">
              About
            </Link>
            <Link href="/contact" className="text-sm font-medium hover:text-primary">
              Contact
            </Link>
          </nav>
          <Button className="hidden md:inline-flex">Get a Quote</Button>
          <Button variant="outline" size="icon" className="md:hidden">
            <span className="sr-only">Toggle menu</span>
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
              className="h-6 w-6"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </div>
      </header> */}

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 bg-gradient-to-b from-sky-50 to-white">
          <div className="container flex flex-col md:flex-row items-center gap-8 md:gap-16">
            <div className="flex-1 space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Powering Pakistan with <span className="text-primary">Solar Energy</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-[600px]">
                Premium solar installation services and A-grade solar products for residential, commercial, and
                industrial needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg">Get Started</Button>
                <Button size="lg" variant="outline">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="flex-1 relative h-[300px] md:h-[400px] w-full">
              <Image
                src="/team.jpeg"
                alt="Solar Panel Installation"
                fill
                className="object-cover rounded-lg"
                priority
              />
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16 md:py-24 bg-white">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Installation Services</h2>
              <p className="text-muted-foreground max-w-[800px] mx-auto">
                ZAKSolar ensures safe and secure installation processes for all your solar energy needs.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-sky-50 p-6 rounded-lg">
                <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Sun className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Residential Installation</h3>
                <p className="text-muted-foreground">
                  Complete solar solutions for homes, designed to reduce electricity bills and provide reliable power.
                </p>
              </div>
              <div className="bg-sky-50 p-6 rounded-lg">
                <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Commercial Installation</h3>
                <p className="text-muted-foreground">
                  Scalable solar systems for businesses, optimized for maximum efficiency and return on investment.
                </p>
              </div>
              <div className="bg-sky-50 p-6 rounded-lg">
                <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <ShieldCheck className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Industrial Installation</h3>
                <p className="text-muted-foreground">
                  High-capacity solar solutions for industrial facilities, reducing operational costs and carbon
                  footprint.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section id="products" className="py-16 md:py-24 bg-gray-50">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Solar Products</h2>
              <p className="text-muted-foreground max-w-[800px] mx-auto">
                We offer A-grade solar equipment to meet all your energy needs.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="aspect-square relative mb-4">
                  <Image
                    src="/placeholder.svg?height=300&width=300"
                    alt="Solar Panels"
                    fill
                    className="object-cover rounded-md"
                  />
                </div>
                <h3 className="font-semibold mb-2">A-Grade Solar Panels</h3>
                <p className="text-sm text-muted-foreground">High-efficiency panels with extended warranty</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="aspect-square relative mb-4">
                  <Image
                    src="/placeholder.svg?height=300&width=300"
                    alt="Off-Grid Inverters"
                    fill
                    className="object-cover rounded-md"
                  />
                </div>
                <h3 className="font-semibold mb-2">Off-Grid Inverters</h3>
                <p className="text-sm text-muted-foreground">Reliable power conversion for independent systems</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="aspect-square relative mb-4">
                  <Image
                    src="/placeholder.svg?height=300&width=300"
                    alt="On-Grid Inverters"
                    fill
                    className="object-cover rounded-md"
                  />
                </div>
                <h3 className="font-semibold mb-2">On-Grid Inverters</h3>
                <p className="text-sm text-muted-foreground">Grid-tied solutions for energy feedback</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="aspect-square relative mb-4">
                  <Image
                    src="/placeholder.svg?height=300&width=300"
                    alt="Hybrid Inverters"
                    fill
                    className="object-cover rounded-md"
                  />
                </div>
                <h3 className="font-semibold mb-2">Hybrid Inverters</h3>
                <p className="text-sm text-muted-foreground">Versatile power management for all scenarios</p>
              </div>
            </div>
            <div className="mt-8 text-center">
              <Button>View All Products</Button>
            </div>
          </div>
        </section>

        {/* About/USP Section */}
        <section id="about" className="py-16 md:py-24 bg-white">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">What Makes ZAKSolar Different</h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <ShieldCheck className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Free After-Sales Service</h3>
                      <p className="text-muted-foreground">
                        We provide complimentary support and maintenance after installation.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Same-Day Delivery</h3>
                      <p className="text-muted-foreground">
                        Fast delivery to major cities across Pakistan, ensuring quick project starts.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Zap className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">A-Grade Products</h3>
                      <p className="text-muted-foreground">
                        We only supply premium quality solar equipment with manufacturer warranties.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative h-[400px]">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="ZAKSolar Team"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Switch to Solar?</h2>
            <p className="text-primary-foreground/80 max-w-[600px] mx-auto mb-8">
              Contact us today for a free consultation and quote. Our experts will help you find the perfect solar
              solution.
            </p>
            <Button size="lg" variant="secondary">
              Get Your Free Quote
            </Button>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 md:py-24 bg-gray-50">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h2>
              <p className="text-muted-foreground max-w-[800px] mx-auto">
                Reach out to us for inquiries, quotes, or to schedule a consultation.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center text-center">
                <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Call Us</h3>
                <p className="text-muted-foreground">+92 300 1234567</p>
                <p className="text-muted-foreground">+92 321 7654321</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center text-center">
                <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Email Us</h3>
                <p className="text-muted-foreground">info@zaksolar.com</p>
                <p className="text-muted-foreground">support@zaksolar.com</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center text-center">
                <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Visit Us</h3>
                <p className="text-muted-foreground">123 Solar Street, Lahore</p>
                <p className="text-muted-foreground">Pakistan</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      {/* <footer className="bg-gray-900 text-gray-300 py-12">
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
                  <Link href="/residential-installation" className="hover:text-white">
                    Residential Installation
                  </Link>
                </li>
                <li>
                  <Link href="/commercial-installation" className="hover:text-white">
                    Commercial Installation
                  </Link>
                </li>
                <li>
                  <Link href="industrial-installation" className="hover:text-white">
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
              <h3 className="font-semibold text-white mb-4">Products</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="hover:text-white">
                    Solar Panels
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Inverters
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Batteries
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Solar Structures
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">Connect With Us</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="hover:text-white">
                    Facebook
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Instagram
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    LinkedIn
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    WhatsApp
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center text-gray-400">
            <p>© {new Date().getFullYear()} ZAKSolar. All rights reserved.</p>
          </div>
        </div>
      </footer> */}
    </div>
  )
}

