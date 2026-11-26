import React from 'react'

function AboutUs() {
  return (
    <>
    <h1 className='text-2xl text-center font-bold'>About us</h1>
        <div className="bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-all">
  <div className="text-4xl mb-5">📈</div>
  <h4 className="text-xl font-bold text-gray-900">
    Visual Analytics
  </h4>
  <p className="text-gray-600 mt-4 leading-relaxed">
    Turn your financial records into meaningful charts and visual
    reports. Analyze your spending patterns, compare income and
    expenses, and understand your financial progress.
  </p>
</div>

<div className="bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-all">
  <div className="text-4xl mb-5">🎯</div>
  <h4 className="text-xl font-bold text-gray-900">
    Better Financial Decisions
  </h4>
  <p className="text-gray-600 mt-4 leading-relaxed">
    Make informed financial decisions by understanding your
    spending habits. Identify unnecessary expenses, manage your
    budget, and develop smarter money management habits.
  </p>
</div>

<div className="bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-all">
  <div className="text-4xl mb-5">🗂️</div>
  <h4 className="text-xl font-bold text-gray-900">
    Transaction History
  </h4>
  <p className="text-gray-600 mt-4 leading-relaxed">
    Keep all your financial activities organized in one place.
    Review previous transactions, track your spending history,
    and stay informed about your financial activities.
  </p>
</div>
    </>
  )
}

export default AboutUs