import CodeBlock from '../ui/CodeBlock'
import { useLanguage } from '../../contexts/LanguageContext'

const queryCode = `-- Query Builder
local users = User
  :where(User.age:gt(18))
  :where(User.active:eq(true))
  :orderBy(User.name)
  :limit(20)
  :get()

-- Relations
local posts = Post:include("author"):get()

-- Pagination
local page = User:paginate({ page = 2, perPage = 20 })`

export default function CodeExample() {
  const { t } = useLanguage()

  const features = [
    t('codeExample.feature1'),
    t('codeExample.feature2'),
    t('codeExample.feature3'),
    t('codeExample.feature4'),
  ]

  return (
    <section className="py-20 bg-zinc-100/50 dark:bg-zinc-900/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-4">
              {t('codeExample.title')}
            </h2>
            <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed mb-6">
              {t('codeExample.description')}
            </p>
            <ul className="space-y-3 text-sm">
              {features.map((item) => (
                <li key={item} className="flex items-start gap-3 text-zinc-500 dark:text-zinc-400">
                  <span className="mt-1.5 w-1 h-1 bg-emerald-500 rounded-full flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <CodeBlock code={queryCode} language="lua" />
          </div>
        </div>
      </div>
    </section>
  )
}
