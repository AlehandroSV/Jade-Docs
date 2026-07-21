# Jade Docs

Documentation website for [Jade ORM](https://github.com/AlehandroSV/Jade) - a modern Lua ORM for PostgreSQL, MySQL, and SQLite.

## Tech Stack

- React 19 + TypeScript
- Vite 8
- Tailwind CSS v4
- React Router v7
- React Syntax Highlighter

## Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment

This project is deployed to Vercel. Push to `main` to trigger automatic deployment.

## Structure

```
src/
├── components/
│   ├── home/          # Home page sections (Hero, Features, etc.)
│   ├── layout/        # Layout, Header, Footer
│   └── ui/            # Reusable UI components (CodeBlock, DocRenderer)
├── contexts/          # React contexts (ThemeContext)
├── data/              # Documentation content (docs.ts, api.ts, examples.ts)
├── pages/             # Page components (Home, Docs, API, Examples)
└── index.css          # Tailwind imports + base styles
```

## Content

Documentation content is defined in `src/data/` as TypeScript data files:

- `docs.ts` - All documentation sections
- `api.ts` - API reference (methods, operators)
- `examples.ts` - Code examples
- `navigation.ts` - Sidebar and navigation structure

To add or update documentation, edit the corresponding data file.
