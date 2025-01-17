import BaseComponent from '../BaseComponent/BaseComponent'

export default function Component2() {
  return (
    <BaseComponent
      color="text-purple-400"
      title="Dynamic Import (next/dynamic)"
      description="This component demonstrates Next.js dynamic imports (next/dynamic). While it enables code splitting, the real performance benefits come when used with conditional rendering (like in tabs or modals). Without conditional rendering, the split code still loads immediately, reducing the advantage of dynamic imports."
    />
  )
}
