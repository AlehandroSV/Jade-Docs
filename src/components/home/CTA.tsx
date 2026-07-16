import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function CTA() {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="relative rounded-3xl border border-zinc-800 bg-gradient-to-br from-zinc-900 to-zinc-900/50 p-12 sm:p-16 text-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent" />
          
          <div className="relative">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              Ready to build?
            </h2>
            <p className="text-zinc-400 text-lg mb-8 max-w-xl mx-auto">
              Get started with Jade in minutes. Install via LuaRocks and get building.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/docs"
                className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-3 rounded-xl font-medium transition"
              >
                Read the Docs
                <ArrowRight className="w-4 h-4" />
              </Link>
              <code className="text-zinc-400 text-sm bg-zinc-800 px-4 py-2 rounded-lg">
                luarocks install jade
              </code>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
