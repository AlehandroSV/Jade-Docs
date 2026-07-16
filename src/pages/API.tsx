import CodeBlock from '../components/ui/CodeBlock'

export default function API() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="text-4xl font-bold tracking-tight mb-8">API Reference</h1>
      
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-white mb-6">Entity Methods</h2>
        <div className="space-y-3">
          {[
            { method: 'Entity:create(data)', desc: 'Insert a new record' },
            { method: 'Entity:find(id)', desc: 'Find by primary key' },
            { method: 'Entity:where(cond):get()', desc: 'Query with conditions' },
            { method: 'Entity:update(id, data)', desc: 'Update a record' },
            { method: 'Entity:delete(id)', desc: 'Delete a record' },
            { method: 'Entity:count()', desc: 'Count records' },
            { method: 'Entity:paginate(opts)', desc: 'Paginate results' },
          ].map((item) => (
            <div key={item.method} className="flex flex-col sm:flex-row sm:items-center gap-2 p-4 rounded-xl bg-zinc-900 border border-zinc-800">
              <code className="text-emerald-400 font-mono text-sm">{item.method}</code>
              <span className="text-zinc-500 text-sm">- {item.desc}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-white mb-6">Query Builder</h2>
        <CodeBlock code={`-- Conditions
User:where(User.age:gt(18)):get()
User:where(User.active:eq(true)):get()

-- AND / OR
User:where(User.age:gt(18):band(User.active:eq(true))):get()
User:where(User.role:eq("admin"):bor(User.role:eq("mod"))):get()

-- Sorting and Limits
User:orderBy(User.name):get()
User:orderBy(User.name, "DESC"):get()
User:limit(10):offset(20):get()

-- Pagination
User:paginate({ page = 2, perPage = 20 })

-- Aggregates
User:count()
User:sum("age")
User:average("age")`} language="lua" />
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-white mb-6">Error Codes</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-zinc-800">
                <th className="text-left py-3 px-4 text-zinc-400 font-medium">Code</th>
                <th className="text-left py-3 px-4 text-zinc-400 font-medium">Name</th>
                <th className="text-left py-3 px-4 text-zinc-400 font-medium">Description</th>
              </tr>
            </thead>
            <tbody className="text-zinc-300">
              {[
                { code: 'J0001', name: 'AUTH_FAILED', desc: 'Authentication failed' },
                { code: 'J1016', name: 'UNIQUE_VIOLATION', desc: 'Unique constraint violated' },
                { code: 'J5000', name: 'SQL_INJECTION', desc: 'SQL injection detected' },
              ].map((err) => (
                <tr key={err.code} className="border-b border-zinc-800/50">
                  <td className="py-3 px-4 font-mono text-emerald-400">{err.code}</td>
                  <td className="py-3 px-4">{err.name}</td>
                  <td className="py-3 px-4 text-zinc-500">{err.desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}
