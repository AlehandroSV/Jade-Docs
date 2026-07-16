import { Database, Zap, Shield, GitBranch, FileCode, Layers } from 'lucide-react'

const features = [
  {
    icon: Database,
    title: 'Multi-Database',
    description: 'PostgreSQL, MySQL, SQLite support with a unified API.',
  },
  {
    icon: Zap,
    title: 'Fast',
    description: 'Optimized query builder with lazy evaluation.',
  },
  {
    icon: Shield,
    title: 'Secure',
    description: 'Built-in SQL injection protection and input validation.',
  },
  {
    icon: GitBranch,
    title: 'Migrations',
    description: 'Automatic schema migrations with rollback support.',
  },
  {
    icon: FileCode,
    title: 'Type Safe',
    description: 'LuaLS type generation for autocomplete.',
  },
  {
    icon: Layers,
    title: 'Relations',
    description: 'ForeignKey, hasMany, hasOne, belongsTo.',
  },
]

export default function Features() {
  return (
    <section className="py-24 border-t border-zinc-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Everything you need
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Jade provides all the tools you need to build production-ready applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="p-6 rounded-2xl border border-zinc-800 bg-zinc-900/50 hover:border-zinc-700 transition group"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-4 group-hover:bg-emerald-500/20 transition">
                <feature.icon className="w-6 h-6 text-emerald-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
