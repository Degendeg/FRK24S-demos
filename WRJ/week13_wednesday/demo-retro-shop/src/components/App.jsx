import { Link, Route, BrowserRouter as Router, Routes, useParams } from "react-router-dom"
import Home from "../pages/Home"
import Game from "../pages/Game"
import { useEffect, useState } from "react"
import Navbar from "./Navbar"
import NotFound from "../pages/NotFound"
import Loading from "./Loading"

function App() {
  const [games, setGames] = useState(null)
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/${import.meta.env.VITE_API_GAMES_URI}`)
      .then(res => res.json())
      .then(data => setGames(data))
      .catch(err => console.error("Error fetching games:", data))
  }, [])
  if (!games) {
    return (
      <Loading />
    )
  }
  return (
    <Router>
      <Navbar Link={Link} />
      <Routes>
        <Route path="/" element={<Home Link={Link} games={games} />} />
        <Route path="/game/:gameId" element={<Game Link={Link} useParams={useParams} games={games} />} />
        <Route path="*" element={<NotFound Link={Link} />} />
      </Routes>
    </Router>
  )
}

export default App
