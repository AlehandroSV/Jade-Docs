export interface NavItem {
  href: string
  label: string
  labelKey?: string
  children?: NavItem[]
}

export const mainNav: NavItem[] = [
  { href: '/docs', label: 'Docs' },
  { href: '/api', label: 'API' },
  { href: '/examples', label: 'Examples' },
]

export const docsSidebar: NavItem[] = [
  {
    href: '/docs/introduction',
    label: 'Getting Started',
    children: [
      { href: '/docs/introduction', label: 'Introduction' },
      { href: '/docs/installation', label: 'Installation' },
      { href: '/docs/quick-start', label: 'Quick Start' },
      { href: '/docs/configuration', label: 'Configuration' },
    ],
  },
  {
    href: '/docs/schema',
    label: 'Schema',
    children: [
      { href: '/docs/schema', label: 'Overview' },
      { href: '/docs/column-types', label: 'Column Types' },
      { href: '/docs/column-modifiers', label: 'Column Modifiers' },
    ],
  },
  {
    href: '/docs/relations',
    label: 'Relations',
    children: [
      { href: '/docs/relations', label: 'Overview' },
    ],
  },
  {
    href: '/docs/query-builder',
    label: 'Query Builder',
    children: [
      { href: '/docs/query-builder', label: 'Overview' },
    ],
  },
  {
    href: '/docs/encryption',
    label: 'Security',
    children: [
      { href: '/docs/encryption', label: 'Encryption' },
      { href: '/docs/security', label: 'Security Features' },
    ],
  },
  {
    href: '/docs/migrations',
    label: 'Migrations',
    children: [
      { href: '/docs/migrations', label: 'Overview' },
      { href: '/docs/cli', label: 'CLI (Esmeralda)' },
    ],
  },
  {
    href: '/docs/transactions',
    label: 'Advanced',
    children: [
      { href: '/docs/transactions', label: 'Transactions' },
      { href: '/docs/callbacks', label: 'Callbacks' },
      { href: '/docs/validations', label: 'Validations' },
      { href: '/docs/soft-delete', label: 'Soft Delete' },
    ],
  },
  {
    href: '/docs/error-codes',
    label: 'Reference',
    children: [
      { href: '/docs/error-codes', label: 'Error Codes' },
      { href: '/docs/testing', label: 'Testing' },
    ],
  },
]
