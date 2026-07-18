export default function Subscription() {
  return (
    <div className="space-y-6">

      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          My Subscription
        </h1>

        <p className="mt-2 text-gray-500 dark:text-gray-400">
          Manage your current plan and upgrade your AI capabilities.
        </p>
      </div>


      {/* Subscription Card */}
      <div className="relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-8 shadow-sm dark:border-gray-800 dark:bg-gray-900">


        {/* Premium Badge */}
        <div className="absolute right-6 top-6">
          <span className="rounded-full bg-green-100 px-4 py-1 text-sm font-semibold text-green-700 dark:bg-green-900/30 dark:text-green-400">
            Active
          </span>
        </div>


        {/* Plan Info */}
        <div>

          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Pro Plan
          </h2>

          <p className="mt-2 text-gray-500 dark:text-gray-400">
            Perfect for growing teams and advanced AI workflows.
          </p>


          {/* Price */}
          <div className="mt-5 flex items-end gap-2">

            <span className="text-4xl font-bold text-gray-900 dark:text-white">
              $9.99
            </span>

            <span className="mb-1 text-gray-500">
              /month
            </span>

          </div>


        </div>



        {/* Features */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2">


          {[
            "10 AI Agents",
            "Unlimited AI Chat",
            "Advanced Analytics",
            "Priority Support",
          ].map((feature)=>(
            <div
              key={feature}
              className="flex items-center gap-3 rounded-xl bg-gray-50 p-4 dark:bg-gray-800"
            >

              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-green-100 text-green-600 dark:bg-green-900/40">
                ✓
              </div>

              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                {feature}
              </span>

            </div>
          ))}


        </div>



        {/* Actions */}
        <div className="mt-8 flex flex-wrap gap-4">


          <button
            className="rounded-xl bg-primary px-6 py-3 font-semibold text-white transition hover:opacity-90"
          >
            Upgrade Plan
          </button>


          <button
            className="rounded-xl border border-gray-300 px-6 py-3 font-semibold text-gray-700 transition hover:bg-gray-100 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800"
          >
            Manage Billing
          </button>


        </div>


      </div>



      {/* Upgrade Suggestion */}
      <div className="rounded-2xl border border-purple-200 bg-purple-50 p-6 dark:border-purple-900 dark:bg-purple-950/30">

        <h3 className="text-lg font-semibold text-purple-900 dark:text-purple-300">
          Need more AI power?
        </h3>

        <p className="mt-2 text-sm text-purple-700 dark:text-purple-400">
          Upgrade to Premium and unlock unlimited AI agents,
          automation tools and advanced features.
        </p>

      </div>


    </div>
  );
}