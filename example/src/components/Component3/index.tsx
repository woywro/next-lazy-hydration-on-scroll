import { Component } from '@/styles/Component'

const Component3 = () => {
  console.log('Component3 hydrates')
  return (
    <Component style={{ background: '#ff9a00' }}>
      <h1>Component 3</h1>
      <p>progressive hydration on scroll</p>
    </Component>
  )
}

export default Component3
