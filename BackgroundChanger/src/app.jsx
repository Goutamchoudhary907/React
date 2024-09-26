import { useState } from 'preact/hooks'
import preactLogo from './assets/preact.svg'
import viteLogo from '/vite.svg'
import './app.css'

export function App() {
 
  const [color,setColor]=useState("olive")
  return (
    <>
    <div className='w-full h-screen duration-200' style={{backgroundColor:color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
      <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl'>
      <button
       className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
       style={{backgroundColor:"red"}}
       >Red</button>
      </div>
      
      {/* <button className='bg-red-500 w-20 h-8'>Red</button>
      <button className='w-20 h-8 bg-green-500'>Green</button>
      <button className='w-20 h-8 bg-blue-500'>Blue</button>
      <button className='w-20 h-8 bg-slate-700'>Olive</button>
      <button className='w-20 h-8 bg-gray-500'>Gray</button>
      <button className='w-20 h-8 bg-yellow-500'>Yellow</button>
      <button className='w-20 h-8 bg-pink-500'>Pink</button>
      <button className='w-20 h-8 bg-purple-500'>Purple</button>
      <button className='w-20 h-8 bg-blue-500'>Lavender</button>
      <button className='w-20 h-8 bg-white'>White</button>
      <button className='w-20 h-8 bg-black'>Black</button> */}
      </div>
    </div>
    </>
  )
}
