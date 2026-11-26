import React from 'react'
import { Link } from "react-router-dom";
function Header() {
  const navList=[
    {
      name:"dashboard",
      slug:'/dashboard'
    },
    {
      name:"aboutUs",
      slug:'/aboutUs'
    }
  ]
  return (
   <div className="w-full bg-white shadow-sm border-b border-gray-200">
  <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

    <div>
      <Link
        to="/"
        className="text-2xl font-bold text-blue-600 tracking-tight"
      >
        Manage Finance
      </Link>
    </div>

    <div className="flex items-center gap-8">
      {navList.map((item) => (
        <Link
          to={item.slug}
          key={item.name}
          className="text-gray-600 font-medium hover:text-blue-600 transition-colors duration-200"
        >
          {item.name}
        </Link>
      ))}
    </div>

  </nav>
</div>
  )
}

export default Header