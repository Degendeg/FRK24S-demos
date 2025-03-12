import { createContext, useState } from 'react'

// Vårt context
export const BooksContext = createContext()

const BooksProvider = ({ children }) => {
  const [books, setBooks] = useState([
    { id: 1, title: "Harry Potter and the Chamber of Secrets", author: "J.K. Rowling" },
    { id: 2, title: "The Great Gatsby", author: "Scott Fitzgerald" },
    { id: 3, title: "Pet Semetary", author: "Stephen King" },
  ])
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [bookAdded, setBookAdded] = useState(false)

  const addBook = (title, author) => {
    setBooks([...books, { id: books.length + 1, title, author }])
  }

  return (
    <BooksContext.Provider value={{ books, addBook, title, setTitle, author, setAuthor, bookAdded, setBookAdded }}>
      {children}
    </BooksContext.Provider>
  )
}

export default BooksProvider