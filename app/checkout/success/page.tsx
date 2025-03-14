"use client"

import React from "react"
import { CheckCircle, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

export default function CheckoutSuccessPage() {
  const router = useRouter()
  const orderNumber = React.useMemo(() => Math.floor(100000 + Math.random() * 900000), [])

  return (
    <div className="container py-16 text-center">
      <div className="max-w-md mx-auto">
        <div className="bg-green-100 p-6 rounded-full w-24 h-24 mx-auto mb-6 flex items-center justify-center">
          <CheckCircle className="h-12 w-12 text-green-600" />
        </div>
        <h1 className="text-2xl font-bold mb-4">Order Placed Successfully!</h1>
        <p className="text-muted-foreground mb-2">
          Thank you for your purchase. Your order has been received and is being processed.
        </p>
        <p className="font-medium mb-8">
          Order Number: <span className="text-primary">{orderNumber}</span>
        </p>

        <div className="bg-gray-50 p-6 rounded-lg mb-8">
          <h2 className="font-bold mb-4">What happens next?</h2>
          <ol className="text-left space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <span className="bg-primary/10 text-primary font-bold rounded-full w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">
                1
              </span>
              <span>You will receive an order confirmation email with details of your purchase.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="bg-primary/10 text-primary font-bold rounded-full w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">
                2
              </span>
              <span>Our team will prepare your order and arrange for delivery or installation as applicable.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="bg-primary/10 text-primary font-bold rounded-full w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">
                3
              </span>
              <span>You will receive updates on your order status via email and SMS.</span>
            </li>
          </ol>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button onClick={() => router.push("/shop")}>
            <ShoppingBag className="mr-2 h-4 w-4" />
            Continue Shopping
          </Button>
          <Button variant="outline" onClick={() => router.push("/account/orders")}>
            View Order
          </Button>
        </div>
      </div>
    </div>
  )
}

