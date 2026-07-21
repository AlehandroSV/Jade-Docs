import { useParams, Link } from 'react-router-dom'
import { docsSections } from '../data/docs'
import { docsSidebar } from '../data/navigation'
import DocRenderer from '../components/ui/DocRenderer'

export default function Docs() {
  const { section = 'introduction' } = useParams()
  const current = docsSections.find(s => s.id === section) || docsSections[0]

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-12">
        <aside className="lg:sticky lg:top-20 lg:self-start">
          <nav className="space-y-4">
            {docsSidebar.map((group) => (
              <div key={group.href}>
                <div className="text-xs font-semibold text-zinc-400 dark:text-zinc-400 text-zinc-500 uppercase tracking-wider mb-2 px-3">
                  {group.label}
                </div>
                <div className="space-y-0.5">
                  {group.children?.map((link) => (
                    <Link
                      key={link.href}
                      to={link.href}
                      className={`block px-3 py-1.5 text-sm rounded-md transition ${
                        link.href.includes(section)
                          ? 'text-zinc-900 dark:text-white bg-zinc-100 dark:bg-zinc-800'
                          : 'text-zinc-500 dark:text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-300'
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </nav>
        </aside>

        <article className="min-w-0">
          <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white mb-2">
            {current.title}
          </h1>
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
