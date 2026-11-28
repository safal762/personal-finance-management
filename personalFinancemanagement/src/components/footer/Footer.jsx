import React from 'react'
import { Link } from 'react-router-dom'
function Footer() {
  return (
   <footer className="w-full border-t border-gray-200 bg-white mt-auto">
  <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">

    <div>
      <Link to="/" className="text-lg font-bold text-blue-600">
        Manage Finance
      </Link>
      <p className="text-sm text-gray-500 mt-1">
        Take control of your finances.
      </p>
    </div>

    <div className="flex items-center gap-6">
      <Link
        to="/home"
        className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
      >
        Home
      </Link>


      <Link
        to="/dashboard"
        className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
      >
        Dashboard
      </Link>
    </div>

  </div>

  <div className="border-t border-gray-100">
    <div className="max-w-7xl mx-auto px-6 py-4 text-center">
      <p className="text-xs text-gray-400">
        © {new Date().getFullYear()} Manage Finance. All rights reserved.
      </p>
    </div>
  </div>
</footer>
  )
}

export default Footer