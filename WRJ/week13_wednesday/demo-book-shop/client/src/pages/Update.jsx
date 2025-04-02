import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import axios from "axios"

const Update = () => {
  const [book, setBook] = useState({
    title: "",
    desc: "",
    price: null,
    cover: ""
  })
  const [error, setError] = useState(false)
  const nav = useNavigate()
  const { id } = useParams()

  useEffect(() => {
    const fetchBookById = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/book/${id}`)
        setBook(res.data[0])
      } catch (err) {
        console.log(err)
      }
    }
    fetchBookById()
    window.scrollTo(0, 0)
  }, [])

  const handleChange = (e) => {
    setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleClick = async () => {
    try {
      await axios.put(`${import.meta.env.VITE_API_URL}/books/${id}`, book)
      nav("/")
    } catch (err) {
      console.log(err)
      setError(true)
    }
  }

  const isBookValid = !Object.values(book).some(b => b === "" || b === null)

  return (
    <div className="form">
      <h1>Update {book.title || 'the Book'}</h1>
      <div className="form-wrapper">
        <div className="form-content">
          <input
            type="text"
            placeholder="Book title"
            name="title"
            onChange={handleChange}
            value={book.title || ""}
          />
          <textarea
            rows={5}
            placeholder="Book description"
            name="desc"
            onChange={handleChange}
            value={book.desc || ""}
          />
          <input
            type="number"
            placeholder="Book price"
            name="price"
            onChange={handleChange}
            value={book.price || ""}
          />
          <input
            type="text"
            placeholder="Book cover"
            name="cover"
            onChange={handleChange}
            value={book.cover || ""}
          />
        </div>
        {(book && book.cover) && (
          <div className="form-image">
            <img src={book.cover} alt="Book over" onError={(e) => e.target.src = location.origin + '/fallback.png'} />
          </div>
        )}
      </div>
      <button onClick={handleClick} disabled={!isBookValid}>Update</button>
      {error && "Something went wrong, try again!"}
      <Link to="/">See all books</Link>
    </div>
  )
}
export default Update