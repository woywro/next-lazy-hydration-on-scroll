import BaseComponent from '../BaseComponent/BaseComponent'

export default function Component1() {
  return (
    <BaseComponent
      color="text-teal-400"
      title="Static Import (executed instantly)"
      description="This component loads immediately with the page and is always interactive. Perfect for above-the-fold content that needs immediate interaction."
    />
  )
}
