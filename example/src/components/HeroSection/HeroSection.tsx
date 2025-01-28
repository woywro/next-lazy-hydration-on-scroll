import { Github, Package } from 'lucide-react'

export default function HeroSection() {
  return (
    <div className="min-h-[100vh] flex flex-col items-center justify-center py-24 px-6 bg-white relative">
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-medium mb-6 leading-[1.1] text-gray-800">
          next-lazy-hydration-on-scroll
        </h1>

        <p className="text-gray-500 text-base mb-10 leading-relaxed max-w-2xl mx-auto">
          Optimize your Next.js application performance by loading components only when they enter the viewport.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          <a
            href="https://github.com/woywro/next-lazy-hydration-on-scroll"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 text-sm bg-gray-900 text-white font-normal rounded-lg hover:bg-gray-800 transition-colors"
          >
            <Github className="w-4 h-4" />
            View on GitHub
          </a>

          <a
            href="https://www.npmjs.com/package/next-lazy-hydration-on-scroll"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 text-sm bg-gray-100 text-gray-900 font-normal rounded-lg hover:bg-gray-200 transition-colors"
          >
            <Package className="w-4 h-4" />
            Install Package
          </a>
        </div>
      </div>
    </div>
  )
}
