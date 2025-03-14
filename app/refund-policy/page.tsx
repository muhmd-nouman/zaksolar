export default function RefundPolicyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Header */}
      <div className="bg-primary/10 py-12">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Refund Policy</h1>
            <p className="text-lg text-muted-foreground">Last updated: March 10, 2025</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <section className="py-12">
        <div className="container">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <p>
              At ZAKSolar, we strive to ensure your complete satisfaction with our products and services. This Refund
              Policy outlines our procedures for returns, exchanges, and refunds.
            </p>

            <h2>Product Returns</h2>
            <p>
              You may return unopened, undamaged products within 14 days of delivery for a full refund or exchange,
              subject to the following conditions:
            </p>
            <ul>
              <li>The product must be in its original packaging</li>
              <li>All accessories, manuals, and free items included with the product must be returned</li>
              <li>The product must not show signs of use or damage</li>
              <li>You must provide proof of purchase (invoice or receipt)</li>
            </ul>

            <h2>Non-Returnable Items</h2>
            <p>The following items cannot be returned unless they are defective:</p>
            <ul>
              <li>Custom-ordered or specially manufactured products</li>
              <li>Products that have been installed or used</li>
              <li>Products with broken seals or missing parts</li>
              <li>Software or digital products that have been downloaded or activated</li>
              <li>Products marked as non-returnable at the time of purchase</li>
            </ul>

            <h2>Defective Products</h2>
            <p>
              If you receive a defective product, please contact us within 7 days of delivery. We will arrange for
              inspection, repair, replacement, or refund, depending on the nature of the defect and the manufacturer's
              warranty policy.
            </p>

            <h2>Installation Services</h2>
            <p>For installation services:</p>
            <ul>
              <li>Cancellation before work begins: Full refund minus any pre-installation assessment fees</li>
              <li>Cancellation after work has begun: No refund for labor or materials already used</li>
              <li>
                Unsatisfactory installation: We will address any issues with the installation at no additional cost
                within the warranty period
              </li>
            </ul>

            <h2>Refund Process</h2>
            <p>To initiate a return or refund:</p>
            <ol>
              <li>Contact our customer service team at returns@zaksolar.com or call +92 300 1234567</li>
              <li>Provide your order number, the items you wish to return, and the reason for the return</li>
              <li>
                Our team will provide you with a Return Merchandise Authorization (RMA) number and return instructions
              </li>
              <li>Package the items securely with the RMA number clearly marked on the outside of the package</li>
              <li>Ship the items to the address provided in the return instructions</li>
            </ol>

            <h2>Refund Timeframe</h2>
            <p>Once we receive and inspect the returned items, we will process your refund as follows:</p>
            <ul>
              <li>Credit/debit card payments: 5-10 business days for the refund to appear on your statement</li>
              <li>Bank transfers: 3-5 business days after refund approval</li>
              <li>Cash payments: Refund by bank transfer or check within 5 business days</li>
            </ul>

            <h2>Shipping Costs</h2>
            <p>
              Shipping costs for returned items are the responsibility of the customer, except in cases where the
              product is defective or was shipped in error. In such cases, ZAKSolar will reimburse reasonable shipping
              costs with prior approval.
            </p>

            <h2>Exchanges</h2>
            <p>
              If you wish to exchange a product for a different model or specification, please follow the return process
              and place a new order for the desired item. If the exchange is due to a defective product, we will cover
              the shipping costs for both the return and the replacement.
            </p>

            <h2>Cancellation of Orders</h2>
            <p>
              You may cancel an order before it is shipped without any penalty. If the order has already been shipped,
              you will need to follow the return process once you receive the items.
            </p>

            <h2>Contact Us</h2>
            <p>If you have any questions about our Refund Policy, please contact us at:</p>
            <p>
              ZAKSolar
              <br />
              123 Solar Street, Lahore, Pakistan
              <br />
              Email: returns@zaksolar.com
              <br />
              Phone: +92 300 1234567
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

