import CodeBlock from '../components/ui/CodeBlock'

export default function API() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold mb-8">API Reference</h1>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Entity Methods</h2>
        <div className="space-y-4">
          <div className="bg-slate-800 rounded-lg p-4">
            <code className="text-emerald-400">Entity:create(data)</code>
            <p className="text-slate-300 mt-2">Insert a new record</p>
          </div>
          <div className="bg-slate-800 rounded-lg p-4">
            <code className="text-emerald-400">Entity:find(id)</code>
            <p className="text-slate-300 mt-2">Find record by primary key</p>
          </div>
          <div className="bg-slate-800 rounded-lg p-4">
            <code className="text-emerald-400">Entity:where(condition):get()</code>
            <p className="text-slate-300 mt-2">Query with conditions</p>
          </div>
          <div className="bg-slate-800 rounded-lg p-4">
            <code className="text-emerald-400">Entity:update(id, data)</code>
            <p className="text-slate-300 mt-2">Update a record</p>
          </div>
          <div className="bg-slate-800 rounded-lg p-4">
            <code className="text-emerald-400">Entity:delete(id)</code>
            <p className="text-slate-300 mt-2">Delete a record</p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Query Builder</h2>
        <CodeBlock code={`-- WHERE
User:where(User.age:gt(18)):get()
User:where(User.active:eq(true)):get()

-- AND / OR
User:where(User.age:gt(18):band(User.active:eq(true))):get()
User:where(User.role:eq("admin"):bor(User.role:eq("moderator"))):get()

-- ORDER BY
User:orderBy(User.name):get()
User:orderBy(User.name, "DESC"):get()

-- LIMIT / OFFSET
User:limit(10):get()
User:limit(10):offset(20):get()

-- Pagination
User:paginate({ page = 2, perPage = 20 })

-- Aggregations
User:count()
User:sum("age")
User:average("age")`} language="lua" showLineNumbers />
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Error Codes</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-slate-700">
                <th className="py-2 px-4">Code</th>
                <th className="py-2 px-4">Name</th>
                <th className="py-2 px-4">Description</th>
              </tr>
            </thead>
            <tbody className="text-slate-300">
              <tr className="border-b border-slate-800">
                <td className="py-2 px-4 font-mono text-emerald-400">J0001</td>
                <td className="py-2 px-4">AUTHENTICATION_FAILED</td>
                <td className="py-2 px-4">Database authentication failed</td>
              </tr>
              <tr className="border-b border-slate-800">
                <td className="py-2 px-4 font-mono text-emerald-400">J1016</td>
                <td className="py-2 px-4">UNIQUE_CONSTRAINT_VIOLATION</td>
                <td className="py-2 px-4">Unique constraint violated</td>
              </tr>
              <tr className="border-b border-slate-800">
                <td className="py-2 px-4 font-mono text-emerald-400">J5000</td>
                <td className="py-2 px-4">SQL_INJECTION_DETECTED</td>
                <td className="py-2 px-4">SQL injection attempt detected</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}
