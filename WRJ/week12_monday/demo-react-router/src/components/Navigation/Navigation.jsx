import { NavLink } from "react-router-dom"
import "./Navigation.css"

const Navigation = ({ articles, isDropdownOpen, setIsDropdownOpen }) => {
  return (
    <nav className="nav">
      <ul className="nav-list">
        <li><NavLink to="/" className="nav-link">Home</NavLink></li>
        <li className="dropdown">
          <button
            className="dropdown-btn"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            Articles {isDropdownOpen ? '▲' : '▼'}
          </button>
          {isDropdownOpen && (
            <ul className="dropdown-menu">
              {articles.map((article, idx) => (
                <li key={article.id}>
                  <NavLink
                    to={`/article/${article.id}`}
                    className="dropdown-link"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    <strong>Article</strong>: {article.title}
                  </NavLink>
                  {(idx < articles.length - 1) && <hr />}
                </li>
              ))}
            </ul>
          )}
        </li>
        <li><NavLink to="/about" className="nav-link">About</NavLink></li>
        <li><NavLink to="/contact" className="nav-link">Contact</NavLink></li>
      </ul>
    </nav>
  )
}

export default Navigation
