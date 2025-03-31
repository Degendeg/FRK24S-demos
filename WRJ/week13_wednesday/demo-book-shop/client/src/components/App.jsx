import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom'
import '../App.css'
import Books from '../pages/Books'
import NotFound from '../pages/NotFound'
import Add from '../pages/Add'
import Update from '../pages/Update'

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/add" element={<Add />} />
          <Route path="/update/:id" element={<Update />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
