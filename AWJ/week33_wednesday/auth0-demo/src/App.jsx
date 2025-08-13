import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { useAuth0 } from "@auth0/auth0-react"
import Login from "./pages/Login"
import Profile from "./pages/Profile"

function App() {
  const { isAuthenticated, isLoading } = useAuth0()

  if (isLoading) {
    return <div className="text-center p-10">Laddar...</div>
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/profile"
          element={isAuthenticated ? <Profile /> : <Navigate to="/" />}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
