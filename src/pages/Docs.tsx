import React from 'react'
import { useParams } from 'react-router-dom'
import CodeBlock from '../components/ui/CodeBlock'

const sections: Record<string, { title: string; content: React.ReactNode }> = {
  introduction: {
    title: 'Introduction',
    content: (
      <div>
        <p className="text-slate-300 mb-4">
          Jade is a modern ORM/Data Mapper for Lua, inspired by Prisma.
          It provides a declarative schema, automatic migrations, and a powerful query builder.
        </p>
        <p className="text-slate-300">
          <strong>Key Features:</strong>
        </p>
        <ul className="list-disc list-inside text-slate-300 mt-2 space-y-1">
          <li>Declarative schema with Lua syntax</li>
          <li>Automatic migrations</li>
          <li>Chainable query builder</li>
          <li>Entity relationships</li>
          <li>Pagination</li>
          <li>Transactions</li>
          <li>Soft delete</li>
          <li>Built-in security</li>
        </ul>
      </div>
    ),
  },
  installation: {
    title: 'Installation',
    content: (
      <div>
        <h3 className="text-xl font-semibold mb-4">Via LuaRocks</h3>
        <CodeBlock code="luarocks install jade" language="bash" />
        
        <h3 className="text-xl font-semibold mt-8 mb-4">From Source</h3>
        <CodeBlock code={`git clone https://github.com/AlehandroSV/Jade.git
cd Jade
luarocks make`} language="bash" />
      </div>
    ),
  },
  'quick-start': {
    title: 'Quick Start',
    content: (
      <div>
        <p className="text-slate-300 mb-4">1. Configure the database connection:</p>
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
})`} language="lua" showLineNumbers />

        <p className="text-slate-300 mt-8 mb-4">2. Define an entity:</p>
        <CodeBlock code={`local User = jade.Entity("users", {
    id = jade.Integer():primaryKey(),
    name = jade.String(120),
    email = jade.String():unique(),
    active = jade.Boolean():default(true),
    created_at = jade.Timestamp():defaultNow()
})`} language="lua" showLineNumbers />

        <p className="text-slate-300 mt-8 mb-4">3. Use CRUD operations:</p>
        <CodeBlock code={`-- Create
User:create({ name = "Lucas", email = "lucas@email.com" })

-- Read
local user = User:find(1)
local users = User:where(User.active:eq(true)):get()

-- Update
user:update({ name = "Novo Nome" })

-- Delete
user:delete()`} language="lua" showLineNumbers />
      </div>
    ),
  },
  schema: {
    title: 'Schema',
    content: (
      <div>
        <p className="text-slate-300 mb-4">Column types available:</p>
        <CodeBlock code={`jade.String(120)      -- VARCHAR(120)
jade.Text()           -- TEXT
jade.Integer()        -- INTEGER
jade.Float()          -- FLOAT
jade.Decimal(10, 2)   -- DECIMAL(10,2)
jade.Boolean()        -- BOOLEAN
jade.Timestamp()      -- TIMESTAMPTZ
jade.Date()           -- DATE
jade.UUID()           -- UUID`} language="lua" />

        <p className="text-slate-300 mt-8 mb-4">Column modifiers:</p>
        <CodeBlock code={`jade.Integer():primaryKey()   -- PRIMARY KEY
jade.String():unique()        -- UNIQUE
jade.String():notNull()       -- NOT NULL
jade.Boolean():default(true)  -- DEFAULT
jade.Timestamp():defaultNow() -- DEFAULT CURRENT_TIMESTAMP`} language="lua" />
      </div>
    ),
  },
  relations: {
    title: 'Relations',
    content: (
      <div>
        <p className="text-slate-300 mb-4">Define relationships between entities:</p>
        <CodeBlock code={`local Post = jade.Entity("posts", {
    id = jade.Integer():primaryKey(),
    title = jade.String(255),
    author_id = jade.Integer(),
})

-- Define relations
Post:belongsTo(User)
User:hasMany(Post)
User:hasOne(Profile)

-- Lazy loading
local user = User:find(1)
local posts = user.posts:load()

-- Eager loading
local posts = Post:include("author"):get()`} language="lua" showLineNumbers />
      </div>
    ),
  },
}

export default function Docs() {
  const { section = 'introduction' } = useParams()
  const currentSection = sections[section] || sections.introduction

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold mb-8">{currentSection.title}</h1>
      <div className="prose prose-invert max-w-none">
        {currentSection.content}
      </div>
    </div>
  )
}

