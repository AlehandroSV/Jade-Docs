import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import CodeBlock from '../ui/CodeBlock'
import { useLanguage } from '../../contexts/LanguageContext'

const codeExample = `local jade = require("jade")

jade.configure({
  database = {
    driver = "postgresql",
    host = "localhost",
    database = "myapp"
  }
})

local User = jade.Entity("users", {
  id = jade.Integer():primaryKey(),
  name = jade.String(120),
  email = jade.String():unique(),
})

User:create({ name = "Lucas", email = "lucas@email.com" })
local users = User:where(User.active:eq(true)):get()`

export default function Hero() {
  const { t } = useLanguage()

  return (
    <section className="py-16 sm:py-24 lg:py-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white mb-6 leading-tight">
            {t('home.title')}
          </h1>
          <p className="text-base sm:text-lg text-zinc-500 dark:text-zinc-400 mb-8 leading-relaxed">
            {t('home.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/docs/quick-start"
              className="inline-flex items-center justify-center gap-2 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 px-5 py-2.5 rounded-lg font-medium text-sm hover:bg-zinc-700 dark:hover:bg-zinc-200 transition"
            >
              {t('home.quickStart')}
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/api"
              className="inline-flex items-center justify-center gap-2 border border-zinc-300 dark:border-zinc-700 text-zinc-600 dark:text-zinc-300 px-5 py-2.5 rounded-lg font-medium text-sm hover:bg-zinc-100 dark:hover:bg-zinc-800 transition"
            >
              {t('home.apiReference')}
            </Link>
          </div>
        </div>

        <div className="mt-12 sm:mt-16">
          <CodeBlock code={codeExample} language="lua" />
        </div>
      </div>
    </section>
  )
}
