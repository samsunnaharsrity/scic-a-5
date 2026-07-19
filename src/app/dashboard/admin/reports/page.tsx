"use client";

import {
  FileText,
  Download,
  BarChart3,
  Users,
  DollarSign,
  CalendarDays,
} from "lucide-react";

export default function ReportsPage() {
  return (
    <div className="space-y-8">

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Reports
          </h1>

          <p className="text-gray-500 mt-2">
            Generate and manage your business reports easily.
          </p>
        </div>


        <button
          className="
          flex items-center gap-2
          px-5 py-3
          rounded-xl
          bg-black text-white
          hover:bg-gray-800
          transition
          shadow-lg
          "
        >
          <FileText size={20} />
          Generate Report
        </button>
      </div>



      {/* Report Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">


        <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow border">
          <div className="flex justify-between">
            <h3 className="text-gray-500">
              Total Reports
            </h3>

            <FileText className="text-blue-500"/>
          </div>

          <h2 className="text-3xl font-bold mt-4">
            128
          </h2>
        </div>



        <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow border">
          <div className="flex justify-between">
            <h3 className="text-gray-500">
              Users
            </h3>

            <Users className="text-green-500"/>
          </div>

          <h2 className="text-3xl font-bold mt-4">
            5,240
          </h2>
        </div>



        <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow border">
          <div className="flex justify-between">
            <h3 className="text-gray-500">
              Revenue
            </h3>

            <DollarSign className="text-yellow-500"/>
          </div>

          <h2 className="text-3xl font-bold mt-4">
            $24.5K
          </h2>
        </div>



        <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow border">
          <div className="flex justify-between">
            <h3 className="text-gray-500">
              This Month
            </h3>

            <CalendarDays className="text-purple-500"/>
          </div>

          <h2 className="text-3xl font-bold mt-4">
            32
          </h2>
        </div>


      </div>




      {/* Report Types */}

      <div className="grid md:grid-cols-3 gap-6">


        <div className="p-6 bg-white dark:bg-gray-900 rounded-2xl shadow border">
          
          <BarChart3 className="text-blue-600 mb-4"/>

          <h2 className="font-semibold text-xl">
            Analytics Report
          </h2>

          <p className="text-gray-500 mt-2">
            View traffic, performance and growth analytics.
          </p>

          <button className="mt-5 flex items-center gap-2 text-sm font-medium">
            <Download size={16}/>
            Download
          </button>

        </div>



        <div className="p-6 bg-white dark:bg-gray-900 rounded-2xl shadow border">

          <Users className="text-green-600 mb-4"/>

          <h2 className="font-semibold text-xl">
            User Report
          </h2>

          <p className="text-gray-500 mt-2">
            Analyze user activity and engagement.
          </p>

          <button className="mt-5 flex items-center gap-2 text-sm font-medium">
            <Download size={16}/>
            Download
          </button>

        </div>




        <div className="p-6 bg-white dark:bg-gray-900 rounded-2xl shadow border">

          <DollarSign className="text-yellow-600 mb-4"/>

          <h2 className="font-semibold text-xl">
            Revenue Report
          </h2>

          <p className="text-gray-500 mt-2">
            Track income, payments and transactions.
          </p>

          <button className="mt-5 flex items-center gap-2 text-sm font-medium">
            <Download size={16}/>
            Download
          </button>

        </div>


      </div>





      {/* Recent Reports */}

      <div className="bg-white dark:bg-gray-900 rounded-2xl shadow border overflow-hidden">

        <div className="p-6 border-b">
          <h2 className="text-xl font-semibold">
            Recent Reports
          </h2>
        </div>


        <table className="w-full text-left">

          <thead className="bg-gray-50 dark:bg-gray-800">
            <tr>
              <th className="p-4">
                Report
              </th>

              <th className="p-4">
                Date
              </th>

              <th className="p-4">
                Status
              </th>
            </tr>
          </thead>


          <tbody>

            <tr className="border-t">
              <td className="p-4">
                Monthly Analytics
              </td>

              <td className="p-4 text-gray-500">
                July 19, 2026
              </td>

              <td className="p-4">
                <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm">
                  Completed
                </span>
              </td>
            </tr>


            <tr className="border-t">
              <td className="p-4">
                User Activity
              </td>

              <td className="p-4 text-gray-500">
                July 15, 2026
              </td>

              <td className="p-4">
                <span className="px-3 py-1 rounded-full bg-yellow-100 text-yellow-700 text-sm">
                  Processing
                </span>
              </td>
            </tr>


          </tbody>

        </table>


      </div>


    </div>
  );
}