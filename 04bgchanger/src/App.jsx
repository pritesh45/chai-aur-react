import { useState } from "react"


function App() {
 const [color,setColor]=useState("olive")
  return (
  <div className="w-full h-screen duration-200"
    style={{backgroundColor: color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl">
          <button onClick={()=>setColor("Red")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor:"red"}}>Red</button>
          <button onClick={()=>setColor("Green")} 
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor:"Green"}}>Green</button>
          <button onClick={()=>setColor("blue")}className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor:"Blue"}}>Blue</button>
          <button onClick={()=>setColor("orange")}className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor:"orange"}}>orange</button>
          <button onClick={()=>setColor("black")}className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor:"black"}}>black</button>
          <button onClick={()=>setColor("aqua")}className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor:"aqua"}}>aqua</button>
          <button onClick={()=>setColor("violet")}className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor:"violet"}}>violet</button>
        </div>
      </div>
  </div>
  )
}

export default App
