import { useState } from 'react'

function App() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [jwt, setJwt] = useState('') // lägg i session-/localStorage eller HttpOnly cookie, pleaaaaaase
  const [response, setResponse] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleLogin = async () => {
    setLoading(true)
    setError('')
    setResponse('')
    try {
      const res = await fetch("http://localhost:3000/api/login", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      })
      await new Promise(resolve => setTimeout(resolve, 2000))
      if (!res.ok) {
        setError("Invalid username or password")
      }
      const data = await res.json()
      setJwt(data.token) // sätt det i local-/sessionStorage istället för riktiga applikationer

    } catch (error) {
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }

  const handlePrivateData = async () => {
    setError('')
    try {
      const res = await fetch("http://localhost:3000/api/dashboard", {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${jwt}`
        }
      })

      if (!res.ok) {
        setError(response.url + ' - ' + response.statusText)
      }

      const data = await res.json()
      setResponse(JSON.stringify(data))
    } catch (error) {
      setError(JSON.stringify(error))
      setResponse('Error occurred, check console')
    }
  }

  const handleAdminAccess = async () => {
    setError('')
    try {
      const res = await fetch('http://localhost:3000/api/admin', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${jwt}`,
        },
      })

      if (!res.ok) {
        setError(res.url + ' - ' + res.statusText)
      }

      const data = await res.json()
      setResponse(JSON.stringify(data))
    } catch (error) {
      setError(error.message)
      setResponse('')
    }
  }

  return (
    <div className="min-h-screen bg-gray-900 text-black p-6 rounded-lg shadow-lg">
      <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow">
        <h1 className="text-3xl font-bold mb-6 text-center">JWT demo</h1>

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

        <div className="mb-6">
          <button
            onClick={handleLogin}
            disabled={loading}
            className={`w-full py-2 rounded text-white font-semibold cursor-pointer ${loading ? 'bg-blue-300 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
              } transition`}
          >
            {loading ? 'Loading...' : 'Login'}
          </button>
        </div>

        <hr className="my-6" />

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

        {response && (
          <div className="mb-6">
            <p className="font-mono border-l-8 border-blue-600 bg-blue-100 p-4 break-all max-w-full whitespace-pre-wrap">
              <strong className="block">response:</strong>{response}
            </p>
          </div>
        )}

        {jwt && (
          <div className="mb-6">
            <p className="font-mono border-l-8 border-green-600 bg-green-100 p-4 break-all max-w-full whitespace-pre-wrap">
              <strong className="block">JWT:</strong>{jwt}
            </p>
          </div>
        )}


        <div className="flex space-x-4">
          <button
            onClick={handlePrivateData}
            className="flex-1 bg-gray-800 text-white py-2 rounded hover:bg-gray-900 transition cursor-pointer"
          >
            Get Private Data
          </button>
          <button
            onClick={handleAdminAccess}
            className="flex-1 bg-red-600 text-white py-2 rounded hover:bg-red-700 transition cursor-pointer"
          >
            Admin Only
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
