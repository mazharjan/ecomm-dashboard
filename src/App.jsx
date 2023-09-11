import { useState } from 'react'
import {Button} from 'react-bootstrap';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>E-Comm</h1>
      <button>Normal button</button>
      <Button>React Bootstrap</Button>
    </>
  )
}

export default App
