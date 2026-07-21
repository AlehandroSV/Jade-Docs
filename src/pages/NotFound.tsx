import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-8xl font-bold text-emerald-500 mb-4">404</h1>
        <p className="text-xl text-zinc-500 dark:text-zinc-400 mb-8">Page not found</p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-3 rounded-xl font-medium transition"
        >
          Go Home
        </Link>
      </div>
    </div>
  )
}
