export default function Features() {
  const features = [
    { label: 'Declarative schema', desc: 'Define your tables in Lua. Jade handles the rest.' },
    { label: 'Query builder', desc: 'Chain where, orderBy, limit, and paginate. No string concatenation.' },
    { label: 'Automatic migrations', desc: 'Schema changes become migration files. Rollback with one command.' },
    { label: 'Relations', desc: 'belongsTo, hasMany, hasOne. Eager and lazy loading.' },
    { label: 'Transactions', desc: 'Auto-commit on success, rollback on error.' },
    { label: 'Built-in security', desc: 'SQL injection detection, input validation, parameterized queries.' },
  ]

  return (
    <section className="py-20 border-t border-zinc-200 dark:border-zinc-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-12">
          What Jade gives you
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
          {features.map((f) => (
            <div key={f.label}>
              <h3 className="text-zinc-900 dark:text-white font-medium mb-1">{f.label}</h3>
              <p className="text-zinc-500 dark:text-zinc-500 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
