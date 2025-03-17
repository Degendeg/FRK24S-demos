import { useState } from 'react'
import Navigation from '../Navigation/Navigation'
import RouteSwitch from '../RouteSwitch/RouteSwitch'
import './App.css'

function App() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [articles] = useState([
    { id: 1, title: 'Disaster in Wonderland' },
    { id: 2, title: 'Taxes are high, inflation is on the rise' },
    { id: 3, title: 'Keanu Reaves is doing a new movie' },
    { id: 4, title: 'Review of Matrix trilogy' },
  ])
  const navProps = { isDropdownOpen, setIsDropdownOpen, articles }
  return (
    <>
      <h1>Demo app för React Router</h1>
      <Navigation {...navProps} />
      <RouteSwitch />
    </>
  )
}

export default App
