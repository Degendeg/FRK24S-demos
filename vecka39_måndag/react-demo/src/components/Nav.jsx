import { NavLink } from 'react-router-dom'
import '../styles/Nav.css'

function Nav() {
  const myClickHandler = () => {
    console.log('myClickHandler is clicked')
  }
  return (
    <div className="topnav">
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/details">Details</NavLink></li>
        <li><NavLink to="/info">Info</NavLink></li>
        <li><a href="/">Home (anchor)</a></li>
      </ul>
      <button onClick={myClickHandler}>Click me!</button>
    </div>
  )
}
export default Nav