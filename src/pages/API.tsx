import { entityMethods, conditionOperators } from '../data/api'
import CodeBlock from '../components/ui/CodeBlock'

export default function API() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
      <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white mb-2">
        API Reference
      </h1>
      <p className="text-zinc-500 dark:text-zinc-400 mb-10">
        Complete reference for all Jade methods and operators.
      </p>

      <section className="mb-16">
        <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white mb-6">
          Entity Methods
        </h2>
        <div className="space-y-8">
          {entityMethods.map((method) => (
            <div key={method.name} className="border-b border-zinc-200 dark:border-zinc-800 pb-8">
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-1 font-mono">
                {method.signature}
              </h3>
              <p className="text-zinc-500 dark:text-zinc-400 text-sm mb-3">
                {method.description}
              </p>
              <p className="text-xs text-zinc-400 dark:text-zinc-500 mb-3">
                Returns: <code className="text-emerald-500 dark:text-emerald-400">{method.returns}</code>
              </p>
              <CodeBlock code={method.example} language="lua" />
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white mb-6">
          Condition Operators
        </h2>
        <div className="space-y-6">
          {conditionOperators.map((op) => (
            <div key={op.name} className="border-b border-zinc-200 dark:border-zinc-800 pb-6">
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-1">
                <span className="text-emerald-500 dark:text-emerald-400">{op.symbol}</span>
                <span className="text-zinc-400 dark:text-zinc-500 text-sm ml-3 font-normal">
                  {op.description}
                </span>
              </h3>
              <CodeBlock code={op.example} language="lua" />
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
