import CodeBlock from '../components/ui/CodeBlock'

const examples = [
  {
    title: 'CRUD Operations',
    description: 'Create, read, update, and delete records.',
    code: `-- Create
User:create({ name = "Lucas", email = "lucas@email.com" })

-- Read one
local user = User:find(1)

-- Read many
local users = User:where(User.active:eq(true)):get()

-- Read first
local first = User:first()

-- Update
user:update({ name = "New Name" })

-- Delete
user:delete()`,
  },
  {
    title: 'Query Builder',
    description: 'Build complex queries with method chaining.',
    code: `-- WHERE with conditions
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

-- SELECT specific columns
User:select("id", "name"):get()

-- Aggregates
User:count()
User:sum("age")
User:average("age")`,
  },
  {
    title: 'Relations',
    description: 'Define and query relationships between entities.',
    code: `local Post = jade.Entity("posts", {
  id = jade.Integer():primaryKey(),
  title = jade.String(255),
  author_id = jade.Integer(),
})

-- Define relations
Post:belongsTo(User)
User:hasMany(Post)

-- Lazy loading
local user = User:find(1)
local posts = user.posts:load()

-- Eager loading
local posts = Post:include("author"):get()`,
  },
  {
    title: 'Pagination',
    description: 'Paginate query results.',
    code: `-- Basic pagination
local page = User:paginate({ page = 2, perPage = 20 })

-- Returns:
-- {
--   items = { ... },
--   total = 100,
--   page = 2,
--   per_page = 20,
--   last_page = 5,
--   has_next = true,
--   has_prev = true,
-- }`,
  },
  {
    title: 'Transactions',
    description: 'Wrap operations in a transaction.',
    code: `jade.transaction.run(jade.driver(), function(tx)
  local user = User:create({ name = "Lucas" })
  Post:create({ title = "Hello", author_id = user.id })
end)
-- Auto-commit if no error, rollback if error`,
  },
  {
    title: 'Error Handling',
    description: 'Handle errors with structured error codes.',
    code: `local errors = require("jade.errors")

local ok, err = pcall(function()
  User:create({ email = "invalid" })
end)

if not ok then
  print(err.code)    -- J1016
  print(err.message) -- "Unique constraint violation"
  print(err:toJSON()) -- Full error object
end`,
  },
  {
    title: 'Soft Delete',
    description: 'Logical deletion with restore support.',
    code: `jade.SoftDelete.setup(User)

-- Delete now sets deleted_at
User:delete(id)

-- Include soft-deleted records
User:withTrashed():get()

-- Only soft-deleted records
User:onlyTrashed():get()

-- Restore
User:restore(id)

-- Force delete (actual delete)
User:forceDelete(id)`,
  },
  {
    title: 'Security',
    description: 'SQL injection detection and input validation.',
    code: `local security = require("jade.security")

-- Check for SQL injection
local is_dangerous = security.sanitizer.detectSQLInjection(input)
if is_dangerous then
  error("SQL injection detected")
end

-- Validate identifiers
security.validator.validateColumnName("users")
security.validator.validateTableName("user_posts")

-- Validate pagination
security.validator.validatePagination(1, 20)`,
  },
]

export default function Examples() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
      <h1 className="text-3xl font-bold tracking-tight text-white mb-4">Examples</h1>
      <p className="text-zinc-400 mb-12">
        Practical examples showing common use cases.
      </p>

      <div className="space-y-12">
        {examples.map((example) => (
          <section key={example.title}>
            <h2 className="text-xl font-semibold text-white mb-1">{example.title}</h2>
            <p className="text-zinc-500 text-sm mb-4">{example.description}</p>
            <CodeBlock code={example.code} language="lua" />
          </section>
        ))}
      </div>
    </div>
  )
}
