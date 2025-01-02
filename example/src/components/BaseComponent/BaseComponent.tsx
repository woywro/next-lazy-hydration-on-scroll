interface BaseComponentProps {
  title: string
  color?: string
  description: string
}

export default function BaseComponent({ title, color = 'text-violet-500', description }: BaseComponentProps) {
  return (
    <div className="h-screen flex items-center justify-center p-6 bg-black">
      <div className="p-8 bg-zinc-900 rounded-lg w-full max-w-3xl border border-zinc-800 relative">
        <div className="absolute top-3 right-3 flex items-center gap-2">
          <div className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" />
          <span className="text-xs text-zinc-500 font-medium">Ready</span>
        </div>
        <h2 className={`text-3xl font-bold mb-3 ${color}`}>{title}</h2>
        <p className="text-zinc-400 text-base leading-relaxed">{description}</p>
      </div>
    </div>
  )
}
