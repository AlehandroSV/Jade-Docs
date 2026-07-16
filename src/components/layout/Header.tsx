import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Gem } from 'lucide-react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  const navLinks = [
    { href: '/docs', label: 'Docs' },
    { href: '/api', label: 'API' },
    { href: '/examples', label: 'Examples' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#09090b]/80 backdrop-blur-xl border-b border-zinc-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center group-hover:bg-emerald-400 transition">
              <Gem className="w-5 h-5 text-white" />
            </div>
            <span className="text-lg font-bold tracking-tight">Jade</span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`px-3 py-2 text-sm font-medium rounded-lg transition ${
                  location.pathname.startsWith(link.href)
                    ? 'text-emerald-400 bg-emerald-500/10'
                    : 'text-zinc-400 hover:text-white hover:bg-zinc-800'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://github.com/AlehandroSV/Jade"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 text-sm font-medium text-zinc-400 hover:text-white transition"
            >
              GitHub
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="https://luarocks.org/modules/alehandrosv/jade"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition"
            >
              Install
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-zinc-400 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t border-zinc-800 bg-[#09090b]">
          <div className="px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-lg"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
