import { useParams } from 'react-router-dom'
import CodeBlock from '../components/ui/CodeBlock'

const sections: Record<string, { title: string; content: React.ReactNode }> = {
  introduction: {
    title: 'Introduction',
    content: (
      <div className="space-y-6">
        <p className="text-zinc-300 leading-relaxed">
          Jade is a modern ORM/Data Mapper for Lua, inspired by Prisma.
          It provides a declarative schema, automatic migrations, and a powerful query builder.
        </p>
        <h3 className="text-xl font-semibold text-white mt-8">Key Features</h3>
        <ul className="space-y-2 text-zinc-300">
          <li className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
            Declarative schema with Lua syntax
          </li>
          <li className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
            Automatic migrations
          </li>
          <li className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
            Chainable query builder
          </li>
          <li className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
            Entity relationships
          </li>
          <li className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
            Built-in security
          </li>
        </ul>
      </div>
    ),
  },
  installation: {
    title: 'Installation',
    content: (
      <div className="space-y-6">
        <h3 className="text-xl font-semibold text-white">Via LuaRocks</h3>
        <CodeBlock code="luarocks install jade" language="bash" />
        
        <h3 className="text-xl font-semibold text-white mt-8">From Source</h3>
        <CodeBlock code={`git clone https://github.com/AlehandroSV/Jade.git
cd Jade
luarocks make`} language="bash" />
      </div>
    ),
  },
  'quick-start': {
    title: 'Quick Start',
    content: (
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold text-white mb-3">1. Configure database</h3>
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
          <h3 className="text-xl font-semibold text-white mb-3">2. Define entities</h3>
          <CodeBlock code={`local User = jade.Entity("users", {
  id = jade.Integer():primaryKey(),
  name = jade.String(120),
  email = jade.String():unique(),
  active = jade.Boolean():default(true),
  created_at = jade.Timestamp():defaultNow()
})`} language="lua" />
        </div>
        
        <div>
          <h3 className="text-xl font-semibold text-white mb-3">3. Use CRUD</h3>
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
      </div>
    ),
  },
}

export default function Docs() {
  const { section = 'introduction' } = useParams()
  const current = sections[section] || sections.introduction

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="text-4xl font-bold tracking-tight mb-8">{current.title}</h1>
      <div className="text-zinc-300">
        {current.content}
      </div>
    </div>
  )
}
