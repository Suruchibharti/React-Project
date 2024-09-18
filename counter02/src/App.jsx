import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

 let [counter, setCounter] = useState(15);

  // let counter=3;
  const addvalue =  () =>{
  console.log("clicked", counter);
  if(counter < 20)
  setCounter(counter +1);

  }

  const removeValue = () => {
    if(counter>0){
     setCounter(counter -1);
    }
  }

  return (
    <>
      <h1>chai or code</h1>
      <h2>Counter value: {counter}</h2>

      <button
      onClick={addvalue}
      >Add value {counter}</button>
      <br />
      <button onClick={removeValue}>remove value {counter}</button>
    </>
  )
}

export default App
