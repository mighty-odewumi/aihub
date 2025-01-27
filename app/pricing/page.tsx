export default function PricingPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-3xl font-bold text-gray-900">Pricing Plans</h1>
        <p className="mt-4 text-lg text-gray-600">
          Choose the perfect plan for your needs. All plans include access to our core features.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
        {/* Free Plan */}
        <div className="rounded-lg border border-gray-200 bg-white p-8 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900">Free</h3>
          <p className="mt-4 text-sm text-gray-600">Perfect for getting started</p>
          <p className="mt-4 text-4xl font-bold text-gray-900">$0</p>
          <p className="mt-2 text-sm text-gray-600">Free forever</p>
          <ul className="mt-8 space-y-4">
            <li className="flex items-center text-sm text-gray-600">
              <span>✓</span>
              <span className="ml-3">Basic tool listings</span>
            </li>
            <li className="flex items-center text-sm text-gray-600">
              <span>✓</span>
              <span className="ml-3">Search functionality</span>
            </li>
            <li className="flex items-center text-sm text-gray-600">
              <span>✓</span>
              <span className="ml-3">Community access</span>
            </li>
          </ul>
        </div>

        {/* Pro Plan */}
        <div className="rounded-lg border border-blue-500 bg-white p-8 shadow-sm relative">
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
            <span className="bg-blue-500 text-white px-3 py-1 text-sm rounded-full">Popular</span>
          </div>
          <h3 className="text-lg font-semibold text-gray-900">Pro</h3>
          <p className="mt-4 text-sm text-gray-600">For growing businesses</p>
          <p className="mt-4 text-4xl font-bold text-gray-900">$29</p>
          <p className="mt-2 text-sm text-gray-600">per month</p>
          <ul className="mt-8 space-y-4">
            <li className="flex items-center text-sm text-gray-600">
              <span>✓</span>
              <span className="ml-3">Everything in Free</span>
            </li>
            <li className="flex items-center text-sm text-gray-600">
              <span>✓</span>
              <span className="ml-3">Priority support</span>
            </li>
            <li className="flex items-center text-sm text-gray-600">
              <span>✓</span>
              <span className="ml-3">Advanced analytics</span>
            </li>
          </ul>
        </div>

        {/* Enterprise Plan */}
        <div className="rounded-lg border border-gray-200 bg-white p-8 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900">Enterprise</h3>
          <p className="mt-4 text-sm text-gray-600">For large organizations</p>
          <p className="mt-4 text-4xl font-bold text-gray-900">Custom</p>
          <p className="mt-2 text-sm text-gray-600">Contact us for pricing</p>
          <ul className="mt-8 space-y-4">
            <li className="flex items-center text-sm text-gray-600">
              <span>✓</span>
              <span className="ml-3">Everything in Pro</span>
            </li>
            <li className="flex items-center text-sm text-gray-600">
              <span>✓</span>
              <span className="ml-3">Custom integrations</span>
            </li>
            <li className="flex items-center text-sm text-gray-600">
              <span>✓</span>
              <span className="ml-3">Dedicated support</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
