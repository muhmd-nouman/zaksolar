"use client"
import Image from "next/image"
import { Trash2, Plus, Minus, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/lib/cart-context"
import { useRouter } from "next/navigation"

export default function CartPage() {
  const { cart, updateQuantity, removeFromCart } = useCart()
  const router = useRouter()

  if (cart.items.length === 0) {
    return (
      <div className="container py-16 text-center">
        <div className="max-w-md mx-auto">
          <div className="bg-primary/10 p-6 rounded-full w-24 h-24 mx-auto mb-6 flex items-center justify-center">
            <ShoppingBag className="h-10 w-10 text-primary" />
          </div>
          <h1 className="text-2xl font-bold mb-4">Your cart is empty</h1>
          <p className="text-muted-foreground mb-8">Looks like you haven't added any products to your cart yet.</p>
          <Button onClick={() => router.push("/shop")}>Continue Shopping</Button>
        </div>
      </div>
    )
  }

  return (
    <div className="container py-16">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="hidden md:grid grid-cols-12 gap-4 p-4 border-b text-sm font-medium">
              <div className="col-span-6">Product</div>
              <div className="col-span-2 text-center">Price</div>
              <div className="col-span-2 text-center">Quantity</div>
              <div className="col-span-2 text-center">Total</div>
            </div>

            {cart.items.map((item) => (
              <div key={item.id} className="grid grid-cols-1 md:grid-cols-12 gap-4 p-4 border-b items-center">
                <div className="col-span-6 flex items-center gap-4">
                  <div className="relative h-20 w-20 flex-shrink-0">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      fill
                      className="object-cover rounded-md"
                    />
                  </div>
                  <div>
                    <h3 className="font-medium">{item.name}</h3>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-sm text-red-500 flex items-center mt-1"
                    >
                      <Trash2 className="h-3 w-3 mr-1" />
                      Remove
                    </button>
                  </div>
                </div>

                <div className="col-span-2 text-center">
                  <div className="md:hidden text-sm text-muted-foreground mb-1">Price:</div>₨
                  {item.price.toLocaleString()}
                </div>

                <div className="col-span-2 flex justify-center">
                  <div className="md:hidden text-sm text-muted-foreground mb-1">Quantity:</div>
                  <div className="flex items-center border rounded-md">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="px-2 py-1 text-gray-600 hover:text-gray-800"
                      disabled={item.quantity <= 1}
                    >
                      <Minus className="h-4 w-4" />
                    </button>
                    <span className="px-2 py-1 w-10 text-center">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="px-2 py-1 text-gray-600 hover:text-gray-800"
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                <div className="col-span-2 text-center font-medium">
                  <div className="md:hidden text-sm text-muted-foreground mb-1">Total:</div>₨
                  {(item.price * item.quantity).toLocaleString()}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex justify-between">
            <Button variant="outline" onClick={() => router.push("/shop")}>
              Continue Shopping
            </Button>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-bold mb-4">Order Summary</h2>

            <div className="space-y-3 mb-6">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Subtotal</span>
                <span>₨{cart.subtotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Shipping</span>
                <span>Calculated at checkout</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Tax</span>
                <span>Calculated at checkout</span>
              </div>
              <div className="border-t pt-3 mt-3 flex justify-between font-bold">
                <span>Total</span>
                <span>₨{cart.subtotal.toLocaleString()}</span>
              </div>
            </div>

            <Button className="w-full" size="lg" onClick={() => router.push("/checkout")}>
              Proceed to Checkout
            </Button>

            <div className="mt-6 text-sm text-muted-foreground">
              <p>We accept:</p>
              <div className="flex gap-2 mt-2">
                <div className="bg-gray-100 rounded p-1">
                  <Image src="/placeholder.svg?height=30&width=40" alt="Visa" width={40} height={30} />
                </div>
                <div className="bg-gray-100 rounded p-1">
                  <Image src="/placeholder.svg?height=30&width=40" alt="Mastercard" width={40} height={30} />
                </div>
                <div className="bg-gray-100 rounded p-1">
                  <Image src="/placeholder.svg?height=30&width=40" alt="JazzCash" width={40} height={30} />
                </div>
                <div className="bg-gray-100 rounded p-1">
                  <Image src="/placeholder.svg?height=30&width=40" alt="EasyPaisa" width={40} height={30} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

