"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Briefcase, Users, Zap, Award, ChevronDown, ChevronUp, Loader2 } from "lucide-react"

type JobListing = {
  id: string
  title: string
  department: string
  location: string
  type: string
  description: string
  responsibilities: string[]
  requirements: string[]
  isExpanded?: boolean
}

export default function CareersPage() {
  const [activeTab, setActiveTab] = useState("all")
  const [jobListings, setJobListings] = useState<JobListing[]>([
    {
      id: "1",
      title: "Solar Installation Technician",
      department: "Operations",
      location: "Lahore",
      type: "Full-time",
      description:
        "We are looking for experienced Solar Installation Technicians to join our growing team. In this role, you will be responsible for installing and maintaining solar panel systems for residential and commercial clients.",
      responsibilities: [
        "Install solar panels, inverters, and related equipment according to design specifications",
        "Perform electrical wiring and connections in compliance with safety standards",
        "Conduct system testing and troubleshooting",
        "Maintain accurate records of installations and maintenance activities",
        "Provide technical guidance to junior team members",
      ],
      requirements: [
        "2+ years of experience in solar installation or related electrical work",
        "Knowledge of electrical systems and solar technology",
        "Ability to read and interpret technical drawings and schematics",
        "Valid driver's license",
        "Willingness to work at heights and in various weather conditions",
      ],
      isExpanded: false,
    },
    {
      id: "2",
      title: "Solar Sales Consultant",
      department: "Sales",
      location: "Karachi",
      type: "Full-time",
      description:
        "We are seeking motivated Sales Consultants to educate potential customers about the benefits of solar energy and help them find the right solar solutions for their needs.",
      responsibilities: [
        "Generate and qualify leads for solar installations",
        "Conduct site assessments and energy consumption analyses",
        "Prepare and present customized solar proposals to potential clients",
        "Negotiate contracts and close sales",
        "Maintain relationships with existing customers",
      ],
      requirements: [
        "Proven sales experience, preferably in solar or renewable energy",
        "Strong communication and presentation skills",
        "Basic understanding of solar technology and energy systems",
        "Ability to explain technical concepts in simple terms",
        "Goal-oriented mindset with a drive to exceed targets",
      ],
      isExpanded: false,
    },
    {
      id: "3",
      title: "Solar System Designer",
      department: "Engineering",
      location: "Islamabad",
      type: "Full-time",
      description:
        "We are looking for a Solar System Designer to create efficient and cost-effective solar energy systems for our residential, commercial, and industrial clients.",
      responsibilities: [
        "Design solar PV systems based on site conditions and client requirements",
        "Perform energy load calculations and system sizing",
        "Create detailed CAD drawings and electrical schematics",
        "Coordinate with installation teams to ensure proper implementation",
        "Stay updated on the latest solar technologies and design practices",
      ],
      requirements: [
        "Bachelor's degree in Electrical Engineering or related field",
        "Experience with solar PV system design software",
        "Knowledge of electrical codes and standards",
        "Proficiency in AutoCAD or similar design software",
        "Strong analytical and problem-solving skills",
      ],
      isExpanded: false,
    },
    {
      id: "4",
      title: "Marketing Specialist",
      department: "Marketing",
      location: "Lahore",
      type: "Full-time",
      description:
        "We are seeking a creative Marketing Specialist to develop and implement marketing strategies that promote our solar products and services.",
      responsibilities: [
        "Create and manage digital marketing campaigns across various platforms",
        "Develop content for website, social media, and marketing materials",
        "Analyze marketing data and adjust strategies for optimal performance",
        "Coordinate with sales team to generate qualified leads",
        "Represent the company at industry events and trade shows",
      ],
      requirements: [
        "Bachelor's degree in Marketing, Communications, or related field",
        "2+ years of experience in digital marketing",
        "Proficiency in social media management and content creation",
        "Experience with SEO, SEM, and analytics tools",
        "Strong writing and graphic design skills",
      ],
      isExpanded: false,
    },
    {
      id: "5",
      title: "Customer Support Representative",
      department: "Customer Service",
      location: "Remote",
      type: "Full-time",
      description:
        "We are looking for a Customer Support Representative to assist our clients with inquiries, technical issues, and after-sales service.",
      responsibilities: [
        "Respond to customer inquiries via phone, email, and chat",
        "Troubleshoot basic technical issues and escalate complex problems",
        "Process warranty claims and service requests",
        "Maintain accurate records of customer interactions",
        "Provide feedback to improve products and services based on customer input",
      ],
      requirements: [
        "Excellent communication and interpersonal skills",
        "Customer service experience, preferably in a technical field",
        "Basic understanding of solar energy systems",
        "Proficiency in CRM software",
        "Ability to work independently and as part of a team",
      ],
      isExpanded: false,
    },
  ])

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    message: "",
    resume: null as File | null,
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({ ...prev, resume: e.target.files![0] }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSuccess(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSuccess(false)
      setFormData({
        name: "",
        email: "",
        phone: "",
        position: "",
        message: "",
        resume: null,
      })
    }, 3000)
  }

  const toggleJobExpand = (id: string) => {
    setJobListings((prev) => prev.map((job) => (job.id === id ? { ...job, isExpanded: !job.isExpanded } : job)))
  }

  const filteredJobs =
    activeTab === "all" ? jobListings : jobListings.filter((job) => job.department.toLowerCase() === activeTab)

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary/10 py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Join Our Team</h1>
              <p className="text-xl text-muted-foreground mb-8">
                Be part of Pakistan's renewable energy revolution. Explore career opportunities at ZAKSolar.
              </p>
              <Button size="lg" asChild>
                <a href="#open-positions">View Open Positions</a>
              </Button>
            </div>
            <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
              <Image src="/placeholder.svg?height=400&width=600" alt="ZAKSolar Team" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Why Join ZAKSolar?</h2>
            <p className="text-lg text-muted-foreground">
              We offer more than just a job. Join us and be part of a mission to transform Pakistan's energy landscape.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Meaningful Work</h3>
              <p className="text-muted-foreground">
                Contribute to a sustainable future by helping reduce Pakistan's carbon footprint and energy dependency.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Growth Opportunities</h3>
              <p className="text-muted-foreground">
                Develop your skills and advance your career in one of the fastest-growing industries in Pakistan.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Collaborative Culture</h3>
              <p className="text-muted-foreground">
                Work with a diverse team of professionals who are passionate about renewable energy and innovation.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Briefcase className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Competitive Benefits</h3>
              <p className="text-muted-foreground">
                Enjoy competitive salaries, health insurance, professional development, and work-life balance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section id="open-positions" className="py-16 md:py-24 bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Open Positions</h2>
            <p className="text-lg text-muted-foreground">
              Explore current job openings and find the perfect role for your skills and interests.
            </p>
          </div>

          <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-5 max-w-2xl mx-auto mb-8">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="engineering">Engineering</TabsTrigger>
              <TabsTrigger value="operations">Operations</TabsTrigger>
              <TabsTrigger value="sales">Sales</TabsTrigger>
              <TabsTrigger value="marketing">Marketing</TabsTrigger>
            </TabsList>

            <TabsContent value={activeTab} className="mt-0">
              <div className="space-y-6">
                {filteredJobs.length > 0 ? (
                  filteredJobs.map((job) => (
                    <div key={job.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
                      <div
                        className="p-6 cursor-pointer flex justify-between items-center"
                        onClick={() => toggleJobExpand(job.id)}
                      >
                        <div>
                          <h3 className="text-xl font-bold">{job.title}</h3>
                          <div className="flex flex-wrap gap-2 mt-2">
                            <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">
                              {job.department}
                            </span>
                            <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">
                              {job.location}
                            </span>
                            <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">{job.type}</span>
                          </div>
                        </div>
                        <div>
                          {job.isExpanded ? (
                            <ChevronUp className="h-5 w-5 text-gray-500" />
                          ) : (
                            <ChevronDown className="h-5 w-5 text-gray-500" />
                          )}
                        </div>
                      </div>

                      {job.isExpanded && (
                        <div className="p-6 pt-0 border-t">
                          <p className="text-muted-foreground mb-6">{job.description}</p>

                          <div className="mb-6">
                            <h4 className="font-semibold mb-2">Responsibilities:</h4>
                            <ul className="list-disc pl-5 space-y-1">
                              {job.responsibilities.map((item, index) => (
                                <li key={index} className="text-muted-foreground">
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="mb-6">
                            <h4 className="font-semibold mb-2">Requirements:</h4>
                            <ul className="list-disc pl-5 space-y-1">
                              {job.requirements.map((item, index) => (
                                <li key={index} className="text-muted-foreground">
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <Button asChild>
                            <a href="#apply-now">Apply Now</a>
                          </Button>
                        </div>
                      )}
                    </div>
                  ))
                ) : (
                  <div className="text-center py-12">
                    <p className="text-muted-foreground">No positions available in this category at the moment.</p>
                  </div>
                )}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Application Form Section */}
      <section id="apply-now" className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Apply Now</h2>
              <p className="text-lg text-muted-foreground">
                Interested in joining our team? Fill out the form below to apply for a position.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              {isSuccess ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-green-500 mx-auto mb-4"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  <h3 className="text-xl font-semibold mb-2">Application Submitted!</h3>
                  <p className="text-muted-foreground">
                    Thank you for your interest in joining ZAKSolar. We'll review your application and get back to you
                    soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" name="name" value={formData.name} onChange={handleInputChange} required />
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
                      <Input id="phone" name="phone" value={formData.phone} onChange={handleInputChange} required />
                    </div>
                    <div>
                      <Label htmlFor="position">Position Applying For</Label>
                      <Input
                        id="position"
                        name="position"
                        value={formData.position}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message">Cover Letter / Additional Information</Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us why you're interested in this position and what makes you a good fit."
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="resume">Upload Resume (PDF, DOC, DOCX)</Label>
                    <Input
                      id="resume"
                      name="resume"
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                      required
                      className="mt-1"
                    />
                    <p className="text-sm text-muted-foreground mt-1">Maximum file size: 5MB</p>
                  </div>

                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Submitting Application...
                      </>
                    ) : (
                      "Submit Application"
                    )}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Don't See the Right Position?</h2>
          <p className="text-primary-foreground/80 max-w-[600px] mx-auto mb-8">
            We're always looking for talented individuals to join our team. Send us your resume and we'll keep it on
            file for future opportunities.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

