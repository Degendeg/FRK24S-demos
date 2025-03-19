import { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const [count, setCount] = useState(0)
  const [time, setTime] = useState(new Date().toLocaleTimeString('sv-SE'))

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString('sv-SE'))
    }, 1000) // 1 sek

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 flex-column">
      <div className="card p-4 shadow-lg" style={{ width: '300px' }}>
        <h1 className="text-center">Counter: {count}</h1>
        <div className="d-flex justify-content-center">
          <button className="btn btn-primary m-2" onClick={() => setCount(count + 1)}>
            Increment
          </button>
          <button className="btn btn-danger m-2" onClick={() => setCount(count - 1)}>
            Decrement
          </button>
        </div>
      </div>

      {/* Klocka */}
      <div className="mt-4">
        <h3>Current Time: {time}</h3>
      </div>
    </div>
  )
}

export default App
