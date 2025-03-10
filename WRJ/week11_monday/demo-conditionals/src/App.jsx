import { useEffect, useState } from 'react'
import './App.css'
import TodoList from './components/TodoList'
import Loading from './components/Loading'

function App() {
  const [data, setData] = useState(null)

  // states
  // non-reactive data
  // refs

  // useEffect(s) + functions (depending on order it need to executed)

  useEffect(() => {
    const getData = () => {
      fetch("https://jsonplaceholder.typicode.com/todos")
        .then(res => res.json())
        .then(fetchData => setData(fetchData))
    }

    setTimeout(() => {
      getData()
    }, 3000)
  }, [])

  const validateData = () => {
    return data !== null && data.length > 0
  }

  return (
    <>
      {validateData() ? (
        <TodoList data={data} />
      ) : (
        <Loading />
      )}
    </>
  )
}

export default App
