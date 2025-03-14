"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Phone, Mail, MapPin, Clock, Loader2 } from 'lucide-react'

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    inquiryType: ""
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSuccess(true)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSuccess(false)
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        inquiryType: ""
      })
    }, 3000)
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary/10 py-16">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl text-muted-foreground">
              Get in touch with our team for inquiries, quotes, or to schedule a consultation.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
              <p className="text-muted-foreground mb-8">
                Have questions about solar energy or our services? Our team is here to help. Fill out the form or contact us directly using the information below.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <p className="text-muted-foreground">+92 300 1234567</p>
                    <p className="text-muted-foreground">+92 321 7654321</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-muted-foreground">info@zaksolar.com</p>
                    <p className="text-muted-foreground">support@zaksolar.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Head Office</h3>
                    <p className="text-muted-foreground">
                      123 Solar Street, Gulberg III<br />
                      Lahore, Punjab, Pakistan
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Business Hours</h3>
                    <p className="text-muted-foreground">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-muted-foreground">Saturday: 10:00 AM - 4:00 PM</p>
                    <p className="text-muted-foreground">Sunday: Closed</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="font-semibold mb-4">Connect With Us</h3>
                <div className="flex gap-4">
                  <Link href="#" className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </Link>
                  <Link href="#" className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </Link>
                  <Link href="#" className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </Link>
                  <Link href="#" className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              
              {isSuccess ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500 mx-auto mb-4">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  <h3 className="text-xl font-semibold mb-2">Message Sent!</h3>
                  <p className="text-muted-foreground">
                    Thank you for contacting us. We'll get back to you as soon as possible.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div>
                      <Label htmlFor="inquiryType">Inquiry Type</Label>
                      <Select
                        value={formData.inquiryType}
                        onValueChange={(value) => setFormData(prev => ({ ...prev, inquiryType: value }))}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select inquiry type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="residential">Residential Installation</SelectItem>
                          <SelectItem value="commercial">Commercial Installation</SelectItem>
                          <SelectItem value="industrial">Industrial Installation</SelectItem>
                          <SelectItem value="product">Product Inquiry</SelectItem>
                          <SelectItem value="support">Technical Support</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  
                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      'Send Message'
                    )}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Locations</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <div className="aspect-video relative">
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  alt="Lahore Office Map"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold mb-2">Lahore Office</h3>
                <p className="text-muted-foreground text-sm mb-2">
                  123 Solar Street, Gulberg III<br />
                  Lahore, Punjab
                </p>
                <Button variant="outline" size="sm" className="w-full">Get Directions</Button>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <div className="aspect-video relative">
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  alt="Karachi Office Map"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold mb-2">Karachi Office</h3>
                <p className="text-muted-foreground text-sm mb-2">
                  456 Energy Plaza, Clifton<br />
                  Karachi, Sindh
                </p>
                <Button variant="outline" size="sm" className="w-full">Get Directions</Button>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <div className="aspect-video relative">
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  alt="Islamabad Office Map"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold mb-2">Islamabad Office</h3>
                <p className="text-muted-foreground text-sm mb-2">
                  789 Renewable Road, F-7<br />
                  Islamabad, Federal Territory
                </p>
                <Button variant="outline" size="sm" className="w-full">Get Directions</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold mb-2">How can I get a quote for solar installation?</h3>
                <p className="text-muted-foreground">
                  You can request a quote by filling out the contact form on this page, calling our office, or visiting one of our locations. Our team will assess your energy needs and provide a customized quote.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold mb-2">How long does a typical solar installation take?</h3>
                <p className="text-muted-foreground">
                  Residential installations typically take 1-3 days, while commercial and industrial projects may take 1-2 weeks depending on the system size and complexity.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold mb-2">Do you offer maintenance services for existing solar systems?</h3>
                <p className="text-muted-foreground">
                  Yes, we provide maintenance and repair services for all types of solar systems, even those not installed by us. Contact us for a maintenance assessment.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold mb-2">What areas do you serve?</h3>
                <p className="text-muted-foreground">
                  We serve all major cities in Pakistan, including Lahore, Karachi, Islamabad, Rawalpindi, Faisalabad, Multan, and surrounding areas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
