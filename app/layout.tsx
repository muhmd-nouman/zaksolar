import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Layout } from "@/components/layout"
import { CartProvider } from "@/lib/cart-context"
import { ClerkProvider } from "@clerk/nextjs"
import { Analytics } from "@/components/analytics"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "ZAKSolar - Premium Solar Solutions in Pakistan",
  description:
    "ZAKSolar provides high-quality solar installation services and A-grade solar products for residential, commercial, and industrial needs across Pakistan.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <ClerkProvider>
            <CartProvider>
              <Layout>{children}</Layout>
              <Analytics />
            </CartProvider>
          </ClerkProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'