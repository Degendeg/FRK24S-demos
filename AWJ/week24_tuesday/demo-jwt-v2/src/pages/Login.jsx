import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const nav = useNavigate()

  const handleLogin = async () => {
    setLoading(true)
    setError('')
    try {
      const res = await fetch("http://localhost:3000/api/login", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      })
      await new Promise(resolve => setTimeout(resolve, 2000))
      if (!res.ok) {
        setError("Invalid username or password")
        return
      }
      const data = await res.json()
      sessionStorage.setItem('jwt', data.token)
      nav('/profile')
    } catch (error) {
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <h1 className="text-3xl font-bold mb-6 text-center">Login 🙎🏻‍♂️</h1>

      <div className="mb-4">
        <label className="block mb-1 font-semibold" htmlFor="username">
          Username:
        </label>
        <input
          id="username"
          type="text"
          value={username}
          onChange={e => setUsername(e.target.value)}
          className="w-full border border-gray-700 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1 font-semibold" htmlFor="password">
          Password:
        </label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleLogin()}
          className="w-full border border-gray-700 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="mt-5 mb-2">
        <button
          onClick={handleLogin}
          disabled={loading}
          className={`w-full py-2 rounded text-white font-semibold cursor-pointer ${loading ? 'bg-blue-300 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
            } transition`}
        >
          {loading ? 'Loading...' : 'Login'}
        </button>
      </div>

      {loading && (
        <div className="absolute inset-0 bg-gray-900/30 backdrop-blur-sm pointer-events-none z-50 flex items-center justify-center">
          <div className="animate-spin rounded-full h-24 w-24 border-t-8 border-white border-solid"></div>
        </div>
      )}

      {error && (
        <p className="border-l-8 border-red-600 bg-red-100 text-red-700 p-3 mb-4 break-words">
          {error}
        </p>
      )}
    </>
  )
}
export default Login