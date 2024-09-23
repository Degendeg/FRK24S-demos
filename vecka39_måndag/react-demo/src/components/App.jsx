import { useState } from 'react'
import '../styles/App.css'
import WeatherDetails from './WeatherDetails'
import WeatherInfo from './WeatherInfo'
import Nav from './Nav'
import { Route, Routes } from 'react-router'
import Home from './Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/details' element={<WeatherDetails />} />
        <Route path='/info' element={<WeatherInfo />} />
      </Routes>
    </>
  )
}

export default App
