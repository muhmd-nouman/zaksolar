import Image from "next/image"
import Link from "next/link"
import { CheckCircle, ArrowLeft, Building2, LineChart, PiggyBank } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function CommercialServicesPage() {
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
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Commercial Solar Services</h1>
            <p className="text-lg text-muted-foreground">
              Reduce operating costs and enhance your business sustainability with our commercial solar solutions.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Commercial Solar Installation"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Solar Solutions for Your Business</h2>
              <p className="text-muted-foreground mb-6">
                ZAKSolar's commercial solar services help businesses reduce energy costs, increase property value, and
                demonstrate environmental responsibility. Our expert team designs and installs custom solar solutions
                for offices, retail spaces, warehouses, and more.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold">Reduced Operating Costs</h3>
                    <p className="text-muted-foreground">
                      Lower your electricity bills and protect against rising energy costs.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold">Enhanced Brand Image</h3>
                    <p className="text-muted-foreground">
                      Demonstrate your commitment to sustainability and environmental responsibility.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold">Increased Property Value</h3>
                    <p className="text-muted-foreground">
                      Solar installations can increase your commercial property's market value.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold">Minimal Disruption</h3>
                    <p className="text-muted-foreground">
                      Our installation process is designed to minimize disruption to your business operations.
                    </p>
                  </div>
                </div>
              </div>
              <Button size="lg">Schedule a Consultation</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">Benefits for Your Business</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <PiggyBank className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Financial Benefits</h3>
              <ul className="text-left space-y-2">
                <li className="flex items-start">
                  <div className="mr-2 mt-1 h-5 w-5 text-primary">✓</div>
                  <span>Significant reduction in energy costs</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 h-5 w-5 text-primary">✓</div>
                  <span>Protection against rising electricity rates</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 h-5 w-5 text-primary">✓</div>
                  <span>Potential tax benefits and incentives</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 h-5 w-5 text-primary">✓</div>
                  <span>Increased property value</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Building2 className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Operational Benefits</h3>
              <ul className="text-left space-y-2">
                <li className="flex items-start">
                  <div className="mr-2 mt-1 h-5 w-5 text-primary">✓</div>
                  <span>Reduced dependency on the grid</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 h-5 w-5 text-primary">✓</div>
                  <span>Backup power during outages (with storage)</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 h-5 w-5 text-primary">✓</div>
                  <span>Low maintenance requirements</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 h-5 w-5 text-primary">✓</div>
                  <span>Minimal disruption during installation</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <LineChart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Business Benefits</h3>
              <ul className="text-left space-y-2">
                <li className="flex items-start">
                  <div className="mr-2 mt-1 h-5 w-5 text-primary">✓</div>
                  <span>Enhanced corporate social responsibility</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 h-5 w-5 text-primary">✓</div>
                  <span>Improved brand image and reputation</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 h-5 w-5 text-primary">✓</div>
                  <span>Competitive advantage in your market</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 h-5 w-5 text-primary">✓</div>
                  <span>Attract environmentally conscious customers</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white border rounded-lg overflow-hidden">
              <div className="aspect-video relative">
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  alt="Office Building Solar Installation"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Lahore Office Complex</h3>
                <p className="text-muted-foreground mb-4">
                  A 50kW solar system installed on the roof of a multi-story office building, reducing energy costs by
                  40% and providing a 4-year ROI.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-sm text-muted-foreground">System Size</p>
                    <p className="font-semibold">50kW</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Annual Savings</p>
                    <p className="font-semibold">₨1,200,000</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">CO2 Reduction</p>
                    <p className="font-semibold">70 tons/year</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">ROI Period</p>
                    <p className="font-semibold">4 years</p>
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  Read Full Case Study
                </Button>
              </div>
            </div>

            <div className="bg-white border rounded-lg overflow-hidden">
              <div className="aspect-video relative">
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  alt="Retail Store Solar Installation"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Karachi Retail Chain</h3>
                <p className="text-muted-foreground mb-4">
                  A 30kW system installed across 5 retail locations, providing significant energy savings and enhancing
                  the brand's sustainability image.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-sm text-muted-foreground">System Size</p>
                    <p className="font-semibold">30kW</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Annual Savings</p>
                    <p className="font-semibold">₨720,000</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">CO2 Reduction</p>
                    <p className="font-semibold">42 tons/year</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">ROI Period</p>
                    <p className="font-semibold">5 years</p>
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  Read Full Case Study
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Reduce Your Business Energy Costs?</h2>
          <p className="text-primary-foreground/80 max-w-[600px] mx-auto mb-8">
            Contact us today for a free consultation and energy assessment. Our experts will help you find the perfect
            solar solution for your business.
          </p>
          <Button size="lg" variant="secondary">
            Schedule a Consultation
          </Button>
        </div>
      </section>
    </div>
  )
}

