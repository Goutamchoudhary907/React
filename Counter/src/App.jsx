import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 
const [counter, setCounter] = useState(15)

  // let counter =15;

  const addValue= () =>{
    // console.log("Clicked" ,counter);
    // counter= counter+1;  
      if(counter >=20){
        setCounter(counter)
      } else{
      setCounter(counter+1);

      // setCounter(prevCounter => prevCounter + 1)          for multiple updates on one click
      }
  }

  const removeValue=() =>{
    if(counter <=0){
      setCounter(counter)
    } else{
      setCounter(counter-1);
    }
  }
  return (
    <>
    <h1>React With Hitesh</h1>
    <h2>Counter Value:{counter}</h2>

    <button 
      onClick={addValue}
      >Add value</button> <br />

    <button
    onClick={removeValue}
    >Remove value</button>
    </>
  )
}

export default App
