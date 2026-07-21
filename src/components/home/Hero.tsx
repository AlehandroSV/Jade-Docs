import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import CodeBlock from '../ui/CodeBlock'

const codeExample = `local jade = require("jade")

jade.configure({
  database = {
    driver = "postgresql",
    host = "localhost",
    database = "myapp"
  }
})

local User = jade.Entity("users", {
  id = jade.Integer():primaryKey(),
  name = jade.String(120),
  email = jade.String():unique(),
})

User:create({ name = "Lucas", email = "lucas@email.com" })
local users = User:where(User.active:eq(true)):get()`

export default function Hero() {
  return (
    <section className="py-20 sm:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white mb-6">
            ORM for Lua that gets out of your way
          </h1>
          <p className="text-lg text-zinc-500 dark:text-zinc-400 mb-8 leading-relaxed">
            Jade gives you a declarative schema, automatic migrations, and a query builder
            that feels native to Lua. No magic, no hidden SQL.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/docs/quick-start"
              className="inline-flex items-center justify-center gap-2 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 px-5 py-2.5 rounded-lg font-medium text-sm hover:bg-zinc-700 dark:hover:bg-zinc-200 transition"
            >
              Quick Start
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/api"
              className="inline-flex items-center justify-center gap-2 border border-zinc-300 dark:border-zinc-700 text-zinc-600 dark:text-zinc-300 px-5 py-2.5 rounded-lg font-medium text-sm hover:bg-zinc-100 dark:hover:bg-zinc-800 transition"
            >
              API Reference
            </Link>
          </div>
        </div>

        <div className="mt-16">
          <CodeBlock code={codeExample} language="lua" />
        </div>
      </div>
    </section>
  )
}
