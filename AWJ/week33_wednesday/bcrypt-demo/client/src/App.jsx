import { useState } from 'react'
import bcrypt from 'bcryptjs'

function App() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const register = async () => {
    const hash = await bcrypt.hash(password, 12)

    const res = await fetch("http://localhost:5000/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, hash })
    })

    const data = await res.json()
    if (!res.ok) {
      alert(data.error || "Registration failed")
      return
    }

    alert(data.message)
  }

  const login = async () => {
    const res = await fetch("http://localhost:5000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password })
    })
    const data = await res.json()
    if (!res.ok) {
      alert(data.error || "Login failed")
      return
    }

    alert(data.message)
  }

  return (
    <div className="p-8 flex flex-col gap-4 max-w-sm mx-auto">
      <h1 className="text-2xl font-bold">
        <a
          className="underline inline-block transform hover:scale-105 transition duration-300"
          href="https://www.npmjs.com/package/bcryptjs"
          target="_blank"
        >
          bcryptjs
        </a>{" "} demo
      </h1>
      <input
        type="text"
        className="border p-2"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        className="border p-2"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <div className="flex gap-2">
        <button className="bg-green-500 text-white px-4 py-2 cursor-pointer transform hover:scale-105 transition duration-300" onClick={register}>Register</button>
        <button className="bg-blue-500 text-white px-4 py-2 cursor-pointer transform hover:scale-105 transition duration-300" onClick={login}>Login</button>
      </div>
    </div>
  )
}

export default App
