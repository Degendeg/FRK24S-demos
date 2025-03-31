import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"

const Add = () => {
  const [book, setBook] = useState({
    title: "",
    desc: "",
    price: null,
    cover: ""
  })
  const [error, setError] = useState(false)
  const nav = useNavigate()

  const handleChange = (e) => {
    setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleClick = async () => {
    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/books`, book)
      nav("/")
    } catch (err) {
      console.log(err)
      setError(true)
    }
  }

  const isBookValid = !Object.values(book).some(b => b === "" || b === null)

  return (
    <div className="form">
      <h1>Add New Book</h1>
      <div className="form-wrapper">
        <div className="form-content">
          <input
            type="text"
            placeholder="Book title"
            name="title"
            onChange={handleChange}
          />
          <textarea
            rows={5}
            placeholder="Book description"
            name="desc"
            onChange={handleChange}
          />
          <input
            type="number"
            placeholder="Book price"
            name="price"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Book cover"
            name="cover"
            onChange={handleChange}
          />
        </div>
        {(book && book.cover) && (
          <div className="form-image">
            <img src={book.cover} alt="Book over" onError={(e) => e.target.src = location.origin + '/fallback.png'} />
          </div>
        )}
      </div>
      <button onClick={handleClick} disabled={!isBookValid}>Add</button>
      {error && "Something went wrong, try again!"}
      <Link to="/">See all books</Link>
    </div>
  )
}
export default Add