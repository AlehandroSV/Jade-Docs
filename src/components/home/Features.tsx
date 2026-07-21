import { useLanguage } from '../../contexts/LanguageContext'

export default function Features() {
  const { t } = useLanguage()

  const features = [
    { labelKey: 'features.declarative.title' as const, descKey: 'features.declarative.desc' as const },
    { labelKey: 'features.query.title' as const, descKey: 'features.query.desc' as const },
    { labelKey: 'features.migrations.title' as const, descKey: 'features.migrations.desc' as const },
    { labelKey: 'features.relations.title' as const, descKey: 'features.relations.desc' as const },
    { labelKey: 'features.transactions.title' as const, descKey: 'features.transactions.desc' as const },
    { labelKey: 'features.security.title' as const, descKey: 'features.security.desc' as const },
  ]

  return (
    <section className="py-20 border-t border-zinc-200 dark:border-zinc-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-12">
          {t('features.title')}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
          {features.map((f) => (
            <div key={f.labelKey}>
              <h3 className="text-zinc-900 dark:text-white font-medium mb-1">{t(f.labelKey)}</h3>
              <p className="text-zinc-500 dark:text-zinc-500 text-sm leading-relaxed">{t(f.descKey)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
