interface BaseComponentProps {
  title: string
}

export default function BaseComponent({ title }: BaseComponentProps) {
  return (
    <section className="h-[100vh] w-full flex items-center justify-center px-6 my-12">
      <div className="w-full h-full border border-gray-200 px-12 py-10 rounded-xl bg-white shadow-sm flex items-center justify-center">
        <div className="text-base text-gray-600">{title}</div>
      </div>
    </section>
  )
}
