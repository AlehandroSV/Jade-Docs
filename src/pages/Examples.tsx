import { examples } from '../data/examples'
import CodeBlock from '../components/ui/CodeBlock'
import { useLanguage } from '../contexts/LanguageContext'

export default function Examples() {
  const { t } = useLanguage()

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
      <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white mb-2">
        {t('examples.title')}
      </h1>
      <p className="text-zinc-500 dark:text-zinc-400 mb-10">
        {t('examples.description')}
      </p>

      <div className="space-y-12">
        {examples.map((example) => (
          <section key={example.id}>
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-white mb-2">
              {example.title}
            </h2>
            <p className="text-zinc-500 dark:text-zinc-400 text-sm mb-4">
              {example.description}
            </p>
            <CodeBlock code={example.code} language={example.language} />
          </section>
        ))}
      </div>
    </div>
  )
}
