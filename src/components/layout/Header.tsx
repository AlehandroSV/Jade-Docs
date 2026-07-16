import { Link } from 'react-router-dom'
import { Gem } from 'lucide-react'

export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-slate-900/95 backdrop-blur border-b border-slate-800 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <Gem className="w-8 h-8 text-emerald-500" />
            <span className="text-xl font-bold">Jade</span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/docs" className="text-slate-300 hover:text-white transition">
              Docs
            </Link>
            <Link to="/api" className="text-slate-300 hover:text-white transition">
              API
            </Link>
            <Link to="/examples" className="text-slate-300 hover:text-white transition">
              Examples
            </Link>
            <a 
              href="https://github.com/AlehandroSV/Jade" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-white transition"
            >
              GitHub
            </a>
          </nav>

          <div className="flex items-center gap-4">
            <a 
              href="https://luarocks.org/modules/alehandrosv/jade"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition"
            >
              Install
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
