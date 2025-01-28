export default function Footer() {
  return (
    <footer className="w-full py-6 text-center text-gray-400">
      <p className="text-xs">
        Made with{' '}
        <span className="text-gray-300" aria-label="love">
          ❤️
        </span>{' '}
        by{' '}
        <a
          href="https://github.com/woywro"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-gray-500 transition-colors"
        >
          woywro
        </a>
      </p>
    </footer>
  )
}
