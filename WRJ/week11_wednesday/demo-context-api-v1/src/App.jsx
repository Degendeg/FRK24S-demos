import './App.css'
import AddBookForm from './components/AddBookForm'
import BookList from './components/BookList'

function App() {
  return (
    <div className="container">
      <div className="card p-4 bg-light shadow-sm p-3 mb-5 bg-body rounded">
        <h1 className="my-4 text-center">Bokhanterare 📚</h1>
        <hr />
        <AddBookForm />
        <hr />
        <BookList />
      </div>
    </div>
  )
}

export default App
