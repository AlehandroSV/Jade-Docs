import CodeBlock from '../components/ui/CodeBlock'

export default function Examples() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold mb-8">Examples</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">CRUD Operations</h2>
        <CodeBlock code={`-- Create
User:create({ name = "Lucas", email = "lucas@email.com" })

-- Read
local user = User:find(1)
local users = User:where(User.active:eq(true)):get()
local first = User:first()

-- Update
user:update({ name = "Novo Nome" })
User:where(User.id:eq(1)):update({ active = false })

-- Delete
user:delete()
User:where(User.id:eq(1)):delete()`} language="lua" showLineNumbers />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Relations</h2>
        <CodeBlock code={`local Post = jade.Entity("posts", {
    id = jade.Integer():primaryKey(),
    title = jade.String(255),
    content = jade.Text(),
    author_id = jade.Integer(),
})

Post:belongsTo(User)
User:hasMany(Post)

-- Eager loading
local posts = Post:include("author"):get()

-- Lazy loading
local user = User:find(1)
local posts = user.posts:load()`} language="lua" showLineNumbers />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Transactions</h2>
        <CodeBlock code={`jade.transaction.run(jade.driver(), function(tx)
    local user = User:create({ name = "Lucas" })
    Post:create({ title = "Hello", author_id = user.id })
end)
-- Auto-commit if no error, rollback if error`} language="lua" showLineNumbers />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Soft Delete</h2>
        <CodeBlock code={`jade.SoftDelete.setup(User)

-- Delete now sets deleted_at
User:delete(id)

-- Additional methods
User:forceDelete(id)         -- Real delete
User:withTrashed():get()     -- Include deleted
User:onlyTrashed():get()     -- Only deleted
User:restore(id)             -- Restore`} language="lua" showLineNumbers />
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Error Handling</h2>
        <CodeBlock code={`local jade = require("jade")
local errors = require("jade.errors")

local ok, err = pcall(function()
    User:create({ email = "invalid" })
end)

if not ok then
    print(err.code)    -- J1016
    print(err.message) -- "Unique constraint violation"
    print(err:toJSON()) -- { code = "J1016", message = "...", ... }
end`} language="lua" showLineNumbers />
      </section>
    </div>
  )
}
