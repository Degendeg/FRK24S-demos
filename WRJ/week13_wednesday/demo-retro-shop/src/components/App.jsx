import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom"
import Home from "../pages/Home"
import Game from "../pages/Game"
import { useState } from "react"

function App() {
  const [games] = useState([
    {
      id: 1,
      name: "The Legend of Zelda: Ocarina of Time",
      price: 499,
      image: "https://images.nintendolife.com/82f557404ec71/legend-of-zelda-ocarina-of-time-cover.cover_large.jpg"
    },
    {
      id: 2,
      name: "Super Mario 64",
      price: 399,
      image: "https://images.nintendolife.com/f3c8baaa710cd/super-mario-64-cover.cover_large.jpg"
    },
    {
      id: 3,
      name: "GoldenEye 007",
      price: 349,
      image: "https://images.nintendolife.com/0becf36f5e461/goldeneye-007-cover.cover_large.jpg"
    },
    {
      id: 4,
      name: "Banjo-Kazooie",
      price: 379,
      image: "https://images.nintendolife.com/a5444f864a550/banjo-kazooie-cover.cover_large.jpg"
    },
    {
      id: 5,
      name: "Mario Kart 64",
      price: 429,
      image: "https://images.nintendolife.com/5830510298ea5/mario-kart-64-cover.cover_large.jpg"
    },
  ])
  return (
    <Router>
      <nav className="bg-gray-900 text-white p-4 text-center">
        <Link to="/" className="text-xl font-semibold">Retro Shop</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game/:id" element={<Game />} />
      </Routes>
    </Router>
  )
}

export default App
