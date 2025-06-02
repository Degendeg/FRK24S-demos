import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [message, setMessage] = useState('')

  const handleMessage = (event) => {
    setMessage(event.target.value)
    localStorage.setItem('message', event.target.value)
  }

  // const handleLogout = () => {
  //   const consent = localStorage.getItem('consent')
  //   localStorage.clear()
  //   localStorage.setItem('cookie_consent', consent)
  // }

  useEffect(() => {
    localStorage.setItem('person', JSON.stringify({
      name: 'sebbe',
      age: 35,
      isTeaching: true
    }))
  }, [])

  return (
    <>
      <input
        type="text"
        placeholder="message"
        value={message}
        onChange={handleMessage}
      />
      <code>useState <strong>message</strong> is: {message}</code>
      <br />
      <code>localStorage <strong>message</strong> is: {localStorage.getItem('message')}</code>
      <br />
      <code>localStorage <strong>person</strong> name is: {localStorage.getItem('person') !== null && JSON.parse(localStorage.getItem('person')).name}</code>
      <br />
      <button onClick={() => localStorage.removeItem('message')}>Remove message in localStorage</button>
    </>
  )
}

export default App
