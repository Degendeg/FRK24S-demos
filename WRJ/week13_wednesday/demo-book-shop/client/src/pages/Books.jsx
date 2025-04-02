import { useEffect, useLayoutEffect, useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios"
import Loading from "../components/Loading"

const Books = () => {
  const [books, setBooks] = useState([])
  const [loading, setLoading] = useState(true)

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        const res = await axios(`${import.meta.env.VITE_API_URL}/books`)
        setBooks(res.data)
      } catch (err) {
        console.log(err)
      } finally {
        setTimeout(() => {
          setLoading(false)
        }, 2000) // 2 sec
      }
    }
    fetchAllBooks()
  }, [])

  const handleDelete = async (book) => {
    if (confirm(`Do you really want to delete ${book.title}?`) == true) {
      try {
        await axios.delete(`${import.meta.env.VITE_API_URL}/books/${book.id}`)
        setBooks(books.filter(b => b.id !== book.id))
      } catch (err) {
        console.log(err)
      }
    }
  }

  return (
    <div>
      <h1>{document.title && document.title.substring(0, 5)} Book Shop</h1>
      <div className="books">
        {loading ? (
          <div className="loading-wrapper">
            <Loading />
          </div>
        ) : (
          <>
            {books.length < 1 && <h2>Inga böcker till salu 🥺</h2>}
            {books.length >= 1 && books.map((book) => (
              <div key={book.id} className="book">
                <img src={book.cover} alt={book.title + ' cover'} />
                <h2>{book.title}</h2>
                <p>{book.desc}</p>
                <span><strong>$</strong>{book.price}</span>
                <button className="deleteBtn" onClick={() => handleDelete(book)}>Delete</button>
                <button className="updateBtn">
                  <Link className="btnLink" to={`/update/${book.id}`}>
                    Update
                  </Link>
                </button>
              </div>
            ))}
          </>
        )}
      </div>
      <button className="addBtn">
        <Link className="btnLink" to="/add">
          Add new book
        </Link>
      </button>
    </div>
  )
}
export default Books