import React from 'react'
import { Allchart, SpendingCharts } from '../components/index'
import { Outlet } from 'react-router-dom'
import DashboardNav from './DashboardNav'

function Dashboard() {
  return (
   <div className="min-h-screen bg-slate-50 px-4 py-8 sm:px-6 lg:px-8">
  <div className="mx-auto max-w-7xl space-y-8">

    {/* Dashboard Header */}
    <div>
      <h1 className="text-3xl font-bold text-gray-900">
        Finance Dashboard
      </h1>
      <p className="mt-2 text-sm text-gray-500">
        Track your income, expenses, and financial progress.
      </p>
    </div>

    {/* Main Chart */}
    <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm sm:p-6">
      <Allchart />
    </div>

    {/* Spending Analysis */}
    <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm sm:p-6">
      <h2 className="mb-5 text-xl font-semibold text-gray-900">
        Spending Analysis
      </h2>
      <SpendingCharts />
    </div>

    {/* Navigation */}
    <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm sm:p-6">
      <DashboardNav />
    </div>

    {/* Nested Routes */}
    <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm sm:p-6">
      <Outlet />
    </div>

  </div>
</div>
  )
}

export default Dashboard