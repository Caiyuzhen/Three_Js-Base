import { useState } from 'react'
import './App.css'
import ExampleA from './Example/Example'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
		<h2>three.js</h2>
		<ExampleA/>
    </div>
  )
}

export default App
