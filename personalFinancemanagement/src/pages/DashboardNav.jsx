import React from 'react'
import { Link } from 'react-router-dom'

function DashboardNav() {
  const navElement=[
    {
      name:'income',
      slug:'income',
      status:"active"
    },{
      name:'expense',
      slug:"expense",
      status:"active"
    }
  ]
  
  return (
   <div className="w-full">
  <div className="mb-5">
    <h2 className="text-xl font-bold text-gray-900">
      Dashboard Navigation
    </h2>
    <p className="mt-1 text-sm text-gray-500">
      Manage your income and expenses.
    </p>
  </div>

  <div className="flex flex-wrap gap-3">
    {
      navElement.map((item) => {
        return (
          <Link
            key={item.name}
            to={item.slug}
            className="rounded-xl border border-blue-100 bg-blue-50 px-6 py-3 text-sm font-semibold capitalize text-blue-700 transition-colors duration-200 hover:border-blue-600 hover:bg-blue-600 hover:text-white"
          >
            {item.name}
          </Link>
        )
      })
    }
  </div>
</div>
  )
}

export default DashboardNav