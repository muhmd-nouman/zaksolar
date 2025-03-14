import Image from "next/image"
import Link from "next/link"
import { CheckCircle, ArrowLeft, Factory, BarChart3, Shield } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function IndustrialServicesPage() {
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
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Industrial Solar Services</h1>
            <p className="text-lg text-muted-foreground">
              High-capacity solar solutions for manufacturing facilities, warehouses, and industrial complexes.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Power Your Industrial Operations with Solar</h2>
              <p className="text-muted-foreground mb-6">
                ZAKSolar's industrial solar services provide large-scale energy solutions for manufacturing facilities,
                warehouses, and industrial complexes. Our high-capacity systems are designed to significantly reduce
                operational costs and carbon footprint while ensuring reliable power for critical operations.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold">High-Capacity Systems</h3>
                    <p className="text-muted-foreground">
                      Custom-designed systems to meet the high energy demands of industrial operations.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold">Significant Cost Reduction</h3>
                    <p className="text-muted-foreground">
                      Substantial savings on energy costs for operations with high electricity consumption.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold">Minimal Downtime</h3>
                    <p className="text-muted-foreground">
                      Installation process designed to minimize disruption to your industrial operations.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold">Backup Power Solutions</h3>
                    <p className="text-muted-foreground">
                      Optional battery storage systems to ensure continuous operation during grid outages.
                    </p>
                  </div>
                </div>
              </div>
              <Button size="lg">Request a Site Assessment</Button>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Industrial Solar Installation"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">Key Features of Our Industrial Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Factory className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Customized for Industry</h3>
              <p className="text-muted-foreground mb-6">
                Our industrial solar solutions are specifically designed for the unique needs and challenges of
                manufacturing facilities, warehouses, and industrial complexes.
              </p>
              <ul className="text-left space-y-2">
                <li className="flex items-start">
                  <div className="mr-2 mt-1 h-5 w-5 text-primary">✓</div>
                  <span>Systems sized from 100kW to 1MW+</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 h-5 w-5 text-primary">✓</div>
                  <span>Rooftop, ground-mount, or carport options</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 h-5 w-5 text-primary">✓</div>
                  <span>Compatible with existing electrical systems</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <BarChart3 className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Performance Monitoring</h3>
              <p className="text-muted-foreground mb-6">
                Advanced monitoring systems provide real-time data on energy production, consumption, and system
                performance.
              </p>
              <ul className="text-left space-y-2">
                <li className="flex items-start">
                  <div className="mr-2 mt-1 h-5 w-5 text-primary">✓</div>
                  <span>Real-time performance monitoring</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 h-5 w-5 text-primary">✓</div>
                  <span>Automated alerts for system issues</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 h-5 w-5 text-primary">✓</div>
                  <span>Detailed reporting and analytics</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Reliability & Support</h3>
              <p className="text-muted-foreground mb-6">
                Our industrial systems are built for durability and backed by comprehensive support services.
              </p>
              <ul className="text-left space-y-2">
                <li className="flex items-start">
                  <div className="mr-2 mt-1 h-5 w-5 text-primary">✓</div>
                  <span>Premium components with extended warranties</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 h-5 w-5 text-primary">✓</div>
                  <span>Preventative maintenance programs</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 h-5 w-5 text-primary">✓</div>
                  <span>Rapid response technical support</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Project</h2>
          <div className="bg-white border rounded-lg overflow-hidden max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="aspect-square md:aspect-auto relative">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Manufacturing Facility Solar Installation"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-semibold mb-4">Faisalabad Textile Manufacturing Facility</h3>
                <p className="text-muted-foreground mb-6">
                  A 500kW solar system installed for one of Pakistan's largest textile manufacturers, reducing energy
                  costs by 35% and providing significant environmental benefits.
                </p>
                <div className="grid grid-cols-2 gap-6 mb-6">
                  <div>
                    <p className="text-sm text-muted-foreground">System Size</p>
                    <p className="text-2xl font-semibold">500kW</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Annual Savings</p>
                    <p className="text-2xl font-semibold">₨12M</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">CO2 Reduction</p>
                    <p className="text-2xl font-semibold">350 tons/year</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">ROI Period</p>
                    <p className="text-2xl font-semibold">3.5 years</p>
                  </div>
                </div>
                <Button>View Full Case Study</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Industrial Energy Usage?</h2>
          <p className="text-primary-foreground/80 max-w-[600px] mx-auto mb-8">
            Contact us today for a comprehensive site assessment and custom solar solution for your industrial facility.
          </p>
          <Button size="lg" variant="secondary">
            Request a Site Assessment
          </Button>
        </div>
      </section>
    </div>
  )
}

