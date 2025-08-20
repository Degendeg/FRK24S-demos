import { useState } from 'react'
import './App.css'
import Geo from './components/Geo'
import Maps from './components/Maps'
import Cam from './components/Cam'

function App() {
  const [mapCoords, setMapCoords] = useState(null)

  return (
    <>
      <h1>React demo: Webcam, Geolocation and Google Maps</h1>
      <Cam />
      <hr />
      <Geo mapCoords={mapCoords} setMapCoords={setMapCoords} />
      <hr />
      <Maps mapCoords={mapCoords} setMapCoords={setMapCoords} />
    </>
  )
}

export default App
