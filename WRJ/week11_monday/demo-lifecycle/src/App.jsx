import { useState } from 'react'
import UserList from './comps/UserList'
import './App.css'

function App() {
  const [show, setShow] = useState(true)

  return (
    <div className="container text-center">
      <h2 className="my-4">React Lifecycle Demo {show ? '🤗' : '🫣'}</h2>
      <button className="btn btn-danger mb-3" onClick={() => setShow(!show)}>
        {show ? 'Dölj komponent' : 'Visa komponent'}
      </button>
      {show && <UserList />}
    </div>
  )
}

export default App
