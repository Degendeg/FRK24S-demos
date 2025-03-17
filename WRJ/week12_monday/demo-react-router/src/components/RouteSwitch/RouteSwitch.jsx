import { Route, Routes } from "react-router-dom"
import Home from "../../pages/Home"
import About from "../../pages/About"
import Contact from "../../pages/Contact"
import NotFound from "../../pages/NotFound"
import Article from "../../pages/Article"

const RouteSwitch = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/article/:id" element={<Article />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
export default RouteSwitch