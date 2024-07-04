import { Component } from '@/styles/Component'

const Component1 = () => {
  console.log('Component1 hydrates')
  return (
    <Component style={{ background: '#0078ff' }}>
      <h1>Component 1</h1>
      <p>normal import</p>
    </Component>
  )
}

export default Component1
