import dynamic from 'next/dynamic'
import BaseComponent from '../BaseComponent/BaseComponent'

// Create a lazy-loaded version of the component
const LazyComponent = dynamic(() => Promise.resolve(BaseComponent), {
  ssr: true, // Enable server-side rendering
  loading: () => null, // Optional loading state
})

export default function Component3() {
  return <BaseComponent title="lazyHydrate Import" />
}
