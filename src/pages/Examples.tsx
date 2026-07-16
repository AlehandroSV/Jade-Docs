import CodeBlock from '../components/ui/CodeBlock'

const examples = [
  {
    title: 'CRUD Operations',
    code: `-- Create
User:create({ name = "Lucas", email = "lucas@email.com" })

-- Read
local user = User:find(1)
local users = User:where(User.active:eq(true)):get()
local first = User:first()

-- Update
user:update({ name = "New Name" })

-- Delete
user:delete()`,
  },
  {
    title: 'Relations',
    code: `local Post = jade.Entity("posts", {
  id = jade.Integer():primaryKey(),
  title = jade.String(255),
  author_id = jade.Integer(),
})

Post:belongsTo(User)
User:hasMany(Post)

-- Eager loading
local posts = Post:include("author"):get()

-- Lazy loading
local user = User:find(1)
local posts = user.posts:load()`,
  },
  {
    title: 'Transactions',
    code: `jade.transaction.run(jade.driver(), function(tx)
  local user = User:create({ name = "Lucas" })
  Post:create({ title = "Hello", author_id = user.id })
end)
-- Auto-commit if no error, rollback if error`,
  },
  {
    title: 'Error Handling',
    code: `local errors = require("jade.errors")

local ok, err = pcall(function()
  User:create({ email = "invalid" })
end)

if not ok then
  print(err.code)    -- J1016
  print(err.message) -- "Unique constraint violation"
end`,
  },
]

export default function Examples() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="text-4xl font-bold tracking-tight mb-4">Examples</h1>
      <p className="text-zinc-400 text-lg mb-12">
        Practical examples to get you started.
      </p>

      <div className="space-y-16">
        {examples.map((example) => (
          <section key={example.title}>
            <h2 className="text-2xl font-semibold text-white mb-4">{example.title}</h2>
            <CodeBlock code={example.code} language="lua" />
          </section>
        ))}
      </div>
    </div>
  )
}
