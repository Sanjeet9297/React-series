
import { useState } from 'react';
import './App.css'

function App() {

  let [counter, setCounter ] = useState(15)

  // let counter = 15

   const addValue = () =>{
   console.log("Clicked",counter);
    //counter = counter + 1;
    setCounter(counter + 1)
   }

   const removeValue = () =>{
    setCounter(counter - 1)
   }

  return (
    <>
      <h1> Chai or React</h1>
      <h2>Counter Value: {counter}</h2>

      <button onClick={addValue}>Add Value</button>
      <br></br>
      <br></br>
      <button onClick={removeValue}>Remove Value</button>
    </>
  );
}

export default App
