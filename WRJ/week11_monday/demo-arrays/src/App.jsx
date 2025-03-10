import { useEffect, useState } from 'react'
import './App.css'
import { ThreeDots } from 'react-loader-spinner'
import { v4 as uuidv4 } from 'uuid'
import TodoList from './components/TodoList'

function App() {
  const [todos, setTodos] = useState(null)
  const [name, setName] = useState(null)

  useEffect(() => {
    const getTodos = () => {
      fetch("https://jsonplaceholder.typicode.com/todos")
        .then(res => res.json())
        .then(data => setTodos(data))
    }

    setTimeout(() => {
      getTodos()
    }, 3000)
  }, [])

  /*
    Funktion för att toggla "completed"-status på en todo
    Om todo.id matchar det angivna ID:t, uppdatera "completed"
    Använder spread (...) för att kopiera objektet och ändra endast "completed"
    Ternary-operatorn används för att behålla oförändrade todos
  */
  const completeTodo = (todoId) => {
    const updatedTodos = todos.map((todo) => (
      todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
    ));

    setTodos(updatedTodos);
  };

  const todoObj = {
    todos,
    completeTodo,
    uuidv4
  }

  return (
    <>
      {todos && todos.length > 0 ? (
        <TodoList {...todoObj} />
      ) : (
        <ThreeDots
          visible={true}
          height="80"
          width="80"
          color="#4fa94d"
          radius="9"
          ariaLabel="three-dots-loading"
        />
      )}
    </>
  )
}

export default App
