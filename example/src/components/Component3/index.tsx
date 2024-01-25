const Component3 = () => {
  console.log('Component3 hydrates')
  return (
    <div className="component" style={{ background: '#45818e' }}>
      <h1>Component 3</h1>
      <p>dynamic import + progressive hydration on scroll</p>
    </div>
  )
}

export default Component3
