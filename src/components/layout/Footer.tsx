export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-zinc-500">
          <div className="flex items-center gap-4">
            <span className="text-white font-medium">Jade</span>
            <span>&copy; 2026</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="https://github.com/AlehandroSV/Jade" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
              GitHub
            </a>
            <a href="https://luarocks.org/modules/alehandrosv/jade" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
              LuaRocks
            </a>
            <a href="https://www.npmjs.com/package/@alehandrosv/esmeralda-cli" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
              npm
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
