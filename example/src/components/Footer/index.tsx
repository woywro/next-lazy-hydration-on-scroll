export default function Footer() {
  return (
    <footer className="w-full py-8 text-center text-gray-400">
      <p className="text-sm">
        Made with{' '}
        <span className="text-red-500" aria-label="love">
          ❤️
        </span>{' '}
        by{' '}
        <a
          href="https://github.com/woywro"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-300 transition-colors"
        >
          woywro
        </a>
      </p>
    </footer>
  )
}
