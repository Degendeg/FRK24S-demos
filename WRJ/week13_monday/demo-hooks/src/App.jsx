import { useState, useCallback } from "react"
import Fibonacci from "./Fibonacci"

const App = () => {
  const [count, setCount] = useState(0)
  const [number, setNumber] = useState(10)
  const [useMemoEnabled, setUseMemoEnabled] = useState(true)

  const increment = useCallback(() => setCount((prev) => prev + 1), [])

  return (
    <div className="container text-center mt-5" style={{ width: '500px' }}>
      <h1 className="mb-4">useMemo vs. utan useMemo</h1>

      <button className="btn btn-primary me-2" onClick={increment}>
        Öka count: {count}
      </button>

      <input
        type="number"
        className="form-control mt-3"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />

      <div className="form-check mt-3">
        <input
          type="checkbox"
          className="form-check-input"
          id="useMemoToggle"
          checked={useMemoEnabled}
          onChange={() => setUseMemoEnabled((prev) => !prev)}
        />
        <label className="form-check-label" htmlFor="useMemoToggle">
          Använd useMemo
        </label>
      </div>

      <Fibonacci number={number} useMemoEnabled={useMemoEnabled} />
    </div>
  )
}

export default App