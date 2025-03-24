import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom"
import Home from '../pages/Home'
import Deferred from '../pages/Deferred'
import FormStatus from '../pages/FormStatus'
import Optimistic from '../pages/Optimistic'
import NotFound from "../pages/NotFound"

const App = () => {
  return (
    <Router>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container">
          <Link to="/" className="navbar-brand">React 19 Demo</Link>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/optimistic" element={<Optimistic />} />
        <Route path="/formstatus" element={<FormStatus />} />
        <Route path="/deferred" element={<Deferred />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App