"use client"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Package, CreditCard, Settings, LogOut } from "lucide-react"

export default function AccountPage() {
  const router = useRouter()

  return (
    <div className="container py-16">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold">My Account</h1>
          <p className="text-muted-foreground">Welcome back, Guest User</p>
        </div>
        <Button variant="outline" onClick={() => router.push("/")}>
          <LogOut className="mr-2 h-4 w-4" />
          Sign Out
        </Button>
      </div>

      <Tabs defaultValue="orders">
        <TabsList className="grid w-full grid-cols-3 max-w-md">
          <TabsTrigger value="orders">Orders</TabsTrigger>
          <TabsTrigger value="payment">Payment</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>

        <TabsContent value="orders" className="mt-6">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold">My Orders</h2>
              <Button variant="outline" size="sm">
                View All
              </Button>
            </div>

            <div className="text-center py-8">
              <Package className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
              <h3 className="text-lg font-medium mb-2">No orders yet</h3>
              <p className="text-muted-foreground mb-4">
                You haven't placed any orders yet. Start shopping to see your orders here.
              </p>
              <Button onClick={() => router.push("/shop")}>Browse Products</Button>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="payment" className="mt-6">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold">Payment Methods</h2>
              <Button variant="outline" size="sm">
                Add New
              </Button>
            </div>

            <div className="text-center py-8">
              <CreditCard className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
              <h3 className="text-lg font-medium mb-2">No payment methods</h3>
              <p className="text-muted-foreground mb-4">You haven't added any payment methods yet.</p>
              <Button>Add Payment Method</Button>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="settings" className="mt-6">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-bold mb-6">Account Settings</h2>

            <div className="space-y-6">
              <div>
                <h3 className="font-medium mb-2">Personal Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm text-muted-foreground">Name</label>
                    <p>Guest User</p>
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground">Email</label>
                    <p>guest@example.com</p>
                  </div>
                </div>
              </div>

              <div className="border-t pt-6">
                <h3 className="font-medium mb-2">Preferences</h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input type="checkbox" id="emailNotifications" className="mr-2" />
                    <label htmlFor="emailNotifications">Receive email notifications</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="smsNotifications" className="mr-2" />
                    <label htmlFor="smsNotifications">Receive SMS notifications</label>
                  </div>
                </div>
              </div>

              <div className="border-t pt-6">
                <Button>
                  <Settings className="mr-2 h-4 w-4" />
                  Update Settings
                </Button>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

