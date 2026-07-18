export default function Billing() {
  const invoices = [
    {
      id: 1,
      date: "July 2026",
      plan: "Premium Plan",
      amount: "$19.99",
      status: "Paid",
    },
    {
      id: 2,
      date: "June 2026",
      plan: "Premium Plan",
      amount: "$19.99",
      status: "Paid",
    },
    {
      id: 3,
      date: "May 2026",
      plan: "Pro Plan",
      amount: "$9.99",
      status: "Paid",
    },
  ];

  return (
    <div className="space-y-6">

      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Billing History
        </h1>

        <p className="mt-2 text-gray-500 dark:text-gray-400">
          View your subscription payments and invoices.
        </p>
      </div>


      {/* Billing Card */}
      <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900">

        <div className="overflow-x-auto">

          <table className="w-full text-left">

            <thead className="border-b bg-gray-50 dark:border-gray-800 dark:bg-gray-800/50">

              <tr>
                <th className="px-6 py-4 text-sm font-semibold">
                  Date
                </th>

                <th className="px-6 py-4 text-sm font-semibold">
                  Plan
                </th>

                <th className="px-6 py-4 text-sm font-semibold">
                  Amount
                </th>

                <th className="px-6 py-4 text-sm font-semibold">
                  Status
                </th>

                <th className="px-6 py-4 text-sm font-semibold">
                  Invoice
                </th>

              </tr>

            </thead>


            <tbody>

              {invoices.map((invoice)=>(
                <tr
                  key={invoice.id}
                  className="border-b last:border-none hover:bg-gray-50 dark:border-gray-800 dark:hover:bg-gray-800/40"
                >

                  <td className="px-6 py-4 text-sm">
                    {invoice.date}
                  </td>


                  <td className="px-6 py-4 text-sm font-medium">
                    {invoice.plan}
                  </td>


                  <td className="px-6 py-4 text-sm font-semibold">
                    {invoice.amount}
                  </td>


                  <td className="px-6 py-4">

                    <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700 dark:bg-green-900/30 dark:text-green-400">
                      {invoice.status}
                    </span>

                  </td>


                  <td className="px-6 py-4">

                    <button className="rounded-lg border px-3 py-1 text-sm font-medium transition hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800">
                      Download
                    </button>

                  </td>


                </tr>
              ))}


            </tbody>

          </table>

        </div>

      </div>


      {/* Current Plan */}
      <div className="rounded-2xl border border-blue-200 bg-blue-50 p-6 dark:border-blue-900 dark:bg-blue-950/30">

        <h2 className="text-lg font-semibold text-blue-900 dark:text-blue-300">
          Current Subscription
        </h2>

        <p className="mt-2 text-sm text-blue-700 dark:text-blue-400">
          You are currently subscribed to the Premium Plan.
          Your next billing date is August 2026.
        </p>

      </div>


    </div>
  );
}