import Image from "next/image"
import Link from "next/link"
import { Calendar, User, ArrowLeft, Facebook, Twitter, Linkedin } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  // This would normally fetch the blog post data based on the slug
  const post = {
    title: "The Future of Solar Energy in Pakistan: Opportunities and Challenges",
    date: "March 10, 2025",
    author: "Ahmed Khan",
    content: `
      <p>Pakistan has immense solar potential with over 300 sunny days per year. This article explores the growing solar industry in Pakistan, government initiatives, and the challenges that need to be addressed to fully harness this renewable energy source.</p>
      
      <h2>Solar Potential in Pakistan</h2>
      <p>Pakistan is blessed with abundant solar resources, receiving some of the highest solar irradiation in the world. The country receives an average of 5-7 kWh/m² of solar energy per day across much of its territory, making it an ideal location for solar power generation.</p>
      
      <p>The southern regions, particularly Balochistan and Sindh, receive the highest solar radiation, making them prime locations for large-scale solar installations. Even the northern areas, despite their mountainous terrain, receive sufficient sunlight for viable solar energy production.</p>
      
      <h2>Government Initiatives</h2>
      <p>In recent years, the Pakistani government has taken several steps to promote renewable energy, including solar power:</p>
      
      <ul>
        <li>The Alternative Energy Development Board (AEDB) was established to facilitate and promote renewable energy projects.</li>
        <li>The National Electric Power Regulatory Authority (NEPRA) introduced net metering regulations, allowing solar system owners to sell excess electricity back to the grid.</li>
        <li>Tax incentives and import duty exemptions for solar equipment have been implemented to reduce the cost of solar installations.</li>
        <li>The government has set a target of generating 30% of its electricity from renewable sources by 2030.</li>
      </ul>
      
      <h2>Challenges</h2>
      <p>Despite the significant potential and government initiatives, several challenges hinder the widespread adoption of solar energy in Pakistan:</p>
      
      <ul>
        <li>Initial Cost: The upfront cost of solar installations remains a significant barrier for many households and businesses, despite long-term savings.</li>
        <li>Lack of Awareness: Many people are still unaware of the benefits and potential of solar energy.</li>
        <li>Technical Expertise: There is a shortage of skilled professionals for installation and maintenance of solar systems.</li>
        <li>Grid Integration: The existing power grid infrastructure needs upgrades to effectively integrate variable renewable energy sources.</li>
        <li>Financing Options: Limited financing options and high interest rates make it difficult for many to invest in solar systems.</li>
      </ul>
      
      <h2>Opportunities</h2>
      <p>Despite these challenges, the solar energy sector in Pakistan presents numerous opportunities:</p>
      
      <ul>
        <li>Energy Independence: Solar power can help reduce Pakistan's dependence on imported fossil fuels, improving energy security.</li>
        <li>Rural Electrification: Off-grid solar solutions can bring electricity to remote areas not connected to the national grid.</li>
        <li>Job Creation: The growing solar industry can create thousands of jobs in manufacturing, installation, and maintenance.</li>
        <li>Environmental Benefits: Solar energy can help reduce air pollution and greenhouse gas emissions, contributing to a cleaner environment.</li>
        <li>Economic Growth: The solar industry can stimulate economic growth through investment, innovation, and reduced energy costs.</li>
      </ul>
      
      <h2>The Future Outlook</h2>
      <p>The future of solar energy in Pakistan looks promising. As technology advances and costs continue to decrease, solar power is becoming increasingly competitive with conventional energy sources. With the right policies, investments, and public awareness, Pakistan can harness its abundant solar resources to address its energy challenges and build a sustainable energy future.</p>
      
      <p>At ZAKSolar, we are committed to being at the forefront of this solar revolution, providing high-quality solar solutions to homes, businesses, and industries across Pakistan. Together, we can build a cleaner, more sustainable energy future for our country.</p>
    `,
    categories: ["Industry News", "Sustainability"],
    relatedPosts: [
      {
        title: "Understanding Solar Battery Storage Options",
        slug: "solar-battery-storage-guide",
        image: "/placeholder.svg?height=200&width=300",
      },
      {
        title: "Calculating ROI for Your Solar Investment",
        slug: "solar-roi-calculation",
        image: "/placeholder.svg?height=200&width=300",
      },
      {
        title: "5 Tips for Maintaining Your Solar Panels",
        slug: "solar-panel-maintenance-tips",
        image: "/placeholder.svg?height=200&width=300",
      },
    ],
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Header */}
      <div className="bg-primary/10 py-12 md:py-20">
        <div className="container">
          <Link href="/blog" className="inline-flex items-center text-primary mb-6 hover:underline">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
            <div className="flex items-center gap-4 text-muted-foreground">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                {post.date}
              </div>
              <div className="flex items-center">
                <User className="h-4 w-4 mr-1" />
                {post.author}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="aspect-video relative mb-8">
                <Image
                  src="/placeholder.svg?height=400&width=800"
                  alt={post.title}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>

              <article className="prose prose-lg max-w-none">
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
              </article>

              {/* Share Section */}
              <div className="mt-12 pt-8 border-t">
                <h3 className="font-semibold mb-4">Share this article</h3>
                <div className="flex gap-4">
                  <Button variant="outline" size="icon">
                    <Facebook className="h-5 w-5" />
                    <span className="sr-only">Share on Facebook</span>
                  </Button>
                  <Button variant="outline" size="icon">
                    <Twitter className="h-5 w-5" />
                    <span className="sr-only">Share on Twitter</span>
                  </Button>
                  <Button variant="outline" size="icon">
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">Share on LinkedIn</span>
                  </Button>
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              {/* Categories */}
              <div className="mb-8">
                <h3 className="font-semibold mb-4">Categories</h3>
                <div className="flex flex-wrap gap-2">
                  {post.categories.map((category) => (
                    <Link
                      key={category}
                      href={`/blog/category/${category.toLowerCase().replace(/\s+/g, "-")}`}
                      className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm hover:bg-primary/20"
                    >
                      {category}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Related Posts */}
              <div>
                <h3 className="font-semibold mb-4">Related Articles</h3>
                <div className="space-y-6">
                  {post.relatedPosts.map((relatedPost) => (
                    <Link key={relatedPost.slug} href={`/blog/${relatedPost.slug}`} className="flex gap-4 group">
                      <div className="w-20 h-20 relative flex-shrink-0">
                        <Image
                          src={relatedPost.image || "/placeholder.svg"}
                          alt={relatedPost.title}
                          fill
                          className="object-cover rounded-md"
                        />
                      </div>
                      <div>
                        <h4 className="font-medium group-hover:text-primary transition-colors">{relatedPost.title}</h4>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
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

