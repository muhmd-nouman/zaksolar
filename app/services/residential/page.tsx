import Image from "next/image"
import Link from "next/link"
import { CheckCircle, ArrowLeft } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function ResidentialServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Header */}
      <div className="bg-primary/10 py-12 md:py-20">
        <div className="container">
          <Link href="/services" className="inline-flex items-center text-primary mb-6 hover:underline">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Services
          </Link>
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Residential Solar Services</h1>
            <p className="text-lg text-muted-foreground">
              Power your home with clean, renewable solar energy and reduce your electricity bills.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Transform Your Home with Solar Power</h2>
              <p className="text-muted-foreground mb-6">
                ZAKSolar's residential solar services provide homeowners with reliable, clean energy solutions that
                reduce electricity bills and increase property value. Our expert team handles everything from initial
                consultation to installation and maintenance.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold">Customized System Design</h3>
                    <p className="text-muted-foreground">
                      Tailored solar solutions based on your home's energy needs and roof specifications.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold">Professional Installation</h3>
                    <p className="text-muted-foreground">
                      Expert installation by certified technicians ensuring safety and optimal performance.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold">Free After-Sales Support</h3>
                    <p className="text-muted-foreground">
                      Ongoing maintenance and support to ensure your system operates at peak efficiency.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold">Energy Monitoring</h3>
                    <p className="text-muted-foreground">
                      Advanced monitoring systems to track your energy production and consumption.
                    </p>
                  </div>
                </div>
              </div>
              <Button size="lg">Get a Free Quote</Button>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Residential Solar Installation"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Installation Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold">1</span>
              </div>
              <h3 className="font-semibold mb-2">Initial Consultation</h3>
              <p className="text-sm text-muted-foreground">
                We assess your energy needs and discuss your goals for going solar.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold">2</span>
              </div>
              <h3 className="font-semibold mb-2">System Design</h3>
              <p className="text-sm text-muted-foreground">
                Our engineers design a custom solar system optimized for your home.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold">3</span>
              </div>
              <h3 className="font-semibold mb-2">Installation</h3>
              <p className="text-sm text-muted-foreground">Professional installation by our certified technicians.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold">4</span>
              </div>
              <h3 className="font-semibold mb-2">Activation & Support</h3>
              <p className="text-sm text-muted-foreground">System activation, monitoring setup, and ongoing support.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Residential System Types */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">Residential System Types</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white border rounded-lg overflow-hidden">
              <div className="aspect-video relative">
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  alt="Grid-Tied Solar System"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Grid-Tied Systems</h3>
                <p className="text-muted-foreground mb-4">
                  Connect to the utility grid, allowing you to draw power when needed and feed excess energy back to the
                  grid.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 h-5 w-5 text-primary">✓</div>
                    <span>Lower initial investment</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 h-5 w-5 text-primary">✓</div>
                    <span>Net metering benefits</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 h-5 w-5 text-primary">✓</div>
                    <span>No battery storage needed</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white border rounded-lg overflow-hidden">
              <div className="aspect-video relative">
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  alt="Off-Grid Solar System"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Off-Grid Systems</h3>
                <p className="text-muted-foreground mb-4">
                  Complete energy independence with battery storage, ideal for remote locations without reliable grid
                  access.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 h-5 w-5 text-primary">✓</div>
                    <span>Total energy independence</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 h-5 w-5 text-primary">✓</div>
                    <span>Battery backup storage</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 h-5 w-5 text-primary">✓</div>
                    <span>Ideal for remote locations</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white border rounded-lg overflow-hidden">
              <div className="aspect-video relative">
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  alt="Hybrid Solar System"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Hybrid Systems</h3>
                <p className="text-muted-foreground mb-4">
                  The best of both worlds, with grid connection and battery storage for backup power during outages.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 h-5 w-5 text-primary">✓</div>
                    <span>Power during grid outages</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 h-5 w-5 text-primary">✓</div>
                    <span>Energy storage capability</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 h-5 w-5 text-primary">✓</div>
                    <span>Grid connection benefits</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold mb-2">How much does a residential solar system cost?</h3>
              <p className="text-muted-foreground">
                The cost varies based on system size, equipment quality, and installation complexity. We offer flexible
                financing options to make solar affordable for every homeowner.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold mb-2">How long does installation take?</h3>
              <p className="text-muted-foreground">
                Most residential installations are completed within 1-3 days, depending on system size and complexity.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold mb-2">Will solar panels damage my roof?</h3>
              <p className="text-muted-foreground">
                No, our professional installation ensures your roof's integrity. In fact, solar panels can protect your
                roof from weather elements, potentially extending its lifespan.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold mb-2">How much maintenance is required?</h3>
              <p className="text-muted-foreground">
                Solar systems require minimal maintenance. We recommend annual inspections and occasional cleaning to
                ensure optimal performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Power Your Home with Solar?</h2>
          <p className="text-primary-foreground/80 max-w-[600px] mx-auto mb-8">
            Contact us today for a free consultation and quote. Our experts will help you find the perfect solar
            solution for your home.
          </p>
          <Button size="lg" variant="secondary">
            Get Your Free Quote
          </Button>
        </div>
      </section>
    </div>
  )
}

