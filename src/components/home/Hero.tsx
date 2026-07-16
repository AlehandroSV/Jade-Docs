import { Link } from 'react-router-dom'
import { ArrowRight, GitBranch } from 'lucide-react'
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
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/5 via-transparent to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 pt-20 pb-16 sm:pt-32 sm:pb-24">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900/50 text-zinc-400 text-sm mb-8">
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
            v0.1.8 - Now with error codes
          </div>

          <h1 className="text-5xl sm:text-7xl font-bold tracking-tight mb-6">
            <span className="text-white">Jade</span>{' '}
            <span className="bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">ORM</span>
          </h1>

          <p className="text-lg sm:text-xl text-zinc-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            A modern ORM for Lua. Declarative schema, automatic migrations, 
            and a powerful query builder. Built for production.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/docs"
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-3 rounded-xl font-medium transition group"
            >
              Get Started
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="https://github.com/AlehandroSV/Jade"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-zinc-800 hover:bg-zinc-700 text-white px-6 py-3 rounded-xl font-medium transition border border-zinc-700"
            >
              <GitBranch className="w-4 h-4" />
              Star on GitHub
            </a>
          </div>
        </div>

        <div className="mt-16 max-w-3xl mx-auto">
          <CodeBlock code={codeExample} language="lua" />
        </div>
      </div>
    </section>
  )
}
