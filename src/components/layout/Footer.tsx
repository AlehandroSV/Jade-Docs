import { Gem } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-[#09090b]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
                <Gem className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-bold">Jade</span>
            </div>
            <p className="text-zinc-500 text-sm">
              A modern ORM for Lua
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Product</h4>
            <ul className="space-y-2">
              <li><a href="/docs" className="text-zinc-500 hover:text-white text-sm transition">Documentation</a></li>
              <li><a href="/api" className="text-zinc-500 hover:text-white text-sm transition">API Reference</a></li>
              <li><a href="/examples" className="text-zinc-500 hover:text-white text-sm transition">Examples</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Community</h4>
            <ul className="space-y-2">
              <li><a href="https://github.com/AlehandroSV/Jade" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white text-sm transition">GitHub</a></li>
              <li><a href="https://github.com/AlehandroSV/Jade/issues" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white text-sm transition">Issues</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Install</h4>
            <ul className="space-y-2">
              <li><a href="https://luarocks.org/modules/alehandrosv/jade" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white text-sm transition">LuaRocks</a></li>
              <li><a href="https://www.npmjs.com/package/@alehandrosv/esmeralda-cli" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white text-sm transition">npm (CLI)</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-zinc-800 mt-10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-zinc-600 text-sm">
            &copy; 2026 Jade ORM. MIT License.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-zinc-600 text-sm">v0.1.8</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
