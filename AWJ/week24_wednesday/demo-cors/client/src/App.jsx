import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [response, setResponse] = useState(null)
  const [testMessage, setTestMessage] = useState(null)

  useEffect(() => {
    fetch(import.meta.env.VITE_API_URL + '/data')
      .then(res => res.json())
      .then(data => setData(data))
      .catch(err => {
        console.log(err)
        if (err.message === 'Failed to fetch') {
          setError('Något gick fel, vänligen försök igen')
        }
        setError(err.message)
      })
  }, [])

  return (
    <div className="App">
      <section className="App-section">
        <h1>FRK24S DEMO</h1>
        {data && <h2>{data.message}</h2>}
        {!data && !error && <p>Loading...</p>}
        {error && <p>{error}</p>}
      </section>
    </div>
  )
}

export default App
