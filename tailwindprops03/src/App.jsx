
import Card from "./components/Card"

function App() { 
let myObj = {
  username: "suruchi",
  age: 20
}

// let newArr = [1,2,3];

  return (
    <div className='bg-green-400 text-black p-4 rounded-xl mb-4'>
      <h1 >Tailwind Test</h1>
      <Card obj={myObj} btnText="Enjoy" />
    </div>
  )
}

export default App