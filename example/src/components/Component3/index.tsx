import dynamic from 'next/dynamic'
import BaseComponent from '../BaseComponent/BaseComponent'

// Create a lazy-loaded version of the component
const LazyComponent = dynamic(() => Promise.resolve(BaseComponent), {
  ssr: true, // Enable server-side rendering
  loading: () => null, // Optional loading state
})

export default function Component3() {
  return (
    <BaseComponent
      color="text-yellow-400"
      title="Prerendered + Executed on scroll"
      description="This component is pre-rendered on the server and its JavaScript is only loaded when scrolled into view. Unlike Component2's immediate loading after page load, this truly loads on-demand using intersection observer."
    />
  )
}
