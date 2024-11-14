import {React, useState} from 'react'

function App() {

  let [val,setVal] = useState(0)

  const increase =() =>{
    setVal(val + 1)
  }

  const decrease =() =>{
    if(val === 0) return
    setVal(val - 1)
  }

  return (
    <div className='w-full h-screen flex items-center justify-center flex-col gap-7'>
      
      <h1 className='text-7xl font-bold text-black'>Value: {val}</h1>

      <div className='flex items-center justify-between gap-10'>
        <button className='w-24 h-10 rounded-md bg-black text-white text-md' onClick={increase}>Add</button>
        <button className='w-24 h-10 rounded-md bg-black text-white text-md' onClick={decrease}>Remove</button>
      </div>

    </div>
  )
}

export default App
