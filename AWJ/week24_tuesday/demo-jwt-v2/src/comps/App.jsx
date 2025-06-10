import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import Login from "../pages/Login"
import Guard from "./Guard"
import Profile from "../pages/Profile"
import NotFound from "../pages/NotFound"
import Header from "./Header"

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-900 text-black shadow-lg">
        <Header />
        <div className="max-w-md mx-auto mt-[20vh] p-6 bg-white rounded shadow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route element={<Guard />}>
              <Route path="/profile" element={<Profile />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter >
  )
}

export default App
