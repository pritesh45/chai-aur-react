import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setCounter]=useState(15)
  const addValue=()=>{
    console.log("onClick",counter);
    // if(counter>1){
    counter=counter+1
    // }
    setCounter(counter);
  }
  const removevalue=()=>{
    console.log("Clicked",counter);
    if(counter>0){
    counter=counter-1;
    }
    setCounter(counter);
  }
  return (
    <>
     <h1>chai aur react</h1>
     <h2>Counter value: {counter}</h2>
     <button onClick={addValue}>Add value</button>
     <br/>
     <button onClick={removevalue}>Remove value</button>
    </>
  )
}

export default App
