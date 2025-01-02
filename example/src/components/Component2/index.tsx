import BaseComponent from '../BaseComponent/BaseComponent'

export default function Component2() {
  return (
    <BaseComponent
      color="text-purple-400"
      title="Dynamic Import (next/dynamic)"
      description="While dynamically imported, this component's JavaScript starts loading immediately after page load (not on-demand), contrary to common misconception. Dynamic imports only load conditionally when used with conditional rendering."
    />
  )
}
