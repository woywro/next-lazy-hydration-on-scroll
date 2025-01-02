import { Github, Package, ChevronDown, Terminal } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function HeroSection() {
  const [isMac, setIsMac] = useState(false)

  useEffect(() => {
    setIsMac(navigator.platform.toLowerCase().includes('mac'))
  }, [])

  const shortcut = isMac ? (
    <>
      <kbd className="font-mono px-1.5 py-0.5 text-xs bg-zinc-800 rounded border border-zinc-700">⌘</kbd>
      {' + '}
      <kbd className="font-mono px-1.5 py-0.5 text-xs bg-zinc-800 rounded border border-zinc-700">⌥</kbd>
      {' + '}
      <kbd className="font-mono px-1.5 py-0.5 text-xs bg-zinc-800 rounded border border-zinc-700">J</kbd>
    </>
  ) : (
    <kbd className="font-mono px-1.5 py-0.5 text-xs bg-zinc-800 rounded border border-zinc-700">F12</kbd>
  )

  return (
    <div className="min-h-[100vh] flex flex-col items-center justify-center py-24 px-6 bg-black relative">
      <div className="text-center max-w-4xl mx-auto">
        <div className="mb-6 inline-flex items-center px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm">
          <span className="text-sm text-zinc-400">Try it out!</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 leading-[1.1] text-violet-500">
          next-lazy-hydration-on-scroll
        </h1>

        <p className="text-zinc-400 text-xl mb-12 leading-relaxed max-w-3xl mx-auto">
          Optimize your Next.js application performance by lazy hydrating components only when they enter the viewport.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          <a
            href="https://github.com/woywro/next-lazy-hydration-on-scroll"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-white text-black font-medium rounded-lg hover:bg-zinc-200 transition-colors"
          >
            <Github className="w-5 h-5" />
            View on GitHub
          </a>

          <a
            href="https://www.npmjs.com/package/next-lazy-hydration-on-scroll"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-zinc-800 text-white font-medium rounded-lg hover:bg-zinc-700 transition-colors"
          >
            <Package className="w-5 h-5" />
            Install Package
          </a>
        </div>
      </div>

      <div className="hidden md:flex absolute bottom-12 left-0 right-0 flex-col items-center gap-6">
        <div className="flex items-center gap-2 text-sm text-zinc-600 bg-zinc-900/50 px-3 py-1.5 rounded-full border border-zinc-800/50">
          <Terminal className="w-4 h-4" />
          <span>Press {shortcut} to open Network tab</span>
        </div>

        <div className="flex flex-col items-center gap-4">
          <div className="h-[1px] w-12 bg-zinc-800" />
          <div className="flex items-center gap-2 text-sm text-zinc-500">
            <ChevronDown className="w-4 h-4 animate-bounce" />
            <span>Scroll to see how it works</span>
          </div>
        </div>
      </div>
    </div>
  )
}
