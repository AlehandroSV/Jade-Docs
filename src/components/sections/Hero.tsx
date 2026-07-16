import { Link } from 'react-router-dom'
import { ArrowRight, Database, Shield, Zap } from 'lucide-react'
import CodeBlock from '../ui/CodeBlock'

const quickStartCode = `local jade = require("jade")

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

-- Create
User:create({ name = "Lucas", email = "lucas@email.com" })

-- Read
local users = User:where(User.active:eq(true)):get()`

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 via-slate-900 to-slate-900" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="text-center mb-16">
          <h1 className="text-5xl lg:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">
              Jade
            </span>{' '}
            ORM
          </h1>
          <p className="text-xl lg:text-2xl text-slate-400 mb-8 max-w-2xl mx-auto">
            A modern ORM for Lua. Declarative schema, automatic migrations, 
            and a powerful query builder.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/docs"
              className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-lg font-medium transition"
            >
              Get Started
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="https://github.com/AlehandroSV/Jade"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-8 py-3 rounded-lg font-medium transition border border-slate-700"
            >
              View on GitHub
            </a>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <CodeBlock code={quickStartCode} language="lua" showLineNumbers />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          <div className="text-center p-6">
            <Database className="w-12 h-12 text-emerald-500 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Multi-Database</h3>
            <p className="text-slate-400">PostgreSQL, MySQL, SQLite support</p>
          </div>
          <div className="text-center p-6">
            <Zap className="w-12 h-12 text-emerald-500 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Fast</h3>
            <p className="text-slate-400">Optimized query builder with lazy evaluation</p>
          </div>
          <div className="text-center p-6">
            <Shield className="w-12 h-12 text-emerald-500 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Secure</h3>
            <p className="text-slate-400">SQL injection protection built-in</p>
          </div>
        </div>
      </div>
    </section>
  )
}
