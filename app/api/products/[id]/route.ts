import { NextResponse } from "next/server"

// Mock product data (same as in the products route)
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
    specifications: {
      "Power Output": "400W",
      "Cell Type": "Monocrystalline",
      Efficiency: "21.5%",
      Dimensions: "1722 x 1134 x 35mm",
      Weight: "22.5kg",
      "Operating Temperature": "-40°C to +85°C",
      "Maximum System Voltage": "1000V DC",
    },
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
    specifications: {
      "Power Rating": "5kW",
      "Input Voltage": "48V DC",
      "Output Voltage": "220V AC",
      Dimensions: "650 x 350 x 180mm",
      Weight: "35kg",
      Efficiency: "97%",
      Warranty: "5 years",
    },
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
    specifications: {
      Voltage: "48V",
      Capacity: "100Ah",
      Chemistry: "Lithium Iron Phosphate (LiFePO4)",
      "Cycle Life": "4000+ cycles",
      Dimensions: "520 x 270 x 220mm",
      Weight: "48kg",
      Warranty: "10 years",
    },
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
    specifications: {
      Material: "Anodized Aluminum",
      Compatibility: "All standard solar panels",
      "Wind Resistance": "Up to 150km/h",
      "Installation Type": "Roof or Ground",
      Warranty: "15 years",
    },
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
    specifications: {
      "Power Rating": "3kW",
      "Input Voltage": "24V DC",
      "Output Voltage": "220V AC",
      "Wave Form": "Pure Sine Wave",
      Dimensions: "480 x 320 x 150mm",
      Weight: "28kg",
      Warranty: "3 years",
    },
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
    specifications: {
      "Current Rating": "60A",
      "System Voltage": "12V/24V/48V Auto",
      "Max PV Open Circuit Voltage": "150V",
      Technology: "MPPT",
      Efficiency: "98%",
      Dimensions: "380 x 220 x 120mm",
      Weight: "5.2kg",
    },
  },
]

export async function GET(request: Request, { params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === params.id)

  if (!product) {
    return NextResponse.json({ error: "Product not found" }, { status: 404 })
  }

  return NextResponse.json(product)
}

