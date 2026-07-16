import { useParams, Link } from 'react-router-dom'
import CodeBlock from '../components/ui/CodeBlock'

const sections: Record<string, { title: string; content: React.ReactNode }> = {
  introduction: {
    title: 'Introduction',
    content: (
      <div className="space-y-6">
        <p className="text-zinc-300 leading-relaxed">
          Jade is a Lua ORM that maps your database tables to Lua objects. 
          You define your schema in code, and Jade handles migrations, queries, 
          and data validation.
        </p>
        <p className="text-zinc-400 leading-relaxed">
          Unlike some ORMs, Jade doesn't hide SQL. Every query is transparent. 
          You can always see what's being executed against your database.
        </p>
        <h3 className="text-lg font-semibold text-white mt-8">Design principles</h3>
        <ul className="space-y-2 text-zinc-300">
          <li className="flex items-start gap-2">
            <span className="mt-2 w-1 h-1 bg-emerald-500 rounded-full flex-shrink-0" />
            <span><strong className="text-white">Schema is truth.</strong> Your database structure is defined in Lua code.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-2 w-1 h-1 bg-emerald-500 rounded-full flex-shrink-0" />
            <span><strong className="text-white">SQL is visible.</strong> Every operation can be audited.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-2 w-1 h-1 bg-emerald-500 rounded-full flex-shrink-0" />
            <span><strong className="text-white">Migrations are deterministic.</strong> No surprise schema changes.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-2 w-1 h-1 bg-emerald-500 rounded-full flex-shrink-0" />
            <span><strong className="text-white">You have control.</strong> No magic, no hidden behavior.</span>
          </li>
        </ul>
        <div className="mt-8">
          <Link to="/docs/installation" className="text-emerald-400 hover:text-emerald-300 text-sm font-medium">
            Next: Installation &rarr;
          </Link>
        </div>
      </div>
    ),
  },
  installation: {
    title: 'Installation',
    content: (
      <div className="space-y-6">
        <h3 className="text-lg font-semibold text-white">Via LuaRocks</h3>
        <CodeBlock code="luarocks install jade" language="bash" />
        
        <h3 className="text-lg font-semibold text-white mt-8">Requirements</h3>
        <ul className="space-y-2 text-zinc-300">
          <li className="flex items-start gap-2">
            <span className="mt-2 w-1 h-1 bg-emerald-500 rounded-full flex-shrink-0" />
            Lua 5.1, 5.2, 5.3, 5.4, or LuaJIT
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-2 w-1 h-1 bg-emerald-500 rounded-full flex-shrink-0" />
            PostgreSQL (other drivers coming soon)
          </li>
        </ul>
        <div className="mt-8">
          <Link to="/docs/quick-start" className="text-emerald-400 hover:text-emerald-300 text-sm font-medium">
            Next: Quick Start &rarr;
          </Link>
        </div>
      </div>
    ),
  },
  'quick-start': {
    title: 'Quick Start',
    content: (
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">1. Configure the database</h3>
          <CodeBlock code={`local jade = require("jade")

jade.configure({
  database = {
    driver = "postgresql",
    host = "localhost",
    port = 5432,
    database = "myapp",
    user = "postgres",
    password = "secret"
  }
})`} language="lua" />
        </div>
        
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">2. Define an entity</h3>
          <CodeBlock code={`local User = jade.Entity("users", {
  id = jade.Integer():primaryKey(),
  name = jade.String(120),
  email = jade.String():unique(),
  active = jade.Boolean():default(true),
  created_at = jade.Timestamp():defaultNow()
})`} language="lua" />
        </div>
        
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">3. Use CRUD operations</h3>
          <CodeBlock code={`-- Create
User:create({ name = "Lucas", email = "lucas@email.com" })

-- Read
local user = User:find(1)
local users = User:where(User.active:eq(true)):get()

-- Update
user:update({ name = "New Name" })

-- Delete
user:delete()`} language="lua" />
        </div>
        <div className="mt-8">
          <Link to="/docs/relations" className="text-emerald-400 hover:text-emerald-300 text-sm font-medium">
            Next: Relations &rarr;
          </Link>
        </div>
      </div>
    ),
  },
  schema: {
    title: 'Schema',
    content: (
      <div className="space-y-6">
        <p className="text-zinc-300 leading-relaxed">
          Jade supports these column types:
        </p>
        <CodeBlock code={`jade.String(120)      -- VARCHAR(120)
jade.Text()           -- TEXT
jade.Integer()        -- INTEGER
jade.Float()          -- FLOAT
jade.Decimal(10, 2)   -- DECIMAL(10,2)
jade.Boolean()        -- BOOLEAN
jade.Timestamp()      -- TIMESTAMPTZ
jade.Date()           -- DATE
jade.UUID()           -- UUID`} language="lua" />

        <p className="text-zinc-300 leading-relaxed mt-6">
          Column modifiers:
        </p>
        <CodeBlock code={`jade.Integer():primaryKey()   -- PRIMARY KEY
jade.String():unique()        -- UNIQUE
jade.String():notNull()       -- NOT NULL
jade.Boolean():default(true)  -- DEFAULT
jade.Timestamp():defaultNow() -- DEFAULT CURRENT_TIMESTAMP`} language="lua" />
        <div className="mt-8">
          <Link to="/docs/relations" className="text-emerald-400 hover:text-emerald-300 text-sm font-medium">
            Next: Relations &rarr;
          </Link>
        </div>
      </div>
    ),
  },
  relations: {
    title: 'Relations',
    content: (
      <div className="space-y-6">
        <p className="text-zinc-300 leading-relaxed">
          Define relationships between entities:
        </p>
        <CodeBlock code={`local Post = jade.Entity("posts", {
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
local posts = Post:include("author"):get()`} language="lua" />
        <div className="mt-8">
          <Link to="/docs/migrations" className="text-emerald-400 hover:text-emerald-300 text-sm font-medium">
            Next: Migrations &rarr;
          </Link>
        </div>
      </div>
    ),
  },
  migrations: {
    title: 'Migrations',
    content: (
      <div className="space-y-6">
        <p className="text-zinc-300 leading-relaxed">
          Jade automatically generates migrations from your schema changes.
        </p>
        <CodeBlock code={`-- Create a migration
jade.migration.create("add_users_table")

-- Run pending migrations
jade.migration.run()

-- Rollback last migration
jade.migration.rollback()

-- Preview SQL without executing
jade.migration.preview()`} language="lua" />

        <p className="text-zinc-300 leading-relaxed mt-6">
          Migration files are stored in <code className="text-emerald-400 text-sm">migrations/</code> and tracked in a <code className="text-emerald-400 text-sm">_jade_migrations</code> table.
        </p>
        <div className="mt-8">
          <Link to="/docs/transactions" className="text-emerald-400 hover:text-emerald-300 text-sm font-medium">
            Next: Transactions &rarr;
          </Link>
        </div>
      </div>
    ),
  },
  transactions: {
    title: 'Transactions',
    content: (
      <div className="space-y-6">
        <p className="text-zinc-300 leading-relaxed">
          Wrap multiple operations in a transaction. If any operation fails, all changes are rolled back.
        </p>
        <CodeBlock code={`jade.transaction.run(jade.driver(), function(tx)
  local user = User:create({ name = "Lucas" })
  Post:create({ title = "Hello", author_id = user.id })
end)
-- Auto-commit if no error, rollback if error`} language="lua" />
        <div className="mt-8">
          <Link to="/docs/error-codes" className="text-emerald-400 hover:text-emerald-300 text-sm font-medium">
            Next: Error Codes &rarr;
          </Link>
        </div>
      </div>
    ),
  },
  'error-codes': {
    title: 'Error Codes',
    content: (
      <div className="space-y-6">
        <p className="text-zinc-300 leading-relaxed">
          Jade uses structured error codes for predictable error handling:
        </p>
        <CodeBlock code={`local errors = require("jade.errors")

local ok, err = pcall(function()
  User:create({ email = "invalid" })
end)

if not ok then
  print(err.code)    -- J1016
  print(err.message) -- "Unique constraint violation"
  print(err:toJSON()) -- { code = "J1016", message = "...", ... }
end`} language="lua" />

        <p className="text-zinc-300 leading-relaxed mt-6">
          Error code ranges:
        </p>
        <ul className="space-y-1 text-zinc-400 text-sm font-mono">
          <li>J0xxx - Connection errors</li>
          <li>J1xxx - Query errors</li>
          <li>J2xxx - Migration errors</li>
          <li>J3xxx - Introspection errors</li>
          <li>J4xxx - Integrity errors</li>
          <li>J5xxx - Security errors</li>
        </ul>
      </div>
    ),
  },
}

const sidebarLinks = [
  { href: '/docs/introduction', label: 'Introduction' },
  { href: '/docs/installation', label: 'Installation' },
  { href: '/docs/quick-start', label: 'Quick Start' },
  { href: '/docs/schema', label: 'Schema' },
  { href: '/docs/relations', label: 'Relations' },
  { href: '/docs/migrations', label: 'Migrations' },
  { href: '/docs/transactions', label: 'Transactions' },
  { href: '/docs/error-codes', label: 'Error Codes' },
]

export default function Docs() {
  const { section = 'introduction' } = useParams()
  const current = sections[section] || sections.introduction

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-12">
        <aside className="lg:sticky lg:top-20 lg:self-start">
          <nav className="space-y-1">
            {sidebarLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`block px-3 py-1.5 text-sm rounded-md transition ${
                  link.href.includes(section)
                    ? 'text-white bg-zinc-800'
                    : 'text-zinc-500 hover:text-zinc-300'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </aside>

        <article className="min-w-0">
          <h1 className="text-3xl font-bold tracking-tight text-white mb-6">{current.title}</h1>
          <div className="text-zinc-300">
            {current.content}
          </div>
        </article>
      </div>
    </div>
  )
}
