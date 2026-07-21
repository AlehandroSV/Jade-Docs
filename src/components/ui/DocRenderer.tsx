import type { DocContent } from '../../data/docs'
import CodeBlock from './CodeBlock'
import { Link } from 'react-router-dom'

interface DocRendererProps {
  content: DocContent[]
}

export default function DocRenderer({ content }: DocRendererProps) {
  return (
    <div className="space-y-6">
      {content.map((item, i) => (
        <DocItem key={i} item={item} />
      ))}
    </div>
  )
}

function DocItem({ item }: { item: DocContent }) {
  switch (item.type) {
    case 'paragraph':
      return (
        <p className="text-zinc-300 dark:text-zinc-300 text-zinc-600 leading-relaxed">
          {item.text}
        </p>
      )

    case 'heading': {
      const className = {
        2: 'text-2xl font-bold tracking-tight text-white dark:text-white text-zinc-900 mt-10 mb-4',
        3: 'text-lg font-semibold text-white dark:text-white text-zinc-900 mt-8 mb-3',
        4: 'text-base font-medium text-white dark:text-white text-zinc-900 mt-6 mb-2',
      }[item.level]
      if (item.level === 2) return <h2 className={className}>{item.text}</h2>
      if (item.level === 3) return <h3 className={className}>{item.text}</h3>
      return <h4 className={className}>{item.text}</h4>
    }

    case 'code':
      return <CodeBlock code={item.code} language={item.language} title={item.title} />

    case 'list':
      return (
        <ul className="space-y-2 text-zinc-300 dark:text-zinc-300 text-zinc-600">
          {item.items.map((li, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="mt-2 w-1 h-1 bg-emerald-500 rounded-full flex-shrink-0" />
              <span dangerouslySetInnerHTML={{ __html: li }} />
            </li>
          ))}
        </ul>
      )

    case 'table':
      return (
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead>
              <tr className="border-b border-zinc-800 dark:border-zinc-800 border-zinc-200">
                {item.headers.map((h, i) => (
                  <th key={i} className="px-4 py-2 text-zinc-400 dark:text-zinc-400 text-zinc-500 font-medium">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {item.rows.map((row, i) => (
                <tr key={i} className="border-b border-zinc-800/50 dark:border-zinc-800/50 border-zinc-200/50">
                  {row.map((cell, j) => (
                    <td key={j} className="px-4 py-2 text-zinc-300 dark:text-zinc-300 text-zinc-600">
                      <code className="text-emerald-400 dark:text-emerald-400 text-emerald-600 text-xs">{cell}</code>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )

    case 'callout': {
      const styles = {
        info: 'border-blue-500/50 bg-blue-500/10 text-blue-300 dark:text-blue-300 text-blue-700',
        warning: 'border-yellow-500/50 bg-yellow-500/10 text-yellow-300 dark:text-yellow-300 text-yellow-700',
        tip: 'border-emerald-500/50 bg-emerald-500/10 text-emerald-300 dark:text-emerald-300 text-emerald-700',
      }
      return (
        <div className={`border-l-4 rounded-r-lg p-4 text-sm ${styles[item.variant]}`}>
          {item.text}
        </div>
      )
    }

    case 'link':
      return (
        <Link
          to={item.href}
          className="text-emerald-400 hover:text-emerald-300 text-sm font-medium"
        >
          {item.text}
        </Link>
      )

    default:
      return null
  }
}
