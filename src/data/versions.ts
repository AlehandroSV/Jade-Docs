import { docsSections, type DocSection } from './docs'

export interface Version {
  id: string
  label: string
  isLatest: boolean
  sections: DocSection[]
}

export const versions: Version[] = [
  {
    id: 'v1.0.0',
    label: 'v1.0.0',
    isLatest: false,
    sections: [
      {
        id: 'introduction',
        title: 'Introduction',
        description: 'What is Jade and why you should use it.',
        content: [
          {
            type: 'paragraph',
            text: 'Jade is a Lua ORM that maps your database tables to Lua objects.',
          },
          {
            type: 'list',
            items: [
              '**Schema is truth.** Your database structure is defined in Lua code.',
              '**SQL is visible.** Every operation can be audited.',
              '**Migrations are deterministic.** No surprise schema changes.',
            ],
          },
        ],
      },
      {
        id: 'installation',
        title: 'Installation',
        description: 'How to install Jade.',
        content: [
          { type: 'heading', text: 'Via LuaRocks', level: 3 },
          { type: 'code', code: 'luarocks install jade', language: 'bash' },
          { type: 'heading', text: 'Requirements', level: 3 },
          {
            type: 'list',
            items: [
              'Lua 5.1, 5.2, 5.3, 5.4, or LuaJIT',
              'PostgreSQL (other drivers coming soon)',
            ],
          },
        ],
      },
      {
        id: 'quick-start',
        title: 'Quick Start',
        description: 'Get up and running with Jade.',
        content: [
          { type: 'heading', text: '1. Configure the Database', level: 3 },
          {
            type: 'code',
            language: 'lua',
            code: `local jade = require("jade")

jade.configure({
  database = {
    driver = "postgresql",
    host = "localhost",
    database = "myapp"
  }
})`,
          },
          { type: 'heading', text: '2. Define an Entity', level: 3 },
          {
            type: 'code',
            language: 'lua',
            code: `local User = jade.Entity("users", {
  id = jade.Integer():primaryKey(),
  name = jade.String(120),
  email = jade.String():unique(),
})`,
          },
        ],
      },
      {
        id: 'schema',
        title: 'Schema',
        description: 'Column types and modifiers.',
        content: [
          {
            type: 'code',
            language: 'lua',
            code: `jade.String(120)      -- VARCHAR(120)
jade.Text()           -- TEXT
jade.Integer()        -- INTEGER
jade.Float()          -- FLOAT
jade.Decimal(10, 2)   -- DECIMAL(10,2)
jade.Boolean()        -- BOOLEAN
jade.Timestamp()      -- TIMESTAMPTZ
jade.Date()           -- DATE
jade.UUID()           -- UUID`,
          },
        ],
      },
      {
        id: 'relations',
        title: 'Relations',
        description: 'Define relationships between entities.',
        content: [
          {
            type: 'code',
            language: 'lua',
            code: `Post:belongsTo(User)
User:hasMany(Post)

-- Eager loading
local posts = Post:include("author"):get()`,
          },
        ],
      },
      {
        id: 'migrations',
        title: 'Migrations',
        description: 'Manage your database schema changes.',
        content: [
          {
            type: 'code',
            language: 'bash',
            code: `esmeralda generate
esmeralda migrate
esmeralda migrate rollback`,
          },
        ],
      },
      {
        id: 'transactions',
        title: 'Transactions',
        description: 'Wrap multiple operations atomically.',
        content: [
          {
            type: 'code',
            language: 'lua',
            code: `jade.transaction.run(jade.driver(), function(tx)
  local user = User:create({ name = "Lucas" })
  Post:create({ title = "Hello", author_id = user.id })
end)`,
          },
        ],
      },
      {
        id: 'error-codes',
        title: 'Error Codes',
        description: 'Structured error handling.',
        content: [
          {
            type: 'code',
            language: 'lua',
            code: `local ok, err = pcall(function()
  User:create({ email = "invalid" })
end)

if not ok then
  print(err.code)    -- J1016
  print(err.message)
end`,
          },
        ],
      },
    ],
  },
  {
    id: 'v1.1.0',
    label: 'v1.1.0',
    isLatest: true,
    sections: docsSections,
  },
]

export function getVersion(versionId: string): Version | undefined {
  return versions.find(v => v.id === versionId)
}

export function getLatestVersion(): Version {
  return versions.find(v => v.isLatest) || versions[versions.length - 1]
}

export function getDefaultVersionId(): string {
  return getLatestVersion().id
}
