import { useParams, Link } from 'react-router-dom'
import { useVersion } from '../contexts/VersionContext'
import { useLanguage } from '../contexts/LanguageContext'
import { docsSidebar } from '../data/navigation'
import { docsSectionsPtBr } from '../data/docs-pt-br'
import DocRenderer from '../components/ui/DocRenderer'

export default function Docs() {
  const { section = 'introduction' } = useParams()
  const { currentVersion } = useVersion()
  const { language, t } = useLanguage()

  // Use translated sections when available
  const sections = language === 'pt-br'
    ? currentVersion.sections.map(s => {
        const translated = docsSectionsPtBr.find(ts => ts.id === s.id)
        return translated || s
      })
    : currentVersion.sections

  const current = sections.find(s => s.id === section) || sections[0]

  // Filter sidebar to only show sections available in current version
  const availableSectionIds = new Set(currentVersion.sections.map(s => s.id))

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-12">
        <aside className="lg:sticky lg:top-20 lg:self-start">
          <nav className="space-y-4">
            {docsSidebar.map((group) => {
              // Filter children to only available sections
              const availableChildren = group.children?.filter(
                child => availableSectionIds.has(child.href.split('/').pop() || '')
              )

              // Skip group if no children are available
              if (!availableChildren || availableChildren.length === 0) return null

              return (
                <div key={group.href}>
                  <div className="text-xs font-semibold text-zinc-400 dark:text-zinc-400 text-zinc-500 uppercase tracking-wider mb-2 px-3">
                    {group.labelKey ? t(group.labelKey as any) : group.label}
                  </div>
                  <div className="space-y-0.5">
                    {availableChildren.map((link) => (
                      <Link
                        key={link.href}
                        to={link.href}
                        className={`block px-3 py-1.5 text-sm rounded-md transition ${
                          link.href.includes(section)
                            ? 'text-zinc-900 dark:text-white bg-zinc-100 dark:bg-zinc-800'
                            : 'text-zinc-500 dark:text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-300'
                        }`}
                      >
                        {link.labelKey ? t(link.labelKey as any) : link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )
            })}
          </nav>
        </aside>

        <article className="min-w-0">
          <div className="flex items-center gap-3 mb-6">
            <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
              {current.title}
            </h1>
            {!currentVersion.isLatest && (
              <span className="text-xs bg-yellow-500/20 text-yellow-600 dark:text-yellow-400 px-2 py-1 rounded-full font-medium">
                {currentVersion.label}
              </span>
            )}
          </div>
          {current.description && (
            <p className="text-zinc-500 dark:text-zinc-400 mb-8">
              {current.description}
            </p>
          )}
          <div className="text-zinc-300">
            <DocRenderer content={current.content} />
          </div>
        </article>
      </div>
    </div>
  )
}
