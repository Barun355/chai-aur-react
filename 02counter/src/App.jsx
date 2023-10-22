import { useState } from 'react'
import './App.css'

function App() {
  
  const [counter, setCounter] = useState(15)

  const  addCounter = () => {
    setCounter(counter + 1)
  }

  const  removeCounter = () => {
    setCounter(counter - 1)
  }

  return (
    <>
      <h2>Chai aur react</h2>
      <h2>Counte value: {counter}</h2>

      <button onClick={addCounter}>Add Value {counter}</button>
      <button onClick={removeCounter}>Remove Value {counter}</button>
    </>
  )
}

export default App
