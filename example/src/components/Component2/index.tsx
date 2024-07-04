import { Component } from '@/styles/Component'

const Component2 = () => {
  console.log('Component2 hydrates')
  return (
    <Component style={{ background: '#bd00ff' }}>
      <h1>Component 2</h1>
      <p>Dynamic Import</p>
    </Component>
  )
}

export default Component2
