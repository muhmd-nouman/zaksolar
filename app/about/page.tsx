import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle, Users, Award, Zap, MapPin } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary/10 py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">About ZAKSolar</h1>
              <p className="text-xl text-muted-foreground mb-8">
                Powering Pakistan's future with sustainable solar energy solutions since 2015.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link href="/contact">Contact Us</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/careers">Join Our Team</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="ZAKSolar Team"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Story</h2>
            <p className="text-lg text-muted-foreground">
              From humble beginnings to becoming one of Pakistan's leading solar energy providers.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h3 className="text-2xl font-bold mb-4">Founded with a Vision</h3>
              <p className="text-muted-foreground mb-6">
                ZAKSolar was founded in 2015 by a team of engineers and entrepreneurs who recognized the immense potential of solar energy in Pakistan. With over 300 sunny days per year across much of the country, we saw an opportunity to harness this abundant natural resource to address Pakistan's energy challenges.
              </p>
              <p className="text-muted-foreground mb-6">
                Our founders started with a simple mission: to make clean, reliable solar energy accessible to homes and businesses across Pakistan. What began as a small operation in Lahore has grown into a nationwide company with projects spanning residential, commercial, and industrial sectors.
              </p>
              <p className="text-muted-foreground">
                Today, ZAKSolar is proud to be at the forefront of Pakistan's renewable energy transition, having installed over 10 megawatts of solar capacity and helped thousands of customers reduce their electricity bills while contributing to a cleaner environment.
              </p>
            </div>
            <div className="order-1 md:order-2 relative h-[300px] rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="ZAKSolar Founding Team"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Mission & Values</h2>
            <p className="text-lg text-muted-foreground">
              Guided by a commitment to excellence, sustainability, and customer satisfaction.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold mb-6">Our Mission</h3>
              <p className="text-muted-foreground mb-6">
                To accelerate Pakistan's transition to clean energy by providing high-quality, affordable solar solutions that reduce electricity costs, increase energy independence, and contribute to a sustainable future.
              </p>
              <h3 className="text-2xl font-bold mb-6">Our Vision</h3>
              <p className="text-muted-foreground">
                A Pakistan where clean, renewable solar energy is the primary source of power for homes, businesses, and industries, creating a more sustainable, prosperous, and energy-independent nation.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Quality Excellence</h4>
                  <p className="text-muted-foreground">
                    We are committed to using only A-grade components and maintaining the highest standards in our installations.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Customer First</h4>
                  <p className="text-muted-foreground">
                    We prioritize our customers' needs and satisfaction, providing personalized solutions and exceptional service.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Integrity & Transparency</h4>
                  <p className="text-muted-foreground">
                    We operate with honesty and transparency in all our dealings, providing clear information and fair pricing.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Innovation</h4>
                  <p className="text-muted-foreground">
                    We continuously seek to improve our products, services, and processes to deliver greater value to our customers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Leadership Team</h2>
            <p className="text-lg text-muted-foreground">
              Meet the experienced professionals guiding ZAKSolar's mission and growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white border rounded-lg overflow-hidden">
              <div className="aspect-square relative">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Ahmed Khan - CEO"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">Ahmed Khan</h3>
                <p className="text-primary font-medium mb-4">Chief Executive Officer</p>
                <p className="text-muted-foreground mb-4">
                  With over 15 years of experience in renewable energy, Ahmed leads ZAKSolar's strategic vision and operations.
                </p>
              </div>
            </div>
            
            <div className="bg-white border rounded-lg overflow-hidden">
              <div className="aspect-square relative">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Fatima Malik - CTO"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">Fatima Malik</h3>
                <p className="text-primary font-medium mb-4">Chief Technical Officer</p>
                <p className="text-muted-foreground mb-4">
                  Fatima oversees all technical aspects of our solar installations, ensuring optimal performance and reliability.
                </p>
              </div>
            </div>
            
            <div className="bg-white border rounded-lg overflow-hidden">
              <div className="aspect-square relative">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Zain Ahmed - COO"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">Zain Ahmed</h3>
                <p className="text-primary font-medium mb-4">Chief Operations Officer</p>
                <p className="text-muted-foreground mb-4">
                  Zain manages our day-to-day operations, ensuring efficient project delivery and customer satisfaction.
                </p>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Button asChild>
              <Link href="/careers">Join Our Team</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Locations</h2>
            <p className="text-lg text-muted-foreground">
              Serving customers across Pakistan with offices in major cities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Lahore</h3>
              <p className="text-muted-foreground mb-4">
                123 Solar Street, Gulberg III<br />
                Lahore, Punjab
              </p>
              <p className="font-medium">+92 300 1234567</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Karachi</h3>
              <p className="text-muted-foreground mb-4">
                456 Energy Plaza, Clifton<br />
                Karachi, Sindh
              </p>
              <p className="font-medium">+92 321 7654321</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Islamabad</h3>
              <p className="text-muted-foreground mb-4">
                789 Renewable Road, F-7<br />
                Islamabad, Federal Territory
              </p>
              <p className="font-medium">+92 333 9876543</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Go Solar?</h2>
          <p className="text-primary-foreground/80 max-w-[600px] mx-auto mb-8">
            Contact us today for a free consultation and quote. Our experts will help you find the perfect solar solution for your needs.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/contact">Get Your Free Quote</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
