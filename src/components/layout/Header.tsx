import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { useTheme } from '../../contexts/ThemeContext'
import { useLanguage } from '../../contexts/LanguageContext'
import { mainNav } from '../../data/navigation'
import VersionSelector from '../ui/VersionSelector'
import LanguageSelector from '../ui/LanguageSelector'
import Logo from '../ui/Logo'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()
  const { theme, toggleTheme } = useTheme()
  const { t } = useLanguage()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-[#09090b]/80 backdrop-blur-xl border-b border-zinc-200 dark:border-zinc-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-14">
          <Link to="/">
            <Logo />
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {mainNav.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`px-3 py-1.5 text-sm rounded-md transition ${
                  location.pathname.startsWith(link.href)
                    ? 'text-zinc-900 dark:text-white bg-zinc-100 dark:bg-zinc-800'
                    : 'text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white'
                }`}
              >
                {t(link.labelKey as any)}
              </Link>
            ))}
            <a
              href="https://github.com/AlehandroSV/Jade"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition"
            >
              GitHub
            </a>
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href="https://luarocks.org/modules/alehandrosv/jade"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition"
            >
              {t('nav.install')}
            </a>

            <LanguageSelector />
            <VersionSelector />

            <button
              onClick={toggleTheme}
              className="p-1.5 text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-1.5 text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#09090b]">
          <div className="px-4 py-3 space-y-1">
            {mainNav.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white text-sm rounded-md"
              >
                {t(link.labelKey as any)}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
