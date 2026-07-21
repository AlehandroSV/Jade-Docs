export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-zinc-500 dark:text-zinc-400 text-sm">
            <span className="font-semibold text-zinc-700 dark:text-zinc-300">Jade</span> &copy; 2026
          </div>
          <div className="flex items-center gap-6 text-sm text-zinc-500 dark:text-zinc-400">
            <a
              href="https://github.com/AlehandroSV/Jade"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-900 dark:hover:text-white transition"
            >
              GitHub
            </a>
            <a
              href="https://luarocks.org/modules/alehandrosv/jade"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-900 dark:hover:text-white transition"
            >
              LuaRocks
            </a>
            <a
              href="https://www.npmjs.com/package/@alehandrosv/esmeralda-cli"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-900 dark:hover:text-white transition"
            >
              npm
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
