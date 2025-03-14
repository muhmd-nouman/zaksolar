import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="container flex flex-col items-center justify-center min-h-[70vh] py-16 text-center">
      <div className="mb-8">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-03-12%20at%204.06.40%E2%80%AFPM-rJN23Xd9T60XPkPGCb72pO221WtQQn.png"
          alt="ZAKSolar Logo"
          width={80}
          height={80}
          className="mx-auto mb-6"
        />
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
        <p className="text-muted-foreground max-w-md mx-auto mb-8">
          The page you are looking for doesn't exist or has been moved. Let's get you back on track.
        </p>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-4">
        <Button asChild size="lg">
          <Link href="/">
            Return Home
          </Link>
        </Button>
        <Button variant="outline" asChild size="lg">
          <Link href="/contact">
            Contact Support
          </Link>
        </Button>
      </div>
      
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-3xl">
        <Link href="/shop" className="p-4 border rounded-lg hover:border-primary hover:bg-primary/5 transition-colors">
          <h3 className="font-medium mb-2">Shop Products</h3>
          <p className="text-sm text-muted-foreground">Browse our selection of solar panels and equipment</p>
        </Link>
        <Link href="/services" className="p-4 border rounded-lg hover:border-primary hover:bg-primary/5 transition-colors">
          <h3 className="font-medium mb-2">Our Services</h3>
          <p className="text-sm text-muted-foreground">Explore our installation and maintenance services</p>
        </Link>
        <Link href="/blog" className="p-4 border rounded-lg hover:border-primary hover:bg-primary/5 transition-colors">
          <h3 className="font-medium mb-2">Solar Blog</h3>
          <p className="text-sm text-muted-foreground">Read the latest news and tips about solar energy</p>
        </Link>
      </div>
    </di
