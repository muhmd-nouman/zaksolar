"use client"

import { useEffect } from "react"
import { usePathname, useSearchParams } from "next/navigation"

export function Analytics() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    // This would normally be your analytics tracking code
    // For example, Google Analytics or similar
    const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : "")

    // Example tracking function
    const trackPageView = (url: string) => {
      console.log(`Page view tracked: ${url}`)
      // In a real implementation, you would call your analytics service here
      // Example: window.gtag('config', 'GA-TRACKING-ID', { page_path: url })
    }

    trackPageView(url)
  }, [pathname, searchParams])

  return null
}

