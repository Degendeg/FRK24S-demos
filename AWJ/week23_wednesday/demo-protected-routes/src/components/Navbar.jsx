import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 text-white">
      <ul className="flex gap-4 justify-center">
        <li>
          <Link to="/" className="hover:underline">Home</Link>
        </li>
        <li>
          <Link to="/about" className="hover:underline">About</Link>
        </li>
        <li>
          <Link to="/login" className="hover:underline">Login</Link>
        </li>
        <li>
          <Link to="/dashboard" className="hover:underline">Dashboard</Link>
        </li>
        <li>
          <Link to="/settings" className="hover:underline">Settings</Link>
        </li>
        <li>
          <Link to="/lolwtf" className="hover:underline">Broken route ⛓️‍💥</Link>
        </li>
      </ul>
    </nav>
  )
}
export default Navbar