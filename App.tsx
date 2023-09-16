import {useEffect, useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [notify, setNotify] = useState('')
  const increment = () => {

    setCount(count +1)
    
  }
  const decrement = () => {
    setCount(count-1)
  }
  const reset = () => {
    setCount(0)
  }
  const fadeElement = () => {
    setNotify('')
  }
  useEffect(() => {
    setNotify('The state changed.')
    alert("this works")
    setTimeout(fadeElement,2000)
  },[count])
  return (
    <div className=''>
      <h1>{notify}</h1>

    <div className=' flex h-screen justify-center items-center'>

      <div className='grid grid-cols-1 grid-rows-2 max-h-20'>
        <p>{count}</p>
        <div className=''>
        <button className='tranisition duration-300 border border-gray-300 py-1 px-8 rounded-md shadow-md hover:shadow-lg hover:border-gray-400' onClick={increment}>+</button>
        <button className='tranisition duration-300 border border-gray-300 py-1 px-8 rounded-md shadow-md hover:shadow-lg hover:border-gray-400' onClick={decrement}>-</button>
        <button className='tranisition duration-300 border border-gray-300 py-1 px-8 rounded-md shadow-md hover:shadow-lg hover:border-gray-400' onClick={reset}>Reset</button>
        </div>
      </div>

    </div>
    </div>
  )
}

export default App
