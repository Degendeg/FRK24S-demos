import { useEffect, useRef, useState } from 'react'

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('')
  const [error, setError] = useState('')
  const inputRef = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (username.trim()) {
      setError('')
      onLogin(username)
    } else {
      setError('Användarnamnet är tomt, försök igen')
    }
  }

  useEffect(() => {
    inputRef.current.focus()
  }, [])

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-md w-80">
      <h2 className="text-xl font-semibold mb-4">Inloggning</h2>
      <input
        type="text"
        placeholder="Användarnamn"
        value={username}
        ref={inputRef}
        onChange={(e) => setUsername(e.target.value)}
        className={`w-full border rounded px-3 py-2 mb-2 ${error ? 'border-4 border-red-500' : ''}`}
      />
      {error && <p className="text-red-600 text-sm mb-2">{error}</p>}
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded cursor-pointer hover:bg-blue-700"
      >
        Logga in
      </button>
    </form>
  )
}

export default Login
