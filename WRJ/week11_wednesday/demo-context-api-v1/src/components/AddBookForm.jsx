import { useContext, useEffect } from 'react'
import { BooksContext } from '../providers/BooksProvider'

const AddBookForm = () => {
  const {
    addBook,
    title,
    setTitle,
    author,
    setAuthor,
    bookAdded,
    setBookAdded
  } = useContext(BooksContext)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (title && author) {
      addBook(title, author)
      setTitle('')
      setAuthor('')
      setBookAdded(true)
    }
  }

  useEffect(() => {
    if (bookAdded) {
      const timer = setTimeout(() => {
        setBookAdded(false)
      }, 2000)
      return () => {
        clearTimeout(timer)
      }
    }
  }, [bookAdded])

  return (
    <div className="container mt-4">
      <h2>Lägg till ny bok</h2>
      <form onSubmit={handleSubmit} className="mb-3">
        <div className="mb-2">
          <input
            type="text"
            className="form-control"
            placeholder="Boktitel"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-2">
          <input
            type="text"
            className="form-control"
            placeholder="Författare"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary mt-3">
          Lägg till bok
        </button>
      </form>
      {bookAdded && (
        <div className="alert alert-success">
          <strong>Bok lades till!</strong>
        </div>
      )}
    </div>
  )
}
export default AddBookForm