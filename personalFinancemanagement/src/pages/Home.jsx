import { Link } from 'react-router-dom'

function Home() {
  return (
    <section className="min-h-[75vh] flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-indigo-50 px-6">

      <div className="max-w-3xl mx-auto text-center">

        <span className="inline-block px-4 py-2 mb-6 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold">
          Smart Personal Finance Management
        </span>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight tracking-tight">
          Take Control of Your
          <span className="block text-blue-600 mt-2">
            Financial Future
          </span>
        </h1>

        <p className="mt-6 text-gray-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
          Track your income, manage expenses, and understand your spending
          habits with a simple and powerful personal finance dashboard.
          Make smarter financial decisions every day.
        </p>

        <div className="mt-10">
          <Link
            to="/dashboard"
            className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-semibold text-lg rounded-xl shadow-lg shadow-blue-200 hover:bg-blue-700 hover:shadow-xl transition-all duration-200"
          >
            Manage Finance
            <span className="ml-3 text-xl">→</span>
          </Link>
        </div>

        <p className="mt-5 text-sm text-gray-400">
          Your money. Your decisions. Your future.
        </p>

      </div>
    </section>
  )
}

export default Home