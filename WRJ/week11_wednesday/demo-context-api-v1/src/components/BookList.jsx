import { useContext } from 'react'
import { BooksContext } from '../providers/BooksProvider'

const BookList = () => {
  const { books } = useContext(BooksContext)
  return (
    <div className="container mt-4">
      <h2>Boklista 📖</h2>
      <ul className="list-group">
        {books.map((book) => (
          <li key={book.id} className="list-group-item">
            <strong>{book.title}</strong> - {book.author}
          </li>
        ))}
      </ul>
    </div>
  )
}
export default BookList