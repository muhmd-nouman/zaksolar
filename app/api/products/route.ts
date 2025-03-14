import { NextResponse } from "next/server"

// Mock product data
const products = [
  {
    id: "1",
    name: "400W Monocrystalline Solar Panel",
    price: 45000,
    image: "/placeholder.svg?height=400&width=400",
    description: "High-efficiency A-grade monocrystalline solar panel with 25-year performance warranty.",
    category: "solar-panels",
    inStock: true,
    featured: true,
  },
  {
    id: "2",
    name: "5kW Hybrid Inverter",
    price: 120000,
    image: "/placeholder.svg?height=400&width=400",
    description: "On/off-grid capability with battery support for maximum flexibility.",
    category: "inverters",
    inStock: true,
    featured: true,
  },
  {
    id: "3",
    name: "Lithium Battery 48V 100Ah",
    price: 180000,
    image: "/placeholder.svg?height=400&width=400",
    description: "Long-life lithium battery for solar storage with 10-year warranty.",
    category: "batteries",
    inStock: true,
    featured: true,
  },
  {
    id: "4",
    name: "Solar Mounting Structure",
    price: 15000,
    image: "/placeholder.svg?height=400&width=400",
    description: "Durable aluminum mounting system for secure panel installation.",
    category: "mounting-systems",
    inStock: true,
    featured: false,
  },
  {
    id: "5",
    name: "3kW Off-Grid Inverter",
    price: 75000,
    image: "/placeholder.svg?height=400&width=400",
    description: "Pure sine wave inverter for off-grid systems with battery charging capability.",
    category: "inverters",
    inStock: true,
    featured: false,
  },
  {
    id: "6",
    name: "Solar Charge Controller 60A",
    price: 25000,
    image: "/placeholder.svg?height=400&width=400",
    description: "MPPT technology for maximum efficiency and battery protection.",
    category: "accessories",
    inStock: true,
    featured: true,
  },
]

export async function GET(request: Request) {
  // Get URL parameters
  const { searchParams } = new URL(request.url)
  const category = searchParams.get("category")
  const featured = searchParams.get("featured")

  let filteredProducts = [...products]

  // Filter by category if provided
  if (category) {
    filteredProducts = filteredProducts.filter((product) => product.category === category)
  }

  // Filter featured products if requested
  if (featured === "true") {
    filteredProducts = filteredProducts.filter((product) => product.featured)
  }

  return NextResponse.json(filteredProducts)
}

