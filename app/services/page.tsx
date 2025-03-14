import Image from "next/image"
import Link from "next/link"
import { Sun, Zap, ShieldCheck, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Header */}
      <div className="bg-primary/10 py-12 md:py-20">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Our Solar Services</h1>
            <p className="text-lg text-muted-foreground">
              ZAKSolar provides comprehensive solar energy solutions for residential, commercial, and industrial clients
              across Pakistan.
            </p>
          </div>
        </div>
      </div>

      {/* Services Overview */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href="/services/residential" className="group">
              <div className="bg-white border rounded-lg overflow-hidden transition-all hover:shadow-md">
                <div className="aspect-video relative">
                  <Image
                    src="/placeholder.svg?height=300&width=500"
                    alt="Residential Solar Services"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Sun className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    Residential Solar Services
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Complete solar solutions for homes, designed to reduce electricity bills and provide reliable power.
                  </p>
                  <div className="flex items-center text-primary font-medium">
                    Learn more <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/services/commercial" className="group">
              <div className="bg-white border rounded-lg overflow-hidden transition-all hover:shadow-md">
                <div className="aspect-video relative">
                  <Image
                    src="/placeholder.svg?height=300&width=500"
                    alt="Commercial Solar Services"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Zap className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    Commercial Solar Services
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Scalable solar systems for businesses, optimized for maximum efficiency and return on investment.
                  </p>
                  <div className="flex items-center text-primary font-medium">
                    Learn more <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/services/industrial" className="group">
              <div className="bg-white border rounded-lg overflow-hidden transition-all hover:shadow-md">
                <div className="aspect-video relative">
                  <Image
                    src="/placeholder.svg?height=300&width=500"
                    alt="Industrial Solar Services"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <ShieldCheck className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    Industrial Solar Services
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    High-capacity solar solutions for industrial facilities, reducing operational costs and carbon
                    footprint.
                  </p>
                  <div className="flex items-center text-primary font-medium">
                    Learn more <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">Additional Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Solar System Maintenance</h3>
              <p className="text-muted-foreground mb-4">
                Regular maintenance services to ensure your solar system operates at peak efficiency. Our technicians
                perform thorough inspections, cleaning, and necessary repairs.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <div className="mr-2 mt-1 h-5 w-5 text-primary">✓</div>
                  <span>Panel cleaning and inspection</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 h-5 w-5 text-primary">✓</div>
                  <span>Inverter performance check</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 h-5 w-5 text-primary">✓</div>
                  <span>Wiring and connection inspection</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 h-5 w-5 text-primary">✓</div>
                  <span>System performance analysis</span>
                </li>
              </ul>
              <Button variant="outline">Learn More</Button>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Solar Consulting</h3>
              <p className="text-muted-foreground mb-4">
                Expert advice on solar system design, sizing, and implementation. Our consultants help you make informed
                decisions about your solar investment.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <div className="mr-2 mt-1 h-5 w-5 text-primary">✓</div>
                  <span>Energy consumption analysis</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 h-5 w-5 text-primary">✓</div>
                  <span>System sizing recommendations</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 h-5 w-5 text-primary">✓</div>
                  <span>ROI and payback calculations</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 h-5 w-5 text-primary">✓</div>
                  <span>Technical feasibility studies</span>
                </li>
              </ul>
              <Button variant="outline">Learn More</Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-primary-foreground/80 max-w-[600px] mx-auto mb-8">
            Contact our team today to discuss your solar energy needs and get a customized solution.
          </p>
          <Button size="lg" variant="secondary">
            Request a Free Consultation
          </Button>
        </div>
      </section>
    </div>
  )
}

