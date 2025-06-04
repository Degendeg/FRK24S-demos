import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "../pages/Home"
import About from "../pages/About"
import Login from "../pages/Login"
import Dashboard from "../pages/Dashboard"
import Settings from "../pages/Settings"
import Navbar from "./Navbar"
import ProtectedRoute from "./ProtectedRoute"
import NotFound from "../pages/NotFound"

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App
