import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { useLanguage } from '../../contexts/LanguageContext'

export default function CTA() {
  const { t } = useLanguage()

  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="border border-zinc-200 dark:border-zinc-800 rounded-2xl p-8 sm:p-12 text-center">
          <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-3">
            {t('cta.title')}
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400 mb-6">
            {t('cta.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/docs/installation"
              className="inline-flex items-center gap-2 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 px-5 py-2.5 rounded-lg font-medium text-sm hover:bg-zinc-700 dark:hover:bg-zinc-200 transition"
            >
              {t('cta.readDocs')}
              <ArrowRight className="w-4 h-4" />
            </Link>
            <code className="text-zinc-500 dark:text-zinc-500 text-sm font-mono">
              luarocks install jade
            </code>
          </div>
        </div>
      </div>
    </section>
  )
}
