
import { useEffect, useState } from 'react'
import './App.css'

function App() {
const [color,setColor] = useState("")

useEffect(()=>{
  localStorage.setItem("savedColor",color)
},[color])
useEffect(()=>{
  const saved=localStorage.getItem("savedColor")
  if(saved){
    setColor(saved)
  }
},[color])
  return (
<div className='flex flex-col justify-center h-screen w-screen items-center bg-gray-100'>
<div className='flex flex-col justify-center items-center gap-y-5 bg-white shadow-2xl p-10 rounded-lg'>
  <h1 className='text-4xl flex justify-center font-semibold'>Color Picker</h1>
<input
  className='w-80 rounded-lg h-14 border-2 px-4 text-lg text-gray-700 shadow-sm'
  type="text"
  placeholder="Enter a color (red, #00ff00, rgb...)"
  value={color}
  onChange={(e)=>setColor(e.target.value)}
/>
<div className=' h-80 w-80 rounded-lg transition-all duration-300 border-2' style={{backgroundColor:color}}></div>
</div>
</div>
  )
}

export default App
