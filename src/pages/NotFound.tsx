import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
      <h1 className="text-6xl font-bold text-emerald-500 mb-4">404</h1>
      <p className="text-xl text-slate-400 mb-8">Page not found</p>
      <Link
        to="/"
        className="inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-medium transition"
      >
        Go Home
      </Link>
    </div>
  )
}
