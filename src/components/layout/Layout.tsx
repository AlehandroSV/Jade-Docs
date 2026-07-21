import type { ReactNode } from 'react'
import { ThemeProvider } from '../../contexts/ThemeContext'
import { VersionProvider } from '../../contexts/VersionContext'
import { LanguageProvider } from '../../contexts/LanguageContext'
import Header from './Header'
import Footer from './Footer'

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <VersionProvider>
          <div className="min-h-screen flex flex-col bg-white dark:bg-[#09090b] text-zinc-900 dark:text-white transition-colors">
            <Header />
            <main className="flex-1 pt-16">
              {children}
            </main>
            <Footer />
          </div>
        </VersionProvider>
      </LanguageProvider>
    </ThemeProvider>
  )
}
