import CodeBlock from '../ui/CodeBlock'

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
  return (
    <section className="py-24 bg-zinc-900/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              Powerful Query Builder
            </h2>
            <p className="text-zinc-400 text-lg mb-6 leading-relaxed">
              Build complex queries with a clean, chainable API. 
              Supports WHERE, ORDER BY, LIMIT, pagination, and more.
            </p>
            <ul className="space-y-3">
              {['Chainable API', 'Lazy evaluation', 'Type-safe conditions', 'Eager loading'].map((item) => (
                <li key={item} className="flex items-center gap-3 text-zinc-300">
                  <span className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full" />
                  </span>
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
