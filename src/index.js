import ReactDOM from 'react-dom/client'
import { useState } from 'react'
const root = ReactDOM.createRoot(document.getElementById("root"))


function Counter()
{
    var [count,setcount] = useState(0)

function increment()
{
    setcount(count+1)

}

function decrement()
{
    setcount(count-1)
}

    return(
        <div>
            <h1 style={{marginLeft:"90px"}}>{count}</h1>
            <button onClick={increment}style={{backgroundColor:"blueviolet",color:"white",padding:"10px",fontSize:"medium"}}>Increment</button>
            <button onClick={decrement} style={{backgroundColor:"blueviolet",color:"white",padding:"10px",fontSize:"medium",marginLeft:"10px"}}>Decrement</button>
        </div>)
}


function Randomnumber()
{
  var [rnumber,setrnumber] = useState("")
  
   function generaternumber()
   {
     const number = (Math.floor(Math.random()*100)+1)
     setrnumber(number)
  
   }
   return(
    <div>
      <h1>Randomnumber: {rnumber}</h1>
      <button onClick={generaternumber} style={{backgroundColor:"blueviolet",color:"white",padding:"10px",fontSize:"medium"}}>Generate number</button>
    </div>
   )
}

root.render(
    <div>
      <Counter/>
      <Randomnumber/>
      
    </div>
  )





