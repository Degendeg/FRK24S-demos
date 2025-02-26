import './App.css'
import Footer from './components/Footer'
import Main from './components/Main'
import Navbar from './components/Navbar'
import SideNav from './components/SideNav'

function App() {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex flex-1">
        <SideNav />
        <Main />
      </div>
      <Footer />
    </div>
  )
}

export default App
