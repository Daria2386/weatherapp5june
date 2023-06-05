import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [data, setData] = useState()
  const [city, setCity] = useState("munich")

  useEffect(() => {
    axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e10c8842896652d1ca26c5176f602a72`).then(i => setData(i.data))

  }, [city])

  function submitHandler (e) {
    e.preventDefault()
    setCity(e.target.city.value)
  }

  return (
    <>
    <form onSubmit={submitHandler}>
      <input type="text" name="city"/>
      <button type='submit'>Change</button>
    </form>
    {data && data.main.temp}
    </>
  )
}

export default App

