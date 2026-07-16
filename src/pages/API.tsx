import CodeBlock from '../components/ui/CodeBlock'

const methods = [
  { method: 'Entity:create(data)', desc: 'Insert a new record', example: `User:create({ name = "Lucas", email = "lucas@email.com" })` },
  { method: 'Entity:find(id)', desc: 'Find by primary key', example: `local user = User:find(1)` },
  { method: 'Entity:first()', desc: 'Get first record', example: `local user = User:first()` },
  { method: 'Entity:where(cond)', desc: 'Start a query with conditions', example: `User:where(User.age:gt(18)):get()` },
  { method: 'Entity:orderBy(col, dir)', desc: 'Sort results', example: `User:orderBy(User.name, "DESC"):get()` },
  { method: 'Entity:limit(n)', desc: 'Limit results', example: `User:limit(10):get()` },
  { method: 'Entity:offset(n)', desc: 'Skip results', example: `User:limit(10):offset(20):get()` },
  { method: 'Entity:select(...)', desc: 'Select specific columns', example: `User:select("id", "name"):get()` },
  { method: 'Entity:count()', desc: 'Count records', example: `User:where(User.active:eq(true)):count()` },
  { method: 'Entity:sum(col)', desc: 'Sum column values', example: `User:sum("age")` },
  { method: 'Entity:average(col)', desc: 'Average column values', example: `User:average("age")` },
  { method: 'Entity:paginate(opts)', desc: 'Paginate results', example: `User:paginate({ page = 2, perPage = 20 })` },
  { method: 'Entity:update(id, data)', desc: 'Update a record', example: `User:update(1, { name = "New" })` },
  { method: 'Entity:delete(id)', desc: 'Delete a record', example: `User:delete(1)` },
]

const conditions = [
  { method: 'expr:eq(value)', desc: 'Equal to', example: `User:where(User.name:eq("Lucas")):get()` },
  { method: 'expr:neq(value)', desc: 'Not equal to', example: `User:where(User.name:neq("Admin")):get()` },
  { method: 'expr:gt(value)', desc: 'Greater than', example: `User:where(User.age:gt(18)):get()` },
  { method: 'expr:lt(value)', desc: 'Less than', example: `User:where(User.age:lt(65)):get()` },
  { method: 'expr:ge(value)', desc: 'Greater or equal', example: `User:where(User.age:ge(18)):get()` },
  { method: 'expr:le(value)', desc: 'Less or equal', example: `User:where(User.age:le(65)):get()` },
  { method: 'expr:like(pattern)', desc: 'Pattern match', example: `User:where(User.name:like("%Lucas%")):get()` },
  { method: 'expr:isNull()', desc: 'Is null', example: `User:where(User.email:isNull()):get()` },
  { method: 'expr:isNotNull()', desc: 'Is not null', example: `User:where(User.email:isNotNull()):get()` },
  { method: 'cond:band(other)', desc: 'AND conditions', example: `User:where(User.age:gt(18):band(User.active:eq(true))):get()` },
  { method: 'cond:bor(other)', desc: 'OR conditions', example: `User:where(User.role:eq("admin"):bor(User.role:eq("mod"))):get()` },
]

export default function API() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
      <h1 className="text-3xl font-bold tracking-tight text-white mb-8">API Reference</h1>
      
      <section className="mb-16">
        <h2 className="text-xl font-semibold text-white mb-6">Entity Methods</h2>
        <div className="space-y-6">
          {methods.map((m) => (
            <div key={m.method} className="border border-zinc-800 rounded-lg p-4">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                <code className="text-emerald-400 font-mono text-sm">{m.method}</code>
                <span className="text-zinc-500 text-sm">{m.desc}</span>
              </div>
              <CodeBlock code={m.example} language="lua" />
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-white mb-6">Conditions</h2>
        <div className="space-y-6">
          {conditions.map((c) => (
            <div key={c.method} className="border border-zinc-800 rounded-lg p-4">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                <code className="text-emerald-400 font-mono text-sm">{c.method}</code>
                <span className="text-zinc-500 text-sm">{c.desc}</span>
              </div>
              <CodeBlock code={c.example} language="lua" />
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
