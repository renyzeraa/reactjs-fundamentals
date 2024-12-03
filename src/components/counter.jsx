import { useState } from "react"

export function Counter(){
  const [counter, setCounter] = useState(0)

  return (
    <div>
      <h2>{counter}</h2>
      <button onClick={() => {return setCounter((state) => ++state)}}>Aumentar</button>
      <button onClick={() => {return setCounter((state) => --state)}}>Diminuir</button>
    </div>
  )
}