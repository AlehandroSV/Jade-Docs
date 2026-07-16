import { Gem } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Gem className="w-6 h-6 text-emerald-500" />
              <span className="text-lg font-bold">Jade</span>
            </div>
            <p className="text-slate-400 text-sm">
              A modern ORM for Lua
            </p>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Documentation</h3>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li><a href="/docs" className="hover:text-white transition">Getting Started</a></li>
              <li><a href="/api" className="hover:text-white transition">API Reference</a></li>
              <li><a href="/examples" className="hover:text-white transition">Examples</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Community</h3>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li><a href="https://github.com/AlehandroSV/Jade" className="hover:text-white transition">GitHub</a></li>
              <li><a href="https://github.com/AlehandroSV/Jade/issues" className="hover:text-white transition">Issues</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Packages</h3>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li><a href="https://luarocks.org/modules/alehandrosv/jade" className="hover:text-white transition">LuaRocks</a></li>
              <li><a href="https://www.npmjs.com/package/@alehandrosv/esmeralda-cli" className="hover:text-white transition">npm</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-500 text-sm">
          <p>&copy; 2026 Jade ORM. MIT License.</p>
        </div>
      </div>
    </footer>
  )
}
