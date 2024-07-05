import { Component } from '@/styles/Component.styles'
import { useEffect, useState } from 'react'

const Component3 = () => {
  console.log('Component3 hydrates')

  const [data, setData] = useState<number[]>([])

  useEffect(() => {
    console.log('Starting heavy computation...')
    let largeArray: number[] = []
    for (let i = 0; i < 1e5; i++) {
      largeArray.push(Math.random())
    }
    largeArray.sort((a, b) => a - b)
    setData(largeArray)
    console.log('Heavy computation completed')
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setData((prevData) => prevData.map((num) => num * Math.random()))
      console.log('State updated')
    }, 100)
    return () => clearInterval(interval)
  }, [])
  return (
    <Component style={{ background: '#ff9a00' }}>
      <h1>Component 3</h1>
      <p>Progressive Hydration on Scroll</p>
    </Component>
  )
}

export default Component3
